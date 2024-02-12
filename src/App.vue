<template>
  <div class="container">
    <HeaderLayout/>
    <RouterView/>
  </div>
</template>

<script>
import { useTodoStore } from '../src/store/todo'
import {RouterLink, RouterView} from "vue-router";
import HeaderLayout from "../src/components/HeaderLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
  },
  setup() {
    const todo = useTodoStore();
    return { todo };
  },
};
</script>

<style scoped>
.container{
  width: 100%;
}
</style>

