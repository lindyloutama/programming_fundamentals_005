// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
 const values = Object.values(object);
  let currSmallest = values[0];
   values.forEach(function (n) {
    if (n < currSmallest) {
     currSmallest = n;
    }
   });
    return currSmallest;
  }

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
 const values = Object.values(object);
  let largeNumber = values[0];
   values.forEach(function (n) {
     if (n > largeNumber) {
       largeNumber = n;
     }
    });
     return largeNumber;
  }
/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/

function clone(object) {
  return Object.assign({}, object);
   }

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  for(let k in object) {
    let name = k;
    let value = object[k];  
     if(name === key) {
       return value;
     }
  }
  return undefined
} 

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  return Object.assign.hasOwnProperty.call(object, key);
} 
/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let total = 0;
   for(let key in object) {
     let value = object[key];
     if(Number.isInteger(value)) {
       total += value;
     }
   }
   return total;
 }

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  const newObj = {};
  Object.keys(object).forEach((key) => {
    newObj[object[key]] = key;
  });
  return newObj;
}


/*
  This function receives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newObjArr = {};
   arr.forEach(function (item) {
     newObjArr = Object.assign(newObjArr, item);
   });
   return newObjArr;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  let result = null;
    for (let key in obj) {
      let match = matcherFunc(obj[key]);
        if(match) {
          result =obj[key];
        }
    }
  return result;
}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  let result = false;
    for (let key in obj) {
      let match = func(obj[key]);
        if (match) {
          result = true;
        } else {
          return false;
        }
    }
  return result;
}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  let result = false;
    for (let key in obj) {
      let match = func(obj[key]);
      if (match) {
        result = true;
      }
    }
  return result;
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
