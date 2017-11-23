import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import {View, Text, Button, Colors} from 'react-native-ui-lib';

import { connect } from 'remx';
import {KeyboardRegistry} from 'react-native-keyboard-input';

class repliesEditor extends PureComponent {
    
    componentDidMount(){
      KeyboardRegistry.toggleExpandedKeyboard('repliesEditor')
    }
  
    render() {
        console.log('rendering repliesEditor');
        
        return (
          <View style={styles.container} testID="repliesEditor" >
            <View>
              <Text> The replies will be here </Text>
            </View>
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
      backgroundColor: '#red',
    },
  };

  KeyboardRegistry.registerKeyboard('repliesEditor', () => repliesEditor);