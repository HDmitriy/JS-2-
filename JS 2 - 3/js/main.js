// №1 

// let getRequest = url => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         // window.ActiveXObject -> new ActiveXObject();
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState !== 4) {
//                 return;
//             }
//
//             if (xhr.status !== 200) {
//                 reject('some error');
//                 return;
//             }
//
//             resolve(xhr.responseText);
//         }
//     });
// };
//
// getRequest('tel.json').then()

// --------------------------------------------------------------------------------------

class Item {
    product_name = '';
    price = 0;
    id_product = 0;
    img = '';
    

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ product_name: this.product_name, price: this.price, id_product: this.id_product } = product);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item" data-id="${this.id_product}">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn" data-id="${this.id_product}">Купить</button>
                 </div>
             </div>`
    }
}

class ProductItem extends Item {}

class CartItem extends Item {
    quantity = 0;

    constructor(product, img = 'https://placehold.it/50x100') {
        super(product, img);
        this.quantity = product.quantity;
    }

    changeItem(count) {
        this.quantity += count;
        const block = document.querySelector(`.cart-item[data-id="${this.id_product}"]`);
        block.querySelector(`.product-quantity`).textContent = `Quantity: ${this.quantity}`;
        block.querySelector(`.product-price`).textContent = `$${this.quantity*this.price}`;
    }

    deleteItem() {
        document.querySelector(`.cart-item[data-id="${this.id_product}"]`).remove();
    }

    render() {
        this.rendered = true;
        return `<div class="cart-item" data-id="${this.id_product}">
                <div class="product-bio">
                <img src="${this.img}" alt="image">
                <div class="product-desc">
                <p class="product-title">${this.product_name}</p>
                <p class="product-quantity">Quantity: ${this.quantity}</p>
                <p class="product-single-price">$${this.price} each</p>
                </div>
                </div>
                <div class="right-block">
                <p class="product-price">$${this.quantity*this.price}</p>
                <button class="del-btn" data-id="${this.id_product}">&times;</button>
                </div>
                </div>`
    }

  
}

class List {
    static items = {
        Products: ProductItem,
        Cart: CartItem
    };
    static API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

    products = [];
    container = null;
    url = '';

    constructor(selector, url) {
        this.container = document.querySelector(selector);
        this.url = url;
        this.init();
    }

    getJson(url) {
        return fetch(url ? url : `${List.API + this.url}`)
            .then(result => result.json())
    }

    handleData(data) {
        for (let item of data) {
            this.products.push(new List.items[this.constructor.name](item));
        }
        this.render();
    }

    getItem(id) {
        return this.products.find(el => el.id_product === id);
    }

   


    render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }

}


class Products extends List {
    cart = null;


    constructor(cart, container = '.products', url = "/catalogData.json") {
        super(container, url);
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data));
    }

  


    init() {
        this.container.addEventListener('click', e => {
            if (e.target.classList.contains('buy-btn')) {
                const id = +e.target.dataset['id'];
                this.cart.addProduct(this.getItem(id))
            }
        });

    }
}

class Cart extends List {
    constructor(container = '.cart-block', url = '/getBasket.json') {
        super(container, url);
        this.getJson()
            .then(data => this.handleData(data.contents));
    }

    addProduct(product) {
        this.getJson(`${List.API}/addToBasket.json`)
            .then(data => {
                if (data.result) {
                    let find = this.products.find(el => el.id_product === product.id_product);
                    if (find) {
                        find.changeItem(1);
                        return;
                    }

                    let prod = Object.assign({ quantity: 1 }, product);
                    this.handleData([prod]);
                } 
            })
    }

    deleteProduct(product) {
        this.getJson(`${List.API}/deleteFromBasket.json`)
            .then(data => {
                if (data.result) {
                    this.products.splice(this.products.indexOf(product), 1);
                    product.deleteItem();
                    }
 
            })
    }

    init() {
        this.container.addEventListener('click', e => {
            if (e.target.classList.contains('del-btn')) {
                const id = +e.target.dataset['id'];
                this.deleteProduct(this.getItem(id))
            }
        });

        document.querySelector(`.btn-cart`).addEventListener('click', () => {
            this.container.classList.toggle('invisible');
        })
    }
}

const cart = new Cart();
const list = new Products(cart);




