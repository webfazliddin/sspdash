<template>
  <a
    href="#"
    :class="classnames($style.category, { [$style.isSelected]: selected })"
    @click.prevent="handleClick"
  >
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.text">{{ text }}</div>
  </a>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface ICategoryCard {
  title: string;
  text: string;
  selected: boolean;
}

withDefaults(defineProps<ICategoryCard>(), {
  selected: false,
});

const emit = defineEmits<{
  (e: "on-click"): void;
}>();

const handleClick = () => {
  emit("on-click");
};
</script>
<style module lang="scss">
.category {
  background: $color-bgdark;
  color: $color-white;
  font-family: $base-font;
  text-decoration: none;
  font-size: 16px;
  border-radius: 16px;
  padding: 20px 5px;
  text-align: center;

  &:hover {
    background: $color-blue-darkest;
  }

  &:focus-visible {
    background: $color-blue-darkest;
  }
}

.title {
  font-family: $base-font;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}

.text {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
}
</style>
