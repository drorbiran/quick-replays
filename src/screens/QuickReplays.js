import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib'
import { connect } from 'remx';

import * as store from '../stores/replays/replays.store';
import * as actions from '../stores/replays/replays.actions';

class QuickReplays extends PureComponent {

    componentWillMount(){
        
    }
 
    render() {
        return (
            <View flex paddingH-25 paddingT-120>
                <Text>
                    {this.props.selectedReplay.description}
                </Text>
            </View>
        );
    }
}

function mapStateToProps() {
    return {
        selectedReplay: store.getters.getSelectedReplay()
    };
}

export default connect(mapStateToProps)(QuickReplays);