import React from 'react';
import { StyleSheet, View } from 'react-native';
import Jumbotron from '../components/jumbotron';
import Content from '../components/content';

const Home = () => {
  return (
    <View>
      <Jumbotron/>
      <Content/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Home;