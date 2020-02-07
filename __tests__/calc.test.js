import { User } from './../src/calc.js';

describe ('User', () => {
  let newUser;
  
  beforeEach( () => {
    newUser = new User(35);
  });

  test('should test that the user has entered a number stores as their age in Earth years.', () => {
    expect(newUser.age).toEqual(35);
  });
});