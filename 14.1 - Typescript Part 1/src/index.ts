// let x: any = 10; //type inferencing
// x = "20";
// console.log(x);


//greet function
// function sum(num1: number, num2: number) {
//     return num1 + num2;
// }

// let ans: number = sum(1, 2);
// console.log(ans);

// function isLegal(age: number) {
//     return age>18 ? true: false;
// }

// console.log(typeof(isLegal(21)));


// function delayer( mainFunction: ((a:string) => void)) {
//     //settimeout
//     setTimeout(() => {
//         mainFunction("jaimin");
//     }, 3000);
// }

// function mainFunction(firstName) {
//     console.log("hello" + firstName);
// }

// delayer(mainFunction)

// interface UserType {
//     firstName: string,
//     lastName: string,
//     age: number
// }
// const myUser1: UserType = {
//     firstName: "jaimin",
//     lastName: "sonani",
//     age: 15
// }

// function greet(users: UserType) {
//     console.log(`Hello ${users.firstName} with age: ${users.age}`);
// }



// greet( myUser1 );

interface TodoInput {
    todo: {
        firstName: string,
        lastName: string,
        age: number
    }
}

function App() {

}















