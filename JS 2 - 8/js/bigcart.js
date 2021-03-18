import {bigitems} from "./bigitems.js";
export const bigcart = {
    inject: ['getJson'],
    components: {bigitems},
    data() {
      return {
        summ: 0,
        bigitems: [],
      }
    },
    methods: {

        calc(price, symbol) {
            this.countPrice(price, symbol);
        },

        clearCart(product) {
            this.bigitems.splice(this.bigitems.product)
            this.summ = 0;
        },
        addProduct(product) {
            let find = this.bigitems.find(el => el.id_product === product.id_product);
            if(find){
                find.quantity++
            } 
            this.countPrice(product.price, '+');
        },
        remove(product){
            if(product.quantity > 1){
                product.quantity--
            } else {
                this.bigitems.splice(this.bigitems.indexOf(product), 1)
            }
            this.countPrice(product.price, '-');
        },
        countPrice(price, symbol) {
                this.summ = eval(this.summ + symbol + price);
        }
    },
    mounted() {
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    if (el.incart) {
                        this.bigitems.push(el);
                        this.bigitems = this.bigitems.slice(0, 3);
                        this.summ = el.price + this.summ;
                    }
                }
            });
    },
    template: `

    
    <div class="grid-wrap container">
    <p class="empty-big-cart" v-if="!bigitems.length">Cart is empty</p>
                    <div class="product-detail grid-title2"> <p class="grid-p">Product Details</p></div>
                    <div class="product-detail grid-title"><p class="grid-p">unite Price</p></div>
                    <div class="product-detail grid-title"><p class="grid-p">Quantity</p></div>
                    <div class="product-detail grid-title"><p class="grid-p">shipping</p></div>
                    <div class="product-detail grid-title"><p class="grid-p">Subtotal</p></div>
                    <div class="product-detail grid-title"> <p class="grid-p">ACTION</p></div>
                 

          
    <bigitems   
        v-for="item of bigitems" 
        :key="item.id_product"
        :bigitems="item"
        @remove="remove"
        @calc="calc"
    ></bigitems>
   
    
       
                   
  
        <div class="table-btns">
                    <form action="#" id="table-form">
                        <button type="submit" id="btn-bucket" @click ="clearCart">cLEAR SHOPPING CART</button>
                        <button type="submit" id="btn-bucket">cONTINUE sHOPPING</button>
                    </form>
        </div>   
    

    </div>
    <div class="cart-adress container">
    <div class="adress-text">
        <h1 class="adress-title">Shipping Adress</h1>
        <h1 class="adress-title adress-title2">coupon discount</h1>
    </div>
    <div class="forms">
        <div class="forms-right">
            <input type="text" placeholder="Bangladesh" id="input-adress">
            <input type="text" placeholder="State" id="input-adress">
            <input type="text" placeholder="Postcode / Zip" id="input-adress">
            <button type="submit" id="adress-btn">get a quote</button>  
        </div>
        <div class="forms-left">
            <p class="adress-p">Enter your coupon code if you have one</p>
            <input type="text" placeholder="State" id="input-coupon">
            <button type="submit" id="coupon-btn">Apply coupon</button>  
        </div>
        <div class="chekout">
            <div class="checkout-wrap">
                <p class="sub-total">Sub total </p>
            <p class="grand-total">GRAND TOTAL <span class ="summ">$ {{ summ }}</span></p>
            <div class="border"></div>
            <button type="submit" id="proceed-btn">proceed to checkout</button>  
            </div>
            
        </div>

    </div>

</div>
    `
};