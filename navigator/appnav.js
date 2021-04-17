import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EffectResult from '../src/Screen/effectResult';
import ExploreScreen from '../src/Screen/exploreScreen';
import HeaderScreenEffect from '../src/Screen/headerScreenEffect';
import MainScreen from '../src/Screen/mainExplore';
import SearchScreen from '../src/Screen/searchScreen';


const weedStack = createStackNavigator();

const WeedStack =()=> {
    return (
      <weedStack.Navigator>
        <weedStack.Screen name="Main" component={MainScreen} />
        <weedStack.Screen name="Explore" component={ExploreScreen} />
        <weedStack.Screen name="Effect" component={EffectResult} />
        <weedStack.Screen name="Search" component={SearchScreen} />
        <weedStack.Screen name="Header" component={HeaderScreenEffect} />
      </weedStack.Navigator>
    );
}

const mainStack = createStackNavigator();

const AppNav = () => {

    return(
        <NavigationContainer>
            <mainStack.Navigator>
                <mainStack.Screen name='Weed' component={WeedStack} />
            </mainStack.Navigator>
        </NavigationContainer>
    )

}

export default AppNav