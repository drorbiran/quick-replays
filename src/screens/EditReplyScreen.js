import React, {Component, PropTypes} from 'react';
import {View, TextInput, Button, Colors} from 'react-native-ui-lib';

import * as repliesActions from '../stores/replies/replies.actions';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class EditReplyScreen extends Component {

    state = {
      title: this.props.reply.title,
      description: this.props.reply.description,
    }

    static propTypes = {
      navigator: PropTypes.object,
      reply: PropTypes.object
    }

    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

      this.updateButtons(true);
    }

    updateButtons = disableSave => {
      this.props.navigator.setButtons({
        rightButtons: [
          {
            title: 'Save',
            id: 'save',
            testID: 'saveBtn',
            disabled: disableSave
          }
        ],
        leftButtons: [
          {
            title: 'Cancel',
            id: 'cancel',
            testID: 'cancelBtn'
          }
        ]
      });
    }

    onNavigatorEvent = event => {
      if (event.type === 'NavBarButtonPress') {
        switch (event.id) {
          case 'save':
            this.onSavePress();
            break;
          case 'cancel':
            this.props.navigator.dismissModal({animationType: 'slide-down'});
            break;
          default:
            console.log('default: ', event.id);
        }
      }
    }

    onSavePress = () => {
      repliesActions.updateReply({...this.props.reply, ...this.state});
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({animationType: 'slide-down'});
    }

    onDeletePress = () => {
      repliesActions.deleteReplyByKey(this.props.reply.key);
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({animationType: 'slide-down'});
    }

    onTitleChange = async title => {
      await this.setState({title});
      this.updateEditBtn();
    }

    onDescriptionChange = async description => {
      await this.setState({description});
      this.updateEditBtn();
    }

    updateEditBtn() {
      const {title, description} = this.state;
      const disableSave = ((title === this.props.reply.title) && (description === this.props.reply.description));
      this.updateButtons(disableSave);
    }

    render() {
      return (
        <View style={styles.pageStyle}>
          <View style={styles.containerStyle}>
            <TextInput
              placeholder="Add your quick reply title"
              value={this.state.title}
              onChangeText={this.onTitleChange}
              maxLength={42}
              testID="newTitleInput"
            />
            <TextInput
              placeholder="Add your quick reply content"
              multiline
              value={this.state.description}
              onChangeText={this.onDescriptionChange}
              blurOnSubmit
              maxLength={420}
              testID="newDescriptionInput"
            />
          </View>
          <Button
            bottom
            center
            testID="deleteBtn"
            label="Delete"
            backgroundColor={Colors.red40}
            onPress={this.onDeletePress}
            size="small"
            fullWidth
          />
        </View>
      );
    }
}

const styles = {
  pageStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  containerStyle: {
    marginTop: 24,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  }
};

export default EditReplyScreen;
