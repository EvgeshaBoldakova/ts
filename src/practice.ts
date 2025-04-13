//1
// function getFirstWord(a) {
//     return a.split(/ +/)[0].length;
// }

function getFirstWord(a: string): number {
    return a.split(/ +/)[0].length;
}
console.log(getFirstWord("Hello"));

//2
// function getUserNamings(a) {
//     return {
//         fullname: a.name + " " + a.surname,
//         initials: a.name[0] + "." + a.surname[0]
//     };
// }

function getUserNamings(a: {name: string, surname: string}): {fullname: string, initials: string} {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
console.log(getUserNamings({ name: "Igor", surname: "Litvinov" }));

//3
// function getAllProductNames(a) {
//     return a?.products?.map(prod => prod?.name) || [];
// }

function getAllProductNames(a?: { products?: { name?: string;}[]}): (string | undefined)[] {
    return a?.products?.map(prod => prod?.name) || [];
}
console.log(getAllProductNames({products: [{name: "Ivan"}, {name: "Oleg"}]}));


// 4.1

// easy way is using 'as' keyword
// hard way is ?...
// function hey(a) {
//     return "hey! i'm " + a.name();
// }
// hey({name: () => "roman", cuteness: 100})
// hey({name: () => "vasyl", coolness: 100})


function hey(a: {name: () => string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name();
}
console.log(hey({name: () => "roman", cuteness: 100}))
hey({name: () => "vasyl", coolness: 100})


// 4.2

// function hey(abstractPet) {
//     return "hey! i'm " + abstractPet.name();
// }
// let a = new Cat("snizhok", true)
// let b = new Dog("sirko", 333)
// hey(a)
// hey(b)

class Cat {
    name: () => string;
    property: any;

    constructor(name: () => string, property: any) {
        this.name = name;
        this.property = property;
    }
}

class Dog {
    name: () => string;
    property: any;

    constructor(name: () => string, property: any) {
        this.name = name;
        this.property = property;
    }
}

function hey1(abstractPet: {name: () => string, property: any}): string {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat(() => "snizhok", true)
let b = new Dog(() => "sirko", 333)
console.log(hey1(a))
hey1(b)


// 4.3

// function hey(a) {
//     return "hey! i'm " + a.name()
//         + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
// }
// hey({name: () => "snizhok", type: "cat", cuteness: 100})
// hey({name: () => "sirko", type: "dog", coolness: 100})

function hey2(a: {name: () => string, type: string, cuteness?: number, coolness?: number}): string {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? (" cuteness: "+a.cuteness) : (" coolness: "+a.coolness))
}
console.log(hey2({name: () => "snizhok", type: "cat", cuteness: 100}))
hey2({name: () => "sirko", type: "dog", coolness: 100})
// можна type: "cat" | "dog"


// 5.

// google for Record type
// function stringEntries(a) {
//     return Array.isArray(a) ? a : Object.keys(a)
// }


function stringEntries(a: string[] | Record<string, any>): string[] {
    return Array.isArray(a) ? a : Object.keys(a)
}
// function stringEntries(a: any[] | {[key: string]: any}): any[] {
//     return Array.isArray(a) ? a : Object.keys(a)
// }

console.log(stringEntries(["n", "m"]))
console.log(stringEntries({"x": 1, "y": 2}));


// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it

// async function world(a) {
//     return "*".repeat(a)
// }
// const hello = async () => {
//     return await world(10)
// }
// hello().then(r => console.log(r)).catch(e => console.log("fail"))

async function world(a: number): Promise<string>{
    return "*".repeat(a)
}
const hello: () => Promise<string> = async () =>  {
    return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))




// My tasks:
// function repeatSymbol(symbol: string, times: number): string {
//     return symbol.repeat(times);
// }
// console.log(repeatSymbol("+", 6))
//
// function getAverage(arr: number[]): number {
//     const sum = arr.reduce((acc: number, n: number) => acc + n, 0);
//     return sum / arr.length;
// }
// console.log(getAverage([1,2,3,4,5]))
//
// function getFullName(user: {name: string, surname: string}): string {
//     return `${user.name} ${user.surname}`;
// }
//
// function getAdults(users: {age: number}[]): {age: number}[] {
//     return users.filter(user => user.age >= 18);
// }
//
// async function fetchData(url: string): Promise<any>  {
//     return await fetch(url).then(res => res.json());
// }
//
// function countWords(str: string): number {
//     return str.split(" ").length;
// }
//
// function isAdmin(user: {roles: string[]}): boolean {
//     return user.roles.includes("admin");
// }
//
//
// function handleResult(result: { error?: string; value?: string }): string {
//     if ("error" in result) {
//         return "Oops: " + result.error;
//     }
//     return "Success: " + result.value;
// }