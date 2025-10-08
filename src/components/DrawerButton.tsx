import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const DrawerButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>서랍</Text>
        </Pressable>
    );
};

export default DrawerButton;

const styles = StyleSheet.create({});
