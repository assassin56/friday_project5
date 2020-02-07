# _Arrays and Looping_

#### _This is a almost running webpage, as of 1/24/20._

#### By _**Antonio Cruz**_

## Description

_Link to gh-pages branch_
_https://assassin56.github.io/friday_project3/_

_This is a webpage that allows the user to input a number and give back a list of numbers from 0 to their input. The 1s, 2s, and 3s are to be replaced with silly phrases that would imitate a robot._

## SPEC Sheet

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Initial test fails
      * Earth years age test passes
   * Output: age in Mercury years
      * Test Failure: age not defined
      * Test Pass: Expected age input is stored as user's current age in Earth years.
   * Refactor:
      * Exclude method specifically pertaining to Earth years calculation. This is redundant as the user's initial input is their age on Earth. Future objects will be calculated against this.

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Venus age fails
   * Output: age in Venus years
      * Test Faliure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Venus time (35).
   * Refactor: 
      * Return Venus age with Math.floor.

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Mercury age fails
   * Output: age in Venus years
      * Test Faliure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Mercury time (145).
   * Refactor: 
      * Return Mercury age with Math.floor.

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Mars test fails.
   * Output: age in Mars years.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Mars time (18).
* A class which returns a human's age in...:
   * Input: user's age (ex:35).
   * Output: age in Jupiter years
* Determine how long the user has left to live on each planet.
   * Input: users age (ex:35).
   * Output: age on each planet, and number of years left.
* If the user has lived past any given planet's life expectency:
   * Input: user's age (ex:35).
   * Output: return number of years lived past expectency.


## Setup/Installation Requirements

* Click the link above under the "Descriptions" tab. This should lead you directly to the webpage.

## Known Bugs

_N/A_

## Support and contact details

_Antonio Cruz's email:_
_codrocks.cruz3@gmail.com_

## Technologies Used

* _Markdown_
* _CSS_
* _HTML_
* _Bootstrap_
* _Git_
* _JavaScript_
* _JQuery_

### License

**The MIT license**

Copyright (c) 2020 **Antonio Cruz**