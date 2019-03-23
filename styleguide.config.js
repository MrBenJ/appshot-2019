/* eslint-disable */
const path = require('path');

module.exports = {
  components: 'src/components/**/index.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/StyleguideWrapper')
  },
  require: ['sanitize.css', path.join(__dirname, 'src/global.css')]
};
