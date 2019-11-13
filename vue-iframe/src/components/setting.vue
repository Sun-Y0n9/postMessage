<template>
  <div class="setting">
    <div class='curId' v-show='id != ""'>此设备的id为{{id}}</div>
    <form action="/">
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
        <button>保存</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$router.query.id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
