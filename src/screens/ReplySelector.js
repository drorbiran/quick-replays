import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Button, Colors} from 'react-native-ui-lib';

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';

import * as stores from '../stores/replies/replies.store'

class replySelector extends PureComponent {
    
  onButtonPress = () => {
    console.log('edit button was pressed');
    KeyboardRegistry.onItemSelected('replySelector');
  }

  renderReplies= () => {
      return (
        <Text>Replies will be here</Text>
      )
  }

  
  render() {
        return (
          <View style={styles.container} testID="replySelector" >
            {this.renderReplies()}
            <Button blue40 bottom
              label="edit"
              size="medium"
              outline
              outlineColor='#57a8ef'
              style={{marginBottom: 20}}
              onPress={this.onButtonPress}
              testID="editRepliesButton"
            />
          </View>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  };
 
function mapStateToProps(){
  return {
    replies: [1,2,3]
  }
}
  
connect(mapStateToProps)(replySelector);

KeyboardRegistry.registerKeyboard('replySelector', () => replySelector);