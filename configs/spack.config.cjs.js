const { config } = require('@swc/core/spack');
const path = require('path');
const fs = require('fs');

const swcConfig = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '..', 'configs', 'cjs.swcrc'),
    'utf-8'
  )
);
swcConfig.jsc.baseUrl = path.resolve(__dirname, '..');
swcConfig.jsc.paths = {
  '*': ['node_modules', 'lib'],
};
console.log(swcConfig);
module.exports = config({
  entry: {
    index: path.resolve(__dirname, '..', 'lib', 'index.ts'),
    math: path.resolve(__dirname, '..', 'lib', 'math.ts'),
    string: path.resolve(__dirname, '..', 'lib', 'string.ts'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist-swc-lib-cjs'),
  },
  baseUrl: '../',
  options: {
    swcrc: false,
    ...swcConfig,
  },
});
