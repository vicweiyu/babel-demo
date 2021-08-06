import 'core-js';
import 'regenerator-runtime/runtime';

const foo = () => {
  console.log('foo');
};

class MyObj {
  constructor(id) {
    this.id = id;
  }

  setID(id) {
    this.id = id;
  }

  static getID() {
    return this.id++;
  }
}

const attr = 'name';

let o1 = {
  id: 0,
  [attr + '_id']: 'fullID',
};

console.log(o1);

let o2 = { ...o1 };
