<template>
  <VueFlow
    id="main"
    v-model="store.state.elements"
    class="absolute vue-flow-basic-example"
  >
    <Background />
    <MiniMap />
  </VueFlow>
</template>

<script lang="ts" setup>
import { Background, Controls, MiniMap, VueFlow } from "@braks/vue-flow";
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
    store.addSticker(e.x, e.y);
  }
});
</script>
