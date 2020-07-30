import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import useStrain from '../hooks/useStrain'
import {SearchBar} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createFilter } from 'react-native-search-filter';
import Searchitem from '../Component/searchItem';

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const keys = ['name', 'effect','breed','time']
    const[result] = useStrain();
    var strain=[]

    if(search != ''){
        strain = result.filter(createFilter(search, keys))
        console.log(strain)
    }
    
    const clearhandler = () => {
        strain.splice(0, strain.length)
    }

    

return(
    <SafeAreaView style = {{backgroundColor:'black'}}>
        <View style={{backgroundColor:'black', height:"100%", width :"100%"}}>

            <SearchBar
                searchIcon = {Style.iconStyle}
                clearIcon = {Style.iconStyle}
                cancelIcon = {Style.iconStyle}
                inputStyle = {Style.inputStyle}
                placeholderTextColor = 'gray'
                placeholder='Search fo strains'
                value = {search}
                onChangeText = {(text) => {setSearch(text)}}
                platform = 'android'
                onClear = {clearhandler}    
                containerStyle = {{backgroundColor:'#212121'}}           
            />
            <FlatList
                data={strain}
                keyExtractor = {(strain) => {strain.id}}
                renderItem = {({item}) => {
                    return <Searchitem
                        list = {item}
                    />
                }}
            />
            
        </View>
        </SafeAreaView>
    );
}

const Style = StyleSheet.create({
    inputStyle:{
        color:'gray'
    },
    iconStyle:{
        color:'#47b880'
    }
})

SearchScreen.navigationOptions = () => {
    return {
        header:() => false
    }
}
export default SearchScreen;