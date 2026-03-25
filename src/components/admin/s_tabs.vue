<script setup lang="ts">

import {useRoute} from "vue-router";
import router from "@/router";
import {ref} from "vue";

const route = useRoute()

interface TabType {
  name: string,
  title: string
}

const tabs = ref<TabType[]>([
  {title: "首页", name: "home"},
  {title: "个人信息", name: "userInfo"},
  {title: "用户列表", name: "userList"},
  {title: "系统信息", name: "settings"}
])

function check(item: TabType) {
  router.push({name: item.name})
}

function removeItem(item: TabType) {
  const index = tabs.value.findIndex((value) => item.name === value.name)
  if (index != -1) {
    // 判断我删除的元素 是不是就是我 当前所在的
    if (item.name == route.name) {
      router.push({name: tabs.value[index - 1].name})
    }
    tabs.value.splice(index, 1)
  }
}

function removeAllItem() {
  const homeTab = tabs.value.find((tab) => tab.name === 'home')
  tabs.value = homeTab ? [homeTab] : [{title: '首页', name: 'home'}]
  router.push({name: 'home'})
}
</script>

<template>
  <div class="s_tabs">
    <div class="swiper">
      <div class="item " @click="check(item)" @mousedown.middle="removeItem(item)"
           :class="{active:route.name===item.name}" v-for="item in tabs">
        {{ item.title }}
        <span class="close" @click.stop="removeItem(item)" title="删除" v-if="item.name!='home'">
        <IconClose></IconClose>
      </span>
      </div>
    </div>
    <div class="item" @click="removeAllItem">
      删除全部
    </div>
  </div>
</template>

<style lang="less">
.s_tabs {
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  .swiper {
    display: flex;
  }

  .item {
    padding: 3px 8px;
    background-color: var(--color-bg-1);
    border: @s_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;

    &:hover { //&: 后面跟的是伪类（如 :hover、:focus、:first-child），用于描述元素的状态或位置。
      background-color: var(--color-fill-1);
    }

    &.active { //&. 后面跟的是类选择器（如 .active、.selected），用于给元素附加一个额外的类名条件，表示元素同时具备这两个类。
      background-color: @primary-6;
      color: white;
    }
  }
}
</style>