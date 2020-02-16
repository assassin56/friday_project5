export class User {
  constructor(age) {
    this.age = age;
  }
  
  calcVenus() {
    let venus = Math.floor(this.age/.62);
    return venus;
  }

  calcMercury() {
    let mercury = Math.floor(this.age/.24);
    return mercury;
  }

  calcMars() {
    let mars = Math.floor(this.age/1.88);
    return mars;
  }

  calcJupiter() {
    let jupiter = Math.floor(this.age/11.86);
    return jupiter;
  }

  earthLE() {
    const lifeExp = 72;
    let numYearsLeft = (lifeExp - this.age);
    let numYearsPast = (-this.age + lifeExp);
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

  marsLE() {
    const ageMars = this.calcMars();
    const lifeExp = 38;
    let numYearsLeft = (lifeExp - ageMars);
    let numYearsPast = (-ageMars + lifeExp);
    if (ageMars <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }
  
  jupiterLE() {
    const ageJupiter = this.calcJupiter();
    const lifeExp = 6;
    let numYearsLeft = (lifeExp - ageJupiter);
    let numYearsPast = (-ageJupiter + lifeExp);
    if (ageJupiter <= lifeExp) {
      return numYearsLeft;
    } else {
      return numYearsPast;
    }
  }
}