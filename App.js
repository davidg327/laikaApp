/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;

