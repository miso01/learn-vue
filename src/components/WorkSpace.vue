<template>
  <canvas
    @click="onCanvasClick"
    id="canvas"
    class="absolute border-2 border-indigo-600"
  ></canvas>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Action from "../utils/Action";
import store from "../store.js";
import {roundedRect } from "../utils/Canvas";

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  if (canvas != null) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

window.addEventListener("resize", () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  if (canvas != null) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

export default defineComponent({
  name: "WorkSpace",
  setup(props, context) {
    

    const onCanvasClick = (e: MouseEvent) => {
      console.log(e);
      const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (ctx != null && store.state.currentAction === Action.AddSticker) {
        ctx.fillStyle = "red";
        roundedRect(ctx, e.x - 100, e.y - 75, 200, 150, 10);
        store.setAction(Action.None);
      }
    };

    return { onCanvasClick };
  },
});
</script>
