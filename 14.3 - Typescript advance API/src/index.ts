interface User {
    name: string,
    age: number
};

function sumOfAge ( user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({name: "jaimin1", age: 15}, {name: "jaimin2", age: 18});
console.log(age);