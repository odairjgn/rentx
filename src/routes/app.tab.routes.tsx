import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';
import { AppStackRoutes } from './app.stack.routes';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Inicio"
                component={AppStackRoutes}
            />
            <Screen
                name="Profile"
                component={Home}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />           
        </Navigator>
    );
}