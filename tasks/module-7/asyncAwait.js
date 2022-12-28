const { promiseResolve, promiseReject } = require('./promises');
const { getDogs, getCats, getBirds } = require('./utils/utilPromises');
/**
 * Materials:
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 *
 */
async function asyncPromiseResolve() {
  try {
    const result = await promiseResolve();
    return `${result} with async await`;
  } catch (error) {
    console.error(error);
  }
}



  
  


/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */
async function asyncPromiseReject() {
  try {
    await promiseReject();
  } catch (error) {
    return `${error.message} with async await`;
  }
}




/**
 * TASK-3:
 * 1. Get the results array of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file using await syntax;
 * 2. Modify the array ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', ''BIRDS]
 * 3. Return the modified array
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 */
async function asyncPromiseAll() {
  const dogs = await getDogs();
  const cats = await getCats();
  const birds = await getBirds();
  const animals = [dogs, cats, birds];
  return animals.map((animal) => animal.toUpperCase());
 
}
asyncPromiseAll().then((result) => {
  console.log(result); // ['DOGS', 'CATS', 'BIRDS']
});


module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
};
