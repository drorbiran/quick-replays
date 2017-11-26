import React, { PureComponent, PropTypes } from 'react';
import { View, TextInput } from 'react-native-ui-lib'
class ItemEditor extends PureComponent {
    
    static PropTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        onTitleChange: PropTypes.func
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    placeholder = "Add another quick reply"
                    value={this.props.title}
                    onChangeText={(text) => console.log(text)}
                    maxLength={42}
                />
                <TextInput
                    placeholder = "Add your click reply content"
                    multiline
                    value={this.props.description}
                    onChangeText={(text) => console.log(text)}
                    maxLength={420}
                />          
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        marginTop: 24,
        marginLeft: 12,
        marginRight: 12,
        padding: 12
    }
}

export default ItemEditor;