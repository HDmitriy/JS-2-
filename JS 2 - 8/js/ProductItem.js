export const ProductItem = {
    props: ['product'],
    template: `
  
                        <figure>
						<a href="single-page.html" > <img class="cart-img" :src="product.img_path" alt="Layer_2"></a>
						
						<figcaption>
							<p class="shirt">{{product.product_name}}</p>
							<p class="price">$ {{product.price}}</p>
							<button class="add-button" @click="$root.$refs.cart.addProduct(product)"> <img src="img/Forma_1.1.svg" alt="forma-1"> Add to cart</button>
						</figcaption>	
                        </figure>	
		
          
               
    
    `
};