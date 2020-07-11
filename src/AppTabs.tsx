import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootTabsParamList } from 'types';
import HomeDrawerScreen from 'screens/HomeDrawerScreen';
import NewsDrawerScreen from 'screens/NewsDrawerScreen';
import StatsDrawerScreen from 'screens/StatsDrawerScreen';
import CovidNotify from 'screens/CovidNotify/Landing';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const sharedStyles = {
  paddingBottom: 5,
  paddingTop: 10,
  height: 55,
};

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'home' : 'home-outline';

          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Stats') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'CovidNotifyLanding') {
            iconName = focused ? 'radio' : 'radio-outline';
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
        options={{ title: 'Home' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Dashboard', { screen: 'Dashboard' });
          },
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('News', { screen: 'News' });
          },
        })}
      />
      <Tab.Screen
        name="Stats"
        component={StatsDrawerScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Stats', { screen: 'Stats' });
          },
        })}
      />
      <Tab.Screen
        name="CovidNotifyLanding"
        component={CovidNotify}
        options={{ title: 'COVID Notify' }}
      />
    </Tab.Navigator>
  );
}
