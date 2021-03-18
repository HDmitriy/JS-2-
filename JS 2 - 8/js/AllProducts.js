import {ProductItem} from "./ProductItem.js";


export const allproducts = {
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
                    if (el.inproduct) {
                        this.products.push(el);
                    
                    this.products = this.products.slice(0, 9);
                   
                }
                }
             
            })
    },
    template: `
        <div class="allproducts">
                <ProductItem 
                v-for="el of products" 
                :key="el.id_product"
                :product="el"
                >
                </ProductItem>
            </div>
    `
};