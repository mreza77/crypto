import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from "react-redux";

import CryptoPriceTable from '../Components/Custom/CryptoPriceTable';
import Screen from '../Components/Common/Screen';
import { setCryptoData, selectData } from "../Redux/reducers/CryptoReducer";

const data = {
    method: "SUBSCRIBE",
    params:
        [
            "btcusdt@aggTrade",
            "btcusdt@depth",
        ],
    id: 1
}

const DashboardScreen = () => {
    const ws = useRef(null)
    const dispatch = useDispatch();
    const cryptoData = useSelector(selectData);

    useEffect(() => {
        const endPoint = "wss://stream.binance.com:9443"

        ws.current = new WebSocket(endPoint + '/ws/stream.binance.com');
        ws.current.onopen = () => {
            ws.current.binaryType = "arraybuffer";
            const json = JSON.stringify(data);
            ws.current.send(json)
        }
        ws.current.onmessage = (e) => {
            //  console.log(`Log:${e.data}`)
            const json = JSON.parse(e.data);
            json.p && dispatch(setCryptoData(json))
        };
        ws.current.onerror = (e) => {
            console.log(`error: ${e.message}`);
        };

    }, [])


    return (
        <Screen>
            <View style={styles.container}>
                <CryptoPriceTable
                    data={cryptoData}
                ></CryptoPriceTable>
            </View>
        </Screen>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: hp(4)
    }
});