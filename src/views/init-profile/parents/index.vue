<template>
  <div>
    <div class="mb-4">
      <el-button size="small" @click="addTab">
        add a relationship
      </el-button>
    </div>
    <el-tabs v-model="editTabsName" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(tabs, index) in editTabs" :key="index" :label="tabs.forms.relationship.value||'new relationship'" :name="tabs.name">
        <parents-form :key="index" :forms="tabs.forms" :rules="tabs.rules" />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>


<script>
import { forms, rules } from "./config";
import parentsForm from "./form";
export default {
  mounted() {
    this.addTab();
  },
  data() {
    var _validateUsername = (rule, obj, callback) => {
      if (obj.value.trim() === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      editTabsName: "1",
      editTabs: [],
      forms: forms,
      rules: rules,
      tabIndex: 0
    };
  },
  methods: {
    addTab() {
      let newTabName = ++this.tabIndex + "";
      let forms = JSON.parse(JSON.stringify(this.forms));
      this.editTabs.push({
        forms: forms,
        rules: this.rules,
        name: newTabName
      });
    },
    removeTab(targetName) {
      console.log(targetName);
      this.editTabs = this.editTabs.filter(tab => tab.name !== targetName);
    }
  },
  components: {
    parentsForm
  }
};
</script>

<style>
</style>
