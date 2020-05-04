import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native'; 
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../_actions/article";
import ContentItem from '../components/content_item';

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
        <ContentItem item={item} key={index}/>
    ))


    return (
        <View>
            <View style={styles.middleTitle}>
                <Text style={styles.title}>Artikel Hari Ini</Text>
            </View>
            <View style={{position: 'relative', top: 50}}>
                <ScrollView contentContainerStyle={styles.articleArea}>
                    { (!loading && !error) && data }
                </ScrollView >
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
    articleArea: {
        flexDirection: "row",
        flexWrap: "wrap",
        minHeight: 10,
        paddingBottom: 290
    },
})

export default Content;