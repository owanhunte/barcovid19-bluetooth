import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import ConfirmedCasesSvg from 'components/svgs/cases';
import FemaleSvg from 'components/svgs/female';
import MaleSvg from 'components/svgs/male';
import ActiveCasesSvg from 'components/svgs/active';
import RecoveredSvg from 'components/svgs/recovered';
import DeathsSvg from 'components/svgs/deaths';
import { getStats } from 'fetchers/stats';
import { RootDrawerParamList } from 'types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/global';

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Stats'>;
};

type Data = {
  cases: number;
  female: number;
  male: number;
  deaths: number;
  recovered: number;
  active: number;
};

const Stats: React.FC<Props> = ({ navigation }) => {
  const getEmptyStats = (): Data => ({
    cases: 0,
    female: 0,
    male: 0,
    deaths: 0,
    recovered: 0,
    active: 0,
  });

  const [stats, setStats] = useState([getEmptyStats(), getEmptyStats()]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        let result = await getStats();
        if (result !== null) {
          if (mounted) {
            setStats([
              {
                cases: result[0].cases,
                female: result[0].female as number,
                male: result[0].male as number,
                deaths: result[0].deaths,
                recovered: result[0].recovered as number,
                active: result[0].active,
              },
              {
                cases: result[1].cases,
                female: result[0].female as number,
                male: result[0].male as number,
                deaths: result[1].deaths,
                recovered: result[1].recovered as number,
                active: result[1].active,
              },
            ]);
          }
        } else {
          // Show error letting user know something went wrong and to contact support if problem persists.
          if (mounted) {
            setStats([getEmptyStats(), getEmptyStats()]);
          }
        }
      } catch (error) {
        // Show error letting user know something went wrong and to contact support if problem persists.
        if (mounted) {
          setStats([getEmptyStats(), getEmptyStats()]);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.savContainer}>
      <ScrollView>
        <Header
          navigation={navigation}
          headerType="inner"
          screenTitle="Barbados COVID-19 Stats"
        />

        <Text style={screenStyles.localStatsHeading}>Local Stats</Text>
        {stats[0].cases > 0 ? (
          <>
            <View style={screenStyles.localStatsOverviewRow}>
              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorActive,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Active</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].active.toLocaleString()}
                  </Text>
                </View>
                <ActiveCasesSvg />
              </View>

              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorTotal,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Confirmed</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].cases.toLocaleString()}
                  </Text>
                </View>
                <ConfirmedCasesSvg />
              </View>
            </View>

            <View style={screenStyles.localStatsOverviewRow}>
              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorFemale,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Female</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].female.toLocaleString()}
                  </Text>
                </View>
                <FemaleSvg />
              </View>
              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorMale,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Male</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].male.toLocaleString()}
                  </Text>
                </View>
                <MaleSvg />
              </View>
            </View>

            <View style={screenStyles.localStatsOverviewRow}>
              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorRecovered,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Recovered</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].recovered.toLocaleString()}
                  </Text>
                </View>
                <RecoveredSvg />
              </View>
              <View
                style={{
                  ...screenStyles.statsCard,
                  ...screenStyles.bgColorDeaths,
                }}>
                <View style={screenStyles.stat}>
                  <Text style={screenStyles.statLabel}>Deaths</Text>
                  <Text style={screenStyles.statValue}>
                    {stats[0].deaths.toLocaleString()}
                  </Text>
                </View>
                <DeathsSvg />
              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator color="#ccc" size="large" />
        )}

        <Footer />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  localStatsHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  localStatsOverviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  statsCard: {
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
  bgColorTotal: {
    backgroundColor: 'orange',
  },
  bgColorMale: {
    backgroundColor: '#5d8aa8',
  },
  bgColorFemale: {
    backgroundColor: '#e52b50',
  },
  bgColorActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  bgColorRecovered: {
    backgroundColor: '#0c9c0c',
  },
  bgColorDeaths: {
    backgroundColor: '#c50909',
  },
  stat: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 6,
  },
  statLabel: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  statValue: {
    color: 'white',
    fontSize: 25,
  },
});

export default Stats;
