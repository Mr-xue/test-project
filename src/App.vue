<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- 页头 -->
  <RouterView name="WebHeader" />

  <!--左侧菜单 -->
  <RouterView name="LeftMenu" />

  <!-- 主体内容显示-->
  <RouterView />
</template>
