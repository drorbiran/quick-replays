import React, { PureComponent } from 'react';
import { View, Text } from 'react-native-ui-lib'
import { connect } from 'remx';

class AddReplyScreen extends PureComponent {
    
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Save',
                id: 'save',
                testID: 'saveBtn',

            }
        ],
        leftButtons: [
            {
                title: 'Cancel',
                id: 'cancel',
                testID: 'cancelBtn'
            }
        ]
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = (event) => {        
          switch (event.id) {
              case 'save':
                console.log('save');
                break;
              case 'cancel':
                console.log('cancel');
                break;
              default:
                 console.log('default')
          }
    }
    
    
    render() {
        return (
            <Text>Add Reply Screen</Text>
        );
    }
}

function mapStateToProps() {
    return {
        
    };
}

export default connect(mapStateToProps)(AddReplyScreen);