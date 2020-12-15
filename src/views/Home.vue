<template>
    <div class="home">
        <render-demo :level="1">我是子组件1</render-demo>
        <!--<render-demo :level="2">我是子组件2</render-demo>-->
    </div>
</template>

<script>
import renderDemo from './demo/render-demo'

export default {
    name: 'Home',
    //用于当前 Vue 实例的初始化选项。需要在选项中包含自定义 property 时会有用处
    customOption: 'foo',
    created: function () {
        console.log(this.$options.customOption) // => 'foo'
    },
    components: {
        renderDemo
    },
    data(){
        return{
            userName: 'panpan'
        }
    }
}
</script>
