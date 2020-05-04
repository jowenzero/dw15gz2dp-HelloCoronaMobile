import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import JumbotronPic from '../icons/Jumbotron.png';
import ConsultButton from '../icons/ConsultButton.png';

const Jumbotron = () => {
    return (
        <View style={styles.jumbotronArea}>
            <Image source={JumbotronPic} style={styles.jumbotron}></Image> 
            <TouchableOpacity style={styles.buttonPos} onPress={() => alert('Redirects to Consultation Form')}>
            <Image source={ConsultButton} style={styles.button}></Image>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    jumbotronArea: {
        height: 110,
        backgroundColor: "#FF6185"
    },
    jumbotron: {
        width: "100%",
        height: 100,
    },
    buttonPos: {
        position: 'relative',
        top: -35,
        left: 20,
    },
    button: {
        height: 27,
        aspectRatio: 5.0, 
    },
})

export default Jumbotron;