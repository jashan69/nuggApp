import React, {useState} from 'react';
import {View, StyleSheet,  FlatList} from 'react-native';
import {Text, SearchBar, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import CollectionScroll from '../Component/collectionScroll'





const ExploreScreen = () => {
    const weedname = [{name:"Purple Haze"}, {name:"Khalifa Kush"}, {name:"OG Kush"}, {name:"Pineapple Express"}, {name:"Lemon Haze"}];
    const weedname2 = [{name:"Purple Haze"}, {name:"Khalifa Kush"}, {name:"OG Kush"}, {name:"Pineapple Express"}, {name:"Lemon Haze"}]
    const imageSrc = [{name: "Hybrid", link:"https://www.jaarx.com/images/hybrid.png"},
                      { name:"Sativa", link:"https://www.jaarx.com/images/sativa.png"},
                      { name:"Indica", link:"https://www.jaarx.com/images/indica.png"}]
    const feelingList = [{name: "Happy", link:""},
                         {name: "Aroused", link:""},
                         {name: "Relax", link:""},
                         {name: "Energetic", link:""},
                         {name: "Tingly", link:""},
                         {name: "Hunger", link:""},
                         {name: "Europhic", link:""},
                         {name: "Giggly", link:""},
                         {name: "Focused", link:""},
                         {name: "Talkative", link:""},
                         {name: "Sleepy", link:""},
                         {name: "Uplifted", link:""}]
                      
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            
            <SearchBar
                placeholder = 'Search The Strain'
                value={search}
                onChangeText = {(text) => setSearch(text)}
                platform = 'ios'
            />
            <Text h3 style={Style.headerText}>Best Strains Around The Globe</Text>
            <View style={Style.listStyle}>
            <FlatList style = {{marginTop:10}}
                data = {weedname2}
                keyExtractor = {(weedname2) => weedname2.name }
                renderItem = {({item}) => {
                    return <Button title = {item.name} raised containerStyle={Style.listElement1}/>
                }}
            />
            <FlatList style = {{marginTop:10}}
                data = {weedname}
                keyExtractor = {(weedname) => weedname.name }
                renderItem = {({item}) => {
                    return <Button title = {item.name} raised containerStyle = {Style.listElement2} />
                }}
            />
            </View>
            <CollectionScroll
                arrayName = {imageSrc}
                headerText = "Collection By Breed Type"
            />
            
         </SafeAreaView>
        
        
    );
};

ExploreScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const Style = StyleSheet.create({
    headerText:{
        marginLeft:10
    },
    listStyle:{
        flexDirection:"row-reverse"
    },
    listElement1:{
        margin:2,
        marginRight:10
    },
    listElement2:{
        margin:2,
        marginLeft:10
    },
    buttonStyle:{
        color:'green'
    }
});

export default ExploreScreen;



