<script setup lang="ts">


import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <a-breadcrumb>
    <!--  v-for v-if的同时判断，需要引入template  -->
    <template v-for="r in route.matched">
      <a-breadcrumb-item v-if="r.name!=='home'">{{ r.meta?.title }}</a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<style scoped>

</style>