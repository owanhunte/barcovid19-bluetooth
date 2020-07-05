import React from 'react';
import { View, Text } from 'react-native';
import styles from 'styles/global';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Developed by <Text style={styles.boldIt}>PROTECH INC.</Text>
      </Text>
    </View>
  );
};
export default Footer;
