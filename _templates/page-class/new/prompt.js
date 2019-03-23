/* eslint-disable  */

module.exports = [
  {
    type: 'input',
    name: 'name',
    message:
      'Component name? (Must start with capital letter and end with "Page")',
    validate: input => {
      if (!input.endsWith('Page')) {
        return 'Nmae must end with "Page"';
      }

      return (
        input[0].toUpperCase() === input[0] ||
        'Must start with a capital letter '
      );
    }
  }
];
