let input = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 45000 },
  { name: "Charlie", salary: 55000 },
  { name: "David", salary: 40000 },
];

let output = input.filter((ele) => ele.salary > 50000).map(ele=>ele.name)
console.log(output)
