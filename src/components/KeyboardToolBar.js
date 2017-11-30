const React = require('react');
const {PureComponent, PropTypes} = require('react');
const {View, Button, Colors} = require('react-native-ui-lib');
const { TextInput } = require('react-native');

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
        <View style={styles.KeyboardToolBarContainer}>
          <View style={styles.TextInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Type Your Message"
              onFocus={this.props.onFocus}
              ref={r => this.props.setRef(r)}
              value={this.state.text}
              onChangeText={text => this.setState({text})}
            />
            <View style={styles.buttonContainer}>
              <Button
                label="Send"
                right
                link
                size="small"
                center
                onPress={this.handleSubmit}
              />
            </View>
          </View>
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

const styles = {
  KeyboardToolBarContainer: {
    backgroundColor: Colors.dark80
  },
  TextInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  textInputStyle: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

module.exports = KeyboardToolBar;
