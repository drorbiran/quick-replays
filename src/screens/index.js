import {Navigation} from 'react-native-navigation';

import QuickReplies from './QuickReplies';


export function registerScreens(store) {
    Navigation.registerComponent('QuickReplies', () => QuickReplies);
}