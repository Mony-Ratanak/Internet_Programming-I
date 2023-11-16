<template>
    <div class="wrapper">
      <div class="discount" :style="{background: tagBg,}">{{ tag }}</div>  
      <img :src="image" class="_img" alt="" /> 
      <div class="detail">
        <div class="_p">Hodo Foods</div>
        <div class="_title">
          {{ name }}
        </div>
        <div class="star">
          <span v-for="i in 5">
            <img src="../assets/star-yellow.svg" alt="" v-if="i<=rate"/>
            <img src="../assets/star-white.svg" alt="" v-else/>
          </span>
          <span class="rate">({{ rate }})</span> 
        </div>
        <div class="_gram">{{description}}</div> 
        <div class="_price">
          <div class="price_dis">
            <span class="no_del">${{sellPrice}}</span>   
            <del class="del">${{discountPrice}}</del>
          </div>
          <div class="amount" @click="increaseNum()" v-if="button==true">
            <!-- <AddButton /> -->
            <ButtonAdd />
          </div>
          <div class="amount" @click="decreaseNum()" v-else><AddButton /></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AddButton from "./AddButton.vue";
  import ButtonAdd from "./ButtonAdd.vue";
  export default {
    name: "Product",
    components: {
      AddButton,
      ButtonAdd,
    },
    methods: {
      increaseNum(){
        this.button = false;
      },
      decreaseNum(){
        let n = document.getElementById("input_amout");
        if(n.value == 0){
          this.button = true;
        }
      }
    },
    props: {
      tag: String,
      tagBg: String,
      image: String,
      name: String,
      rate: Number,
      description: String,
      sellPrice: String,
      discountPrice: String,
    },
    data() {
      return {
        button : true,
  
      };
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Quicksand:wght@500&display=swap");
  .star img {
    margin-right: 5px;
  }
  .price_dis {
    color: var(--NestMart-Brand-1, #3bb77e);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
  }
  ._gram {
    color: var(--NestMart-TextBody, #7e7e7e);
    font-family: Lato;
    font-size: 12px;
  }
  .del {
    color: var(--NestMart-TextBody, #7e7e7e);
    font-family: Quicksand;
    font-size: 12px;
    margin-left: 5px;
  }
  .star {
    font-family: Lato;
    font-size: 14px;
  }
  .detail > div {
    margin-top: 3px;
  }
  ._title {
    color: var(--NestMart-TextHeading, #253d4e);
  
    /* NestMart / Heading sm */
    font-family: Quicksand;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
  }
  .wrapper {
    width: 250px;
    height: 380px;
    border-radius: 10px;
    border: 1px solid #bce3c9;
    background: #fff;
    position: relative;
  }
  .wrapper:hover{
    transform: scale(97%);
  }
  .discount {
    width: 50px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 0;
    top: 20px;
    border-radius: 0px 20px 20px 0px;
    color: #fff;
  
    font-family: Lato;
    font-size: 12px;
  }
  ._img {
    position: absolute;
    width: 180px;
    top: 60px;
    left: 50%;
    translate: -50% 0;
    mix-blend-mode: multiply;
  }
  .detail {
    width: 200px;
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    padding-bottom: 20px;
  }
  ._price {
    width: 200px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ._p {
    color: var(--NestMart-TextBody, #7e7e7e);
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  </style>
  