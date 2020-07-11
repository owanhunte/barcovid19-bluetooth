import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressCircleFilled from 'components/svgs/ProgressCircleFilled';
import ProgressCircleEmpty from 'components/svgs/ProgressCircleEmpty';
import { RootStackParamList } from 'types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OnboardingScreen1'>;
};

const OnboardingScreen1: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.savContainer}>
      <View style={styles.screenContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>
            <Text style={styles.bold}>
              COVID
              {'\n'}
            </Text>
            <Text>Notify</Text>
          </Text>
        </View>
        <Text style={styles.heading}>
          COVID Notify: Keep yourself, loved ones and others safe
        </Text>
        <View style={styles.pitchInner}>
          <Icon
            name="notifications-outline"
            size={32}
            color="black"
            style={styles.pitchIcon}
          />
          <View style={styles.pitchTextWrapper}>
            <Text style={styles.pitchText}>
              Get notified quickly if you have potentially been exposed to
              COVID-19
            </Text>
          </View>
        </View>
        <View style={styles.pitchInner}>
          <Icon
            name="radio-outline"
            size={32}
            color="black"
            style={styles.pitchIcon}
          />
          <View style={styles.pitchTextWrapper}>
            <Text style={styles.pitchText}>
              If you test positive for COVID-19, you can choose to anonymously
              share your data so others can be notified of possible exposure.
            </Text>
          </View>
        </View>
        <View style={styles.pitchInner}>
          <Icon
            name="help-outline"
            size={32}
            color="black"
            style={styles.pitchIcon}
          />
          <View style={styles.pitchTextWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OnboardingScreen2')}>
              <Text style={{ ...styles.pitchText, ...styles.textLink }}>
                Learn how COVID Notify works
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.navDots}>
          <ProgressCircleFilled style={styles.navDot} />
          <ProgressCircleEmpty
            style={{ ...styles.navDot, ...styles.navDotLast }}
          />
        </View>

        <View style={styles.nextScreenLink}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen2')}>
            <Text style={styles.nextPrevLink}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  savContainer: { flex: 1 },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
  },
  logo: {
    width: 38,
    height: 38,
    marginRight: 6,
  },
  logoText: {
    color: '#444',
    fontSize: 14,
    fontWeight: '300',
  },
  heading: {
    color: '#121212',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 28,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  pitchWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  pitchInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  pitchIcon: {
    color: '#333',
    marginRight: 17,
  },
  pitchTextWrapper: { width: 0, flexGrow: 1 },
  pitchText: {
    color: '#333',
    fontSize: 15,
    lineHeight: 21,
  },
  textLink: {
    color: '#3182ce',
  },
  nextScreenLink: {
    position: 'absolute',
    right: 45,
    bottom: 15,
  },
  nextPrevLink: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    color: '#3182ce',
    fontSize: 14,
  },
  navDots: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 26,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navDot: {
    marginRight: 14,
  },
  navDotLast: {
    marginRight: 0,
  },
});

export default OnboardingScreen1;
