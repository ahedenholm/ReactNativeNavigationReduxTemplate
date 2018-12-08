import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';

import CustomButton from '../../common/CustomButton';
import styles from '../../assets/styles/styles';
import constants from '../../constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Login extends Component {
  render() {
    const { gui } = this.props;
    console.log('login props',this.props);
    console.log('login consts ',constants);
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Login screen</Text>
          <CustomButton
            text="Navigate to Screen 01" 
            style={styles.primaryButton}
            textstyle={styles.primaryButtonText}
            callback={() => this.props.navigation.navigate("Screen01")} 
          />
      </View>
    );
  }
}

export default connect((store) => {
  return {
    gui: store.gui,
  };
})(Login);