import moment from 'moment';

const formatDateTimestamp = (timestamp) => {
    if (timestamp) {
        return moment(timestamp).format('DD [de] MMMM');
    }

    return null;
}

export {
    formatDateTimestamp,
}
