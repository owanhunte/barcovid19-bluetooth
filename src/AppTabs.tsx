import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootTabsParamList } from 'types';
import HomeDrawerScreen from 'screens/HomeDrawerScreen';
import NewsDrawerScreen from 'screens/NewsDrawerScreen';
import ImmigrationDrawerScreen from 'screens/ImmigrationDrawerScreen';
import StatsDrawerScreen from 'screens/StatsDrawerScreen';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const sharedStyles = {
  paddingBottom: 5,
  paddingTop: 6,
};

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'home' : 'home-outline';

          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Immigration') {
            iconName = focused ? 'airplane' : 'airplane-outline';
          } else if (route.name === 'Stats') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: sharedStyles,
      }}
      initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={HomeDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Dashboard', { screen: 'Dashboard' });
          },
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('News', { screen: 'News' });
          },
        })}
      />
      <Tab.Screen
        name="Immigration"
        component={ImmigrationDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Immigration', { screen: 'Immigration' });
          },
        })}
      />
      <Tab.Screen
        name="Stats"
        component={StatsDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Stats', { screen: 'Stats' });
          },
        })}
      />
    </Tab.Navigator>
  );
}
