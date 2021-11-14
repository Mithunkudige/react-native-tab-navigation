import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Setting from '../screens/Settings';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
          screenOptions={{
              headerShown: false, tabBarStyle: {
                  height: 60,
                  position: 'absolute',
                  bottom: 15,
                  right: 15,
                  left: 15,
                  borderRadius: 10,
        }}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        //   tabBarLabel: 'Home',
            tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
            // tabBarLabel: 'Welcome',
            tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
        />
        <Tab.Screen
        name="Details"
        component={Details}
        options={{
        //   tabBarLabel: 'Details',
        tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          )
        }}
          />
          <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
            // tabBarLabel: 'Setting',
            tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;