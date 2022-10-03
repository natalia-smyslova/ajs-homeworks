import Character from '../classes/Character';
import Bowman from '../classes/Bowman';
import Magician from '../classes/Magician';
import Daemon from '../classes/Daemon';
import Swordsman from '../classes/Swordsman';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';

test('testing name (letters < 2)', () => {
  expect(() => new Character('a', 'dummy')).toThrow('Такое имя невозможно');
});

test('testing name (letters > 10)', () => {
  expect(() => new Character('12345678901', 'dummy')).toThrow('Такое имя невозможно');
});

test('testing name (string)', () => {
  expect(() => new Character(123, 'dummy')).toThrow('Такое имя невозможно');
});

test('testing type', () => {
  expect(() => new Character('dummy', 'dummy')).toThrow('Такой тип невозможен');
});

test('testing wrong damage', () => {
  const char = new Character('dummy', 'Bowman');
  char.health = 0;
  expect(() => char.damage(10)).toThrow('Персонаж уже мертв');
});

test('testing right damage', () => {
  const legolas = new Character('legolas', 'Bowman');
  legolas.health = 100;
  legolas.defence = 25;
  legolas.damage(10);
  expect(legolas.health).toBe(92.5);
});

test('testing levelUp exception', () => {
  const char = new Character('dummy', 'Bowman');
  char.health = 0;
  expect(() => char.levelUp()).toThrow('Герой мертв, нельзя излечить');
});

test('testing levelUp', () => {
  const char = new Bowman('dummy');
  char.levelUp();
  expect(char.attack).toBe(30);
  expect(char.defence).toBe(30);
});

const classesToTest = [
  [Bowman, 'Bowman'],
  [Daemon, 'Daemon'],
  [Swordsman, 'Swordsman'],
  [Undead, 'Undead'],
  [Zombie, 'Zombie'],
  [Magician, 'Magician'],
];

test('testing correct type', () => {
  classesToTest.forEach((item) => {
    const object = new item[0]('dummy');
    expect(object.type).toBe(item[1]);
  });
});
