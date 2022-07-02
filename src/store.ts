import { reactive, readonly } from "vue";
import Action from "./utils/Action";
import type Sticker from "./model/Sticker";

const stickers: Sticker[] = []; 

const store = reactive({
    currentAction: Action.None,
    stickers: stickers,
})


const setAction = (action : Action) => store.currentAction = action


export default{
    state: readonly(store),
    setAction
}