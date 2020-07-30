import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Icon} from 'react-native-elements'
import {withNavigation} from 'react-navigation'


const LogoHeader = ({navigation}) => {
    return <ElevatedView elevation={5} style={Style.containerStyle}>
            <Text style={Style.headerStyle}>Broccoli</Text>
            <Icon name = 'search' type = 'feather' iconStyle={Style.iconStyle} size ={28} color = '#47b880' onPress = {() => navigation.navigate('Search')}  />
        </ElevatedView>
    
}

const Style = StyleSheet.create({
    containerStyle:{
        width:'100%', 
        height:65,
        backgroundColor:'#212121',  
        justifyContent:'space-between',
        opacity:0.8,
        flexDirection:'row',
        padding:10,
        paddingRight:20
              
    },
    headerStyle:{
        
        fontSize:30, 
        fontFamily:'Logo-Font', 
        color:'#47b880', 
        
        marginLeft:20
    },
    iconStyle:{
        marginTop:8
    }
})

export default withNavigation(LogoHeader)