import React from 'react';
import {View,  FlatList} from 'react-native';
import SingleResult from '../Component/singleResult';
import useStrain from '../hooks/useStrain'


const HeaderScreenEffect = ({navigation}) => {
    
    const [result] = useStrain();
    
    const type = navigation.getParam('screen')
    const effectType = navigation.getParam('name')
    console.log("Effect Type is :" + effectType)
    
    if(type === 'Effect'){
    var effect = result.filter(x=>x.effect === effectType)
    }
    else{
    var effect = result.filter(x=>x.breed === effectType)
    }
    console.log(effect)

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
            color:'#47b880'
        },
        headerTintColor:'#47b880'
      };
    };

export default HeaderScreenEffect