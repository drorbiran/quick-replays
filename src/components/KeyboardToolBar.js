const React = require('react');
const {PureComponent, PropTypes} = require('react');
const {View, TextInput, Button, Colors} = require('react-native-ui-lib');

class KeyboardToolBar extends PureComponent {

    state = {
      text: ''
    }

    static propTypes = {
      onFocus: PropTypes.func,
      setRef: PropTypes.func,
      actionLabel: PropTypes.string,
      onPress: PropTypes.func,
      onKeyboardSend: PropTypes.func
    };

    handleSubmit = () => {
      this.props.onKeyboardSend(this.state.text);
      this.setState({text: ''});
    }

    render() {
      return (
        <View style={{backgroundColor: Colors.dark80}}>
          <TextInput
            placeholder="Type Your Message"
            onFocus={this.props.onFocus}
            ref={r => this.props.setRef(r)}
            returnKeyType="send"
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            onSubmitEditing={this.handleSubmit}
          />
          <Button
            center
            testID="open-replies-keyboard-bth"
            label={this.props.actionLabel}
            onPress={this.props.onPress}
            size="small"
            fullWidth
          />
        </View>
      );
    }
}

module.exports = KeyboardToolBar;
