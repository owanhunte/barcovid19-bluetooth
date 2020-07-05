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
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from 'types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'ReportSelf'>;
};

const ReportSelf: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [hasFever, setHasFever] = useState(false);
  const [hasCough, setHasCough] = useState(false);
  const [hasShortnessBreath, setHasShortnessBreath] = useState(false);
  const [hasFatigue, setHasFatigue] = useState(false);
  const [hasMuscleAche, setHasMuscleAche] = useState(false);
  const [hasHeadache, setHasHeadache] = useState(false);
  const [hasLossOfTaste, setHasLossOfTaste] = useState(false);
  const [phone, setPhone] = useState('');

  const toggleFever = () => setHasFever((previousState) => !previousState);
  const toggleCough = () => setHasCough((previousState) => !previousState);
  const toggleShortnessBreath = () =>
    setHasShortnessBreath((previousState) => !previousState);
  const toggleFatigue = () => setHasFatigue((previousState) => !previousState);
  const toggleMuscleAche = () =>
    setHasMuscleAche((previousState) => !previousState);
  const toggleHeadache = () =>
    setHasHeadache((previousState) => !previousState);
  const toggleLossOfTaste = () =>
    setHasLossOfTaste((previousState) => !previousState);

  const checkFormAndSubmit = () => {
    // TODO: Implement action
  };

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Report Yourself"
        />
        <View style={screenStyles.headerImageWrap}>
          <Image
            source={require('../../assets/images/report-yourself.jpg')}
            style={screenStyles.headerImage}
          />
        </View>
        <View style={{ ...styles.wrap, ...screenStyles.formWrapper }}>
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
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone number *"
              placeholderTextColor="#999"
              textContentType="telephoneNumber"
              value={phone}
            />
          </View>

          <View style={screenStyles.formRow}>
            <Text style={styles.boldIt}>
              Are you experiencing any of the following symptoms?
            </Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasFever ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleFever}
              value={hasFever}
            />
            <Text style={screenStyles.switchLabel}>Fever or chills</Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasCough ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleCough}
              value={hasCough}
            />
            <Text style={screenStyles.switchLabel}>Cough</Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasShortnessBreath ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleShortnessBreath}
              value={hasShortnessBreath}
            />
            <Text style={screenStyles.switchLabel}>
              Shortness of breath or difficulty breathing
            </Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasFatigue ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleFatigue}
              value={hasFatigue}
            />
            <Text style={screenStyles.switchLabel}>Fatigue</Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasMuscleAche ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMuscleAche}
              value={hasMuscleAche}
            />
            <Text style={screenStyles.switchLabel}>Muscle or body aches</Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasHeadache ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleHeadache}
              value={hasHeadache}
            />
            <Text style={screenStyles.switchLabel}>Headache</Text>
          </View>

          <View style={{ ...screenStyles.formRow, ...screenStyles.togglerRow }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={hasLossOfTaste ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleLossOfTaste}
              value={hasLossOfTaste}
            />
            <Text style={screenStyles.switchLabel}>
              New loss of taste or smell
            </Text>
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
  togglerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 5,
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
});

export default ReportSelf;
