<template>
  <div class="dashboard">

    <el-row class="my-row">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="12">
        <h5 class="mb-5 flex-center">招生公告</h5>
        <div>
          <el-button @click="toUrl('/admissions/create')">入学申请</el-button>
        </div>

        <div class="mt-4 mb-4">申请进度</div>
        <my-table :gridData="gridData" :showData="showData" class="rowClick">
          <!-- 编辑 -->
        </my-table>
      </el-col>
    </el-row>

  </div>
</template>

  <script>
import myTable from "./myTable";

export default {
  data() {
    return {
      gridData: [],
      showData: [
        // { prop: 'sortIndex', label: 'CATEGORY_SORT_INDEX', width: 180, type: 'string', sortable: 'custom' },
        {
          prop: "id",
          label: "报名编号",
          width: 120,
          type: "string"
        },
        {
          prop: "name",
          label: "学生姓名",
          width: 120,
          type: "string"
        },
        {
          prop: "grade",
          label: "学年",
          width: 120,
          type: "string"
        }
      ]
    };
  },
  components: {
    myTable
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  width: 100%;
  .my-row {
    display: flex;
    justify-content: center;
  }
}
</style>

