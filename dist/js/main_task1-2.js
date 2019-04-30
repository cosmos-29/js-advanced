class ProductsList {
    constructor(container = '.forItems') {
        this.container = container;
        this.products = [];
        this.productsAll = [];
        this._init();
    }

    _init() {
        this._fetchProducts();
        this._render();

    }

    // Продукты, представленные в магазине

    _fetchProducts() {
        this.products = [
            {id: 1, title: 'mango people t-shirt', price: 52},
            {id: 2, title: 'mango people t-shirt', price: 22},
            {id: 3, title: 'mango people t-shirt', price: 32},
            {id: 4, title: 'mango people t-shirt', price: 42},
            {id: 5, title: 'mango people t-shirt', price: 12},
            {id: 6, title: 'mango people t-shirt', price: 22},
            {id: 7, title: 'mango people t-shirt', price: 32},
            {id: 8, title: 'mango people t-shirt', price: 72},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/180x180') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="col-sm-3">
                    <div class="card">
                        <img src=${this.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}</h5>
                            <p class="card-text">$${this.price}</p>
                            <button type="button" class="btn btn-outline-danger">Купить</button>
                        </div>
                    </div>
                </div>`
    }
}

const products = new ProductsList();

// Создаем класс cart;

class Cart {
    constructor(container = '.stretch') {
        this.container = container;
        this.counter = 0;
        this.array = [];
        this.sum =0;
        this._init();

    }

    _init() {
        this.GoodsList();
        this._render();
        this.GoodsToCars();
    }
    // Где-то тут можно написать метод, который добавляет товары в корзину по клику...
    GoodsToCars() {

    }
    // Считает количество товаров. В итоге можно вместо product экземпляру класса обратиться к массиву товаров, который
    // получился по результатам наших добавлений.
    GoodsList() {
        const cartQuantity = document.querySelector(this.container);
        this.array = products.products;
        for (let product of this.array) {
          this.sum += product.price;
        }
        //cartQuantity.innerHTML = this._render();
        cartQuantity.insertAdjacentHTML('beforeend', this._render());
        //cartQuantity.insertAdjacentHTML('beforeend', )
    }
    _render() {
        return `<p>Сумма товаров в корзине: <span>$${this.sum}</span></p>
                <p>Количество товаров в корзине: <span>${this.array.length}</span</p>`
    }
    // Кроме того того можно объявить render модального окна, чтобы по клику он открывался и там отображалось содержимое
    //корзины.
}
const cart = new Cart();

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