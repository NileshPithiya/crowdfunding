var h=(o,e,t)=>new Promise((p,s)=>{var l=a=>{try{r(t.next(a))}catch(d){s(d)}},i=a=>{try{r(t.throw(a))}catch(d){s(d)}},r=a=>a.done?p(a.value):Promise.resolve(a.value).then(l,i);r((t=t.apply(o,e)).next())});import{_ as v,o as f,c as m,e as D,h as y,i as F,j as k,B as S,D as x,k as u,w as n,p as c,t as N,f as U,b as V,F as A,r as g}from"./index.f74a5808.js";class E{constructor(){this.listeners={}}on(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)}trigger(e,t){(this.listeners[e]||[]).forEach(s=>{s.call(this,t)})}upload(e,t){return new Promise((p,s)=>{let l=new XMLHttpRequest;l.upload.addEventListener("loadstart",()=>{this.trigger("start")}),l.upload.addEventListener("progress",r=>{r.lengthComputable&&this.trigger("progress",{uploaded:r.loaded,total:r.total})}),l.upload.addEventListener("load",()=>{this.trigger("finish")}),l.addEventListener("error",()=>{this.trigger("error"),s()}),l.onreadystatechange=()=>{if(l.readyState==XMLHttpRequest.DONE){let r;if(l.status===200){let a=null;try{a=JSON.parse(l.responseText)}catch(_){a=l.responseText}let d=a.message||a;p(d)}else if(l.status===403)r=JSON.parse(l.responseText);else{this.failed=!0;try{r=JSON.parse(l.responseText)}catch(a){}}r&&r.exc&&console.error(JSON.parse(r.exc)[0]),s(r)}},l.open("POST","/api/method/upload_file",!0),l.setRequestHeader("Accept","application/json"),window.csrf_token&&window.csrf_token!=="{{ csrf_token }}"&&l.setRequestHeader("X-Frappe-CSRF-Token",window.csrf_token);let i=new FormData;e&&i.append("file",e,e.name),i.append("is_private",+(t.private||0)),i.append("folder",t.folder||"Home"),t.file_url&&i.append("file_url",t.file_url),t.doctype&&t.docname&&(i.append("doctype",t.doctype),i.append("docname",t.docname),t.fieldname&&i.append("fieldname",t.fieldname)),t.method&&i.append("method",t.method),t.type&&i.append("type",t.type),l.send(i)})}}const O={name:"FileUploader",props:["fileTypes","uploadArgs","type","validateFile"],data(){return{uploader:null,uploading:!1,uploaded:0,error:null,message:"",total:0,file:null,finishedUploading:!1}},computed:{progress(){let o=Math.floor(this.uploaded/this.total*100);return isNaN(o)?0:o},success(){return this.finishedUploading&&!this.error}},methods:{openFileSelector(){this.$refs.input.click()},onFileAdd(o){return h(this,null,function*(){if(this.error=null,this.file=o.target.files[0],this.file&&this.validateFile)try{let e=yield this.validateFile(this.file);e&&(this.error=e)}catch(e){this.error=e}this.error||this.uploadFile(this.file)})},uploadFile(o){return h(this,null,function*(){this.error=null,this.uploaded=0,this.total=0,this.uploader=new E,this.uploader.on("start",()=>{this.uploading=!0}),this.uploader.on("progress",e=>{this.uploaded=e.uploaded,this.total=e.total}),this.uploader.on("error",()=>{this.uploading=!1,this.error="Error Uploading File"}),this.uploader.on("finish",()=>{this.uploading=!1,this.finishedUploading=!0}),this.uploader.upload(o,this.uploadArgs||{}).then(e=>{this.$emit("success",e)}).catch(e=>{this.uploading=!1;let t="Error Uploading File";e._server_messages?t=JSON.parse(JSON.parse(e._server_messages)[0]).message:e.exc&&(t=JSON.parse(e.exc)[0].split(`
`).slice(-2,-1)[0]),this.error=t,this.$emit("failure",e)})})}}},T=["accept"];function B(o,e,t,p,s,l){return f(),m("div",null,[D("input",{ref:"input",type:"file",accept:t.fileTypes,class:"hidden",onChange:e[0]||(e[0]=(...i)=>l.onFileAdd&&l.onFileAdd(...i))},null,40,T),y(o.$slots,"default",F(k({file:s.file,uploading:s.uploading,progress:l.progress,uploaded:s.uploaded,message:s.message,error:s.error,total:s.total,success:l.success,openFileSelector:l.openFileSelector})))])}var L=v(O,[["render",B]]);const J={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:S,Dialog:x,FileUploader:L},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(o){let e=o.target.files[0];!e||(this.addVideoDialog.file=e)},addVideo(o){this.editor.chain().focus().insertContent(`<video src="${o}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},R={class:"flex items-center space-x-2"},H=["src"];function q(o,e,t,p,s,l){const i=g("Button"),r=g("FileUploader"),a=g("Dialog");return f(),m(A,null,[y(o.$slots,"default",F(k({onClick:l.openDialog}))),u(a,{options:{title:"Add Video"},modelValue:s.addVideoDialog.show,"onUpdate:modelValue":e[2]||(e[2]=d=>s.addVideoDialog.show=d),onAfterLeave:l.reset},{"body-content":n(()=>[u(r,{"file-types":"video/*",onSuccess:e[0]||(e[0]=d=>s.addVideoDialog.url=d.file_url)},{default:n(({file:d,progress:_,uploading:w,openFileSelector:C})=>[D("div",R,[u(i,{onClick:C},{default:n(()=>[c(N(w?`Uploading ${_}%`:s.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),s.addVideoDialog.url?(f(),U(i,{key:0,onClick:()=>{s.addVideoDialog.url=null,s.addVideoDialog.file=null}},{default:n(()=>[c(" Remove ")]),_:2},1032,["onClick"])):V("",!0)])]),_:1}),s.addVideoDialog.url?(f(),m("video",{key:0,src:s.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,H)):V("",!0)]),actions:n(()=>[u(i,{appearance:"primary",onClick:e[1]||(e[1]=d=>l.addVideo(s.addVideoDialog.url))},{default:n(()=>[c(" Insert Video ")]),_:1}),u(i,{onClick:l.reset},{default:n(()=>[c("Cancel")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var P=v(J,[["render",q]]);export{P as default};
