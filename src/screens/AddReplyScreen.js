import React, {Component, PropTypes} from 'react';
import {View, TextInput} from 'react-native-ui-lib';

import * as repliesActions from '../stores/replies/replies.actions';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class AddReplyScreen extends Component {

    state = {
      title: '',
      description: '',
    }

    static propTypes = {
      navigator: PropTypes.object
    }

    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

      this.updateButtons(true);
    }

    updateButtons = disableAdd => {
      this.props.navigator.setButtons({
        rightButtons: [
          {
            title: 'Add',
            id: 'add',
            testID: 'add-btn',
            disabled: disableAdd
          }
        ],
        leftButtons: [
          {
            title: 'Cancel',
            id: 'cancel',
            testID: 'cancel-btn'
          }
        ]
      });
    }

    onNavigatorEvent = event => {
      if (event.type === 'NavBarButtonPress') {
        switch (event.id) {
          case 'add':
            this.onAddPress();
            break;
          case 'cancel':
            this.props.navigator.dismissModal({animationType: 'slide-down'});
            break;
          default:
            console.log('default: ', event.id);
        }
      }
    }

    onAddPress = () => {
      repliesActions.addNewReply(this.state);
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({animationType: 'slide-down'});
    }


    onTitleChange = async title => {
      await this.setState({title});
      this.updateAddBtn();
    }


    onDescriptionChange = async description => {
      await this.setState({description});
      this.updateAddBtn();
    }

    updateAddBtn() {
      const {title, description} = this.state;
      const enabledAdd = title && description;
      this.updateButtons(!enabledAdd);
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
              testID="title-input"
            />
            <TextInput
              placeholder="Add your quick reply content"
              multiline
              value={this.state.description}
              onChangeText={this.onDescriptionChange}
              blurOnSubmit
              maxLength={420}
              testID="description-input"
            />
          </View>
        </View>
      );
    }
}

const styles = {
  pageStyle: {
    flex: 1,
    backgroundColor: 'white'
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

export default AddReplyScreen;
