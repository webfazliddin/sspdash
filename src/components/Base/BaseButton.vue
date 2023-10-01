<template>
  <button
    :type="type"
    :class="classnames($style.btn, $style[variant])"
    :disabled="disabled"
    @click="handleButtonClick"
  >
    <BaseSpinner v-if="loading" variant="white" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseButton {
  type?: "button" | "submit";
  disabled?: boolean;
  variant?:
    | "blue"
    | "none";
  loading?: boolean;
}

const emit = defineEmits<{
  (e: "on-click"): void;
}>();

withDefaults(defineProps<IBaseButton>(), {
  type: "button",
  disabled: false,
  variant: "blue",
  loading: false,
});

const handleButtonClick = () => {
  emit("on-click");
};
</script>

<style module lang="scss">
.btn {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-family: $base-font;
  font-weight: bold;
  padding: 18px 19px;
  border-radius: 8px;
  color: $color-white;
  background-color: $color-blue;
  border: none;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  }
}

.blue {
  background-color: $color-blue;
  border: none;
  color: $color-white;
}


.none {
  cursor: pointer;
  border: none;
  background: none;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-left: 32px;
  color: $color-grey;
}

:disabled {
  cursor: not-allowed;
  background-color: $color-white;
  border: 1px solid $color-grey;
  box-shadow: none;
  color: $color-grey;
}
</style>
