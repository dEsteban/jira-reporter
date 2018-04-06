const { getColombiaHolidaysByYear } = require('colombia-holidays');
const moment = require('moment-timezone');
const now = moment().tz('America/Bogota');

const optimization = {
    comment: 'Optimization',
    timeSpentJIRA: '4.5h',
    issue: 'PTSR-4',
    project: 'Mediabrands Modeling & Optimization - Mediabrands',
    startDate: now.format(),
    tfstask: ''
};

const inchannel = {
    comment: 'In-Channel',
    timeSpentJIRA: '4.5h',
    issue: 'PTSR-4',
    project: 'Mediabrands InChannel Allocation - Mediabrands',
    startDate: now.format(),
    tfstask: ''
};

const findIssues = () => {
  if (isWorkingDay()) {
    return [optimization, inchannel];
  }
  return [];
};

const isWorkingDay = () => {
  if (now.isoWeekday() === 6 || now.isoWeekday() === 7) {
      return false
  }

  const isHoliday = getColombiaHolidaysByYear(now.year())
      .map(holiday => holiday.holiday)
      .includes(now.format('YYYY-MM-DD'));
  return !isHoliday;
}

module.exports = {
    findIssues
};
