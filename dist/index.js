"use strict";
console.log("hi");

// Bug function:

// function summ(a) {
//   const x = Object.keys(a).map((k) => {
//     const elem = a[k];
//     if (typeof elem === undefined) return 2021;
//     if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
//     if (elem.cvalue.isBigObject !== undefined) return summ(elem);
//     return elem.сvalue;
//   });
//   let sum = 0;
//   for (let i = 0; i < x.lenght; i++) {
//     sum += x[i].cvalue;
//   }
//   return summ;
// }

function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        //     if (typeof elem === undefined) return 2021;
        if (typeof elem === undefined || elem?.cvalue === undefined) return 2021;
        //     if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
        if (typeof elem.cvalue === 'string') return isNaN(+elem.cvalue) ? 2021 : +elem.cvalue;
        //     if (elem.cvalue.isBigObject !== undefined) return summ(elem);
        if (isBigObject(elem.cvalue)) return summ(elem.cvalue);
        //     return elem.сvalue;
        return elem.cvalue;
    });
    let sum = 0;
    //   for (let i = 0; i < x.lenght; i++) {
    for (let i = 0; i < x.length; i++) {
        //     sum += x[i].cvalue;
        sum += x[i];
    }
    //   return summ;
    return sum;
}

function isBigObject(obj){
    return typeof obj === 'object' && obj !== null;
}

// Tests:

const test = {
    one: {cvalue: 1}, //1
    two: {cvalue: "28"}, //28
    three: {cvalue:
            {four: {cvalue:
                        {five: { cvalue: "String10"}}}}}, //2021
    six: {cvalue: undefined}, //2021
    seven: undefined //2021
}

console.log(summ(test)); // 6092