var p=(o,e,s)=>new Promise((d,t)=>{var r=i=>{try{a(s.next(i))}catch(n){t(n)}},l=i=>{try{a(s.throw(i))}catch(n){t(n)}},a=i=>i.done?d(i.value):Promise.resolve(i.value).then(r,l);a((s=s.apply(o,e)).next())});import{_ as u,o as h,c,e as f,h as g,i as m,j as _}from"./index.f3a6e8b1.js";class F{constructor(){this.listeners={}}on(e,s){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(s)}trigger(e,s){(this.listeners[e]||[]).forEach(t=>{t.call(this,s)})}upload(e,s){return new Promise((d,t)=>{let r=new XMLHttpRequest;r.upload.addEventListener("loadstart",()=>{this.trigger("start")}),r.upload.addEventListener("progress",a=>{a.lengthComputable&&this.trigger("progress",{uploaded:a.loaded,total:a.total})}),r.upload.addEventListener("load",()=>{this.trigger("finish")}),r.addEventListener("error",()=>{this.trigger("error"),t()}),r.onreadystatechange=()=>{if(r.readyState==XMLHttpRequest.DONE){let a;if(r.status===200){let i=null;try{i=JSON.parse(r.responseText)}catch(w){i=r.responseText}let n=i.message||i;d(n)}else if(r.status===403)a=JSON.parse(r.responseText);else{this.failed=!0;try{a=JSON.parse(r.responseText)}catch(i){}}a&&a.exc&&console.error(JSON.parse(a.exc)[0]),t(a)}},r.open("POST","/api/method/upload_file",!0),r.setRequestHeader("Accept","application/json"),window.csrf_token&&window.csrf_token!=="{{ csrf_token }}"&&r.setRequestHeader("X-Frappe-CSRF-Token",window.csrf_token);let l=new FormData;e&&l.append("file",e,e.name),l.append("is_private",+(s.private||0)),l.append("folder",s.folder||"Home"),s.file_url&&l.append("file_url",s.file_url),s.doctype&&s.docname&&(l.append("doctype",s.doctype),l.append("docname",s.docname),s.fieldname&&l.append("fieldname",s.fieldname)),s.method&&l.append("method",s.method),s.type&&l.append("type",s.type),r.send(l)})}}const y={name:"FileUploader",props:["fileTypes","uploadArgs","type","validateFile"],data(){return{uploader:null,uploading:!1,uploaded:0,error:null,message:"",total:0,file:null,finishedUploading:!1}},computed:{progress(){let o=Math.floor(this.uploaded/this.total*100);return isNaN(o)?0:o},success(){return this.finishedUploading&&!this.error}},methods:{openFileSelector(){this.$refs.input.click()},onFileAdd(o){return p(this,null,function*(){if(this.error=null,this.file=o.target.files[0],this.file&&this.validateFile)try{let e=yield this.validateFile(this.file);e&&(this.error=e)}catch(e){this.error=e}this.error||this.uploadFile(this.file)})},uploadFile(o){return p(this,null,function*(){this.error=null,this.uploaded=0,this.total=0,this.uploader=new F,this.uploader.on("start",()=>{this.uploading=!0}),this.uploader.on("progress",e=>{this.uploaded=e.uploaded,this.total=e.total}),this.uploader.on("error",()=>{this.uploading=!1,this.error="Error Uploading File"}),this.uploader.on("finish",()=>{this.uploading=!1,this.finishedUploading=!0}),this.uploader.upload(o,this.uploadArgs||{}).then(e=>{this.$emit("success",e)}).catch(e=>{this.uploading=!1;let s="Error Uploading File";e._server_messages?s=JSON.parse(JSON.parse(e._server_messages)[0]).message:e.exc&&(s=JSON.parse(e.exc)[0].split(`
`).slice(-2,-1)[0]),this.error=s,this.$emit("failure",e)})})}}},S=["accept"];function v(o,e,s,d,t,r){return h(),c("div",null,[f("input",{ref:"input",type:"file",accept:s.fileTypes,class:"hidden",onChange:e[0]||(e[0]=(...l)=>r.onFileAdd&&r.onFileAdd(...l))},null,40,S),g(o.$slots,"default",m(_({file:t.file,uploading:t.uploading,progress:r.progress,uploaded:t.uploaded,message:t.message,error:t.error,total:t.total,success:r.success,openFileSelector:r.openFileSelector})))])}var E=u(y,[["render",v]]);export{E as F};
