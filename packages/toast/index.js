import toast from "./index.vue"
toast.install = (Vue)=>{
    const toastConstructor = Vue.extend(toast);
    let $vm = new toastConstructor();
    let $el = $vm.$mount().$el;
    document.querySelector("body").appendChild($el);
    Vue.prototype.$toast= (option) =>{
        $vm.show = true
        if (!(option instanceof Object)) {
            //如果传的不是对象直接弹出
            $vm.message = option
        } else {
            $vm.message = option.message
            $vm.type = option.type
        }
        setTimeout(() => {
            $vm.show = false
        }, 2000)
    
    }
}
export default toast