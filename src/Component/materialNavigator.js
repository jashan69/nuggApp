import React from 'react'
import{View, SafeAreaView, Text} from 'react-native'
import { createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import ExploreScreen from '../Screen/exploreScreen';
//import MainScreen from '../Screen/mainExplore';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
import BreedList from '../Component/breedList'

function MyTabs() {
  const first = 'Sativa';
  const second = 'Indica';
  const third = 'Hybrid'  
  return (
  
    <NavigationContainer>
    <SafeAreaView>
    <Tab.Navigator>
    
    <Tab.Screen name="Sativa" component={()=><BreedList type={first}/>}/>
    <Tab.Screen name="Indica" component={()=><BreedList type={second}/>}/>
    <Tab.Screen name="Hybrid" component={()=><BreedList type={third}/>}/>

    </Tab.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  );
}

MyTabs.navigationOptions = () => {
  return {
      header: () => false,
  };
 };

export default createAppContainer(MyTabs);