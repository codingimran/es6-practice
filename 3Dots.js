const ages = [44, 32, 22, 34, 44, 23, 46, 28, 19];
const ages2 = [34, 22, 45, 17, 18, 19, 39];
const ages3 = [22, 21, 16, 43, 33, 19, 15];
const allAges = ages.concat(ages2).concat(55555).concat(ages3);
// console.log(allAges);

const allAges2 = [...ages, 5555, ...ages2, ...ages3];
// console.log(allAges2);

const business = 650;
const minster = 530;
const sochib = 250;
const takaPoisa = [460, 333, 888, 9949, 45435];
const maximum = Math.max(business, minster, sochib);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum);
