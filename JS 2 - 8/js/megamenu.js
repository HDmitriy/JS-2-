export const megamenu = {
    data() {
      return {
          showMenu: false,
          showMenu2: false,
          showMenu3: false,
          showMenu4: false,
          showMenu5: false,
          showMenu6: false,
          showMenu7: false


      }
    },
    methods: {

    },
  
    template: `
    <div class="nav-menu">
				<a href="index.html" class="menu-link" @mouseover="showMenu = true" @mouseover="showMenu2 = false" @mouseover="showMenu3 = false" @mouseover="showMenu4 = false" @mouseover="showMenu5 = false" @mouseover="showMenu6 = false" @mouseover="showMenu7 = false">HOME</a>

                <div class="mega-menu-div" v-show="showMenu" @mouseleave="showMenu = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                    
                </div>
        
            </div>



				<a href="Product.html" class="menu-link" @mouseover="showMenu = false" @mouseover="showMenu2 = true" @mouseover="showMenu3 = false" @mouseover="showMenu4 = false" @mouseover="showMenu5 = false" @mouseover="showMenu6 = false" @mouseover="showMenu7 = false">MAN</a> 

                <div class="mega-menu-div mega-menu-div-man" v-show="showMenu2" @mouseleave="showMenu2 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>
                
				<a href="#" class="menu-link" @mouseover="showMenu3 = true" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu4 = false" @mouseover="showMenu5 = false" @mouseover="showMenu6 = false" @mouseover="showMenu7 = false">WOMENY</a> 
                <div class="mega-menu-div mega-menu-div-women" v-show="showMenu3" @mouseleave="showMenu3 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>

				<a href="#" class="menu-link" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu4 = true" @mouseover="showMenu5 = false" @mouseover="showMenu6 = false" @mouseover="showMenu7 = false">KIDS</a> 
                <div class="mega-menu-div mega-menu-div-kids" v-show="showMenu4" @mouseleave="showMenu4 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                   <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>

                
				<a href="#" class="menu-link" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu4 = false" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu5 = true" @mouseover="showMenu6 = false" @mouseover="showMenu7 = false">ACCOSERIESE</a>

                <div class="mega-menu-div mega-menu-div-acc" v-show="showMenu5" @mouseleave="showMenu5 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>

				<a href="#" class="menu-link" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu4 = false" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu5 = false" @mouseover="showMenu6 = true" @mouseover="showMenu7 = false">FEATURED</a>

                <div class="mega-menu-div mega-menu-div-fet" v-show="showMenu6" @mouseleave="showMenu6 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>

				<a href="#" class="menu-link" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu4 = false" @mouseover="showMenu3 = flase" @mouseover="showMenu2 = false" @mouseover="showMenu = false" @mouseover="showMenu5 = false" @mouseover="showMenu6 = false" @mouseover="showMenu7 = true">HOT DEALS</a>

                <div class="mega-menu-div mega-menu-div-hot" v-show="showMenu7" @mouseleave="showMenu7 = false">
       
                <div class="drop-mega drop-mega-margin">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <a href="#" class="fil-mega">Blazers</a>
                    <a href="#" class="fil-mega">Denim</a>
                    <a href="#" class="fil-mega">Leggings/Pants</a>
                    <a href="#" class="fil-mega">Skirts/Shorts</a>
                    <a href="#" class="fil-mega">Accessories</a>  
                </div>
                <div class="drop-mega drop-mega-margin2">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
        
                    <div class="mega_foot">
                        <h1 class="title-mega">Women</h1>
                        <a href="#" class="fil-mega fil-mega2 ">Dresses</a>
                        <a href="#" class="fil-mega">Tops</a>
                        <a href="#" class="fil-mega">Sweaters/Knits</a> 
                    </div>
                </div>
               
                <div class="drop-mega drop-mega-margin3">
                    <h1 class="title-mega">Women</h1>
                    <a href="#" class="fil-mega fil-mega2">Dresses</a>
                    <a href="#" class="fil-mega">Tops</a>
                    <a href="#" class="fil-mega">Sweaters/Knits</a>
                    <a href="#" class="fil-mega">Jackets/Coats</a>
                    <div class ="img-ban">
                        <p class="ban-text">Super sale! </p>
                    </div> 
                </div>
        
            </div>


			</div>
    `

};

