<script setup lang="ts">
import router from "@/router";

function handleSelect(val: string) {
  if (val === "logout"){
    // 注销流程
    return
  }
  router.push({name:val})
}

interface OptionsType {
  name:string,
  title:string
}

const options : OptionsType[] = [
  {
    title:"个人信息",
    name:"userInfo"
  },
  {
    title:"用户列表",
    name:"userList"
  },
  {
    title:"系统信息",
    name:"settings"
  },
  {
    title:"注销退出",
    name:"logout"
  }
]

</script>

<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <div class="s_user_dropdown_com">
      <a-avatar :size="35" image-url="https://avatars.githubusercontent.com/u/78637328?v=4"></a-avatar>
      <span class="user_name">程序员硕硕</span>
      <icon-down/>
    </div>
    <template #content>
      <a-doption v-for="item in options" :value="item.name">{{ item.title }}</a-doption>
    </template>
  </a-dropdown>
</template>

<style lang="less">
.s_user_dropdown_com {
  display: flex;
  align-items: center;
  cursor: pointer;

  .user_name {
    margin: 0 5px;
  }

  svg {
    margin-right: 0 !important;
    vertical-align: middle; // 可选
  }
}

</style>