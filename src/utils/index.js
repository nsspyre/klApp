import moment from 'moment';
import { Dimensions } from 'react-native';

const formatDateTimestamp = (timestamp) => {
    if (timestamp) {
        return moment(timestamp).format('DD [de] MMMM');
    }

    return null;
}

/**
 * Function to return the percentage of the device screen
 * @param {*} hPercentage height percentage needed
 * @param {*} wPercentage width percentage needed
 */
const getDeviceDimensions = (hPercentage = null, wPercentage = null) => {
    let result = { height: 0, width: 0 };
    const { height, width } = Dimensions.get('window');

    result.height = hPercentage && typeof hPercentage === 'number' ? Math.round((hPercentage * height) / 100) : height;
    result.width = wPercentage && typeof wPercentage === 'number' ? Math.round((wPercentage * width) / 100) : width;

    return result
}

/**
 * Function to return the percentage of the height of the
 * device screen
 * @param {*} hPercentage height percentage needed
 */
const getHeightDeviceDimensions = (hPercentage = null) => {
    const { height } = Dimensions.get('window');

    return hPercentage && typeof hPercentage === 'number' ? Math.round((hPercentage * height) / 100) : height;
}

export {
    formatDateTimestamp,
    getDeviceDimensions,
    getHeightDeviceDimensions,
}
