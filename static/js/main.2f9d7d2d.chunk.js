(this["webpackJsonpquiz-app-typescript-react"]=this["webpackJsonpquiz-app-typescript-react"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,c,a,o,s=t(0),i=t.n(s),u=t(14),d=t.n(u),l=t(3),b=t(10),f=t.n(b),p=t(15),x=t(2),j=t(12),g=function(n){return Object(l.a)(n).sort((function(){return Math.random()-.5}))},w=[{question:"\u30db\u30c3\u30c8\u30c6\u30a3\u30fc",correct_answer:"\u30c6\u30ab\u30eb\u30c9"},{question:"\u30cf\u30fc\u30d6\u30c6\u30a3\u30fc",correct_answer:"\u30ab\u30e2\u30df\u30c3\u30e9"},{question:"\u30d4\u30fc\u30c1\u30c6\u30a3\u30fc",correct_answer:"\u30da\u30b9\u30ab"},{question:"\u30db\u30c3\u30c8\u30d6\u30e9\u30c3\u30c9\u30aa\u30ec\u30f3\u30b8\u30b8\u30e5\u30fc\u30b9",correct_answer:"\u30a2\u30e9\u30f3\u30c1\u30e3 \u30ab\u30eb\u30c0"},{question:"\u30db\u30c3\u30c8\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8",correct_answer:"\u30c1\u30e7\u30b3\u30e9\u30fc\u30bf \u30ab\u30eb\u30c0"},{question:"\u30a2\u30a4\u30b9\u30c6\u30a3\u30fc",correct_answer:"\u30c6 \u30d5\u30ec\u30c3\u30c9"},{question:"\u30ec\u30e2\u30f3\u30a2\u30a4\u30b9\u30c6\u30a3\u30fc",correct_answer:"\u30c6 \u30d5\u30ec\u30c3\u30c9 \u30b3\u30f3 \u30ea\u30e2\u30fc\u30cd"},{question:"\u30df\u30eb\u30af\u30a2\u30a4\u30b9\u30c6\u30a3\u30fc",correct_answer:"\u30c6 \u30d5\u30ec\u30c3\u30c9 \u30b3\u30f3 \u30e9\u30c6"},{question:"\u30d4\u30fc\u30c1\u30a2\u30a4\u30b9\u30c6\u30a3\u30fc",correct_answer:"\u30da\u30b9\u30ab \u30d5\u30ec\u30c3\u30c9"},{question:"\u30d6\u30e9\u30c3\u30c9\u30aa\u30ec\u30f3\u30b8\u30b8\u30e5\u30fc\u30b9",correct_answer:"\u30a2\u30e9\u30f3\u30c1\u30e3\u30ed\u30c3\u30b5"},{question:"\u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4\u30b8\u30e5\u30fc\u30b9",correct_answer:"\u30dd\u30f3\u30da\u30eb\u30e2"},{question:"\u30d6\u30e9\u30c3\u30c9\u30aa\u30ec\u30f3\u30b8\uff06\u30c8\u30cb\u30c3\u30af",correct_answer:"\u30a2\u30e9\u30f3\u30c1\u30e3\u30fc\u30bf"},{question:"\u30b7\u30c1\u30ea\u30a2\u30ec\u30e2\u30f3\uff06\u30c8\u30cb\u30c3\u30af",correct_answer:"\u30ea\u30e2\u30ca\u30fc\u30bf"},{question:"\u30a2\u30a4\u30b9\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8",correct_answer:"\u30c1\u30e7\u30b3\u30e9\u30fc\u30bf \u30d5\u30ec\u30c3\u30c9"},{question:"\u30b9\u30d1\u30fc\u30af\u30ea\u30f3\u30b0\u30a6\u30a9\u30fc\u30bf\u30fc",correct_answer:"\u30ac\u30c3\u30b5\u30fc\u30bf"}],h=function(n){var e=w.reduce((function(e,t){return t.correct_answer!==n?e.concat(t.correct_answer):e}),[]);return g(e).slice(0,3)},O=t(4),m=t(5),v=m.b.div(r||(r=Object(O.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border: 2px solid #0085a3;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"]))),k=m.b.div(c||(c=Object(O.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),q=t(1),_=function(n){var e=n.question,t=n.answers,r=n.checkAnswer,c=n.userAnswer,a=n.questionNumber,o=n.totalQuestions;return Object(q.jsxs)(v,{children:[Object(q.jsxs)("p",{className:"number",children:["Question: ",a," / ",o]}),Object(q.jsx)("p",{children:e}),Object(q.jsx)("div",{children:t.map((function(n){return Object(q.jsx)(k,{correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(q.jsx)("button",{disabled:!!c,value:n,onClick:r,children:Object(q.jsx)("span",{children:n})})},n)}))})]})},y=t.p+"static/media/latte.800d13be.jpg",z=Object(m.a)(a||(a=Object(O.a)(["\n  * {\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n"])),y),C=m.b.div(o||(o=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  /* \u3059\u3079\u3066\u306ep\u30bf\u30b0\u306b\u53cd\u6620 */\n  > p {\n    color: #fff;\n  }\n\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',\n      sans-serif;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    border-radius: 10px;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n"]))),S=function(){var n=Object(s.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],c=Object(s.useState)([]),a=Object(x.a)(c,2),o=a[0],i=a[1],u=Object(s.useState)(0),d=Object(x.a)(u,2),b=d[0],O=d[1],m=Object(s.useState)([]),v=Object(x.a)(m,2),k=v[0],y=v[1],S=Object(s.useState)(0),N=Object(x.a)(S,2),A=N[0],F=N[1],Q=Object(s.useState)(!0),B=Object(x.a)(Q,2),I=B[0],L=B[1];Object(s.useEffect)((function(){console.log(o)}),[o]);var T=function(){var n=Object(p.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),L(!1),n.next=4,g(w.map((function(n){return Object(j.a)(Object(j.a)({},n),{},{answers:g([].concat(Object(l.a)(h(n.correct_answer)),[n.correct_answer]))})})));case 4:e=n.sent,i(e),F(0),y([]),O(0),r(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(z,{}),Object(q.jsxs)(C,{children:[Object(q.jsx)("h1",{children:"Cafe QUIZ"}),I||15===k.length?Object(q.jsx)("button",{className:"start",onClick:T,children:"Start"}):null,I?null:Object(q.jsxs)("p",{className:"score",children:["Score: ",A]}),t&&Object(q.jsx)("p",{children:"Loading Questions ..."}),!t&&!I&&Object(q.jsx)(_,{questionNumber:b+1,totalQuestions:15,question:o[b].question,answers:o[b].answers,userAnswer:k[b]||void 0,checkAnswer:function(n){if(!I){var e=n.currentTarget.value,t=o[b].correct_answer===e;t&&F((function(n){return n+1}));var r={question:o[b].question,answer:e,correct:t,correctAnswer:o[b].correct_answer};y((function(n){return[].concat(Object(l.a)(n),[r])}))}}}),I||t||k.length!==b+1||14===b?null:Object(q.jsx)("button",{className:"next",onClick:function(){var n=b+1;15===n?L(!0):O(n)},children:"Next Question"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};d.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.2f9d7d2d.chunk.js.map