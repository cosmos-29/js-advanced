Vue.component('products', {
    props: ['quantity'],
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
            showProduct: true,
            count: 0
        }
    },
    methods: {
        filter(word) {
            let regexp = new RegExp(word, 'i');
            this.filtered = this.products.filter(good => regexp.test(good.product_name));
        },
        counter(i) {
            return this.count = i + 1;
        }

    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    el.show = this.showProduct;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: ` <div class="itemsIcons">
                        <product v-for="(product, index) of filtered"
                        :key="product.id_product"                        
                        :product="product" 
                        :index ="index"  
                        v-if="index< quantity"                                          
                        ></product>
                </div> `
});
Vue.component('product', {
    props: ['product'],
    template: `<div class="fItems">
                    <div class="fItem8 forAdaptive">
                        <img :src="product.picture" alt="Some picture">
                        <div class="background">
                            <button><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                    </div>
                    <div class="sign">
                        <h2>{{product.product_name}}</h2>
                        <p>\${{product.price}}</p>
                    </div>
                </div>
            </div>`
});