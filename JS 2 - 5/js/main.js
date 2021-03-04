

const App = {
    data() {
        return {
            API: `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`,                  
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            FilterItem: '',
            visibleCart: false, 
            cartItems: [],
            imgCart: 'https://placehold.it/50x100',

        }
    },
    computed: {
        filtered() {
            return this.products.filter(el => new RegExp(this.FilterItem, 'i').test(el.product_name));
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
        },
        addProduct(product){
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++

                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }       
        },
        remove(product){                      
                this.cartItems.splice(this.cartItems.indexOf(product), 1);              
        }
    },
    mounted(){
      
        this.getJson(`${this.API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
       
    }
};

Vue.createApp(App).mount('#app');

