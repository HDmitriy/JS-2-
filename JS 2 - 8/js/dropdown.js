export const dropdown = {
    data() {
      return {
          showDrop: false

      }
    },
    methods: {

    },
  
    template: ` 
    <a href="#" class="button1"   @click="showDrop = !showDrop">Browse <img src="img/__52.png" alt="52"> </a> 
    <div class="dropdown-div" v-show="showDrop">
        <h1 class="title-drop">Women</h1>
        <div class="cat-drop">
            <a href="#" class="fil-drop">Dresses</a>
            <a href="#" class="fil-drop">Tops</a>
            <a href="#" class="fil-drop">Sweaters/Knits</a>
            <a href="#" class="fil-drop">Jackets/Coats</a>
            <a href="#" class="fil-drop">Blazers</a>
            <a href="#" class="fil-drop">Denim</a>
            <a href="#" class="fil-drop">Leggings/Pants</a>
            <a href="#" class="fil-drop">Skirts/Shorts</a>
            <a href="#" class="fil-drop">Accessories</a>  
        </div>
        <h1 class="title-drop2">Men</h1>
        <div class="cat-drop-foot">
            <a href="#" class="fil-drop2">Tees/Tank tops</a>
            <a href="#" class="fil-drop2">Shirts/Polos</a>
            <a href="#" class="fil-drop2">Sweaters</a>
            <a href="#" class="fil-drop2">Sweatshirts/Hoodies</a>
            <a href="#" class="fil-drop2">Blazers</a>
            <a href="#" class="fil-drop2">Jackets/vests</a>
        </div>
    </div>

    `

};