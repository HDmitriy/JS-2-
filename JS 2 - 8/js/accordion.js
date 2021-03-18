export const accordion = {
    data() {
      return {
          showAcc: false,
		  showAcc2: false,
		  showAcc3: false
      }
    },
    methods: {

    },
  
    template: `
	<div class="category-button-div5" >
	<a href="#" class="category-button1 back-but" @click="showAcc = !showAcc" v-bind:class="{ catbutactive: showAcc }">Category</a>		
							<div class="category-menu-div" v-show="showAcc">
								<ul class="category-menu clearfix">
									<li class="category-list"><a href="#" class="category-link">Accessories</a></li>
									<li class="category-list"><a href="#" class="category-link">Bags</a></li>
									<li class="category-list"><a href="#" class="category-link">Denim</a></li>
									<li class="category-list"><a href="#" class="category-link">Hoodies & Sweatshirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Jackets & Coats</a></li>
									<li class="category-list"><a href="#" class="category-link">Pants</a></li>
									<li class="category-list"><a href="#" class="category-link">Polos</a></li>
									<li class="category-list"><a href="#" class="category-link">Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Shoes</a></li>
									<li class="category-list"><a href="#" class="category-link">Shorts</a></li>
									<li class="category-list"><a href="#" class="category-link">Sweaters & Knits</a></li>
									<li class="category-list"><a href="#" class="category-link">T-Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Tanks</a></li>	
								</ul>
							</div>	
						</div>	

					<div class="category-button-div5 category-button-div2" >
						<a href="#" class="category-button1 category-button2" @click="showAcc2 = !showAcc2" v-bind:class="{ catbutactive: showAcc2 }">BRAND</a>
						<div class="category-menu-div" v-show="showAcc2">
								<ul class="category-menu clearfix">
									<li class="category-list"><a href="#" class="category-link">Accessories</a></li>
									<li class="category-list"><a href="#" class="category-link">Bags</a></li>
									<li class="category-list"><a href="#" class="category-link">Denim</a></li>
									<li class="category-list"><a href="#" class="category-link">Hoodies & Sweatshirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Jackets & Coats</a></li>
									<li class="category-list"><a href="#" class="category-link">Pants</a></li>
									<li class="category-list"><a href="#" class="category-link">Polos</a></li>
									<li class="category-list"><a href="#" class="category-link">Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Shoes</a></li>
									<li class="category-list"><a href="#" class="category-link">Shorts</a></li>
									<li class="category-list"><a href="#" class="category-link">Sweaters & Knits</a></li>
									<li class="category-list"><a href="#" class="category-link">T-Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Tanks</a></li>	
								</ul>
						</div>	
					</div>					
						
					<div class="category-button-div5 category-button-div3">
								<a href="#" class="category-button1 category-button2" @click="showAcc3 = !showAcc3" v-bind:class="{ catbutactive: showAcc3 }">DESIGNER</a>
								<div class="category-menu-div" v-show="showAcc3">
								<ul class="category-menu clearfix">
									<li class="category-list"><a href="#" class="category-link">Accessories</a></li>
									<li class="category-list"><a href="#" class="category-link">Bags</a></li>
									<li class="category-list"><a href="#" class="category-link">Denim</a></li>
									<li class="category-list"><a href="#" class="category-link">Hoodies & Sweatshirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Jackets & Coats</a></li>
									<li class="category-list"><a href="#" class="category-link">Pants</a></li>
									<li class="category-list"><a href="#" class="category-link">Polos</a></li>
									<li class="category-list"><a href="#" class="category-link">Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Shoes</a></li>
									<li class="category-list"><a href="#" class="category-link">Shorts</a></li>
									<li class="category-list"><a href="#" class="category-link">Sweaters & Knits</a></li>
									<li class="category-list"><a href="#" class="category-link">T-Shirts</a></li>
									<li class="category-list"><a href="#" class="category-link">Tanks</a></li>	
								</ul>
						</div>	
					</div>	
						
						
						`
};