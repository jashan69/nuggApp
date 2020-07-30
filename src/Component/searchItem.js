import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation'
import { SvgUri } from 'react-native-svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const colorBreed = (list) =>{
    switch(list.breed){
        case 'Hybrid':
            return '#00b04b'
        case 'Sativa':
            return '#b64fc8'
        case 'Indica':
            return '#e43f5a'
    }
}

const SearchItem = ({list, navigation}) => {
    return <TouchableWithoutFeedback onPress={() =>navigation.navigate('Profile',{id:list.id})}> 
        <View style ={{flexDirection:'row', marginBottom:7}}>
        <SvgUri height='65' width = '65' uri={list.imageurl} style={{marginLeft:8}}/>
        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10}}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize:18, color:"white"}}>{list.name}</Text>
        <Text style={{fontFamily:'Poppins-Light', fontSize:15, color:colorBreed(list)}}>{list.breed}</Text>
        </View>
        </View>
    </TouchableWithoutFeedback>
}

const Style = StyleSheet.create({})

export default withNavigation(SearchItem);