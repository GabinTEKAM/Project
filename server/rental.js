'use strict'

const dayjs = require("dayjs");


class Rental {
    constructor(startDate, endDate, extradriver, distance, extra_insurance, driverAge, id_fees, id_car) {
        startDate: dayjs(startDate) ;
        endDate:  dayjs(endDate);
        extradriver: extradriver;
        distance: distance;
        extra_insurance: extra_insurance;
        driverAge: driverAge;
        id_fees: id_fees;
        id_car: id_car;
    }
}

module.exports=Rental