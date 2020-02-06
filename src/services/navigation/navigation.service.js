import { NavigationActions } from 'react-navigation';

const config = {};

const setNavigator = (nav) => {
    if (nav) {
        config.navigator = nav;
    }
}

const navigate = (routeName, params = {}) => {
    if (config.navigator && routeName) {
        config.navigator.dispatch(NavigationActions.navigate({ routeName, params }));
    }
}

const goBack = () => {
    if (config.navigator) {
        let action = NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}

export { setNavigator, navigate, goBack };
