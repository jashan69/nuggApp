import React, {useState, useEffect} from 'react';
import strainApi from '../api/strain'
import {View, Text, FlatList} from 'react-native';
import SingleResult from '../Component/singleResult';
import Axios from 'axios';


const HeaderScreenEffect = ({navigation}) => {

    const[result, setResult] = useState([])
    useEffect(()=>{
        const source = Axios.CancelToken.source()
        const apiRequest = async() => {
          try {
    
            const response = await strainApi.get('/strain',{cancelToken:source.token,})
            setResult(response.data)
          }catch(e){
            if(Axios.isCancel(e)){}else{
              throw Error
            }
          }
        }
        apiRequest()
        return()=>{
          source.cancel()
        }
      },[])
    
    const type = navigation.getParam('screen')
    const effectType = navigation.getParam('name')
    console.log("Effect Type is :" + effectType)
    
    if(type === 'Effect'){
    var effect = result.filter(x=>x.effect === effectType)
    }
    else{
    var effect = result.filter(x=>x.breed === effectType)
    }

    return(
        <View style={{justifyContent:'center', backgroundColor:'black'}}>
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
                            routeName = {type==="Effect"?"HeaderBreed":"HeaderEffect"}
                            
                        />
                    </View>
                }   }
            />
        </View>
    );
}
HeaderScreenEffect.navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('name'),
        headerStyle:{
            backgroundColor:'#212121'
        },
        headerTitleStyle:{
            color:'white'
        },
        headerTintColor:'white'
      };
    };

export default HeaderScreenEffect