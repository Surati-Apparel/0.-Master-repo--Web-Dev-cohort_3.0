// interface Address {
//     houseNo?: number
//     street: string,
//     city: string,
//     zipcode: number,
// }

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     address?: Address
// }

// interface OfficeAddress {
//     address?: Address
// }

// const myuser1: User = {
//     firstName: "jaimin",
//     lastName: "sonani",
//     age: 55,
//     address: {
//         street: "",
//         city: "surat",
//         zipcode: 395010
//     }
// }

// const myuser2: User = {
//     firstName: "jaimin",
//     lastName: "sonani",
//     age: 55
// }
// interface People {
//     name: string,
//     age: number,
//     isLegal(): boolean
// }
// class Boss {
//     name: string;
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Manager extends Boss implements People {
//     name: string;
//     age: number;
//     x: number

//     constructor(name: string, age: number) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.x = 100;
//     }

//     isLegal() {
//         return true;
//     }
// }


// interface Admin {
//     name: string;
//     permissions: string;
// }

// interface User {
//     name: string;
//     age: number;
// }

// type UserOrAdmin = Admin | User

// function greet(user: UserOrAdmin) {
//     console.log(user.name)
// }


// function getMax(nums: number[]) {
//     let maxValue = -10000000;

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] > maxValue ){
//             maxValue = nums[i];
//         }
//     }
//     return maxValue;
// }

// getMax([1, 2, 3]);


// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// const inputUsers: User[] = [
//     {
//         firstName: "jaimin",
//         lastName: "sonani",
//         age: 24
//     },

//     {
//         firstName: "jaimin3",
//         lastName: "sonani3",
//         age: 5
//     },
//     {
//         firstName: "jaimin3",
//         lastName: "sonani3",
//         age: 10
//     },
// ]

// function legalUsers(users: User[]) {
//     let legalUsers: User[] = [];
//     users.forEach((user) => {
//         if(user.age >= 18) {
//             legalUsers.push(user);
//         }
//     })
//     return legalUsers;
// }

// console.log(legalUsers(inputUsers));


// type setA = {
//     firstName: string,
//     lastName: string,
//     age: number,
// }

// type setB = {
//     superName: string,
//     firstName: string
// }

// type setC = {
//     single: boolean,
//     random: string
// }

// type UnionSet = setA | setB | setC;
// type InersectionSet = setA & setB & setC;

// const instance1: UnionSet = {
//     firstName: "string",
//     // lastName: "string",
//     // age: 10,
//     // superName: "string",
//     single: true,
//     random: "string",
// }
































 