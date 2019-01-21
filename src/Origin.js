import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './Navigator';

class Origin extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    )};
}

export default Origin; 