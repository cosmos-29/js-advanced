Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            showProduct: true,
        }
    },
    methods: {
        filter(word) {
            let regexp = new RegExp(word, 'i');
            this.filtered = this.products.filter(good => regexp.test(good.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.show = this.showProduct;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    el.show = this.showProduct;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
            .catch( error => this.$parent.error = error);
    },
    template: `<div class="row products">    
                    <product 
                    v-for="product of filtered" 
                    :key="product.id_product"
                    :img="imgCatalog"
                    :product="product"></product>            
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="col-sm-3">
                    <div class="card product-item" data-id="${this.id_product}">
                        <img :src="img" alt="Some img" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{product.product_name}}</h5>
                            <p class="card-text">{{product.price}}$</p>
                            <button @click="$root.$refs.cart.addProductsToCart(product)" type="button" class="btn btn-outline-danger buy-btn">Купить</button>
                        </div>
                    </div>
                </div>`
});