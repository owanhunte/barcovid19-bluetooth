import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import ProgressCircleFilled from 'components/svgs/ProgressCircleFilled';
import ProgressCircleEmpty from 'components/svgs/ProgressCircleEmpty';
import SettingsContext from 'context/settingsContext';
import { RootStackParamList } from 'types';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'OnboardingScreen2'>;
};

const OnboardingScreen2: React.FC<Props> = ({ navigation }) => {
  const _settingsContext = useContext(SettingsContext);
  const [modalEnableFeatureVisible, setModalEnableFeatureVisible] = useState(
    false,
  );
  const [modalEnableNotifications, setModalEnableNotifications] = useState(
    false,
  );

  const onDontAllowNotifySystem = async () => {
    await _settingsContext.enableExposureNotifySystem(false);
    setModalEnableFeatureVisible(false);
    (navigation as any).navigate('Home', {
      screen: 'CovidNotifyLanding',
      params: { fromOnboarding: true },
    });
  };

  const onAllowNotifySystem = async () => {
    await _settingsContext.enableExposureNotifySystem(true);
    setModalEnableFeatureVisible(false);
    setModalEnableNotifications(true);
  };

  const onAllowNotifications = async () => {
    await _settingsContext.enableNotifications(true);
    setModalEnableNotifications(false);
    (navigation as any).navigate('Home', {
      screen: 'CovidNotifyLanding',
      params: { fromOnboarding: true },
    });
  };

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
        <Text style={styles.heading}>Your data privacy comes first</Text>

        <Text style={styles.paragraph}>
          Our COVID Notify feature takes a privacy-first approach to exposure
          notification.
        </Text>

        <Text style={styles.paragraph}>
          Your random IDs are stored exclusively on your phone unless you choose
          to share them.
        </Text>

        <Text style={styles.paragraph}>
          Use of the COVID Notify feature is voluntary. You can delete your
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
          <TouchableOpacity
            onPress={() => {
              setModalEnableFeatureVisible(true);
            }}>
            <Text style={styles.nextPrevLink}>Done</Text>
          </TouchableOpacity>
        </View>

        {(modalEnableFeatureVisible || modalEnableNotifications) && (
          <View style={styles.modalBackdrop} />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEnableFeatureVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeading}>
                Enable COVID-19 Exposure Logging and Notifications
              </Text>
              <Text style={styles.modalParagraph}>
                Your phone can securely collect and share random IDs with nearby
                bluetooth-enabled devices. This app can use these IDs to notify
                you if you've been exposed to COVID-19. The date, duration and
                signal strength of an exposure will be shared with "COVID-19
                Notify".
              </Text>
              <View style={styles.modalActionsWrapper}>
                <TouchableOpacity
                  style={{ ...styles.modalAction, ...styles.modalActionFirst }}
                  onPress={onDontAllowNotifySystem}>
                  <Text style={styles.modalActionText}>Don't Allow</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalAction}
                  onPress={onAllowNotifySystem}>
                  <Text style={{ ...styles.modalActionText, ...styles.bold }}>
                    Allow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEnableNotifications}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeading}>
                "COVID Notify" Would Like to Send You Notifications
              </Text>
              <Text style={styles.modalParagraph}>
                Notifications may include alerts, sounds and icon badges. These
                can be configured in the app's settings.
              </Text>
              <View style={styles.modalActionsWrapper}>
                <TouchableOpacity
                  style={{ ...styles.modalAction, ...styles.modalActionFirst }}
                  onPress={() => {}}>
                  <Text style={styles.modalActionText}>Don't Allow</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalAction}
                  onPress={onAllowNotifications}>
                  <Text style={{ ...styles.modalActionText, ...styles.bold }}>
                    Allow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  savContainer: { flex: 1 },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
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
  modalBackdrop: {
    backgroundColor: 'black',
    opacity: 0.75,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 20,
    alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeading: {
    color: '#121212',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
  },
  modalParagraph: {
    color: '#333',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 22,
    textAlign: 'center',
    paddingLeft: 22,
    paddingRight: 22,
  },
  modalActionsWrapper: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
  },
  modalAction: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
  },
  modalActionText: {
    color: '#3182ce',
    fontSize: 15,
  },
  modalActionFirst: {
    borderRightWidth: 1,
    borderRightColor: '#dedede',
  },
});

export default OnboardingScreen2;
