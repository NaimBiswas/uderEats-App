/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Icon } from 'react-native-elements';

const SearchBarCom = () => {
const [Location, setLocation] = useState('');
console.log(Location);
    return (
        <View>
        {/* <View style={styles.container}>
            <Icon style={styles.icon} name="ios-location" type="ionicon" color="#020202" size={28} />
           <TextInput
           color="#030303"
           fontSiz={17}
           placeholder={'Enter Location'}
           style={styles.textInput}
           />
           <Text onPress={() => setLocation('Hello')} style={styles.searchText}>Search</Text>
        </View>  */}
        <View style={{flexDirection:'row'}}>
        <GooglePlacesAutocomplete
            placeholder="Enter Location"
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            renderLeftButton={() => (
                <View >
                    <Icon style={styles.icon} name="ios-location" type="ionicon" color="#020202" size={28} />
                </View>
            )}
            renderRightButton={() => (
                <View>
                    <Text  style={styles.searchText}>Search</Text>
                </View>
            )}
            styles={{
                textInputContainer:{
                    backgroundColor:'#F2CC0C',
                    flexDirection:'row',
                    alignItems: 'center',
                    margin:'5%',
                    borderRadius: 30,
                },
                  textInput: {
                    backgroundColor: '#F2CC0C',                  
                    borderRadius: 30,
                
                    marginTop:4,
                    
                  },
            }}
           
       />
        </View>
        </View>
    );
};


const styles = StyleSheet.create({
    icon:{
        paddingLeft:5,
    },
    searchText:{
        backgroundColor:'#020202',
        padding:16,
        borderRadius:30,
        color:'#f2f2f2',
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:1,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    },
    textInput:{
        width:'55%',
    },
    container:{
        flexDirection:'row',
        alignSelf:'center',
        backgroundColor:'#F2CC0C',
        borderRadius:30,
        marginTop:'5%',
        height:45,
   },
});

export default SearchBarCom;
