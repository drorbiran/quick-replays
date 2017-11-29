import React, {PureComponent, PropTypes} from 'react';
import {View, Button} from 'react-native-ui-lib';
import {connect} from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';
import {registeredScreens} from '../constants/constants';
import ButtonsList from '../components/ButtonsList';

import * as repliesStore from '../stores/replies/replies.store';

class ReplySelector extends PureComponent {

  static propTypes = {
    replies: PropTypes.array,
    navigator: PropTypes.object
  };

  handleReplyPress = reply => {
    repliesStore.setters.setSelectedReply(reply);
  }

  onEditPress = () => {
    KeyboardRegistry.onItemSelected(registeredScreens.ReplySelector)
  }

  render() {
    return (
      <View style={styles.container} testID="replySelector" >
        <ButtonsList
          buttonsList={this.props.replies}
          onPress={this.handleReplyPress}
        />
        <Button
          blue40
          bottom
          label="edit"
          size="medium"
          outline
          outlineColor="#57a8ef"
          style={styles.replyBtn}
          onPress={this.onEditPress}
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
  replyBtn: {
    marginBottom: 20
  }
};

function mapStateToProps() {
  return {
    replies: repliesStore.getters.getReplies()
  };
}

const ConnectedReplySelector = connect(mapStateToProps)(ReplySelector);

KeyboardRegistry.registerKeyboard(registeredScreens.ReplySelector, () => ConnectedReplySelector);
