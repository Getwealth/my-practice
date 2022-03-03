import button from './index.vue'
button.install=(Vue)=>{
    Vue.component(button.name,button)
}
export default button