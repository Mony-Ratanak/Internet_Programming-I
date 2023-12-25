<template>

    <div class="overall_container">
      <div class="productview_container">
        <div class="letter_container">
            <div class="title">Cake & Milk</div>
            <div class="desc">Home <i class="uil uil-angle-right-b"></i> Categories <i class="uil uil-angle-right-b"></i> Cake & Milk</div>
        </div>

        <img src='../assets/img/category_image1.png' class="img_background_left"/>
        <img src='../assets/img/category_image1.png' class="img_background_right"/>
      </div>
    </div>
  
  </template>
    
  <script>
  import { useTodoStore } from '../store/todo'
  import Categories from '../components/Category.vue'
  import Promotions from '../components/Promotion.vue'
  import Product from '../components/Product.vue'
  import Menu from '../components/Menu.vue'
  import Menuitem from '../components/menuitem.vue'
  import Searchbox from '../components/SearchBox.vue'
  import Header from '../components/Header.vue'
  import SubHeader from '../components/SubHeader.vue'
  import Subscribe from '../components/Subscribe.vue'
  
  export default {
    name: "HomeView",
    components: {
      Categories,
      Promotions,
      Product,
      Menu,
      Menuitem,
      Searchbox,
      Header,
      SubHeader,
      Subscribe,
    },
    setup() {
      const todo = useTodoStore();
      return { todo };
    },
  };
  </script>
  
  <style>
  @import "https://unicons.iconscout.com/release/v4.0.8/css/line.css";
  @import url('https://fonts.googleapis.com/css2?family=Knewave&family=Montserrat:wght@400;700&family=Quicksand:wght@600&family=Silkscreen:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Knewave&family=Lato&family=Montserrat:wght@400;700&family=Quicksand:wght@600&family=Silkscreen:wght@400;700&display=swap');
  
  .overall_container{
    width: 1420px;
    height: 202vh;
    display: flex;
    background-color: white;
    margin-top: 30px;
    margin-left: -100px;
  

  }
  
  .productview_container{
    width: 2000px;
    height: 235px;
    background-color: rgba(59, 183, 126, 0.2);
    position: relative;
    border-radius: 30px;
    overflow: hidden;
}

.letter_container{
    display: flex;
    height: 235px;
    flex-direction: column;
    position: relative;
    gap: 30px;
    z-index: 2;
    left: 8vh;
    justify-content: center;
}

.title{
    width: 727px;
    font-family: quicksand;
    font-size: 48px;
    font-weight: 700;
    color: rgba(37, 61, 78, 1);
}

.desc{
    width: 727px;
    font-family: Lato;
    font-size: 18px;
    font-weight: 400;
    color: rgba(126, 126, 126, 1);
    display: flex;
    align-items: center;
    gap: 10px;
}

.img_background_left{
    position: absolute;
    top: 0 ;
    left: -40px;
    z-index: 1;
}

.img_background_right{
    position: absolute;
    top: 0 ;
    right: -160px;
    z-index: 1;
}
  
  </style>