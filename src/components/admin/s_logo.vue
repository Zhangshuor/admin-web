<script setup lang="ts">

import {collapsed} from "@/components/admin/s_menu.ts";
</script>

<template>
  <div class="s_logo" :class="{collapsed}">
    <img class="logo" src="/images/logo.png" alt="logo" />
    <div class="slogan">
      <div>硕硕博客</div>
      <div>Sure Blog</div>
    </div>
  </div>
</template>

<style lang="less">
// 整体 Logo 区域容器
.s_logo {
  display: flex;           // 使用弹性布局，使内部元素水平排列
  width: 100%;            // 占满父容器宽度
  justify-content: center; // 主轴（水平）居中，让 logo 和 slogan 整体居中
  align-items: center;     // 交叉轴（垂直）居中，保证两者垂直对齐

  // 折叠状态下的样式变化（菜单收起时）
  &.collapsed {
    // 标语区域隐藏：先缩小为0，再设置透明度0，实现淡出缩小效果
    .slogan {
      transform: scale(0);      // 缩小到无，视觉上消失
      transform-origin: left;   // 从左侧开始缩小，避免位移突变
      opacity: 0;               // 完全透明，增强隐藏效果
    }

    // Logo 缩小并向右平移，适应折叠后的窄菜单
    .logo {
      transform: translateX(22px); // 向右移动22px，使logo在折叠栏中居中
      width: 40px;                 // 缩小宽度
      height: 40px;               // 缩小高度
    }
  }

  // Logo 图片样式（默认状态）
  .logo {
    height: 78px;          // 固定高度
    width: 78px;           // 固定宽度
    display: block;        // 块级元素，避免多余行内间距
  }

  // 标语文字区域（默认状态）
  .slogan {
    // 将 slogan 设为弹性容器，内部两个 div（中文和英文）竖向排列并居中
    display: flex;
    flex-direction: column;  // 主轴改为竖向，子项上下排列
    justify-content: center; // 沿主轴（竖向）居中，使上下文字整体居中
    align-items: center;     // 沿交叉轴（横向）居中，确保两行文字水平对齐
    margin-left: 10px;       // 与左侧 logo 保持间距

    // 第一行文字（中文博客名）
    div:nth-child(1) {
      font-size: 24px;       // 较大字号突出主标题
      font-weight: 600;      // 加粗增强视觉重量
    }

    // 第二行文字（英文副标题）
    div:nth-child(2) {
      font-size: 16px;       // 较小字号作为副标题
    }
  }
}
</style>