abstract class CharacterFactory {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  abstract talk(): void;
}

class MageCharacter extends CharacterFactory {

  constructor(name: string, level: number) {
    super(name, level);
  }
  talk(): void {
    console.log(`I am a Mage name ${this.name} and level ${this.level}`);
  }
}

class WarriorCharacter extends CharacterFactory {

  constructor(name: string, level: number) {
    super(name, level);
  }

  talk(): void {
    console.log(`I am a Warrior ${this.name} and level ${this.level}`);
  }
}

export {
  MageCharacter,
  WarriorCharacter
};

