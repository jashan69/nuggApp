import React, {useState} from 'react'
import * as Font from 'expo-font'

import { AppLoading } from 'expo';
import AppNav from './navigator/appnav';

const getFonts = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./assets/Fonts/Poppins-Thin.ttf'),
    'Logo-Font': require('./assets/Fonts/Countryside-YdKj.ttf'),
    'Logo-Font2': require('./assets/Fonts/CountrysideTwo-r9WO.ttf')
  })
}

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(fontLoaded){
    return <AppNav/>
  }
  else{
      return <AppLoading
              startAsync={getFonts}
              onFinish={() => setFontLoaded(true)}
            />
  }
}
