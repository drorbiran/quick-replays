import React, {PureComponent, PropTypes} from 'react';
import {Button, View, Text} from 'react-native-ui-lib';


class ButtonsList extends PureComponent {

  static propTypes = {
    buttonsList: PropTypes.array,
    onPress: PropTypes.func
  };

  renderButtons() {
    return this.props.buttonsList.map(item => {
      return (<Button
        label={item.title}
        size="small"
        link
        testID={item.key}
        key={item.key}
        onPress={() => this.props.onPress(item)}
      />);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderButtons()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around'
  }
};

export default ButtonsList;
