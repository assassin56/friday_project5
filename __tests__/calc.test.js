import { User } from './../src/calc.js';

// Test for a person younger than the Life Expectency on each planet //
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

  test ('should test for the users time left on Earth', () => {
    expect(youngPerson.earthLE()).toEqual(37);
  });

  test ('should test for the users time left on Venus', () => {
    expect(youngPerson.venusLE()).toEqual(60);
  });

  test ('should test for the users time left on Mercury', () => {
    expect(youngPerson.mercuryLE()).toEqual(155);
  });

  test('should test for the users time left on Mars', () => {
    expect(youngPerson.marsLE()).toEqual(20)
  });

  test('should test for the users time left on Jupiter', () => {
    expect(youngPerson.jupiterLE()).toEqual(4);
  });
});

// Test for a person older than that Life Expectency of each planet //
describe ('User', () => {
  let olderPerson = new User(90); 

  test ('should test that the users input stores as their age in Earth years.', () => {
    expect(olderPerson.age).toEqual(90);
  });

  test ('should test for the users age in Venus years', () => {
    olderPerson.calcVenus();
    expect(olderPerson.venusAge).toEqual(145);
  });

  test ('should test for the users age in Mercury years', () => {
    olderPerson.calcMercury();
    expect(olderPerson.mercuryAge).toEqual(375);
  });

  test ('should test for the users age in Mars years', () => {
    olderPerson.calcMars();
    expect(olderPerson.marsAge).toEqual(47);
  });

  test ('should test the users age in Jupiter years', () => {
    olderPerson.calcJupiter();
    expect(olderPerson.jupiterAge).toEqual(7);
  });

  test ('should test for the users age value past the LE on Earth', () => {
    expect(olderPerson.earthLE()).toEqual(18);
  });

  test ('should test for the users age value past the LE on Venus', () => {
    expect(olderPerson.venusLE()).toEqual(29);
  });

  test ('should test for the users age value past the LE on Mercury', () => {
    expect(olderPerson.mercuryLE()).toEqual(75);
  });

  test('should test for the users age value past the LE on Mars', () => {
    expect(olderPerson.marsLE()).toEqual(9)
  });

  test('should test for the users age value past the LE on Jupiter', () => {
    expect(olderPerson.jupiterLE()).toEqual(1);
  });
});

// Test for a person who happens to be the same age as the LE on each planet //
describe ('User', () => {
  let atTheCusp = new User(72); 

  test ('should test that the users input stores as their age in Earth years.', () => {
    expect(atTheCusp.age).toEqual(72);
  });

  test ('should test for the users age in Venus years', () => {
    atTheCusp.calcVenus();
    expect(atTheCusp.venusAge).toEqual(116);
  });

  test ('should test for the users age in Mercury years', () => {
    atTheCusp.calcMercury();
    expect(atTheCusp.mercuryAge).toEqual(300);
  });

  test ('should test for the users age in Mars years', () => {
    atTheCusp.calcMars();
    expect(atTheCusp.marsAge).toEqual(38);
  });

  test ('should test the users age in Jupiter years', () => {
    atTheCusp.calcJupiter();
    expect(atTheCusp.jupiterAge).toEqual(6);
  });

  test ('should test for the users age value as the same as the LE on Earth', () => {
    expect(atTheCusp.earthLE()).toEqual(0);
  });

  test ('should test for the users age value as the same as the LE on Venus', () => {
    expect(atTheCusp.venusLE()).toEqual(0);
  });

  test ('should test for the users age value as the same as the LE on Mercury', () => {
    expect(atTheCusp.mercuryLE()).toEqual(0);
  });

  test('should test for the users age value as the same as the LE on Mars', () => {
    expect(atTheCusp.marsLE()).toEqual(0)
  });

  test('should test for the users age value as the same as the LE on Jupiter', () => {
    expect(atTheCusp.jupiterLE()).toEqual(0);
  });
});