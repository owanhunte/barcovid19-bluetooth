import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CovidNotifyOn from 'components/svgs/CovidNotifyOn';

const ExposureStatus: React.FC = () => {
  return (
    <>
      <Text style={styles.heading}>No exposure detected</Text>
      <Text style={styles.paragraph}>
        Based on your random IDs, this app has not detected anyone near you in
        the past 14 days who has tested positive for COVID-19.
      </Text>
      <Text style={styles.lastChecked}>Last checked 5 minutes ago</Text>

      <View style={styles.statusCard}>
        <View style={styles.featureStatus}>
          <CovidNotifyOn style={styles.cardIcon} stroke="#278400" />
          <Text style={styles.cardText}>
            COVID Notify is <Text style={styles.bold}>ON</Text>
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
  lastChecked: {
    color: '#f5f5f5',
    fontSize: 12,
    fontStyle: 'italic',
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
    color: '#278400',
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

export default ExposureStatus;
