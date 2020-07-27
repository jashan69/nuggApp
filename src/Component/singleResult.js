import React from 'react';
import {StyleSheet, View ,Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import { SvgUri } from 'react-native-svg';
import { withNavigation } from 'react-navigation';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SingleResult = ({info, navigation, routeName}) => {

   
    
    const buttonNav = () => { //navigation switch
        switch(routeName){
            case 'HeaderEffect':
                return navigation.navigate("Header", {name:info.effect, screen:"Effect"})
            
            case 'HeaderBreed':
                return navigation.navigate("Header", {name:info.breed, screen:"Breed"})
        }
    }

    const buttonColorBreed = (list) =>{
        switch(list.breed){
            case 'Hybrid':
                return {backgroundColor:'#4BC616', borderRadius:30 , height:40, width:130}
            case 'Sativa':
                return {backgroundColor:'#FE002A', borderRadius:30 , height:40, width:130}
            case 'Indica':
                return {backgroundColor:'#A60DF3', borderRadius:30 , height:40, width:130}
        }
    }
    const titleColorBreed = (list) => {
        switch(list.breed){
            case 'Hybrid':
                return {fontSize:wp('4.5%'), color: '#4BC616', fontWeight:'normal'}
            case 'Sativa':
                return {fontSize:wp('4.5%'), color: '#FE002A', fontWeight:'normal'}
            case 'Indica':
                return {fontSize:wp('4.5%'), color: '#A60DF3', fontWeight:'normal'}
        }
    }
    
    
    return(<TouchableOpacity onPress={() => navigation.navigate("Profile", {id:info.id})}>
        <ElevatedView
            elevation={2}
            style={Style.containerStyle}>
        
            <SvgUri
                height="200"
                width = {wp("47.5%")}
                uri ={info.imageurl}
            />
            
            <Text numberOfLines ={1} style={titleColorBreed(info)}>{info.name}</Text>
            <View style={{marginTop:10}}>
            <Button onPress={buttonNav} 
                    title={routeName==="HeaderEffect"? info.effect: info.breed}
                    buttonStyle= {buttonColorBreed(info)}
                    />
            </View>
        </ElevatedView>
        </TouchableOpacity>
    
    )}

const Style = StyleSheet.create({
    
    containerStyle:{
        height:280,
        width:wp('47.5%'),
        alignItems:"center",
        margin:5,
        borderRadius:20,
        backgroundColor:'#212121'

        
    },
    nameStyle:{
        
        fontSize:wp('4.5%'),
        color: "green",
        fontFamily:'Poppins-Regular'
    }
});

export default withNavigation(SingleResult);