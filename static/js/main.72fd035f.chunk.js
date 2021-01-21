(this["webpackJsonpreact-getting-started-game"]=this["webpackJsonpreact-getting-started-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(4),o=n.n(i),s=(n(10),n(11),n(2));n(12);var l=function(e){var t=function(t){return e.selectedNumbers.includes(t+1)?{backgroundColor:e.invalidSelection?"red":"lightblue"}:e.completedNumbers.includes(t+1)?{backgroundColor:"lightgreen"}:{}};return Object(r.jsx)(r.Fragment,{children:Array(e.controlsAmount).fill().map((function(n,c){return Object(r.jsx)("button",{className:"Control",style:t(c),disabled:e.disableControls||e.completedNumbers.includes(c+1),onClick:function(){return e.onControlClicked(c+1)},children:c+1},c+1)}))})},u=(n(13),Object.freeze({PLAYING:"PLAYING",WON:"WON",LOST:"LOST"}));var d=function(e){return Object(r.jsxs)("div",{className:"FlexColumn",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{style:{color:e.gameState===u.LOST?"red":"green"},children:e.gameState===u.LOST?Object(r.jsx)(r.Fragment,{children:"Game over, better luck next time."}):Object(r.jsxs)(r.Fragment,{children:["Congratulations!",Object(r.jsx)("br",{}),"You won."]})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return e.startNewGame(e.tryhardMode)},children:e.gameState===u.LOST?"Try again":"Play again"}),Object(r.jsx)("div",{}),Object(r.jsxs)("div",{className:"TryhardButtons",children:[e.gameState===u.LOST&&e.tryhardMode&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Too hard?"}),Object(r.jsx)("button",{onClick:function(){e.startNewGame(!1)},children:"Normal mode"})]}),e.gameState===u.WON&&!e.tryhardMode&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"Too easy?"}),Object(r.jsx)("button",{className:"TryhardMode",onClick:function(){e.startNewGame(!0)},children:"Tryhard mode"})]})]})]})]})};n(14);var j=function(e){return Object(c.useEffect)((function(){if(0===e.secondsRemaining)return e.timeRanOut();var t=setTimeout((function(){e.gameState!==u.WON&&e.setSecondsRemaining(e.secondsRemaining-1)}),1e3);return function(){clearTimeout(t)}})),Object(r.jsxs)(r.Fragment,{children:["Time remaining: ",e.secondsRemaining]})};function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}n(15);var m=n.p+"static/media/logo.6ce24c58.svg";var O=function(e){return Object(r.jsx)(r.Fragment,{children:Array(e.stars).fill().map((function(e,t){return Object(r.jsx)("img",{src:m,className:"App-logo",alt:"logo"},t+1)}))})};n(16);var h=function(){var e=Object(c.useState)(u.PLAYING),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),o=Object(s.a)(i,2),m=o[0],h=o[1],f=Object(c.useState)([]),g=Object(s.a)(f,2),v=g[0],x=g[1],N=Object(c.useState)(b(1,9)),S=Object(s.a)(N,2),C=S[0],y=S[1],T=Object(c.useState)(!1),p=Object(s.a)(T,2),k=p[0],F=p[1],L=Object(c.useState)(!1),A=Object(s.a)(L,2),G=A[0],M=A[1],P=Object(c.useState)(10),R=Object(s.a)(P,2),w=R[0],I=R[1],Y=Object(c.useState)(!1),B=Object(s.a)(Y,2),W=B[0],E=B[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"Header",children:"Pick 1 or more number that sums to the value of stars"}),Object(r.jsxs)("div",{className:"Flex",children:[Object(r.jsx)("div",{className:"GameBlock",style:W?{borderColor:"red"}:{},children:n===u.PLAYING?Object(r.jsx)(O,{stars:C}):Object(r.jsx)(d,{gameState:n,startNewGame:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h([]),x([]),y(b(1,9)),F(!1),M(!1),a(u.PLAYING),E(e),I(e?3:10),E(e)},tryhardMode:W,setTryhardMode:E})}),Object(r.jsx)("div",{className:"GameBlock",style:W?{borderColor:"red"}:{},children:Object(r.jsx)(l,{controlsAmount:9,disableControls:G,onControlClicked:function(e){var t=m.includes(e)?m.filter((function(t){return t!==e})):m.concat(e);h(t);var n=t.reduce((function(e,t){return e+t}),0);if(F(n>C),n===C){h([]);var r=v.concat(t);if(x(r),9===r.length)return a(u.WON);var c=Array(9).fill().map((function(e,t){return t+1})).filter((function(e){return!r.includes(e)}));y(function(e,t){for(var n=[[]],r=[],c=0;c<e.length;c++)for(var a=0,i=n.length;a<i;a++){var o=n[a].concat(e[c]),s=o.reduce((function(e,t){return e+t}));s<=t&&(n.push(o),r.push(s))}return r[b(0,r.length-1)]}(c,9))}},selectedNumbers:m,completedNumbers:v,invalidSelection:k})})]}),Object(r.jsx)("div",{className:"Footer",children:Object(r.jsx)(j,{timeRanOut:function(){return M(!0),a(u.LOST)},secondsRemaining:w,setSecondsRemaining:I,gameState:n})})]})};var f=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(h,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.72fd035f.chunk.js.map