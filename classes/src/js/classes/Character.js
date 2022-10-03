export default class Character {
  constructor(name, type) {
    const typesAllowed = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Такое имя невозможно');
    }
    if (typesAllowed.indexOf(type) < 0) {
      throw new Error('Такой тип невозможен');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Герой мертв, нельзя излечить');
    }

    // На 1 повышает поле level;
    this.level = 1 + this.level;

    // На 20% повышает показатели attack и defence;
    this.attack *= 1.2;
    this.defence *= 1.2;

    // Приводит показатель health к значению 100.
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Персонаж уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
