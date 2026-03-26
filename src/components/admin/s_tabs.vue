<script setup lang="ts">

import {useRoute} from "vue-router";
import router from "@/router";
import {onMounted, ref, watch} from "vue";
import { Swiper,SwiperSlide } from "swiper/vue";

const route = useRoute()

interface TabType {
  name: string,
  title: string
}

const tabs = ref<TabType[]>([
  {title: "首页", name: "home"},
  {title: "个人信息", name: "userInfo"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "用户列表", name: "userList"},
  {title: "系统信息", name: "settings"}
])

function check(item: TabType) {
  router.push({name: item.name})
  saveTabs()
}

function saveTabs() {
  localStorage.setItem("s_tabs", JSON.stringify(tabs.value))
}

function removeItem(item: TabType) {
  if (tabs.value.length <= 1) {
    return
  }
  const index = tabs.value.findIndex((value) => item.name === value.name)
  if (index != -1) {
    // 判断我删除的元素 是不是就是我 当前所在的
    if (item.name == route.name) {
      router.push({name: tabs.value[index - 1].name})
    }
    tabs.value.splice(index, 1)
  }
  saveTabs()
}

function removeAllItem() {
  const homeTab = tabs.value.find((tab) => tab.name === 'home')
  tabs.value = homeTab ? [homeTab] : [{title: '首页', name: 'home'}]
  router.push({name: 'home'})
  saveTabs()
}

// 初始化
function loadTabs(){
  const s_tabs = localStorage.getItem("s_tabs")
  if (s_tabs) {
    try {
      tabs.value = JSON.parse(s_tabs)
    }catch (e: any){
      console.log(e.message)
    }
  }
}
// loadTabs()

watch(()=> route.name, () => {
  // 判断当前路由的名称，在不在tabs中，如果不在，则添加到tabs中
  if (!tabs.value.find((item) => item.name === route.name)) {
    tabs.value.push({title: route.meta?.title, name: route.name as string})
  }
}, {immediate: true})

const slidesCount = ref(100);

onMounted(() => {
  // 先测容器可视宽度
  const swiperDom = document.querySelector(".s_tabs_swiper") as HTMLDivElement;
  const swiperWidth = swiperDom.clientWidth;

  // 实际的总宽度
  const wrapperDom = document.querySelector(".swiper-wrapper") as HTMLDivElement;
  const wrapperWidth = wrapperDom.clientWidth;

  // 如果实际总宽度大于显示的总宽度，则进行滚动
  if (wrapperWidth > swiperWidth) {
    // 遍历swiper-slide,然后从前往后加
    const slideList = document.querySelectorAll(".s_tabs_swiper .swiper-slide")

    let allWith = 0;
    let index = 1
    for (const slideListElement of slideList){
      allWith += (slideListElement.clientWidth+20);
      index++;
      if (allWith > swiperWidth) {
        break;
      }
    }
    slidesCount.value = index
  }
})
</script>

<template>
  <div class="s_tabs">
    <swiper class="s_tabs_swiper" :slides-per-view="slidesCount">
      <swiper-slide v-for="item in tabs">
        <div class="item " @click="check(item)" @mousedown.middle.stop="removeItem(item)"
             :class="{active:route.name===item.name}" >
          {{ item.title }}
          <span class="close" @click.stop="removeItem(item)" title="删除" v-if="item.name!='home'">
        <IconClose></IconClose>
      </span>
        </div>
      </swiper-slide>
    </swiper>
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
    width: calc(100% - 100px);
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
    .swiper-wrapper{
      display: flex;
      .swiper-slide{
        width: fit-content !important;
        flex-shrink: 0;
      }
    }

  }

  .item {
    padding: 3px 8px;
    background-color: var(--color-bg-1);
    border: @s_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    flex-shrink: 0;

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