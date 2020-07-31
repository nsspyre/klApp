import { createStackNavigator } from 'react-navigation-stack';

import { routesFeed as routes, colors } from '@constants';
import Feed from '@screens/Feed/Home';

const feedStack = createStackNavigator({
    [routes.FEED_HOME]: Feed
}, {
    initialRouteName: routes.FEED_HOME,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.WHITE,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.26,
            shadowRadius: 4.65,
            elevation: 6,
        },
    }
})

export default feedStack;
