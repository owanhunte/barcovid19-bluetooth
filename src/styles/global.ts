import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  savContainer: { flex: 1 },
  boldIt: {
    fontWeight: 'bold',
  },
  textWrapper: {
    width: 0,
    flexGrow: 1,
  },
  drawer: {
    width: '88%',
  },
  wrap: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
  },
  footer: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
  },
  footerText: {
    fontSize: 11,
    color: '#6f6f6f',
    borderTopColor: '#ebebeb',
    borderTopWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default styles;
