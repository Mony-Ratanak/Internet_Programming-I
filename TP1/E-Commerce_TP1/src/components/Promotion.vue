<template>
    <div class="promo" :style="{
        backgroundColor: pro_bg,
    }">
        <div class="quote">
            <div class="text">{{text}}</div>
        </div>
        <div class="image">
            <img :src=img
                alt="">
        </div>
        <Button :text="textBtn" :Bgcolor="btn" class="button"></Button>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "Promotion",
    props: {
        text: String,
        img: String, 
        textBtn: String,
        btn: String,
        pro_bg: String
    },
    components: {
        Button,
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.promo {
    margin: 20px 20px 0 0;
    width: 550.8px;
    height: 300px;
    position: relative;
    border-radius: 10px; 
    flex-grow: 1;
    flex-basis: 10%;
}
.image {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 250px;
    height: 250px;
    right: 0px;
    bottom: 0px;
}
img{
    mix-blend-mode: teal;
    object-fit: cover;
    height: 250px;
    /* width: 350px; */
}
.quote {
    position: absolute;
    width: calc(512px-200px);
    position: relative;
    margin-top: 50px;
}
.text {
    position: absolute;
    top: 75px;
    left: 48px;
    width: 271px;
    color: var(--NestMart-TextHeading, #253D4E);
    font-family: Quicksand;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.01px;
    z-index: 10;
    margin-top: -25px;
}
.button{
    position: absolute;
    left: 48px;
    bottom: 75px
}
</style>