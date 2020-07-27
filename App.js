import React, {useState} from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font'
import ExploreScreen from './src/Screen/exploreScreen';
import BreedResult from './src/Screen/breedResult';
import MainScreen from './src/Screen/mainExplore';
import EffectResult from './src/Screen/effectResult';
import StrainProfile from './src/Screen/strainProfile';
import HeaderScreenEffect from './src/Screen/headerScreenEffect';

import { AppLoading } from 'expo';

const getFonts = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./assets/Fonts/Poppins-Thin.ttf')
  })
}

const navigator = createSwitchNavigator({
    mainFlow:createStackNavigator({
    Main:MainScreen,
    Explore: ExploreScreen,
    Breed: BreedResult,
    Effect:EffectResult,
    Profile: StrainProfile,
    Header: HeaderScreenEffect
    })
},{
  initialRouteName: 'mainFlow',
  defaultNavigationOptions: {
    title: "Broccoli"}
  });

const App = createAppContainer(navigator);
export default () => {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(fontLoaded){
    return <App/>
  }
  else{
      return <AppLoading
              startAsync={getFonts}
              onFinish={() => setFontLoaded(true)}
            />
  }
}
