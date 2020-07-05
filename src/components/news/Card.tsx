import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Anchor from 'components/util/Anchor';
import { NewsFeedItem } from 'types';

type Props = {
  item: NewsFeedItem;
};

const NewsCard: React.FC<Props> = ({ item }) => {
  const window = useWindowDimensions();

  const linkToArticle = (target: string) => WebBrowser.openBrowserAsync(target);

  return (
    <View style={styles.itemWrap}>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => linkToArticle(item.articleLink)}>
          <Image
            source={{ uri: `https:${item.image}` }}
            style={styles.itemImage}
          />
        </TouchableOpacity>
        <View style={styles.itemTextWrapper}>
          <Anchor
            href={item.articleLink}
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.itemText}>
            {item.title}
          </Anchor>
          <View style={styles.itemLinkAndDateWrapper}>
            {window.width >= 400 && (
              <Anchor href={item.articleLink} style={styles.itemLink}>
                Read more •{' '}
              </Anchor>
            )}
            <Text style={styles.itemDate}>
              {format(parseISO(item.publishDate), 'MMM d, yyyy')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrap: {
    marginTop: 8,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    borderColor: '#dedede',
    borderWidth: 1,
    padding: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 16,
  },
  itemTextWrapper: { width: 0, flexGrow: 1 },
  itemText: {
    fontSize: 14,
    lineHeight: 18,
  },
  itemLinkAndDateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  itemLink: {
    color: '#3182ce',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  itemDate: {
    color: 'gray',
    fontSize: 11,
  },
});

export default NewsCard;
