<template>
    <div class="signup">
        <el-row class="my-row">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12">
                <el-form label-position="right" label-width="120px" :model="forms" :rules="rules" class="form" ref="form">
                    <el-form-item v-for="(item,key) in forms" :key="key" :prop="key" class="formItem" :label="item.label">
                        <div v-if="item.type==='input'">
                            <el-input :placeholder="item.placeholder" v-model="item.value" :type="item.password?'password':'text'"></el-input>
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
                    <el-form-item>
                        <el-checkbox v-model="checked">我已同意
                            <a @click="dialogVisible=true" href="#">条例和条件</a>
                            <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
                                <span>这是一段信息</span>
                                <span slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                </span>
                            </el-dialog>
                        </el-checkbox>
                    </el-form-item>
                    <div class="mt-3 flex-center">
                        <el-button @click="to('check-email')">
                            注册
                        </el-button>
                    </div>
                    <div class="mt-3 flex-end">
                        <el-button @click="to('login')" type="text">返回登录页面</el-button>
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
.signup {
  display: flex;
  height: 100%;
  align-items: center;
  .my-row {
    flex: 1;
    padding: 0 10px;
  }
}
</style>
