const React = require('react');
const {PureComponent, PropTypes} = require('react');
const {View, Button} = require('react-native-ui-lib');
const {connect} = require('remx');
const {KeyboardRegistry} = require('react-native-keyboard-input');
const {registeredScreens} = require('../constants/constants');
const ButtonsList = require('../components/ButtonsList');

const repliesStore = require('../stores/replies/replies.store');

class ReplySelector extends PureComponent {

  static propTypes = {
    replies: PropTypes.array,
    navigator: PropTypes.object
  };

  handleReplyPress = reply => {
    repliesStore.setters.setSelectedReply(reply);
  }

  onEditPress = () => {
    KeyboardRegistry.onItemSelected(registeredScreens.ReplySelector);
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
          testID="open-replies-editor"
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
