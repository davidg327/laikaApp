import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  DeliveryTime  from '../views/deliveryTime';
import ShippingInformation from '../views/information';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Delivery"
                options={{
                    headerShown: false
                }}
                component={DeliveryTime}
            />
            <Stack.Screen
                name="Information"
                options={{
                    headerShown: false
                }}
                component={ShippingInformation}
            />
        </Stack.Navigator>
    )
};

export default  Navigation;
