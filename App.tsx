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
import { useBluetoothStatus } from 'react-native-bluetooth-status';
import BLEAdvertiser from 'react-native-ble-advertiser';

import BackgroundFetch, {
  BackgroundFetchStatus,
} from 'react-native-background-fetch';

import { SettingsContextType, RootStackParamList } from 'types';
import OnboardingScreen1 from 'screens/OnboardingScreen1';
import OnboardingScreen2 from 'screens/OnboardingScreen2';
import SettingsContext from 'context/settingsContext';
import AppTabs from 'AppTabs';
import { statusToString } from 'utils';

import {
  getSettingsFromStorage,
  syncWithSettingsInStorage,
} from 'fetchers/userSettings';

const Stack = createStackNavigator<RootStackParamList>();

declare var global: { HermesInternal: null | {} };

export default function App() {
  const [btStatus] = useBluetoothStatus();
  const [settings, updateSettings] = useState<SettingsContextType>({
    onBoarded: false,
    enabledExposureNotifySystem: false,
    enabledNotifications: false,
    bluetoothOn: btStatus,
    enableExposureNotifySystem: async (allow: boolean) => {
      await syncWithSettingsInStorage({
        enabledExposureNotifySystem: allow,
        bluetoothOn: btStatus,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        enabledExposureNotifySystem: allow,
      }));

      // Configure BackgroundFetch for the exposure notification system.
      BackgroundFetch.configure(
        {
          minimumFetchInterval: 15,
          forceAlarmManager: false,
          stopOnTerminate: false,
          enableHeadless: true,
          startOnBoot: true,
          requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE,
          requiresCharging: false,
          requiresDeviceIdle: false,
          requiresBatteryNotLow: false,
          requiresStorageNotLow: false,
        },
        onBackgroundFetchEvent,
        (status: BackgroundFetchStatus) => {
          console.log(
            '[BackgroundFetch] status',
            statusToString(status),
            status,
          );
        },
      );
    },
    enableNotifications: async (allow) => {
      await syncWithSettingsInStorage({
        enabledNotifications: allow,
        bluetoothOn: btStatus,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        enabledNotifications: allow,
      }));
    },
    setAsOnboarded: async (onboarded) => {
      await syncWithSettingsInStorage({
        onBoarded: onboarded,
        bluetoothOn: btStatus,
      });
      updateSettings((prev: SettingsContextType) => ({
        ...prev,
        onBoarded: onboarded,
      }));
    },
  });

  const onBackgroundFetchEvent = async (taskId: string) => {
    console.log('[BackgroundFetch] Event received: ', taskId);

    if (settings.enabledExposureNotifySystem && settings.bluetoothOn) {
      // Set company ID as recognized by Bluetooth SIG
      BLEAdvertiser.setCompanyId(0xffff); // Your Company's Code

      // Broadcast service UUID with additional manufactoring data.
      // try {
      //   const success = BLEAdvertiser.broadcast([UUID], [ManufacturerData], {});
      //   console.log('Broadcasting Sucessful', success);
      // } catch (error) {
      //   console.log('Broadcasting Error', error);
      // }
    }

    // Required: Signal completion of your task to native code
    // If you fail to do this, the OS can terminate your app
    // or assign battery-blame for consuming too much background-time
    BackgroundFetch.finish(taskId);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        SplashScreen.hide();

        // Grab user settings on app load.
        const userSettings = await getSettingsFromStorage();
        console.log('Bluetooth status is: ', btStatus);
        if (mounted) {
          updateSettings((prev: SettingsContextType) => ({
            ...prev,
            ...userSettings,
            bluetoothOn: btStatus,
          }));
        }
      } catch (error) {
        // TODO: Show error letting user know something went wrong and to contact support if problem persists.
      }
    })();
    return () => {
      mounted = false;
    };
  }, [btStatus]);

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
