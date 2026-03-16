<script setup lang="ts">
import type {Component} from "vue";

interface Props{
  is?:Component|string
}
const props = defineProps<Props>()


</script>

<template>
  <!--    这里去判断menu.icon传递的类型，如果是object类型，说明传递的是Ant Design中的图标        -->
  <component v-if="typeof props.is === 'object'" :is="props.is"></component>
  <!--    如果是字符串，则直接走i标签        -->
  <i :class="props.is" v-else></i>
</template>