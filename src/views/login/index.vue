<template>
  <div class="login">
    <el-row class="my-row">
      <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
        <el-form label-position="right" label-width="120px" :model="forms" :rules="rules" ref="form">
          <el-form-item v-for="(item,key) in forms" :key="key" :prop="key" class="formItem" :label="item.label">
            <div v-if="item.type==='input'">
              <el-input :placeholder="item.placeholder" v-model="item.value"></el-input>
              <span class="tips">{{item.tips}}</span>
            </div>
            <div v-if="item.type==='upload'">
              <input class="imginput" type="file" :id="key" :ref="key">
              <label class="imglabel" :for="key">上传图片</label>
              <span class="tips">{{item.tips}}</span>
              <div>
                <img :src="item.src" width="200px" height="200px" alt="">
              </div>
            </div>
          </el-form-item>
          <div class="flex-end">
            <el-button @click="to('reset-password')" type="text">忘记密码</el-button>
          </div>
          <div class="mt-3 flex-center">
            <el-button>
              登录
            </el-button>

          </div>
          <div class="mt-3 flex-center">
            还没有账号?
            <a @click="to('signup')" href="#">注册</a>
          </div>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { forms, rules } from "./config.js";
export default {
  data() {
    return {
      forms: forms,
      rules: rules
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
.login {
  display: flex;
  height: 100%;
  align-items: center;
  .my-row {
    flex: 1;
  }
}
</style>



