import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CustomText from '../Common/CustomText';

const TableRow = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={[styles.column, { width: wp(20) }]}>
                <CustomText numberOfLLines={1}>{item?.data?.s}</CustomText>
            </View>
            <View style={styles.column}>
                <CustomText numberOfLines={1}>{item?.data?.l}</CustomText>
            </View>
            <View style={styles.column}>
                <CustomText numberOfLines={1}>{item?.data?.p}</CustomText>
            </View>
            <View style={styles.column}>
                <CustomText numberOfLines={1}>{item?.data?.q}</CustomText>
            </View>
            <View style={styles.column}>
                <CustomText numberOfLines={1}>{item?.data?.E}</CustomText>
            </View>
        </View>
    )
}

export default TableRow

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: wp(90),
        marginBottom: hp(1)
    },
    column: {
        width: wp(17.5),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center",
    }
})