function Employee(name,position,salary) {
  this.name = name;
  this.salary = salary;
  this.position = position;
}
Employee.prototype.getDetails=function(){
     return `${this.name} works as a ${this.position} and earns ${this.salary}.`;
}
const employee1 = new Employee("Alice", "Developer", 80000);
console.log(employee1.getDetails());
