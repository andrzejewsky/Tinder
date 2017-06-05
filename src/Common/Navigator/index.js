import React from 'react';
import { NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';
import Cards from './../../Cards';
import { bindActionCreators } from 'redux';
import { navigateToMessages } from './actionCreators';
import Messages from './../../Messages';

class Navigator extends React.Component {

    handleRightButton() {
        this.props.navigateToMessages();
        this.refs.nav.push({
            title: 'Messages',
            component: Messages
        });
    }

    render() {
        return <NavigatorIOS 
            ref="nav"
            initialRoute={{
                component: Cards,
                title: 'Tinder clone',
                rightButtonTitle: 'msg',
                onRightButtonPress: this.handleRightButton.bind(this)
            }}
            style={{flex: 1}} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    navigateToMessages: bindActionCreators(navigateToMessages, dispatch)
});


export default connect(null, mapDispatchToProps)(Navigator);