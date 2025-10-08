import {createStackNavigator} from '@react-navigation/stack';
import FeedListScreen from '../screens/feed/FeedListScreen';
import FeedDetailScreen from '../screens/feed/FeedDetailScreen';
import FeedFavoriteScreen from '../screens/feed/FeedFavoriteScreen';
import EditLocationScreen from '../screens/feed/EditLocationScreen';
import {COLORS} from '../constants/colors';
import DrawerButton from '../components/DrawerButton';

const FeedStack = createStackNavigator({
    screens: {
        FeedList: {
            screen: FeedListScreen,
            options: {
                title: '피드',
                headerLeft: () => <DrawerButton />,
            },
        },
        FeedDetail: {
            screen: FeedDetailScreen,
        },
        FeedFavorite: {
            screen: FeedFavoriteScreen,
        },
        EditLocation: {
            screen: EditLocationScreen,
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
    },
});

export default FeedStack;
