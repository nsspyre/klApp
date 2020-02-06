import { NavigationActions } from 'react-navigation';

const config = {};

const setNavigator = (nav) => {
    if (nav) {
        config.navigator = nav;
    }
}

const navigate = (routeName, params) => {
    if (config.navigator && routeName) {
        let action = NavigationActions.navigate({ routeName, params });
        console.log('action', action)
        config.navigator.dispatch(action);
    }
}

const goBack = () => {
    if (config.navigator) {
        let action = NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}

export { setNavigator, navigate, goBack };
