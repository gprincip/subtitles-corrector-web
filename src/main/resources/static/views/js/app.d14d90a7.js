(function(){"use strict";var e={7098:function(e,t,n){var o=n(5130),s=n(6768);const i={class:"content"},r={class:"section"};function l(e,t,n,o,l,a){const c=(0,s.g2)("HeadingComponent"),d=(0,s.g2)("FileUploader"),u=(0,s.g2)("ContactForm"),p=(0,s.g2)("FooterComponent");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",r,[(0,s.bF)(c,{first_line:"Subtitles corrector",second_line:"An app that fixes character encoding and formatting issues in subtitle files, ensuring they're clean and ready for use"}),(0,s.bF)(d),(0,s.bF)(u)]),(0,s.bF)(p)])}const a={class:"box",style:{"background-color":"#004266"}};function c(e,t,n,o,i,r){const l=(0,s.g2)("GenericButton");return(0,s.uX)(),(0,s.CE)("div",a,[t[0]||(t[0]=(0,s.Fv)('<div class="field"><label class="label has-text-white">Noticed a subtitle problem that Subtitles Corrector doesn&#39;t fix? Have a feedback or suggestion? Let us know!</label><input placeholder="Email" class="input" type="email" id="email" name="email"></div><div class="field"><input class="input" placeholder="Description" type="text" id="description" name="description"></div>',2)),(0,s.bF)(l,{button_text:"Submit"})])}var d=n(4232);const u={class:"field"},p={class:"control"},f=["disabled"];function h(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)("div",u,[(0,s.Lk)("div",p,[(0,s.Lk)("button",{type:"submit",class:(0,d.C4)(["button is-success is-fullwidth",n.loading?"is-loading":""]),disabled:n.loading},(0,d.v_)(n.button_text),11,f)])])}var g={props:{loading:Boolean,button_text:String},name:"GenericButton",loading:!1},b=n(1241);const v=(0,b.A)(g,[["render",h]]);var m=v,C={name:"ContactForm",components:{GenericButton:m}};const k=(0,b.A)(C,[["render",c]]);var y=k;const x={class:"container"},w={class:"field"},L={class:"control"},_={key:0,class:"has-text-centered",style:{"margin-bottom":"24px"}},E=["href"],F={key:1,class:"box",style:{"background-color":"#004266","margin-bottom":"24px"}},S={key:0,class:"label has-text-white"},P={key:1,class:"label has-text-white"},O=["value"],X={key:2,class:"notification is-danger",style:{"margin-bottom":"24px"}};function A(e,t,n,i,r,l){const a=(0,s.g2)("GenericButton");return(0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("form",{onSubmit:t[1]||(t[1]=(0,o.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"])),enctype:"multipart/form-data",class:"box",style:{"background-color":"#004266"}},[(0,s.Lk)("div",w,[t[2]||(t[2]=(0,s.Lk)("label",{class:"label has-text-white"},"Choose a subtitle file:",-1)),(0,s.Lk)("div",L,[(0,s.Lk)("input",{class:"input",type:"file",id:"file_upload",name:"file",accept:".srt, .sub, .txt",onChange:t[0]||(t[0]=(...e)=>l.handleFileChange&&l.handleFileChange(...e))},null,32)])]),(0,s.bF)(a,{loading:r.loading,button_text:"Upload"},null,8,["loading"])],32),r.downloadLink?((0,s.uX)(),(0,s.CE)("div",_,[(0,s.Lk)("a",{href:r.downloadLink,class:"button is-link is-light"}," Download Corrected File ",8,E)])):(0,s.Q3)("",!0),Object.keys(r.fileProcessingLogs).length>0?((0,s.uX)(),(0,s.CE)("div",F,[t[3]||(t[3]=(0,s.Lk)("div",{class:"label has-text-white"}," Changes applied: ",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.fileProcessingLogs,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"label",key:t},[1==e?((0,s.uX)(),(0,s.CE)("div",S,(0,d.v_)(t),1)):(0,s.Q3)("",!0),1!=e?((0,s.uX)(),(0,s.CE)("div",P,(0,d.v_)(t)+"   x"+(0,d.v_)(e),1)):(0,s.Q3)("",!0)])))),128)),(0,s.Lk)("progress",{class:"progress is-success",value:this.processedPercentage,max:"100"},(0,d.v_)(r.processedPercentage),9,O)])):(0,s.Q3)("",!0),r.error?((0,s.uX)(),(0,s.CE)("div",X,(0,d.v_)(r.error),1)):(0,s.Q3)("",!0)])}var D=n(46),j=n(4587),B=n.n(j),N={name:"FileUploader",components:{GenericButton:m},data(){return{file:null,loading:!1,downloadLink:"",error:null,fileProcessingLogs:{},processedPercentage:0}},methods:{handleFileChange(e){this.file=e.target.files[0]},async handleSubmit(){if(this.fileProcessingLogs={},this.processingProgress=0,!this.file)return void(this.error="Please select a file.");this.error=null,this.loading=!0,this.downloadLink="";const e=new FormData;e.append("file",this.file),this.establishWSConnection();try{const t=await fetch("api/rest/1.0/upload",{method:"POST",body:e});if(t.ok){const e=await t.text();this.downloadLink=e}else{const e=await t.text();this.error=e||"Submission failed!"}}catch(t){console.error("Error:",t),this.error="An error occurred!"}finally{this.loading=!1}},establishWSConnection(){let e="/subtitles",t="http://localhost:8080";console.log("process.env.VUE_APP_ENVIRONMENT=dev"),console.log("Sock connection: "+t+e+"/sc-ws-connection-entrypoint");const n=new(B())(t+e+"/sc-ws-connection-entrypoint");this.stompClient=new D.K({webSocketFactory:()=>n,reconnectDelay:5e3,onConnect:this.onConnected,onStompError:this.onError}),this.stompClient.activate()},handleMessage(e){let t=this.fileProcessingLogs[e.correctionDescription];t?(t++,this.fileProcessingLogs[e.correctionDescription]=t):this.fileProcessingLogs[e.correctionDescription]=1,this.processedPercentage=e.processedPercentage},onConnected(){console.log("Connected to WebSocket"),this.stompClient.subscribe("/topic/subtitles-processing-log",(e=>{this.handleMessage(JSON.parse(e.body))}))},onError(e){console.error("WebSocket error:",e)},sendMessage(e){this.stompClient&&this.stompClient.connected&&this.stompClient.publish({destination:"/app/ws/1.0/upload",body:JSON.stringify({message:e})})}}};const Q=(0,b.A)(N,[["render",A]]);var W=Q;const G={class:"footer"};function M(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)("footer",G,t[0]||(t[0]=[(0,s.Lk)("div",{class:"content has-text-centered"},[(0,s.Lk)("p",null,[(0,s.eW)(" The source code & website content is licensed "),(0,s.Lk)("a",{href:"https://creativecommons.org/licenses/by-nc/4.0/deed.en"},"CC BY-NC 4.0"),(0,s.eW)(". ")])],-1)]))}var T={name:"FooterComponent"};const U=(0,b.A)(T,[["render",M]]);var H=U;const K={key:0,class:"title has-text-primary has-text-centered"},I={key:1,class:"subtitle has-text-centered"};function J(e,t,n,o,i,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[n.first_line?((0,s.uX)(),(0,s.CE)("h1",K,(0,d.v_)(n.first_line),1)):(0,s.Q3)("",!0),t[0]||(t[0]=(0,s.eW)()),t[1]||(t[1]=(0,s.Lk)("br",null,null,-1)),n.second_line?((0,s.uX)(),(0,s.CE)("p",I,(0,d.v_)(n.second_line),1)):(0,s.Q3)("",!0)],64)}var V={name:"HeadingComponent",props:{first_line:String,second_line:String}};const R=(0,b.A)(V,[["render",J]]);var Y=R,$={name:"App",components:{FileUploader:W,FooterComponent:H,HeadingComponent:Y,ContactForm:y}};const q=(0,b.A)($,[["render",l]]);var z=q;(0,o.Ef)(z).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],i=e[d][2];for(var l=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,r=o[0],l=o[1],a=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var d=a(n)}for(t&&t(o);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkfrontend_vue"]=self["webpackChunkfrontend_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7098)}));o=n.O(o)})();
//# sourceMappingURL=app.d14d90a7.js.map