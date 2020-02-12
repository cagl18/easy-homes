const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getParams = location => {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get('q') || ''
  };
};

export const setParams = ({ query = '' }) => {
  const searchParams = new URLSearchParams();
  searchParams.set('q', query);
  return searchParams.toString();
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
