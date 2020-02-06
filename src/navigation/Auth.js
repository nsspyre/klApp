import { createStackNavigator } from 'react-navigation-stack';
import { routesAuth as routes } from '@constants';
import Login from '@screens/login/loginScreen';

const authStack = createStackNavigator({
    [routes.AUTH_LOGIN]: Login,
}, {
    initialRouteName: routes.AUTH_LOGIN,
    headerMode: 'none',
})

export default authStack
