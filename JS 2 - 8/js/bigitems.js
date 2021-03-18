export const bigitems = {
    props: ['bigitems'],
    emits: ['remove', 'calc'],
    data() {
        return {
            quantity: 1,
            count: 1,
            symbol: '+',
        }
    },
    methods: {
        inputValue(value) {
            if (this.count > value) {
                this.symbol = '-';
            } else {
                this.symbol = '+';
            }
            this.count = value; 
        }
    },

    template: `    
                             
        <div class="product-detail grid-index"><a href="#">  <a href="#"> <img class="cart-img" :src="bigitems.img_path" alt="grid-img"></a>
        <div class="grid-text">
            <p class="grid-item">{{ bigitems.product_name }} </p> 
            <p class="char-grid char-color">Color:</p><p class="char-grid char-size">Size:</p></div>
        </div>  
        <div class="product-detail grid-price">$ {{ bigitems.price }} </div>
        <div class="product-detail grid-input">
            <input @change="inputValue(quantity), $emit('calc', bigitems.price, symbol)" type="number" min="1" v-model="quantity" onkeypress="return false" id="grid-quantity">
        </div> 
        <div class="product-detail grid-shipping">FREE</div>
        <div class="product-detail grid-price">$ {{quantity*bigitems.price}}</div>
        <div class="product-detail grid-img"><a href="#" @click="$emit('remove', bigitems)"> <img src="img/__2890.png" alt="grid-img"></a></div>
    `
};