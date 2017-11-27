import React, { PureComponent, PropTypes } from 'react';
import { View, TextInput } from 'react-native-ui-lib';
import { Button } from 'react-native-ui-lib';

class KeyboardToolBar extends PureComponent {
    
    state = {
        text: ""
    }

    static PropTypes = {
        onFocus: PropTypes.func,
        setRef: PropTypes.func,
        actionLabel: PropTypes.string,
        onPress: PropTypes.func,
        onKeyboardSend: PropTypes.func
    };

    handleSubmit = () => {
        this.props.onKeyboardSend(this.state.text);
        this.setState({text: ""})
    }
    
    render() {
        return (
            <View bottom background-dark80>
            <TextInput
                placeholder="Type Your Message"
                onFocus={this.props.onFocus}
                ref={r => this.props.setRef(r)}
                returnKeyType='send'
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={this.handleSubmit}
            />
            <Button center
                testID="action1"
                label={this.props.actionLabel}
                onPress={this.props.onPress}
                size="small"
                fullWidth={true}
            />
            </View>
        );
    }
}

export default KeyboardToolBar;