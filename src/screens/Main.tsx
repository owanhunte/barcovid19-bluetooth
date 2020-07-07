import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from 'react-native-youtube-iframe';
import SettingsContext from 'context/settingsContext';
import NewsCarousel from 'components/news/Carousel';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { RootDrawerParamList } from 'types';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Dashboard'>;
};

const Main: React.FC<Props> = ({ navigation }) => {
  const _settingsContext = useContext(SettingsContext);
  const [playing] = useState(true);
  const window = useWindowDimensions();
  const yvWidth = Math.ceil(window.width - 40);
  const yvHeight = Math.ceil((yvWidth * 9) / 16);

  const goToImmigrationScreen = () => {
    navigation.navigate('Immigration');
  };

  const goToNewsScreen = () => {
    navigation.navigate('News');
  };

  useEffect(() => {
    let timer: number | null = null;
    if (!_settingsContext.onBoarded) {
      if (timer !== null) {
        clearInterval(timer);
      }

      timer = setTimeout(() => {
        navigation.navigate('OnboardingScreen1');
      }, 1200);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [_settingsContext.onBoarded, navigation]);

  const screenStyles = StyleSheet.create({
    youtubeVidWrapper: {
      alignItems: 'center',
      paddingBottom: 35,
    },
    vidDropShadow: {
      backgroundColor: 'gray',
      elevation: 8,
      width: yvWidth,
      height: yvHeight,
    },
    newsHeadlinesHeader: {
      backgroundColor: '#c80000',
      borderRadius: 4,
      marginTop: 25,
      padding: 8,
    },
    newsHeadlinesHeaderText: {
      color: 'white',
      fontSize: window.width >= 400 ? 13 : 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    allNewsButton: {
      backgroundColor: '#3182ce',
      borderRadius: 5,
      marginTop: 8,
    },
    allNewsButtonText: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
      padding: 10,
    },
    immigrationCTAWrapper: {
      marginTop: 20,
      borderTopWidth: 1,
      paddingTop: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      marginBottom: 20,
      borderColor: '#dedede',
    },
    immigrationCTA: {
      backgroundColor: 'orange',
      borderRadius: 5,
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 20,
      paddingRight: 18,
      flexDirection: 'row',
      alignItems: 'center',
    },
    immigrationCTAIcon: {
      marginRight: 15,
    },
    immigrationCTAText: {
      marginRight: 8,
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 18,
      color: '#444',
    },
  });

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header navigation={navigation} headerType="dashboard" />

        <View style={styles.wrap}>
          <View style={screenStyles.newsHeadlinesHeader}>
            <Text style={screenStyles.newsHeadlinesHeaderText}>
              Wear a Mask and save the economy
            </Text>
          </View>
          <NewsCarousel />
          <TouchableOpacity
            onPress={goToNewsScreen}
            style={screenStyles.allNewsButton}>
            <Text style={screenStyles.allNewsButtonText}>
              All Barbados COVID-19 News
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...styles.wrap, ...screenStyles.immigrationCTAWrapper }}>
          <View style={screenStyles.immigrationCTA}>
            <Icon
              name="airplane"
              size={40}
              color="khaki"
              style={screenStyles.immigrationCTAIcon}
            />
            <View style={styles.textWrapper}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={screenStyles.immigrationCTAText}
                onPress={goToImmigrationScreen}>
                Plan on travelling to Barbados? Our In-App Travel Authorization
                Form can help speed things along.
              </Text>
            </View>
            <Icon
              name="arrow-redo"
              size={30}
              color="khaki"
              onPress={goToImmigrationScreen}
            />
          </View>
        </View>

        <View style={screenStyles.youtubeVidWrapper}>
          <View style={screenStyles.vidDropShadow}>
            <YoutubePlayer
              height={yvHeight}
              width={yvWidth}
              videoId={'5DGwOJXSxqg'}
              play={playing}
              volume={50}
              playbackRate={1}
              initialPlayerParams={{
                preventFullScreen: true,
                cc_lang_pref: 'us',
                showClosedCaptions: true,
              }}
              webViewProps={{
                mediaPlaybackRequiresUserAction: true,
              }}
            />
          </View>
        </View>

        <Footer />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
