const { validationResult } = require('express-validator');

const checkIsEmpty = (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    res.status(422).json(result.array());
    return true;
  }

  return false;
};

module.exports = {
    checkIsEmpty,
};