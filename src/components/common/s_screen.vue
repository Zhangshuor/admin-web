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
</script>

<template>
  <span title="全屏" v-if="!isFullScreen"><icon-fullscreen @click="fullScreen"/></span>
  <span title="退出全屏" v-else><icon-fullscreen-exit @click="exitFullScreen"/></span>
</template>

<style scoped>

</style>