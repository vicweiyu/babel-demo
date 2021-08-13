let i1 = Number.MAX_VALUE;

let i2 = i1 + 1;

console.log(Number(i1).toLocaleString());
console.log(Number(i2).toLocaleString());

let bi1 = BigInt(Number.MAX_VALUE);

let bi2 = bi1 + 1n;

console.log(bi1);
console.log(bi2);
