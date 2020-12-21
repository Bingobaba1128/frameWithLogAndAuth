<template>
  <div style="height:50px">
    <div style="display:flex;align-items: center;height:49px">
      <p class="header_title">{{ param }}</p>
    </div>

    <div style="padding: 0">
      <p class="underLine" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    param: String,
  },
  data() {
    return {
    }
  },
  methods: {
    childMethod() {
      this.$parent.backToMain()
    }
  }
}
</script>

    <style scoped>
    .header_title{
          font-size:18px;
font-family:Microsoft YaHei;
font-weight:400;
padding-bottom: 11px;
padding-top: 21px;

color: #333333;
    }
        .header_title::before {
        content:'';
            font-size: 15px;
            border-left:4px solid #4A76E2;
            padding-right: 16px;
        }
        .underLine {
  padding-right: 20px;
  border-bottom:1px solid #ebeef5;
  padding-left: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 99.5%;
}
.underLine {
    padding-right: 20px;
    
    border-bottom:1px solid #ebeef5 !important;
    padding-left: 20px;
}
    </style>
