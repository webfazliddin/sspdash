<template>
  <div class="sideBar">
    <div class="sideBar__logo">
      <RouterLink
        style="
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        "
        to="/"
      >
        <div>
          <img src="../../assets/logo/logo.png" />
        </div>
        <div class="sideBar__logo--title">SSP</div>
      </RouterLink>
    </div>

    <div class="links">
      <div class="link">
        <RouterLink
          style="text-decoration: none"
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          :class="$route.path == link.url ? 'active' : ''"
          class="sideBar__items"
        >
          <div class="sideBar__items">
            <div class="sideBar__item" v-html="link.image"></div>

            <div class="sideBar__items--title">
              {{ link.title }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div>
      <RouterLink to="/">
        <div class="sideBar__exitBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M1.209 10.1207H13.25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.13574 7.20471L1.20774 10.1207L4.13574 13.0367"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.64026 5.62988C6.97026 2.04988 8.31026 0.749878 13.6403 0.749878C20.7413 0.749878 20.7413 3.05988 20.7413 9.99988C20.7413 16.9399 20.7413 19.2499 13.6403 19.2499C8.31026 19.2499 6.97026 17.9499 6.64026 14.3699"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IProfileSidemenuLink {
  id: number;
  title: string;
  url: string;
  image?: string;
}

const links = ref<IProfileSidemenuLink[]>([
  {
    id: 1,
    title: " 20 ming tadbirkor",
    url: "/home",
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none" > <path d="M22.4598 10.5758C24.5963 10.5758 26.3294 8.84395 26.3294 6.70751C26.3294 4.57106 24.5963 2.83917 22.4598 2.83917" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M24.2389 14.7797C24.8769 14.8237 25.5112 14.9141 26.1358 15.0547C27.0036 15.2246 28.0473 15.5802 28.4189 16.3588C28.656 16.8574 28.656 17.438 28.4189 17.9379C28.0486 18.7164 27.0036 19.0709 26.1358 19.2493" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M7.38677 10.5758C5.25032 10.5758 3.51721 8.84395 3.51721 6.70751C3.51721 4.57106 5.25032 2.83917 7.38677 2.83917" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M5.60777 14.7797C4.96977 14.8237 4.33544 14.9141 3.71088 15.0547C2.84311 15.2246 1.79933 15.5802 1.42899 16.3588C1.19066 16.8574 1.19066 17.438 1.42899 17.9379C1.79811 18.7164 2.84311 19.0709 3.71088 19.2493" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9171 15.6127C19.2462 15.6127 22.9446 16.2678 22.9446 18.8895C22.9446 21.51 19.2706 22.1895 14.9171 22.1895C10.5867 22.1895 6.88953 21.5344 6.88953 18.9127C6.88953 16.2911 10.5635 15.6127 14.9171 15.6127Z" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.917 11.8732C12.0619 11.8732 9.77271 9.58398 9.77271 6.72765C9.77271 3.87254 12.0619 1.58331 14.917 1.58331C17.7721 1.58331 20.0614 3.87254 20.0614 6.72765C20.0614 9.58398 17.7721 11.8732 14.917 11.8732Z" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg>',
  },
  {
    id: 2,
    title: "A’zolik",
    url: "/home/azolik",
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none" > <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9522 1.58777L18.0402 7.79977C18.1949 8.11311 18.4935 8.33177 18.8402 8.38244L25.7535 9.38111C26.0335 9.41844 26.2855 9.56511 26.4575 9.78911C26.7802 10.2091 26.7309 10.8038 26.3442 11.1651L21.3335 16.0104C21.0789 16.2504 20.9655 16.6024 21.0322 16.9451L22.2322 23.7824C22.3162 24.3491 21.9295 24.8798 21.3629 24.9718C21.1282 25.0078 20.8882 24.9704 20.6749 24.8651L14.5175 21.6371C14.2082 21.4691 13.8375 21.4691 13.5282 21.6371L7.32555 24.8824C6.80688 25.1464 6.17221 24.9504 5.88955 24.4424C5.78155 24.2371 5.74421 24.0038 5.78155 23.7758L6.98155 16.9384C7.04155 16.5971 6.92821 16.2464 6.68021 16.0051L1.64288 11.1611C1.23221 10.7531 1.22955 10.0891 1.63888 9.67844C1.64021 9.67711 1.64155 9.67444 1.64288 9.67311C1.81221 9.51977 2.02021 9.41711 2.24555 9.37711L9.16021 8.37844C9.50555 8.32377 9.80288 8.10777 9.96021 7.79444L13.0455 1.58777C13.1695 1.33577 13.3895 1.14244 13.6562 1.05444C13.9242 0.965107 14.2175 0.98644 14.4695 1.11311C14.6762 1.21577 14.8455 1.38244 14.9522 1.58777Z" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg>',
  },
  {
    id: 3,
    title: "Da’vo ariza",
    url: "/home/davo-ariza",
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" > <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9467 3.14047C17.6256 3.01119 18.9419 3.60554 20.1441 4.60284C21.1783 5.45911 21.912 6.98024 22.0194 8.4426C22.2612 11.725 19.721 14.3408 16.7089 14.5573C13.4215 14.7941 10.8259 12.2538 10.6093 9.24514C10.3793 6.06857 12.7634 3.38728 15.9467 3.14047ZM16.2825 15.7091C12.0565 15.7091 8.79602 11.8475 9.56666 7.57626C9.77117 6.46948 10.2477 5.43093 10.9535 4.55415C11.0583 4.44907 11.1502 4.33183 11.2271 4.20493H8.32759C6.971 4.20493 6.14495 4.79592 5.61944 5.53298C4.9126 6.53028 5.06035 7.60145 5.06035 8.96979V25.0122C5.06035 26.3822 4.89246 27.4618 5.55396 28.5094C5.82742 28.9407 6.20419 29.297 6.6501 29.5459C7.09602 29.7948 7.597 29.9285 8.10765 29.9349H24.5261C25.0803 29.9266 25.622 29.7695 26.0946 29.4801C26.5672 29.1906 26.9533 28.7794 27.2124 28.2895C27.5214 27.6951 27.5785 27.2485 27.5768 26.488V11.3606C27.5768 10.4456 27.6204 7.79117 27.565 7.07929C27.5231 6.53129 27.3368 6.00417 27.0251 5.5515C26.7134 5.09883 26.2874 4.73677 25.7904 4.5021C25.1339 4.21165 24.6873 4.20997 23.9015 4.20997H21.3949C21.4775 4.34267 21.5743 4.46597 21.6837 4.57766C25.2363 9.09236 22.0665 15.7041 16.2858 15.7074L16.2825 15.7091ZM4.03787 27.2754C4.12612 28.1179 4.47056 28.913 5.02474 29.5537C5.57893 30.1943 6.31622 30.6497 7.13721 30.8583C7.95822 31.0715 9.44745 30.9808 10.3726 30.9808H23.7723C24.9811 30.9808 25.6191 30.9657 26.5476 30.4285C27.2511 30.0248 27.8182 29.4203 28.1762 28.6924C28.6614 27.7489 28.616 26.9446 28.616 25.7946V9.03192C28.616 7.94395 28.705 6.90468 28.3793 5.93089C28.0917 5.1229 27.5608 4.42386 26.8597 3.92989C26.1586 3.43592 25.3217 3.17128 24.464 3.17237C23.3441 3.1623 22.2192 3.17237 21.1061 3.17237C20.8509 3.17237 20.5 3.19252 20.2549 3.17237C20.1038 3.16062 19.8502 2.97594 19.7075 2.89031C17.6525 1.66132 15.0216 1.77045 13.0538 2.81476C12.8859 2.90038 12.6492 3.08003 12.5233 3.13376C12.3688 3.19924 10.2903 3.16398 10.0267 3.16398C9.00085 3.17237 7.82055 3.07332 6.90048 3.35706C6.08545 3.61913 5.37125 4.12656 4.85556 4.80995C4.33986 5.49334 4.04783 6.31933 4.0194 7.17499C3.97575 8.26799 4.0194 9.44158 4.0194 10.543V20.5764C4.01604 21.2564 3.98246 26.7415 4.03787 27.2754Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86827 17.3579C8.72721 17.379 8.59629 17.4437 8.49385 17.5429C8.39142 17.6422 8.32261 17.771 8.29706 17.9113C8.27152 18.0516 8.29052 18.1964 8.3514 18.3254C8.41228 18.4544 8.512 18.5611 8.63657 18.6305C8.90856 18.7783 10.2887 18.7094 10.7168 18.7094C11.3884 18.7094 23.5457 18.7397 23.7858 18.701C23.925 18.6761 24.0532 18.6085 24.1524 18.5076C24.2516 18.4068 24.3171 18.2776 24.3398 18.1379C24.3624 17.9982 24.3412 17.8549 24.2789 17.7278C24.2167 17.6007 24.1165 17.4961 23.9923 17.4284C23.7303 17.2823 22.3284 17.3512 21.9137 17.3512C21.2253 17.3512 9.12179 17.3226 8.86827 17.3579Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84799 20.3531C8.70694 20.3774 8.57717 20.4456 8.47715 20.548C8.37713 20.6504 8.31197 20.7817 8.29094 20.9233C8.26992 21.0649 8.29411 21.2095 8.36007 21.3365C8.42602 21.4635 8.53038 21.5665 8.65827 21.6308C8.93362 21.7601 10.3238 21.6996 10.7502 21.6996H21.6282C22.0949 21.6996 23.4431 21.7601 23.8108 21.6845C23.9485 21.6538 24.0732 21.5813 24.168 21.4769C24.2628 21.3725 24.323 21.2413 24.3403 21.1013C24.3576 20.9614 24.3311 20.8195 24.2646 20.6951C24.1981 20.5708 24.0947 20.4701 23.9686 20.4068C23.7 20.2725 22.2897 20.3346 21.88 20.3346H11.0021C10.5018 20.3346 9.25262 20.2742 8.84799 20.3531Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11506 24.6898H23.4886C24.5513 24.6898 24.417 23.81 24.1719 23.5414C23.9603 23.3113 23.6816 23.3231 23.3005 23.3231H9.05126C8.05564 23.3197 7.95322 24.6898 9.11506 24.6898Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29913 27.1495C8.42337 27.7422 9.03451 27.6784 9.39716 27.6784H19.2123C19.6992 27.6784 20.0954 27.3812 19.988 26.8389C19.8688 26.2412 19.2375 26.3067 18.8967 26.3067H9.08152C8.50732 26.3134 8.19671 26.6777 8.29913 27.1495Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9702 10.5917C16.2873 10.5352 16.6128 10.5482 16.9244 10.6296C17.236 10.7111 17.5262 10.8591 17.7751 11.0635C17.979 11.2577 18.1422 11.4906 18.2552 11.7485C18.2833 11.8208 18.3313 11.8835 18.3938 11.9295C18.4562 11.9754 18.5304 12.0026 18.6078 12.0079C18.6851 12.0132 18.7623 11.9963 18.8304 11.9593C18.8985 11.9223 18.9547 11.8667 18.9923 11.7989C19.2022 11.3691 18.4382 9.72034 16.6955 9.50879C15.3523 9.35097 14.2493 9.95539 13.7154 11.1877C13.5743 11.5135 13.5189 11.8879 13.8698 11.9953C14.6153 12.2203 14.209 10.8251 15.9702 10.5917Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6877 7.58629C17.8136 8.76155 19.187 8.53657 19.0561 7.33444C19.0107 6.90631 18.7052 6.47986 18.2552 6.57052C17.8942 6.64272 17.6373 7.10611 17.6877 7.58629Z" fill="#2364AA" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1367 6.58565C13.1763 6.86603 13.5457 8.62893 14.4372 8.34687C15.2733 8.08327 15.003 6.32541 14.1367 6.58565Z" fill="#2364AA" /> </svg>',
  },
  {
    id: 4,
    title: "Kadr",
    url: "/home/kadr",
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none" > <circle cx="11.4387" cy="7.70408" r="6.37071" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.3334 22.9352C1.33168 22.4873 1.43184 22.0449 1.6263 21.6415C2.23652 20.4211 3.95735 19.7742 5.38526 19.4813C6.41508 19.2615 7.45911 19.1147 8.5096 19.042C10.4545 18.8711 12.4106 18.8711 14.3555 19.042C15.4059 19.1156 16.4499 19.2624 17.4798 19.4813C18.9078 19.7742 20.6286 20.36 21.2388 21.6415C21.6299 22.4639 21.6299 23.4186 21.2388 24.241C20.6286 25.5225 18.9078 26.1083 17.4798 26.389C16.4512 26.6179 15.4068 26.7688 14.3555 26.8406C12.7725 26.9748 11.1822 26.9992 9.59579 26.9138C9.22966 26.9138 8.87573 26.9138 8.5096 26.8406C7.46222 26.7697 6.4218 26.6187 5.39747 26.389C3.95735 26.1083 2.24873 25.5225 1.6263 24.241C1.43284 23.8329 1.33278 23.3868 1.3334 22.9352Z" stroke="#2364AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg>',
  },
]);
</script>

<style lang="scss">
.link {
  padding-left: 13px;
}
.sideBar {
  width: 90px;
  height: 100%;
  background: #cecece;
  z-index: 99999;
  position: fixed;
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr 2fr 1fr;

  @include breakpoint("md") {
    width: 121px;
    grid-template-rows: 2fr 5fr 1fr;
    &:hover {
      width: 264px;
      .sideBar__logo--title {
        display: block;
      }
      .sideBar__items--title {
        display: block;
      }
    }
    &__logo {
      padding-left: 13px;
    }
  }

  &__logo {
    padding-left: 5px;
    &--title {
      font-family: $base-font;
      font-size: 32px;
      font-weight: 400;
      line-height: 16px;
      color: $color-white;
      display: none;
    }
  }
  &__items {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    cursor: pointer;

    &--title {
      font-family: $base-font;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 400;
      display: none;
      color: $color-grey-dark;
    }

    &:hover {
      svg path {
        stroke: #fff !important;
      }
      .sideBar__item {
        background: $color-blue;
      }
      .sideBar__items--title {
        color: $color-blue;
      }

      &::before {
        content: "";
        position: absolute;
        right: 0;
        width: 7px;
        height: 10px;
        background: $color-blue;
        border-radius: 4px 0 0 4px;
      }
    }
  }
  &__item {
    width: 40px;
    height: 40px;
    display: grid;
    align-content: center;
    justify-content: center;
    border-radius: 50%;
    background: $color-white;

    @include breakpoint("md") {
      width: 80px;
      height: 80px;
    }
  }
  &__exitBtn {
    // position: fixed;
    // bottom: 30px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: $color-blue;
    display: grid;
    align-content: center;
    justify-content: center;
    margin-left: 13px;
    cursor: pointer;
  }
}
.sideBar__items.active {
  .sideBar__items {
    svg path {
      stroke: #fff !important;
    }
    .sideBar__item {
      background: $color-blue;
    }
    .sideBar__items--title {
      color: $color-blue;
    }

    &::before {
      content: "";
      position: absolute;
      right: 0;
      width: 7px;
      height: 90px;
      background: $color-blue;
      border-radius: 4px 0 0 4px;
    }
  }
}
</style>
