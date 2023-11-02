<template>
    <div class="item" :style="{
        backgroundColor: bgColor,
        // color: color
    }">
        <div class="image">
            <img :src=Img alt=""></div>
        <div class="food">
            <div class="title">{{ Title }}
            </div>
            <div class="items">
                {{ Item }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Category",
    props: {
        Img: String,
        Title: String,
        Item: String,
        bgColor: String
    }
}
</script>
<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 126px;
    height: 177px;
    flex-shrink: 0;
    border-radius: 10px;
}
.title {
    color: var(--NestMart-TextHeading, #253D4E);
    text-align: center;
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.006px;

}
.items {
    color: var(--NestMart-Text-Muted, rgb(87, 81, 81));
    text-align: center;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
}

.image {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>