import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../Screens/News/News';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;