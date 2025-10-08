import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import FeedListScreen from '../screens/feed/FeedListScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';
import MapStack from './MapNavigation';
import FeedStack from './FeedNavigation';
import DrawerButton from '../components/DrawerButton';
import {COLORS} from '../constants/colors';

import CustomDrawerContent from '../components/CustomDrawerContent';

const MainDrawer = createDrawerNavigator({
    screens: {
        Map: {
            screen: MapStack,
            options: {
                title: '홈',
                headerShown: false,
            },
        },
        Feed: {
            screen: FeedStack,
            options: {
                title: '피드',
                headerShown: false,
            },
        },
        Calendar: {
            screen: CalendarScreen,
            options: {
                title: '캘린더',
                headerLeft: () => <DrawerButton />,
            },
        },
    },
    screenOptions: {
        drawerStyle: {width: '60%', backgroundColor: COLORS.WHITE},
        drawerLabelStyle: {fontWeight: '600'},
        drawerItemStyle: {borderRadius: 10},
        drawerType: 'front',
        drawerActiveTintColor: COLORS.WHITE,
        drawerActiveBackgroundColor: COLORS.PINK_500,
        drawerInactiveTintColor: COLORS.GRAY_500,
        drawerInactiveBackgroundColor: COLORS.WHITE,
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
    },
    drawerContent: props => <CustomDrawerContent {...props} />,
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
