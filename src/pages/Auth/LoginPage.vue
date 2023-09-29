<template>
  <div class="aside">
    <div class="aside__title">Ro'yxatdan o'tish</div>
    <div class="aside__text">Iltimos, quyida maʼlumotlaringizni toʻldiring</div>

    <BaseAlert
      v-if="!!serverError.message"
      class="baseAlert"
      variant="danger"
      :message="serverError.message"
    />

    <BaseAlert
      v-if="!!serverSuccess.message"
      class="baseAlert"
      variant="success"
      :message="serverSuccess.message"
    />

    <BaseInput
      class="baseInput"
      label=""
      type="user"
      placeholder="Foydalanuvchi (Login) *"
      :value="formData.email"
      :error="errors.email"
      :disabled="isLoading"
      @on-input="(value) => changeField('email', value)"
    />

    <BaseInput
      class="baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      :disabled="isLoading"
      @onPasswordToggle="showPasswordClick"
      @on-input="(value) => changeField('password', value)"
    />

    <div class="parentBtn">
      <div></div>
      <div>
        <BaseButton variant="blue" class="baseBtn" :loading="isLoading" @on-click="login">
          <div class="baseBtn__item">
            <div>Kirish</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1.5625 15.875L8.4375 9L1.5625 2.125"
                  stroke="white"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </BaseButton>
      </div>
    </div>

    <div class="hr"></div>

    <RouterLink to="/" class="forgotLink">E-imzo bilan kirish</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export interface ILoginView {
  email: string
  password: string
}

const router = useRouter()
const authStore = useAuthStore()
const isLoading = ref<boolean>(false)
const showPassword = ref(false)
const serverError = reactive({
  message: ''
})
const serverSuccess = reactive({
  message: ''
})

const formData = ref({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const showPasswordClick = () => {
  showPassword.value = !showPassword.value
}

const changeField = (propertyName: 'email' | 'password', value: string) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const login = () => {
  isLoading.value = true

  authStore
    .login({
      email: formData.value.email,
      password: formData.value.password
    })
    .then((response) => {
      serverError.message = ''
      serverSuccess.message = response.data.message
      router.push('/home')
    })
    .catch((error) => {
      const apiError = error.response.data
      serverError.message = apiError.message

      if (apiError.errors.email) {
        errors.email = apiError.errors.email
      }

      if (apiError.errors.password) {
        errors.password = apiError.errors.password
      }
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

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
}

.baseAlert {
  margin-bottom: 16px;
}

.baseInput {
  width: 100%;
  margin-bottom: 28px;
}

.parentBtn {
  display: flex;
  justify-content: space-between;
}

.baseBtn {
  width: 176px;
  margin-bottom: 35px;
  font-size: 18px;

  &__item {
    display: flex;
    align-items: center;
    gap: 54px;
  }
}

.hr {
  border: 1px solid #ececf0;
  margin-bottom: 30px;
}

.forgotLink {
  color: $color-primary;
  display: flex;
  justify-content: end;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin-bottom: 110px;
  text-decoration: none;
  &:hover {
    color: $color-primary;
  }
}

.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
</style>
