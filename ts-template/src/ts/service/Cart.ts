import Buyable from '../domain/Buyable';

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items];
    }

    countAmount(): number {
        let result = this.items.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.price;
        }, 0)
        return result
    }

    countAmountWithDiscount(discount: number): number {
        let sum = this.items.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.price;
        }, 0);
        let result = sum - (sum / 100 * discount);
        return result
    }

    deleteItem(id: number): void {
        this.items = this.items.filter(function (elem) {
            if (elem.id !== id) {
                return elem.id
            }
        })
    }
}
