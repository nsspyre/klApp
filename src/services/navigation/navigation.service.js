import { CommonActions as NavigationActions} from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = (ref) => {
    if (ref) {
        navigator = ref;
    }
}

const getTopLevelNavigator = () => {
    return navigator;
}

const navigate = (name, params = {}) => {
    navigator.dispatch(NavigationActions.navigate({ name, params }));
}

const goBack = () => {
    navigator.dispatch(NavigationActions.back());
}

export { setTopLevelNavigator, getTopLevelNavigator, navigate, goBack };
