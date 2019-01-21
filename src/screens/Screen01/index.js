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

class Screen01 extends Component {
  render() {
    const { gui } = this.props;
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Screen 01</Text>
          <CustomButton
            text="Navigate to Screen 02" 
            style={styles.primaryButton}
            textstyle={styles.primaryButtonText}
            callback={() => this.props.navigation.navigate(constants.SCREEN_02)} 
          />
      </View>
    );
  }
}

export default connect((store) => {
  return {
    gui: store.gui,
  };
})(Screen01);