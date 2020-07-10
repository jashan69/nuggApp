import React from 'react';
 	
//import SvgUri from 'react-native-svg-uri'; same as image prop
import { SvgUri } from 'react-native-svg';
import {Image,StyleSheet, View, FlatList} from 'react-native';
import {Text, Button} from "react-native-elements";
import {SafeAreaView} from 'react-navigation'

import useStrain from '../hooks/useStrain';
import SingleResult from '../Component/singleResult';


const BreedResult = ({navigation}) => {
    const listBreed = [{name: "Hybrid", title:"Hybrid Strains"}, { name:"Sativa", title:"Sativa Strains"}, { name:"Indica", title:"Indica Strains" }, {name:"See All", title:"See All Strains"}]
    const [result] = useStrain();    
    const breedType = navigation.getParam('name');
    if(breedType==="Hybrid"||"Indica"||"Sativa")
    {var breed = result.filter(x => x.breed === breedType)}
        else{result}
    
    return( 
    <SafeAreaView forceInset={{top:'always'}}>
            <FlatList
                horizontal
                data = {listBreed}
                keyExtractor = {(listBreed) => listBreed.name}
                renderItem = {({item}) => {
                    return<View style={{margin:2, marginBottom:10}}> 
                        <Button
                            type='outline'
                            title = {item.title}
                            onPress = {() => navigation.navigate('Breed', {name:item.name})}
                        /></View>
                }   }
            />

            <FlatList
                style ={{}}
                data = {breed}
                keyExtractor = {(breed) =>breed.id}
                renderItem = {({item})=>{
                    return <View>
                        <SvgUri
                            width="200"
                            height="200"
                            uri={item.imageurl}
                        />
                        </View>
                }   }
            />
        {breed != 0?<Text h2>{breed.length}</Text>:<Text h2>{result.length}</Text>}
    </SafeAreaView>)
    
};
BreedResult.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const Style = StyleSheet.create(
    {imageStyle:{
    width:349,
    height:200,
    borderRadius:10,
    }
    
});

export default BreedResult