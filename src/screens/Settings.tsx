import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from 'types';
import Header from 'components/Header';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Settings'>;
};

const Settings: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Settings"
        />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
