<script setup lang="ts">
import type {Component} from "vue";
import {IconHome, IconUser, IconSettings} from "@arco-design/web-vue/es/icon";
import S_component from "@/components/common/s_component.vue";

interface MenuType {
  title: string,
  name: string,
  icon?: string | Component,
  children?: MenuType[]
}

const menuList: MenuType[] = [
  {
    title: '首页',
    name: 'admin',
    icon: IconHome,
  },
  {
    title: '个人中心',
    name: 'userCenter',
    icon: IconUser,
    children: [
      {
        title: '用户信息',
        name: 'userInfo',
      },
    ]
  },
  {
    title: '用户管理',
    name: 'userManage',
    icon: IconUser,
    children: [
      {
        title: '用户列表',
        name: 'userList',
      },
    ]
  },
  {
    title: '组件管理',
    name: 'componentManage',
    icon: "iconfont xxx",
    children: [
      {
        title: '组件列表',
        name: 'componentList',
      },
    ]
  },
  {
    title: '系统设置',
    name: 'settingsManage',
    icon: IconSettings,
    children: [
      {
        title: '系统信息',
        name: 'settingsInfo',
      },
    ]
  },
]
</script>

<template>
  <div class="s_menu scrollbar">
    <a-menu show-collapse-button>
      <!--template只逻辑循环，不物理占位-->
      <template v-for="menu in menuList" :key="menu.name">

        <a-menu-item v-if="!menu.children" :key="menu.name + '_item'">
          <template #icon>
            <s_component :is="menu.icon"></s_component>
          </template>
          {{ menu.title }}
        </a-menu-item>

        <a-sub-menu v-else :key="menu.name + '_sub'">
          <template #icon>
            <s_component :is="menu.icon"></s_component>
          </template>
          <template #title>{{ menu.title }}</template>
          <a-menu-item v-for="sub in menu.children" :key="sub.name">
            <template #icon>
              <s_component :is="menu.icon"></s_component>
            </template>
            {{ sub.title }}
          </a-menu-item>
        </a-sub-menu>

      </template>
    </a-menu>
  </div>
</template>

<style lang="less">
.s_menu{
  height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>