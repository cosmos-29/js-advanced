Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility', 'sum'],
    template: `<div v-show="visibility" class="cart-block">                            
                   <cart-item 
                   v-for="item of cartItems" 
                   :key="item.id_product"
                   :cart-item="item"
                   :img="img"></cart-item>
                   <p>{{sum}}</p>
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
                       <button @click="$parent.$emit('remove', cartItem)" class="btn btn-outline-danger del-btn">&times;</button>
                  </div>
               </div>`
});