<template>

<WorkSpace @click="onWorkSpaceClick">
  <ToolBar @action-changed="onActionChanged"/>
    <template v-for="sticker in state.stickers">
      <Sticker :sticker="sticker" />
    </template>
  
</WorkSpace>
      
</template>


<script lang="ts">
import { defineComponent , reactive } from "vue";
import ToolBar from "@/components/ToolBar.vue";
import WorkSpace from "../components/WorkSpace.vue";
import Sticker from "../components/Sticker.vue";
import Action from "../utils/Action";
import type Stickere from "../model/Sticker";

export default defineComponent({
  name: "App",
  components: {
    ToolBar,
    WorkSpace,
    Sticker
  },
  setup(){

      const state = reactive({
        currentAction: Action.None,
        stickers : new Array<Stickere>(
          {
            id: 1,
            x:200,
            y: 200,
            width: 100,
            height: 100,
            color: "red",
            text: "pes"
          }
        )
      })

      const onActionChanged = ({action, event}:{action:Action, event: MouseEvent}) => {
          state.currentAction = action
          event.stopPropagation()
          console.log("action-changed")
          console.log(action)
      }

      const onWorkSpaceClick = (e: MouseEvent)=>{
          console.log("workspace click")
          console.log(e)
          if(state.currentAction === Action.AddSticker){
              state.currentAction = Action.None
              console.log("add sticker")
              console.log(e)
          }
      }
    return {state, onActionChanged, onWorkSpaceClick}
  }
});

</script>

