/* @flow */

import { errorLogger } from '../utils/errorLogger';

import { DOCUMENTS, UNDEFINED } from './defaults';

/**
 * Track the number of times a unique contry has made a request to the honeypot
 *
 * @method countriesStats
 *
 * @param {string} country The country name to track the stats of
 */
export const countriesStats = (country: string): Object => {
  if (!country || typeof country !== 'string') {
    /*
     * @TODO Move message string to `messages.json`
     */
    errorLogger(
      "Stats country name not available, we're counting it",
      country || UNDEFINED,
    );
  }
  return {
    documentId: DOCUMENTS.COUNTRIES,
    propName: country,
  };
};

export default countriesStats;
