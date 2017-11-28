import {Navigation} from 'react-native-navigation';
import {registeredScreens} from './src/constants/constants';

import {registerScreens} from './src/screens';
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: registeredScreens.QuickReplies,
    title: 'Quick Replies'
  }
});
