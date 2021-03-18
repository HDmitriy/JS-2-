import {ProductItem} from "./ProductItem.js";


export const Products = {
    inject: ['getJson'],
    components: {
        ProductItem,
    },
    data() {
        return {

            products: [],
        }
    },

    mounted() {
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    
                    this.products.push(el);
                    this.products = this.products.slice(0, 8);
                   
                  
                }
             
            })
    },
    template: `
        <div class="products">
                <ProductItem 
                v-for="el of products" 
                :key="el.id_product"
                :product="el"
                >
                </ProductItem>
            </div>
    `
};