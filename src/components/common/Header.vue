<template>
    <div class="header">
            <div class="logo">
                <img  :src="imgUrl">
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="border-bottom:none;background-color: #5C8BFA;">
                <el-menu-item index="1" @click="backToConsole">工作台</el-menu-item>
                <el-menu-item index="2" @click="toChengYiSystem">成衣系统</el-menu-item>
                <el-menu-item index="3" @click="toClothingSystem">服装系统</el-menu-item>
                <el-menu-item index="4"><a @click="jumpToSp">审批管理</a></el-menu-item>
            </el-menu>
            <div class="header-user-con">
            <el-dropdown class="flex-header-div" style="display:flex">
                <div class="user-avator">
                     <img  :src="userIcon" style="padding:10px;width:37px">
                </div>
                <span class="el-dropdown-link" style="color:#fff;font-size:18px">
                    {{ user.nickname }}
                </span>
            </el-dropdown>
                            <div class="flex-header-div btn-logout">
                    <i class="el-icon-message" style="color:#fff;font-size:32px;padding-right:5px" ></i>
                    <span style="color:#fff;font-size:18px">消息</span>
                </div>  
                <div class="flex-header-div btn-logout" @click="userLogout">
                    <i class="el-icon-switch-button" style="color:#fff;font-size:32px;padding-right:5px" ></i>
                    <span style="color:#fff;font-size:18px">退出</span>
                </div>  
            </div>
    </div>
</template>

<script>
    import bus from '../../utils/bus';
    import * as api from '../../api/api.js';
    import querystring from "querystring";
    import imgUrl from "../../assets/img/北江logo@2x.png"
    import userIcon from "../../assets/img/touxiang@2x.png"
    import imgCompany from '../../assets/img/icon_company.png'

    export default {
        data() {
            return {
                collapse: false,
                name: 'Admin',
                showSublist: false,
                user: '',
                showCompanyName:'',
                nav: '',
                navIndex: -1,
                companyName:'',
                companyNewDetail:[],
                switchCompany: this.$store.displayName,
                imgUrl:imgUrl,
                userIcon:userIcon,
                imgCompany:imgCompany

            };
        },

        computed:{
            // ...mapState({
            //     companyList: state => state.companyDetail,
            // }),

        },
        methods: {

            collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
                this.showSublist = !this.showSublist;
            },
            userLogout() {
                // this.$token.deleteToken();
                // this.$router.redirect('http://120.78.186.60:8087/logout') 
                // this.$token.deleteToken();
                //     window.location.href = "http://120.78.186.60:8087/logout"; 
                this.$router.push('/logout') 
            },
            routerLink(index, route) {
                this.navIndex = index;
                let key = Object.keys(route)
                if(key[1] == 'path'){
                   this.$router.push(route[key[1]]) 
                }
            },
            checkRouterLocal(path) {
                this.navIndex = this.nav.findIndex(item => item.path === path);
            },
            mapSystem(targetId) {
                let list = []
                let companyAuth = this.user.authorities.filter((auth) =>{
                    return auth.parentId == targetId
                })
                companyAuth.map(item => {
                    let obj = {}
                    obj['name'] =item.displayName 
                    if(item.displayName == '销售系统'){
                        let path = '/saleSystem'
                        obj['path'] = path                        
                        list.push(obj) 
                        //知道这个角色有销售系统授权，自动发给后端所选公司信息
                        var tokenInfo = this.$token.loadToken();
                        let data = {
                            employeeId: tokenInfo.employeeId,
                            employeeName: tokenInfo.employeeName,
                            contractBody: tokenInfo.contractBody,
                            gsCode: tokenInfo.gsCode
                        };
                        api
                        .autologin(querystring.stringify(data),this.$ajax)
                        .then(res => {
                            window.console.log(res)
                        if (res.code == 305) {
                            this.$message({ message: res.msg, duration: 2000 });
                        }
                        if (res.code == 200) {
                            window.console.log('passing the session to backend success')
                        }
                        })
                        .catch(err => {
                            window.console.log(err);
                        });
 
                    }
                    else if(item.displayName == '成衣ERP') {
                        let path = '/clothSystem'
                        obj['path'] = path                        
                        list.push(obj)
                    }
                    else {
                        let redirect = 'www.baidu.com'
                        obj['redirect'] = redirect
                        list.push(obj)  
                    }
                })
                return list
            },
            saveToken(auth) {
                this.$token.saveSelectedCompany(auth);
            }
            ,
            handleCommand(command) {
                this.showCompanyName = command.name;
                this.saveToken(command.authority)
                this.nav = this.mapSystem(command.id)
            },
            backToConsole() {
                this.$router.push('/dashboard') 
            },
            toHrSystem() {
                this.$router.push('/hrSystem') 
            },
            toChengYiSystem(){
                this.$router.push('/成衣系统') 
            },
                        toClothingSystem(){
                this.$router.push('/服装系统') 
            },
            jumpToSp(){
                this.$router.push('/审批系统') 
            },

        },
        watch: {
            "$route"() {
                let path = this.$route.path;
                this.checkRouterLocal(path);
                // if(to.name === 'sale') {
                //     this.switchCompany = false
                // }
            }
            
// watch: {
//     '$route' (to, from) {
//       if (to.name === 'home') {
//         // something
//       } else if (to.name === 'detail') {
//         // something
//       }
//     }

        },

        mounted: function() {
            api.getUserInfo(this.$token.loadToken(),this.$ajax)
                .then(res => {
                    this.user = res.data;
                    this.$token.saveUserInfo(this.user);
                    // this.$store.dispatch("addUser",this.user)
                    //test
                    this.user.authorities.map( (item) => {
                        if(item.parentId == '0'){
                            this.companyNewDetail.push(item)
                        }
                    })
                    if(this.companyNewDetail.length == 1){
                        this.showCompanyName = this.companyNewDetail[0].displayName
                        this.saveToken(this.companyNewDetail[0].authority)
                        this.nav = this.mapSystem(this.companyNewDetail[0].id)
                    }
            
                    //test
                    this.nickname = this.user.nickname
                });
                
        }
    }
</script>

<style>
.el-menu .el-menu--horizontal {
    border-bottom: 0px !important
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #5C8BFA;
    color: #fff;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #fff;
    color: #fff;
}
.el-menu--horizontal>.el-menu-item {
    color: #fff;
    font-size: 16px;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    background-color: #5C8BFA;
    color: #fff;
}
    .header {
        display: flex;
        position: relative;
        width: 100%;
        height: 60px;
        font-size: 22px;
        color: #fff;
        background-color: #5C8BFA;
        box-shadow: 0 0 3px 0 #F2F2F3;
            border-bottom: 0px solid #e6e6e6;
    }
    .flex-header-div {
        text-align: center;
        display: flex;
        align-items: center;
        padding: 16px;
    }
    .header-left {
        float: left;
        display: flex;
        color:#4D96F4;
    }
    .header_text {
        color: #666666;
    }
    .header_text :active {
        color: #4D96F4;
    }
    .collapse-btn {
        cursor: pointer;
        line-height: 70px;
        order:2
    }
    .header .logo {
        float: left;
        width: 200px;
        line-height: 70px;
        background-color: #4A76E2;
        position: relative;
    }
    .header .logo img{
        position: absolute;
        top: 50%;
            width: 130px;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .header-right {
        float: right;
        color:#4D96F4
    }
    .header-user-con {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .expanded{
        margin-left: -20px;
        order:3;
        display: flex;
        position: relative;
    }
    .root {
        cursor: pointer;
        order: 1;
        padding:20px 30px;

    }

    .system-list {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        position: relative;
    }


    .btn-message {
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .btn-message-badge {
        width: 60px;
        border-radius: 4px;
        color: #fff;
    }

    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }

    .el-icon-message {
        color:white
    }

    .btn-logout {
        cursor: pointer;
    }

    .el-icon-s-fold {
        transform: translateX(500px)
    }

    .active{color:#409eff;}

    .list_style::before {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 100%;
        border-bottom: 4px solid #409eff;
        transition: 0.2s all linear;
    }
 
    .list_style:hover::before {
        width: 100%;
        left: 0;
    }
    
    .list_style:hover ~ .list_style::before {
        left: 0;
    }

</style>
