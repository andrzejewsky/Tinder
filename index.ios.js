import { AppRegistry } from 'react-native';
import App from './src/App';
import Navigator from './src/Common/Navigator';
import React from 'react';

const ApplicationIOS = () => <App>
    <Navigator />
</App>;

AppRegistry.registerComponent('tinder', () => ApplicationIOS);
