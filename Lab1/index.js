/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Home';
import CustomInput from './src/Custom-Input';
import { registerRootComponent } from "expo";
import {name as appName} from './app.json';

if (Platform.OS == "android") {
    registerRootComponent(CustomInput);
} else {
    AppRegistry.registerComponent(appName, () => CustomInput);
}