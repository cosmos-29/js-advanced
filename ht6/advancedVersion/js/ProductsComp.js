Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="row products">    
                    <product 
                    v-for="product of products" 
                    :key="product.id_product"
                    :img="img"
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
                            <button @click="$parent.$emit('add-product', product)" type="button" class="btn btn-outline-danger buy-btn">Купить</button>
                        </div>
                    </div>
                </div>`
});