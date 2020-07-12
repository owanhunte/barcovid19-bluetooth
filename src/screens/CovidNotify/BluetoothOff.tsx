import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useBluetoothStatus } from 'react-native-bluetooth-status';
import BluetoothDisabled from 'components/svgs/BluetoothDisabled';

const BluetoothOff: React.FC = () => {
  const [, , setBluetooth] = useBluetoothStatus();

  return (
    <>
      <BluetoothDisabled style={styles.icon} />
      <Text style={styles.heading}>Bluetooth is Off</Text>
      <Text style={styles.paragraph}>
        Your phone's Bluetooth features are used to collect and share random IDs
        needed for COVID Notify to work.
      </Text>
      {Platform.OS === 'android' && (
        <TouchableOpacity
          onPress={() => {
            setBluetooth(true);
          }}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Turn on Bluetooth</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 25,
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
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    padding: 12,
  },
});

export default BluetoothOff;
