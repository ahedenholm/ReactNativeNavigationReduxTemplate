import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './Navigator';
import Login from './screens/Login';
import WorkOrders from './screens/WorkOrders';
import WorkOrderDetails from './screens/WorkOrderDetails';
import ReportStatus from './screens/ReportStatus';
import ReportSubmission from './screens/ReportSubmission';

class Origin extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    )};
}

export default Origin; 