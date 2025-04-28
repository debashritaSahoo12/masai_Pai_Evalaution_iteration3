function Employee(name, position, salary) {
  this.name = name;
  this.salary = salary;
  this.position = position;
  this.getDetails = function () {
    return `${name} works as a ${position} and earns ${salary}.`;
  };
}

const employee1 = new Employee("Alice", "Developer", 80000);
console.log(employee1.getDetails());