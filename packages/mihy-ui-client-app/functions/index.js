'use strict'
/** EXPORT ALL FUNCTIONS
 *
 *   Loads all `.f.js` files
 *   Exports a cloud function matching the file name
 *
 *   Based on this thread:
 *     https://github.com/firebase/functions-samples/issues/170
 */
const glob = require('glob')
const camelCase = require('camelcase')

//loading env property
require("dotenv").config();

const files = glob.sync('./**/*.f.js', { cwd: __dirname, ignore: './node_modules/**' })
for (let f = 0, fl = files.length; f < fl; f++) {
  const file = files[f];
  let stripedExtention=file.slice(0, -5).split('/'); // Strip off '.f.js'
  let functionName = camelCase(stripedExtention.join('_'));
  if(stripedExtention[stripedExtention.length-1]==="index") functionName=functionName.replace("Index","");
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(file)
  }
}
