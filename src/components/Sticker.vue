<template>
  <div
    draggable="true"
    @click="stickerClick"
    @drag="drag"
    @drop="drop"
    class="inline-block rounded-md bg-red-500 w-24 h-12"
  ></div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "Sticker",
  props: {
    // sticker: {
    //     type: Object as PropType<Stickere>,
    //     required: true
    // }
  },
  setup() {
    const drag = (e: DragEvent) => {
      console.log("drag");
      console.log(e);
    };

    const stickerClick = (e: MouseEvent) => {
      console.log("stickerclick");
      console.log(e);
    };

    const drop = (e: DragEvent) => {
      console.log("dropped");
      console.log(e);
    };
    return {
      drag,
      stickerClick,
      drop,
    };
  },
});
</script>

<style scoped>
/* div{
    position: absolute;
    top: v-bind('props.sticker.y');
    left: 0;
    width: 30%;
    height: 30%;
} */
</style>
