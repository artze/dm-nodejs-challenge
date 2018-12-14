const parseJsonInput = require('../lib/parseJsonInput');
const serializeToArray = require('../lib/serializeToArray');
const config = require('../config/config');

/**
 * Create storeAction with dependencies
 *
 * @param {fetch} p2pFetch
 * @param {fetch} hostedFetch
 * @return {storeAction}
 */
// eslint-disable-next-line no-unused-vars
module.exports = function storeActionFactory(p2pFetch, hostedFetch) {
  /**
   * Validate and store data
   *
   * @typedef storeAction
   * @param {object[]} inputData
   * @return void
   */
  // eslint-disable-next-line no-unused-vars
  async function storeAction(inputData) {
    // Your code should be here:
    // 1. Validate inputData

    const modelObjectArr = parseJsonInput(inputData);
    const serializedObjectArr = serializeToArray(modelObjectArr);

    // 2. Store inputData in external service(s)
    await hostedFetch(`${config.apiDomain}/api/app-data`, {
      method: 'POST',
      body: JSON.stringify(serializedObjectArr),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return storeAction;
};
