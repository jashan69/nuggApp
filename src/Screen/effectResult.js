import React from 'react';
import { View, FlatList} from 'react-native';
import {Button} from "react-native-elements";
import {SafeAreaView} from 'react-navigation'
import useStrain from '../hooks/useStrain';
import SingleResult from '../Component/singleResult';

const EffectResult = ({navigation}) => {
    const listBreed = [{name: "Uplifted", title:"Uplifted Strains"}, { name:"Relaxed", title:"Relaxed Strains"},
        { name:"Sleepy", title:"Sleepy Strains" }, {name:"Talkative", title:"Talkative Strains"}, {name:"Aroused", title:"Aroused Strains"},
        {name:"Euphoric", title:"Euphoric Strains"}, {name:"Tingly", title:"Tinglish Strains"}, {name:"Happy", title:"Happy Strains"},
        {name:"Focused", title:"Focused Strains"}, {name:"Giggly", title:"Giggly Strains"}, {name:"Energetic", title:"Energetic Strains"}] // Scrooler Array Feeling
        
    const[result] = useStrain();
    
    const effectType = navigation.getParam('name');
    console.log("Effect Type is :" + effectType)
    var effect = result.filter(x => x.effect === effectType) // Filter Logic
        
    return( 
            <View style={{backgroundColor:'black'}}>
            <SafeAreaView forceInset={{top:'always'}}>
    
            <View style={{alignItems:'center'}}>
            <FlatList   //effect type list
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
                            onPress = {() => navigation.navigate("Header", {name:item.name,screen:'Effect' })}
                        /></View>
                }   }
            /></View>
            
            <FlatList // strain info list
                showsVerticalScrollIndicator={false}
                removeClippedSubviews = {true}
                maxToRenderPerBatch={6}
                windowSize={10}
                numColumns='2'
                data = {effect}
                keyExtractor = {(effect) =>effect.name}
                renderItem = {({item})=>{
                    return <View>
                        <SingleResult
                            info = {item} 
                            routeName = "HeaderBreed"
                            
                        />
                    </View>
                }   }
            />
    </SafeAreaView>
    </View>)
    
};
EffectResult.navigationOptions = () => {
    return {
        header: () => false,
      };
    };
export default EffectResult;