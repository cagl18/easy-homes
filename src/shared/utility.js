const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const findOverfloatingElement = () => {
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll('*'), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
};

export const getAllUrlParams = (url) => {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof a[1] === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {
        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
};

export const getURLParams = (param, location = window.location) => {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(param) || '';
};

export const setURLParams = (params = null) => {
  if (!params) {
    return '';
  }
  const searchParams = new URLSearchParams();
  for (let key in params) {
    searchParams.set(key, params[key]);
  }
  return searchParams.toString();
};

// export const updateURL = (pName = '', pVal = '', history = '') => {
//   const url = setURLParams(pName, pVal);
//   history.push({ search: `${url}` });
// };

export const updateURLParams = (query = null, history) => {
  if (query) {
    const paramsObj = getAllUrlParams(history.location.search);
    query = Object.keys(query).reduce(
      (c, k) => ((c[k.toLowerCase()] = query[k]), c),
      {}
    ); //converting key to lowercase to match URL string

    const updatedParams = updateObject(paramsObj, query);
    const paramsString = setURLParams(updatedParams); //converting URL params into a URL string
    history.push({ search: `${paramsString}` });
  }
};

export const redirectToURL = (pathname = '', history = '') => {
  if (pathname.length) {
    history.push({ pathname, search: history.location.search });
  }
};

export default updateObject;

//   export const checkValidity = (value, rules) => {
//     let isValid = true;

//     if (!rules) {
//       return true;
//     }

//     if (rules.required) {
//       isValid = value.trim() !== '' && isValid;
//     }

//     if (rules.minLength) {
//       isValid = value.length >= rules.minLength && isValid;
//     }

//     if (rules.maxLength) {
//       isValid = value.length <= rules.maxLength && isValid;
//     }

//     // if(rules.isEmail){
//     //   const pattern = /[a-z0-9!#$%&'*+?^_`{|}~-]+(?:\.[a-z0-9!#$%%&'*+/=?^_`{|}])/
//     //   isValid = pattern.test(value) & isValid
//     // }

//     if (rules.isNumeric) {
//       const pattern = /^\d+$/;
//       isValid = pattern.test(value) && isValid;
//     }

//     return isValid;
//   };
