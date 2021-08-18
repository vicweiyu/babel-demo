const f1 = () => {
  return new Promise((resolve, rejeect) => {
    setTimeout(() => {
      console.log('f1');
      resolve();
    }, 1000);
  });
};

const f2 = async () => {
  await f1();
  console.log('f2');
};

console.log(1);
f2();
console.log(2);
