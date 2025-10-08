import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS } from '../constants/colors';

type Props = DrawerContentComponentProps;

const CustomDrawerContent = (props: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={styles.contentContainer}>
                <Pressable style={styles.profileContainer}>
                    <View style={styles.userImageContainer}>
                        <Image source={require('../assets/default-user.png')} style={styles.userImage} />
                    </View>
                    <Text style={styles.nickname}>홍길동</Text>
                </Pressable>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.bottomContainer}>
                <Text style={styles.menuText}>설정</Text>
            </View>
        </SafeAreaView>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.WHITE },
    contentContainer: {
        gap: 5,
        marginTop: 30,
    },
    bottomContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: COLORS.GRAY_200,
    },
    menuText: { fontSize: 14 },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 30,
    },
    userImageContainer: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    userImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    nickname: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
