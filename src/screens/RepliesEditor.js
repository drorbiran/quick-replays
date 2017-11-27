import React, { PureComponent, Component } from 'react'
import { ScrollView } from 'react-native';
import {View, Text, Button, Colors} from 'react-native-ui-lib';
import ItemEditor from '../components/ItemEditor';
import _ from 'lodash';

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';

import * as repliesStore from '../stores/replies/replies.store';
import * as repliesActions from '../stores/replies/replies.actions';
import * as keyboardStore from '../stores/keyboard/keyboard.store';


class RepliesEditor extends PureComponent {
    
    state = {
      replies: this.props.replies
    }
  
    onSavePress = () => {   
      repliesStore.setters.setReplies(this.state.replies);
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({ animationType: 'slide-down'});
    }
    
    onCancelPress = () => {
      this.setState(() => {
        replies: this.props.replies;
      })
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({ animationType: 'slide-down'});
    }

    onAddPress = () => {
      this.props.navigator.showModal({
        screen: 'AddReplyScreen',
        title: 'Add Reply'
      })
    }

    onDeleteItem = (key) => {
      const newReplies = repliesActions.deleteReplyByKey(key,this.state.replies);
      this.setState(() => {return { replies: newReplies }})      
    }


    renderReplies = () => {
      return this.state.replies.map(({key, title, description}) => {
        return <ItemEditor
          title= {title}
          description = {description}
          onTitleChange={_.debounce(this.onTitleChange,300)}
          onDescriptionChange={_.debounce(this.onDescriptionChange,300)}
          onDeleteItem={this.onDeleteItem}
          itemKey={key}
          key={key}
        />
      })
    }

    onTitleChange = (newTitle, key) => {
      const newReplies = this.state.replies.map((reply) => {
        if (reply.key !== key) {
            return reply
        } else {
            return {
                ...reply,
                ...{title: newTitle}
            }
        }
      })
      this.setState(() => {return { replies: newReplies }})
    }

    onDescriptionChange = (newDescription, key) => {
      const newReplies = this.state.replies.map((reply) => {
        if (reply.key !== key) {
            return reply
        } else {
            return {
                ...reply,
                ...{description: newDescription}
            }
        }
      })
      this.setState(() => {return { replies: newReplies }})
    }
  
    render() {   
        return (
          <ScrollView style={styles.repliesContainer} testID="repliesEditor" >
            {this.renderReplies()}
            <View center style={styles.buttonsContainer}>
              <Button green40
                label="Add"
                size="medium"
                outline
                outlineColor='#84D3A0'
                style={{marginBottom: 20}}
                onPress={this.onAddPress}
                testID="addButton"
              />
              <Button red40
                label="Cancel"
                size="medium"
                outline
                outlineColor='#F57871'
                style={{marginBottom: 20}}
                testID="cancelButton"
                onPress={this.onCancelPress}
              />
              <Button blue40
                label="Save"
                size="medium"
                outline
                outlineColor='#57a8ef'
                style={{marginBottom: 20}}
                testID="saveButton"
                onPress={this.onSavePress}
              />
            </View>
          </ScrollView>
        );
    }
}

const styles ={
    repliesContainer : {
      flex: 1
    },
    
    buttonsContainer: {
      marginTop: 24
    }

  };

function mapStateToProps() {
    return {
        replies : repliesStore.getters.getReplies()
    };
}

export default connect(mapStateToProps)(RepliesEditor);

KeyboardRegistry.registerKeyboard('RepliesEditor', () => ConnectedRepliesEditor);