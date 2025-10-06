import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AuthHomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Login')}>로그인으로 이동</Text>
        </SafeAreaView>
    );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({});
