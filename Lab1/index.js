/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Home';
import { registerRootComponent } from "expo";
import {name as appName} from './app.json';

if (Platform.OS == "android") {
    registerRootComponent(Home);
} else {
    AppRegistry.registerComponent(appName, () => Home);
}