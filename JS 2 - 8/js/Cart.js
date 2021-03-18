import {CartItem} from "./CartItem.js";

export const Cart = {
    inject: ['getJson'],
    components: {
        CartItem
    },
    data() {
      return {
          showCart: false,
          summ: 0,
          cartItems: [],
      }
    },
    methods: {
        addProduct(product) {

                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                 
                        this.countPrice(product.price, '+');
        },
        remove(product){

                     
                     

                        if(product.quantity > 1){
                            product.quantity--

                            
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)

                        }
                        this.countPrice(product.price, '-');
        },
        countPrice(price, symbol) {
            this.summ = eval(this.summ + symbol + price);
        }
    },
    
    template: `
    <div class="bucket">
    
      <a href="#" class ="bucket-btn"> <img src="img/Forma_1.svg" alt="bucket" @click="showCart = !showCart"></a>
       <div class="cart-div" v-show="showCart">
       <p class="empty-cart" v-if="!cartItems.length">Cart is empty</p>
       
                    <CartItem 
                    
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :cartItem="item"
                    @remove="remove"
                    ></CartItem>
                    <p class="product-price-cart">TOTAL <p class="price-p-cart">$ {{summ}} </p> </p>
         <div class="cart-links">
        
           <a href="checkout.html" class ="cart-chekout-btn">Checkout</a>
           <a href="shopping-cart.html" class="go-btn">Go to cart</a> 
          </div>  
       </div>
    </div>
    `
};