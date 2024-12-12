import { createRouter,createWebHashHistory } from "vue-router";
import MaIne from "./components/MaIne.vue";



export default createRouter ({
    history: createWebHashHistory(),
    routes: [
       
        {path: '/',name:'home' ,component:MaIne},
       

    ]
})
