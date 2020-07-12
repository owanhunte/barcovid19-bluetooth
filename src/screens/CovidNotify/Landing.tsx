import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import SettingsContext from 'context/settingsContext';
import { RootTabsParamList } from 'types';
import Tick from 'components/svgs/Tick';
import ExposureStatus from './ExposureStatus';
import CovidNotifyOff from './CovidNotifyOff';
import BluetoothOff from './BluetoothOff';

type Props = BottomTabScreenProps<RootTabsParamList, 'CovidNotifyLanding'>;

const CovidNotify: React.FC<Props> = ({ route }) => {
  const _settingsContext = useContext(SettingsContext);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  let fromOnboarding: boolean = false;
  if (route && route.params && route.params.fromOnboarding) {
    fromOnboarding = route.params.fromOnboarding;
  }

  const onDismiss = async () => {
    setDismissed(true);
    setShowThankYouDialog(false);
    await _settingsContext.setAsOnboarded(true);
  };

  useEffect(() => {
    let mounted = true;
    if (
      mounted &&
      !dismissed &&
      fromOnboarding &&
      _settingsContext.enabledExposureNotifySystem
    ) {
      setShowThankYouDialog(true);
    }
    return () => {
      mounted = false;
    };
  }, [_settingsContext.enabledExposureNotifySystem, dismissed, fromOnboarding]);

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/logo.png')}
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

        {_settingsContext.enabledExposureNotifySystem &&
          _settingsContext.bluetoothOn && <ExposureStatus />}

        {_settingsContext.enabledExposureNotifySystem &&
          !_settingsContext.bluetoothOn && <BluetoothOff />}

        {!_settingsContext.enabledExposureNotifySystem && <CovidNotifyOff />}

        {showThankYouDialog && <View style={styles.modalBackdrop} />}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showThankYouDialog}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Tick width={50} height={50} />
              <Text style={styles.modalHeading}>Thank you for helping</Text>
              <Text style={styles.modalParagraph}>
                Exposure Notifications are on. You will receive a notification
                if COVID Notify detects that you have possibly been exposed to
                COVID-19.
              </Text>
              <TouchableOpacity
                style={styles.modalDismissAction}
                onPress={onDismiss}>
                <Text style={styles.modalActionText}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
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
    backgroundColor: '#002D42',
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
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
  },
  modalBackdrop: {
    backgroundColor: 'black',
    opacity: 0.5,
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
    paddingBottom: 26,
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
    marginBottom: 25,
    textAlign: 'center',
    paddingLeft: 22,
    paddingRight: 22,
  },
  modalDismissAction: {
    borderColor: '#3182ce',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    width: '100%',
    display: 'flex',
  },
  modalActionText: {
    color: '#3182ce',
    fontSize: 15,
  },
});

export default CovidNotify;
