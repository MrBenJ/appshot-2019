#!/bin/node
/* eslint-disable */

/**
 * Build script
 *
 * Builds the React application
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Minimist = require('minimist');
const dotenv = require('dotenv');
const Nunjucks = require('nunjucks');

const BUILD_PATH = path.resolve(__dirname, 'dist');

const DOTENV_DEVELOPMENT_PATH = path.resolve(__dirname, '.env.development');
const DOTENV_PRODUCTION_PATH = path.resolve(__dirname, '.env.production');

const { production } = Minimist(process.argv.slice(2));

dotenv.load({
  debug: Boolean(production),
  path: production ? DOTENV_PRODUCTION_PATH : DOTENV_DEVELOPMENT_PATH,
  encoding: 'utf8'
});

const render = promisify(Nunjucks.render);

console.log(
  `Building HTML template in ${production ? 'PRODUCTION' : 'DEVELOPMENT'} mode`
);

/**
 * Initialization
 * @return {undefined}
 */
function init() {
  const { YOUR_ENV_HERE } = process.env;

  const context = {
    YOUR_ENV_HERE
  };
  render('./src/index.njk', context)
    .then(content => {
      if (!fs.existsSync(BUILD_PATH)) {
        fs.mkdirSync(BUILD_PATH);
      }
      fs.writeFileSync(path.resolve(__dirname, './dist/index.html'), content);
    })
    .catch(error => {
      console.error('There was an error building the HTML!', error);
      process.exit(-1);
    });
}

init();
