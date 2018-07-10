<template>
    <div>
        <h6 class=" mt-4 flex-start">以下信息将被复制到申请表上的相关字段中，保存的内容可以修改我的个人资料。</h6>
        <div class="mt-4 flex-start">
            1填写家庭信息
            <el-button class="ml-4" type="primary" @click="to('init-profile/parents')">填写</el-button>
        </div>
        <div class="mt-4 flex-start">
            2填写学生信息
            <el-button class="ml-4" type="primary" @click="to('init-profile/children')">填写</el-button>
        </div>
        <div class="mt-4 flex-end">
            <el-button>确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    to(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style>
</style>
