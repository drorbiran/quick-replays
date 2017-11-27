import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity, Platform} from 'react-native';
import {View, Text, Button, TextInput, Color} from 'react-native-ui-lib'
import { connect } from 'remx';
import {KeyboardAccessoryView, KeyboardUtils, KeyboardRegistry} from 'react-native-keyboard-input';


import "./ReplySelector";
import "./RepliesEditor";

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';
import * as actions from '../stores/replies/replies.actions';

class QuickReplies extends PureComponent {
    
    keyboardToolbarContent = () => {
        return (
            <View bottom background-dark80>
                <TextInput
                    placeholder="Type Your Message"
                    onFocus={() => keyboardStore.setters.setKeyboardScreen(undefined)}
                    ref={r => this.textInputRef = r}
                />
                <Button center
                    testID="action1"
                    label="Choose a quick reply"
                    onPress={() => keyboardStore.setters.setKeyboardScreen('ReplySelector')}
                    size="small"
                    fullWidth={true}
                />
            </View>
        )
    }

    onKeyboardItemSelected = (keyboardId, params) => {
        this.props.navigator.showModal({
            screen: 'RepliesEditor',
            title: 'Edit Replies'
        })
    }
 
    render() {
        console.log('rendering QuickReplies screen');
        return (
            <View flex paddingH-25 paddingT-120>
                <Text center dark10 text60>
                    {this.props.selectedReply.description}
                </Text>
                <KeyboardAccessoryView
                    renderContent={this.keyboardToolbarContent}
                    kbComponent={this.props.keyBoardScreen}
                    kbInputRef={this.textInputRef}
                    onItemSelected={this.onKeyboardItemSelected}
                />
            </View>
        );
    }
}

function mapStateToProps() {
    return {
        selectedReply: repliesStore.getters.getSelectedReply(),
        keyBoardScreen: keyboardStore.getters.getKeyboardScreen()
    };
}

export default connect(mapStateToProps)(QuickReplies);