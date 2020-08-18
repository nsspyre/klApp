import moment from 'moment';
import { Dimensions } from 'react-native';

const formatDateTimestamp = (timestamp) => {
    if (timestamp) {
        return moment(timestamp).format('DD [de] MMMM');
    }

    return null;
}

const getDeviceDimensions = (hPercentage = null, wPercentage = null) => {
    let result = { height: 0, width: 0 };
    const { height, width } = Dimensions.get('window');

    result.height = hPercentage && typeof hPercentage === 'number' ? Math.round((hPercentage * height) / 100) : height;
    result.width = wPercentage && typeof wPercentage === 'number' ? Math.round((wPercentage * width) / 100) : width;

    return result
}

export {
    formatDateTimestamp,
    getDeviceDimensions,
}
