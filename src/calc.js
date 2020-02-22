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

  mercuryLE() {
    const lifeExp = 300;
    if (this.mercuryAge === lifeExp) {
      let variedTime = (this.mercuryAge - lifeExp);
      return variedTime;
    } else if (this.mercuryAge > lifeExp) {
      let variedTime = (this.mercuryAge - lifeExp);
      return variedTime;
    } else if (this.mercuryAge < lifeExp) {
      let variedTime = (lifeExp - this.mercuryAge);
      return variedTime;
    }
  }

  marsLE() {
    const lifeExp = 38;
    if (this.marsAge === lifeExp) {
      let variedTime = (this.marsAge - lifeExp);
      return variedTime;
    } else if (this.marsAge > lifeExp) {
      let variedTime = (this.marsAge - lifeExp);
      return variedTime;
    } else if (this.marsAge < lifeExp) {
      let variedTime = (lifeExp - this.marsAge);
      return variedTime;
    }
  }
  
  jupiterLE() {
    const lifeExp = 6;
    if (this.jupiterAge === lifeExp) {
      let variedTime = (this.jupiterAge - lifeExp);
      return variedTime;
    } else if (this.jupiterAge > lifeExp) {
      let variedTime = (this.jupiterAge - lifeExp);
      return variedTime;
    } else if (this.jupiterAge < lifeExp) {
      let variedTime = (lifeExp - this.jupiterAge);
      return variedTime;
    }
  }
}