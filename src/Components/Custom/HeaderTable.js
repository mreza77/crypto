import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Config/colors';
import CustomText from '../Common/CustomText';
import nouns from '../../Enums/nouns.json';

const parts = [
    { id: 1, name: nouns["cryptoName"] },
    { id: 2, name: nouns["spread"] },
    { id: 3, name: nouns["sell"] },
    { id: 4, name: nouns["buy"] },
    { id: 5, name: nouns["chg"] },
]

const HeaderTable = () => {
    return (
        <View style={styles.container}>
            {parts.map((item, index) => {
                return (
                    <View style={styles.textContainer} key={index}>
                        <CustomText style={styles.text}>{item.name}</CustomText>
                    </View>
                )
            })}
        </View>
    )
}

export default HeaderTable

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        height: hp(4),
        borderRadius: wp(2),
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: colors.light,
    },
    textContainer: {
        width: wp(17.5),
        alignItems: "center",
    }
});