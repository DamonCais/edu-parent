<template>
    <div>
        <el-form label-position="right" label-width="120px" :model="forms" :rules="rules" class="form" ref="form">
            <el-form-item v-for="(item,key) in forms" :key="key" :prop="key" class="formItem" :label="item.label">
                <div v-if="item.type==='input'">
                    <el-input :placeholder="item.placeholder" v-model="item.value" :type="item.inputType||'text'"></el-input>
                    <span class="tips">{{item.tips}}</span>
                </div>
                <div v-if="item.type==='select'">
                    <el-select v-model="item.value" clearable :placeholder="item.placeholder">
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
import { forms, rules } from "./config.js";
export default {
  data() {
    return {
      forms: forms,
      rules: rules,
      checked: false,
      dialogVisible: false
    };
  },
  methods: {
    to(url) {
      this.$router.push(url);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.formItem {
  position: relative;
  .tips {
    color: #aaa;
    font-size: 12px;
    line-height: 10px;
  }
  .imginput {
    position: absolute;
    left: -9999px;
  }
  .imglabel {
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    background: #409eff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    margin: 10px 0;
  }
}
</style>


