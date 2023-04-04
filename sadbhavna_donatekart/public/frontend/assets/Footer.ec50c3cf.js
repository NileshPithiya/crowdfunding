import{_ as p,D as f,o as i,c as r,e as t,n as _,k as m,w as d,p as b,t as o,b as g,C as w,r as c,A as k}from"./index.b990df17.js";var $="/assets/sadbhavna_donatekart/frontend/assets/logo-1.1.73ae79ff.ico";const y={name:"Navbar",setup(){return{user:w("user")}},components:{Dialog:f},data(){return{showMenu:!1,showDialog:!1,showLanguageDialog:!1,language:this.get_language(),languages:[{key:"en-US",value:"English"},{key:"gu",value:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"},{key:"hi",value:"\u0939\u093F\u0902\u0926\u0940"}]}},created(){console.log("language",this.get_language()),this.get_language()==null&&(this.showLanguageDialog=!0)},mounted(){this.user.isLoggedIn()},resources:{logout(){return{method:"logout",onSuccess:e=>{this.$toast({title:"Success",text:"You successfully logout",customIcon:"check"}),this.$router.go()},onError(){console.log("Error"),this.$toast({title:"Error",text:"Somthing want wrong during Logout!",customIcon:"circle-fail",appearance:"denger"})}}}},methods:{handleChange(e){localStorage.setItem("lang",e.target.value),window.location.reload()},show_logout_dialog(){this.showDialog=!0},set_language(e){this.$cookies.set("lang",e),localStorage.setItem("lang",e),window.location.reload()},get_language(){return this.$cookies.get("lang")||localStorage.getItem("lang")},logout(){this.$resources.logout.submit()},profile(){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split("=")).map(s=>[s[0],decodeURIComponent(s[1])]));this.$router.push(`/sadbhavna/profile/${e.user_id}`)}}},C={class:"pt-2 pl-2 md:pl-4 lg:pl-[46px] xl:pl-24 pr-2 md:pr-4 lg:pr-[46px] xl:pr-24"},L={class:"rounded-xl bg-[#40b751]"},D={class:"px-[5px] md:px-[5px] lg:px-[0px] xl:px-[35px] py-[5px] md:py-[5px] lg:py-[20px] lg:flex lg:justify-between lg:items-center"},S={class:"flex justify-between"},V=t("div",{class:"flex items-center flex-shrink-0"},[t("a",{href:"/sadbhavna"},[t("img",{src:$,class:"mb-2 lg:mb-0 sm:mt-2 lg:mt-0 sm:mr-0 md:mr-2 lg:mr-2 w-18 h-20 ml-0 lg:ml-6"})]),t("span",{class:"font-sans text-white font-bold text-3xl md:mr-5"},"BestDeed")],-1),I=t("button",{type:"button",class:"text-white hover:text-white focus:outline-none focus:text-white"},[t("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[t("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z "})])],-1),U=[I],H={href:"#",class:"transition font-bold text-white hover:text-black"},E={class:"group relative inline-block"},N={href:"/sadbhavna/blog",class:"transition font-bold text-white hover:text-black"},A={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},F={class:"text-2xl md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-green-500 text-bold text-center"},z={class:"relative z-0 flex flex-wrap"};function B(e,s,x,v,a,n){const h=c("router-link"),u=c("Dialog");return i(),r("div",C,[t("div",L,[t("nav",D,[t("div",S,[V,t("div",{onClick:s[0]||(s[0]=l=>a.showMenu=!a.showMenu),class:"pr-[20px] md:pr-[20px] lg:pr-[5px] flex lg:hidden"},U)]),t("ul",{class:_([a.showMenu?"flex":"hidden","fontfamily text-[15px] p-[15px] md:p-[15px] lg:p-[15px] flex-col sm:mt-8 md:mt-2 lg:mt-0 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 lg:mt-0"])},[t("li",null,[m(h,{to:"/sadbhavna",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[b(o(e.$t("Home")),1)]),_:1})]),t("li",null,[t("a",H,o(e.$t("About")),1)]),t("li",null,[m(h,{to:"/sadbhavna/request-campaign",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[b(o(e.$t("Request a Campaign")),1)]),_:1})]),t("li",null,[m(h,{to:"/sadbhavna/contact-us",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[b(o(e.$t("Contact")),1)]),_:1})]),t("li",null,[t("span",E,[t("a",N,o(e.$t("Blog")),1)])]),this.user.isLoggedIn()?(i(),r("li",{key:0,onClick:s[1]||(s[1]=l=>n.profile()),class:"font-bold text-white hover:text-black cursor-pointer"},o(e.$t("Profile")),1)):g("",!0),t("li",null,[a.language=="gu"||a.language=="en-US"?(i(),r("button",{key:0,class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1",onClick:s[2]||(s[2]=l=>n.set_language("hi"))},"\u0939\u093F\u0902\u0926\u0940")):g("",!0),a.language=="hi"||a.language=="en-US"?(i(),r("button",{key:1,class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1",onClick:s[3]||(s[3]=l=>n.set_language("gu"))},"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0")):g("",!0),a.language=="gu"||a.language=="hi"?(i(),r("button",{key:2,class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-1 pt-1 pb-1 pl-4 pr-4 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1",onClick:s[4]||(s[4]=l=>n.set_language("en-US"))},"English")):g("",!0)]),t("li",null,[this.user.isLoggedIn()?(i(),r("button",{key:0,onClick:s[5]||(s[5]=l=>n.show_logout_dialog()),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},o(e.$t("Logout")),1)):(i(),r("button",{key:1,onClick:s[6]||(s[6]=l=>this.$router.push("/sadbhavna/auto-login")),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},o(e.$t("Login")),1))])],2)]),m(u,{options:{title:e.$t("Logout"),message:e.$t("Are you sure want to logout?"),size:"sm",actions:[{label:e.$t("Confirm"),appearance:"success",handler:({close:l})=>{this.logout(),l()}},{label:e.$t("Cancel")}]},modelValue:a.showDialog,"onUpdate:modelValue":s[7]||(s[7]=l=>a.showDialog=l)},null,8,["options","modelValue"]),m(u,{modelValue:a.showLanguageDialog,"onUpdate:modelValue":s[11]||(s[11]=l=>a.showLanguageDialog=l)},{body:d(()=>[t("div",A,[t("h1",F,o(e.$t("Select Your Language")),1),t("div",z,[t("button",{class:"mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150",type:"button",onClick:s[8]||(s[8]=l=>n.set_language("gu"))},o(e.$t("\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0")),1),t("button",{class:"mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150",type:"button",onClick:s[9]||(s[9]=l=>n.set_language("hi"))},o(e.$t("\u0939\u093F\u0902\u0926\u0940")),1),t("button",{class:"mb-5 ml-2 rounded-lg bg-[#40b751] text-white active:bg-[#40b751] hover:border-green-600 uppercase text-sm px-6 py-3 shadow hover:bg-white hover:text-black hover:border-green-500 hover:border-2mr-1 ease-linear transition-all duration-150",type:"button",onClick:s[10]||(s[10]=l=>n.set_language("en-US"))},o(e.$t("English")),1)])])]),_:1},8,["modelValue"])])])}var Nt=p(y,[["render",B]]),M="/assets/sadbhavna_donatekart/frontend/assets/facebook.9ac7fe2c.svg",W="/assets/sadbhavna_donatekart/frontend/assets/twitter.bf573150.svg",j="/assets/sadbhavna_donatekart/frontend/assets/insta.cc93ce04.svg",P="/assets/sadbhavna_donatekart/frontend/assets/linkedin.08a20e56.svg";const q={name:"Footer",theme:{screens:{medium:"758px"}},mounted(){}},O={class:"px-10 md:px-50 lg:px-30 xl:px-0 bg-[#40b751]"},R={class:"container w-full pt-10 md:pt-10 lg:pt-20 sm:pb-0 ml-auto mr-auto text-neutral-50"},Y={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:gap-auto md-gap:4 lg:gap-auto pb-5 md:pb-10 lg:pb-2 px-0 py-0"},G={class:"sm:col-span-2 md:col-span-2 lg:col-auto"},Q={class:"font-bold text-white mb-6 text-xl mb-4"},T=k('<p class="text-whitetext-gray-500 -pr-[200px] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus architecto fugiat!</p><div class="my-5 pr-4"><div class="flex space-x-6 mt-8"><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+M+'"><p class="sr-only">Facebook page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+W+'"><p class="sr-only">Twitter page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+j+'"><p class="sr-only">Instagram page</p></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+P+'"><p class="sr-only">Linkedin account</p></a></div></div>',2),J={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[60px] md:pb-10 sm:pb-10"},K={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},X={class:"text-white"},Z={class:"sm:mb-2 md:mb-2 lg:mb-4"},tt={href:"#"},et={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},st={href:"#"},ot={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},lt={href:"#"},at={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},nt={href:"#"},it={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},rt={href:"#"},mt={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[50px] sm:pr-28 md:pr-32 lg:pr-0"},dt={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},gt={class:"text-white"},ht={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},bt={href:"#"},ut={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},ct={href:"#"},pt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},xt={href:"#"},vt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},ft={href:"#"},_t={class:"sm:pl-[0px] md:pl-[0px] lg:pl-[60px]"},wt={class:"font-bold text-white mb-6 text-xl mb-4 pt-10 md:pt-5 lg:pt-0"},kt={class:"text-white"},$t={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},yt={href:"#"},Ct={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},Lt={href:"#"},Dt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},St={href:"#"},Vt={class:"sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"},It={href:"#"},Ut=t("div",{class:"text-center px-4 pb-8 pt-12 border-t border-white border-opacity-10 border-neutral-100"},[t("span",{class:"text-sm font-normal mb-4 mt-0font-semiboldtext-whitetext-gray-500 dark:text-gray-400"},"Copyright \xA9 2023 All rights reserved ")],-1);function Ht(e,s,x,v,a,n){return i(),r("div",O,[t("footer",R,[t("div",Y,[t("div",G,[t("h2",Q,o(e.$t("About")),1),T]),t("div",J,[t("h2",K,o(e.$t("Quick Links")),1),t("ul",X,[t("li",Z,[t("a",tt,o(e.$t("Symptoms")),1)]),t("li",et,[t("a",st,o(e.$t("Prevention")),1)]),t("li",ot,[t("a",lt,o(e.$t("FAQs")),1)]),t("li",at,[t("a",nt,o(e.$t("About Coronavirus")),1)]),t("li",it,[t("a",rt,o(e.$t("Contact Us")),1)])])]),t("div",mt,[t("h2",dt,o(e.$t("Helpful Link")),1),t("ul",gt,[t("li",ht,[t("a",bt,o(e.$t("Helathcare Professional")),1)]),t("li",ut,[t("a",ct,o(e.$t("LGU Facilities")),1)]),t("li",pt,[t("a",xt,o(e.$t("Protect Your Family")),1)]),t("li",vt,[t("a",ft,o(e.$t("World Health")),1)])])]),t("div",_t,[t("h2",wt,o(e.$t("Resources")),1),t("ul",kt,[t("li",$t,[t("a",yt,o(e.$t("WHO Website")),1)]),t("li",Ct,[t("a",Lt,o(e.$t("CDC Website")),1)]),t("li",Dt,[t("a",St,o(e.$t("Gov Website")),1)]),t("li",Vt,[t("a",It,o(e.$t("DOH Website")),1)])])])]),Ut])])}var At=p(q,[["render",Ht]]);export{At as F,Nt as N};
