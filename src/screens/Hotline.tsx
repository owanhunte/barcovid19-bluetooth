import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootDrawerParamList } from 'types';
import Header from 'components/Header';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Hotline'>;
};

const Hotline: React.FC<Props> = ({ navigation }) => {
  const launchCallApp = () => {
    WebBrowser.openBrowserAsync('tel://5364500');
  };

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Barbados COVID-19 Hotline"
        />
        <View style={screenStyles.headerImageWrap}>
          <Image
            source={require('../../assets/images/hotline-graphic.png')}
            style={screenStyles.headerImage}
          />
        </View>
        <View style={{ ...styles.wrap, ...screenStyles.contentWrap }}>
          <Text style={screenStyles.note}>
            Our COVID-19 information and reporting hotline is part of
            Government's ongoing effort to provide reliable, trusted information
            and support on COVID-19 related health and wellness matters in
            Barbados.
          </Text>
          <TouchableOpacity
            onPress={launchCallApp}
            style={screenStyles.ctaButton}>
            <Icon
              name="call"
              size={20}
              color="white"
              style={screenStyles.ctaButtonIcon}
            />
            <Text style={screenStyles.ctaButtonText}>Call Hotline</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  headerImageWrap: {
    borderBottomWidth: 2,
    borderBottomColor: '#bbb',
    paddingBottom: 10,
    paddingTop: 5,
    backgroundColor: '#ac093a',
    marginBottom: 25,
  },
  headerImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 120,
  },
  contentWrap: {
    paddingBottom: 25,
  },
  note: {
    backgroundColor: '#feebc8',
    borderRadius: 5,
    marginBottom: 20,
    padding: 22,
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 50,
    marginTop: 8,
    marginBottom: 20,
  },
  ctaButtonIcon: {
    marginRight: 0,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 15,
  },
});

export default Hotline;
