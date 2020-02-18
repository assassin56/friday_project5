export class User {
  constructor(age, venusAge, mercuryAge, marsAge, jupiterAge, numYearsLeftEarth, numYearsPastEarth, numYearsLeftVenus, numYearsPastVenus, numYearsPastVenus, numYearsLeftMercury, numYearsPastMercury, numYearsLeftMars, numYearsPastMars, ) {
    this.age = age;
    this.venusAge = venusAge;
    this.mercuryAge = mercuryAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthLimit = 72;
    this.numYearsLeftEarth = numYearsLeftEarth;
  }
  
  calcVenus() {
    this.venusAge = Math.floor(this.age/.62);
  }

  calcMercury() {
    this.mercuryAge = Math.floor(this.age/.24);
  }

  calcMars() {
    this.marsAge = Math.floor(this.age/1.88);
  }

  calcJupiter() {
    this.jupiterAge = Math.floor(this.age/11.86);
  }

  earthLE() {
    this.numYearsLeftEarth = (this.earthLimit - this.age);
    console.log(this.numYearsLeftEarth);
    let numYearsPast = (-this.age + this.earthLimit);
    // if (this.age <= this.earthLimit) {
    //   return numYearsLeft;
    // } else {
    //   return numYearsPast;
    // }
  }

  venusLE() {
    const lifeExp = 116; 
    let numYearsLeft = (lifeExp - this.venusAge);
    let numYearsPast = (-this.venusAge + lifeExp);
    if (this.venusAge <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }

  mercuryLE() {
    const lifeExp = 300;
    let numYearsLeft = (lifeExp - this.mercuryAge);
    let numYearsPast = (-this.mercuryAge + lifeExp);
    if (this.mercuryAge <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }

  marsLE() {
    const lifeExp = 38;
    let numYearsLeft = (lifeExp - this.marsAge);
    let numYearsPast = (-this.marsAge + lifeExp);
    if (this.marsAge <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }
  
  jupiterLE() {
    const lifeExp = 6;
    let numYearsLeft = (lifeExp - this.jupiterAge);
    let numYearsPast = (-this.jupiterAge + lifeExp);
    if (this.jupiterAge <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }
}