import { reactive, readonly } from "vue";
import Action from "./utils/action";
import type Sticker from "./model/sticker";

const stickers: Sticker[] = []; 
const redoStack: Sticker[] = []; 

const store = reactive({
    currentAction: Action.None,
    stickers: stickers,
    stickerCounter:0,
    configKonva : {
        width: window.innerWidth,
        height: window.innerHeight
    },
    redoStack: redoStack
})


const setAction = (action : Action) => store.currentAction = action

const setCanvasWidth = (width : number) => store.configKonva.width = width

const setCanvasHeight = (height : number) => store.configKonva.height = height

const updateSticker = (sticker: Sticker) => {
    const index = store.stickers.findIndex(s => s.id === sticker.id);
    if(index !== -1){
        store.stickers[index] = sticker
    }
}

const addSticker = (sticker : Sticker) => {
    sticker.id = store.stickerCounter;
    store.stickerCounter++;
    store.stickers.push(sticker)
    store.currentAction = Action.None
}

const undo = ()=> {
    if(stickers.length > 0){
        store.currentAction = Action.Undo
        const sticker = store.stickers.pop();
        redoStack.push(sticker!)
        setTimeout(function (){ 
            store.currentAction = Action.None    
        }, 150);
    }
}

const redo = () => {
    if(redoStack.length > 0){
        store.currentAction = Action.Redo
        const sticker = store.redoStack.pop();
        store.stickers.push(sticker!)
        setTimeout(function (){ 
            store.currentAction = Action.None    
        }, 150);
    }
}


export default{
    state: readonly(store),
    setAction,
    addSticker,
    updateSticker,
    setCanvasWidth,
    setCanvasHeight,
    undo,
    redo,
}