const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
//Инициализируем вью
const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl: '/getBasket.json',
        addToBasketUrl: '/addToBasket.json',
        products: [],
        cart: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCartItems: 'https://placehold.it/50x100',
        show: true,
        showProduct: true,
        name: '',
        filtered: [],
    },
    computed: {
        sumOfCart() {
            let accum = 0;
            this.cart.forEach(el => {
                accum += el.price * el.quantity;
            });
            if (this.cart.length) {
                return `Общая стоимость корзины ${accum}`;
            } else return `В корзине пусто`;
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProductsToCart(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result) {

                        // itemObj.id_product = product.id_product;
                        // itemObj.product_name = product.product_name;
                        // itemObj.price = product.price;
                        // itemObj.quantity = 1;
                        let find = this.cart.find(item => item.id_product === product.id_product);
                        if (find) {
                            find.quantity++
                        } else {
                            let itemObj = Object.assign({quantity: 1}, product);
                            this.cart.push(itemObj);
                        }
                    }})
        },
        removeProductFromCart(item) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cart.find(product => product.id_product === item.id_product);
                        if (find) {
                            if (find.quantity > 1) {
                                find.quantity--
                            } else this.cart.splice(this.cart.indexOf(find), 1);
                        }
                    }
                })
        },
        filter(word) {
            this.filtered = Object.assign(this.products);
            //if (word.length) {}
            const regexp = new RegExp(word, 'i');
            this.filtered = this.products.filter(good => regexp.test(good.product_name));
            this.products.forEach(el => {
                el.show = this.filtered.includes(el);
            })
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.show = this.showProduct;
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    el.show = this.showProduct;
                    this.products.push(el)
                }
            });
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el)
                }
            });
    }
});