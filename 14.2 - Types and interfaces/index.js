"use strict";
// interface Address {
//     houseNo?: number
//     street: string,
//     city: string,
//     zipcode: number,
// }
const inputUsers = [
    {
        firstName: "jaimin",
        lastName: "sonani",
        age: 24
    },
    {
        firstName: "jaimin2",
        lastName: "sonani2",
        age: 18
    },
    {
        firstName: "jaimin3",
        lastName: "sonani3",
        age: 5
    },
    {
        firstName: "jaimin3",
        lastName: "sonani3",
        age: 10
    },
];
function legalUsers(users) {
    let legalUsers = [];
    users.forEach((user) => {
        if (user.age >= 18) {
            legalUsers.push(user);
        }
    });
    return legalUsers;
}
console.log(legalUsers(inputUsers));
