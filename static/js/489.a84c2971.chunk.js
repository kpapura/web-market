"use strict";(self.webpackChunkweb_market=self.webpackChunkweb_market||[]).push([[489],{8489:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var i,r,o,d,a,c,s,l,p,x,u,h,g,m,f,b,w,v,y,j,Z=t(2791),k=t(1134),P=t(4420),S=t(7507),C=["Price Low to High","Price High to Low"],B=["All","Food","Fashion","Sport","Home","Electronics"],z=function(n){return n.map((function(n){return{value:n,label:n}}))},L=t(9439),E=function(){var n=(0,Z.useState)(null),e=(0,L.Z)(n,2),t=e[0],i=e[1],r=(0,Z.useState)(null),o=(0,L.Z)(r,2),d=o[0],a=o[1],c=(0,Z.useState)(null),s=(0,L.Z)(c,2),l=s[0],p=s[1];return{selectedSortBy:d,selectedFilterBy:l,selectedSearch:t,setSelectedSortBy:a,setSelectedFilterBy:p,setSelectedSearch:i,clearSelectedValues:function(){i(null),a(null),p(null)}}},F=t(1264),A=t(1413),M=t(168),N=t(9690),V=N.ZP.div(i||(i=(0,M.Z)(["\n  position: relative;\n  display: inline-block;\n\n  input {\n    padding-left: 30px;\n    width: 100%;\n    height: 30px;\n    border: none;\n    margin-bottom: 10px;\n    box-shadow: 0 0 10px 2px lightgray;\n\n    &:focus {\n      outline: none;\n      box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);\n      transition: box-shadow 0.3s ease;\n    }\n    &:hover {\n      cursor: pointer;\n      box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);\n      transition: box-shadow 0.3s ease;\n    }\n  }\n\n  svg {\n    position: absolute;\n    left: 8px;\n    top: 37%;\n    transform: translateY(-50%);\n  }\n"]))),H=t(4869),I=t(184),Y=function(n){var e=n.name,t=n.register,i=n.placeholder,r=n.selected,o=n.setSelected;return(0,I.jsxs)(V,{children:[(0,I.jsx)(H.w75,{}),(0,I.jsx)("input",(0,A.Z)((0,A.Z)({autoComplete:"off"},t(e)),{},{placeholder:i,value:(null===r||void 0===r?void 0:r.value)||"",onChange:function(n){o({value:n.target.value})}}))]})},O=N.ZP.form(r||(r=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 1280px) {\n    width: 250px;\n  }\n"]))),T=N.ZP.div(o||(o=(0,M.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  justify-content: space-between;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: column;\n  }\n"]))),U=N.ZP.button(d||(d=(0,M.Z)(["\n  width: 120px;\n  padding: 9px 0;\n  border: none;\n  font-size: 12px;\n  border-radius: 7px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  background-image: linear-gradient(\n    to right,\n    rgb(255 199 39 / 82%),\n    rgb(158 64 186 / 75%),\n    rgb(112 0 255 / 82%)\n  );\n\n    @media screen and (min-width: 1280px) {\n    font-size: 14px;\n  }\n  \n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      rgb(255 199 39 / 82%),\n      rgb(158 64 186 / 75%),\n      rgb(112 0 255 / 82%)\n    );\n    color: white;\n    cursor: pointer;\n  }\n"]))),q=function(){var n=(0,k.cI)(),e=n.register,t=n.handleSubmit,i=n.setValue,r=n.reset,o=(0,P.I0)(),d=E(),a=d.selectedSortBy,c=d.selectedFilterBy,s=d.selectedSearch,l=d.setSelectedSortBy,p=d.setSelectedFilterBy,x=d.setSelectedSearch,u=d.clearSelectedValues,h=(0,Z.useMemo)((function(){return z(C)}),[]),g=(0,Z.useMemo)((function(){return z(B)}),[]);return(0,I.jsx)("div",{children:(0,I.jsxs)(O,{onSubmit:t((function(n){o((0,F.a)(n)),r(),u()})),children:[(0,I.jsx)(Y,{name:"searchValue",placeholder:"Search",register:e,selected:s,setSelected:x})," ",(0,I.jsxs)(T,{children:[(0,I.jsx)("div",{children:(0,I.jsx)(S.ZP,{id:"sortByPrice",name:"sortByPrice",className:"react-select-sortByPrice",classNamePrefix:"react-select",options:h,value:a,placeholder:"Sort by",onChange:function(n){i("sortByPrice",n.value),l(n)}})}),(0,I.jsx)("div",{children:(0,I.jsx)(S.ZP,{id:"filterByCategory",name:"filterByCategory",className:"react-select-filterByCategory",classNamePrefix:"react-select",options:g,value:c,placeholder:"Categories",onChange:function(n){i("filterByCategory",n.value),p(n)}})})]}),(0,I.jsx)(U,{children:"Search"})]})})},_=t(4853),D=t(4164),J=t(2187),R=N.ZP.button(a||(a=(0,M.Z)(["\n  position: absolute;\n  top: 60px;\n  right: 7px;\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  stroke: none;\n  z-index: 1;\n  stroke: black;\n\n  @media screen and (min-width: 768px) {\n    top: 15px;\n    right: 15px;\n  }\n"]))),$=N.ZP.div(c||(c=(0,M.Z)(["\n  display: flex;\n  position: relative;\n  overflow-y: auto;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);\n  background-color: white;\n  overflow-y: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    max-height: 550px;\n    border-radius: 24px;\n    margin-top: 70px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 600px;\n    max-height: 700px;\n  }\n"]))),G=N.ZP.div(s||(s=(0,M.Z)(["\n  position: fixed;\n  z-index: 999;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(7px);\n"]))),K=document.querySelector("#modal"),Q=function(n){var e=n.closeModal,t=n.children,i=(0,Z.useCallback)((function(n){"Escape"===n.key&&e()}),[e]);(0,Z.useEffect)((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}),[e,i]);return D.createPortal((0,I.jsx)(G,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,I.jsxs)($,{children:[(0,I.jsx)(R,{onClick:e,children:(0,I.jsx)(J.Lp2,{width:"16",height:"16"})}),t]})}),K)},W=N.ZP.div(l||(l=(0,M.Z)(["\n  width: 300px;\n  margin-top: 60px;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    width: 400px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-top: 0;\n    width: 500px;\n  }\n"]))),X=N.ZP.h3(p||(p=(0,M.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),nn=N.ZP.div(x||(x=(0,M.Z)(["\n  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.5);\n  width: 300px;\n  height: 350px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n    height: 300px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 500px;\n    height: 350px;\n  }\n  & > img {\n    object-fit: cover;\n    object-position: center;\n    height: 100%;\n    width: 100%;\n  }\n"]))),en=N.ZP.p(u||(u=(0,M.Z)(["\n  font-size: 12px;\n  margin-bottom: 10px;\n\n  @media screen and (min-width: 1280px) {\n    font-size: 17px;\n    margin-bottom: 15px;\n  }\n"]))),tn=N.ZP.div(h||(h=(0,M.Z)(["\n  display: flex;\n  justify-content: right;\n  width: 100%;\n  margin-bottom: 15px;\n  & > p {\n    color: #da5c5ccc;\n    border-bottom: 1px solid black;\n\n    @media screen and (min-width: 1280px) {\n      font-size: 20px;\n    }\n  }\n"]))),rn=N.ZP.button(g||(g=(0,M.Z)(["\n  width: 120px;\n  padding: 9px 0;\n  border: none;\n  font-size: 12px;\n  border-radius: 7px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  background-image: linear-gradient(\n    to right,\n    rgb(255 199 39 / 82%),\n    rgb(158 64 186 / 75%),\n    rgb(112 0 255 / 82%)\n  );\n\n  @media screen and (min-width: 1280px) {\n    width: 160px;\n    padding: 15px 0;\n    font-size: 16px;\n  }\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      rgb(255 199 39 / 82%),\n      rgb(158 64 186 / 75%),\n      rgb(112 0 255 / 82%)\n    );\n    color: white;\n    cursor: pointer;\n  }\n"]))),on=function(n){var e=n.product,t=e.id,i=e.name,r=e.price,o=e.image,d=e.desc;return(0,I.jsxs)(W,{children:[(0,I.jsx)(X,{children:i}),(0,I.jsx)(nn,{children:(0,I.jsx)("img",{src:o,alt:o})}),(0,I.jsx)(en,{children:d}),(0,I.jsx)(tn,{children:(0,I.jsxs)("p",{children:[r," UAN"]})}),(0,I.jsx)(rn,{children:"Add to cart"})]},t)},dn=t(4330),an=N.ZP.li(m||(m=(0,M.Z)(["\n  position: relative;\n  width: 140px;\n  height: 210px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n  padding: 10px 0;\n  gap: 5px;\n\n  @media screen and (min-width: 768px) {\n    width: 250px;\n    height: 270px;\n    padding: 15px 0;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 300px;\n    height: 330px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.5);\n    transition: box-shadow 0.3s ease;\n  }\n  & > button {\n    display: block;\n    text-align: center;\n    position: relative;\n    text-decoration: none;\n    color: inherit;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    border-style: none;\n    cursor: pointer;\n  }\n\n  & > button > img {\n    height: 150px;\n    width: 120px;\n    border-radius: 15px;\n    object-fit: cover;\n\n    @media screen and (min-width: 768px) {\n      width: 200px;\n      height: 200px;\n    }\n    @media screen and (min-width: 1280px) {\n      width: 250px;\n      height: 250px;\n    }\n  }\n  & > button > svg {\n    position: absolute;\n    left: 113px;\n    top: -5px;\n    z-index: 10;\n    background-color: white;\n    width: 23px;\n    height: 22px;\n    border-style: none;\n    padding: 2px;\n    border-radius: 12px;\n    transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;\n\n    @media screen and (min-width: 768px) {\n      left: 214px;\n      top: -11px;\n      width: 35px;\n      height: 35px;\n      border-radius: 17px;\n    }\n    @media screen and (min-width: 1280px) {\n      left: 250px;\n      top: -11px;\n      width: 45px;\n      height: 45px;\n      border-radius: 20px;\n    }\n    &:hover {\n      cursor: pointer;\n      transform: scale(1.1);\n      color: #da5c5ccc;\n      border-color: #da5c5ccc;\n    }\n  }\n"]))),cn=N.ZP.p(f||(f=(0,M.Z)(["\n  font-size: 13px;\n  margin-bottom: 5px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 10px;\n    font-size: 15px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 17px;\n  }\n"]))),sn=N.ZP.p(b||(b=(0,M.Z)(["\n  font-size: 10px;\n  font-weight: bold;\n  color: #da5c5ccc;\n\n  @media screen and (min-width: 768px) {\n    font-size: 12px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 14px;\n  }\n"]))),ln=function(n){var e=n.product,t=e.name,i=e.price,r=e.image,o=function(){var n=(0,Z.useState)(!1),e=(0,L.Z)(n,2),t=e[0],i=e[1];return{isOpen:t,close:function(){return i(!1)},open:function(){return i(!0)},toggle:function(){return i((function(n){return!n}))}}}(),d=o.isOpen,a=o.toggle,c=(0,Z.useState)(null),s=(0,L.Z)(c,2),l=s[0],p=s[1];return(0,Z.useEffect)((function(){if(d&&null===l){var n=window.scrollY;p(n),document.body.classList.add("modal-open")}else d||null===l||(document.body.classList.remove("modal-open"),window.scrollTo(0,l),p(null))}),[d,l,a]),(0,I.jsxs)(an,{children:[(0,I.jsxs)("button",{onClick:function(){a()},children:[(0,I.jsx)(dn.UYI,{}),(0,I.jsx)("img",{src:r,alt:r}),(0,I.jsx)(cn,{children:t}),(0,I.jsxs)(sn,{children:[i," UAN"]})]}),d&&(0,I.jsx)(Q,{closeModal:a,children:(0,I.jsx)(on,{toggle:a,product:e})})]})},pn=function(n){return n.slice().sort((function(n,e){return n.price-e.price}))},xn=function(n){return n.slice().sort((function(n,e){return e.price-n.price}))},un=N.ZP.div(w||(w=(0,M.Z)(["\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  align-items: center;\n  max-width: 320px;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-bottom: 30px;\n\n  @media screen and (min-width: 768px) {\n    justify-content: center;\n    max-width: 550px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 2080px;\n  }\n"]))),hn=N.ZP.button(v||(v=(0,M.Z)(["\n  background-image: linear-gradient(\n    to right,\n    rgb(255 199 39 / 82%),\n    rgb(158 64 186 / 75%),\n    rgb(112 0 255 / 82%)\n  );\n  width: 120px;\n  padding: 9px 0;\n  border: none;\n  font-size: 12px;\n  border-radius: 7px;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  display: block;\n  \n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      rgb(255 199 39 / 82%),\n      rgb(158 64 186 / 75%),\n      rgb(112 0 255 / 82%)\n    );\n    color: white;\n    cursor: pointer;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: 30px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-top: 30px;\n    width: 150px;\n    padding: 12px 0;\n    font-size: 14px;\n  }\n"]))),gn=t(2202),mn=N.ZP.button(y||(y=(0,M.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: rgb(158 64 186 / 75%);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: rgb(112 0 255 / 82%);\n  }\n"]))),fn=function(){var n=(0,Z.useState)(!1),e=(0,L.Z)(n,2),t=e[0],i=e[1];return window.addEventListener("scroll",(function(){window.scrollY>300?i(!0):i(!1)})),(0,I.jsx)(I.Fragment,{children:t&&(0,I.jsx)(mn,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,I.jsx)(gn.$Pg,{})})})},bn=function(){var n=(0,P.I0)(),e=(0,P.v9)(F.qr),t=(0,P.v9)(F.aJ),i=(0,P.v9)(F.Zp),r=(0,P.v9)(F.AD);(0,Z.useEffect)((function(){n((0,_.u)(i))}),[n,i]),(0,Z.useEffect)((function(){e.length||n((0,_.R)())}),[e.length,n]);var o=(0,Z.useMemo)((function(){return function(n,e,t){if(!n)return e;if("All"===n.filterByCategory)return e;var i=t.filter((function(e){var t=e.name,i=e.category,r=n.filterByCategory?n.filterByCategory===i:i,o=n.searchValue?t.toLowerCase().includes(n.searchValue.toLowerCase()):t;return r&&o}));return"Price Low to High"===n.sortByPrice?i=pn(i.length>10?e:i):"Price High to Low"===n.sortByPrice&&(i=xn(i.length>10?e:i)),i}(r,t,e)}),[r,t,e]);return(0,I.jsxs)("div",{children:[(0,I.jsx)(un,{children:null===o||void 0===o?void 0:o.map((function(n){return(0,I.jsx)(ln,{product:n},n.id)}))}),0!==(null===o||void 0===o?void 0:o.length)&&e.length!==o.length&&o.length>=10&&(0,I.jsx)(hn,{onClick:function(){return n((0,F.oO)())},children:"Load More"}),(0,I.jsx)(fn,{})]})},wn=N.ZP.section(j||(j=(0,M.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 10px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    padding-left: 20px;\n  }\n  @media screen and (min-width: 1280px) {\n    justify-content: flex-start;\n    gap: 50px;\n  }\n"]))),vn=function(){return(0,I.jsxs)(wn,{children:[(0,I.jsx)(q,{}),(0,I.jsx)(bn,{})]})}}}]);
//# sourceMappingURL=489.a84c2971.chunk.js.map