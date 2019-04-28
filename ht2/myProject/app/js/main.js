class ProductsList {
    constructor(container = '.row') {
        this.container = container;
        this.products = [];
        this.productsAll = [];
        this._init();
    }
    _init(){
        this._fetchProducts();
        this._render();
    }

    // Продукты, представленные в магазине

    _fetchProducts(){
        this.products = [
            {id: 1, title: 'mango people t-shirt', price: "$52"},
            {id: 2, title: 'mango people t-shirt', price: "$22"},
            {id: 3, title: 'mango people t-shirt', price: "$32"},
            {id: 4, title: 'mango people t-shirt', price: "$42"},
            {id: 5, title: 'mango people t-shirt', price: "$12"},
            {id: 6, title: 'mango people t-shirt', price: "$22"},
            {id: 7, title: 'mango people t-shirt', price: "$32"},
            {id: 8, title: 'mango people t-shirt', price: "$72"},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for(let product of this.products){
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/180x180'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="col-sm-3">
                    <div class="card">
                        <img src=${this.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.title }</h5>
                            <p class="card-text">${this.price}</p>
                            <button type="button" class="btn btn-outline-danger">Купить</button>
                        </div>
                    </div>
                </div>`
    }
}
const products = new ProductsList();
/*
class Cart {
    constructor(){

    }
    // Что метод делает
    some(){

    }
}

// запуск объектов корзины.
*/
