import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const MainScreen = ({navigation}) => {
    return <View>
        <Button
            title='Go To Strain Explorer'
            onPress = {() => navigation.navigate('Explore')}
        />
    </View>
}

export default MainScreen;