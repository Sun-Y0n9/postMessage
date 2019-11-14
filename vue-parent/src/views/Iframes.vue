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
                <iframe src="http://localhost:8081/" ref='xmIframe' frameborder="0"></iframe>
            </div>
            <div class="bg" v-show='bgFlag'></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'iframes',
    data () {
        return {
         	bgFlag: false
        }
    },
    mounted(){
        let xmIframe = this.$refs['xmIframe'];
        xmIframe.addEventListener('load', () => {
            // iframe加载后, 向iframe发送参数
            let iframeWin = xmIframe.contentWindow;
            iframeWin.postMessage({
                method: 'xmParams',
                data: {
                    deviceId: this.$route.query.deviceId
                }
            }, '*');
            iframeWin.postMessage({
                method: 'navSize',
                data: {
                    width: 180,
                    height: 70
                }
            }, '*');
        });
        window.addEventListener('message', (e) => {
            if (e.data.method === 'showBg') {
                this.bgFlag = true;
            } else if (e.data.method === 'hideBg') {
                this.bgFlag = false;
            }
        });
    }
}
</script>

<style scoped type="text/css">
.iframes{
    height: 100%;
}
.bg{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
}
.bot{
    height: calc(100% - 70px);
    display: flex;
    z-index: 0;
}
.bot-left{
    height: 100%;
}
.bot-right{
    width: calc(100% - 180px);
    height: 100%;
    background-color: #fff;
    z-index: 20;
}
.bot-right iframe{
    width: 100%;
    height: 100%;
}
</style>
