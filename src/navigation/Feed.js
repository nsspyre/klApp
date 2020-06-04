import { createStackNavigator } from 'react-navigation-stack';

import { routesFeed as routes } from '@constants';
import Feed from '@screens/Feed/Home';

const feedStack = createStackNavigator({
    [routes.FEED_HOME]: Feed
}, {
    initialRouteName: routes.FEED_HOME,
})

export default feedStack;
