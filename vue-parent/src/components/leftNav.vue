<template>
    <div class="leftNav">
      <ul>
            <router-link
                tag='li'
                :class='{linkActive: curRouter == "home"}'
                to='/'>
                主页
            </router-link>
            <router-link
                tag='li'
                v-if='$route.path === "/iframes"'
                :class='{linkActive: curRouter == "iframes"}'
                to='/iframes'>
                配置页
            </router-link>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'leftNav',
    data () {
        return {
         	curRouter: 'home'
        }
    },
    created(){
        this.curRouter = this.$route.name;
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
.linkActive{
    background-color: #20b1aa;
}
</style>
