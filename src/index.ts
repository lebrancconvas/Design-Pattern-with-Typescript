class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  static area(cir: Circle): number {
    return Math.PI * cir.radius * cir.radius;
  }

  circumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(9);
console.log(Circle.area(circle));
