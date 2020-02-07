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
}