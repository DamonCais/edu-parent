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
  }
};
</script>

<style>
</style>
