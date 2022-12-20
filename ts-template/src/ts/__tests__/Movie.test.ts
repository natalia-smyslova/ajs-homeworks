import Movie from "../service/Movie";

//тестирование добавления фильма в корзину
test('testing add to cart', () => {

    let spiderMan = new Movie("Человек-паук", 2009, "США", "«Turn your world upside down»", ["Комиксы"], "138 минут");

    let cart: any = [];
    function addToCart(movie: Movie): void {
        cart.push(movie)
    }

    addToCart(spiderMan);

    expect(cart).toEqual([spiderMan]);
});