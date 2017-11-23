import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity, Platform} from 'react-native';
import {View, Text, Button, TextInput, Color} from 'react-native-ui-lib'
import { connect } from 'remx';
import {KeyboardAccessoryView, KeyboardUtils, KeyboardRegistry} from 'react-native-keyboard-input';


import "./ReplySelector";
import "./ReplysEditor";


import * as store from '../stores/replys/replys.store';
import * as actions from '../stores/replys/replys.actions';

class QuickReplys extends PureComponent {
    
    constructor(props){
        super(props);
        
        this.state = {
            textValue: "",
            customKeyboard: {
                component: undefined,
                initialProps: undefined,
              },
            receivedKeyboardData: undefined,
        }
    }

    componentWillMount(){
        
    }

    resetKeyboardView() {
        this.setState({customKeyboard: {}});
    }

    openReplysEditor = () => {
        console.log('taking you to the ReplysEdit screen');        
        this.showKeyboardView('ReplysEditor')
    };

    keyboardToolbarContent = () => {
        return (
            <View style={styles.ToolbarContainer} bottom background-dark80>
                <TextInput
                    placeholder="Type Your Message"
                    onFocus={() => this.resetKeyboardView()}
                    ref={r => this.textInputRef = r}
                />
                <Button center
                    testID="action1"
                    label="Choose a quick reply"
                    onPress={() => this.showKeyboardView('ReplySelector')}
                    size="small"
                    fullWidth={true}
                />
            </View>
        )
      }

    showKeyboardView = (component, props) => {
        console.log('changing view');
        this.setState({
        customKeyboard: {
            component,
            initialProps: props,
        },
        });
    }
 
    render() {
        return (
            <View flex paddingH-25 paddingT-120>
                <Text center dark10 text60>
                    {this.props.selectedReply.description}
                </Text>
                <KeyboardAccessoryView
                    renderContent={this.keyboardToolbarContent}
                    kbComponent={this.state.customKeyboard.component}
                    kbInitialProp={this.state.customKeyboard.initialProps}
                    kbInputRef={this.textInputRef}
                    onItemSelected={this.openReplysEditor}
                />
            </View>
        );
    }
}

const IsIOS = Platform.OS === 'ios';
const styles = {
    ToolbarContainer : {
        
    }
}

function mapStateToProps() {
    return {
        selectedReply: store.getters.getSelectedReply()
    };
}

export default connect(mapStateToProps)(QuickReplys);