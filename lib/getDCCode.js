'use strict';
/**
 * This function returns the DC Code url for a title and section.
 * @param {string} title The title of the DC Code
 * @param {string} section The section of the DC Code
 * @returns {Object} the url for the section
 */
function getDCCode (title, section) {
  if (title && section) {
    const baseurl = 'https://beta.code.dccouncil.us/dc/council/code/sections/';
    const result = baseurl + title + '-' + section + '.html';
    return {'url': result};
  } else {
    return {'error': 'title and section must both be defined'};
  }
}

module.exports = getDCCode;
