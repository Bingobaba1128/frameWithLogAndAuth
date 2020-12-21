import { baseUrl1 } from '@/api/baseUrl'


var config={
    //请求授权地址
    userAuthorizationUri:"http://120.78.186.60:8087/oauth/authorize",
    //用户信息请求地址
    userInfoUri:"http://120.78.186.60:8087/user",
    //登出请求地址
    logoutUri:"",
    //项目地址
    // localuri :"http://127.0.0.1:8080/",
    // localuri :"http://120.78.186.60:8103/",
    localuri : baseUrl1,
    // localuri :"http://120.78.186.60:8119/",

   //回调地址
    // redirect_uri : "http://127.0.0.1:8080/home",
    // redirect_uri : "http://120.78.186.60:8103/home",
    redirect_uri : baseUrl1 + "/home",
    // redirect_uri : "http://120.78.186.60:8119/home",
    //案例资源服务器地址
    resUri:"http://localhost:8080/",
    //客户端相关标识，请从认证服务器申请
    clientId: "erp_v",
    client_secret:"erpVietnam",
    state:"",
    response_type:"code",
    grant_type : "authorization_code",
    code:"",
  }

export default config;