<script setup lang="ts">
import {IconSunFill, IconMoonFill} from '@arco-design/web-vue/es/icon';
import {theme, setTheme, loadTheme} from "@/components/common/s_theme.ts"

loadTheme()
</script>

<template>
  <span title="亮色模式" v-if="theme === 'light'"><icon-sun-fill @click="setTheme('dark')"/></span>
  <span title="暗色模式" v-else><icon-moon-fill @click="setTheme('light')"/></span>
</template>