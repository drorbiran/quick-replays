import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native-ui-lib'
import { connect } from 'remx';

import * as repliesActions from '../stores/replies/replies.actions';
import * as keyboardStore from '../stores/keyboard/keyboard.store';

class AddReplyScreen extends Component {
    
    state = {
        title: "",
        description: "",
    }
    
    static navigatorButtons = {
        
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)

        this.updateButtons(true);  
    }

    updateButtons =  (disableAdd) => {
        this.props.navigator.setButtons({
            rightButtons: [
                {
                    title: 'Add',
                    id: 'add',
                    testID: 'addBtn',
                    disabled: disableAdd
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

    onNavigatorEvent = (event) => {        
        if (event.type == 'NavBarButtonPress') {
            switch (event.id) {
                  case 'add':
                    this.onAddPress();
                    break;
                  case 'cancel':
                    this.props.navigator.dismissModal({animationType: 'slide-down'});
                    break;
                  default:
                     console.log('default: ', event.id)
              }
        }  
    }

    onAddPress = () => {
        repliesActions.addNewReply(this.state);
        keyboardStore.setters.setKeyboardScreen(undefined);                    
        this.props.navigator.dismissAllModals({animationType: 'slide-down'});
    }
    
    
    onTitleChange = (newTitle) => {
        this.setState({title: newTitle});
        this.updateAddBtn();
    }

    
    onDescriptionChange = (newDescription) => {
        this.setState({description: newDescription});
        this.updateAddBtn();
    }

    updateAddBtn(){
        const titleLength = this.state.title && this.state.title.length;
        const descriptionLength = this.state.description && this.state.description.length;
        const enabledAdd = ((titleLength > 0) && (descriptionLength > 0));
        if (enabledAdd) {
            this.updateButtons(false);
        } else {
            this.updateButtons(true);
        }
    }
    
    render() {
        return (
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