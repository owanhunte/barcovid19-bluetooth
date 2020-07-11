/**
 * BarCOVID19 - Barbados COVID-19 App
 * Easy-to-use React Native app for COVID-19 related information pertaining to Barbados.
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { SettingsContextType, RootStackParamList } from 'types';
import OnboardingScreen1 from 'screens/OnboardingScreen1';
import OnboardingScreen2 from 'screens/OnboardingScreen2';
import SettingsContext from 'context/settingsContext';
import {
  getSettingsFromStorage,
  syncWithSettingsInStorage,
} from 'fetchers/userSettings';
import AppTabs from 'AppTabs';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [settings, updateSettings] = useState<SettingsContextType>({
    onBoarded: false,
    enabledExposureNotifySystem: false,
    enabledNotifications: false,
    enableExposureNotifySystem: async (allow: boolean) => {
      await syncWithSettingsInStorage({
        enabledExposureNotifySystem: allow,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        enabledExposureNotifySystem: allow,
      }));
    },
    enableNotifications: async (allow) => {
      await syncWithSettingsInStorage({
        enabledNotifications: allow,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        enabledNotifications: allow,
      }));
    },
    setAsOnboarded: async (onboarded) => {
      await syncWithSettingsInStorage({
        onBoarded: onboarded,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        onBoarded: onboarded,
      }));
    },
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        SplashScreen.hide();

        // Grab user settings on app load.
        const userSettings = await getSettingsFromStorage();
        if (mounted) {
          updateSettings((prev: SettingsContextType) => ({
            ...prev,
            ...userSettings,
          }));
        }
      } catch (error) {
        // TODO: Show error letting user know something went wrong and to contact support if problem persists.
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Home">
            <Stack.Screen name="Home" component={AppTabs} />
            <Stack.Screen
              name="OnboardingScreen1"
              component={OnboardingScreen1}
            />
            <Stack.Screen
              name="OnboardingScreen2"
              component={OnboardingScreen2}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SettingsContext.Provider>
  );
}
