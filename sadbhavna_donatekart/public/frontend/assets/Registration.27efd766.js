import{N as b,F as _}from"./Footer.0315bc53.js";import{_ as g,o as x,c as f,k as d,e,y as n,G as i,t as l,p as a,w as v,F as w,r as p}from"./index.f3a6e8b1.js";const y={name:"Registration",components:{Navbar:b,Footer:_},data(){return{first_name:"",firstNameError:"",last_name:"",email:"",emailError:"",password:"",passwordError:"",conform_password:"",confirmPasswordError:"",phone_number:"",phoneNumberError:"",pan_number:"",panError:"",error:!1}},resources:{register(){return{method:"sadbhavna_donatekart.api.api.register",onSuccess:t=>{confirm("your registration is successfully now you can login")==!0?this.$router.push("/sadbhavna/login"):this.$router.go(-1)},onError:t=>{this.$toast({title:"Error",text:t,customIcon:"circle-fail",appearance:"denger"}),console.log(t)}}}},methods:{validPassword:function(t){var r=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;return r.test(t)},validEmail:function(t){var r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(t)},validPhone:function(t){var r=/^[6-9][0-9]{9}$/;return r.test(t)},validName:function(t){var r=/^[A-Za-z]+$/;return r.test(t)},validPAN:function(t){var r=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;return r.test(t)},register(){!this.first_name&&!this.email&&!this.password&&!this.conform_password&&!this.phone_number&&!this.pan_number?(this.firstNameError="Enter valid firstname!",this.emailError="Enter valid email!",this.passwordError="Enter strong password, minimum eight characters, at least one letter, one number and one special character!",this.confirmPasswordError="Your password is not match!",this.phoneNumberError="Enter valid phone number!",this.panError="Enter valid PAN number",this.error==!0):this.first_name==""||!this.validName(this.first_name)?(this.firstNameError="Enter valid firstname!",this.error=!0,console.log("firstname")):this.email==""||!this.validEmail(this.email)?(this.emailError="Enter valid email!",this.error=!0,console.log("email")):this.password==""||!this.validPassword(this.password)?(this.passwordError="Enter strong password, minimum eight characters, at least one letter, one number and one special character!",this.error=!0,console.log("password")):this.conform_password==""||this.conform_password!=this.password?(this.confirmPasswordError="Your password is not match!",this.error=!0,console.log("con_pw")):this.phone_number==""||!this.validPhone(this.phone_number)?(this.phoneNumberError="Enter valid phone number!",this.error=!0,console.log("phone")):this.pan_number==""||!this.validPAN(this.pan_number)?(this.panError="Enter valid PAN number",this.error=!0,console.log("pan")):(console.log("done"),this.$resources.register.submit({first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,phone_number:this.phone_number,pan_number:this.pan_number}),this.error==!1)}}},E={class:"container mx-auto h-full pb-[48px]"},N=e("div",{class:"absolute bg-bottom bg-x-center bg-y-bottom bg-no-repeat z-1 top-96 sm:h-0 md:h-0 lg:h-0 xl:h-[630px] sm:w-0 md:w-0 lg:w-0 xl:w-96 sm:right-0 md:right-5 lg:right-16 bg-no-repeat opacity-40 bg-white bg-contain bg-no-repeat",style:{"background-image":"url('https://crowdfunding.frappe.cloud/files/bg-tree.png')"}},null,-1),k={class:"w-full sm:pt-0 md:pt-5 lg:pt-12"},P={class:"container mx-auto py-0"},A={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},V=e("h1",{class:"text-[20px] md:text-[30px] lg:text-[36px] font-semibold py-8 px-10 text-gray-600 text-bold text-center"}," Donor Registration ",-1),q={class:"relative z-0"},z={class:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},F={class:"mr-2"},U=e("label",{class:"block text-gray-600 text-base mb-2"},[a("First Name "),e("span",{class:"text-red-600"},"*")],-1),Z={class:"text-red-600"},C=e("label",{class:"block text-gray-600 text-base mb-2"},"Last Name",-1),R={class:"mb-4"},B=e("label",{class:"block text-gray-600 text-base mb-2"},[a("Email Address "),e("span",{class:"text-red-600"},"*")],-1),D={class:"text-red-600"},S={class:"mb-4"},I=e("label",{class:"block text-gray-600 text-base mb-2"},[a("Password "),e("span",{class:"text-red-600"},"*")],-1),T={class:"text-red-600"},Y={class:"mb-4"},j=e("label",{class:"block text-gray-600 text-base mb-2"},[a("Confirm Password "),e("span",{class:"text-red-600"},"*")],-1),G={class:"text-red-600"},L={class:"mb-4"},M=e("label",{class:"block text-gray-600 text-base mb-2"},[a("Phone Number "),e("span",{class:"text-red-600"},"*")],-1),H={class:"text-red-600"},J={class:"mb-4"},K=e("label",{class:"block text-gray-600 text-base mb-2"},[a("Pan Number "),e("span",{class:"text-red-600"},"*")],-1),O={class:"text-red-600"},Q={class:"flex items-center justify-between mt-8"},W={class:"block text-gray-600 text-base mb-2"};function X(t,r,$,ee,s,m){const c=p("Navbar"),u=p("router-link"),h=p("Footer");return x(),f(w,null,[d(c),e("div",E,[N,e("div",k,[e("div",P,[e("div",A,[V,e("div",q,[e("div",z,[e("div",F,[U,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[0]||(r[0]=o=>s.first_name=o),type:"text",required:""},null,512),[[i,s.first_name]]),e("p",Z,l(s.firstNameError),1)]),e("div",null,[C,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[1]||(r[1]=o=>s.last_name=o),type:"text",required:""},null,512),[[i,s.last_name]])])]),e("div",R,[B,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[2]||(r[2]=o=>s.email=o),type:"email",required:""},null,512),[[i,s.email]]),e("p",D,l(s.emailError),1)]),e("div",S,[I,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[3]||(r[3]=o=>s.password=o),type:"password",required:""},null,512),[[i,s.password]]),e("p",T,l(s.passwordError),1)]),e("div",Y,[j,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[4]||(r[4]=o=>s.conform_password=o),type:"password",required:""},null,512),[[i,s.conform_password]]),e("p",G,l(s.confirmPasswordError),1)]),e("div",L,[M,n(e("input",{class:"appearance-none border-gray-300 hover:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[5]||(r[5]=o=>s.phone_number=o),type:"number",required:""},null,512),[[i,s.phone_number]]),e("p",H,l(s.phoneNumberError),1)]),e("div",J,[K,n(e("input",{class:"appearance-none border-gray-300 ho ver:border-[#40b751] rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":r[6]||(r[6]=o=>s.pan_number=o),type:"text",required:""},null,512),[[i,s.pan_number]]),e("p",O,l(s.panError),1)]),e("div",Q,[e("button",{class:"bg-[#40b751] mb-2 uppercase text-[13px] hover:bg-blue-dark text-white py-2 px-8 rounded-lg",type:"submit",onClick:r[7]||(r[7]=o=>m.register())}," Register ")]),e("span",W,[a(" Already have an account? "),d(u,{to:"/sadbhavna/login",class:"text-[#40b751]"},{default:v(()=>[a("Sign In")]),_:1})])])])])])]),d(h)],64)}var te=g(y,[["render",X]]);export{te as default};
