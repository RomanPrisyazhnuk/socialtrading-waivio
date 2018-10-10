import moment from "moment/moment";

export const getNextDate = (startDate, position, interval = 'days') => {
    return moment(startDate).add(position, interval).format('YYYY-MM-DD');
};
