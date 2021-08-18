import { Foo } from './t-03';

let foo = new Foo();
foo.say();

Promise.resolve().finally();

const f = async function () {
  await 'Hello';
};

const s = 'Hello';
console.log(s.includes('HM'));

module.exports = f;
