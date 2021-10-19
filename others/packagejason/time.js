const moment=require('moment');

const showDate = date=>{
    return moment(date).format('MMMM Do YYYY');
};

exports.showTime=showDate;