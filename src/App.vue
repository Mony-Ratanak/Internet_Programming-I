<template>
    <div class="wrap">
    <Menu feature="Featured Categories" :category="groups" class="menu"></Menu>
    <div class="container">
      <div style="display: flex; justify-content: space-between;margin-right: 25px;">
        <div v-for="i in category" class="_fruit">
          <FruitItem
            :bgColor="i.bg"
            :Img="i.img"
            :Title="i.title"
            :Item="i.item"
          ></FruitItem>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 20px;;">
        <div v-for="i in promotion">
          <Promotion
            :text="i.text"
            :img="i.img"
            :pro_bg="i.bg"
            :btn="i.btnColor"
            :textBtn="i.txtBtn"
          ></Promotion>
        </div>
      </div>
      <Menu feature="Featured Categories" :category="groups" style="margin-top: 30px;"></Menu>
    <div class="Product" style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-right: 25px;gap: 40px;">
      <div v-for="i in products">
          <Product
          :tag="i.tag"
          :tagBg="i.tagBg"
          :image="i.image"
          :name="i.name"
          :rate="i.rate"
          :description="i.description" 
          :sellPrice="i.sellPrice"
          :discountPrice="i.discountPrice"
        ></Product>
      </div>
    </div>
    </div>
    
  </div>
  </template>
  <script>
  import Button from "./components/Button.vue";
  import FruitItem from "./components/Category.vue";
  import Promotion from "./components/Promotion.vue";
  import Menu from "./components/Menu.vue";
  import { useTodoStore } from "./store/todo";
  import { mapState } from "pinia";
  import Product from "./components/Product.vue";
  export default {
  name: "App",
  components: {
    Button,
    FruitItem,
    Promotion,
    Image,
    Menu,
    Product
  },
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  computed: {
    ...mapState(useTodoStore, ["groups"]),
    ...mapState(useTodoStore, ["promotion"]),
    ...mapState(useTodoStore, ["category"]),
    ...mapState(useTodoStore, ["products"]),
  },
};
  </script>
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ._fruit {
    display: flex;
    justify-content: space-between;
  }
  .wrap {

    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -100px;
    margin-bottom: 30px;

  
  }
  .menu{
    margin-top: 20px;
  }
  .container {
    width: 100%;
  } 
  </style>
  