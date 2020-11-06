<template>
  <div class="child3">
    <el-table
      :data="initAllData"
      :border="true"
      highlight-current-row
      max-height="500"
      style="width: 100%"
      :row-style="{height:'20px'}"
      :cell-style="{padding:'0px'}"
    >
      <el-table-column type="index" label="序号" align="center"></el-table-column>
      <el-table-column property="approveNo" label="审批单号" align="center" width="180"></el-table-column>
      <el-table-column property="pkNo" label="待审批单号" align="center" width="180"></el-table-column>
      <el-table-column property="approveStyle" label="标题" align="center" width="180"></el-table-column>
      <el-table-column property="faQiTime" label="申请时间" align="center" width="180"></el-table-column>
      <el-table-column property="approveState" label="审批状态" align="center" width="200"></el-table-column>
      <el-table-column property="address" label="操作" align="center" width="180" fixed="right">
        <template slot-scope="scope">
          <el-button @click.native="editorClick(scope.row)" type="warning" size="mini" style="margin:2px;">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as api from '../../../api/api';

export default {
  name: "child3",
  data() {
    return {
      initAllData:'',
    };
  },
      created() {
    this.initData()
  },
  methods: {
        initData(){
           api.getSpInfo(this.$ajax)
                .then(res => {
                  this.initAllData = res.data.data
                    window.console.log(res.data.data)
                });    
    },
    editorClick(data){
      window.open(data.url)
    }
  },
  mounted() {
    let id = JSON.parse(sessionStorage.getItem('id'));
    this.id = id;
    this.approveContent();
  }
};
</script>