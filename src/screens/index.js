import {Navigation} from 'react-native-navigation';

import QuickReplys from './QuickReplys';


export function registerScreens(store) {
    Navigation.registerComponent('QuickReplys', () => QuickReplys);
}