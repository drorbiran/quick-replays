import {Navigation} from 'react-native-navigation';

import QuickReplays from './QuickReplays';

export function registerScreens(store) {
    Navigation.registerComponent('QuickReplays', () => QuickReplays);
}