<template>
    <div>
    <!-- <iframe src="static/hr_sys/index.html"  -->
    <iframe  
    v-bind:src="reportUrl"
    class="pc iframe" 
    scrolling="auto" 
    ref="framePage"
    @load="deliverToken">
    </iframe>
    </div>
</template>

<script>
    import {BaseUrlShenPi} from '@/api/baseUrl'

export default {
  
  methods: {
    widthHeight() {
      this.searchTableHeight = window.innerHeight -146;
      this.searchTableWidth = window.innerWidth - 280
    },
     deliverToken () { 
       this.$refs.framePage.contentWindow.postMessage({type: 'token', data:this.$token.loadToken()}, '*')
      //  this.$refs.framePage.contentWindow.postMessage({type: 'tabParam', data:''}, '*')
      //  this.$refs.framePage.contentWindow.postMessage({type: 'currentTag', data:''}, '*')
    }

  },
  data() {
    return {

      // reportUrl: 'http://120.78.186.60:8113/',
      reportUrl: BaseUrlShenPi +  '/#/审批管理/审批管理/我发起的',
      searchTableHeight: 0,
      searchTableWidth: 0,
      token: '',
      isChildReady: false
    }
  },

  mounted() {
    window.onresize = () => {
      this.widthHeight(); // 自适应高宽度
    };
    this.$nextTick(function () {
      this.widthHeight();
    });
  },
  beforeMount() {
        addEventListener('message', function (evt) {
            if (evt.data.type !== 'childStatus') { return }
            this.isChildReady = evt.data.data
        })
    },
    watch: {
        isChildReady(isReady) {
            if (!isReady) { return }
            this.deliverToken()
        }
    }
}
</script>

<style>
.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px !important;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>