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
                <!-- <button>配置一下</button> -->
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>名称</th>
                            <th>地址</th>
                            <th>联系方式</th>
                            <th>配置</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(ele, index) in tableData'>
                            <td>{{index + 1}}</td>
                            <td>{{ele.name}}</td>
                            <td>{{ele.addr}}</td>
                            <td>{{ele.phone}}</td>
                            <td><button @click='setting(ele)'>配置</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
         	tableData: [
                {
                    id: 1,
                    name: '设备1',
                    addr: '北京东城',
                    phone: '15056565690'
                }, {
                    id: 2,
                    name: '设备2',
                    addr: '北京西城',
                    phone: '13545456963'
                }, {
                    id: 3,
                    name: '设备3',
                    addr: '北京朝阳',
                    phone: '15147478565'
                }, {
                    id: 4,
                    name: '设备4',
                    addr: '北京昌平',
                    phone: '13472226836'
                }, {
                    id: 5,
                    name: '设备5',
                    addr: '北京海淀',
                    phone: '18745957545'
                }
            ]
        }
    },
    methods:{
        setting (ele) {
            this.$router.push({
                path: 'iframes',
                query: {
                    id: ele.id
                }
            })
        }
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
    padding: 10px;
}
.bot-right button {
    width: 70%;
    height: 40px;
    background: #dcdcdc;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
}
.bot-right table{
    width: 100%;
    border-collapse: collapse;
}
td, th{
    border: 1px solid;
    text-align: center;
    height: 50px;
}
</style>
