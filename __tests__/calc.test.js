import { User } from './../src/calc.js';

describe ('User', () => {
  let newUser = new User(35); 

  test ('should test that the user has entered a number stores as their age in Earth years.', () => {
    expect(newUser.age).toEqual(35);
  });

  test ('should test the users age in Venus years', () => {
    const venus = newUser.calcVenus();
    expect(venus).toEqual(56);
  });

  test ('should test the users age in Mercury years', () => {
    const mercury = newUser.calcMercury();
    expect(mercury).toEqual(145);
  });

  test ('should test the users age in Mars years', () => {
    const mars = newUser.calcMars();
    expect(mars).toEqual(18);
  });

  test ('should test the users age in Jupiter years', () => {
    const jupiter = newUser.calcJupiter();
    expect(jupiter).toEqual(2);
  });

  test ('should test for the users life expentency on Earth', () => {
    const earthLE = newUser.earthLE();
    expect(earthLE).toEqual(37);
  });

  test ('should test for the users life expentency on Venus', () => {
    const venusLE = newUser.venusLE();
    expect(venusLE).toEqual(60);
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