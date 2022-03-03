<template>
    <div>
        <button class="di-button" v-on="$listeners" :class="[type?`di-button-${type}`:'']">
            <slot></slot>
        </button>
    </div>
</template>
<script>
    export default{
        name:'di-button',
        props:{
            type:String
        }
    }
</script>
<style>
    .di-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.di-button:focus, .di-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.di-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
}
.di-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.di-button--primary:focus, .di-button--primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
.di-button--primary.is-active, .di-button--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
}
</style>