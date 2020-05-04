import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'; 
import Markdown from 'react-native-markdown-display';


const ContentItem = ({item}) => {
    const imageLink = "../images/Thumbnail" + 1 + ".png"

    function truncTitle(text) {
        return text.length > 35 ? `${text.substr(0, 35)}...` : text;
    }

    function truncText(text) {
        return text.length > 65 ? `${text.substr(0, 65)}...` : text;
    }

    return (
        <View style={styles.articleArea}>
            <Image source={require(imageLink)} style={styles.image}></Image> 
            <Text style={styles.text}>{truncTitle(item.title)}</Text>
            <View style={styles.textPos}>
                <Markdown>
                    {truncText(item.description)}
                </Markdown>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    articleArea: {
        width: 150, 
        height: 195, 
        marginLeft: 15, 
        marginRight: 5,
        marginBottom: 15,

        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderRadius: 5,
    },
    image: {
        width: 150,
        height: 90,

        borderRadius: 5
    },
    textPos: {
        top: -5,
    },
    text: {
        fontWeight: "bold",
    }
})

export default ContentItem;