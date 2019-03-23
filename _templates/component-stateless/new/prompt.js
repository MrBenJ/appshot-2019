/* eslint-disable  */
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name? (Must start with capital Letter)',
    validate: input => {
      return (
        input[0].toUpperCase() === input[0] ||
        'Must start with a capital letter '
      );
    }
  }
];
