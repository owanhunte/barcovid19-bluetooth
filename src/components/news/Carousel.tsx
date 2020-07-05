import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { getNewsFeed } from 'fetchers/news';
import { NewsFeedItem } from 'types';
import NewsCard from './Card';

const NewsCarousel: React.FC = () => {
  const [carouselItems, setCarouselItems] = useState<NewsFeedItem[] | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    let timer: number | null = null;

    (async () => {
      try {
        const items = await getNewsFeed(5);
        if (mounted) {
          setCarouselItems(items);
        }

        if (timer !== null) {
          clearInterval(timer);
        }

        timer = setInterval(() => {
          if (carouselItems) {
            if (mounted) {
              setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
            }
          }
        }, 6000);
      } catch (error) {
        // TODO: Show error letting user know something went wrong and to contact support if problem persists.
      }
    })();
    return () => {
      mounted = false;
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
  }, [carouselItems]);

  return (
    <>
      {carouselItems ? (
        <NewsCard item={carouselItems[currentIndex]} />
      ) : (
        <ActivityIndicator color="#ccc" size="large" />
      )}
    </>
  );
};

export default NewsCarousel;
