import{N as _,F as x}from"./Footer.2ffd431d.js";import{_ as f,o as p,c as m,k as d,e,t as s,n as c,p as l,C as a,E as n,b,F as E,r as u}from"./index.e793607d.js";const v={name:"Donation Campaign Request",components:{Navbar:_,Footer:x},data(){return{openTab:1,full_name:"",full_nameig:"",fullNameError:"",fullNameErrorig:"",campaign_type:"",campaign_typeig:"",organisation_name:"",organizationNameError:"",organisation_website:"",email:"",emailError:"",emailErrorig:"",phone:"",phoneError:"",phoneErrorig:"",error:!1,campaign_story:"",campaignStoryError:"",campaignStoryErrorig:"",social_media_page:"",beneficiary_group:"",beneficiaryGroupError:"",beneficiaryGroupErrorig:"",phoneig:"",emailig:"",social_media_pageig:"",campaign_storyig:"",beneficiary_groupig:""}},created(){document.title=this.$t("Request a Campaign | BestDeed")},mounted(){this.$nextTick(()=>this.$refs.fullname.focus())},resources:{request_campaign(){return{method:"sadbhavna_donatekart.api.campaign.request_campaign",onSuccess:i=>{confirm("Your Request is successfully sent to bestdeed donatekart")==!0?this.$router.push("/bestdeed"):this.$router.go(-1)},onError:i=>{console.log(i),this.$toast({title:"Error",text:i,icon:"x-circle",appearance:"denger",position:"top-center"})}}}},methods:{resetForm(){this.full_name="",this.organisation_name="",this.organisation_website="",this.phone="",this.email="",this.social_media_page="",this.campaign_story="",this.beneficiary_group=""},resetFormIg(){this.full_nameig="",this.phoneig="",this.emailig="",this.social_media_pageig="",this.campaign_storyig="",this.beneficiary_groupig=""},resetFormErrorReset(){this.fullNameError="",this.organizationNameError="",this.phoneError="",this.emailError="",this.campaignStoryError="",this.beneficiaryGroupError=""},resetFormErrorResetIg(){this.fullNameErrorig="",this.phoneErrorig="",this.emailErrorig="",this.campaignStoryErrorig="",this.beneficiaryGroupErrorig=""},toggleTabs:function(i){this.openTab=i,this.tab=this.tabNumber},request_campaign(){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_type="NGO",this.full_name==""&&(this.fullNameError="Enter full name",console.log("full name")),this.organisation_name==""&&(this.organizationNameError="Enter organisation name",console.log("org name")),this.campaign_story==""&&(this.campaignStoryError="Enter campaign story",console.log("story")),this.beneficiary_group==""&&(this.beneficiaryGroupError="Enter benificiary group name",console.log("group")),this.email==""?(this.emailError="Enter email",console.log("email id")):i.test(this.email)==!1&&this.email&&(this.emailError="Enter valid email",console.log("email")),this.phone==""?(this.phoneError="Enter phone number",console.log("phone number")):this.phone&&r.test(this.phone)==!1?(this.phoneError="Enter valid phone number",console.log("phone")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_name,campaign_type:this.campaign_type,organisation_name:this.organisation_name,organisation_website:this.organisation_website,email:this.email,phone:this.phone,campaign_story:this.campaign_story,social_media_page:this.social_media_page,beneficiary_group:this.beneficiary_group}))},request_campaignig(){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^[6-9][0-9]{9}$/;this.campaign_typeig="Indivisual/Group",this.full_nameig==""&&(this.fullNameErrorig="Enter full name",console.log("full name")),this.organisation_nameig==""&&(this.organizationNameErrorig="Enter organisation name",console.log("org name")),this.campaign_storyig==""&&(this.campaignStoryErrorig="Enter campaign story",console.log("story")),this.beneficiary_groupig==""&&(this.beneficiaryGroupErrorig="Enter benificiary group name",console.log("group")),this.emailig==""?(this.emailErrorig="Enter email",console.log("email id")):i.test(this.emailig)==!1&&this.emailig&&(this.emailErrorig="Enter valid email",console.log("email")),this.phoneig==""?(this.phoneErrorig="Enter phone number",console.log("phone number")):this.phoneig&&r.test(this.phoneig)==!1?(this.phoneErrorig="Enter valid phone number",console.log("phone")):(console.log("done"),this.$resources.request_campaign.submit({full_name:this.full_nameig,campaign_type:this.campaign_typeig,email:this.emailig,phone:this.phoneig,campaign_story:this.campaign_storyig,social_media_page:this.social_media_pageig,beneficiary_group:this.beneficiary_groupig}))}}},k={class:"container mx-auto"},w={class:"container mx-auto h-full"},N={class:"w-full pt-[28px]"},F={class:"container mx-auto py-0"},C={class:"w-6/6 lg:w:4/6 mx-auto bg-white"},S={class:"text-[24px] md:text-[30px] lg:text-[36px] px-10 text-[#40b751] font-bold text-center"},G={class:"relative z-0"},V={class:"sm:py-2 md:py-4 lg:py-8"},q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex mb-0 flex-wrap pt-4 ml-8 mr-9 pb-4 flex-row"},T={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},U={class:"-mb-px mr-2 last:mr-0 flex-auto text-center"},z={class:"px-0 py-2 flex-auto"},R={class:"tab-content tab-space"},K={key:0,class:"py-4 px-8"},B={class:"mb-2 md:mb-4 lg:mb-6"},P={class:"block text-gray-600 text-base mb-2",for:"email"},I=e("span",{class:"text-red-600"},"*",-1),O={class:"text-red-600"},D={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-4 lg:gap-4"},M={class:"mb-2 md:mb-4 lg:mb-6"},A={class:"block text-gray-600 text-base mb-2"},Z=e("span",{class:"text-red-600"},"*",-1),W={class:"text-red-600"},Y={class:"mb-2 md:mb-4 lg:mb-6"},j={class:"block text-gray-600 text-base mb-2"},H={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},J={class:"mb-2 md:mb-4 lg:mb-6"},L={class:"block text-gray-600 text-base mb-2"},Q=e("span",{class:"text-red-600"},"*",-1),X={class:"text-red-600"},$={class:"mb-2 md:mb-4 lg:mb-6"},ee={class:"block text-gray-600 text-base mb-2"},re=e("span",{class:"text-red-600"},"*",-1),oe={class:"text-red-600"},te={class:"mb-2 md:mb-4 lg:mb-6"},se={class:"block text-gray-600 text-base mb-2"},ie={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},ae={class:"mb-0 md:mb-4 lg:mb-6"},ne={class:"block text-gray-600 text-base mb-2"},le=e("span",{class:"text-red-600"},"*",-1),ge={class:"text-red-600"},pe={class:"mb-2 md:mb-4 lg:mb-6"},me={class:"block text-gray-600 text-base mb-2"},de=e("span",{class:"text-red-600"},"*",-1),ce={class:"text-red-600"},be={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"},ue={key:1,class:"py-4 px-8"},he={class:"mb-2 md:mb-4 lg:mb-6"},ye={class:"block text-gray-600 text-base mb-2",for:"email"},_e=e("span",{class:"text-red-600"},"*",-1),xe={class:"text-red-600"},fe={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-0 md:gap-0 lg:gap-4"},Ee={class:"mb-2 md:mb-4 lg:mb-6"},ve={class:"block text-gray-600 text-base mb-2"},ke=e("span",{class:"text-red-600"},"*",-1),we={class:"text-red-600"},Ne={class:"mb-2 md:mb-4 lg:mb-6"},Fe={class:"block text-gray-600 text-base mb-2"},Ce=e("span",{class:"text-red-600"},"*",-1),Se={class:"text-red-600"},Ge={class:"mb-2 md:mb-4 lg:mb-6"},Ve={class:"block text-gray-600 text-base mb-2"},qe={class:"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4"},Te={class:"mb-2 md:mb-4 lg:mb-6"},Ue={class:"block text-gray-600 text-base mb-2"},ze=e("span",{class:"text-red-600"},"*",-1),Re={class:"text-red-600"},Ke={class:"mb-2 md:mb-4 lg:mb-6"},Be={class:"block text-gray-600 text-base mb-2"},Pe=e("span",{class:"text-red-600"},"*",-1),Ie={class:"text-red-600"},Oe={class:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4 mb-6"},De=e("div",{class:"pl-96"},[e("div",{class:"imageresponsive absolute bg-no-repeat z-1 -mt-[430px] ml-[1000px] sm:w-0 md:w-0 lg:w-0 xl:w-96 opacity-40 bg-white bg-contain",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}})],-1);function Me(i,r,Ae,Ze,o,g){const h=u("Navbar"),y=u("Footer");return p(),m(E,null,[d(h),e("div",k,[e("div",w,[e("div",N,[e("div",F,[e("div",C,[e("div",S,s(i.$t("Request a Campaign")),1),e("div",G,[e("div",V,[e("ul",q,[e("li",T,[e("a",{class:c(["mb-3 md:mb-0 lg:mb-0 cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block",{"text-[#40b751] bg-white":o.openTab!==1,"text-white bg-[#40b751]":o.openTab===1}]),onClick:[r[0]||(r[0]=t=>g.toggleTabs(1)),r[1]||(r[1]=t=>g.resetFormErrorReset())]},s(i.$t("NGO")),3)]),e("li",U,[e("a",{class:c(["cursor-pointer text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal",{"text-[#40b751] bg-white":o.openTab!==2,"text-white bg-[#40b751]":o.openTab===2}]),onClick:[r[2]||(r[2]=t=>g.toggleTabs(2)),r[3]||(r[3]=t=>g.resetFormErrorResetIg())]},s(i.$t("Individual Group")),3)])]),e("div",z,[e("div",R,[o.openTab==1?(p(),m("div",K,[e("div",B,[e("label",P,[l(s(i.$t("FullName"))+" ",1),I]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[4]||(r[4]=t=>o.fullNameError=""),"onUpdate:modelValue":r[5]||(r[5]=t=>o.full_name=t),type:"text"},null,544),[[n,o.full_name]]),e("p",O,s(o.fullNameError),1)]),e("div",D,[e("div",M,[e("label",A,[l(s(i.$t("Organisation Name"))+" ",1),Z]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 rounded w-full py-2 px-3 hover:border-[#40b751] text-grey-darker",type:"text",onKeyup:r[6]||(r[6]=t=>o.organizationNameError=""),placeholder:"Enter Organisation Name","onUpdate:modelValue":r[7]||(r[7]=t=>o.organisation_name=t)},null,544),[[n,o.organisation_name]]),e("p",W,s(o.organizationNameError),1)]),e("div",Y,[e("label",j,s(i.$t("Organisation Website")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Organisation Website","onUpdate:modelValue":r[8]||(r[8]=t=>o.organisation_website=t)},null,512),[[n,o.organisation_website]])])]),e("div",H,[e("div",J,[e("label",L,[l(s(i.$t("Phone Number"))+" ",1),Q]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"number",onKeyup:r[9]||(r[9]=t=>o.phoneError=""),placeholder:"Enter Phone Number","onUpdate:modelValue":r[10]||(r[10]=t=>o.phone=t)},null,544),[[n,o.phone]]),e("p",X,s(o.phoneError),1)]),e("div",$,[e("label",ee,[l(s(i.$t("Email"))+" ",1),re]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[11]||(r[11]=t=>o.emailError=""),placeholder:"Enter Email","onUpdate:modelValue":r[12]||(r[12]=t=>o.email=t)},null,544),[[n,o.email]]),e("p",oe,s(o.emailError),1)]),e("div",te,[e("label",se,s(i.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[13]||(r[13]=t=>o.social_media_page=t)},null,512),[[n,o.social_media_page]])])]),e("div",ie,[e("div",ae,[e("label",ne,[l(s(i.$t("Campaign Story"))+" ",1),le]),a(e("textarea",{id:"comment",onKeyup:r[14]||(r[14]=t=>o.campaignStoryError=""),rows:"4","onUpdate:modelValue":r[15]||(r[15]=t=>o.campaign_story=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[n,o.campaign_story]]),e("p",ge,s(o.campaignStoryError),1)]),e("div",pe,[e("label",me,[l(s(i.$t("Beneficiary Group"))+" ",1),de]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[16]||(r[16]=t=>o.beneficiaryGroupError=""),"onUpdate:modelValue":r[17]||(r[17]=t=>o.beneficiary_group=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[n,o.beneficiary_group]]),e("p",ce,s(o.beneficiaryGroupError),1)])]),e("div",be,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[18]||(r[18]=t=>g.request_campaign())},s(i.$t("Campaign Request")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[19]||(r[19]=(...t)=>g.resetForm&&g.resetForm(...t))},s(i.$t("Reset Form")),1)])])):b("",!0),o.openTab==2?(p(),m("div",ue,[e("div",he,[e("label",ye,[l(s(i.$t("FullName"))+" ",1),_e]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",placeholder:"Enter Full Name",onKeyup:r[20]||(r[20]=t=>o.fullNameErrorig=""),"onUpdate:modelValue":r[21]||(r[21]=t=>o.full_nameig=t),type:"text"},null,544),[[n,o.full_nameig]]),e("p",xe,s(o.fullNameErrorig),1)]),e("div",fe,[e("div",Ee,[e("label",ve,[l(s(i.$t("Phone Number"))+" ",1),ke]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"number",placeholder:"Enter Phone Number",onKeyup:r[22]||(r[22]=t=>o.phoneErrorig=""),"onUpdate:modelValue":r[23]||(r[23]=t=>o.phoneig=t)},null,544),[[n,o.phoneig]]),e("p",we,s(o.phoneErrorig),1)]),e("div",Ne,[e("label",Fe,[l(s(i.$t("Email"))+" ",1),Ce]),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"email",onKeyup:r[24]||(r[24]=t=>o.emailErrorig=""),placeholder:"Enter Email","onUpdate:modelValue":r[25]||(r[25]=t=>o.emailig=t)},null,544),[[n,o.emailig]]),e("p",Se,s(o.emailErrorig),1)]),e("div",Ge,[e("label",Ve,s(i.$t("Social Media Page")),1),a(e("input",{class:"appearance-none border-gray-300 placeholder-gray-400 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker",type:"text",placeholder:"Enter Social Media Page","onUpdate:modelValue":r[26]||(r[26]=t=>o.social_media_pageig=t)},null,512),[[n,o.social_media_pageig]])])]),e("div",qe,[e("div",Te,[e("label",Ue,[l(s(i.$t("Campaign Story"))+" ",1),ze]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[27]||(r[27]=t=>o.campaignStoryErrorig=""),"onUpdate:modelValue":r[28]||(r[28]=t=>o.campaign_storyig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Campaign Story"},null,544),[[n,o.campaign_storyig]]),e("p",Re,s(o.campaignStoryErrorig),1)]),e("div",Ke,[e("label",Be,[l(s(i.$t("Beneficiary Group"))+" ",1),Pe]),a(e("textarea",{id:"comment",rows:"4",onKeyup:r[29]||(r[29]=t=>o.beneficiaryGroupErrorig=""),"onUpdate:modelValue":r[30]||(r[30]=t=>o.beneficiary_groupig=t),class:"hover:border-[#40b751] w-full py-2 px-3 placeholder-gray-400 text-gray-900 bg-white border-1 border-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-600",placeholder:"Enter Beneficiary Group"},null,544),[[n,o.beneficiary_groupig]]),e("p",Ie,s(o.beneficiaryGroupErrorig),1)])]),e("div",Oe,[e("button",{class:"appearance-none transition hover:text-gray-700 border-gray-600 rounded sm:mr-0 md:mr-20 lg:mr-32 py-2 px-2 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] tracking-wide border border-[#40b751] hover:border-[#40b751] text-base uppercase rounded",onClick:r[31]||(r[31]=t=>g.request_campaignig())},s(i.$t("Request a Campaign")),1),e("a",{class:"cursor-pointer border-none transition hover:text-gray-700 text-end buttonalign sm:ml-0 md:ml-20 lg:ml-32 appearance-non pr-2 text-[#40b751] py-2 tracking-wide font-black text-xl rounded",onClick:r[32]||(r[32]=(...t)=>g.resetFormIg&&g.resetFormIg(...t))},s(i.$t("Reset Form")),1)])])):b("",!0)])])])])])])])])]),De,d(y)],64)}var je=f(v,[["render",Me]]);export{je as default};
