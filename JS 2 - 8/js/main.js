import {accordion} from "./accordion.js";
import {dropdown} from "./dropdown.js";
import {megamenu} from "./megamenu.js";
import {Cart} from "./Cart.js";
import {Products} from "./Products.js";
import {allproducts} from "./AllProducts.js";
import {singleproduct} from "./singeProduct.js";
import {bigcart} from "./bigcart.js";


const App = {
    components: {
        accordion,
        dropdown,
        Cart,
        Products,
        megamenu,
        allproducts,
        singleproduct,
        bigcart
    },
    data() {
        return {
        }
    },
    provide() {
        return {
            getJson: this.getJson
        }
     },
  
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        },
    }
};


Vue.createApp(App).mount('#app');
