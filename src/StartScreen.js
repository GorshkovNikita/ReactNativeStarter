import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import Checkout from 'react-native-yandex-checkout';

class StartScreen extends Component {
    componentWillMount() {
        const checkoutSettings = {
            shopName: "FitSide",
            description: "",
            paymentMethodTypes: ["SBERBANK", "GOOGLE_PAY", "YANDEX_MONEY", "BANK_CARD"],
            clientApplicationKey: "live_hrrN9G6VgFQCsBAQPoOB_hYw_8m6ZUHdB7j_GalMxJA",
            shopId: "522638"
        };
        Checkout.attach(checkoutSettings);
        DeviceEventEmitter.addListener('checkoutTokenized', (e) => console.log(e));
    }

    render() {
        return <View>
            <Text>FITSIDE</Text>
            <View>
                <Button onPress={() => Checkout.tokenize("12")} title="Tokenize"/>
            </View>
        </View>;
    }
}

export default StartScreen;