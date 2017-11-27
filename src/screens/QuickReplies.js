import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, Platform } from 'react-native';
import { View, Text, Button, TextInput, Color } from 'react-native-ui-lib'
import { connect } from 'remx';
import { KeyboardAccessoryView, KeyboardUtils, KeyboardRegistry } from 'react-native-keyboard-input';


import "./ReplySelector";
import "./RepliesEditor";
import KeyboardToolBar from '../components/KeyboardToolBar'

import * as repliesStore from '../stores/replies/replies.store';
import * as keyboardStore from '../stores/keyboard/keyboard.store';
import * as actions from '../stores/replies/replies.actions';

class QuickReplies extends PureComponent {

    keyboardToolbarContent = () => {
        return (
            <KeyboardToolBar
                onFocus={() => keyboardStore.setters.setKeyboardScreen(undefined)}
                setRef={(r) => this.textInputRef = r}
                actionLabel="Choose a quick reply"
                onPress={() => keyboardStore.setters.setKeyboardScreen('ReplySelector')}
                onKeyboardSend={(description) => repliesStore.setters.setSelectedReply({ description })}
            />
        )
    }

    onKeyboardItemSelected = (keyboardId, params) => {
        this.props.navigator.showModal({
            screen: 'RepliesEditor',
            title: 'Edit Replies'
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text center dark10 text60 style={{ marginTop: 48 }}>
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