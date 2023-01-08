/**
 * @jest-environment jsdom
 */

// use this in the console: 
//NODE_OPTIONS=--experimental-vm-modules npx jest
// you should add "type":"module" in package.json before running the test


import findBMR from "./calculateBMR.js"
test('Calculate the BMR calories properly for a male:',()=>{
    const male=[true,false]
    const age=22
    const height=175
    const weight=70
    
    expect(findBMR(age,male,height,weight))
    .toBe(1755.885)
})

test('Calculate the BMR calories properly for a female:',()=>{
    const female=[false,true]
    const age=44
    const height=180
    const weight=90
    
    expect(findBMR(age,female,height,weight))
    .toBe(1643.026)
})

test('Calculate the BMR with falsy output for a female:',()=>{
    const female=[false,true]
    const age=43
    const height=160
    const weight=55
    
    expect(findBMR(age,female,height,weight))
    .not.toBe(1755.885)
})
