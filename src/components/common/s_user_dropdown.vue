<script setup lang="ts">
function handleSelect(val: string) {
  console.log(val)
}

</script>

<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <div class="s_user_dropdown_com">
      <a-avatar :size="35" image-url="https://avatars.githubusercontent.com/u/78637328?v=4"></a-avatar>
      <span class="user_name">程序员硕硕</span>
      <icon-down/>
    </div>
    <template #content>
      <a-doption>Option 1</a-doption>
      <a-doption disabled>Option 2</a-doption>
      <a-doption>Option 3</a-doption>
      <a-doption>Option 4</a-doption>
      <a-doption>Option 5</a-doption>
      <a-doption>Option 6</a-doption>
      <a-doption>Option 7</a-doption>
      <a-doption>Option 8</a-doption>
      <a-doption>Option 9</a-doption>
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