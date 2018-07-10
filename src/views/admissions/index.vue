<template>
    <div>
        <el-row class="my-row">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12">
                <router-view />
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-row {
  display: flex;
  justify-content: center;
}
</style>
