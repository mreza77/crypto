import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import colors from '../../Config/colors';

const Screen = ({ children, style }) => {
    return (
        <>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={colors.background}
            ></StatusBar>
            <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
        </>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        flex: 1,
    }
});