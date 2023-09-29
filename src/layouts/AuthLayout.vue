<template>
  <div class="layout">
    <main class="main">
      <div></div>

      <div class="mainTitle">
        <div><img src="../assets/logo/logo.png" /></div>
        <div>
          OʼZBEKISTON RESPUBLIKАSI <br />
          SАVDO-SАNOАT PАLАTАSI <br />
          YAGONА АXBOROT TIZIMI
        </div>
      </div>

      <div class="mainSocialLink">
        <div>
          <img src="../assets/login/icons/facebook.svg" />
        </div>
        <div>
          <img src="../assets/login/icons/instagram.svg" />
        </div>
        <div>
          <img src="../assets/login/icons/twitter.svg" />
        </div>
      </div>
    </main>

    <aside class="aside">
      <div class="content">
        <RouterView />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;

  @include breakpoint("md") {
    grid-template-columns: 1fr 55vw;
  }
}

.main {
  background-image: url(../assets/login/ssp-manbg.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.mainTitle {
  font-family: $base-font;
  display: flex;
  align-items: center;
  gap: 10px;
  color: $color-white;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
}

.mainSocialLink {
  display: flex;
  gap: 12px;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border-radius: 22px;
    background: $color-white;
  }
}

.aside {
  display: grid;
  align-content: center;
  justify-content: center;
}
</style>
