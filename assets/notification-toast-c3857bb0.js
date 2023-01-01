import"./styles-fac82e35.js";class r{constructor(t=5e3,e,s){switch(this.duration=t,e){case"success":this.toastElement=this.successToast(s);break;case"error":this.toastElement=this.errorToast(s);break;case"info":this.toastElement=this.infoToast(s);break;default:this.toastElement=this.successToast(s)}}getToastElement(){return this.toastElement}createToastElement(t,e){const s=document.createElement("li");return s.classList.add(`toast-${t}`),s.innerText=e,s}successToast(t){return this.toastElement=this.createToastElement("success",t),this.hideToastAfterDuration(),this.toastElement}hideToastAfterDuration(){const t=this.toastElement;this.timer=setTimeout(()=>{t.classList.add("remove"),this.toastElement.addEventListener("animationend",function e(){t.remove(),t.removeEventListener("animationend",e)})},this.duration)}errorToast(t){return this.toastElement=this.createToastElement("error",t),this.hideToastAfterDuration(),this.toastElement}infoToast(t){return this.toastElement=this.createToastElement("info",t),this.hideToastAfterDuration(),this.toastElement}}class a{constructor({position:t="top-right"}){this.createRootElement(t)}createRootElement(t){this.root=document.createElement("ul"),this.root.classList.add("toast-root",t),document.body.appendChild(this.root)}success(t,e){const s=new r(e==null?void 0:e.duration,"success",t).getToastElement();this.show(s,e)}show(t,e){this.root.firstElementChild&&!(e!=null&&e.insertAtEnd)?this.root.insertBefore(t,this.root.firstElementChild):this.root.appendChild(t)}error(t,e){const s=new r(e==null?void 0:e.duration,"error",t).getToastElement();this.show(s,e)}info(t,e){const s=new r(e==null?void 0:e.duration,"info",t).getToastElement();this.show(s,e)}}const n=new a({position:"bottom-right"});document.getElementById("success-trigger").addEventListener("click",function(){n.success("Success: Duration: 3000, Inserted at end",{insertAtEnd:!0})});document.getElementById("error-trigger").addEventListener("click",function(){n.error("Error: Duration: 2000, Inserted at start ",{duration:2e3,insertAtEnd:!1})});document.getElementById("info-trigger").addEventListener("click",function(){n.info("Info: Duration: 1000, Inserted at end",{duration:1e3,insertAtEnd:!0})});
