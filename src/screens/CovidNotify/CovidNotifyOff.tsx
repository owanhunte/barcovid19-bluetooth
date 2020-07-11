import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ExposureSystemOff from 'components/svgs/ExposureSystemOff';
import SettingsContext from 'context/settingsContext';

const CovidNotifyOff: React.FC = () => {
  const _settingsContext = useContext(SettingsContext);

  const onActivate = async () => {
    await _settingsContext.enableExposureNotifySystem(true);
  };

  return (
    <>
      <Text style={styles.heading}>
        Exposure logging and notifications are off
      </Text>
      <Text style={styles.paragraph}>
        This app needs your permission to run the COVID Notify feature. Enable
        exposure logging and notifications by turning on COVID Notify.
      </Text>
      <TouchableOpacity onPress={onActivate} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Turn on COVID Notify</Text>
      </TouchableOpacity>

      <View style={styles.statusCard}>
        <View style={styles.featureStatus}>
          <ExposureSystemOff style={styles.cardIcon} />
          <Text style={styles.cardText}>
            COVID Notify is <Text style={styles.bold}>OFF</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.moreInfo}>Tap for more information</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  heading: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 28,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  paragraph: {
    color: '#f5f5f5',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 22,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#3182ce',
    borderRadius: 5,
    marginTop: 8,
    width: '100%',
  },
  actionButtonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  statusCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    marginRight: 10,
  },
  cardText: {
    color: '#D3080C',
    fontSize: 16,
  },
  moreInfo: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 18,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#3182ce',
    fontSize: 12,
  },
});

export default CovidNotifyOff;
