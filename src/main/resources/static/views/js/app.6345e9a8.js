(function(){"use strict";var e={3382:function(e,t,o){var n=o(5130),s=o(6768);const i={class:"content"},a={class:"section"};function l(e,t,o,n,l,r){const c=(0,s.g2)("HeadingComponent"),d=(0,s.g2)("FileUploader"),u=(0,s.g2)("ContactForm"),h=(0,s.g2)("FooterComponent");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",a,[(0,s.bF)(c,{first_line:"Subtitles corrector",second_line:"Easily fix character encoding, formatting issues, and edit subtitles, ensuring your subtitle files are clean, accurate, and ready for use.",heading_link:"https://subtitles-corrector.com"}),(0,s.bF)(d),(0,s.bF)(u)]),(0,s.bF)(h)])}var r=o(4232);const c={class:"container",style:{"margin-bottom":"24px"}},d={class:"field"},u={class:"field"};function h(e,t,o,i,a,l){const h=(0,s.g2)("GenericButton");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",c,[(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)((e=>l.submitContactForm()),["prevent"])),class:"box",style:{"background-color":"#004266"}},[(0,s.Lk)("div",d,[t[3]||(t[3]=(0,s.Lk)("label",{class:"label has-text-white"},"Noticed a subtitle problem that Subtitles Corrector doesn't fix? Have a feedback or suggestion? Let us know!",-1)),t[4]||(t[4]=(0,s.eW)()),t[5]||(t[5]=(0,s.Lk)("br",null,null,-1)),(0,s.Lk)("input",{placeholder:"Email",class:"input",type:"email",id:"email",name:"email",onChange:t[0]||(t[0]=(...e)=>l.handleEmailChange&&l.handleEmailChange(...e)),required:""},null,32)]),(0,s.Lk)("div",u,[(0,s.Lk)("textarea",{class:"textarea",placeholder:"Description",type:"text",id:"description",name:"description",onChange:t[1]||(t[1]=(...e)=>l.handleDescriptionChange&&l.handleDescriptionChange(...e)),required:""},null,32)]),(0,s.bF)(h,{button_text:"Submit",loading:this.loading},null,8,["loading"])],32)]),""!=a.contactFormConfirmation?((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,r.C4)(["notification",this.error?"is-danger":"is-success"])},(0,r.v_)(this.contactFormConfirmation),3)):(0,s.Q3)("",!0)],64)}const g={class:"field"},p={class:"control"},b=["disabled"];function f(e,t,o,n,i,a){return(0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("div",p,[(0,s.Lk)("button",{type:"button",class:(0,r.C4)(["button is-success is-fullwidth",o.loading?"is-loading":""]),disabled:o.loading},(0,r.v_)(o.button_text),11,b)])])}var m={props:{loading:Boolean,button_text:String,enabled:Boolean},name:"GenericButton",loading:!1},v=o(1241);const k=(0,v.A)(m,[["render",f]]);var C=k,L={name:"ContactForm",components:{GenericButton:C},data(){return{email:String,description:String,contactFormConfirmation:"",error:!1,loading:!1}},methods:{handleEmailChange(e){this.email=e.target.value},handleDescriptionChange(e){this.description=e.target.value},async submitContactForm(){try{this.loading=!0;const e=new FormData;e.append("email",this.email),e.append("description",this.description);const t=await fetch("api/rest/1.0/submitContactForm",{method:"POST",body:e}),o=await t.json();t.ok?(this.contactFormConfirmation="Form successfully submitted!",this.error=!1):o?(this.error=!0,this.contactFormConfirmation="FAILURE_EMAIL_SEND_RATE_LIMIT"==o?"Temporary quotas exceeded, form not submitted. Try again later.":"DEVELOPMENT_NOT_SENT"==o?"Email not sent because we are in development.":"Internal server error!"):(this.contactFormConfirmation="Internal server error!",this.error=!0)}catch(e){console.error("Error:",e),this.contactFormConfirmation=e,this.error=!0}finally{this.loading=!1}}}};const w=(0,v.A)(L,[["render",h]]);var y=w;const F={key:0,class:"notification is-success"},_={class:"file has-name is-fullwidth field"},P={class:"file-label"},D={class:"file-name",style:{"background-color":"white"}},E={key:0},S={key:1,class:"notification is-link"},x={key:2,class:"notification is-danger",style:{"margin-bottom":"24px"}};function M(e,t,o,i,a,l){const c=(0,s.g2)("ModalComponent"),d=(0,s.g2)("GenericButton");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c,{modalActive:a.showModal,onCloseModal:l.onCloseModal,onSaveClicked:l.saveModalClicked,fileProcessingLogs:a.fileProcessingLogs,processedPercentage:a.processedPercentage,subtitleData:a.subtitleData,lastFileProcessingLogReceived:a.lastFileProcessingLogReceived,userId:a.userId},null,8,["modalActive","onCloseModal","onSaveClicked","fileProcessingLogs","processedPercentage","subtitleData","lastFileProcessingLogReceived","userId"]),a.showSaved?((0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("button",{class:"delete",onClick:t[0]||(t[0]=()=>{this.showSaved=!1})}),t[4]||(t[4]=(0,s.eW)(" Changes saved "))])):(0,s.Q3)("",!0),(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)((()=>{}),["prevent"])),enctype:"multipart/form-data",class:"box",style:{"background-color":"#004266"}},[t[6]||(t[6]=(0,s.Lk)("label",{class:"label has-text-white"},"Upload a subtitle file:",-1)),t[7]||(t[7]=(0,s.eW)()),t[8]||(t[8]=(0,s.Lk)("br",null,null,-1)),(0,s.Lk)("div",_,[(0,s.Lk)("label",P,[(0,s.Lk)("input",{class:"file-input",type:"file",name:"file",accept:".srt, .sub, .txt",onChange:t[1]||(t[1]=(...e)=>l.handleFileChange&&l.handleFileChange(...e))},null,32),t[5]||(t[5]=(0,s.Lk)("span",{class:"file-cta"},[(0,s.Lk)("span",{class:"file-icon"},[(0,s.Lk)("i",{class:"fas fa-upload"})]),(0,s.Lk)("span",{class:"file-label"}," Choose a file… ")],-1)),(0,s.Lk)("span",D,[this.file?((0,s.uX)(),(0,s.CE)("div",E,(0,r.v_)(this.file.name),1)):(0,s.Q3)("",!0)])])]),(0,s.bF)(d,{loading:a.loading,button_text:"Upload",enabled:this.upload_button_enabled,onClick:l.handleSubmit},null,8,["loading","enabled","onClick"]),a.showDownloadLink?((0,s.uX)(),(0,s.Wv)(d,{key:0,loading:!1,button_text:"Continue editing",enabled:!0,onClick:l.showModalMethod},null,8,["onClick"])):(0,s.Q3)("",!0)],32),this.subtitleFilename&&this.showDownloadLink?((0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("a",{onClick:t[3]||(t[3]=(...e)=>l.downloadFile&&l.downloadFile(...e)),class:""}," Download "+(0,r.v_)(this.subtitleFilename),1)])):(0,s.Q3)("",!0),a.error?((0,s.uX)(),(0,s.CE)("div",x,(0,r.v_)(a.error),1)):(0,s.Q3)("",!0)],64)}o(4603),o(7566),o(8721);const O={class:"modal-card"},I={class:"modal-card-head"},X={class:"modal-card-body"},A={class:"modal-card-foot"},j={class:"buttons"};function R(e,t,o,n,i,a){const l=(0,s.g2)("AppliedChanges"),c=(0,s.g2)("SubtitleContentComponent");return(0,s.uX)(),(0,s.CE)("div",{class:(0,r.C4)(["modal",o.modalActive?"is-active":""])},[(0,s.Lk)("div",{class:"modal-background",onClick:t[0]||(t[0]=(...e)=>a.closeModal&&a.closeModal(...e))}),(0,s.Lk)("div",O,[(0,s.Lk)("header",I,[t[4]||(t[4]=(0,s.Lk)("p",{class:"modal-card-title"},"Subtitle editor",-1)),(0,s.Lk)("button",{class:"delete","aria-label":"close",onClick:t[1]||(t[1]=(...e)=>a.closeModal&&a.closeModal(...e))})]),(0,s.Lk)("section",X,[(0,s.bF)(l,{fileProcessingLogs:o.fileProcessingLogs,processedPercentage:o.processedPercentage},null,8,["fileProcessingLogs","processedPercentage"]),o.lastFileProcessingLogReceived?((0,s.uX)(),(0,s.Wv)(c,{key:0,subtitleData:o.subtitleData},null,8,["subtitleData"])):(0,s.Q3)("",!0)]),(0,s.Lk)("footer",A,[(0,s.Lk)("div",j,[(0,s.Lk)("button",{class:(0,r.C4)(["button is-success",this.loading?"is-loading":""]),onClick:t[2]||(t[2]=(...e)=>a.save&&a.save(...e))},"Save changes",2),(0,s.Lk)("button",{class:"button",onClick:t[3]||(t[3]=(...e)=>a.cancel&&a.cancel(...e))},"Cancel")])])])],2)}const U={key:0,class:"box",style:{"background-color":"#004266","margin-bottom":"24px"}},T={key:0,class:"label has-text-white"},W={key:1,class:"label has-text-white"},Q=["value"];function N(e,t,o,n,i,a){return Object.keys(o.fileProcessingLogs).length>0?((0,s.uX)(),(0,s.CE)("div",U,[t[0]||(t[0]=(0,s.Lk)("div",{class:"label has-text-white"}," Changes applied: ",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.fileProcessingLogs,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"label",key:t},[1==e?((0,s.uX)(),(0,s.CE)("div",T,(0,r.v_)(t),1)):(0,s.Q3)("",!0),1!=e?((0,s.uX)(),(0,s.CE)("div",W,(0,r.v_)(t)+"   x"+(0,r.v_)(e),1)):(0,s.Q3)("",!0)])))),128)),(0,s.Lk)("progress",{class:"progress is-success",value:o.processedPercentage,max:"100"},(0,r.v_)(o.processedPercentage),9,Q)])):(0,s.Q3)("",!0)}var B={name:"AppliedChanges",props:{fileProcessingLogs:Object,processedPercentage:Number},data(){return{}}};const G=(0,v.A)(B,[["render",N]]);var H=G;const J=["onUpdate:modelValue"];function K(e,t,o,i,a,l){return(0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.subtitleData.lines,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.bo)((0,s.Lk)("textarea",{class:"textarea",rows:"2","onUpdate:modelValue":t=>e.text=t,style:{resize:"none"}},null,8,J),[[n.Jo,e.text]])])))),128)}var $={name:"SubtitleContentComponent",props:{subtitleData:Object}};const q=(0,v.A)($,[["render",K]]);var V=q,z={name:"ModalComponent",components:{AppliedChanges:H,SubtitleContentComponent:V},props:{subtitleData:Object,modalActive:{type:Boolean,default:!1},processedPercentage:Number,fileProcessingLogs:Object,lastFileProcessingLogReceived:Boolean,userId:String},data(){return{loading:!1}},methods:{closeModal(){this.$emit("closeModal")},async save(){this.loading=!0;let e=await fetch("api/rest/1.0/save?userId="+this.userId,{method:"POST",body:JSON.stringify(this.subtitleData),headers:new Headers({"Content-Type":"application/json"})});this.loading=!1,e.ok&&this.closeModal(),this.$emit("saveClicked")},cancel(){this.closeModal()}},computed:{subtitleFilename(){return this.subtitleData.filename?this.subtitleData.filename.substr(this.subtitleData.filename.indexOf("_")+1,this.subtitleData.filename.length):""}}};const Y=(0,v.A)(z,[["render",R]]);var Z=Y,ee={name:"FileUploader",components:{GenericButton:C,ModalComponent:Z},data(){return{file:null,loading:!1,error:null,subtitleData:Object,showModal:!1,fileProcessingLogs:{},processedPercentage:0,userId:crypto.randomUUID(),upload_button_enabled:!0,lastFileProcessingLogReceived:!1,user_acked:!1,showSaved:!1,showDownloadLink:!1}},methods:{handleFileChange(e){this.file=e.target.files[0];const t=[".srt"],o=this.file.name.toLowerCase(),n=t.some((e=>o.endsWith(e)));n?(this.error="",this.upload_button_enabled=!0):(this.error="Invalid file type. Please upload a .srt file.",this.upload_button_enabled=!1,e.target.value="",this.file=null)},async handleSubmit(){let e=0;while(!this.user_acked&&e<100)e++,setTimeout((()=>{}),10);if(this.fileProcessingLogs={},this.processingProgress=0,this.lastFileProcessingLogReceived=!1,this.showDownloadLink=!1,!this.file)return void(this.error="Please select a file.");this.error=null,this.loading=!0,this.downloadLink="";const t=new FormData;t.append("file",this.file),t.append("webSocketUserId",this.userId),this.fileProcessingLogs={},this.processedPercentage=0;try{const e=await fetch("api/rest/1.0/upload",{method:"POST",body:t});if(e.ok){const t=await e.json();this.subtitleData=t,this.loading=!1}else{const t=await e.json();t.httpResponseMessage?this.error=t.httpResponseMessage:this.error="Submission failed!",this.loading=!1}}catch(o){console.error("Error:",o),this.error="An error occurred!",this.loading=!1}},establishWSConnection(){let e="/subtitles",t="ws://localhost:8080";const o=new WebSocket(t+e+"/sc-ws-connection-entrypoint");o.onopen=()=>{console.log("WebSocket connected"),o.send("USER_ID<"+this.userId+">")},o.onmessage=e=>{this.isJson(e.data)?this.handleMessage(JSON.parse(e.data)):"USER_ACK"===e.data?this.user_acked=!0:console.log("Message: "+e.data)},o.onclose=()=>{console.log("WebSocket disconnected")}},handleMessage(e){if((e.correctionDescription||e.processedPercentage)&&this.showModalMethod(),e.correctionDescription){let t=this.fileProcessingLogs[e.correctionDescription];t?(t++,this.fileProcessingLogs[e.correctionDescription]=t):this.fileProcessingLogs[e.correctionDescription]=1}e.processedPercentage&&(this.processedPercentage=e.processedPercentage),"100"==e.processedPercentage&&(this.lastFileProcessingLogReceived=!0)},onCloseModal(){this.showModal=!1},showModalMethod(){this.showModal=!0},isJson(e){try{return JSON.parse(e),!0}catch(t){return!1}},async downloadFile(){const e=await fetch("api/rest/1.0/downloadFile?userId="+this.userId,{method:"GET"});if(e.ok){const t=await e.blob(),o=window.URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download="Subtitle-Corrector_"+this.subtitleData.filename.substr(this.subtitleData.filename.indexOf("_")+1,this.subtitleData.filename.length),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(o)}},saveModalClicked(){setTimeout((()=>{this.showDownloadLink=!0}),700)}},mounted:function(){this.establishWSConnection()},computed:{downloadLinkForUser(){return"api/rest/1.0/downloadFile?userId="+this.userId},subtitleFilename(){return this.subtitleData.filename?this.subtitleData.filename.substr(this.subtitleData.filename.indexOf("_")+1,this.subtitleData.filename.length):""}}};const te=(0,v.A)(ee,[["render",M]]);var oe=te;const ne={class:"footer"};function se(e,t,o,n,i,a){return(0,s.uX)(),(0,s.CE)("footer",ne,t[0]||(t[0]=[(0,s.Lk)("div",{class:"content has-text-centered"},[(0,s.Lk)("p",null,[(0,s.eW)(" The source code & website content is licensed "),(0,s.Lk)("a",{href:"https://creativecommons.org/licenses/by-nc/4.0/deed.en"},"CC BY-NC 4.0"),(0,s.eW)(". ")]),(0,s.Lk)("p",null,[(0,s.eW)(" Source code: "),(0,s.Lk)("a",{target:"_blank",href:"https://github.com/gadamovic/subtitles-corrector-web"},"GitHub")])],-1)]))}var ie={name:"FooterComponent"};const ae=(0,v.A)(ie,[["render",se]]);var le=ae;const re=["href"],ce={key:0,class:"title has-text-primary has-text-centered"},de={key:0,class:"subtitle has-text-centered"};function ue(e,t,o,n,i,a){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("a",{href:this.heading_link},[o.first_line?((0,s.uX)(),(0,s.CE)("h1",ce,(0,r.v_)(o.first_line),1)):(0,s.Q3)("",!0),t[0]||(t[0]=(0,s.eW)()),t[1]||(t[1]=(0,s.Lk)("br",null,null,-1))],8,re),o.second_line?((0,s.uX)(),(0,s.CE)("p",de,(0,r.v_)(o.second_line),1)):(0,s.Q3)("",!0)],64)}var he={name:"HeadingComponent",props:{first_line:String,second_line:String,heading_link:String}};const ge=(0,v.A)(he,[["render",ue]]);var pe=ge,be={name:"App",components:{FileUploader:oe,FooterComponent:le,HeadingComponent:pe,ContactForm:y},mounted:async function(){0}};const fe=(0,v.A)(be,[["render",l]]);var me=fe;(0,n.Ef)(me).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],i=e[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,s,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,a=n[0],l=n[1],r=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(r)var d=r(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkfrontend_vue"]=self["webpackChunkfrontend_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(3382)}));n=o.O(n)})();
//# sourceMappingURL=app.6345e9a8.js.map