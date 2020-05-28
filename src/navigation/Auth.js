import { createStackNavigator } from 'react-navigation-stack';
import { routesAuth as routes } from '@constants';
import Login from '@screens/Auth/Login';
import Register from '@screens/Auth/Register';

const authStack = createStackNavigator({
    [routes.AUTH_LOGIN]: Login,
    [routes.AUTH_REGISTER]: Register,
}, {
    initialRouteName: routes.AUTH_LOGIN,
    headerMode: 'none',
})

export default authStack
