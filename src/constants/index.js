import * as actionTypes from './action-types';
import * as colors from './colors';
import * as schemas from './schemas'
import { auth as routesAuth, products as routesProducts, proxy as routesProxy, feed as routesFeed } from './routes';

export {
    actionTypes,
    routesAuth,
    routesProducts,
    routesProxy,
    routesFeed,
    colors,
    schemas
};
