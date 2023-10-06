<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="100px" class="main-sidebar"><SideBar /></el-aside>
      <el-container>
        <el-header class="main-header"><AppHeader /></el-header>
        <el-main> <RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
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
</style>
