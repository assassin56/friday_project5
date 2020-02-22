export class User {
  constructor(age) {
    this.age = age;
    this.earthLimit = 72;
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
    if (this.age === this.earthLimit) {
      let variedTime = (this.age - this.earthLimit);
      return variedTime;
    } else if (this.age > this.earthLimit) {
      let variedTime = (this.age - this.earthLimit);
      return variedTime;
    } else if (this.age < this.earthLimit) {
      let variedTime = (this.earthLimit - this.age);
      return variedTime;
    }
  }

  venusLE() {
    const lifeExp = 116; 
    if (this.venusAge === lifeExp) {
      let variedTime = (this.venusAge - lifeExp);
      return variedTime;
    } else if (this.venusAge > lifeExp) {
      let variedTime = (this.venusAge - lifeExp);
      return variedTime;
    } else if (this.venusAge < lifeExp) {
      let variedTime = (lifeExp - this.venusAge);
      return variedTime;
    }
  }

  // mercuryLE() {
  //   const lifeExp = 300;
  //   this.numYearsLeft = (lifeExp - this.mercuryAge);
  //   this.numYearsPast = (-this.mercuryAge + lifeExp);
  // }

  // marsLE() {
  //   const lifeExp = 38;
  //   this.numYearsLeft = (lifeExp - this.marsAge);
  //   this.numYearsPast = (-this.marsAge + lifeExp);
  // }
  
  // jupiterLE() {
  //   const lifeExp = 6;
  //   this.numYearsLeft = (lifeExp - this.jupiterAge);
  //   this.numYearsPast = (-this.jupiterAge + lifeExp);
  // }
}