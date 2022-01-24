const app = require('../app.js');

// test("should equal 5 when passed 2 and 3",()=>{
//     expect(app.addFunc(2,3)).toBe(5);
// })

// test('should contain Stuart', () => {
//     expect(app.myArray).toContain('Stuart')
// })

// test('Should equal 5 when passed 2 and 3', () => {
//     expect(app.addFunc(2,3)).toEqual(10);
// })

//? Challenge: Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function

// it('Should have the properties that are inputted', () => {
//     app.makeObject('one','two')
//     expect(testObject).toHaveProperty('propertyOne','one');
//     expect(testObject).toHaveProperty('propertyTwo','two');
// });

//? Challenge: Make sure what is returned is not null

// let itsNull = null;
// let itsNotNull = '';

// it('Should not return null', () => {
//     expect(itsNotNull).not.toBeNull();
// })

//? Challenge: A value that is truthy

// coinFlipper = () => {
//     let coin = Math.floor(Math.random() * 2) + 1;
//     if (coin = 1) {return true} else {return false}
// };

// it('Should be truthy', () => {
//     let result = coinFlipper();
//     expect(result).toBeTruthy();
// });

//? Challenge: A value that is falsy

// it('Should be falsy', () => {
//     let result = coinFlipper();
//     expect(result).toBeFalsy();
// })