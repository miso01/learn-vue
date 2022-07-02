<template>
  <div
    class="absolute m-5 p-2 h-full w-12 bg-gray-50 rounded-md shadow-md inline-block"
  >
    <AddSticker
      :selected="store.state.currentAction === Action.AddSticker"
      @click="store.setAction(Action.AddSticker)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import AddSticker from "./icons/AddSticker.vue";
import Action from "../utils/Action";
import store from "../store.js";

export default defineComponent({
  name: "ToolBar",
  components: {
    AddSticker,
  },
  setup() {
    return {
      store,
      Action,
    };
  },
});
</script>
