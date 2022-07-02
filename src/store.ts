import { reactive, readonly } from "vue";
import Action from "./utils/Action";
import type Sticker from "./model/sticker";

const stickers: Sticker[] = []; 

const store = reactive({
    currentAction: Action.None,
    stickers: stickers,
    configKonva : {
        width: window.innerWidth,
        height: window.innerHeight
    }
})


const setAction = (action : Action) => store.currentAction = action

const setCanvasWidth = (width : number) => store.configKonva.width = width
const setCanvasHeight = (height : number) => store.configKonva.height = height

const addSticker = (sticker : Sticker) => store.stickers.push(sticker)


export default{
    state: readonly(store),
    setAction,
    addSticker,
    setCanvasWidth,
    setCanvasHeight
}