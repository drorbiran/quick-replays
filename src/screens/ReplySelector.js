import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import { View, Text, Button, Colors } from 'react-native-ui-lib';
import { connect } from 'remx';
import { KeyboardRegistry } from 'react-native-keyboard-input';

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class ReplySelector extends PureComponent {

  renderAvailableReplies = () => {
    return this.props.replies.map((reply) => {
      return <Button
        label={reply.title}
        size='small'
        link
        testID={reply.key}
        key={reply.key}
        onPress={() => repliesStore.setters.setSelectedReply(reply)}
      />
    })
  }

  render() {
    return (
      <View style={styles.container} testID="replySelector" >
        {this.renderAvailableReplies()}
        <Button blue40 bottom
          label="edit"
          size="medium"
          outline
          outlineColor='#57a8ef'
          style={{ marginBottom: 20 }}
          onPress={() => KeyboardRegistry.onItemSelected('ReplySelector')}
          testID="editRepliesButton"
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
};

function mapStateToProps() {
  return {
    replies: repliesStore.getters.getReplies()
  };
}

const ConnectedReplySelector = connect(mapStateToProps)(ReplySelector);

KeyboardRegistry.registerKeyboard('ReplySelector', () => ConnectedReplySelector);