import {add, divide, multiply, subtract} from "./index.js"
import {expect, jest, test} from '@jest/globals';


describe("sum function", () =>{
    const sumA = 2;
    const sumB = 3;
    const result = add(sumA,sumB);
    
    test("return 5 if called with 2 and 3", ()=>{
        expect(result).toBe(5)
    })

    test("negative if greater amount is negative", ()=>{
            let greaterNeg = add(3, -4);
            expect(greaterNeg).toBeLessThan(0)
    })

    test("return zero-point-something for small values", ()=>{
        expect(result).toBeCloseTo(sumA + sumB)
    })
})


describe("subtract function", () =>{
    const subA = 15;
    const subB = 5;
    const result = subtract(subA,subB);
    
    test("return 10 if called with subtract (15,5)", ()=>{
        expect(result).toBe(10)
    })

    test("negative if second arg is greater than first", ()=>{
        const secondGreater = subtract(5, 15)
        expect(secondGreater).toBeLessThan(0)
    })
})


describe("multiply function", () =>{
    const multiA = 2;
    const multiB = 4;
    const result = multiply(multiA,multiB);
    
    test("return 8 if called with multiply (2,4)", ()=>{
        expect(result).toBe(8)
    })

    test("returns a negative value if only the first argument is negative", ()=>{
        let firstNeg = multiply(-3,15)
        expect(firstNeg).toBeLessThan(0)
    })

    test("returns a negative value if only the second argument is negative", ()=>{
        let secondNeg = multiply(3,-15)
        expect(secondNeg).toBeLessThan(0)
     })

     test("returns a positive value if called with two negative arguments", ()=>{
        let bothNeg = multiply(-3,-15)
        expect(bothNeg).toBeGreaterThan(0)
     })
})


describe("divide function", () =>{
    const divA = 9;
    const divB = 3;
    const result = divide(divA,divB);
    
    test("returns 3 if called with divide(9, 3)", ()=>{
        expect(result).toBe(3)
    })

    test('returns "You should not do this!" if called with 0 as second argument', ()=>{
        let notDo = divide(4, 0);
        expect(notDo).toBe("You should not do this!")
    })
})

