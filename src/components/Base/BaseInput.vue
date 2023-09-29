<template>
  <div :class="$style.baseInput">
    <label :class="$style.label" for="email">{{ label }}</label>

    <div :class="classnames($style.wrapper, { [$style.hasError]: !!error })">
      <div v-if="type === 'password'" :class="$style.append">
        <button
          v-if="showPassword"
          :class="$style.passwordToggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye" />
        </button>

        <button
          v-else
          :class="$style.passwordToggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye-slash" />
        </button>
      </div>

      <div v-if="type === 'user'" :class="$style.append">
        <button :class="$style.passwordToggle">
          <img src="@/assets//login/icons/user-dark.svg" />
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
        :type="
          type === 'password' ? (showPassword ? 'text' : 'password') : type
        "
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
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseInput {
  label: string;
  value: string;
  image?: string;
  placeholder?: string;
  type?: string;
  showPassword?: boolean;
  disabled?: boolean;
  error?: string;
}

withDefaults(defineProps<IBaseInput>(), {
  image: "",
  placeholder: "",
  type: "text",
  showPassword: false,
  disabled: false,
  error: "",
});

const emit = defineEmits<{
  (e: "on-password-toggle"): void;
  (e: "on-input", newValue: string): void;
}>();

const togglePasswordShow = () => {
  emit("on-password-toggle");
};

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("on-input", target.value);
};
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
