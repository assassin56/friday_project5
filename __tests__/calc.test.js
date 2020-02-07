import { User } from './../src/calc.js';

describe ('User', () => {
  let newUser;
  
  beforeEach( () => {
    newUser = new User(35);
  });

  test ('should test that the user has entered a number stores as their age in Earth years.', () => {
    expect(newUser.age).toEqual(35);
  });

  test ('should test the users age in Venus years', () => {
    const venus = newUser.calcVenus();
    expect(venus).toEqual(56);
  });

  test ('should test the users age in Venus years', () => {
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

  test ('should test for a life expentency variable on Earth', () => {
    const earth = newUser.earthLE();
    expect(earth).toEqual(1);
  });
});