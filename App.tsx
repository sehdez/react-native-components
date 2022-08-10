import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';


const App = () => {
    return (
        <NavigationContainer>
            <StatusBar
                translucent={true}
                backgroundColor='rgba(0,0,0,0.1)'
                barStyle='light-content'
            />
            <StackNavigator />
        </NavigationContainer>
    )
}


export default App
