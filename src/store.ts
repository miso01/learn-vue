import { reactive, readonly, ref } from "vue";
import Action from "./utils/action";
import type { Element, Elements, FitView } from "@braks/vue-flow";
import { useVueFlow } from "@braks/vue-flow";


const elements = ref<Elements>([
    // {
    //   id: "1",
    //   type: "input",
    //   label: "Node 1",
    //   position: { x: 250, y: 5 },
    //   class: "light",
    // },
    // { id: "2", label: "Node 2", position: { x: 100, y: 100 }, class: "light" },
    // { id: "3", label: "Node 3", position: { x: 400, y: 100 }, class: "light" },
    // { id: "4", label: "Node 4", position: { x: 400, y: 200 }, class: "light" },
    // { id: "e1-2", source: "1", target: "2", animated: true },
    // { id: "e1-3", source: "1", target: "3" },
  ]);
const redoStack: Element[] = []; 

const state = reactive({
    vueFlowStore: useVueFlow({
        id: "main",
        defaultZoom: 1,
        minZoom: 0.2,
        maxZoom: 4,
      }),
    currentAction: Action.None,
    elements: elements,
    elementCounter: 0 ,
    configKonva : {
        width: window.innerWidth,
        height: window.innerHeight
    },
    redoStack: redoStack
})


const setAction = (action : Action) => state.currentAction = action

const setCanvasWidth = (width : number) => state.configKonva.width = width

const setCanvasHeight = (height : number) => state.configKonva.height = height

const updateSticker = (sticker: Element) => {
    const index = state.elements.findIndex(s => s.id === sticker.id);
    if(index !== -1){
        state.elements[index] = sticker
    }
}

const addSticker = (x:number, y:number) => {    
    state.elementCounter++;
    state.vueFlowStore.addNodes([
        {
          id: state.elementCounter.toString(),
          label: state.elementCounter.toString(),
          position: { x: x, y:y },
          class: "light",
        },
      ]);
    state.currentAction = Action.None
}

const undo = ()=> {
    if(elements.value.length > 0){
        state.currentAction = Action.Undo
        const sticker = state.elements.pop();
        redoStack.push(sticker!)
        setTimeout(function (){ 
            state.currentAction = Action.None    
        }, 150);
    }
}

const redo = () => {
    if(redoStack.length > 0){
        state.currentAction = Action.Redo
        const sticker = state.redoStack.pop();
        state.elements.push(sticker!)
        setTimeout(function (){ 
            state.currentAction = Action.None    
        }, 150);
    }
}

const getElements = () => state.elements;

const zoomIn = ()=> state.vueFlowStore.zoomIn()

const zoomOut = ()=> state.vueFlowStore.zoomOut()

const fitView = ()=>{
    state.currentAction = Action.FitView
    setTimeout(function (){ 
        state.vueFlowStore.fitView()
        state.currentAction = Action.None    
    }, 150);
}


export default{
    state,
    setAction,
    addSticker,
    updateSticker,
    setCanvasWidth,
    setCanvasHeight,
    undo,
    redo,
    getElements,
    fitView,
    zoomIn,
    zoomOut
}