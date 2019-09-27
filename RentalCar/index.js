/**
 * @format
 */


import { AppRegistry } from 'react-native';
// import App from './App';
//Components
import {name as appName} from './app.json';
import appcontainer from './appcontainer';
import { YellowBox } from 'react-native';
import App from './App';
import horizontal from './components/Horizontal';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

AppRegistry.registerComponent(appName, () => appcontainer);
