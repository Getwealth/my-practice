<template>
    <div class="di-toast" :class="`di-toast--${type}`" v-if="show">
        {{message}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:"",
            show:false,
            type:""
        }
    }
}
</script>
<style>
.di-toast{
    width: 60%;
    width: 200px;
    background: rgb(15, 15, 15);
    padding:3px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    position: fixed;
    left: calc(50% - 100px);
    top: 200px;
}
.di-toast--warning{
    background: #FDF6EC;
    color: #E6A28B;
}
.di-toast--success{
    background: #F0F9EB;
    color: #93C26D;
}
</style>