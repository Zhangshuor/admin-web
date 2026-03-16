<script setup lang="ts">

import S_theme from "@/components/common/s_theme.vue";
import {theme} from "@/components/common/s_theme.ts";
import S_screen from "@/components/common/s_screen.vue";
import S_menu from "@/components/admin/s_menu.vue";
</script>

<template>
  <div class="s_admin">
    <div class="s_aside">
      <div class="s_logo">

      </div>
      <s_menu></s_menu>
    </div>
    <div class="s_main">
      <div class="s_header">
        <div class="s_breadcrumbs">

        </div>
        <div class="s_actions">
          <icon-home/>
          <s_theme></s_theme>
          <s_screen></s_screen>
          <div class="s_user_info_action">

          </div>
        </div>
      </div>
      <div class="s_tabs">
        <div>{{ theme }}</div>
      </div>
      <div class="s_container">
        <RouterView></RouterView>
      </div>
    </div>

  </div>
</template>

<style lang="less">
.s_admin {
  display: flex; // 横向 左右结构
  background-color: var(--color-bg-1);//这个颜色可以变化（@color-bg-1 颜色是固定的）
  color: @color-text-1;

  .s_aside {
    width: 240px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: @s_border;

    .s_logo {
      width: 100%;
      height: 90px;
      border-bottom: @s_border;
    }
  }

  .s_main {
    width: calc(100% - 240px);

    .s_header {
      width: 100%;
      height: 60px;
      border-bottom: @s_border;
      display: flex;
      justify-content: space-between; //第一个子元素紧贴左侧。最后一个子元素紧贴右侧。剩余的子元素均匀分布在中间，空白间距完全相等。
      align-items: center;
      padding: 0 20px; // 内边距 垂直方向 0px 水平方向 20px
    }

    .s_tabs {
      width: 100%;
      height: 30px;
      border-bottom: @s_border;

    }

    .s_container {
      width: 100%;
      height: calc(100vh - 90px);
      overflow-y: auto;
      overflow-x: hidden;
      background-color: @color-fill-2;
    }
  }
}

</style>