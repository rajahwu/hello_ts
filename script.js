/**
 * This function will accept details about a person
 * and create an object for them
 * @param {string} name The person's full name 
 * @param {number} age The person's age
 * @param {boolean} isDeveloper  Wheather or not the person is a developer
 * @returns {Object} The person object
 */


function createPerson(name, age, isDeveloper) {
    return {
        name: name,
        age: age,
        isDeveloper: isDeveloper
    }
}

class Person {
/**
  *  Creates a Person
  * 
  * @param {string} name The person's full name 
  * @param {number} age The person's age
  * @param {boolean} isDeveloper  Wheather or not the person is a developer
  * @returns {Object} The person object
*/

    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
}

/**
 * Outputs details about a person.
 * 
 * @param {Person} person 
 */

function printDetails(person) {
    console.log(`${person.name} is ${person.age} years old and is ${person.isDeveloper ? '' : NOT} a developer.`)

}

/**
 * Gives you numbers.
 * 
 *  @returns {number[]}
 */

function getNumbers() {
    return [10,80,130,150]
}

const numbers = getNumbers()

