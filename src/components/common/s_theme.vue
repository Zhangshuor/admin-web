<script setup lang="ts">
import {IconSunFill, IconMoonFill} from '@arco-design/web-vue/es/icon';
import {theme, setTheme, loadTheme} from "@/components/common/s_theme.ts"

loadTheme()
</script>

<template>
  <icon-sun-fill v-if="theme === 'light'" @click="setTheme('dark')"/>
  <icon-moon-fill v-else @click="setTheme('light')"/>
</template>