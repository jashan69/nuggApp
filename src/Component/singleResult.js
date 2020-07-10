import React from 'react';
import {StyleSheet, View ,Image} from 'react-native';
import {Text, Button} from 'react-native-elements';

const SingleResult = (data) => {
    return<View>
        <Text>{data.name}</Text>
        
    </View>
}

const Style = StyleSheet.create({
    imageStyle:{
        width:349,
        height:200,
        borderRadius:10,
        
       },
});

export default SingleResult;