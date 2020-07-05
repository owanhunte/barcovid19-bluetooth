import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NewsCard from 'components/news/Card';
import { getNewsFeed } from 'fetchers/news';
import { RootDrawerParamList, NewsFeedItem } from 'types';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'News'>;
};

const News: React.FC<Props> = ({ navigation }) => {
  const [newsItems, setNewsItems] = useState<NewsFeedItem[] | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const items = await getNewsFeed();
        if (mounted) {
          setNewsItems(items);
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
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Barbados COVID-19 News"
        />

        <View style={{ ...styles.wrap, ...screenStyles.mt }}>
          <Text style={screenStyles.contentSummary}>
            An up-to-date feed of official COVID-19 News for Barbados, either
            published by or validated by the Government of Barbados.
          </Text>
        </View>

        <View style={screenStyles.pb}>
          {newsItems ? (
            newsItems.map((item: NewsFeedItem) => (
              <View key={item.urlSlug} style={styles.wrap}>
                <NewsCard item={item} />
              </View>
            ))
          ) : (
            <ActivityIndicator color="#ccc" size="large" />
          )}
        </View>

        <Footer />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  contentSummary: {
    backgroundColor: '#feebc8',
    borderRadius: 5,
    marginBottom: 8,
    padding: 22,
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  mt: {
    marginTop: 20,
  },
  pb: {
    paddingBottom: 30,
  },
});

export default News;
