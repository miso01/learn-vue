<template>
  <v-stage class="absolute" :config="state.configKonva" @click="onCanvasClick">
    <v-layer>
      <v-rect
        v-for="sticker in state.stickers"
        :config="configRect(sticker)"
        @dragend="(e) => onDragEnd(e, sticker)"
      />
    </v-layer>
  </v-stage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Action from "../utils/action";
import type Sticker from "../model/sticker";
import store from "../store.js";
export default defineComponent({
  setup() {
    window.addEventListener("resize", () => {
      store.setCanvasWidth(window.innerWidth);
      store.setCanvasHeight(window.innerHeight);
    });

    const configRect = (sticker: Sticker) => {
      return {
        x: sticker.x,
        y: sticker.y,
        width: sticker.width,
        height: sticker.height,
        fill: sticker.color,
        cornerRadius: 10,
        draggable: true,
      };
    };

    const onCanvasClick = (e: any) => {
      if (store.state.currentAction === Action.AddSticker) {
        store.addSticker({
          id: 0,
          x: e.evt.x - 100,
          y: e.evt.y - 75,
          width: 200,
          height: 150,
          color: "#facc15",
          text: "",
        } as Sticker);
      }
    };

    const onDragEnd = (e, sticker: Sticker) => {
      store.updateSticker({
        ...sticker,
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
      });
    };

    return {
      state: store.state,
      configRect,
      onCanvasClick,
      onDragEnd,
    };
  },
});
</script>
