const parseJsonInput = require('../lib/parseJsonInput');

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

    // 2. Store inputData in external service(s)
    await hostedFetch('http://localhost:3000/api/app-data', {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return storeAction;
};
