// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//We also have null and undefined type

let tobbies: null;

// tobbies = 21;

// 👆 we can not assign anything since it is null, same goes for undefined

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// let person: {
// 	name: string;
// 	age: number;
// };

// person = {
// 	name: 'Max',
// 	age: 32,
// };

// person = {
//   isEmployee: true
// };

// let people: {
// 	name: string;
// 	age: number;
// }[];

//TYPE INFERENCE-----------

/**
 * whenever you init a variable with a value, TS infer that value as the data type and stick to that.
 * with this we do not have to specifically declare type
 */

// const todo = 'Pick up chocolates';

// todo = 1234;

// let phoneNumber = 8990;

// phoneNumber = 'oh no!';

//UNION TYPE------------

//is where you allowed to define more than one type of data

let education: string | number = 'Programming';
education = 234556;

// TYPE ALIASES ----------

/**
 * declaring type like this over and over again might lead to code duplication.
 * we can avoid this with base type.
 */

//to redecalre the above types, we can do

type Person = {
	name: string;
	age: number;
};

//now we can do

let person: Person;

let people: Person[]; //allow us to put arrays of specified data type

// FUNCTIONS AND TYPES -----------

export {};

//we can specify the return type as well like this, one or multiple with piping.
//but then agian, no need for this since TS will return such type anyway.

// function add(a: number, b: number): number | string {
// 	return a + b;
// }

function add(a: number, b: number) {
	return a + b;
}

/**
 * Any function which does not return anything will have type VOID
 */

function printOut(value: any) {
	console.log(value);
}

//GENERICS -----------------

function insertAtBegining<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);
const stringArray = insertAtBegining(['a', 'b', 'c'], 'd');

/**
 * Without the generics, typescript will not know what kind of type we have in here, and will give us any data type we pass in.
 */
