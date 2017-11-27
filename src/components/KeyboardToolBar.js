import React, { PureComponent, PropTypes } from 'react';
import { View, TextInput } from 'react-native-ui-lib';
import { Button } from 'react-native-ui-lib';

class KeyboardToolBar extends PureComponent {
    
    static PropTypes = {
        onFocus: PropTypes.func,
        setRef: PropTypes.func,
        actionLabel: PropTypes.string,
        onPress: PropTypes.func
    };
    
    render() {
        return (
            <View bottom background-dark80>
            <TextInput
                placeholder="Type Your Message"
                onFocus={this.props.onFocus}
                ref={r => this.props.setRef(r)}
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