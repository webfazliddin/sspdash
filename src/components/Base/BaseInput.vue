<template>
  <div :class="$style.baseInput">
    <label :class="$style.label" for="email">{{ label }}</label>

    <div :class="classnames($style.wrapper, { [$style.hasError]: !!error })">
      <div v-if="type === 'password'" :class="$style.append">
        <button v-if="showPassword" :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5227 5.39601V6.92935C16.2451 7.46696 17.5 9.02614 17.5 10.8884V15.8253C17.5 18.1308 15.5886 20 13.2322 20H4.7688C2.41136 20 0.5 18.1308 0.5 15.8253V10.8884C0.5 9.02614 1.75595 7.46696 3.47729 6.92935V5.39601C3.48745 2.41479 5.95667 0 8.98476 0C12.0535 0 14.5227 2.41479 14.5227 5.39601ZM9.00508 1.73904C11.0678 1.73904 12.7445 3.37871 12.7445 5.39601V6.7137H5.25553V5.37613C5.26569 3.36878 6.94232 1.73904 9.00508 1.73904ZM9.88912 14.4549C9.88912 14.9419 9.49283 15.3294 8.99492 15.3294C8.50717 15.3294 8.11088 14.9419 8.11088 14.4549V12.2488C8.11088 11.7718 8.50717 11.3843 8.99492 11.3843C9.49283 11.3843 9.88912 11.7718 9.88912 12.2488V14.4549Z"
              fill="#151F4A"
            />
          </svg>
        </button>

        <button v-else :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5227 5.39601V6.92935C16.2451 7.46696 17.5 9.02614 17.5 10.8884V15.8253C17.5 18.1308 15.5886 20 13.2322 20H4.7688C2.41136 20 0.5 18.1308 0.5 15.8253V10.8884C0.5 9.02614 1.75595 7.46696 3.47729 6.92935V5.39601C3.48745 2.41479 5.95667 0 8.98476 0C12.0535 0 14.5227 2.41479 14.5227 5.39601ZM9.00508 1.73904C11.0678 1.73904 12.7445 3.37871 12.7445 5.39601V6.7137H5.25553V5.37613C5.26569 3.36878 6.94232 1.73904 9.00508 1.73904ZM9.88912 14.4549C9.88912 14.9419 9.49283 15.3294 8.99492 15.3294C8.50717 15.3294 8.11088 14.9419 8.11088 14.4549V12.2488C8.11088 11.7718 8.50717 11.3843 8.99492 11.3843C9.49283 11.3843 9.88912 11.7718 9.88912 12.2488V14.4549Z"
              fill="#151F4A"
            />
          </svg>
        </button>
      </div>

      <div v-if="type === 'user'" :class="$style.append">
        <button :class="$style.passwordToggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2538 7.40036C17.2538 10.3829 14.9027 12.8007 12.0025 12.8007C9.1023 12.8007 6.75121 10.3829 6.75121 7.40036C6.75121 4.41782 9.1023 2 12.0025 2C14.9027 2 17.2538 4.41782 17.2538 7.40036ZM16.5098 15.8434C18.1795 16.1815 19.2696 16.7331 19.7367 17.6228C20.0876 18.3171 20.0876 19.1437 19.7367 19.8381C19.2696 20.7278 18.2228 21.3149 16.4925 21.6174C15.7215 21.7729 14.9411 21.874 14.1567 21.9199C13.43 22 12.7033 22 11.9679 22H10.6443C10.3674 21.9644 10.0992 21.9466 9.83971 21.9466C9.05527 21.9063 8.27466 21.8082 7.50387 21.653C5.83418 21.3327 4.74412 20.7633 4.27695 19.8737C4.09661 19.529 4.00153 19.144 4.00011 18.7527C3.99635 18.3589 4.08855 17.9705 4.2683 17.6228C4.72682 16.7331 5.81687 16.1548 7.50387 15.8434C8.27806 15.6915 9.06133 15.5934 9.84836 15.5498C11.288 15.4338 12.7343 15.4338 14.174 15.5498C14.958 15.5955 15.7382 15.6936 16.5098 15.8434Z"
              fill="#868AA5"
            />
          </svg>
        </button>

        <!-- <button
          v-else
          :class="$style.passwordToggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye-slash" />
        </button> -->
      </div>

      <input
        :class="$style.input"
        :value="value"
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
        :placeholder="placeholder"
        @input="handleInputChange"
        required
        :disabled="disabled"
      />
    </div>
    <div v-if="!!error" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { withDefaults } from 'vue'

export interface IBaseInput {
  label: string
  value: string
  image?: string
  placeholder?: string
  type?: string
  showPassword?: boolean
  disabled?: boolean
  error?: string
}

withDefaults(defineProps<IBaseInput>(), {
  image: '',
  placeholder: '',
  type: 'text',
  showPassword: false,
  disabled: false,
  error: ''
})

const emit = defineEmits<{
  (e: 'on-password-toggle'): void
  (e: 'on-input', newValue: string): void
}>()

const togglePasswordShow = () => {
  emit('on-password-toggle')
}

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('on-input', target.value)
}
</script>

<style module lang="scss">
.label {
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 12px;
  line-break: 16px;
  color: $color-dark;
  margin-bottom: 8px;
}
.wrapper {
  width: 100%;
  padding: 0px 17px;
  display: grid;
  grid-template-columns: auto 1fr;
  border: 2px solid $color-blue-lightest;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    border: 2px solid $color-dark;
    border-radius: 8px;
  }
  &:has(input:focus) {
    border: 2px solid $color-dark;
    border-radius: 8px;
  }
}

.hasError {
  border: 1px solid $color-error;
}
.input {
  color: $color-dark;
  width: 100%;
  height: 70px;
  border: none;
  outline: none;
  letter-spacing: 0.1px;
  font-family: $base-font;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &:disabled {
    color: $color-grey !important;
  }
}
.append {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
}
.passwordToggle {
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: unset;
  transition: color 0.25s ease-in-out;
  color: $color-grey;

  &:hover {
    color: $color-grey-dark;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
  }
}
.error {
  font-family: $base-font;
  font-size: 12px;
  font-weight: 700;
  padding: 0 8px;
  margin-top: 4px;
  color: $color-error;
}
</style>
