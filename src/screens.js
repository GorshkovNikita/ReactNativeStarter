import { Routes } from './constants';
import { Navigation } from 'react-native-navigation';
import StartScreen from './StartScreen';

export function registerScreens(store, Provider) {
    Navigation.registerComponent(Routes.START, () => StartScreen, store, Provider);
}