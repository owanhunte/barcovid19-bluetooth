import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from 'components/CustomDrawerContent';
import { RootDrawerParamList } from 'types';
import Main from './Main';
import Hotline from './Hotline';
import ReportSelf from './ReportSelf';
import Immigration from './Immigration';
import Stats from './Stats';
import News from './News';
import styles from 'styles/global';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const HomeDrawerScreen: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={styles.drawer}>
      <Drawer.Screen name="Dashboard" component={Main} />
      <Drawer.Screen name="News" component={News} options={{ title: 'News' }} />
      <Drawer.Screen
        name="Immigration"
        component={Immigration}
        options={{ title: 'Immigration' }}
      />
      <Drawer.Screen
        name="Stats"
        component={Stats}
        options={{ title: 'Stats' }}
      />
      <Drawer.Screen
        name="Hotline"
        component={Hotline}
        options={{ title: 'COVID-19 Hotline' }}
      />
      <Drawer.Screen
        name="ReportSelf"
        component={ReportSelf}
        options={{ title: 'Report Yourself' }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawerScreen;
