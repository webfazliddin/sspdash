<template>
  <div class="main-layout">
    <aside v-if="!visible" class="main-sidebar"><SideBar /></aside>
    <div>
      <div class="main-header"><AppHeader @on-click="addMenuClick" /></div>
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-layout {
  background: url(../assets/bg/bgdashboard.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.main-sidebar {
  display: none;
  @include breakpoint('lg') {
    display: block;
  }
}

.main-content {
  padding: 20px 30px 30px 20px;

  @include breakpoint('lg') {
    padding: 0 30px 30px 130px;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)

const addMenuClick = () => {
  console.log('working')
  visible.value = !visible.value
}
</script>
