import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Checkout from 'react-native-yandex-checkout';
import { SHOP_ID, CLIENT_APPLICATION_ID } from './config';

class StartScreen extends Component {
    componentWillMount() {
        const checkoutSettings = {
            shopId: SHOP_ID,
            shopName: "FitSide",
            description: "",
            paymentMethodTypes: ["SBERBANK", "YANDEX_MONEY", "BANK_CARD"], // "GOOGLE_PAY"
            clientApplicationKey: CLIENT_APPLICATION_ID,
            gatewayId: null,
            showLogo: false,
            testMode: true
        };
        Checkout.attach(checkoutSettings);
    }

    componentWillUnmount() {
        Checkout.detach();
    }

    render() {
        return <View>
            <Text>FITSIDE</Text>
            <View>
                <Button onPress={() => Checkout.tokenize("10", {orderId: 1}, (e) => {
                    console.log(e);
                })} title="Tokenize"/>
            </View>
        </View>;
    }
}

export default StartScreen;