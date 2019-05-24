Vue.component('cart', {
    data(){
        return {
            cart: [],
            basketUrl: '/getBasket.json',
            imgCartItems: 'https://placehold.it/50x100',
            show: true,
        }
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
        addProductsToCart(product) {
            let find = this.cart.find(item => item.id_product === product.id_product);
            if(find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result) {
                            find.quantity++;
                        }
                    })
            } else {
                let itemObj = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`/api/cart/`, itemObj)
                    .then(data => {
                        if(data.result) {
                            this.cart.push(itemObj);
                        }
                    })
            }
        },
        removeProductFromCart(item) {
            if (item.quantity > 1) {
                this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                    .then(data => {
                        if(data.result) {
                            item.quantity--;
                        }
                    })
            } else {
                this.$parent.delJson(`/api/cart/${item.id_product}`, item);
                this.cart.splice(this.cart.indexOf(item), 1);
            }
            }


            // this.$parent.getJson(`${API}/deleteFromBasket.json`)
            //     .then(data => {
            //         if (data.result) {
            //                 if (item.quantity > 1) {
            //                     item.quantity--
            //                 } else this.cart.splice(this.cart.indexOf(item), 1);
            //
            //         }
            //     });


    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart.push(el)
                }
            })
        ;
    },
    template: `
            <div>
                <button  @click="show=!show" type="button" class="btn btn-outline-danger btn-cart"><i class="fas fa-cart-plus"></i>
                        </button>
                <div v-show="show" class="cart-block">                            
                   <cart-item 
                   v-for="item of cart" 
                   :key="item.id_product"
                   :cart-item="item"
                   :img="imgCartItems"
                   @remove="removeProductFromCart"></cart-item>
                   
                   <p>{{sumOfCart}}</p>
               </div>
            </div>`
});


Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="cart-item">
                  <div class="product-bio">
                      <img :src="img" alt="Some image">
                      <div class="product-desc">
                           <p class="product-title">{{cartItem.product_name}}</p>
                           <p class="product-quantity">{{cartItem.quantity}}</p>
                           <p class="product-single-price">{{cartItem.price}} $</p>
                      </div>
                  </div>
                  <div class="right-block">
                       <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                       <button @click="$emit('remove', cartItem)" class="btn btn-outline-danger del-btn">&times;</button>
                  </div>
               </div>`
});