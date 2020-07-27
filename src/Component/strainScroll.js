import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements'
import { SvgUri } from 'react-native-svg';
import ElevatedView from 'react-native-elevated-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { withNavigation } from 'react-navigation';

const StrainScroll = ({list, navigation}) => {
    const colorBreed = (list) =>{
        switch(list.breed){
            case 'Hybrid':
                return {backgroundColor:'#4BC616', borderRadius:30 , height:40, width:150}
            case 'Sativa':
                return {backgroundColor:'#FE002A', borderRadius:30 , height:hp('5%'), width:150}
            case 'Indica':
                return {backgroundColor:'#A60DF3', borderRadius:30 , height:40, width:150}
        }
    }

    const colorBreed2 = (list) =>{
        switch(list.breed){
            case 'Hybrid':
                return '#4BC616'
            case 'Sativa':
                return '#FE002A'
            case 'Indica':
                return '#A60DF3'
        }
    }
    return(
        <TouchableOpacity onPress={() => navigation.navigate("Profile", {id:list.id})}>
        <ElevatedView elevation ={3} style={Style.containerStyle}>
            <SvgUri
                height = "250"
                width = {wp('65%')}
                uri = {list.imageurl}
            />
            <Text numberOfLines={1}  style={{fontFamily:'Poppins-Regular', fontSize:wp('5%'), color:colorBreed2(list)}}>{list.name}</Text>
            <Button
                containerStyle = {{marginTop:4}}
                title={list.breed}
                buttonStyle = {colorBreed(list)}
            />
        </ElevatedView></TouchableOpacity>
        
    );
}

const Style = StyleSheet.create({
    containerStyle:{
        height:hp('45%'),
        width:wp('65%'),
        alignItems:'center',
        margin:10,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        paddingBottom:20,
        backgroundColor:'#212121'
    }
});

export default withNavigation(StrainScroll)