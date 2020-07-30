import React, {useState, useEffect} from 'react';
import {StyleSheet,  View, Text} from 'react-native';
import strainApi from '../api/strain';
import ElevatedView from 'react-native-elevated-view';
import { WebView } from 'react-native-webview';
import { SvgUri, SvgCssUri } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import MyTabs from '../Component/materialNavigator';
import { FlatList } from 'react-native-gesture-handler';
//import CustomScrollView from 'custom-scroll-view'
import { ScrollView } from 'react-native-gesture-handler';

const StrainProfile = ({navigation}) =>{

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
    <View style={{backgroundColor:'black', alignItems:'center', height:'100%', width:'100%'}}>
    <ParallaxScrollView
      backgroundColor="white"//"#212121"
      contentBackgroundColor="black"
      parallaxHeaderHeight={hp('50%')}
      stickyHeaderHeight = {58}
      renderBackgroud = {() =>{
          return <View>
              <SvgUri
              height={hp('50%')}
              width = {wp('100%')}
              uri = {result.imageurl}
          />
          </View>
      }}
      renderStickyHeader = {() => {
        return <View style={{backgroundColor:'#47b880', alignItems:'center', justifyContent:'center', height:58}}>
              <Text>{result.name}</Text>
            </View>
      }}
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center',width:wp('100%') }}>
          <Text style={Style.textStyle}>{result.name}</Text>
        </View>
      )}>
      <View style={{ height:"100%" , width:wp('100%')}}>      
      <Text style={Style.textStyle}>{result.name}</Text>
      <Text style={Style.textStyle}>{result.name}</Text>
      <Text style={Style.textStyle}>{result.name}</Text>      
      </View>
    </ParallaxScrollView>
    </View>
    </SafeAreaView>
    
}

StrainProfile.navigationOptions = () => {
    return {
        header: () => false,
    };
   };

const Style = StyleSheet.create({
    textStyle:{
        fontFamily:'Poppins-Regular',
        color:'white',
        fontSize:100
    }
})


export default StrainProfile
