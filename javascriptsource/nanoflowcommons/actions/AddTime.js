// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * AddTime
 * The AddTime function adds milliseconds, seconds, minutes, hours or days to a Date and time, depending on the ENUM_UnitOfTime provided.
 *
 * Input Parameters
 * startDate: DateTime
 * amount: Integer/Long
 * unitOfTime: ENUM_UnitOfTime
 *
 * Output
 * The action will return a date as a DateTime that is the amount of milliseconds, seconds, minutes, hours or days after startDate, depending on the value of ENUM_UnitOfTime.
 * @param {Date} startDate
 * @param {Big} amount
 * @param {"MILLISECOND"|"SECOND"|"MINUTE"|"HOUR"|"DAY"} unitOfTime
 * @returns {Promise.<Date>}
 */
async function AddTime(startDate, amount, unitOfTime) {
    // BEGIN USER CODE
    if (startDate == null) {
        throw new Error("Required field: startDate");
    }
    if (amount == null) {
        throw new Error("Required field: amount");
    }
    if (unitOfTime == null) {
        throw new Error("Required field: unitOfTime");
    }
    const n = amount.toNumber();
    switch (unitOfTime) {
        case "MILLISECOND":
            return new Date(startDate.getTime() + n * 1);
        case "SECOND":
            return new Date(startDate.getTime() + n * 1000);
        case "MINUTE":
            return new Date(startDate.getTime() + n * 60000);
        case "HOUR":
            return new Date(startDate.getTime() + n * 3600000);
        case "DAY":
            return new Date(startDate.getTime() + n * 86400000);
        default:
            throw new Error("Unit of time not supported: " + unitOfTime);
    }
    // END USER CODE
}

export { AddTime };
