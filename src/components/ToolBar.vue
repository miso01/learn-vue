<template>
    <div class="h-full w-11 bg-gray-200 rounded-md shadow-2xl inline-block">
        <AddSticker @click="onAddStickerClick"/>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import AddSticker from './icons/AddSticker.vue'
import Action from "../utils/Action";

export default defineComponent({
    name: "ToolBar",
    components: {
        AddSticker
    },
    setup(props, ctx){
        const onAddStickerClick = (e: MouseEvent) => {
            console.log("emitol som sticker clikc")
            ctx.emit('action-changed', {action: Action.AddSticker, event: e})
        }
        return {
            onAddStickerClick
        }
    }
})
</script>






