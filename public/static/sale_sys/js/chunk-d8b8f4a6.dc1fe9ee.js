(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8b8f4a6"],{b64b:function(t,e,n){var a=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),r=s((function(){o(1)}));a({target:"Object",stat:!0,forced:r},{keys:function(t){return o(i(t))}})},eee5:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex",width:"100%",height:"100%"}},[n("div",{staticStyle:{width:"30%",height:"100%",overflow:"auto"}},[n("div",{staticClass:"custom-tree-container",staticStyle:{background:"#eee",height:"100%"}},[n("el-tree",{attrs:{data:t.list,"node-key":"id","highlight-current":"","default-expand-all":"",props:t.defaultProps,"expand-on-click-node":!1},on:{"node-click":t.handleNodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node;return n("span",{staticClass:"custom-tree-node"},[n("span",{staticClass:"company_tree_style"},[t._v(t._s(a.label))])])}}])})],1)]),n("div",{staticStyle:{width:"100%",background:"#ccc",padding:"15px"}},[n("el-button",{attrs:{size:"mini",round:"",type:"primary",disabled:t.parentIdDisabled},on:{click:t.add}},[t._v("添加")]),n("el-button",{attrs:{size:"mini",round:"",type:"info",disabled:t.stateDisabled},on:{click:t.modify}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",round:"",type:"danger"},on:{click:t.romove}},[t._v("注销")]),n("div",{staticStyle:{margin:"15px 0 0 0"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark",border:!0,"row-style":{height:"20px"},"cell-style":{padding:"0px"}}},[n("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),n("el-table-column",{attrs:{property:"gangHao",label:"员工编号",align:"center"}}),n("el-table-column",{attrs:{property:"jNo",label:"姓名",align:"center"}}),n("el-table-column",{attrs:{property:"maQuanity",label:"公司",align:"center"}}),n("el-table-column",{attrs:{property:"lot",label:"部门",align:"center"}}),n("el-table-column",{attrs:{property:"clothId",label:"入职时间",align:"center"}}),n("el-table-column",{attrs:{property:"factQuanity",label:"出生年月",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{type:"number",min:"0"},on:{change:function(n){return t.confirmWriteNum(e.row)}},model:{value:e.row.factQuanity,callback:function(n){t.$set(e.row,"factQuanity",n)},expression:"scope.row.factQuanity"}})]}}])}),n("el-table-column",{attrs:{property:"cangku",label:"联系电话",align:"center"}}),n("el-table-column",{attrs:{property:"state",label:"状态",align:"center"}})],1)],1)],1),n("el-dialog",{attrs:{width:"25%",title:t.companyTitle,visible:t.companyVisible,"append-to-body":"",closeOnClickModal:t.closeOnClickModal,closeOnPressEscape:t.closeOnPressEscape},on:{"update:visible":function(e){t.companyVisible=e}}},[n("div",{staticStyle:{display:"flex",justifyContent:"center",lineHeight:"50px"}},[n("div",{staticStyle:{margin:"0 8px",fontSize:"18px"}},[t._v("公司名称")]),n("el-input",{staticStyle:{width:"180px"},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.addCompany(e)}}},[t._v("提交")])],1)]),n("el-dialog",{attrs:{width:"25%",title:t.departmentTitle,visible:t.departmentVisible,"append-to-body":"",closeOnClickModal:t.closeOnClickModal,closeOnPressEscape:t.closeOnPressEscape},on:{"update:visible":function(e){t.departmentVisible=e}}},[n("div",{staticStyle:{display:"flex",justifyContent:"center",lineHeight:"50px"}},[n("div",{staticStyle:{margin:"0 8px",fontSize:"18px"}},[t._v("部门名称")]),n("el-input",{staticStyle:{width:"180px"},model:{value:t.departmentName,callback:function(e){t.departmentName=e},expression:"departmentName"}})],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.addDepartment(e)}}},[t._v("提交")])],1)])],1)},i=[],o=(n("b64b"),n("f292")),s=n("b383"),r=n.n(s),c={name:"jtgl",data:function(){return{id:1e3,curNode:null,isParentId:"",selectDeptId:"",switchType:"",companyTitle:"",departmentTitle:"",companyName:"",departmentName:"",closeOnClickModal:!1,closeOnPressEscape:!1,companyVisible:!1,departmentVisible:!1,parentIdDisabled:!1,stateDisabled:!1,defaultProps:{children:"children",label:"deptName"},list:[{deptName:"集团",state:20,children:[]}]}},methods:{handleNodeClick:function(t){var e=this;if(this.selectDeptId=t.deptId,this.isParentId=t.parentId,this.selectDeptId||(this.selectDeptId=0),this.curNode=t,20==this.curNode.state)this.stateDisabled=!0;else{this.stateDisabled=!1;var n={parentId:this.curNode.deptId};o["d"](n).then((function(t){e.$set(e.curNode,"children",t.data)})).catch((function(t){console.log(t)}))}this.curNode.state||0==this.curNode.parentId?this.parentIdDisabled=!1:this.parentIdDisabled=!0},add:function(){this.switchType=1,this.curNode?0==this.curNode.parentId?(this.departmentName="",this.departmentVisible=!0,this.departmentTitle="部门新增"):(this.companyName="",this.companyVisible=!0,this.companyTitle="公司新增"):this.$message({message:"请先选择要添加的内容",duration:2e3})},modify:function(){this.switchType=2,this.companyName=this.curNode.deptName,this.curNode?0==this.curNode.parentId?(this.companyName=this.curNode.deptName,this.companyVisible=!0,this.companyTitle="公司修改"):(this.departmentName=this.curNode.deptName,this.departmentVisible=!0,this.departmentTitle="部门修改"):this.$message({message:"请先选择要添加的内容",duration:2e3})},romove:function(){var t=this;this.curNode?this.$confirm("确认注销?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={deptId:t.selectDeptId,state:"1"};o["k"](r.a.stringify(e)).then((function(e){if(200==e.code)for(var n=0,a=Object.keys(t.curNode);n<a.length;n++){var i=a[n];t.$delete(t.curNode,i)}else t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)}))})).catch((function(){})):this.$message({message:"请先选择要删除的内容",duration:2e3})},addCompany:function(){var t=this;if(console.log(this.selectDeptId),this.companyName)if(1==this.switchType){var e={deptName:this.companyName,parentId:this.selectDeptId,orderNo:1};console.log(e),o["g"](e).then((function(e){console.log(e),200==e.code?(t.refreshDepartment(),t.companyVisible=!1):t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)}))}else{var n={deptName:this.companyName,parentId:this.selectDeptId,orderNo:1,deptId:this.selectDeptId,state:"0"};o["n"](n).then((function(e){t.$set(t.curNode,"deptName",t.companyName),t.companyVisible=!1})).catch((function(t){console.log(t)}))}else this.$message({message:"公司名称不能为空",duration:2e3})},addDepartment:function(){var t=this;if(this.departmentName)if(1==this.switchType){var e={deptName:this.departmentName,parentId:this.selectDeptId,orderNo:1};o["g"](e).then((function(e){200==e.code?(t.refreshDepartment(),t.departmentVisible=!1):t.$message({message:e.msg,duration:2e3})})).catch((function(t){console.log(t)}))}else{var n={deptName:this.departmentName,parentId:this.selectDeptId,orderNo:1,deptId:this.selectDeptId,state:"0"};o["n"](n).then((function(e){t.$set(t.curNode,"deptName",t.departmentName),t.departmentVisible=!1})).catch((function(t){console.log(t)}))}else this.$message({message:"部门名称不能为空",duration:2e3})},refreshDepartment:function(){var t=this,e={parentId:this.selectDeptId};o["d"](e).then((function(e){t.$set(t.curNode,"children",e.data)})).catch((function(t){console.log(t)}))},loadList:function(){var t=this,e={parentId:0};o["d"](e).then((function(e){t.$set(t.list[0],"children",e.data)})).catch((function(t){console.log(t)}))}},created:function(){this.loadList()}},l=c,d=n("2877"),u=Object(d["a"])(l,a,i,!1,null,"22d8ec22",null);e["default"]=u.exports},f292:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"p",(function(){return r})),n.d(e,"l",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"m",(function(){return u})),n.d(e,"j",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"n",(function(){return f})),n.d(e,"k",(function(){return b})),n.d(e,"e",(function(){return y})),n.d(e,"h",(function(){return g})),n.d(e,"o",(function(){return N}));var a=n("751a"),i=function(t){return Object(a["a"])({url:"/ERP/selectconfigStorage",method:"get",params:t})},o=function(t){return Object(a["a"])({url:"/ERP/selBasic",method:"get",params:t})},s=function(t){return Object(a["a"])({url:"/ERP/addconfigStorage",method:"post",data:t})},r=function(t){return Object(a["a"])({url:"/ERP/editconfigStorage",method:"post",data:t})},c=function(t){return Object(a["a"])({url:"/ERP/deleteconfigStorage",method:"post",data:t})},l=function(t){return Object(a["a"])({url:"/ERP/selBasic",method:"get",params:t})},d=function(t){return Object(a["a"])({url:"/ERP/addBasic",method:"post",data:t})},u=function(t){return Object(a["a"])({url:"/ERP/editBasic",method:"post",data:t})},p=function(t){return Object(a["a"])({url:"/ERP/delBasic",method:"post",data:t})},m=function(t){return Object(a["a"])({url:"/ERP/selectDepartment",method:"get",params:t})},h=function(t){return Object(a["a"])({url:"/ERP/addDepartment",method:"post",data:t})},f=function(t){return Object(a["a"])({url:"/ERP/editDepartment",method:"post",data:t})},b=function(t){return Object(a["a"])({url:"/ERP/delDepartment",method:"post",data:t})},y=function(t){return Object(a["a"])({url:"/ERP/selectEmplyee1",method:"get",params:t})},g=function(t){return Object(a["a"])({url:"/ERP/addEmployee",method:"post",data:t})},N=function(t){return Object(a["a"])({url:"/ERP/editEmployee",method:"post",data:t})}}}]);