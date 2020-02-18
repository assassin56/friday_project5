import { User } from './../src/calc.js';

describe ('User', () => {
  let newUser = new User(35); 

  test ('should test that the user has entered a number stores as their age in Earth years.', () => {
    expect(newUser.age).toEqual(35);
  });

  test ('should test the users age in Venus years', () => {
    newUser.calcVenus();
    expect(newUser.venusAge).toEqual(56);
  });

  test ('should test the users age in Mercury years', () => {
    newUser.calcMercury();
    expect(newUser.mercuryAge).toEqual(145);
  });

  test ('should test the users age in Mars years', () => {
    newUser.calcMars();
    expect(newUser.marsAge).toEqual(18);
  });

  test ('should test the users age in Jupiter years', () => {
    newUser.calcJupiter();
    expect(newUser.jupiterAge).toEqual(2);
  });

  test ('should test for the users life expentency on Earth', () => {
    newUser.earthLE();
    expect(newUser.numYearsLeftEarth).toEqual(37);
  });

  test ('should test for the users life expentency on Venus', () => {
    newUser.venusLE();
    expect(newUser.numYearsLeft).toEqual(60);
  });

  test ('should test for the users life expentency on Mercury', () => {
    const mercuryLE = newUser.mercuryLE();
    expect(mercuryLE).toEqual(155);
  });

  test ('should test for the users life expentency on Mars', () => {
    const marsLE = newUser.marsLE();
    expect(marsLE).toEqual(20);
  });

  test ('should test for the users life expentency on Jupiter', () => {
    const jupiterLE = newUser.jupiterLE();
    expect(jupiterLE).toEqual(4);
  });
});