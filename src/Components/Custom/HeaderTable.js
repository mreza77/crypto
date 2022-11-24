import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Config/colors';
import CustomText from '../Common/CustomText';
import nouns from '../../Enums/nouns.json';


const HeaderTable = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <CustomText style={styles.text}>{nouns["cryptoName"]}</CustomText>
            </View>
            <View style={styles.textContainer}>
                <CustomText style={styles.text}>{nouns["spread"]}</CustomText>
            </View>

            <View style={styles.textContainer}>
                <CustomText style={styles.text}>{nouns["sell"]}</CustomText>
            </View>

            <View style={styles.textContainer}>
                <CustomText style={styles.text}>{nouns["buy"]}</CustomText>
            </View>

            <View style={styles.textContainer}>
                <CustomText style={styles.text}>{nouns["chg"]}</CustomText>
            </View>
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