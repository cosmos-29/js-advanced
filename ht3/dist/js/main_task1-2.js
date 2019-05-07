const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/`;

class ProductsList {
    constructor(container = '.forItems') {
        this.container = container;
        this.products = [];
        this.productsAll = [];
        this._init();
    }

    _init() {
        this._fetchProducts()
            //.then(() => this._render())
            .then(() => console.log(this._calcSum()));

        this._render();

    }

    // Продукты, представленные в магазине

    _fetchProducts() {
        // return fetch(`${API}/catalogData.json`)
        //     .then(result => result.json())
        //     .then(data => {
        //         this.products = [...data];
        //         this._render();
        //     })

        // задание №1 Сделать через promise
        return this.makeGETRequest(`${API}catalogData.json`)
            .then(data => {
                this.products = data;
                this._render()

            })
            .catch(error => {
                console.log(error);
            });
    }

    makeGETRequest(url) {
        let xhr = new XMLHttpRequest();

        return new Promise((resolve, reject) => {
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                // 0 - запрос не инициализирован
                //     // 1 - загрузка данных
                //     // 2 - запрос принят сервером
                //     // 3 - идет обмен данными
                //     // 4 - запрос выполнен
                if (xhr.readyState !== 4) return;
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("ERROR");
                }
            };
            xhr.send();
        });

    }


    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
            prodObj.click();
        }
    }

    _calcSum() {
        let result = 0;
        this.products.forEach(el => {
            result += el.price;
        });
        return result;
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/180x180') {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="col-sm-3">
                    <div class="card">
                        <img src=${this.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.product_name}</h5>
                            <p class="card-text">$${this.price}</p>
                            <button type="button" class="btn btn-outline-danger" id="${this.id_product}">Купить</button>
                        </div>
                    </div>
                </div>`
    }

    click() {
        document.getElementById(this.id_product).addEventListener('click', () => {
            carts.add(this.id_product);
            console.log(carts);

        })
    }
}

const products = new ProductsList();

// Создаем класс cart;
class CartList {
    constructor(container = '.forCart') {
        this.container = container;
        this.cart = {};
        this.cartAll = [];
        this._init();
    }

    _init() {
        this._fetchCart();
        //this._render();
        //this._renderFinal();
    }

    _fetchCart() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                this.cart = {...data};
                this._render();
            })
    }

    _render() {
        //const block = document.querySelector(this.container);
        let string = '';
        if (this.cart.contents) {
            this.cart.contents.forEach(el => {
                const prodObj = new CartItem(el);
                this.cartAll.push(prodObj);
                string += prodObj.render()
            });
        }


        // for (let item of [...this.cart.contents]) {
        //     const prodObj = new CartItem(item);
        //     this.cartAll.push(prodObj);
        //     string += prodObj.render()
        //
        // }
        return string;
    }
    renderAll() {
        const block = document.querySelector(this.container);
        block.innerHTML = this._render();
    }
    add(item) {
        let obj = {};
        if (!this.cart.contents) {
            [...products.products].forEach(pos => {
                const prodObj = new CartItem(item, pos.product_name, pos.price, pos.id_product, 1);
                [...this.cart.contents].push(prodObj)
            })

        } else if (!this.cart.contents.find(el => el.id_product === item)) {
            [...products.products].forEach(pos => {
                if (item === pos.id_product) {
                    const prodObj = new CartItem(item, pos.product_name, pos.price, pos.id_product, 1);
                    [...this.cart.contents].push(prodObj);

                }
            })
        } else {
        this.cart.contents.forEach(el => {
            if (el.id_product === item) {
                el.quantity += 1;
            }
        });
        }



        // forEach(el => {
        //     if (el.id_product === item) {
        //         return ++el.quantity;
        //
        //     }
        //     else if (el.id_product !== item) {
        //         const prodObj = new CartItem(item, item.product_name, item.price, item.id_product, 1);
        //         this.cart.contents.push(prodObj);
        //     }
        //
        // })
    }

    removeAll() {
        this.cart = {};
        this.cartAll = [];
        this.renderAll();
    }

    _renderFinal() {
        document.querySelector('.allPrice').innerHTML = this.cart.price;
        document.querySelector('.countGoods').innerHTML = this.cart.quantity;
    }
}
class CartItem {
    constructor(item, x = item.product_name, y = item.price, z = item.id_product, w= item.quantity) {
        this.product_name = x;
        this.price = y;
        this.id_product = z;
        this.quantity = w;
    }

    render() {
        return `<div class="row del">
                  <div class="col-md-4">${this.product_name}</div>
                  <div class="col-md-4">${this.quantity}</div>
                  <div class="col-md-4">${this.price}</div>
                 </div>`
    }
}
let carts = new CartList();

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