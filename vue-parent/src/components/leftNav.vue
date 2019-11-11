<template>
    <div class="leftNav">
      <ul>
          <router-link tag='li' to='/'>主页</router-link tag='li' to='/'>
          <router-link tag='li' to='/iframes'>配置页</router-link tag='li' to='/'>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'leftNav',
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
.leftNav{
	height: 100%;
    width: 180px;
    background-color: greenyellow;
}
li{
    height: 40px;
    line-height: 40px;
    box-shadow: 0 0 10px #20b1aa inset;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
}
.router-link-exact-active.router-link-active{
    background-color: #20b1aa;
}
</style>
