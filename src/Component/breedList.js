import React from 'react';
import {View, Text} from 'react-native';
import useStrain from '../api/strain'
import SingleResult from './singleResult'

const BreedList = ({type}) => {


const [result] = useStrain();
var breed = result.filter(x => x.breed === type)
return <View>
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
}

export default BreedList