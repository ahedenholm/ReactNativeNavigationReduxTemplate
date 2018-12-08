import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View, ScrollView } from 'react-native';

import CustomButton from '../../common/CustomButton';
import styles from '../../assets/styles/styles';
import constants from '../../constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Screen02 extends Component {
  render() {
    const { gui } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
          <Text style={styles.welcome}>Screen 02</Text>
          <CustomButton
            text="Navigate to Login" 
            style={styles.primaryButton}
            textstyle={styles.primaryButtonText}
            callback={() => this.props.navigation.navigate("Login")} 
          />
      </ScrollView>
    );
  }
}

export default connect((store) => {
  return {
    gui: store.gui,
  };
})(Screen02);