import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootDrawerParamList } from 'types';

type Props = {
  navigation: DrawerNavigationProp<
    RootDrawerParamList,
    keyof RootDrawerParamList
  >;
};

const HotlineBar: React.FC<Props> = ({ navigation }) => {
  const window = useWindowDimensions();
  const textFontSize = window.width >= 400 ? 14 : 13;

  const styles = StyleSheet.create({
    barWrapper: {
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#dedede',
      flexDirection: 'row',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 50,
    },
    icon: {
      marginRight: 8,
    },
    text: {
      color: '#3182ce',
      fontWeight: 'bold',
      fontSize: textFontSize,
    },
    first: {
      borderRightWidth: 1,
      borderRightColor: '#dedede',
    },
  });

  const onPress = (target: string) =>
    navigation.navigate(target === 'hotline' ? 'Hotline' : 'ReportSelf');

  return (
    <View style={styles.barWrapper}>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.first }}
        onPress={() => onPress('hotline')}>
        <Icon name="call" size={20} color="#718096" style={styles.icon} />
        <Text style={styles.text}>COVID-19 Hotline</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onPress('report')}>
        <Icon name="medkit" size={20} color="#718096" style={styles.icon} />
        <Text style={styles.text}>Report Yourself</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HotlineBar;
