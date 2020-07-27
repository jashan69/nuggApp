import React from 'react';
import useStrain from '../hooks/useStrain';
import { View, FlatList} from 'react-native';
import {Button} from "react-native-elements";
import SingleResult from '../Component/singleResult';
import { SafeAreaView } from 'react-native-safe-area-context';

const BreedResult = ({navigation}) => {

    const listBreed = [{name: "Hybrid", title:"Hybrid Strains"}, { name:"Sativa", title:"Sativa Strains"},
    { name:"Indica", title:"Indica Strains" }] // Scroller Array
    
    const[result] = useStrain();

    const breedType = navigation.getParam('name');
    console.log( "Breed Type is :" + breedType)
    var breed = result.filter(x => x.breed === breedType) // Filter Logic
    return <View style={{backgroundColor:'black'}}>
           <SafeAreaView forceInset={{top:'always'}}>
           <View style={{alignItems:'center'}}>
            
            <FlatList //breed type list
                showsHorizontalScrollIndicator={false}
                horizontal
                data = {listBreed}
                keyExtractor = {(listBreed) => listBreed.name}
                renderItem = {({item}) => {
                    return<View style={{margin:4, marginBottom:10}}> 
                        <Button
                            titleStyle={{color:'white'}}
                            buttonStyle={{borderColor:"white", borderWidth:1}}
                            type='outline'
                            title = {item.title}
                            onPress = {() => navigation.navigate("Header", {name:item.name, screen: "Breed"})}
                        /></View>
                }   }
            /></View>
            <View style={{justifyContent:'center'}}>
            <FlatList // strain info list
                showsVerticalScrollIndicator={false}
                removeClippedSubviews = {true}
                maxToRenderPerBatch={6}
                windowSize={10}
                numColumns='2'
                data = {breed}
                keyExtractor = {(breed) =>breed.name}
                renderItem = {({item})=>{
                    return <View>
                        <SingleResult
                            info = {item} 
                            routeName = "HeaderEffect"
                            
                        />
                    </View>
                }   }
            />
            </View>
    </SafeAreaView>
    </View>
    
    
};
BreedResult.navigationOptions = () => {
    return {
        header: () => false,
    };
   };

export default BreedResult;