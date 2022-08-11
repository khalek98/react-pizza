/*! For license information please see 229.19e11f0c.chunk.js.LICENSE.txt */
(self.webpackChunkreact_pizza=self.webpackChunkreact_pizza||[]).push([[229],{3254:function(e,t,i){"use strict";var n=i(8175),r=i(184);t.Z=function(){return(0,r.jsxs)(n.ZP,{className:"pizza-block pizza-block__skeleton",speed:2,width:280,height:500,viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,r.jsx)("circle",{cx:"140",cy:"140",r:"125"}),(0,r.jsx)("rect",{x:"0",y:"280",rx:"10",ry:"10",width:"280",height:"25"}),(0,r.jsx)("rect",{x:"0",y:"325",rx:"10",ry:"10",width:"280",height:"70"}),(0,r.jsx)("rect",{x:"0",y:"415",rx:"10",ry:"10",width:"105",height:"38"}),(0,r.jsx)("rect",{x:"135",y:"410",rx:"25",ry:"25",width:"145",height:"45"})]})}},6044:function(e,t,i){"use strict";i.d(t,{xg:function(){return f}});var n=i(885),r=i(8683),a=i(1694),c=i.n(a),l=i(2791),o=i(1405),s=i(3504),u=i(9748),d=i(184),h=["thin","traditional","philadelphia"],p={types:{thin:0,traditional:3,philadelphia:5},sizes:{26:0,30:3,40:5}},f=function(e){var t=e.id,i=e.name,r=e.imageUrl,a=e.price,s=e.sizes,f=(0,l.useState)("thin"),m=(0,n.Z)(f,2),g=m[0],x=m[1],b=(0,l.useState)(0),y=(0,n.Z)(b,2),v=y[0],j=y[1],_=(0,o.v9)((0,u.BC)("".concat(t,"-").concat(g,"-").concat(v))),z=_&&_.count,C=a+p.types[g]+p.sizes[v],w=(0,o.I0)();(0,l.useEffect)((function(){j(s[0])}),[]);var k=function(){var e={id:"".concat(t,"-").concat(g,"-").concat(v),name:i,price:C,imageUrl:r,type:g,size:v,count:1};w((0,u.jX)(e))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"pizza-block__selector",children:[(0,d.jsx)("ul",{children:h.map((function(e,t){return(0,d.jsxs)("li",{className:c()("pizza-block__selector-type",{active:g===e}),onClick:function(){return x(e)},children:[e,0!==t&&e===g&&(0,d.jsxs)("div",{className:"price-increase",children:["+",p.types[g]," $"]})]},t)}))}),(0,d.jsx)("ul",{children:s.map((function(e,t){return(0,d.jsxs)("li",{onClick:function(){return j(e)},className:e===v?"active":"",children:[e,"cm",0!==t&&e===v&&(0,d.jsxs)("div",{className:"price-increase",children:["+",p.sizes[v]," $"]})]},t)}))})]}),(0,d.jsxs)("div",{className:"pizza-block__bottom",children:[(0,d.jsxs)("div",{className:"pizza-block__price",children:["price: ",C," $"]}),z?(0,d.jsx)("div",{className:"cart__wrapper cart__wrapper-bottom",children:(0,d.jsxs)("div",{className:"cart__item-count",children:[(0,d.jsx)("div",{onClick:function(){w(z&&z-1<=0?(0,u.cl)("".concat(t,"-").concat(g,"-").concat(s[v])):(0,u.iR)("".concat(t,"-").concat(g,"-").concat(s[v])))},className:"button button--outline button--circle cart__item-count-minus",children:(0,d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),(0,d.jsx)("b",{children:z}),(0,d.jsx)("div",{onClick:k,className:"button button--outline button--circle cart__item-count-plus",children:(0,d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]})}):(0,d.jsxs)("div",{className:"button button--outline button--add",onClick:k,children:[(0,d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,d.jsx)("span",{children:"Add"})]})]})]})};t.ZP=function(e){return(0,d.jsxs)("div",{className:"pizza-block",children:[(0,d.jsxs)(s.rU,{to:"/pizza/".concat(e.id),children:[(0,d.jsx)("img",{className:"pizza-block__image",src:e.imageUrl,alt:"Pizza"}),(0,d.jsx)("h4",{className:"pizza-block__title",children:e.name})]}),(0,d.jsx)(f,(0,r.Z)({},e))]})}},1229:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(8683),r=i(885),a=i(2791),c=i(3504),l=i(6871),o=i(4569),s=i.n(o),u=i(3254),d="FullPizza_wrapper__IsIwY",h="FullPizza_right__jShwK",p="FullPizza_left__cCpl4",f="FullPizza_img__abA5c",m="FullPizza_title__zZPYy",g=i(9586),x=i(6044),b=i(184),y=function(){var e=(0,l.UO)().id,t=(0,a.useState)(),i=(0,r.Z)(t,2),o=i[0],y=i[1],v=(0,a.useState)("loading"),j=(0,r.Z)(v,2),_=j[0],z=j[1];return(0,a.useEffect)((function(){s().get("https://62de9b69976ae7460bde168f.mockapi.io/pizzas/"+e).then((function(e){z("succes"),y(e.data)})).catch((function(e){z("error"),console.log(e)}))}),[]),o||"loading"!==_?o&&"succes"===_?(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("div",{className:p,children:(0,b.jsx)("img",{className:f,src:o.imageUrl,alt:"Pizza img"})}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("h1",{className:m,children:o.name}),(0,b.jsx)(x.xg,(0,n.Z)({},o))]})]}):(0,b.jsxs)("div",{className:"content__error-info",children:[(0,b.jsxs)("h2",{children:["Something wents wrong ",(0,b.jsx)("span",{children:"\ud83d\ude15"})]}),(0,b.jsx)("p",{children:"Unfortunately, the pizzas couldn't be loaded. Try again later."}),(0,b.jsx)(c.rU,{to:"/",className:"".concat(g.Z.button," button button--black"),children:(0,b.jsx)("span",{children:"Back"})})]}):(0,b.jsx)(u.Z,{})}},1694:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var c=r.apply(null,i);c&&e.push(c)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var l in i)n.call(i,l)&&i[l]&&e.push(l);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},8175:function(e,t,i){"use strict";var n=i(2791),r=function(){return r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};var a=function(e){var t=e.animate,i=e.animateBegin,a=e.backgroundColor,c=e.backgroundOpacity,l=e.baseUrl,o=e.children,s=e.foregroundColor,u=e.foregroundOpacity,d=e.gradientRatio,h=e.gradientDirection,p=e.uniqueKey,f=e.interval,m=e.rtl,g=e.speed,x=e.style,b=e.title,y=e.beforeMask,v=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=p||Math.random().toString(36).substring(6),_=j+"-diff",z=j+"-animated-diff",C=j+"-aria",w=m?{transform:"scaleX(-1)"}:null,k="0; "+f+"; 1",E=g+"s",N="top-bottom"===h?"rotate(90)":void 0;return(0,n.createElement)("svg",r({"aria-labelledby":C,role:"img",style:r(r({},x),w)},v),b?(0,n.createElement)("title",{id:C},b):null,y&&(0,n.isValidElement)(y)?y:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+_+")",style:{fill:"url("+l+"#"+z+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:_},o),(0,n.createElement)("linearGradient",{id:z,gradientTransform:N},(0,n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:k,dur:E,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:u},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:k,dur:E,repeatCount:"indefinite",begin:i})),(0,n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:k,dur:E,repeatCount:"indefinite",begin:i})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var c=function(e){return e.children?(0,n.createElement)(a,r({},e)):(0,n.createElement)(l,r({},e))},l=function(e){return(0,n.createElement)(c,r({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=c},9586:function(e,t){"use strict";t.Z={root:"NotFoundBlock_root__BVEZF",description:"NotFoundBlock_description__LyoMX",button:"NotFoundBlock_button__lUMZ0"}}}]);
//# sourceMappingURL=229.19e11f0c.chunk.js.map