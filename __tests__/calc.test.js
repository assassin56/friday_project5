import { User } from './../src/calc.js';

describe ('User', () => {
  let youngPerson = new User(35); 

  test ('should test that the users input stores as their age in Earth years.', () => {
    expect(youngPerson.age).toEqual(35);
  });

  test ('should test for the users age in Venus years', () => {
    youngPerson.calcVenus();
    expect(youngPerson.venusAge).toEqual(56);
  });

  test ('should test for the users age in Mercury years', () => {
    youngPerson.calcMercury();
    expect(youngPerson.mercuryAge).toEqual(145);
  });

  test ('should test for the users age in Mars years', () => {
    youngPerson.calcMars();
    expect(youngPerson.marsAge).toEqual(18);
  });

  test ('should test the users age in Jupiter years', () => {
    youngPerson.calcJupiter();
    expect(youngPerson.jupiterAge).toEqual(2);
  });

  // test ('should test for the users life expentency on Earth', () => {
  //   youngPerson.earthLE();
  //   expect(youngPerson.numYearsLeft).toEqual(37);
  // });

  // test ('should test for the number of years the user has lived past the life expectency on Earth', () => {
  //   youngPerson.earthLE();
  //   expect(youngPerson.numYearsPast).toEqual(37);
  // });

  // test ('should test for the users life expentency on Venus', () => {
  //   newUser.venusLE();
  //   expect(newUser.numYearsLeft).toEqual(60);
  // });

  // test('should test for the number of years the user has lived past life expectency on Venus', () => {
  //   newUser.venusLE();
  //   expect(newUser.numYearsPast).toEqual(60);
  // });

  // test ('should test the users life expentency on Mercury', () => {
  //   newUser.mercuryLE();
  //   expect(newUser.numYearsLeft).toEqual(155);
  // });

  // test ('should test for the number of years the user has lived past the life expectency on Mercury', () => {
  //   newUser.mercuryLE();
  //   expect(newUser.numYearsPast).toEqual(155);
  // });

  // test ('should test for the users life expentency on Mars', () => {
  //   newUser.marsLE();
  //   expect(newUser.numYearsLeft).toEqual(20);
  // });

  // test ('should test for the number of years the user has lived past the life expectency on Mars.', () => {
  //   newUser.marsLE();
  //   expect(newUser.numYearsLeft).toEqual(20);
  // });

  // test ('should test for the users life expentency on Jupiter', () => {
  //   newUser.jupiterLE();
  //   expect(newUser.numYearsLeft).toEqual(4);
  // });

  // test('should test for the number of years the user has lived past the life expectency on Jupiter', () => {
  //   newUser.jupiterLE();
  //   expect(newUser.numYearsPast).toEqual(4);
  // });
});