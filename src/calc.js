export class User {
  constructor(age) {
    this.age = age;
  }
  
  calcVenus() {
    let currentAge = this.age;
    let venus = Math.floor(currentAge/.62);
    return venus;
  }

  calcMercury() {
    let currentAge = this.age;
    let mercury = Math.floor(currentAge/.24);
    return mercury;
  }

  calcMars() {
    let currentAge = this.age;
    let mars = Math.floor(currentAge/1.88);
    return mars;
  }

  calcJupiter() {
    let currentAge = this.age;
    let jupiter = Math.floor(currentAge/11.86);
    return jupiter;
  }

  earthLE() {
    let currentAge = this.age;
    const lifeExp = 72;
    let numYearsLeft = (lifeExp - currentAge);
    let numYearsPast = (-currentAge + lifeExp);
    if (currentAge <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }

  venusLE() {
    const ageVenus = this.calcVenus();
    const lifeExp = 116;
    let numYearsLeft = (lifeExp - ageVenus);
    let numYearsPast = (-ageVenus + lifeExp);
    if (ageVenus <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }

  mercuryLE() {
    const ageMercury = this.calcMercury();
    const lifeExp = 300;
    let numYearsLeft = (lifeExp - ageMercury);
    let numYearsPast = (-ageMercury + lifeExp);
    if (ageMercury <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }
}