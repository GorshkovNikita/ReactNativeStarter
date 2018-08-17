import { Navigation, NativeEventsReceiver } from 'react-native-navigation';
import { NavigatorStyle } from './styles';
import { Routes } from './constants';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import Checkout from 'react-native-yandex-checkout';
import {setNativeExceptionHandler} from 'react-native-exception-handler';

setNativeExceptionHandler((exceptionString) => {
    console.log(exceptionString);
});

const store = createStore(() => {}, {}, applyMiddleware(ReduxThunk));
registerScreens(store, Provider);
// live_s_Pt9I-pZyjbJmAehU8kTt3av_2feEusu0dzWG6QBTo
Navigation.isAppLaunched()
    .then((appLaunched) => {
        if (appLaunched) {
            startApp(Routes.START);
        }
        new NativeEventsReceiver().appLaunched(async () => {
            startApp(Routes.START);
        });
    });

export const startApp = (screen) => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: screen
        },
        appStyle: NavigatorStyle
    });
};