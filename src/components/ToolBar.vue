<template>
  <div
    class="absolute ml-5 p-2 w-12 bg-gray-50 rounded-md shadow-md inline-block z-10"
  >
    <AddStickerIcon @click="store.setAction(Action.AddSticker)" />
    <TextInputIcon @click="store.setAction(Action.TextInput)" />
    <UndoIcon @click="store.undo()" />
    <RedoIcon @click="store.redo()" />
    <ZoomInIcon @click="store.zoomIn()" />
    <ZoomOutIcon @click="store.zoomOut()" />
    <FitViewIcon @click="store.fitView()" />
  </div>
</template>

<script lang="ts" setup>
import AddStickerIcon from "./icons/AddStickerIcon.vue";
import TextInputIcon from "./icons/TextInputIcon.vue";
import UndoIcon from "./icons/UndoIcon.vue";
import RedoIcon from "./icons/RedoIcon.vue";
import ZoomInIcon from "./icons/ZoomInIcon.vue";
import ZoomOutIcon from "./icons/ZoomOutIcon.vue";
import FitViewIcon from "./icons/FitViewIcon.vue";
import Action from "../utils/action";
import store from "../store.js";
</script>
