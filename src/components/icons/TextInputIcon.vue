<template>
  <div
    :class="[state.currentAction === Action.TextInput ? 'bg-yellow-100' : '']"
    class="rounded-md"
  >
    <svg
      class="fill-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 -4 50 50"
    >
      <path
        d="M13.25 31.875V9.917H4.792V8.125h18.75v1.792h-8.459v21.958Zm15 0V18.25h-5.125v-1.792h12.083v1.792h-5.125v13.625Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../../store";
import Action from "../../utils/action";

export default defineComponent({
  name: "TextInputIcon",
  setup() {
    return { state: store.state, Action };
  },
});
</script>
