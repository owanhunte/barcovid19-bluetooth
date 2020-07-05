import endpoints from './api';
import { CountryStats } from 'types';
import AsyncStorage from '@react-native-community/async-storage';
import ms from 'ms';

type LocalStatsCache = {
  data: CountryStats[];
  expiresOn: number;
};

export const getStats = async (
  status?: string,
): Promise<CountryStats[] | null> => {
  let endpoint = `${endpoints.countryStats}?countryCode=bb`;
  let storageKey = 'bb_stats';
  let result: CountryStats[] | null = null;
  let jsonValue: string | null;

  if (status === 'today') {
    endpoint += '&status=today';
    storageKey += '_today';
  } else if (status === 'yesterday') {
    endpoint += '&status=yesterday';
    storageKey += '_yesterday';
  }

  // Check cache storage first. If we can't get what we want from there then make network request.
  let makeNetworkRequest = false;
  try {
    jsonValue = await AsyncStorage.getItem(storageKey);
    if (jsonValue !== null) {
      const cacheValue: LocalStatsCache = JSON.parse(jsonValue);

      // Make sure the cache isn't stale.
      if (cacheValue.expiresOn > Date.now()) {
        // Cache is good, use it.
        result = cacheValue.data;
      } else {
        makeNetworkRequest = true;
      }
    } else {
      makeNetworkRequest = true;
    }
  } catch (error) {
    makeNetworkRequest = true;
  }

  let networkRequestSuccessful = false;
  if (makeNetworkRequest) {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      result = json;

      networkRequestSuccessful = true;

      // Save data to the local cache.
      jsonValue = JSON.stringify({
        data: result,
        expiresOn: Date.now() + ms('30m'),
      });
      await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (_error) {
      if (!networkRequestSuccessful) {
        result = null;
      }
    }
  }

  return result;
};
