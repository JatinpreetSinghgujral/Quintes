
import { createStackNavigator } from 'react-navigation-stack';
import GetApprovedList from '../components/Approved/GetApprovedList';

const ApprovedStack = createStackNavigator({
  GetApprovedList: {
    screen: GetApprovedList
  },
  
 

  

}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default ApprovedStack


