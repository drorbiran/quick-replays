import React, {PureComponent, PropTypes} from 'react';
import { Button, Card, Text} from 'react-native-ui-lib';

class ItemEditor extends PureComponent {

    static propTypes = {
      item: PropTypes.object,
      onItemPress: PropTypes.func,
      onEditItem: PropTypes.func
    };

    render() {
      const {item} = this.props;
      const {title, description, key} = item;
      return (
        <Card
          containerStyle={styles.containerStyle} 
          onPress={() => this.props.onItemPress(item)}
          testID={`${key}-item`}
        >
          <Card.Section body>
            <Card.Section>
              <Text text50 dark30>{title}</Text>
            </Card.Section>
            <Card.Section>
              <Text text70 dark40>
                {description}
              </Text>
            </Card.Section>
            <Card.Section footer>
              <Text/>
              <Card.Item>
                <Button
                  label="edit" link text70 style={styles.editBtnStyle}
                  testID={`${key}-reply-edit-btn`}
                  onPress={() => this.props.onEditItem(item)}
                />
              </Card.Item>
            </Card.Section>
          </Card.Section>
        </Card>
      );
    }
}

const styles = {
  containerStyle: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    padding: 12,
  },
  editBtnStyle: {
    marginRight: 10
  }
};

export default ItemEditor;
