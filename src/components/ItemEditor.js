import React, { PureComponent, PropTypes } from 'react';
import { View, TextInput } from 'react-native-ui-lib'
class ItemEditor extends PureComponent {
    
    static PropTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        onTitleChange: PropTypes.func,
        onDescriptionChange: PropTypes.func,
        itemKey: PropTypes.string
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    placeholder = "Add another quick reply"
                    value={this.props.title}
                    onChangeText={(newTitle) => this.props.onTitleChange(newTitle,this.props.itemKey)}
                    maxLength={42}
                />
                <TextInput
                    placeholder = "Add your click reply content"
                    multiline
                    value={this.props.description}
                    onChangeText={(newDescription) => this.props.onDescriptionChange(newDescription,this.props.itemKey)}
                    blurOnSubmit={true}
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
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#C2C7CB' 
    }
}

export default ItemEditor;