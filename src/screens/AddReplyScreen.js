import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native-ui-lib'
import { connect } from 'remx';

import * as repliesActions from '../stores/replies/replies.actions';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class AddReplyScreen extends PureComponent {
    
    state = {
        title: "",
        description: ""
    }
    
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Add',
                id: 'add',
                testID: 'AddBtn',

            }
        ],
        leftButtons: [
            {
                title: 'Cancel',
                id: 'cancel',
                testID: 'cancelBtn'
            }
        ]
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = (event) => {        
        if (event.type == 'NavBarButtonPress') {
            switch (event.id) {
                  case 'add':
                    repliesActions.addNewReply(this.state);
                    keyboardStore.setters.setKeyboardScreen(undefined);                    
                    this.props.navigator.dismissAllModals({animationType: 'slide-down'});
                    break;
                  case 'cancel':
                    console.log('cancel');
                    break;
                  default:
                     console.log('default: ', event.id)
              }
        }  
    }
    
    
    render() {
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    placeholder="Add your quick reply title"
                    value={this.state.title}
                    onChangeText={(newTitle) => this.setState((prevState) => ({...prevState, title: newTitle}))}
                    maxLength={42}
                    testID="newTitleInput"
                />
                <TextInput
                    placeholder="Add your quick reply content"
                    multiline
                    value={this.state.description}
                    onChangeText={(newDescription) => this.setState((prevState) => ({...prevState, description: newDescription}))}
                    blurOnSubmit={true}
                    maxLength={420}
                    testID="newDescriptionInput"
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        marginTop: 24,
        marginLeft: 12,
        marginRight: 12,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#C2C7CB'
    }
}

export default AddReplyScreen;