// Write your solution in this file!
const employee = {}
employee.name = `Sam`;
employee.streetAddress = `11 Broadway`;

function updateEmployeeWithKeyAndValue(obj, key, value) {
   const newEmployee = { ...employee};

   newEmployee[key] = value;

   return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
      employee,
      "streetAddress",
      "12 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";

     return employee;


}

function deleteFromEmployeeByKey(obj, key, value) {
    const newEmployee1 = { ...employee};
 
    newEmployee1[key] = value;
    delete newEmployee1.streetAddress;
 
    return newEmployee1;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;

    return employee;
 }
 
 
