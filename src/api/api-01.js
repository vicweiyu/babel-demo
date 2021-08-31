const babelCore = require('@babel/core');

const es6Code = `const f = () => { console.log('Hello'); }`;
const options = {
  code: false,
  ast: true,
  presets: ['@babel/preset-env'],
};

const result = babelCore.transform(es6Code, options);
console.log(result);
console.log('----------');
console.log(result.code);

/*
babelCore.transform(es6Code, options, (err, result) => {
  console.log(result);
  console.log('----------');
  console.log(result.code);
});
*/
