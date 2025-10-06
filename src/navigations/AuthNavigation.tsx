import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';

import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import {COLORS} from '../constants/colors';

const AuthStack = createStackNavigator({
    screens: {
        AuthHome: {
            screen: AuthHomeScreen,
            options: {
                headerShown: false,
            },
        },
        Login: {
            screen: LoginScreen,
            options: {
                title: '로그인',
            },
        },
        Signup: {
            screen: SignupScreen,
            options: {
                title: '회원가입',
            },
        },
    },
    screenOptions: {
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: COLORS.BLACK,
        headerStyle: {
            backgroundColor: COLORS.WHITE,
            shadowColor: COLORS.GRAY_300,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        cardStyle: {
            backgroundColor: 'white',
        },
    },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
