<template>
  <div
    :class="[store.state.currentAction === Action.Redo ? 'bg-yellow-100' : '']"
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
        d="M16.625 30.833q-3.667 0-6.313-2.395-2.645-2.396-2.645-5.98 0-3.541 2.645-5.937 2.646-2.396 6.313-2.396h13l-5.292-5.292 1-1 7 7-7 7-1-1 5.292-5.291h-13q-3.125 0-5.333 1.979-2.209 1.979-2.209 4.937 0 3 2.209 4.98 2.208 1.979 5.333 1.979h11.042v1.416Z"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import store from "../../store";
import Action from "../../utils/action";
</script>
