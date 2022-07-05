<template>
  <VueFlow
    id="main"
    v-model="store.state.elements"
    class="absolute vue-flow-basic-example"
  >
    <Background />
    <MiniMap />
    <Controls />
    <div style="position: absolute; right: 10px; top: 10px; z-index: 4">
      <button style="margin-right: 5px" @click="resetTransform">
        reset transform
      </button>
      <button style="margin-right: 5px" @click="updatePos">change pos</button>
      <!-- <button style="margin-right: 5px" @click="toggleclass">
        toggle class
      </button> -->
    </div>
  </VueFlow>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Background,
  Controls,
  MiniMap,
  VueFlow,
  isNode,
  useVueFlow,
} from "@braks/vue-flow";
import store from "../store";
import Action from "../utils/action";

store.state.vueFlowStore.onPaneReady(({ fitView }) => {
  fitView();
});
store.state.vueFlowStore.onConnect((params) =>
  store.state.vueFlowStore.addEdges([params])
);

store.state.vueFlowStore.onPaneClick((e) => {
  if (store.state.currentAction == Action.AddSticker) {
    //console.log()
    store.addSticker(e.x, e.y);
  }
  console.log("pane clicked", e);
});

const updatePos = () => {};
// elements.value.forEach((el) => {
//   if (isNode(el)) {
//     el.position = {
//       x: Math.random() * 400,
//       y: Math.random() * 400,
//     };
//   }
// });

const resetTransform = () =>
  store.state.vueFlowStore.setTransform({ x: 0, y: 0, zoom: 1 });
// const toggleclass = () =>
//   store.value.forEach(
//     (el) => (el.class = el.class === "light" ? "dark" : "light")
//   );
</script>
