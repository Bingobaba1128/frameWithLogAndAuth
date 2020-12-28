<template>
  <div style="height:50px">
    <div style="display:flex;align-items: center;height:49px">
      <p class="header_title">{{ param }}</p>
      <div style="margin-left:auto;display:flex;justify-content:center;align-item:center;padding:10px">
                           <img  :src="userIcon" style="">

      </div>

    </div>

    <div style="padding: 0">
      <p class="underLine" />
    </div>
  </div>
</template>

<script>
import userIcon from "../../assets/img/tianjiaricheng@2x.png"

export default {
  props: ['param','userIcon'],

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
display: flex;
justify-content: center;

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
