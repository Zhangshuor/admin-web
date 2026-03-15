<script setup lang="ts">
import {IconFullscreen, IconFullscreenExit} from '@arco-design/web-vue/es/icon';
import {ref} from "vue";


const isFullScreen = ref(false)

// 全屏
function fullScreen() {
  isFullScreen.value = true
  document.documentElement?.requestFullscreen()
}

// 退出全屏
function exitFullScreen() {
  document?.exitFullscreen()
  isFullScreen.value = false
}

// 是否是全屏


</script>

<template>
  <icon-fullscreen title="全屏" v-if="!isFullScreen" @click="fullScreen"/>
  <icon-fullscreen-exit title="退出全屏" v-else @click="exitFullScreen"/>
</template>

<style scoped>

</style>