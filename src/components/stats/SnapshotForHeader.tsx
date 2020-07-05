import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { getStats } from 'fetchers/stats';

type Data = {
  active: number;
  cases: number;
  deaths: number;
  recovered: number;
};

const SnapshotForHeader: React.FC = () => {
  const getEmptyStats = (): Data => ({
    active: 0,
    cases: 0,
    deaths: 0,
    recovered: 0,
  });

  const [stats, setStats] = React.useState([getEmptyStats(), getEmptyStats()]);
  const window = useWindowDimensions();

  const labelFontSize = window.width >= 400 ? 12 : 11;
  const labelPaddingH = window.width >= 400 ? 10 : 8;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 50,
    },
    stat: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    statValue: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    statLabel: {
      color: 'white',
      fontSize: labelFontSize,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: labelPaddingH,
      paddingRight: labelPaddingH,
      borderRadius: 5,
      lineHeight: 15,
    },
    activeCasesColor: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    confirmedColor: {
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    deathsColor: {
      backgroundColor: '#c50909',
    },
    recoveredColor: {
      backgroundColor: '#0c9c0c',
    },
    pb: {
      paddingBottom: 5,
    },
  });

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        let result = await getStats();
        if (result !== null) {
          if (mounted) {
            setStats([
              {
                active: result[0].active,
                cases: result[0].cases,
                deaths: result[0].deaths,
                recovered: result[0].recovered as number,
              },
              {
                active: result[0].active,
                cases: result[1].cases,
                deaths: result[1].deaths,
                recovered: result[1].recovered as number,
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
    <View style={styles.container}>
      <View style={styles.stat}>
        {stats[0].cases > 0 ? (
          <Text style={styles.statValue}>{stats[0].active}</Text>
        ) : (
          <ActivityIndicator color="white" size="large" style={styles.pb} />
        )}
        <Text
          style={{
            ...styles.statLabel,
            ...styles.activeCasesColor,
          }}>
          Active
        </Text>
      </View>

      <View style={styles.stat}>
        {stats[0].cases > 0 ? (
          <Text style={styles.statValue}>{stats[0].cases}</Text>
        ) : (
          <ActivityIndicator color="white" size="large" style={styles.pb} />
        )}
        <Text
          style={{
            ...styles.statLabel,
            ...styles.confirmedColor,
          }}>
          Confirmed
        </Text>
      </View>

      <View style={styles.stat}>
        {stats[0].cases > 0 ? (
          <Text style={styles.statValue}>{stats[0].recovered}</Text>
        ) : (
          <ActivityIndicator color="white" size="large" style={styles.pb} />
        )}
        <Text
          style={{
            ...styles.statLabel,
            ...styles.recoveredColor,
          }}>
          Recovered
        </Text>
      </View>

      <View style={styles.stat}>
        {stats[0].cases > 0 ? (
          <Text style={styles.statValue}>{stats[0].deaths}</Text>
        ) : (
          <ActivityIndicator color="white" size="large" style={styles.pb} />
        )}
        <Text
          style={{
            ...styles.statLabel,
            ...styles.deathsColor,
          }}>
          Deaths
        </Text>
      </View>
    </View>
  );
};

export default SnapshotForHeader;
