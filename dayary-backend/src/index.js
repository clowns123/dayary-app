// 이 파일에서 no-global-assing ESLint 비활성화
/* eslint-disable no-global-assign */
require = require('esm')(module /*, options*/);
module.exports = require('./main.js');
