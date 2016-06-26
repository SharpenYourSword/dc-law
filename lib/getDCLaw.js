'use strict';
/**
 * This function returns the DC Code url for a title and section.
 * @param {string} councilPeriod the Council Period of the Law
 * @param {string} lawNo the law number of the Law
 * @param {Boolean} pdf flag to to return the pdf
 * @returns {Object} the url for the Law
 */
function getDCLaw (councilPeriod, lawNo, pdf) {
  if (councilPeriod && lawNo) {
    let baseurl = '';
    suffix = '';
    if (pdf) {
      baseurl = 'https://beta.code.dccouncil.us/dc/council/laws/docs/';
      suffix = '.pdf';
    } else {
      baseurl = "https://beta.code.dccouncil.us/dc/council/laws/";
      suffix = '.html'
    }
    const result = baseurl + councilPeriod + '-' + lawNo + suffix;
    return {'url': result};
  } else {
    return {'error': 'councilPeriod and lawNo must both be defined'};
  };
}

module.exports = getDCLaw;
