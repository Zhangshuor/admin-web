<script setup lang="ts">
import {type Component, ref, watch} from "vue";
import S_component from "@/components/common/s_component.vue";
import {collapsed} from "@/components/admin/s_menu.ts";
import router from "@/router";
import {useRoute} from "vue-router";

interface MenuType {
  title: string,
  name: string,
  icon?: string | Component,
  children?: MenuType[]
}

const route = useRoute()

const menuList: MenuType[] = [
  {
    title: '首页',
    name: 'home',
    icon: "iconfont icon-shouye",
  },
  {
    title: '个人中心',
    name: 'userCenter',
    icon: "iconfont icon-user",
    children: [
      {
        title: '个人信息',
        name: 'userInfo',
        icon: "iconfont icon-yonghuxinxi-"
      },
    ]
  },
  {
    title: '用户管理',
    name: 'userManage',
    icon: "iconfont icon-yonghuguanli",      // 使用 icon-yonghuguanli
    children: [
      {
        title: '用户列表',
        name: 'userList',
        icon: "iconfont icon-yonghuliebiao"   // 使用 icon-yonghuliebiao
      },
    ]
  },
  {
    title: '系统设置',
    name: 'settingsManage',
    icon: "iconfont icon-xitongshezhi",      // 使用 icon-xitongshezhi
    children: [
      {
        title: '系统信息',
        name: 'settings',
        icon: "iconfont icon-xitongxinxi"     // 使用 icon-xitongxinxi
      },
    ]
  },
]
const openKeys = ref<String[]>([])
const selectKeys = ref([route.name])

function initRoute() {
  if (route.matched.length === 3) {
    openKeys.value = [route.matched[1].name as string]
  }
  selectKeys.value = [route.name as string]
}

watch(() => route.name, () => {
  initRoute()
}, {immediate: true})


function menuItemClick(key: string) {
  router.push({name: key})
}
</script>

<template>
  <div class="s_menu" :class="{collapsed:collapsed}">
    <div class="s_menu_inner scrollbar">
      <a-menu
          @menu-item-click="menuItemClick"
          v-model:collapsed="collapsed"
          v-model:open-keys="openKeys"
          v-model:selected-keys="selectKeys"
          :default-selected-keys="[route.name]"
          show-collapse-button>
        <!--template只逻辑循环，不物理占位-->
        <template v-for="menu in menuList" :key="menu.name">

          <a-menu-item v-if="!menu.children" :key="menu.name">
            <template #icon>
              <s_component :is="menu.icon"></s_component>
            </template>
            {{ menu.title }}
          </a-menu-item>

          <a-sub-menu v-else :key="menu.name">
            <template #icon>
              <s_component :is="menu.icon"></s_component>
            </template>
            <template #title>{{ menu.title }}</template>
            <a-menu-item v-for="sub in menu.children" :key="sub.name">
              <template #icon>
                <s_component :is="sub.icon"></s_component>
              </template>
              {{ sub.title }}
            </a-menu-item>
          </a-sub-menu>

        </template>
      </a-menu>
    </div>
  </div>
</template>

<style lang="less">
.s_menu {
  height: calc(100vh - 90px);
  position: relative;

  &.collapsed {
    .arco-menu-collapse-button {
      left: 48px !important;
    }
  }

  &:hover {
    .arco-menu-collapse-button {
      opacity: 1 !important;
    }
  }

  .s_menu_inner {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    .arco-menu {
      position: inherit;
      height: 100%;

      .arco-menu-collapse-button {
        top: 50%;
        transform: translate(-50%, -50%);
        left: 240px;
        transition: all .3s;
        opacity: 0;
      }
    }
  }
}
</style>