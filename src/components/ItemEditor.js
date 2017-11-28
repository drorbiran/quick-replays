import React, {PureComponent, PropTypes} from 'react';
import {View, TextInput, Button} from 'react-native-ui-lib';

class ItemEditor extends PureComponent {

    static propTypes = {
      title: PropTypes.string,
      description: PropTypes.string,
      onTitleChange: PropTypes.func,
      onDescriptionChange: PropTypes.func,
      onDeleteItem: PropTypes.func,
      itemKey: PropTypes.string
    };

    render() {
      return (
        <View style={styles.containerStyle}>
          <View style={styles.titleAndButtonContainer}>
            <TextInput
              containerStyle={styles.titleInputStyle}
              placeholder="Add your quick reply title"
              value={this.props.title}
              onChangeText={newTitle => this.props.onTitleChange(newTitle, this.props.itemKey)}
              maxLength={42}
              testID={this.props.itemKey}
            />
            <View>
              <Button
                blue40 bottom
                label="Delete"
                size="small"
                link
                color="#F57871"
                onPress={() => this.props.onDeleteItem(this.props.itemKey)}
                testID={`${this.props.itemKey}Delete`}
              />
            </View>
          </View>
          <TextInput
            placeholder="Add your click reply content"
            multiline
            value={this.props.description}
            onChangeText={newDescription => this.props.onDescriptionChange(newDescription, this.props.itemKey)}
            blurOnSubmit
            maxLength={420}
            testID={this.props.itemKey + 'Description'}
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
  },
  titleAndButtonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  titleInputStyle: {
    flex: 1
  }
};

export default ItemEditor;
