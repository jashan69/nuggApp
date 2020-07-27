import React, {useState, useEffect} from 'react';
import {StyleSheet,  View, Text} from 'react-native';
import strainApi from '../api/strain';
import ElevatedView from 'react-native-elevated-view'
import { WebView } from 'react-native-webview';
import { SvgUri, SvgCssUri } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const StrainProfile = ({navigation}) =>{
    
    const colorBreed = (list) =>{
        switch(list.breed){
            case 'Hybrid':
                return '#4BC616'
            case 'Sativa':
                return '#FE002A'
            case 'Indica':
                return '#A60DF3'
        }
    }
    //API Call For the Result
    const id = navigation.getParam('id')
    const[result, setResult] = useState([])
    const searchApi = async () => {
        const response = await strainApi.get(`/strain/${id}`);
        setResult(response.data) 
    }
    useEffect(() =>{
        searchApi();
    },[])
    console.log(result)
    
    return <SafeAreaView style={{backgroundColor:'black'}}> 
    <View style={{backgroundColor:'black', alignItems:'center'}}>
        <SvgUri
            height= {hp('48%')}
            width = '100%'
            uri = {result.imageurl}
        />
        <Text style={{color:colorBreed(result),fontWeight:'normal', fontSize:wp('8.7%')}}>{result.name}</Text>
        <ElevatedView style={{marginTop:10, marginBottom:10,backgroundColor:'#7417EF', borderRadius:45, width:wp('95%'), height:100}} 
        elevation={5}>
        <SvgCssUri
            style = {{justifyContent:'flex-start', flexDirection:'row'}}
            height='50'
            width = '50'
            uri='https://www.jaarx.com/images/night.svg'
        />
        </ElevatedView>
        <ElevatedView style={{marginTop:10, marginBottom:10,backgroundColor:'#FDC100', borderRadius:45, width:wp('95%'), height:100}} 
        elevation={5}>
        </ElevatedView>
        
    </View>
    </SafeAreaView>
    
}

StrainProfile.navigationOptions = () => {
    return {
        header: () => false,
      };
    };

export default StrainProfile
