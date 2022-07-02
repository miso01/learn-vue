<template>
  <div class="h-full bg-green-400 rounded-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Action from "../utils/Action";

export default defineComponent({
  name: "WorkSpace",

  setup(props, context) {
    const state = reactive({
      currentAction: Action.None,
    });


    return { state };
  },
});
</script>
