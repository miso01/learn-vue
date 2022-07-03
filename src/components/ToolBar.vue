<template>
  <div
    class="absolute ml-5 p-2 w-12 bg-gray-50 rounded-md shadow-md inline-block"
  >
    <AddStickerIcon @click="store.setAction(Action.AddSticker)" />
    <TextInputIcon @click="store.setAction(Action.TextInput)" />
    <UndoIcon @click="store.undo()" />
    <RedoIcon @click="store.redo()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddStickerIcon from "./icons/AddStickerIcon.vue";
import TextInputIcon from "./icons/TextInputIcon.vue";
import UndoIcon from "./icons/UndoIcon.vue";
import RedoIcon from "./icons/RedoIcon.vue";
import Action from "../utils/action";
import store from "../store.js";

export default defineComponent({
  name: "ToolBar",
  components: {
    AddStickerIcon,
    TextInputIcon,
    UndoIcon,
    RedoIcon,
  },
  setup() {
    return {
      store,
      Action,
    };
  },
});
</script>
