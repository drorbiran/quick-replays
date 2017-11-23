import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Button, Colors} from 'react-native-ui-lib';

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';

class ReplysEditor extends PureComponent {
    
    componentWillMount(){
      KeyboardRegistry.toggleExpandedKeyboard('ReplysEditor')
    }
  
    render() {
        console.log('rendering replysEditor');
        
        return (
          <View style={styles.container} testID="ReplysEditor" >
            <View flex bottom centerH>
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
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  };

  KeyboardRegistry.registerKeyboard('ReplysEditor', () => ReplysEditor);