<template>
    <div class="iframes">
        <div class="top">
            <top-nav></top-nav>
        </div>
        <div class="bot">
            <div class="bot-left">
                <left-nav></left-nav>
            </div>
            <div class="bot-right">
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'iframes',
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
.iframes{
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
    padding: 10px;
}
</style>
