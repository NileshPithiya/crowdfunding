import{_ as c,x as g,o as h,c as m,k as p,e,y as x,z as u,F as v,u as _,r as b}from"./index.08d42384.js";import{N as y,F as w}from"./Footer.878750bc.js";const f={name:"Auto Login",components:{Navbar:y,Footer:w},data(){return{}},resources:{login_with_whatsapp(){return{method:"sadbhavna_donatekart.api.api.login_with_whatsapp",onSuccess:t=>{console.log("okey",t);let a=t[0],s=t[1];this.$router.push(`/sadbhavna/otp/${a}&${s}`)},onError:t=>{console.log("error",t)}}}},methods:{login_with_google:t=>{console.log("data",t);let a=g(t.credential),s=a.email,i=a.family_name,d=a.given_name,l=a.picture;console.log("asdfads",a);let n=`http://sadbhavnadonatekart.com:8080/api/method/sadbhavna_donatekart.api.api.login_with_google?email=${s}&first_name=${i}&last_name=${d}&image_url=${l}`;fetch(n,{method:"GET"}).then(r=>{r.json().then(o=>{console.log("asdf",o.message),console.log("asdf",o),o.message,window.location="http://sadbhavnadonatekart.com:8080/home"})}).catch(function(r){log("Request failed",r)})},login_with_whatsapp(){this.$resources.login_with_whatsapp.submit({phone:this.phone})}}},k={class:"container mx-auto mb-[150px]"},$=e("div",{class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-[498px] sm:h-0 md:h-0 lg:h-0 xl:h-[485px] sm:w-0 md:w-0 lg:w-0 xl:w-[600px] sm:right-0 md:right-2 lg:right-2 xl:right-0 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('../../src/assets/Inter/img/bg-tree.png')"}},null,-1),L={class:"container mx-auto h-full"},F={class:"w-full pt-0 md:pt-5 lg:pt-12"},N={class:"container py-0"},E={class:"w-5/5 md:w-6/6 lg:w-4/6 mx-auto bg-white"},A=e("div",{class:"py-1 md:py-4 lg:py-8 px-4 md:px-6 lg:px-10 text-gray-600 text-gray-600 text-center text-[30px] md:text-[32px] lg:text-[40px]"},"Register & Login ",-1),S={class:"relative py-4 z-0 px-8"},V={class:"mb-4"},z=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},"Enter WhatsApp Number",-1),B=e("span",{class:"text-sm text-gray-400"}," An OTP will be sent to this whats app number",-1),D=_('<div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Whatsapp</button></div><div class="mb-4"><div class="flex items-center uppercase text-gray-600 my-4 before:flex-1 before:border-t before:border-gray-600 before:mt-0.5 after:flex-1 after:border-t after:border-gray-600 after:mt-0.5"><p class="text-center mx-4 mb-0">Or</p></div></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with SMS</button></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Email</button></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Facebook</button></div><div class="mb-4"><button class="appearance-none border-gray-600 rounded w-full py-2 px-3 text-grey-darker bg-[#40b751] hover:bg-transparent text-white hover:text-[#40b751] py-2 tracking-wide px-4 border border-[#40b751] hover:border-[#40b751] py-3 text-xs uppercase rounded">Login with Google</button></div><div class="mb-4"><div class="flex mb-10 justify-between"><span class="text-gray-600">Forget password? <a class="text-[#40b751]" href="/login.html">Click here</a></span><a class="text-[#40b751]" href="registration.html">Register</a></div></div><div class="mb-4"><span class="block text-gray-600 text-center text-base mb-2"><a class="text-[#40b751]" href="registration.html">Login </a> \xA0via ID Password</span></div>',8);function R(t,a,s,i,d,l){const n=b("Navbar"),r=b("Footer");return h(),m(v,null,[p(n),e("div",k,[$,e("div",L,[e("div",F,[e("div",N,[e("div",E,[A,e("div",S,[e("div",V,[z,x(e("input",{class:"appearance-none hover:border-[#40b751] border-gray-600 rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":a[0]||(a[0]=o=>t.email=o),type:"number"},null,512),[[u,t.email]]),B]),D])])])])])]),p(r)],64)}var C=c(f,[["render",R]]);export{C as default};
