module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); //catch any error return by the promise
    // fn(req, res, next).catch((err) => next(err)); //catch any error return by the promise
  };
};
