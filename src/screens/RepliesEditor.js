import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Button, Colors} from 'react-native-ui-lib';
import ItemEditor from '../components/ItemEditor'

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';


class RepliesEditor extends PureComponent {
    
    onCancelPress = () => {
      keyboardStore.setters.setKeyboardScreen(undefined);
      this.props.navigator.dismissModal({ animationType: 'slide-down'});
    }

    renderReplies = () => {
      return this.props.replies.map(({key, title, description}) => {
        return <ItemEditor
          title= {title}
          description = {description}
          onTitleChange={this.onTitleChange}
          onDescriptionChange={this.onDescriptionChange}
          itemKey={key}
          key={key}
        />
      })
    }

    onTitleChange = (newTitle, key) => {
      repliesStore.setters.setReplyTitle(key, newTitle);
    }

    onDescriptionChange = (newDescription, key) => {
      repliesStore.setters.setReplyDescription(key, newDescription);      
    }
  
    render() {   
        return (
          <View style={styles.container} testID="repliesEditor" >
            {this.renderReplies()}
            <View center>
              <Button green40
                label="Add"
                size="medium"
                outline
                outlineColor='#84D3A0'
                style={{marginBottom: 20}}
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
              />
            </View>
          </View>
        );
    }
}

const styles ={
    container: {
      flex: 1
    },
  };

function mapStateToProps() {
    return {
        replies : repliesStore.getters.getReplies()
    };
}

export default connect(mapStateToProps)(RepliesEditor);

KeyboardRegistry.registerKeyboard('RepliesEditor', () => ConnectedRepliesEditor);