import{_ as p,o as t,c as i,e as o,k as u,F as c,g as S,b as l,r as g,t as r}from"./index.22a5e41e.js";const _={name:"facebook",data(){return{reviews:[{name:"Derek",description:"Some comment"},{name:"Joe",description:"Some comment"},{name:"Mike",description:"Some comment"},{name:"Ron",description:"Some comment"},{name:"Dii",description:"Some comment"},{name:"Lonnie",description:"Some comment"},{name:"Paul",description:"Some comment"},{name:"Mike",description:"Some comment"},{name:"Jody",description:"Some comment"},{name:"Ryn",description:"Some comment"},{name:"Jord",description:"Some comment"},{name:"Milly",description:"Some comment"},{name:"Judy",description:"Some comment"},{name:"Vanilly",description:"Some comment"},{name:"Nolan",description:"Some comment"},{name:"Pino",description:"Some comment"},{name:"Ryne",description:"Some comment"},{name:"Scott",description:"Some comment"},{name:"Son",description:"Some comment"},{name:"Bann",description:"Some comment"}],commentsToShow:5,totalComments:0}},mounted(){FB.init({appId:"1616534218770661",cookie:!0,xfbml:!0,version:"v13.0"}),this.totalComments=this.reviews.length,console.log(this.reviews.length)},methods:{loginWithFacebook(){FB.login(m=>{m.authResponse?FB.api("/me",{fields:"name,email"},n=>{console.log(n)}):console.log("User cancelled login or did not fully authorize.")},{scope:"public_profile,email"})},checkLoginState(){FB.getLoginStatus(function(m){m.status==="connected"?FB.api("/me",function(n){console.log("UserInfo:",n)}):console.log("User is not logged in with Facebook")})}}},h=o("div",null,"facebook login",-1),v={class:"container vue"},f={key:0},k=o("hr",null,null,-1),w={key:0};function b(m,n,y,B,e,a){const d=g("fb:login-button");return t(),i(c,null,[h,o("div",null,[u(d,{scope:"public_profile,email",size:"large",onlogin:a.checkLoginState()},null,8,["onlogin"])]),o("div",v,[(t(!0),i(c,null,S(e.commentsToShow,s=>(t(),i("div",null,[s<e.reviews.length?(t(),i("div",f,[o("div",null,r(e.reviews[s].name)+" says:",1),o("i",null,[o("div",null,r(e.reviews[s].description),1)]),k])):l("",!0)]))),256)),e.commentsToShow<e.reviews.length||e.reviews.length>e.commentsToShow?(t(),i("div",w,[o("button",{onClick:n[0]||(n[0]=s=>e.commentsToShow+=5)},"show more reviews")])):l("",!0)])],64)}var C=p(_,[["render",b]]);export{C as default};
