<template>
  <button
    :type="type"
    :class="classnames($style.btn, $style[variant])"
    @click="handleButtonClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseButton {
  type?: "button";
  variant?: "blue" | "none";
}

const emit = defineEmits<{
  (e: "on-click"): void;
}>();

withDefaults(defineProps<IBaseButton>(), {
  type: "button",
  variant: "blue",
});

const handleButtonClick = () => {
  emit("on-click");
};
</script>

<style module lang="scss">
.btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: $color-blue;
  transition: box-shadow 0.15s ease-in-out;
  cursor: pointer;

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
