import { User } from './../src/calc.js';

// code handles ONLY up to LE ages. Must write more tests for PAST and OF THAT LE. //
describe ('User', () => {
  let youngPerson = new User(35); 

  // test ('should test that the users input stores as their age in Earth years.', () => {
  //   expect(youngPerson.age).toEqual(35);
  // });

  // test ('should test for the users age in Venus years', () => {
  //   youngPerson.calcVenus();
  //   expect(youngPerson.venusAge).toEqual(56);
  // });

  test ('should test for the users age in Mercury years', () => {
    youngPerson.calcMercury();
    expect(youngPerson.mercuryAge).toEqual(145);
  });

  // test ('should test for the users age in Mars years', () => {
  //   youngPerson.calcMars();
  //   expect(youngPerson.marsAge).toEqual(18);
  // });

  // test ('should test the users age in Jupiter years', () => {
  //   youngPerson.calcJupiter();
  //   expect(youngPerson.jupiterAge).toEqual(2);
  // });

  // test ('should test for the users time left on Earth', () => {
  //   expect(youngPerson.earthLE()).toEqual(37);
  // });

  // test ('should test for the users time left on Venus', () => {
  //   expect(youngPerson.venusLE()).toEqual(60);
  // });

  test ('should test for the users time left on Mercury', () => {
    expect(youngPerson.mercuryLE()).toEqual(155);
  });
});