"use strict";

type typeA = {[key: string]:
        | undefined
        | {cvalue?: undefined | number | string | typeA}
};

function sum (A: typeA): number {
    let cvalueSum: number = 0;

    for (const key of Object.keys(A)) {
        const keyValue = A[key]?.cvalue;

        if (A[key] === undefined || keyValue === undefined) {
            cvalueSum = cvalueSum + 2021;
        } else {
            if (typeof keyValue === "number") {
                cvalueSum = cvalueSum + keyValue;
            } else if (typeof keyValue === "string") {
                if (isNaN(Number(keyValue))) {
                    cvalueSum = cvalueSum + 2021;
                } else {
                    cvalueSum = cvalueSum + Number(keyValue);
                }
            } else if (typeof keyValue === "object" && keyValue !== null) {
                cvalueSum = cvalueSum + sum(keyValue);
            }
        }
    }
    return cvalueSum;
}

// Tests

const test1 = {
    one: {cvalue: 1}, //1
    two: {cvalue: "28"}, //28
    three: {cvalue:
            {four: {cvalue:
                        {five: { cvalue: "String10"}}}}}, //2021
    six: {cvalue: undefined}, //2021
    seven: undefined //2021
}

console.log(sum(test1)); // 6092

const test2 = {
    hello: {cvalue: 1},
    world: { cvalue:
            { yay: { cvalue: "2" }  }
    }
}
console.log(sum(test2)); // 3