# _Super Galactic Calculator_

#### _This is a running webpage, as of 2/7/20._

#### By _**Antonio Cruz**_

## Description

_Link to github repo_

_https://github.com/assassin56/friday_project5_

_Link to gh-pages branch_
_https://assassin56.github.io/friday_project5/_

_This is a calculator that determines, based on one's age, their actual age on other planets. Among this interesting fact, it will also tell you your life expectency on those planets, and whether or not you surpassed that value._

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
      * Test Pass: Users age is calculated to Venus time (35 y/o).
   * Refactor: 
      * Return Venus age with Math.floor.

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Mercury age fails
   * Output: age in Venus years
      * Test Faliure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Mercury time (145 y/o).
   * Refactor: 
      * Return Mercury age with Math.floor.

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Mars test fails.
   * Output: age in Mars years.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Mars time (18 y/o).

* A class which returns a human's age in...:
   * Input: user's age (ex:35).
      * Jupiter test fails.
   * Output: age in Jupiter years.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users age is calculated to Jupiter time (2 y/o).

* Determine life-expectenecy on Earth.
   * Input: users age (ex:35).
      * Earth LE test fails.
   * Output: age on Earth, and number of years left.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users time left, or time past, is calculated to (37).

* Determine life-expectenecy on Venus.
   * Input: users age (ex:35).
      * Venus LE test fails.
   * Output: age on Venus, and number of years left.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users time left, or time past, is calculated to (60).

* Determine life-expectenecy on Mercury.
   * Input: users age (ex:35).
      * Mercury LE test fails
   * Output: age on Mercury, and number of years left.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users time left, or time past, is calculated to (155).

* Determine life-expectenecy on Mars.
   * Input: users age (ex:35).
      * Mars LE test fails.
   * Output: age on Mars, and number of years left.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users time left, or time past, is calculated to (20).

* Determine life-expectenecy on Jupiter.
   * Input: users age (ex:35).
      * Jupiter LE test fails
   * Output: age on Jupiter, and number of years left.
      * Test Failure: deep equality, .toEqual(1)
      * Test Pass: Users time left, or time past, is calculated to ().


## Setup/Installation Requirements

* Clone this repo by selecting the "clone or download" button. This will allow you to copy the repo's link.
* While on the command line in your terminal, enter "git clone" followed by the copied url.
* Enter "ls" to show a list of files and documents. One of them will be labeled "friday_project5. Use "cd" followed by the project directory name to navigate there. 
* While in project directory, open the contents of the directory, or use "code ." to enable the shortcut to open in Visual Studio Code. 

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
* _Jest_
* _Webpack_
* _EsLint_


### License

**The MIT license**

Copyright (c) 2020 **Antonio Cruz**