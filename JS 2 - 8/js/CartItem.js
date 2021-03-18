export const CartItem = {
    props: ['cartItem'],
    emits: ['remove'],

    template: `
        <div class="cart-item">
                        <div class="product-bio-cart">
                            <div class="product-desc-cart"> 
                            <div class="cart-border"> </div>
                         
                           
                            <a href="#"> <img class="cart-img" :src="cartItem.img_path" alt="Layer_low"></a>
                                <div class="cart-item-div"> 
                                    <p class="product-title-cart" > {{cartItem.product_name}}</p>
                                    <img src="img/1824.png" alt="stars">                             
                                    <p class="product-quantity-cart"> {{cartItem.quantity}} X $ {{cartItem.quantity*cartItem.price}}</p>
                                    <img src="img/__1827.png" alt="del-img" @click="$emit('remove', cartItem)">
                                </div>  
                               
                            </div>
                        </div>
                    </div>
    `
};