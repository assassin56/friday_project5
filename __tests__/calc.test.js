import { User } from './../src/calc.js';


// Pass the "User" class to a new object //
describe ('User', () => {
  let newUser = new User(); 

  // Test for the property in the constructor. Check that 35 is passed. //
  test ('should test that the users input stores as their age in Earth years.', () => {
    expect(newUser.age).toEqual(35);
  });

  test ('should test for the users age in Venus years', () => {
    newUser.calcVenus();
    expect(newUser.venusAge).toEqual(56);
  });

  test ('should test for the users age in Mercury years', () => {
    newUser.calcMercury();
    expect(newUser.mercuryAge).toEqual(145);
  });

  test ('should test for the users age in Mars years', () => {
    newUser.calcMars();
    expect(newUser.marsAge).toEqual(18);
  });

  test ('should test the users age in Jupiter years', () => {
    newUser.calcJupiter();
    expect(newUser.jupiterAge).toEqual(2);
  });

  test ('should test for the users life expentency on Earth', () => {
    newUser.earthLE();
    expect(newUser.numYearsLeft).toEqual(37);
  });

  test ('should test for the number of years the user has lived past the life expectency on Earth', () => {
    newUser.earthLE();
    expect(newUser.numYearsPast).toEqual(37);
  });

  test ('should test for the users life expentency on Venus', () => {
    newUser.venusLE();
    expect(newUser.numYearsLeft).toEqual(60);
  });

  test('should test for the number of years the user has lived past life expectency on Venus', () => {
    newUser.venusLE();
    expect(newUser.numYearsPast).toEqual(60);
  });

  test ('should test the users life expentency on Mercury', () => {
    newUser.mercuryLE();
    expect(newUser.numYearsLeft).toEqual(155);
  });

  test ('should test for the number of years the user has lived past the life expectency on Mercury', () => {
    newUser.mercuryLE();
    expect(newUser.numYearsPast).toEqual(155);
  });

  test ('should test for the users life expentency on Mars', () => {
    newUser.marsLE();
    expect(newUser.numYearsLeft).toEqual(20);
  });

  test ('should test for the number of years the user has lived past the life expectency on Mars.', () => {
    newUser.marsLE();
    expect(newUser.numYearsLeft).toEqual(20);
  });

  test ('should test for the users life expentency on Jupiter', () => {
    newUser.jupiterLE();
    expect(newUser.numYearsLeft).toEqual(4);
  });

  test('should test for the number of years the user has lived past the life expectency on Jupiter', () => {
    newUser.jupiterLE();
    expect(newUser.numYearsPast).toEqual(4);
  });
});