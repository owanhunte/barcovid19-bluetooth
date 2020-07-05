import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerBackdrop}>
        <ImageBackground
          source={require('../../assets/header-bg.jpg')}
          style={styles.headerBg}
        />
        <View style={styles.headerForeground}>
          <View style={styles.coatOfArmsWrapper}>
            <Image
              source={require('../../assets/coat-of-arms.png')}
              style={styles.coatOfArms}
            />
            <Text style={styles.coatOfArmsCaption}>Government of Barbados</Text>
          </View>
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
              <Text>Resources</Text>
            </Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  boldIt: {
    fontWeight: 'bold',
  },
  headerBackdrop: {
    backgroundColor: '#000f7b',
    position: 'relative',
    height: 150,
  },
  headerBg: { width: '100%', height: 150, opacity: 0.05 },
  headerForeground: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 22,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    width: '100%',
    height: 150,
  },
  coatOfArmsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coatOfArms: {
    marginBottom: 6,
    width: 65,
    height: 65,
  },
  coatOfArmsCaption: {
    color: 'white',
    fontSize: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 38,
    height: 38,
    marginRight: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
});

export default CustomDrawerContent;
