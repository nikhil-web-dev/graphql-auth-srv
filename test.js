const arr = [
  {
    id: 1,
    name: "foo",
    class: "test1",
  },
  {
    id: 2,
    name: "bar",
    class: "test2",
  },
];

const testArr = arr.forEach((element) => {
  console.log(element);
});

console.log(testArr);
