import {Navigation} from 'react-native-navigation';
import {registeredScreens} from '../constants/constants';

import QuickReplies from './QuickReplies';
import RepliesEditor from './RepliesEditor';
import AddReplyScreen from './AddReplyScreen';
import EditReplyScreen from './EditReplyScreen';


export function registerScreens() {
  Navigation.registerComponent(registeredScreens.QuickReplies, () => QuickReplies);
  Navigation.registerComponent(registeredScreens.RepliesEditor, () => RepliesEditor);
  Navigation.registerComponent(registeredScreens.AddReplyScreen, () => AddReplyScreen);
  Navigation.registerComponent(registeredScreens.EditReplyScreen, () => EditReplyScreen);
}
