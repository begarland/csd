const { rpn, breakString, operate } = require('./rpn.js')

const assert = require('assert').strict;

it ('breakString is a function that breaks a string', () => {
    assert.deepEqual(breakString('1 2 +'), ['1', '2', '+'])
})

it ('adds two numbers', () => {
    assert.equal(rpn('1 2 +'), 3)
})

it ('subtract two numbers', () => {
    assert.equal(rpn('5 2 -'), 3)
})

it ('must begin with two numbers', () => {
    assert.throws(() => rpn('1 +'), Error, 'oh no, bad number')
    assert.throws(() => rpn('4 * 6 - 10 + 8 / 2'), Error, 'oh no, bad number')
})

it ('will take in two numbers and an operator', () => {
    assert.equal(operate(1, 2, '+'), 3)
    assert.equal(operate(5, 2, '-'), 3)
    assert.equal(operate(2, 3, '*'), 6)
    assert.equal(operate(2, 3, '^'), 8)
    assert.equal(operate(8, 2, '/'), 4)
})

it ('must continue operating after 3 entries', () => {
    assert.equal(rpn('2 2 + 2 +'), 6)
    assert.throws(() => rpn('2 2 + + +'), Error, 'oh no, bad number')
}) 


it ('operands must oscillate approps with numbers (plz work)', () => {
    assert.throws(() => rpn('2 2 + 2'), Error, 'oh no, bad operator')
}) 

it ('should work', () => {
    assert.equal(rpn('2.5 3.1 + 4.9 - 10 +'), 10.7)
})

// rpn calculator



// 2 2 + 2 +

// 

// 4 * 6 - 10 + 8 / 2
