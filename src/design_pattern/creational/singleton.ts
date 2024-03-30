class Boss {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  static createBoss(): Boss {
    return new Boss("Ginmaru", 99);
  }
}

let boss1 = Boss.createBoss();
let boss2 = Boss.createBoss();

let bossA = new Boss();

console.log(boss1 == boss2);
