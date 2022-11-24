import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Config/colors';

const CustomText = ({ children, style, ...rest }) => {

    return (
        <Text
            style={[styles.default, style]}
            {...rest}
        >{children}</Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    default: {
        color: colors.dark,
        fontWeight: Platform.OS === "ios" ? "600" : "900",
        fontSize: wp(3.5)
    }
});