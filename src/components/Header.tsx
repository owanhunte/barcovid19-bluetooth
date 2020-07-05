import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SnapshotForHeader from 'components/stats/SnapshotForHeader';
import HotlineBar from 'components/HotlineBar';
import { RootDrawerParamList } from 'types';

type Props = {
  navigation: DrawerNavigationProp<
    RootDrawerParamList,
    keyof RootDrawerParamList
  >;
  headerType: 'dashboard' | 'inner';
  screenTitle?: string;
};

const Header: React.FC<Props> = ({ navigation, headerType, screenTitle }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <>
      {headerType === 'dashboard' ? (
        <View
          style={{
            ...styles.headerBase,
            ...styles.headerDashboard,
          }}>
          <ImageBackground
            source={require('../../assets/header-bg.jpg')}
            style={{
              ...styles.headerBg,
              ...styles.headerDashboard,
            }}
          />
          <View
            style={{
              ...styles.headerForeground,
              ...styles.headerDashboard,
            }}>
            <Image
              source={require('../../assets/bb.png')}
              style={styles.flag}
            />

            <Icon
              name="menu-outline"
              size={32}
              color="white"
              style={styles.drawerOpener}
              onPress={openDrawer}
            />

            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/favicon.png')}
                style={styles.logo}
              />
              <Text style={styles.logoText}>
                <Text style={styles.boldIt}>
                  COVID-19
                  {'\n'}
                </Text>
                <Text>Barbados</Text>
              </Text>
            </View>

            <SnapshotForHeader />
          </View>
        </View>
      ) : (
        <View
          style={{
            ...styles.headerBase,
            ...styles.headerInner,
          }}>
          <ImageBackground
            source={require('../../assets/header-bg.jpg')}
            style={{
              ...styles.headerBg,
              ...styles.headerInner,
            }}
          />
          <View
            style={{
              ...styles.headerForeground,
              ...styles.headerInner,
            }}>
            <Image
              source={require('../../assets/bb.png')}
              style={styles.flag}
            />

            <Icon
              name="menu-outline"
              size={32}
              color="white"
              style={styles.drawerOpener}
              onPress={openDrawer}
            />

            <View style={styles.screenTitleContainer}>
              <Text style={styles.screenTitle}>{screenTitle}</Text>
            </View>
          </View>
        </View>
      )}
      <HotlineBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  boldIt: {
    fontWeight: 'bold',
  },
  headerDashboard: { height: 200 },
  headerInner: { height: 60 },
  headerBase: {
    backgroundColor: '#000f7b',
    position: 'relative',
  },
  headerBg: {
    width: '100%',
    opacity: 0.06,
  },
  headerForeground: {
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  drawerOpener: {
    position: 'absolute',
    left: 18,
    top: 15,
  },
  flag: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 40,
    height: 27,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 38,
    height: 38,
    marginRight: 6,
  },
  logoText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '300',
  },
  screenTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
  },
});

export default Header;
