import Cart from '../service/Cart';
import Book from '../domain/Book';
import Buyable from '../domain/Buyable';

// Пустая корзина
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.getAll().length).toBe(0);
});

// Тестирование добавление товара в корзину
test('testing add to cart', () => {
  let theDarkTower = new Book(1, "Темная башня", "Стивен Кинг", 600, 740);
  let cart = new Cart();
  cart.add(theDarkTower);
  let result = cart.getAll();
  expect(result).toEqual([theDarkTower])
});


// Тестирование просмотра товаров в корзине
test('testing get All from cart', () =>{
  let cart = new Cart();
  let theDarkTower = new Book(1, "Темная башня", "Стивен Кинг", 600, 740);
  cart.add(theDarkTower);
  expect(cart.getAll().length).toBe(1);
});

// Тестирование суммы товаров
test('testing sum amout', () =>{
  let cart = new Cart();
  let theDarkTower = new Book(1, "Темная башня", "Стивен Кинг", 600, 740);
  let aliceInWonderland = new Book(2, "Алиса в стране чудес", "Льюис Кэррол", 400, 350);
  let aLittleLife = new Book(3, "Маленькая жизнь", "Донна Тартт", 850, 1500);
  cart.add(theDarkTower);
  cart.add(aliceInWonderland);
  cart.add(aLittleLife);
  let result = cart.countAmount();
  expect(result).toBe(1850);
});

// Тестирование суммы товаров со скидкой
test('testing sum amout with discount', () =>{
  let cart = new Cart();
  let theDarkTower = new Book(1, "Темная башня", "Стивен Кинг", 600, 740);
  let aliceInWonderland = new Book(2, "Алиса в стране чудес", "Льюис Кэррол", 400, 350);
  let aLittleLife = new Book(3, "Маленькая жизнь", "Донна Тартт", 850, 1500);
  cart.add(theDarkTower);
  cart.add(aliceInWonderland);
  cart.add(aLittleLife);
  let result = cart.countAmountWithDiscount(10);
  expect(result).toBe(1665);
});

// Тестирование удаления товара
test('testing delete item', () =>{
  let cart = new Cart();
  let theDarkTower = new Book(1, "Темная башня", "Стивен Кинг", 600, 740);
  let aliceInWonderland = new Book(2, "Алиса в стране чудес", "Льюис Кэррол", 400, 350);
  let aLittleLife = new Book(3, "Маленькая жизнь", "Донна Тартт", 850, 1500);
  cart.add(theDarkTower);
  cart.add(aliceInWonderland);
  cart.add(aLittleLife);
  cart.deleteItem(2);
  expect(cart.getAll().length).toBe(2);
});