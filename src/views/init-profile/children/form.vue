<template>
  <div>
    <el-form label-position="right" label-width="120px" :model="forms" :rules="rules" class="form" ref="form">
      <el-form-item v-for="(item,key) in forms" :key="key" :prop="key" class="formItem" :label="item.label">
        <div v-if="item.type==='input'">
          <el-input :placeholder="item.placeholder" v-model="item.value" :type="item.inputType||'text'"></el-input>
          <span class="tips">{{item.tips}}</span>
        </div>
        <div v-if="item.type==='select'">
          <el-select v-model="item.value" :placeholder="item.placeholder">
            <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value">
            </el-option>
          </el-select>
        </div>
        <div v-if="item.type==='radio'">
          <el-radio-group v-model="item.value">
            <el-radio v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value"></el-radio>
          </el-radio-group>
        </div>
        <div v-if="item.type==='imginput'">
          <input class="imginput" type="file" :id="key" :ref="item.label" @change="imgChange(item.label)">
          <label class="imglabel" :for="key">上传图片</label>
          <span class="tips">{{item.tips}}</span>
          <div>
            <img :src="item.src" width="200px" height="200px" alt="">
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    forms: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      // forms: {
      //   relationShip: {
      //     label: "关系",
      //     placeholder: "请选择",
      //     type: "select",
      //     options: [
      //       {
      //         value: "father",
      //         label: "爸爸"
      //       },
      //       {
      //         value: "mother",
      //         label: "妈妈"
      //       }
      //     ],
      //     value: ""
      //   },
      //   name: { label: "姓名", type: "input", value: "" }
      // },
      // rules: {
      //   relationShip: [{ required: true, trigger: "blur" }]
      // }
    };
  },
  methods: {
    imgChange(key) {
      console.log(key);
      let inputDOM = this.$refs[key][0];
      if (!inputDOM.files[0] || inputDOM.files[0].type.indexOf("image") == -1)
        return;
      const formData = new FormData();
      formData.append("file", inputDOM.files[0]);
      this.upimg(formData, key);
    },
    upimg(formData, key) {
      console.log(key);
      console.log(formData);
    }
  }
};
</script>

<style>
</style>
