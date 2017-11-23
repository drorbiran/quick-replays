import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Button, Colors} from 'react-native-ui-lib';

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';



class ReplySelector extends PureComponent {
    
  onButtonPress = () => {
    console.log('edit button was pressed');
    KeyboardRegistry.onItemSelected('ReplySelector');
  }
  
  render() {
        return (
          <View style={styles.container} testID="ReplySelector" >
            <Text text70>
              ReplysSelector
            </Text>
            <Button blue40 bottom
              label="edit"
              size="medium"
              outline
              outlineColor='#57a8ef'
              style={{marginBottom: 20}}
              onPress={this.onButtonPress}
              testID="editReplaysButton"
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

KeyboardRegistry.registerKeyboard('ReplySelector', () => ReplySelector);