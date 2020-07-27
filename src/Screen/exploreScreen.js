import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import CollectionScroll from '../Component/collectionScroll'
import useStrain from '../hooks/useStrain';
import StrainScroll from '../Component/strainScroll'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';






const ExploreScreen = () => {
    
    const [result] = useStrain();
    const imageSrc = [{name: "Hybrid", link:"https://www.jaarx.com/images/hybrid.svg"},
                      { name:"Indica", link:"https://www.jaarx.com/images/indica.svg"},
                      { name:"Sativa", link:"https://www.jaarx.com/images/sativa.svg"}]

    const feelingList = [{name: "Relaxed", link:"https://jaarx.com/images/Group_2387.png"},
                         {name: "Talkative", link:"https://jaarx.com/images/Group_2389.png"},
                         {name: "Sleepy", link:"https://jaarx.com/images/Group_2390.png"},
                         {name: "Uplifted", link:"https://jaarx.com/images/Group_2388.png"},
                         {name: "Happy", link:"https://jaarx.com/images/Group_2392.png"},
                         {name: "Aroused", link:"https://jaarx.com/images/Group_2393.png"},
                         {name: "Euphoric", link:"https://jaarx.com/images/Group_2395.png"},
                         {name: "Focused", link:"https://jaarx.com/images/Group_2391.png"},
                         {name: "Tingly", link:"https://jaarx.com/images/Group_2394.png"},
                         {name: "Giggly", link:"https://jaarx.com/images/Group_2397.png"},
                         {name: "Energetic", link:"https://jaarx.com/images/Group_2396.png"}]
                      
   
    return (
        
        <View style={{backgroundColor:'black'}}>
        <SafeAreaView forceInset={{top:'always'}}>
        <ScrollView style={{backgroundColor:'black'}}>
        
            <Text style={Style.headerText}>Strains Around The Globe</Text>      
            <FlatList                                                        // Best Strain List
                style = {{marginTop:12}}
                data = {result}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews = {true}
                maxToRenderPerBatch={4}
                windowSize = {10}
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    return <StrainScroll
                        list = {item}
                    />
                }}
           />

            <CollectionScroll    //Breed Type Scroll 
                arrayName = {imageSrc}
                headerText = "Collection By Breed"
                routeName = "Breed"
            />

            <CollectionScroll
                arrayName = {feelingList}
                headerText = "Collection By Effects"
                routeName = "Effect"
            />
        </ScrollView>    
        </SafeAreaView>
        </View>
        
    );
};

ExploreScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const Style = StyleSheet.create({
    headerText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:hp('3.5%'),
        marginLeft:5,
        color:'white',
        borderEndWidth:0,
        borderBottomWidth:1,
        borderBottomColor:'white',
        padding:5,
        marginTop:10
    }
});

export default ExploreScreen;



