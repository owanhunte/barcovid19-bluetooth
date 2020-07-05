import client from './contentfulClient';
import AsyncStorage from '@react-native-community/async-storage';
import { NewsFeedItem } from 'types';
import ms from 'ms';

type LocalNewsCache = {
  data: NewsFeedItem[];
  expiresOn: number;
};

export const getNewsFeed = async (
  limit?: number,
): Promise<NewsFeedItem[] | null> => {
  let realLimit = limit || 10;
  let storageKey = `bb_news_${realLimit}`;
  let result: NewsFeedItem[] | null = null;
  let jsonValue: string | null;
  let makeNetworkRequest = false;

  try {
    jsonValue = await AsyncStorage.getItem(storageKey);
    if (jsonValue !== null) {
      const cacheValue: LocalNewsCache = JSON.parse(jsonValue);

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
      const entries = await client.getEntries({
        content_type: 'articleFeed',
        order: '-fields.publishDate',
        'fields.relatedCountry.sys.contentType.sys.id': 'country',
        'fields.relatedCountry.fields.iso2[match]': 'BB',
        limit: realLimit,
      });

      networkRequestSuccessful = true;

      // Transform and save data to the local cache.
      result = entries.items.map((item: any) => ({
        title: item.fields.title,
        urlSlug: item.fields.urlSlug,
        image: item.fields.image.fields.file.url,
        articleLink: item.fields.articleLink,
        publishDate: item.fields.publishDate,
      }));

      jsonValue = JSON.stringify({
        data: result,
        expiresOn: Date.now() + ms('15m'),
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
