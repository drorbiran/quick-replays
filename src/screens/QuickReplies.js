const React = require('react');
const {PureComponent, PropTypes} = require('react');
const {View, Text} = require('react-native-ui-lib');
const {connect} = require('remx');
const {KeyboardAccessoryView} = require('react-native-keyboard-input');
const {registeredScreens} = require('../constants/constants');

require('./ReplySelector');
require('./RepliesEditor');
const KeyboardToolBar = require('../components/KeyboardToolBar');

const repliesStore = require('../stores/replies/replies.store');
const keyboardStore = require('../stores/keyboard/keyboard.store');

class QuickReplies extends PureComponent {

    static propTypes = {
      navigator: PropTypes.object,
      selectedReply: PropTypes.object,
      keyBoardScreen: PropTypes.string
    };

    keyboardToolbarContent = () => {
      return (
        <KeyboardToolBar
          onFocus={this.resetKeyboard}
          setRef={r => this.textInputRef = r}
          actionLabel="Choose a quick reply"
          onPress={this.openRepliesKeyboard}
          onKeyboardSend={this.onKeyboardSend}
        />
      );
    }

    resetKeyboard = () => {
      keyboardStore.setters.setKeyboardScreen(undefined);
    }

    openRepliesKeyboard = () => {
      keyboardStore.setters.setKeyboardScreen(registeredScreens.ReplySelector);
    }

    onKeyboardSend = description => {
      repliesStore.setters.setSelectedReply({description});
    }

    onKeyboardItemSelected = () => {
      this.props.navigator.showModal({
        screen: registeredScreens.RepliesEditor,
        title: 'Edit Replies',
      });
    }

    render() {
      return (
        <View style={styles.container}>
          <Text center dark10 text60 style={styles.replyText}>
            {this.props.selectedReply.description}
          </Text>
          <KeyboardAccessoryView
            renderContent={this.keyboardToolbarContent}
            kbComponent={this.props.keyBoardScreen}
            kbInputRef={this.textInputRef}
            onItemSelected={this.onKeyboardItemSelected}
          />
        </View>
      );
    }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  replyText: {
    marginTop: 48
  }
};

function mapStateToProps() {
  return {
    selectedReply: repliesStore.getters.getSelectedReply(),
    keyBoardScreen: keyboardStore.getters.getKeyboardScreen()
  };
}

module.exports = connect(mapStateToProps)(QuickReplies);
