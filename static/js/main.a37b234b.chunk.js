(this["webpackJsonpsimbirsoft-practicum"]=this["webpackJsonpsimbirsoft-practicum"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={wrapper:"searchSelect_wrapper__2WvcM",label:"searchSelect_label__2yhdH",inputField:"searchSelect_inputField__3WADs",closeBtn:"searchSelect_closeBtn__1Le4S",selectList:"searchSelect_selectList__6s_8_",selectItem:"searchSelect_selectItem__kNwkH"}},,,function(e,t,n){e.exports={carousel:"carousel_carousel__1eOuo",img:"carousel_img__2fmIP",imgCurrent:"carousel_imgCurrent__5O47R",arrowBtnLeft:"carousel_arrowBtnLeft__CrmgF",arrowBtnRight:"carousel_arrowBtnRight__bXh38",content:"carousel_content__1pqO3",header:"carousel_header__2cWhJ",text:"carousel_text__b7LsU",button:"carousel_button__a2rZS",dots:"carousel_dots__14GiC",dotsItem:"carousel_dotsItem__1Um1T",dotsItemCurrent:"carousel_dotsItemCurrent__2oScW"}},,function(e,t,n){e.exports={wrapper:"menu_wrapper__21obe",menu:"menu_menu__mfDGC",navList:"menu_navList__3QAHP",navItem:"menu_navItem__bSMyo",navLink:"menu_navLink__8DbrL",social:"menu_social__1W3Ly",socialItem:"menu_socialItem__3AgTM",languageBtnMenu:"menu_languageBtnMenu__2VD5F"}},,function(e,t,n){e.exports={wrapper:"orderPage_wrapper__3eKoh",content:"orderPage_content__3U38V",container:"orderPage_container__3CViS",navBlock:"orderPage_navBlock__1Bk6S",order:"orderPage_order__1tjec",horizontLine:"orderPage_horizontLine__2ejup"}},function(e,t,n){e.exports={wrapper:"mainPage_wrapper__3mVeQ",sideBar:"mainPage_sideBar__1WwUC",content:"mainPage_content__1wm3V",carousel:"mainPage_carousel__N27FA",titleBlack:"mainPage_titleBlack__TBWxr",titleGreen:"mainPage_titleGreen__YfSUW",subtitle:"mainPage_subtitle__3cp49",buttonOrder:"mainPage_buttonOrder__rebyo"}},,function(e,t,n){e.exports={button:"buttonCategory_button__66YO3",checkBox:"buttonCategory_checkBox__1P7Sk",checkBoxActive:"buttonCategory_checkBoxActive__3HJRo",text:"buttonCategory_text__2VX4v",textActive:"buttonCategory_textActive__2Te5r"}},function(e,t,n){e.exports={card:"carCard_card__37Gth",cardActive:"carCard_cardActive__2l6Ks",model:"carCard_model__Bi0Oo",price:"carCard_price__3KxRi",img:"carCard_img__2cFwf"}},,,function(e,t,n){e.exports={wrapper:"breadCrumps_wrapper__2AqNX",tringle:"breadCrumps_tringle__1GUiS"}},function(e,t,n){e.exports={wrapper:"car_wrapper__yuCTs",category:"car_category__2rUUN",container:"car_container__14WFI",models:"car_models__u3B4h"}},,,,function(e,t,n){e.exports={wrapper:"footer_wrapper__NGf7i",licence:"footer_licence__ALCoo",phone:"footer_phone__gzMcB"}},function(e,t,n){e.exports={wrapper:"header_wrapper__3CwI1",logo:"header_logo__3f_uj",location:"header_location__3mydx"}},function(e,t,n){e.exports={button:"buttonNav_button__2Cxwq",buttonActive:"buttonNav_buttonActive__T-vlP",buttonDisabled:"buttonNav_buttonDisabled__BJPas"}},function(e,t,n){e.exports={container:"location_container__1kTm2",mapText:"location_mapText__186KM",map:"location_map__pZJdG"}},,,,,,,,,,function(e,t,n){e.exports={languageBtn:"buttonLanguage_languageBtn__39Uyg"}},function(e,t,n){e.exports={sideBar:"sideBar_sideBar__2UabP"}},function(e,t,n){e.exports={closeBtn:"buttonClose_closeBtn__3ob3P"}},function(e,t,n){e.exports={hamburgerBtn:"buttonMenu_hamburgerBtn__1IKs2"}},function(e,t,n){e.exports={accentBtn:"buttonAccent_accentBtn__7YMMb"}},,function(e,t,n){e.exports={wrapper:"orderInfo_wrapper__3_Agf"}},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(25),i=n.n(o),l=n(22),s=n(39),u=n(4),d="SET_LANGUAGE",b="SET_ACTIVE",j="SET_CITY",p="SET_POINT",f="SET_CAR_CATEGORY",O="SET_CAR_MODEL",m="SET_DB_CITIES",h="SET_DB_POINTS",_="SET_DB_CATEGORY",x="SET_DB_CARS",v={language:"Eng"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{language:t.payload});default:return e}},C={active:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",location:{city:"",point:""},car:{category:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",model:{}},addition:{color:"any",dateFrom:null,dateTo:null,tariff:"perDay",services:{fullTank:!1,babyChair:!1,rightSteering:!1}}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{active:t.payload});case j:return Object(u.a)(Object(u.a)({},e),{},{location:Object(u.a)(Object(u.a)({},e.location),{},{city:t.payload,point:""})});case p:return Object(u.a)(Object(u.a)({},e),{},{location:Object(u.a)(Object(u.a)({},e.location),{},{point:t.payload})});case f:return Object(u.a)(Object(u.a)({},e),{},{car:Object(u.a)(Object(u.a)({},e.car),{},{category:t.payload})});case O:return Object(u.a)(Object(u.a)({},e),{},{car:Object(u.a)(Object(u.a)({},e.car),{},{model:t.payload})});default:return e}},w={cities:[],points:[],category:[],cars:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{cities:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{points:t.payload});case _:return Object(u.a)(Object(u.a)({},e),{},{category:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{cars:t.payload});default:return e}},N=Object(l.b)({mainReducer:g,orderReducer:y,dbReducer:k}),E=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c)(Object(l.a)(s.a)),B=Object(l.d)(N,E),I=n(3),L=n(2),S=n(27),P=function(e){return{type:d,payload:e}},R=function(e){return e.mainReducer.language},T=n(41),M=n.n(T),A=n(6),D=n.n(A),G=n(1),W=function(e){var t=e.className,n=Object(I.c)(R),r=Object(I.b)();return Object(G.jsx)("button",{className:D()(M.a.languageBtn,t),onClick:function(){r(P("Eng"===n?"\u0420\u0443\u0441":"Eng"))},children:n})},V=n(42),F=n.n(V),H=function(){return Object(G.jsx)("div",{className:F.a.sideBar,children:Object(G.jsx)(W,{})})},U=n(28),Z=n.n(U),J=function(){return Object(G.jsxs)("footer",{className:Z.a.wrapper,children:[Object(G.jsx)("span",{className:Z.a.licence,children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(G.jsx)("a",{className:Z.a.phone,href:"tel:+74952342244",children:"8 (495) 234-22-44"})]})},X=n(7),Y=n(15),z=[{header:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",text:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",src:n.p+"static/media/image1.3314e534.jpg",btnColors:["#13493F","#0C7B1B"]},{header:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",text:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",src:n.p+"static/media/image2.2fbc438d.jpg",btnColors:["#132949","#0C7B67"]},{header:"\u0411\u0435\u043d\u0437\u0438\u043d",text:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",src:n.p+"static/media/image3.e7a35110.jpg",btnColors:["#493013","#7B0C3B"]},{header:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",text:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",src:n.p+"static/media/image4.dde6305b.jpg",btnColors:["#281349","#720C7B"]}];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Q(e,t){var n=e.title,a=e.titleId,o=q(e,["title","titleId"]);return c.createElement("svg",K({width:10,height:20,viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M9 1L1 10L9 19",stroke:"#EEEEEE",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var $,ee=c.forwardRef(Q);n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function re(e,t){var n=e.title,r=e.titleId,a=ne(e,["title","titleId"]);return c.createElement("svg",te({width:10,height:20,viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,$||($=c.createElement("path",{d:"M1 1L9 10L1 19",stroke:"#EEEEEE",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var ce,ae,oe=c.forwardRef(re),ie=(n.p,n(12)),le=n.n(ie),se=function(){var e=Object(c.useState)(0),t=Object(Y.a)(e,2),n=t[0],r=t[1],a={background:"linear-gradient(90deg, ".concat(z[n].btnColors[0]," 0%, ").concat(z[n].btnColors[1]," 100%)")},o=function(e){return function(){r(e)}};return Object(G.jsxs)("div",{className:le.a.carousel,children:[z.map((function(e,t){return Object(G.jsx)("img",{src:z[t].src,alt:"background",className:D()(le.a.img,Object(X.a)({},le.a.imgCurrent,t===n))},z[t].src)})),Object(G.jsx)("button",{className:le.a.arrowBtnLeft,onClick:function(){r(0!==n?function(e){return--e}:z.length-1)},children:Object(G.jsx)(ee,{})}),Object(G.jsxs)("div",{className:le.a.content,children:[Object(G.jsx)("h3",{className:le.a.header,children:z[n].header}),Object(G.jsx)("p",{className:le.a.text,children:z[n].text}),Object(G.jsx)("button",{className:le.a.button,style:a,children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]}),Object(G.jsx)("button",{className:le.a.arrowBtnRight,onClick:function(){n<z.length-1?r((function(e){return++e})):r(0)},children:Object(G.jsx)(oe,{})}),Object(G.jsx)("div",{className:le.a.dots,children:z.map((function(e,t){return Object(G.jsx)("button",{className:D()(le.a.dotsItem,Object(X.a)({},le.a.dotsItemCurrent,t===n)),onClick:o(t)},t)}))})]})},ue=n(29),de=n.n(ue),be=function(e){var t=e.className;return Object(G.jsxs)("header",{className:D()(de.a.wrapper,t),children:[Object(G.jsx)("div",{className:de.a.logo,children:"Need for drive"}),Object(G.jsx)("div",{className:de.a.location,children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})},je=n(43),pe=n.n(je);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function me(e,t){var n=e.title,r=e.titleId,a=Oe(e,["title","titleId"]);return c.createElement("svg",fe({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,ce||(ce=c.createElement("path",{d:"M8 8L24 24",stroke:"#curent",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),ae||(ae=c.createElement("path",{d:"M8 24L24 8",stroke:"#curent",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var he,_e=c.forwardRef(me),xe=(n.p,function(e){var t=e.handleClose;return Object(G.jsx)("button",{className:pe.a.closeBtn,onClick:t,children:Object(G.jsx)(_e,{})})});function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ce(e,t){var n=e.title,r=e.titleId,a=ge(e,["title","titleId"]);return c.createElement("svg",ve({width:32,height:32,viewBox:"0 0 32 32",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,he||(he=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z"})))}var ye,we,ke,Ne=c.forwardRef(Ce);n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ie(e,t){var n=e.title,r=e.titleId,a=Be(e,["title","titleId"]);return c.createElement("svg",Ee({width:32,height:32,viewBox:"0 0 32 32",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,ye||(ye=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z"})),we||(we=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z"})),ke||(ke=c.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z"})))}var Le,Se=c.forwardRef(Ie);n.p;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Te(e,t){var n=e.title,r=e.titleId,a=Re(e,["title","titleId"]);return c.createElement("svg",Pe({width:32,height:32,viewBox:"0 0 32 32",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,Le||(Le=c.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z"})))}var Me,Ae,De,Ge=c.forwardRef(Te),We=(n.p,n(14)),Ve=n.n(We),Fe=[{title:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410",link:"/"},{title:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410",link:"/"},{title:"\u0411\u0415\u041d\u0417\u0418\u041d",link:"/"},{title:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415",link:"/"}],He=function(e){var t=e.setOpen;return Object(G.jsxs)("nav",{className:Ve.a.wrapper,children:[Object(G.jsx)(xe,{handleClose:function(){t(!1)}}),Object(G.jsxs)("div",{className:Ve.a.menu,children:[Object(G.jsx)("ul",{className:Ve.a.navList,children:Fe.map((function(e){return Object(G.jsx)("li",{className:Ve.a.navItem,children:Object(G.jsx)(S.b,{to:e.link,className:Ve.a.navLink,children:e.title})},e.title)}))}),Object(G.jsxs)("div",{className:Ve.a.social,children:[Object(G.jsx)("a",{href:"/#",className:Ve.a.socialItem,children:Object(G.jsx)(Ne,{})}),Object(G.jsx)("a",{href:"/#",className:Ve.a.socialItem,children:Object(G.jsx)(Ge,{})}),Object(G.jsx)("a",{href:"/#",className:Ve.a.socialItem,children:Object(G.jsx)(Se,{})})]})]}),Object(G.jsx)(W,{className:Ve.a.languageBtnMenu})]})};function Ue(){return(Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Je(e,t){var n=e.title,r=e.titleId,a=Ze(e,["title","titleId"]);return c.createElement("svg",Ue({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,Me||(Me=c.createElement("path",{d:"M4 8H28",stroke:"current",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Ae||(Ae=c.createElement("path",{d:"M4 16H28",stroke:"current",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),De||(De=c.createElement("path",{d:"M4 24H28",stroke:"current",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var Xe,Ye=c.forwardRef(Je),ze=(n.p,n(44)),Ke=n.n(ze),qe=function(){var e=Object(c.useState)(!1),t=Object(Y.a)(e,2),n=t[0],r=t[1];return Object(G.jsx)(G.Fragment,{children:n?Object(G.jsx)(He,{setOpen:r}):Object(G.jsx)("button",{className:Ke.a.hamburgerBtn,onClick:function(){r(!0)},children:Object(G.jsx)(Ye,{})})})},Qe=n(45),$e=n.n(Qe),et=function(e){var t=e.text,n=e.className,r=e.handleClick;return Object(G.jsx)("button",{className:D()($e.a.accentBtn,n),onClick:r,children:t})},tt=n(17),nt=n.n(tt),rt=function(){var e=Object(L.g)();return Object(G.jsxs)("div",{className:nt.a.wrapper,children:[Object(G.jsx)(qe,{}),Object(G.jsx)(H,{}),Object(G.jsxs)("section",{className:nt.a.content,children:[Object(G.jsx)(be,{}),Object(G.jsxs)("main",{children:[Object(G.jsx)("h1",{className:nt.a.titleBlack,children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(G.jsx)("h2",{className:nt.a.titleGreen,children:"Need for drive"}),Object(G.jsx)("p",{className:nt.a.subtitle,children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(G.jsx)(et,{text:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",handleClick:function(){e.push("/order/location")},className:nt.a.buttonOrder})]}),Object(G.jsx)(J,{})]}),Object(G.jsx)("section",{className:nt.a.carousel,children:Object(G.jsx)(se,{})})]})},ct=n(23),at=n.n(ct);function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function it(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function lt(e,t){var n=e.title,r=e.titleId,a=it(e,["title","titleId"]);return c.createElement("svg",ot({width:6,height:8,viewBox:"0 0 6 8",fill:"none",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,Xe||(Xe=c.createElement("polygon",{points:"1,1 6,4 1,8",fill:"#999999",stroke:"current",strokeWidth:1})))}var st=c.forwardRef(lt),ut=(n.p,n(30)),dt=n.n(ut),bt=function(e){return{type:j,payload:e}},jt=function(e){return{type:p,payload:e}},pt=function(e){var t,n=e.text,r=e.link,c=e.active,a=e.disabled,o=Object(L.g)(),i=Object(I.b)(),l=D()((t={},Object(X.a)(t,dt.a.button,!0),Object(X.a)(t,dt.a.buttonActive,c),Object(X.a)(t,dt.a.buttonDisabled,a),t));return Object(G.jsx)("button",{className:l,onClick:function(){o.push(r),i(function(e){return{type:b,payload:e}}(n))},disabled:a,children:n})},ft=function(e){return e.orderReducer.active},Ot=function(e){return e.orderReducer.location.city},mt=function(e){return e.orderReducer.location.point},ht=function(e){return e.orderReducer.car.category},_t=function(e){return e.orderReducer.car.model},xt=function(e){return!!e.orderReducer.location.city&&!!e.orderReducer.location.point},vt=function(e){return!!e.orderReducer.car.model.name},gt=function(e){return!!e.orderReducer.addition.dateFrom&&!!e.orderReducer.addition.dateTo},Ct=function(e){var t=e.className,n=Object(I.c)(ft),r=Object(I.c)(xt),c=Object(I.c)(vt),a=Object(I.c)(gt);return Object(G.jsxs)("nav",{className:D()(at.a.wrapper,t),children:[Object(G.jsx)(pt,{text:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",link:"/order/location",active:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"===n}),Object(G.jsx)(st,{className:at.a.tringle}),Object(G.jsx)(pt,{text:"\u041c\u043e\u0434\u0435\u043b\u044c",link:"/order/car",active:"\u041c\u043e\u0434\u0435\u043b\u044c"===n,disabled:!r}),Object(G.jsx)(st,{className:at.a.tringle}),Object(G.jsx)(pt,{text:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",link:"/order/addition",active:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"===n,disabled:!c}),Object(G.jsx)(st,{className:at.a.tringle}),Object(G.jsx)(pt,{text:"\u0418\u0442\u043e\u0433\u043e",link:"/order/result",active:"\u0418\u0442\u043e\u0433\u043e"===n,disabled:!a})]})},yt=n(9),wt=n.n(yt),kt=function(e){return e.dbReducer.cities},Nt=function(e){return e.dbReducer.points},Et=function(e){return e.dbReducer.category},Bt=function(e){return e.dbReducer.cars},It=function(){var e=Object(I.c)(Ot),t=Object(I.c)(kt),n=Object(I.b)(),r=Object(c.useState)(e),a=Object(Y.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(!1),s=Object(Y.a)(l,2),u=s[0],d=s[1],b=Object(c.useRef)();Object(c.useEffect)((function(){var e=function(e){b.current&&(b.current.contains(e.target)||d(!1))};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);return Object(G.jsxs)("div",{className:wt.a.wrapper,ref:b,children:[Object(G.jsx)("p",{className:wt.a.label,children:"\u0413\u043e\u0440\u043e\u0434"}),Object(G.jsx)("input",{type:"text",value:o,onChange:function(e){i(e.target.value)},onClick:function(){e&&(i(""),n(bt(""))),d(!0)},className:wt.a.inputField,placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442"}),!!o&&Object(G.jsx)("button",{className:wt.a.closeBtn,onClick:function(){i(""),d(!1),n(bt(""))},children:Object(G.jsx)(_e,{})}),u&&Object(G.jsx)("div",{className:wt.a.selectList,children:t.filter((function(e){return!o||(!o.length||(o===e.name&&(n(bt(o)),d(!1)),e.name.toLowerCase().includes(o.toLowerCase())))})).map((function(e){return Object(G.jsx)("div",{className:wt.a.selectItem,onClick:(t=e.name,function(){i(t),d(!1),n(bt(t))}),children:e.name},e.id);var t}))})]})},Lt=function(){var e=Object(I.c)(Ot),t=Object(I.c)(mt),n=Object(I.c)(Nt),r=Object(c.useState)(t),a=Object(Y.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(!1),s=Object(Y.a)(l,2),u=s[0],d=s[1],b=Object(I.b)(),j=Object(c.useRef)();Object(c.useEffect)((function(){i(t)}),[e,t]),Object(c.useEffect)((function(){var e=function(e){j.current&&(j.current.contains(e.target)||d(!1))};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);return Object(G.jsxs)("div",{className:wt.a.wrapper,ref:j,children:[Object(G.jsx)("p",{className:wt.a.label,children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(G.jsx)("input",{type:"text",value:o,onChange:function(e){i(e.target.value)},onClick:function(){t&&(i(""),b(jt(""))),d(!0)},className:wt.a.inputField,placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442"}),!!o&&Object(G.jsx)("button",{className:wt.a.closeBtn,onClick:function(){i(""),d(!1),b(jt(""))},children:Object(G.jsx)(_e,{})}),u&&Object(G.jsx)("div",{className:wt.a.selectList,children:n.filter((function(t){return!e||(!t.cityId||t.cityId.name===e)})).filter((function(e){return!o||(o.length<2||e.address.toLowerCase().includes(o.toLowerCase()))})).map((function(e){return Object(G.jsx)("div",{className:wt.a.selectItem,onClick:(t=e.address,function(){i(t),d(!1),b(jt(t))}),children:e.address},e.id);var t}))})]})},St=n(37),Pt=n.n(St),Rt=n(46),Tt=function(){var e=Object(Rt.a)(Pt.a.mark((function e(t,n,r){var c,a,o;return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api-factory.simbirsoft1.com/api"+t,{method:n,headers:{"Content-Type":"application/json","X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"},body:r});case 3:if(c=e.sent,a=new Error,c.ok){e.next=8;break}throw a.response=c,a;case 8:return e.next=10,c.text();case 10:if(""!==(o=e.sent)){e.next=16;break}throw a.text="empty response data",a;case 16:return e.abrupt("return",JSON.parse(o));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,n,r){return e.apply(this,arguments)}}(),Mt=function(){return function(e){Tt("/db/city","GET").then((function(t){var n;t&&e((n=t.data,{type:m,payload:n}))}))}},At=function(){return function(e){Tt("/db/point","GET").then((function(t){var n;t&&e((n=t.data,{type:h,payload:n}))}))}},Dt=function(){return function(e){Tt("/db/category","GET").then((function(t){var n;t&&e((n=t.data,{type:_,payload:n}))}))}},Gt=function(){return function(e){Tt("/db/car","GET").then((function(t){var n;t&&e((n=t.data,{type:x,payload:n}))}))}},Wt=n(31),Vt=n.n(Wt),Ft=n.p+"static/media/map.6b0f8981.jpg",Ht=function(){var e=Object(I.c)(kt),t=Object(I.c)(Nt),n=Object(I.b)();return Object(c.useEffect)((function(){e.length||n(Mt()),t.length||n(At())}),[e.length,t.length,n]),Object(G.jsxs)("section",{children:[Object(G.jsxs)("div",{className:Vt.a.container,children:[Object(G.jsx)(It,{}),Object(G.jsx)(Lt,{})]}),Object(G.jsx)("p",{className:Vt.a.mapText,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"}),Object(G.jsx)("img",{src:Ft,alt:"map",className:Vt.a.map})]})},Ut=n(19),Zt=n.n(Ut),Jt=function(e){var t,n,r,c=e.name,a=e.active,o=Object(I.b)(),i=D()((t={},Object(X.a)(t,Zt.a.checkBox,!0),Object(X.a)(t,Zt.a.checkBoxActive,a),t)),l=D()((n={},Object(X.a)(n,Zt.a.text,!0),Object(X.a)(n,Zt.a.textActive,a),n));return Object(G.jsxs)("button",{className:Zt.a.button,onClick:(r=c,function(){o({type:f,payload:r})}),children:[Object(G.jsx)("div",{className:i}),Object(G.jsx)("div",{className:l,children:c})]})},Xt=n(24),Yt=n.n(Xt),zt=n(20),Kt=n.n(zt),qt=function(e){var t,n=e.carData,r=e.active,c=Object(I.b)(),a=D()((t={},Object(X.a)(t,Kt.a.card,!0),Object(X.a)(t,Kt.a.cardActive,r),t));return Object(G.jsxs)("div",{className:a,onClick:function(){c({type:O,payload:n})},children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:Kt.a.model,children:n.name}),Object(G.jsxs)("div",{className:Kt.a.price,children:["".concat(n.priceMin," - ").concat(n.priceMax," "),"\u20bd"]})]}),Object(G.jsx)("img",{className:Kt.a.img,src:"https://api-factory.simbirsoft1.com"+n.thumbnail.path,alt:"thumbnail"})]})},Qt=function(){var e=Object(I.b)(),t=Object(I.c)(Et),n=Object(I.c)(Bt),r=Object(I.c)(ht),a=Object(I.c)(_t);return Object(c.useEffect)((function(){t.length||e(Dt()),n.length||e(Gt())}),[n.length,t.length,e]),Object(G.jsxs)("section",{className:Yt.a.wrapper,children:[Object(G.jsxs)("div",{className:Yt.a.category,children:[Object(G.jsx)(Jt,{name:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",active:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"===r}),t.map((function(e){return Object(G.jsx)(Jt,{name:e.name,active:e.name===r},e.id)}))]}),Object(G.jsx)("div",{className:Yt.a.container,children:Object(G.jsx)("div",{className:Yt.a.models,children:n.filter((function(e){return"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"===r||r===e.categoryId.name})).map((function(e){return Object(G.jsx)(qt,{carData:e,active:a.id&&a.id===e.id},e.id)}))})})]})},$t=n(47),en=n.n($t),tn=function(){return Object(G.jsx)("section",{className:en.a.wrapper,children:"OrderInfo"})},nn=n(16),rn=n.n(nn),cn=(n(59),function(){return Object(G.jsx)("section",{})}),an=function(){var e=Object(L.g)();return Object(c.useEffect)((function(){e.push("/order/location")}),[e]),Object(G.jsxs)("div",{className:rn.a.wrapper,children:[Object(G.jsx)(qe,{}),Object(G.jsx)(H,{}),Object(G.jsxs)("section",{className:rn.a.content,children:[Object(G.jsx)(be,{className:rn.a.container}),Object(G.jsxs)("nav",{className:rn.a.navBlock,children:[Object(G.jsx)("div",{className:rn.a.horizontLine}),Object(G.jsx)(Ct,{className:rn.a.container}),Object(G.jsx)("div",{className:rn.a.horizontLine})]}),Object(G.jsxs)("main",{className:D()(rn.a.order,rn.a.container),children:[Object(G.jsxs)(L.d,{children:[Object(G.jsx)(L.b,{path:"/order/location",exact:!0,component:Ht}),Object(G.jsx)(L.b,{path:"/order/car",exact:!0,component:Qt}),Object(G.jsx)(L.b,{path:"/order/addition",exact:!0,component:cn}),Object(G.jsx)(L.b,{path:"/order/result",exact:!0}),Object(G.jsx)(L.a,{to:"/order/location"})]}),Object(G.jsx)(tn,{})]})]})]})};var on=function(){return Object(G.jsx)(S.a,{children:Object(G.jsxs)(L.d,{children:[Object(G.jsx)(L.b,{path:"/",exact:!0,component:rt}),Object(G.jsx)(L.b,{path:"/order",component:an})]})})};n(60);i.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(I.a,{store:B,children:Object(G.jsx)(on,{})})}),document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.a37b234b.chunk.js.map