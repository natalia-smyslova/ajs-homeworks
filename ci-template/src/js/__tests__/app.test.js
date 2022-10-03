import { heroes, orderOfHeroes } from "../app";

// ПЕРВЫЙ ТЕСТ

test.each([
   { name: "Маг", health: 100, expected: "healthy" },
   { name: "Лучник", health: 80, expected: "wounded" },
   { name: "Мечник", health: 10, expected: "critical" }
])("testing level of health", ({ name, health, expected }) => {

   const result = heroes({ name: name, health: health });
   console.log(result);

   expect(result).toBe(expected);
});

// ВТОРОЙ ТЕСТ

let list = [
   { name: 'мечник', health: 10 },
   { name: 'маг', health: 100 },
   { name: 'лучник', health: 80 },
   { name: 'вор', health: 80 },
];

test("testing order of health", () => {
   const newOrder = orderOfHeroes(list);
   let result = [];

   newOrder.forEach(function (item, i, newOrder) {
      result.push(item.health);
   });

   const expected = [100, 80, 80, 10];
   expect(result).toEqual(expected);
});


