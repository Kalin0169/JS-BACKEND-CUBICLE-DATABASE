exports.parseMongooseError = (err) => {
//   console.log(err.errors);
  const errorsArr = Object.keys(err.errors).map(
    (key) => err.errors[key].message
  );
  return errorsArr;
};
