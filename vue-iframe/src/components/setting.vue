<template>
  <div class="setting">
    <div class='curId' v-show='!!deviceId'>
      此设备的设备id为: {{deviceId}}
    </div>
    <div>
       <form action="#">
      <div class='form-item'>
        <label for="s1">设置1</label>
        <input type="text" id='s1'>
      </div>
      <div class='form-item'>
        <label for="s2">设置2</label>
        <input type="text" id='s2'>
      </div>
      <div class='form-item'>
        <label for="s3">设置3</label>
        <input type="text" id='s3'>
      </div>
      <div class='form-item'>
        <label for="s4">设置4</label>
        <input type="text" id='s4'>
      </div>
      <div class='form-item'>
        <label for="s5">设置5</label>
        <input type="text" id='s5'>
      </div>
      <div class='form-item'>
        <label for="s6">设置6</label>
        <select name="s6" id="s6">
          <option value="1">选项1</option>
          <option value="2">选项2</option>
          <option value="3">选项3</option>
        </select>
      </div>
      <div class='form-item'>
        <button type='button' @click='save'>保存</button>
      </div>
    </form>
    </div>
    <div class="confirm_wrapper" v-show='model'>
      <div class="confirm">
        <p>是否确认保存?</p>
        <div>
          <button @click='cancel'>取消</button>
          <button @click='confirmSave'>保存</button>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      deviceId: '',
      model: false,
      offset: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    save () {
      this.model = true;
      // 调整弹出框的位置
      let dialog = document.getElementsByClassName('confirm')[0];
      dialog.style.left = 'calc(50% - ' + this.offset.width / 2 + 'px)';
      dialog.style.top = 'calc(50% - ' + this.offset.height / 2 + 'px)';
      // 通知父级显示背景层
      window.parent.postMessage({
        method: 'showBg',
      }, '*');
    },
    cancel () {
      this.model = false;
      // 通知父级, 隐藏背景层
      window.parent.postMessage({
        method: 'hideBg',
      }, '*');
    },
    confirmSave () {
      this.model = false;
      console.log('发送数据');
      // 通知父级, 隐藏背景层
      window.parent.postMessage({
        method: 'hideBg',
      }, '*');
      return false;
    },
    getOldCfg (did) {
      console.log('通过获取的设备id: ' + did + ',请求当前设备的配置信息');
    }
  },
  mounted () {
    window.addEventListener('message', (e) => {
      if (e.data.method === 'xmParams') {
        this.deviceId = e.data.data.deviceId;// 本地保存设备id
        this.getOldCfg(this.deviceId);// 获取设备当前的配置, 进行展示
      } else if (e.data.method === 'navSize') {
        this.offset = e.data.data; // 本地存储
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.confirm_wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
.confirm{
  position: fixed;
  width: 400px;
  height: 200px;
  left: 50%;
  top: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;
}
.confirm p{
  margin-top: 50px;
  margin-bottom: 20px;
}
.confirm button{
  width: 60px;
  height: 30px;
  margin: 10px;
  border: none;
  cursor: pointer;
  outline: none;
}
.curId{
  text-align: center;
}
form{
  width: 460px;
  padding: 10px;
  margin: 0 auto;
}
.form-item{
  margin-bottom: 30px;
  width: 440px;
  text-align: center;
}
.form-item input,
.form-item select{
  width: 340px;
  height: 40px;
  padding-left: 12px;
  font-size: 16px;
}
.form-item label {
  font-size: 16px;
  width: 100px;
  display: inline-block;
  text-align: center;
}
.form-item button{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
}
</style>
