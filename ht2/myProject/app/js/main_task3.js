// Создаем класс генерация продуктов;
/*
class ProductsHamburger {
    constructor(container = ['.burgers', '.checkOptions'], check =  [false, true]) {
        this.container = container[0];
        this.container2 = container[1];
        this.products = [];
        this.toppings = [];
        this.productsPlusTopping = [];
        this.productsAll = [];
        this.check = check;
        this._init();
    }

    _init() {
        this._fetchProducts();
        this._genSummaryItem();
        this._render();


    }

    _fetchProducts() {
        this.products = [
            {id: 2, title: 'Big Burger', price: 100, calories: 40, link: null},
            {id: 1, title: 'Small Burger', price: 50, calories: 20, link: null},
        ];
        this.toppings = [
            {id: 3, title: 'Cheese', price: 10, calories: 20},
            {id: 4, title: 'Salad', price: 20, calories: 5},
            {id: 5, title: 'Potatoes', price: 15, calories: 10},
            {id: 6, title: 'Pepper', price: 15, calories: 0},
            {id: 8, title: 'Mayonnes', price: 20, calories: 5},
        ];
        let counter = 1;
        for (let product of this.toppings) {
            counter++;
            let checkboxd= 'defaultCheck' + counter;
            product.idOfElement = checkboxd;
        }
    }

    _genSummaryItem() {
        let i = 0;
        for (let product of this.products) {
            const prodObj = new ProductItem(product, this.check[i], this.toppings);
            this.productsPlusTopping.push(prodObj);
            i++;
        }
    }
    _render() {
        const block = document.querySelector(this.container);
        let i = 0;
        for (let product of this.productsPlusTopping) {
            const prod = new ProductItemForRender(product, this.check[i]);
            this.productsAll.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
            if (product.compare) {
                const blockForTurn = document.querySelector(this.container2);
                for (let item of product.link) {
                    blockForTurn .insertAdjacentHTML('beforeend', `<div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck${item.id - prod.id - 1}">
                                        <label class="form-check-label" for="defaultCheck1">
                                            ${item.title}
                                        </label>
                                    </div>`)
                }
            }
            i++;
        }
    }

}
class ProductItemForRender {
    constructor(product, k, img = 'https://placehold.it/370x370') {
        this.title = product.title;
        this.price = product.price;
        this.check = k;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4"> <img src="${this.img}" class="card-img" alt="..."> </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.title}</h5>
                                <p class="card-text">${this.price} рублей.</p>
                                <div class="checkOptions">                             

                                </div>
                                <button type="button" class="btn btn-outline-danger" onclick="window.location='#'"> Calculate </button>
                                </div>
                        </div>
                    </div>
                </div>`
    }
}

class ProductItem {
    constructor(product, n, k, img = 'https://placehold.it/180x180') {
        //this.toppings = k;
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.link = null;
        this.img = img;
        this.compare = n;
        //this.Checkbox = null;
        this._returnLink(k);
    }


    _returnLink(k) {
        if (this.compare) {
            this.link = k;
        }
    }
}

const newObject = new ProductsHamburger();

*/

//Создаем класс Гамбургерс
/*
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(topping) {

    }

    getToppings(topping) {

    }

    getSize() {

    }

    getStuffing() {

    }

    calculatePrice() {

    }

    calculateCalories() {

    }
}

class ListenerOfButton {
    constructor(id) {

    }
}
let buttonOfCalc = document.querySelector(body main .container .burgers .card .card-body button)


*/

//const burgerGen = new Hamburger();


// Создаем класс data для отображения в footer;
class data {
    constructor(container = '.data') {
        this.container = container;
        this.data = 0;
        this._init();
    }

    _init() {
        this.GetData();
        this._render();
    }

    GetData() {
        const dataInFooter = document.querySelector(this.container);
        this.data = new Date().getFullYear();
        dataInFooter.innerHTML = this._render();

    }

    _render() {
        return `${this.data}`
    }
}

const dataInFooter = new data();