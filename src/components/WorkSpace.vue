<template>
  <v-stage
    class="absolute border-2 border-indigo-600"
    :config="state.configKonva"
    @click="onCanvasClick"
  >
    <v-layer>
      <v-rect v-for="sticker in state.stickers" :config="configRect(sticker)" />
    </v-layer>
  </v-stage>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Action from "../utils/Action";
import type Sticker from "../model/sticker";
import store from "../store.js";
export default defineComponent({
  setup() {
    window.addEventListener("resize", () => {
      console.log("resized");
      store.setCanvasWidth(window.innerWidth);
      store.setCanvasHeight(window.innerHeight);
    });

    const configRect = (sticker: Sticker) => {
      return {
        x: sticker.x,
        y: sticker.y,
        width: sticker.width,
        height: sticker.height,
        fill: "red",
        cornerRadius: 10,
        draggable: true,
      };
    };

    const onCanvasClick = (e: any) => {
      if (store.state.currentAction === Action.AddSticker) {
        console.log(typeof e);
        store.addSticker({
          id: 0,
          x: e.evt.x,
          y: e.evt.y,
          width: 200,
          height: 150,
          color: "red",
          text: "smth",
        } as Sticker);
        store.setAction(Action.None);
      }
    };

    return {
      state: store.state,
      configRect,
      onCanvasClick,
    };
  },
});
</script>
