/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchBarCom from './components/SearchBarCom/SearchBarCom';


const App = () => {
  const [ButtonChange, setButtonChange] = useState('delivery');

  console.log(ButtonChange);

  return (
    <SafeAreaView style={{'paddingTop':20}} >
      <StatusBar
     backgroundColor={'white'}
     barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <Pressable
        onPress={() =>setButtonChange('delivery')}
        style={ButtonChange === 'delivery' ? styles.pressable : styles.pressableTwo}>

          <Text 
          style={ButtonChange === 'delivery' ? styles.pressableText : styles.pressableTextTwo}>Delivery</Text></Pressable>

        <Pressable
        onPress={() =>setButtonChange('pickup')}
        style={ButtonChange === 'pickup' ? styles.pressable : styles.pressableTwo}
    >
          <Text 
          onPress={() =>setButtonChange('pickup')}
          style={ButtonChange === 'pickup' ? styles.pressableText : styles.pressableTextTwo}> Pickup</Text></Pressable>
      </View>

    {/* search bar Component  */}
    <SearchBarCom/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pressableTextTwo:{
    color:'#020202',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
  pressableText:{
    color:'#f2f2f2',
    fontSize:16,
    fontWeight:'bold',
    letterSpacing:1,

  },
  pressableTwo:{
    paddingHorizontal:30,
    paddingVertical:8,
    borderRadius:30,
   verticalAlign:'middle',
  },
  pressable:{
    backgroundColor:'#010101',
    paddingHorizontal:30,
    paddingVertical:8,
    borderRadius:30,

   verticalAlign:'middle',
  },
  container:{
    flexDirection:'row',
    alignSelf:'center',
    backgroundColor:'#F2CC0C',
    borderRadius:30,
  },
});

export default App;
