<template>
  <div class="aside">
    <div class="aside__title">Tizimga kirish</div>
    <div class="aside__text">
      Iltimos, tizimga kirish uchun kerakli tugmani bosing
    </div>

    <div>
      <div>
        <RouterLink to="/auth/login">
          <BaseButton variant="blue" class="aside__baseBtn">
            <div class="aside__baseBtn--item">
              <div><img src="@/assets/login/icons/user-white.svg" /></div>
              <div>Login bilan kirish</div>
            </div>
          </BaseButton>
        </RouterLink>
      </div>

      <div>
        <RouterLink to="/auth/login">
          <BaseButton variant="blue" class="aside__baseBtn">
            <div class="aside__baseBtn--item">
              <div><img src="@/assets/login/icons/lock-white.svg" /></div>
              <div>E-imzo kaliti bilan kirish</div>
            </div>
          </BaseButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.aside {
  &__title {
    font-family: $base-font;
    font-size: 28px;
    font-weight: 700;
    color: $color-dark;
    margin-bottom: 20px;
  }

  &__text {
    font-family: $base-font;
    font-size: 16px;
    font-weight: 500;
    color: $color-dark;
    margin-bottom: 48px;
  }

  &__baseBtn {
    font-family: $base-font;
    width: 100%;
    margin-bottom: 25px;

    &--item {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
}
</style>
