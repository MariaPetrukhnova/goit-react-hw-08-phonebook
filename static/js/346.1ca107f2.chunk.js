"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{346:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(434),r=n(439),s="ContactForm_contacts_input__D-q0d",c="ContactForm_inputs_bar__MIwDa",u="ContactForm_contacts_label__SDFUH",o="ContactForm_contacts_btn__fUU8D",i=n(791),l=n(52),m=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},_=function(e){return e.contacts.e},f=n(382),h=n(329);function b(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],d=t[1],_=(0,i.useState)(""),b=(0,r.Z)(_,2),x=b[0],v=b[1],p=(0,a.I0)(),j=(0,a.v9)(m),C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":v(a);break;default:return}};return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.some((function(e){return e.name===n}))?alert("".concat(n," is already in contacts.")):(p((0,l.uK)({id:(0,f.x0)(),name:n,number:x})),d(""),v(""))},children:[(0,h.jsxs)("div",{className:c,children:[(0,h.jsxs)("label",{className:u,children:[" \u0406\u043c'\u044f",(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:C,className:s})]}),(0,h.jsxs)("label",{className:u,children:[" \u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,onChange:C,className:s})]})]}),(0,h.jsx)("button",{type:"submit",className:o,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}var x="Filter_filter_label__5ITod",v="Filter_filter_input__eu2zm",p=n(808),j=function(){var e=(0,a.I0)();return(0,h.jsxs)("label",{className:x,children:[" \u0417\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",(0,h.jsx)("input",{className:v,type:"text",onChange:function(t){var n=t.target.value.toLowerCase();e((0,p.Tv)(n))}})]})},C="ContactList_contacts_box__b6g-B",g="ContactList_del_btn__P3ISG",N="ContactList_contacts_item__E-7AL",w="ContactList_contacts_text__tJizO",k=n(164),y="Modal_Overlay__yoxbg",S="Modal_Modal__I1UYJ",Z=document.querySelector("#modal-root");function I(e){var t=e.onClose,n=e.userName,s=e.userNumber,c=e.userId,u=(0,i.useState)("".concat(n)),o=(0,r.Z)(u,2),m=o[0],d=o[1],_=(0,i.useState)("".concat(s)),f=(0,r.Z)(_,2),b=f[0],x=f[1],v=(0,i.useState)("".concat(c)),p=(0,r.Z)(v,2),j=p[0],C=p[1],g=(0,a.I0)(),N=function(e){"Escape"===e.code&&t()},w=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":x(a);break;case"id":C(a);break;default:return}};return(0,i.useEffect)((function(){return window.addEventListener("keydown",N),function(){window.removeEventListener("keydown",N)}})),(0,k.createPortal)((0,h.jsx)("div",{className:y,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,h.jsxs)("form",{className:S,onSubmit:function(e){e.preventDefault(),g((0,l.BY)({id:j,name:m,number:b})),t()},children:[(0,h.jsx)("input",{value:m,name:"name",onChange:w}),(0,h.jsx)("input",{value:b,name:"number",onChange:w}),(0,h.jsx)("button",{type:"submit",children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"})]})}),Z)}var L=function(){var e=(0,a.I0)(),t=(0,a.v9)(m),n=(0,a.v9)((function(e){return e.filter.filter})).toLowerCase(),s=(0,i.useState)(!1),c=(0,r.Z)(s,2),u=c[0],o=c[1],d=(0,i.useState)(""),_=(0,r.Z)(d,2),f=_[0],b=_[1],x=(0,i.useState)(""),v=(0,r.Z)(x,2),p=v[0],j=v[1],k=(0,i.useState)(""),y=(0,r.Z)(k,2),S=y[0],Z=y[1],L=function(e,t,n){o(!u),b(e),j(t),Z(n)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:C,children:t.filter((function(e){return e.name.toLowerCase().includes(n)})).map((function(t){var n=t.id,a=t.name,r=t.number;return(0,h.jsxs)("li",{className:N,children:[(0,h.jsxs)("span",{className:w,children:[a,": ",r]},n),(0,h.jsx)("button",{className:g,onClick:function(){return function(t){e((0,l.GK)(t))}(n)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,h.jsx)("button",{className:g,onClick:function(){return L(a,r,n)},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]},n)}))}),u&&(0,h.jsx)(I,{onClose:L,userName:f,userNumber:p,userId:S})]})};function F(){var e=(0,a.I0)(),t=(0,a.v9)(m),n=(0,a.v9)(d),r=(0,a.v9)(_);return(0,i.useEffect)((function(){e((0,l.yF)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{style:{textAlign:"center"},children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430"}),(0,h.jsx)(b,{}),(0,h.jsx)("h2",{style:{textAlign:"center"},children:"\u041c\u043e\u0457 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),t.length>1&&(0,h.jsx)(j,{}),n&&!r&&(0,h.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),t.length>0?(0,h.jsx)(L,{}):(0,h.jsx)("h2",{children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443"})]})}}}]);
//# sourceMappingURL=346.1ca107f2.chunk.js.map