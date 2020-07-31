import { NavigationActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = (ref) => {
    if (ref) {
        navigator = ref;
    }
}

const getTopLevelNavigator = () => {
    return navigator;
}

const navigate = (routeName, params = {}) => {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}

const goBack = () => {
    navigator.dispatch(NavigationActions.back());
}

export { setTopLevelNavigator, getTopLevelNavigator, navigate, goBack };
