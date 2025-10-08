import { createStackNavigator } from '@react-navigation/stack';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';
import { COLORS } from '../constants/colors';

const MapStack = createStackNavigator({
    screens: {
        MapHome: {
            screen: MapHomeScreen,
            options: {
                headerShown: false,
            },
        },
        AddLocation: {
            screen: AddLocationScreen,
        },
        SearchLocation: {
            screen: SearchLocationScreen,
        },
    },
    screenOptions: {
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: COLORS.BLACK,
        headerStyle: {
            backgroundColor: COLORS.WHITE,
            shadowColor: COLORS.GRAY_300,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
        },
    },
});

export default MapStack;
