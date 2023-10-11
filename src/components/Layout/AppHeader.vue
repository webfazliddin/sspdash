<template>
  <div class="header">
    <div>
      <el-button>
        <div class="menu" @click="drawer = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-tabler icon-tabler-menu-2"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </el-button>
    </div>

    <div>
      <div class="wrapper">
        <div class="headerLeft">
          <div class="logo">20 ming tadbirkor</div>
        </div>

        <div class="headerRight">
          <div class="search">
            <input class="search__input" type="text" placeholder="Qidirish" />
            <div class="search__icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Search">
                  <path
                    id="Stroke 1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.189 1.62262C14.9166 1.62262 18.75 5.455 18.75 10.1836C18.75 14.9121 14.9166 18.7445 10.189 18.7445C5.46043 18.7445 1.62805 14.9121 1.62805 10.1836C1.62805 5.455 5.46043 1.62262 10.189 1.62262Z"
                    stroke="#626466"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Stroke 3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.8125 17.3959C19.5916 17.3959 20.223 18.0283 20.223 18.8064C20.223 19.5864 19.5916 20.2178 18.8125 20.2178C18.0335 20.2178 17.4011 19.5864 17.4011 18.8064C17.4011 18.0283 18.0335 17.3959 18.8125 17.3959Z"
                    stroke="#626466"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>

          <button class="btnDownload">
            <div class="btnDownload__inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.6636 11.4083C17.9732 11.4083 17.4136 11.9679 17.4136 12.6583C17.4136 13.3487 17.9732 13.9083 18.6636 13.9083C19.3539 13.9083 19.9136 13.3487 19.9136 12.6583C19.9136 11.9679 19.3539 11.4083 18.6636 11.4083Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.08671 8.52362L7.16357 8.29278V4.32131C7.16357 3.67802 7.65363 3.14065 8.29419 3.08152C11.3672 2.79786 14.4599 2.79786 17.533 3.08152C18.1735 3.14065 18.6636 3.67803 18.6636 4.32131V8.29278L20.7405 8.52362C21.5068 8.60879 22.139 9.16222 22.3248 9.91053C22.8906 12.1894 22.8906 14.572 22.3248 16.8508L22.1415 17.589C22.0585 17.9235 21.7582 18.1583 21.4136 18.1583H18.6636V20.4913C18.6636 21.1133 18.1922 21.6342 17.5733 21.6961C14.4745 22.0059 11.3526 22.0059 8.25389 21.6961C7.63493 21.6342 7.16357 21.1133 7.16357 20.4913V18.1583H4.4136C4.069 18.1583 3.76874 17.9235 3.6857 17.589L3.50242 16.8508C2.93661 14.572 2.93661 12.1894 3.50242 9.91053C3.68821 9.16222 4.3204 8.60879 5.08671 8.52362ZM17.1636 8.14787C14.335 7.91592 11.4922 7.91592 8.66357 8.14787V4.55436C11.4915 4.30691 14.3356 4.30691 17.1636 4.55436V8.14787ZM17.1636 16.9099C17.1617 16.752 17.0605 16.616 16.9169 16.5652C14.2533 16.3291 11.574 16.3291 8.91032 16.5652C8.76535 16.6165 8.6636 16.7545 8.6636 16.9143V17.4083L8.66357 17.4146V20.2288C11.4907 20.495 14.3365 20.495 17.1636 20.2288V16.9099ZM20.827 16.6583H18.6636V16.3253C18.6636 15.7033 18.1922 15.1824 17.5733 15.1205C17.4378 15.107 17.3024 15.094 17.1669 15.0817C17.1101 15.0702 17.0523 15.0612 16.9937 15.0549C14.2815 14.7627 11.5457 14.7627 8.8335 15.0549C8.77487 15.0612 8.71711 15.0702 8.66035 15.0817C8.52482 15.094 8.38933 15.107 8.25389 15.1205C7.63493 15.1824 7.16357 15.7033 7.16357 16.3253V16.6583H5.00016L4.95821 16.4894C4.45135 14.4479 4.45135 12.3135 4.95821 10.272C4.99272 10.133 5.11011 10.0303 5.25241 10.0144L7.33474 9.78299C11.0426 9.37088 14.7846 9.37088 18.4925 9.78299L20.5748 10.0144C20.7171 10.0303 20.8345 10.133 20.869 10.272C21.3759 12.3135 21.3759 14.4479 20.869 16.4894L20.827 16.6583Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="btnDownload__title">Chop etish</div>
          </button>

          <BaseRoundedButton>
            <div class="baseRoundedButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.9104 1.00348C3.21516 1.00348 1.6096 4.34951 1.6096 6.56142C1.6096 8.21459 1.84929 7.72808 0.934208 9.74475C-0.183253 12.6186 4.3104 13.7932 6.9104 13.7932C9.50961 13.7932 14.0033 12.6186 12.8866 9.74475C11.9715 7.72808 12.2112 8.21459 12.2112 6.56142C12.2112 4.34951 10.6048 1.00348 6.9104 1.00348Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.83523 16.0018C7.75666 17.2066 6.07412 17.2209 4.98523 16.0018"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="baseRoundedButton__elipse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle cx="4.91357" cy="4.90833" r="3.5" fill="#FD5A33" stroke="white" />
                </svg>
              </div>
            </div>
          </BaseRoundedButton>

          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <BaseRoundedButton class="languageBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M2.91357 12.9083C2.91357 18.4311 7.39072 22.9083 12.9136 22.9083C18.4364 22.9083 22.9136 18.4311 22.9136 12.9083C22.9136 7.38548 18.4364 2.90833 12.9136 2.90833C7.39072 2.90833 2.91357 7.38548 2.91357 12.9083Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.9136 2.95764C13.9136 2.95764 16.9136 6.90826 16.9136 12.9082C16.9136 18.9082 13.9136 22.8589 13.9136 22.8589"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9136 22.8589C11.9136 22.8589 8.91357 18.9082 8.91357 12.9082C8.91357 6.90826 11.9136 2.95764 11.9136 2.95764"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.54321 16.4083H22.284"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.54321 9.40833H22.284"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </BaseRoundedButton>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item style="border-bottom: 1px solid #edeceb"
                    >O‘zbekcha</el-dropdown-item
                  >
                  <el-dropdown-item style="border-bottom: 1px solid #edeceb"
                    >Русский</el-dropdown-item
                  >
                  <el-dropdown-item>Ўзбекча</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

          <BaseRoundedButton @click="toggleDark()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M19.4 14.4806L20.3248 14.8609C20.4835 14.4752 20.3861 14.0316 20.0805 13.7478C19.7749 13.464 19.3253 13.3997 18.9524 13.5863L19.4 14.4806ZM9.01246 1.79999L9.81944 2.39056C10.065 2.05499 10.0773 1.60246 9.85029 1.25406C9.62328 0.90566 9.20434 0.734108 8.79817 0.823217L9.01246 1.79999ZM15.716 14.3492C11.6723 14.3492 8.36624 11.0123 8.36624 6.8613L6.36624 6.8613C6.36624 12.0858 10.5369 16.3492 15.716 16.3492L15.716 14.3492ZM18.9524 13.5863C17.9766 14.0748 16.879 14.3492 15.716 14.3492L15.716 16.3492C17.1977 16.3492 18.6011 15.9988 19.8476 15.3748L18.9524 13.5863ZM18.4752 14.1002C17.2399 17.1035 14.3298 19.1981 10.9524 19.1981L10.9524 21.1981C15.1835 21.1981 18.7978 18.5735 20.3248 14.8609L18.4752 14.1002ZM10.9524 19.1981C6.46539 19.1981 2.80008 15.4959 2.80008 10.8943L0.800077 10.8943C0.800077 16.5694 5.33 21.1981 10.9524 21.1981L10.9524 19.1981ZM2.80008 10.8943C2.80008 6.90134 5.56364 3.5804 9.22675 2.77676L8.79817 0.823217C4.21548 1.8286 0.800077 5.96394 0.800077 10.8943L2.80008 10.8943ZM8.36624 6.8613C8.36624 5.18278 8.90715 3.63714 9.81944 2.39056L8.20548 1.20941C7.04934 2.78919 6.36624 4.74639 6.36624 6.8613L8.36624 6.8613Z"
                fill="white"
              />
            </svg>
          </BaseRoundedButton>
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <BaseRoundedButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.40796 0.614197C5.53146 0.614197 3.1996 2.956 3.1996 5.84476C3.1996 8.73352 5.53146 11.0753 8.40796 11.0753C11.2844 11.0753 13.6163 8.73352 13.6163 5.84476C13.6163 2.956 11.2844 0.614197 8.40796 0.614197ZM8.40796 2.03348C10.5039 2.03348 12.2031 3.73985 12.2031 5.84476C12.2031 7.94967 10.5039 9.65604 8.40796 9.65604C6.31198 9.65604 4.61286 7.94967 4.61286 5.84476C4.61286 3.73985 6.31198 2.03348 8.40796 2.03348ZM6.27634 13.1837C5.51387 13.2366 4.74317 13.3455 3.98296 13.5084C2.51568 13.8106 1.34184 14.4145 0.842215 15.418C0.653772 15.8104 0.559029 16.2307 0.560628 16.6561C0.560062 17.0784 0.654038 17.4992 0.835723 17.8841C1.31545 18.876 2.35257 19.4374 3.753 19.7486L4.00387 19.8009C4.74344 19.9678 5.51438 20.0801 6.29047 20.1329C6.35658 20.1522 6.51411 20.1703 6.68606 20.179L6.82749 20.1843C6.90021 20.186 6.98274 20.1864 7.10571 20.1864C8.22124 20.2478 9.37769 20.2299 10.5288 20.1319C11.1422 20.09 11.7597 20.0098 12.3721 19.8922L12.8303 19.7971C14.3425 19.4988 15.4749 18.9314 15.971 17.8852C16.3388 17.1084 16.3388 16.207 15.9712 15.4306C15.4763 14.387 14.3583 13.8244 12.8188 13.5072C12.2148 13.3783 11.601 13.2829 10.9828 13.2219L10.5309 13.1837C9.11544 13.0588 7.6918 13.0588 6.27634 13.1837ZM10.4072 14.5975L10.4197 14.5985C11.1291 14.6485 11.8342 14.748 12.5299 14.8965C13.6734 15.1321 14.4495 15.5227 14.695 16.0405C14.8799 16.4309 14.8799 16.8846 14.6948 17.2754C14.4654 17.7592 13.7685 18.1329 12.7611 18.3614L12.5405 18.4081C11.8312 18.5664 11.1284 18.6684 10.421 18.7168C9.32329 18.8102 8.23212 18.8271 7.14371 18.7682L6.75783 18.7616C6.6507 18.7561 6.56042 18.7458 6.47676 18.729C5.81426 18.679 5.21812 18.5999 4.6393 18.4851L4.2937 18.412C3.1466 18.1871 2.3637 17.7949 2.10986 17.2701C2.02104 17.0818 1.9736 16.8694 1.97388 16.6543C1.97308 16.4405 2.0199 16.2328 2.11079 16.0435C2.3576 15.5479 3.18727 15.1211 4.27243 14.8976C4.97309 14.7474 5.67788 14.6479 6.38701 14.5986C7.73318 14.4799 9.07406 14.4799 10.4072 14.5975Z"
                      fill="white"
                    />
                  </svg>
                </BaseRoundedButton>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <a href="#" class="item">
                      <div class="svgStroke">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                        >
                          <circle
                            cx="4.78938"
                            cy="3.63921"
                            r="2.38902"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.999917 9.35088C0.999275 9.18294 1.03684 9.01705 1.10976 8.86576C1.33859 8.40809 1.9839 8.16553 2.51937 8.05569C2.90555 7.97328 3.29706 7.91822 3.69099 7.89093C4.42033 7.82686 5.15388 7.82686 5.88321 7.89093C6.27711 7.91854 6.6686 7.97359 7.05484 8.05569C7.59031 8.16553 8.23561 8.38521 8.46445 8.86576C8.61109 9.17416 8.61109 9.53219 8.46445 9.84059C8.23561 10.3211 7.59031 10.5408 7.05484 10.6461C6.66911 10.7319 6.27746 10.7885 5.88321 10.8154C5.28959 10.8657 4.6932 10.8749 4.09831 10.8429C3.96101 10.8429 3.82829 10.8429 3.69099 10.8154C3.29822 10.7888 2.90807 10.7322 2.52394 10.6461C1.9839 10.5408 1.34317 10.3211 1.10976 9.84059C1.03721 9.68754 0.999684 9.52025 0.999917 9.35088Z"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Mening kabinetim</div>
                    </a></el-dropdown-item
                  >
                  <el-dropdown-item>
                    <a href="#" class="item">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9899 13.7961V9.3771"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.9899 6.2043H9.9999"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.3346 0.750198H5.66561C2.64461 0.750198 0.75061 2.8892 0.75061 5.9162V14.0842C0.75061 17.1112 2.63561 19.2502 5.66561 19.2502H14.3336C17.3646 19.2502 19.2506 17.1112 19.2506 14.0842V5.9162C19.2506 2.8892 17.3646 0.750198 14.3346 0.750198Z"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Mening ma’lumotlarim</div>
                    </a></el-dropdown-item
                  >
                  <el-dropdown-item>
                    <a href="#" class="item">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M13.8554 6.12111L8.1916 11.8227L1.56064 7.74147C0.691759 7.20657 0.867871 5.88697 1.8467 5.60287L17.5022 1.04743C18.3925 0.789782 19.2156 1.62446 18.949 2.51889L14.304 18.1582C14.013 19.1369 12.7082 19.3064 12.1809 18.4325L8.1916 11.8227"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Telegram Bot</div>
                    </a></el-dropdown-item
                  >

                  <el-dropdown-item>
                    <a href="#" class="item">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M13.016 5.3895V4.4565C13.016 2.4215 11.366 0.7715 9.331 0.7715H4.456C2.422 0.7715 0.772003 2.4215 0.772003 4.4565V15.5865C0.772003 17.6215 2.422 19.2715 4.456 19.2715H9.341C11.37 19.2715 13.016 17.6265 13.016 15.5975V14.6545"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.8095 10.0214H7.76849"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.8812 7.10629L19.8092 10.0213L16.8812 12.9373"
                            stroke="#2364AA"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>Mening kabinetim</div>
                    </a></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-drawer v-model="drawer" :direction="'ltr'">
    <SideBar />
  </el-drawer>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { useDark, useToggle, useColorMode } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const colorMode = useColorMode()

const drawer = ref(false)

const emit = defineEmits<{
  (e: 'on-click'): void
}>()

const router = useRouter()
const { isLoggedIn } = useAuthStore()

const navigateLogin = () => {
  router.push('/auth/login')
}
</script>

<style lang="scss">
.el-popper__arrow {
  display: none !important;
}
.el-drawer__body {
  padding: 0 !important;
}
.el-drawer {
  background: none !important;
  box-shadow: none !important;
  flex-direction: inherit !important;
}
.el-button {
  white-space: inherit !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;
  align-items: start !important;
}

.header {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  padding-top: 10px;
}

.mobileHeader {
  display: block;
  padding-top: 15px;

  @include breakpoint('lg') {
    display: none;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  display: block;
  padding: 3px 15px 0 0;
  @include breakpoint('lg') {
    display: none;
  }
  &:hover {
    box-shadow: 0px 8px 20px rgba(168, 166, 166, 0.16);
  }
}

.logo {
  font-family: $base-font;
  font-weight: 600;
  text-transform: uppercase;
  color: $color-blue;
  cursor: pointer;

  @include breakpoint('lg') {
    font-size: 24px;
    line-height: 36px;
  }
}
.headerLeft {
  display: flex;
}

.headerRight {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: -100px;

  @include breakpoint('md') {
    margin-left: 0;
  }

  @include breakpoint('lg') {
    gap: 20px;
  }
}

.search {
  position: relative;
  display: none;
  margin-left: 40px;
  @include breakpoint('xl') {
    display: block;
    margin-left: 0;
  }

  &__input {
    font-family: $base-font;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.1px;
    background-color: #eaf0f7;
    padding: 14px;
    padding-right: calc((12px * 2) + 16px);
    border-radius: 16px;
    border: none;
    outline-color: $color-blue;
    height: 48px;
    min-width: 175px;
    box-sizing: border-box;

    @include breakpoint('lg') {
      min-width: 375px;
    }
  }

  &__icon {
    position: absolute;
    width: 24px;
    height: 24px;
    top: calc((40px - 16px) / 2);
    right: calc((40px - 16px) / 2);
    cursor: pointer;
  }
}

.btnDownload {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 15px;
  font-family: $base-font;
  font-weight: 500;
  padding: 13px;
  border-radius: 16px;
  color: $color-white;
  background-color: $color-blue;
  border: none;
  transition: box-shadow 0.15s ease-in-out;
  visibility: hidden;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  }

  @include breakpoint('lg') {
    visibility: inherit;
  }

  &__inner {
    display: none;
    @include breakpoint('lg') {
      display: block;
    }
  }

  &__title {
    display: none;
    @include breakpoint('xl') {
      display: block;
    }
  }
}

.baseRoundedButton {
  position: relative;

  &__elipse {
    position: absolute;
    top: -7px;
    right: 0;
  }
}

.languageBtn {
  position: relative;
}
.el-popper {
  border-radius: 16px !important;
}
.el-dropdown-menu {
  position: absolute;
  top: 40px;
  right: 1px;
  border-radius: 15px !important;
  background: #f7fbff !important;

  .el-dropdown-menu__item {
    font-family: $base-font;
    color: #667085;
    &:hover {
      color: $color-blue;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  cursor: pointer;
}

.svgStroke {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $color-blue;
  width: 19px;
  height: 19px;
  border-radius: 6px;
}

a {
  text-decoration: none;
  color: #667085;
}
</style>
