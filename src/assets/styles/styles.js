import { StyleSheet } from 'react-native';

const backgroundColor = "#ffffff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    padding: 20
  },
  scrollViewContentContainer: {
    minHeight: '100%',
    backgroundColor: backgroundColor,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  padding10: {
    padding: 10,
  },
  textSmall: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  textMedium: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textLarge: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  templateMessage: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 15,
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "transparent",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 0,
    borderWidth: 1,
  },
  primaryButtonText: {
    color: "#000000",
    fontSize: 20,
    textAlign: 'center',
  },
  navigationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    minHeight: 100,
    minWidth: 100,
    padding: 10,
    borderWidth: 1,
  },
  navigationButtonText: {
    color: "#000000",
    fontSize: 12,
  },
  iconButton: {
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    minWidth: 50,
    padding: 10,
    borderWidth: 0,
  },
  iconButtonText: {
    color: "#000000",
    fontSize: 12,
  },
  displayNone: {
    display: 'none',
  }
});

export default styles;