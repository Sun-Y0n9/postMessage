<template>
    <div class="home">
        <div class="top">
            <top-nav></top-nav>
        </div>
        <div class="bot">
            <div class="bot-left">
                <left-nav></left-nav>
            </div>
            <div class="bot-right">
                <button>配置一下</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
         	
        }
    },
    methods:{
    
    },
    components:{

    },
    created(){
    
    },
    mounted(){
    
    }
}
</script>

<style scoped type="text/css">
.home{
    height: 100%;
}
.bot{
    height: calc(100% - 70px);
    display: flex;
}
.bot-left{
    height: 100%;
}
.bot-right{
    width: calc(100% - 180px);
    text-align: center;
}
.bot-right button {
    width: 50%;
    height: 40px;
    background: #dcdcdc;
    border: none;
}
</style>
