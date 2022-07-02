<template>

<WorkSpace/>
<ToolBar/>
    <!-- <template v-for="sticker in state.stickers">
      <Sticker :sticker="sticker" />
    </template> -->
      
</template>


<script lang="ts">
import { defineComponent , reactive } from "vue";
import ToolBar from "@/components/ToolBar.vue";
import WorkSpace from "../components/WorkSpace.vue";
import Sticker from "../components/Sticker.vue";
import Action from "../utils/Action";


export default defineComponent({
  name: "App",
  components: {
    ToolBar,
    WorkSpace,
    Sticker
  },
  setup(){
  }
});

</script>

