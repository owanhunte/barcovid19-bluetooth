import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import ProgressCircleFilled from 'components/svgs/ProgressCircleFilled';
import ProgressCircleEmpty from 'components/svgs/ProgressCircleEmpty';
import { RootStackParamList } from 'types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OnboardingScreen2'>;
};

const OnboardingScreen2: React.FC<Props> = ({ navigation }) => {
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
              COVID-19
              {'\n'}
            </Text>
            <Text>Notify</Text>
          </Text>
        </View>
        <Text style={styles.heading}>Your data privacy comes first</Text>

        <Text style={styles.paragraph}>
          Our COVID-19 Notify feature takes a privacy-first approach to exposure
          notification.
        </Text>

        <Text style={styles.paragraph}>
          Your random IDs are stored exclusively on your phone unless you choose
          to share them.
        </Text>

        <Text style={styles.paragraph}>
          Use of the COVID-19 Notify feature is voluntary. You can delete your
          random IDs at any time.
        </Text>

        <View style={styles.navDots}>
          <ProgressCircleEmpty style={styles.navDot} />
          <ProgressCircleFilled
            style={{ ...styles.navDot, ...styles.navDotLast }}
          />
        </View>

        <View style={styles.prevScreenLink}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen1')}>
            <Text style={styles.nextPrevLink}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nextScreenLink}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.nextPrevLink}>Done</Text>
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
    paddingLeft: 35,
    paddingRight: 35,
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
  paragraph: {
    color: '#333',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 22,
    textAlign: 'center',
  },
  prevScreenLink: {
    position: 'absolute',
    left: 45,
    bottom: 15,
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

export default OnboardingScreen2;
