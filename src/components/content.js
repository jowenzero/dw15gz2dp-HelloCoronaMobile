import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../_actions/article";  

const Content = () => {
    const article = useSelector(state => state.article.data);
    const loading = useSelector(state => state.article.loading);
    const error = useSelector(state => state.article.error);
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getArticles());
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const data = article.map((item, index) => (
        <Text>{item.user.fullName}{"\n"}{item.title}{"\n"}</Text>
    ))


    return (
        <View>
            <View style={styles.middleTitle}>
                <Text style={styles.title}>Artikel Hari Ini</Text>
            </View>
            <View style={styles.articlePos}>
                <View style={styles.articleArea} />
                <View style={styles.articleArea} />
                <View style={styles.articleArea} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    middleTitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF6185"
    },
    articlePos: {
        marginTop: 60,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    articleArea: {
        width: 150, 
        height: 195, 
        marginLeft: 15, 
        marginRight: 5,
        marginBottom: 15,
        backgroundColor: 'skyblue'
    }
})

export default Content;