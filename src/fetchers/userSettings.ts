import AsyncStorage from '@react-native-community/async-storage';
import { UserSettings } from 'types';

const storageKey = 'user_settings';

export const getSettingsFromStorage = async (): Promise<UserSettings> => {
  let settings = {
    onBoarded: false,
    enabledExposureNotifySystem: false,
    enabledNotifications: false,
  };

  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    if (jsonValue !== null) {
      let cacheValue: UserSettings = JSON.parse(jsonValue);
      settings = cacheValue;
    }
  } catch (_error) {
    /* Default settings will simply be returned if we reach here. */
  }

  return settings;
};

export const syncWithSettingsInStorage = async (
  settings: UserSettings,
): Promise<void> => {
  const currentSettings = await getSettingsFromStorage();
  const jsonValue = JSON.stringify({
    ...currentSettings,
    ...settings,
  });

  await AsyncStorage.setItem(storageKey, jsonValue);
};
