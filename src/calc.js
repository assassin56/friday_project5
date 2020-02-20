export class User {
  constructor() {
    this.age = 35;
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
    this.numYearsLeft = (this.earthLimit - this.age);
    this.numYearsPast = (-this.age + this.earthLimit);
  }

  venusLE() {
    const lifeExp = 116; 
    this.numYearsLeft = (lifeExp - this.venusAge);
    this.numYearsPast = (-this.venusAge + lifeExp);
  }

  mercuryLE() {
    const lifeExp = 300;
    this.numYearsLeft = (lifeExp - this.mercuryAge);
    this.numYearsPast = (-this.mercuryAge + lifeExp);
  }

  marsLE() {
    const lifeExp = 38;
    this.numYearsLeft = (lifeExp - this.marsAge);
    this.numYearsPast = (-this.marsAge + lifeExp);
  }
  
  jupiterLE() {
    const lifeExp = 6;
    this.numYearsLeft = (lifeExp - this.jupiterAge);
    this.numYearsPast = (-this.jupiterAge + lifeExp);
  }
}