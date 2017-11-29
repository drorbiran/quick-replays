const {Navigation} = require('react-native-navigation');
const {registeredScreens} = require('../constants/constants');

const QuickReplies = require('./QuickReplies');
const RepliesEditor = require('./RepliesEditor');
const AddReplyScreen = require('./AddReplyScreen');
const EditReplyScreen = require('./EditReplyScreen');


export function registerScreens() {
  Navigation.registerComponent(registeredScreens.QuickReplies, () => QuickReplies);
  Navigation.registerComponent(registeredScreens.RepliesEditor, () => RepliesEditor);
  Navigation.registerComponent(registeredScreens.AddReplyScreen, () => AddReplyScreen);
  Navigation.registerComponent(registeredScreens.EditReplyScreen, () => EditReplyScreen);
}
