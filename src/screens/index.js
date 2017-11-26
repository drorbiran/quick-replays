import {Navigation} from 'react-native-navigation';

import QuickReplies from './QuickReplies';
import RepliesEditor from './RepliesEditor'


export function registerScreens(store) {
    Navigation.registerComponent('QuickReplies', () => QuickReplies);
    Navigation.registerComponent('RepliesEditor', () => RepliesEditor);
}