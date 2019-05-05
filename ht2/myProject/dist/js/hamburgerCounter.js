class Param {
    constructor(elem) {
        this.name = elem.value;
        this.price = +elem.dataset['price'];
        this.calories = +elem.dataset['calories'];
    }
}
class Burger {
    constructor(size, add, toppings) {
        this.size = new Param(this._select(size));
        this.add = this._selectCheck(add);
        this.toppings =this._selectCheck(toppings);
    }
    _selectCheck(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }
    _select(name) {
        return document.querySelector(`input[name = "${name}"]:checked`);
    }
    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    }
    _calcPrice() {
        let result = 0;
        result += this.size.price;
        this.add.forEach(el => {
            result += el.price;
        });
        this.toppings.forEach(el => {
            result += el.price;
        });
        return result;
    }
    _calCalories() {
        let result = 0;
        result += this.size.calories;
        this.add.forEach(el => {
            result += el.calories;
        });
        this.toppings.forEach(el => {
            result += el.calories;
        });
        return result;
    }

}