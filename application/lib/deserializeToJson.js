/**
 * Deserialize array to objects
 * 
 * @param {Array<Array>} array 
 * @returns {Array<Object>}
 */
function deserializeToJson(array) {
  let resultArr = [];
  array.forEach(function(object) {
    const type = object[0];

    if (type === 'user') {
      const userObject = {
        id: object[1],
        userName: object[2],
        firstName: object[3],
        lastName: object[4],
        email: object[5],
        type: object[0]
      }
      resultArr.push(removeNullFields(userObject));
    } else if (type === 'payment') {
      const paymentObject = {
        id: object[1],
        fromUserId: object[2],
        amount: object[5],
        createdAt: object[6],
        toMerchantId: object[3],
        toUserId: object[4],
        type: object[0]
      }
      resultArr.push(removeNullFields(paymentObject));
    } else if (type === 'merchant') {
      const merchantObject = {
        id: object[1],
        name: object[2],
        type: object[0]
      }
      resultArr.push(removeNullFields(merchantObject));
    }
  })

  return resultArr;
}

function removeNullFields(object) {
  for (let key in object) {
    if (object[key] === null) {
      delete object[key];
    }
  }
  return object
}

module.exports = deserializeToJson;
