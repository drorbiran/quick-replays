import React, {PureComponent, PropTypes} from 'react';
import {ScrollView} from 'react-native';
import {View, Button} from 'react-native-ui-lib';
import ItemEditor from '../components/ItemEditor';
import _ from 'lodash';
import {registeredScreens} from '../constants/constants';
import {connect} from 'remx';

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';


class RepliesEditor extends PureComponent {

  static propTypes = {
    replies: PropTypes.array,
    navigator: PropTypes.object
  };

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'back',
        id: 'back',
        testId: 'back-btn'
      }
    ]
  }

  constructor(props) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));    
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'back') {
        this.onBackPress();
      }
    }
  }

  onBackPress = () => {
    keyboardStore.setters.setKeyboardScreen(undefined);
    this.props.navigator.dismissModal({animationType: 'slide-down'});
  }

  onAddPress = () => {
    this.props.navigator.showModal({
      screen: registeredScreens.AddReplyScreen,
      title: 'Add Reply'
    });
  }

  onEditItem = reply => {
    this.props.navigator.showModal({
      screen: registeredScreens.EditReplyScreen,
      title: 'Edit Reply',
      passProps: {reply}
    });
  }

  onReplyPress = reply => {
    repliesStore.setters.setSelectedReply(reply);
    keyboardStore.setters.setKeyboardScreen(undefined);
    this.props.navigator.dismissModal({animationType: 'slide-down'});
  }


  renderReplies = () => {
    return this.props.replies.map(reply => {
      return (<ItemEditor
        item={reply}
        onEditItem={this.onEditItem}
        onDeleteItem={this.onDeleteItem}
        key={reply.key}
        onItemPress={this.onReplyPress}
      />);
    });
  }

  render() {
    return (
      <ScrollView style={styles.repliesContainer} testID="repliesEditor" >
        {this.renderReplies()}
        <View center style={styles.buttonsContainer}>
          <Button
            green40
            label="Add"
            size="medium"
            outline
            outlineColor="#84D3A0"
            style={styles.buttonStyle}
            onPress={this.onAddPress}
            testID="add-new-reply-btn"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  repliesContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonsContainer: {
    marginTop: 24
  },
  buttonStyle: {
    marginBottom: 12
  }
};

function mapStateToProps() {
  return {
    replies: repliesStore.getters.getReplies()
  };
}

export default connect(mapStateToProps)(RepliesEditor);
