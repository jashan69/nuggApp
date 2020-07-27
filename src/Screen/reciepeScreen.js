import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import strainApi from '../api/strain'

const ReciepeScreen = () => {
    const id = 2
    const[result, setResult] = useState([])
    const searchApi = async () => {
        const response = await strainApi.get(`/recipe/${id}`);
        setResult(response.data) 
    }
useEffect(() =>{
    searchApi()
},[])

console.log(result.ingredients)
if(result != undefined && result.length != 0){
var sample = result.ingredients
var item = []
item = sample.split(';')
console.log(item)
}
return<Text>{sample}</Text>}
export default ReciepeScreen