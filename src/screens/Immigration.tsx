import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from 'types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Immigration'>;
};

const Immigration: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [residence, setResidence] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const checkFormAndSubmit = () => {
    // TODO: Implement action
  };

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Immigration"
        />
        <View style={screenStyles.headerImageWrap}>
          <Image
            source={require('../../assets/images/immigration.jpg')}
            style={screenStyles.headerImage}
          />
        </View>
        <View style={{ ...styles.wrap, ...screenStyles.formWrapper }}>
          <Text style={{ ...screenStyles.note, ...screenStyles.mb }}>
            Plan on travelling to Barbados? Use the form below to provide us
            with your travel and arrival information so we can enhance the
            process on your arrival.
          </Text>

          <View style={screenStyles.formRow}>
            <TextInput
              style={screenStyles.textInput}
              onChangeText={(text) => setName(text)}
              placeholder="Name *"
              placeholderTextColor="#999"
              value={name}
            />
          </View>

          <View style={screenStyles.formRow}>
            <TextInput
              style={screenStyles.textInput}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email *"
              placeholderTextColor="#999"
              textContentType="emailAddress"
              value={email}
            />
          </View>

          <View style={screenStyles.formRow}>
            <TextInput
              style={screenStyles.textInput}
              onChangeText={(text) => setArrivalDate(text)}
              placeholder="Arrival Date & Time *"
              placeholderTextColor="#999"
              value={arrivalDate}
            />
          </View>

          <View style={screenStyles.formRow}>
            <TextInput
              style={screenStyles.textInput}
              onChangeText={(text) => setDepartureDate(text)}
              placeholder="Departure Date & Time *"
              placeholderTextColor="#999"
              value={departureDate}
            />
          </View>

          <View style={screenStyles.formRow}>
            <TextInput
              style={screenStyles.textInput}
              onChangeText={(text) => setResidence(text)}
              placeholder="Where will you be staying? *"
              placeholderTextColor="#999"
              value={residence}
            />
          </View>

          <TouchableOpacity
            onPress={checkFormAndSubmit}
            style={screenStyles.submitButton}>
            <Text style={screenStyles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          <Text style={screenStyles.note}>
            <Text style={styles.boldIt}>Note:</Text>{' '}
            <Text>
              We take the confidentiality of your information very seriously and
              will not share it with any unauthorized individuals.{' '}
            </Text>
          </Text>
        </View>

        <Footer />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  headerImageWrap: {
    borderBottomWidth: 2,
    borderBottomColor: '#bbb',
  },
  headerImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 120,
  },
  formWrapper: {
    paddingTop: 40,
    paddingBottom: 30,
  },
  formRow: {
    paddingBottom: 20,
  },
  textInput: {
    height: 45,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  submitButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  note: {
    backgroundColor: '#feebc8',
    borderRadius: 5,
    marginBottom: 8,
    padding: 22,
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  mb: {
    marginBottom: 20,
  },
});

export default Immigration;
