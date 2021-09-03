(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={overlay:"modal_overlay__1X3EB",modal:"modal_modal__QwWsH"}},16:function(e,t,a){e.exports={imageItem:"imageItems_imageItem__1zG4E",imageGalleryItem_image:"imageItems_imageGalleryItem_image__2lITQ"}},17:function(e,t,a){e.exports={button:"button_button__28lGX",buttonClick:"button_buttonClick__XD5QE"}},28:function(e,t,a){e.exports={imageGallery:"imageGallery_imageGallery__3yrYs"}},36:function(e,t,a){},6:function(e,t,a){e.exports={searchBar:"searchbar_searchBar__3r1em",searchForm:"searchbar_searchForm__3T5kL",searchForm_button:"searchbar_searchForm_button__1KsDR",searchForm_button_label:"searchbar_searchForm_button_label__2Dg1-",searchForm_input:"searchbar_searchForm_input__16IAS"}},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(36),a(5)),i=a.n(s),l=a(18),u=a(11),m=a(7),b=a(9),j=a.n(b),h=a(3),d=(a(19),a(15)),f=a.n(d),g=a(1),_=document.querySelector("#modal-root");function O(e){var t=e.onClose,a=e.largeImageURL;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(g.jsx)("div",{className:f.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(g.jsx)("div",{className:f.a.modal,children:Object(g.jsx)("img",{src:a,alt:""})})}),_)}var p=a(6),x=a.n(p);function v(e){var t=e.onSearch;return Object(g.jsx)("header",{className:x.a.searchBar,children:Object(g.jsxs)("form",{className:x.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==e.target.elements.searchQuery.value.trim()?(t(e.target.elements.searchQuery.value.toLowerCase().trim()),e.target.elements.searchQuery.value=""):h.b.info("Please, enter query!")},children:[Object(g.jsx)("button",{type:"submit",className:x.a.searchForm_button,children:Object(g.jsx)("span",{className:x.a.searchForm_button_label,children:"Search"})}),Object(g.jsx)("input",{name:"searchQuery",className:x.a.searchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var y=a(28),w=a.n(y),k=a(16),S=a.n(k);function N(e){var t=e.webformatURL,a=e.largeImageURL,n=e.onClick;return Object(g.jsx)("li",{className:S.a.imageItem,onClick:function(){return n(a)},children:Object(g.jsx)("img",{src:t,alt:"",className:S.a.imageGalleryItem_image})})}function C(e){var t=e.images,a=e.imageSelected;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:w.a.imageGallery,children:t.map((function(e){return Object(g.jsx)(N,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,onClick:a},e.id)}))})})}var I,F=a(29),L=a(14),E=a(30),G=a.n(E),R=Object(L.css)(I||(I=Object(F.a)(["\n  display: flex;\n  margin: 0 auto;\n  border-color: red;\n"])));function U(){return Object(g.jsx)(G.a,{color:"#3f51b5",loading:Object(n.useState)(!0),css:R,size:220})}var Q=a(17),q=a.n(Q);function B(e){var t=e.onClick;return Object(g.jsx)("div",{className:q.a.button,children:Object(g.jsx)("button",{className:q.a.buttonClick,type:"button",onClick:t,children:"Load more"})})}var D=a(31),T=a.n(D),z=function(){var e=Object(u.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"22317274-5f5939ff79d612c3aacb02224",e.abrupt("return",T.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("22317274-5f5939ff79d612c3aacb02224","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function P(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(m.a)(c,2),s=o[0],b=o[1],d=Object(n.useState)(1),f=Object(m.a)(d,2),_=f[0],p=f[1],x=Object(n.useState)(""),y=Object(m.a)(x,2),w=y[0],k=y[1],S=Object(n.useState)("idle"),N=Object(m.a)(S,2),I=N[0],F=N[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F("pending"),e.prev=1,e.next=4,z(a,_);case 4:if((t=e.sent).length){e.next=7;break}throw new Error;case 7:b((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),F("resolved"),_>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),h.b.warning("Not found any images by query: ".concat(a)),F("rejected");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,_]);var L=function(e){e!==a?(E(),r(e)):h.b.info("Please, enter new query!")},E=function(){r(""),p(1),k(null),b([]),F("idle")};return"idle"===I?Object(g.jsx)("div",{className:j.a.container,children:Object(g.jsx)(v,{onSearch:L})}):"pending"===I?Object(g.jsxs)("div",{className:j.a.container,children:[Object(g.jsx)(v,{onSearch:L}),Object(g.jsx)(U,{})]}):"resolved"===I?Object(g.jsxs)("div",{className:j.a.container,children:[Object(g.jsx)(v,{onSearch:L}),Object(g.jsx)(C,{images:s,imageSelected:function(e){k(e)}}),s.length>0&&Object(g.jsx)(B,{onClick:function(){p((function(e){return e+1}))}}),w&&Object(g.jsx)(O,{largeImageURL:w,onClose:function(){k(!w)}}),Object(g.jsx)(h.a,{autoClose:3e3})]}):"rejected"===I?Object(g.jsxs)("div",{className:j.a.container,children:[Object(g.jsx)(v,{onSearch:L}),Object(g.jsx)(h.a,{autoClose:3e3})]}):void 0}o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.a659d68b.chunk.js.map