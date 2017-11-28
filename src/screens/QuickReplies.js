import React, {PureComponent, PropTypes} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {connect} from 'remx';
import {KeyboardAccessoryView} from 'react-native-keyboard-input';

import './ReplySelector';
import './RepliesEditor';
import KeyboardToolBar from '../components/KeyboardToolBar';

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class QuickReplies extends PureComponent {

    static propTypes = {
      navigator: PropTypes.func,
      selectedReply: PropTypes.object,
      keyBoardScreen: PropTypes.string
    };

    keyboardToolbarContent = () => {
      return (
        <KeyboardToolBar
          onFocus={() => keyboardStore.setters.setKeyboardScreen(undefined)}
          setRef={r => this.textInputRef = r}
          actionLabel="Choose a quick reply"
          onPress={() => keyboardStore.setters.setKeyboardScreen('ReplySelector')}
          onKeyboardSend={description => repliesStore.setters.setSelectedReply({description})}
        />
      );
    }

    onKeyboardItemSelected = () => {
      this.props.navigator.showModal({
        screen: 'RepliesEditor',
        title: 'Edit Replies'
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

export default connect(mapStateToProps)(QuickReplies);