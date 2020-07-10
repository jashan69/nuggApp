import React from 'react';
import {View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {withNavigation} from 'react-navigation'


const CollectionScroll = ({arrayName, headerText, navigation}) => {
    return <View>
        <Text h3 style={{margin:10}}>{headerText}</Text>
        <FlatList
                horizontal = {true}
                data = {arrayName}
                keyExtractor = {(arrayName) => arrayName.name}
                renderItem = {({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('Breed',  {name:item.name})}><Image
                        style= {Style.imageStyle}
                        source = {{uri:item.link}}
                    /></TouchableOpacity>
                }}
                
            />
    </View>
};

const Style = StyleSheet.create({
    imageStyle:{
        height:160,
        width:160,
        margin:10
    }
})

export default withNavigation(CollectionScroll);