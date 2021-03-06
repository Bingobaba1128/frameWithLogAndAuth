import RndNum from "./ranNum";

var loginUtil ={
  login:function (vue) {
    vue.$config.code = RndNum;
    var authorUrl = vue.$config.userAuthorizationUri;
    authorUrl = authorUrl + ('?' + vue.$querystring.stringify({
      client_id:vue.$config.clientId,
      response_type:vue.$config.response_type,
      state:'123',
      redirect_uri:vue.$config.redirect_uri, 
    }))
    window.location.href = authorUrl;
  },
  logout:function (vue,return_url) {
    vue.$router.push('/logout'+"?return_url="+return_url)
  },
  checkLogin:function(vue){
    var tokenInfo = vue.$token.loadToken();
    if (tokenInfo.access_token===null ||tokenInfo.access_token==="null" ){
      return false;
    }
    return true;
  }
} 

export default loginUtil;
