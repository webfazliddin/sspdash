<template>
  <div class="aside">
    <div class="aside__title">Tizimga kirish</div>
    <div class="aside__text">Iltimos, tizimga kirish uchun kerakli tugmani bosing</div>

    <div>
      <div>
        <RouterLink to="/auth/login">
          <BaseButton variant="blue" class="aside__baseBtn">
            <div class="aside__baseBtn--item">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7243 11.1755C24.7243 15.2765 21.4915 18.601 17.5037 18.601C13.5159 18.601 10.2832 15.2765 10.2832 11.1755C10.2832 7.0745 13.5159 3.75 17.5037 3.75C21.4915 3.75 24.7243 7.0745 24.7243 11.1755ZM23.7013 22.7847C25.9971 23.2496 27.4959 24.008 28.1383 25.2313C28.6207 26.1861 28.6207 27.3226 28.1383 28.2774C27.4959 29.5007 26.0566 30.3081 23.6775 30.724C22.6173 30.9377 21.5442 31.0767 20.4657 31.1399C19.4665 31.25 18.4672 31.25 17.4561 31.25H15.6361C15.2555 31.2011 14.8867 31.1766 14.5298 31.1766C13.4512 31.1211 12.3779 30.9862 11.3181 30.7729C9.02224 30.3325 7.52341 29.5496 6.88105 28.3263C6.63308 27.8524 6.50235 27.3231 6.5004 26.7849C6.49523 26.2435 6.622 25.7094 6.86916 25.2313C7.49962 24.008 8.99845 23.2129 11.3181 22.7847C12.3826 22.5758 13.4596 22.4409 14.5417 22.381C16.5213 22.2215 18.5099 22.2215 20.4895 22.381C21.5674 22.4438 22.6403 22.5787 23.7013 22.7847Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>Login bilan kirish</div>
            </div>
          </BaseButton>
        </RouterLink>
      </div>

      <div>
        <RouterLink to="/auth/login">
          <BaseButton variant="blue" class="aside__baseBtn">
            <div class="aside__baseBtn--item">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <g clip-path="url(#clip0_160_489)">
                    <path
                      d="M17.3666 13.8333C16.2666 10.7267 13.3133 8.5 9.83325 8.5C5.41325 8.5 1.83325 12.08 1.83325 16.5C1.83325 20.92 5.41325 24.5 9.83325 24.5C13.3133 24.5 16.2666 22.2733 17.3666 19.1667H23.1666V24.5H28.4999V19.1667H31.1666V13.8333H17.3666ZM9.83325 19.1667C8.35992 19.1667 7.16659 17.9733 7.16659 16.5C7.16659 15.0267 8.35992 13.8333 9.83325 13.8333C11.3066 13.8333 12.4999 15.0267 12.4999 16.5C12.4999 17.9733 11.3066 19.1667 9.83325 19.1667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_489">
                      <rect width="32" height="32" fill="white" transform="translate(0.5 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
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
