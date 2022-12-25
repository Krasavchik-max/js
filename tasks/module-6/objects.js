/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
   firstName: "Ann",
   lastName: "Kra",


   getFullName(){
    return firstName + lastName;
  }

  };
  console.log(person.getFullName());
  

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = ''; //put you object here

/**
 * create new instance of student using Object.create
 */
const student2 = ''; //put you object here

module.exports = {
  person,
  student,
  student2,
};
