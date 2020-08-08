const person = {
  name: "Imran Khan",
  age: 20,
  job: "Full Stack Web Developer",
  gfName: null,
  address: "Dhaka 1212",
  friends: [
    "Imran Khan",
    "Sojib Khan",
    "Mamun Khan",
    "Rifat Khan",
    "Arafat Khan",
    "Hello Khan",
    "Sobuj Khan",
  ],
};

const complexObj = {
  name: "leader",
  info: {
    address: "hello",
    leader: "Leader",
  },
};

const { name, job, age } = person;
const [a1, a2, a3, ...h] = person.friends;
console.log(...h);
console.log(`
`);
console.log(`My name is ${name}.I am ${age} years old.
I am a ${job}.`);

const { leader } = complexObj.info;
console.log(leader);
