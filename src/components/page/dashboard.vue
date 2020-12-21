<template>
    <!-- 首页组件 -->
        <div style="display:initial;">
            <div style="width:200px; background-color:#0A1420; height:100%; float:left">
                <v-weather></v-weather>
            </div>
        <div style="margin-left: 200px;display:flex;flex-direction:column">

            <el-row style="margin:10px" :gutter="20">
                <el-col :span="14" style="height:350px">
                    <el-card style="padding:0">
                                                    <cardTitile :param="'日程管理'" />

                    <el-row style="padding:20px">
                        <el-col :span="10">

                            <v-calendar></v-calendar>
                        </el-col>
                        <el-col >
                            <p></p>
                        </el-col>
                    </el-row>
                    </el-card>

                </el-col>

                <el-col :span="10">
                    <el-card style="padding:0">
                                                    <cardTitile :param="'最新消息'" />

                    <el-row style="padding:20px">
                        <el-col :span="10">

                        </el-col>
                        <el-col >
                            <p></p>
                        </el-col>
                    </el-row>
                    </el-card>
                </el-col>
            </el-row>

            <el-row style="margin:10px" :gutter="20">
                <el-col>
                    <el-card style="padding:0">
                        <cardTitile :param="'处理事项'" />
                        <el-row :gutter="20" style="padding:20px">
                            <el-col :span="6" v-for="(item,index) in shenPiList" :key="index">
                                <div class="container">
                                    <div >

                                        <div class="line">
 {{item.label}}
</div>

<div class="line">
 有{{item.toDoCount}}个审批{{item.note}}
</div>

<div class="line">
    <el-button>点击查看</el-button>
</div>
                                    </div>

                            

                                </div>
                            </el-col>
                        </el-row>
                    </el-card>                    
                </el-col>

            </el-row>
        
        </div>        
        </div>

</template>

<script>
    import vCalendar from '../functionalComponent/calendar.vue'
    import vMessage from '../functionalComponent/tabMessage.vue'
    import vWeather from '../functionalComponent/weather'
    import spModel from '../individualComponent/spgl/sp/sp'
import cardTitile from '../common/block'
    // import VueCal from 'vue-cal'
    // import 'vue-cal/dist/vuecal.css'

    export default {
                data() {
            return {
                shenPiList:[
                    {icon: require('../../assets/img/logo1.png'),
                    label:'待我审批',
                    note:'待处理',
                    toDoCount: 20,
                    link:''},
                                        {icon:require('../../assets/img/logo2.png'),
                                        note:'已处理',
                    label:'我审批的',
                    toDoCount: 28,
                    link:''},
                                        {icon:require('../../assets/img/logo3.png'),
                                        note:'被驳回',
                    label:'我发起的',
                    toDoCount: 40,
                    link:''},
                                        {icon:require('../../assets/img/logo4.png'),
                    note:'抄送给我',

                    label:'抄送我的',
                    toDoCount: 19,
                    link:''}
                ]

            };
        },
        components: {
            vCalendar,
            vMessage,
            vWeather,
            spModel,
            cardTitile
            //VueCal
        }
    };
</script>

<style scoped>
.container{

border: 1px solid #DCE1F0;
border-radius: 4px;

display: flex;
    justify-content: center;
    align-items: center;
}


.line{
    text-align: center;
}

/deep/ .el-card__body {
    padding: 0px !important;
}
.grid-content {
    background-color: #ffffff;
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
    height:100%;
    justify-content:center;
    align-items:center;
    display:flex
}

.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>