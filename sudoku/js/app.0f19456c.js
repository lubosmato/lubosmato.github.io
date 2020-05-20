(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,r,t){e.exports=t("2f39")},"2f39":function(e,r,t){"use strict";t.r(r);var n=t("a34a"),i=t.n(n),a=(t("a481"),t("96cf"),t("c973")),o=t.n(a),u=(t("573e"),t("13da"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),s=t("1f91"),l=t("42d2"),c=t("b05d");u["a"].use(c["a"],{config:{dark:"auto",screen:{bodyClasses:!0}},lang:s["a"],iconSet:l["a"]});var f=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},h=[],d={name:"App"},v=d,p=t("2877"),k=Object(p["a"])(v,f,h,!1,null,null,null),b=k.exports,g=t("2f62"),y=(t("4917"),t("6b54"),t("06db"),t("448a")),x=t.n(y),m=t("2ef0"),w=t.n(m),S=(t("5df3"),t("1c4c"),t("7f7f"),t("6762"),t("2fdb"),t("ac6a"),t("cadf"),t("ac4d"),t("8a81"),t("970b")),E=t.n(S),z=t("5bc3"),A=t.n(z);function M(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=P(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw i}}}}function P(e,r){if(e){if("string"===typeof e)return W(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(e,r):void 0}}function W(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var G=function(){function e(r){E()(this,e),this.sudokuSize=r,this.rules=[isNaN,function(e){return""===e},function(e){return e<1},function(e){return e>9}],this.possibleSolutions=[],this.grid=[];for(var t=0;t<r;t++){for(var n=[],i=0;i<r;i++)n.push({value:null,isLocked:!1,hasError:!1});this.grid.push(n)}}return A()(e,[{key:"setCell",value:function(e,r,t){var n=this.rules.some((function(e){return e(t)}));n&&(t=null),this.grid[r][e].hasError=n,this.grid[r][e].value=t,this.updateErrors()}},{key:"lockFilled",value:function(){var e,r=M(this);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=t.x,i=t.y,a=t.cell;a.value&&(this.grid[i][n].isLocked=!0)}}catch(o){r.e(o)}finally{r.f()}}},{key:"unlockAll",value:function(){var e,r=M(this);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=t.x,i=t.y;this.grid[i][n].isLocked=!1}}catch(a){r.e(a)}finally{r.f()}}},{key:"updateErrors",value:function(){this.resetErrors();for(var e=0;e<this.sudokuSize;e++)for(var r=0;r<this.sudokuSize;r++)this.updateError(r,e)}},{key:"resetErrors",value:function(){var e,r=this,t=M(this);try{var n=function(){var t=e.value,n=t.x,i=t.y,a=r.grid[i][n].value;r.grid[i][n].hasError=r.rules.some((function(e){return e(a)}))};for(t.s();!(e=t.n()).done;)n()}catch(i){t.e(i)}finally{t.f()}}},{key:"updateError",value:function(e,r){var t=this,n=this.grid[r][e].value;if(n){var i=function(t){return x()(t).filter((function(t){return!(t.x===e&&t.y===r)}))},a=i(this.column(e)),o=i(this.row(r)),u=i(this.block(e,r));[a,o,u].flat().forEach((function(e){var r=e.x,i=e.y,a=e.cell,o=a.value===n;t.grid[i][r].hasError|=o}))}else this.grid[r][e].hasError=!1}},{key:"cell",value:function(e,r){return this.grid[r][e]}},{key:Symbol.iterator,value:i.a.mark((function e(){var r,t;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<this.sudokuSize)){e.next=12;break}t=0;case 3:if(!(t<this.sudokuSize)){e.next=9;break}return e.next=6,{x:t,y:r,cell:this.grid[r][t]};case 6:t++,e.next=3;break;case 9:r++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)}))},{key:"column",value:i.a.mark((function e(r){var t,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.sudokuSize)){e.next=9;break}if(n=this.grid[t][r],null===n.value){e.next=6;break}return e.next=6,{x:r,y:t,cell:n};case 6:t++,e.next=1;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"row",value:i.a.mark((function e(r){var t,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.sudokuSize)){e.next=9;break}if(n=this.grid[r][t],null===n.value){e.next=6;break}return e.next=6,{x:t,y:r,cell:n};case 6:t++,e.next=1;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"block",value:i.a.mark((function e(r,t){var n,a,o,u,s,l,c;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=3,a={x:Math.floor(r/n)*n,y:Math.floor(t/n)*n},o=0;case 3:if(!(o<n)){e.next=18;break}u=0;case 5:if(!(u<n)){e.next=15;break}if(s=a.x+u,l=a.y+o,c=this.grid[l][s],null===c.value){e.next=12;break}return e.next=12,{x:s,y:l,cell:c};case 12:u++,e.next=5;break;case 15:o++,e.next=3;break;case 18:case"end":return e.stop()}}),e,this)}))},{key:"generateNumber",value:function(){return Math.floor(Math.random()*this.sudokuSize)+1}},{key:"generate",value:function(e){this.unlockAll(),this.reset(),this.possibleSolutions=[],this.generateStep(),this.updateGrid(this.possibleSolutions[0]),this.lockFilled();for(var r=20*e,t=0;t<r;t++){var n=Math.floor(Math.random()*this.sudokuSize),i=Math.floor(Math.random()*this.sudokuSize);if(this.grid[i][n].isLocked){var a=this.grid[i][n].value;this.grid[i][n].isLocked=!1,this.grid[i][n].value=null,this.possibleSolutions=[],this.solveStep(),this.possibleSolutions.length>1&&(this.grid[i][n].isLocked=!0,this.grid[i][n].value=a)}}}},{key:"generateStep",value:function(){if(!(this.possibleSolutions.length>1)){for(var r=0;r<this.sudokuSize;r++)for(var t=0;t<this.sudokuSize;t++)if(null===this.grid[r][t].value){var n,i=x()(Array(9).keys()).map((function(e){return e+1})),a=e._shuffleArray(i),o=M(a);try{for(o.s();!(n=o.n()).done;){var u=n.value;this.isPossibleValue(t,r,u)&&(this.grid[r][t].value=u,this.generateStep(),this.grid[r][t].value=null)}}catch(s){o.e(s)}finally{o.f()}return}this.possibleSolutions.push(w.a.cloneDeep(this.grid))}}},{key:"solve",value:function(){this.possibleSolutions=[];var e=this.grid.flat().some((function(e){return e.hasError}));if(e||this.solveStep(),0==this.possibleSolutions.length)throw Error("Bad sudoku... No solution found 😐");if(this.possibleSolutions.length>1)throw Error("Puzzle has multiple solutions so it is invalid 😪");return this.possibleSolutions[0]}},{key:"solveStep",value:function(){if(!(this.possibleSolutions.length>1)){for(var e=0;e<this.sudokuSize;e++)for(var r=0;r<this.sudokuSize;r++)if(null===this.grid[e][r].value){for(var t=1;t<10;t++)this.isPossibleValue(r,e,t)&&(this.grid[e][r].value=t,this.solveStep(),this.grid[e][r].value=null);return}this.possibleSolutions.push(w.a.cloneDeep(this.grid))}}},{key:"updateGrid",value:function(e){var r,t=M(this);try{for(t.s();!(r=t.n()).done;){var n=r.value,i=n.x,a=n.y;this.grid[a][i].value=e[a][i].value}}catch(o){t.e(o)}finally{t.f()}this.updateErrors()}},{key:"isPossibleValue",value:function(e,r,t){var n=function(t){return x()(t).filter((function(t){return!(t.x===e&&t.y===r)})).map((function(e){return e.cell.value}))},i=n(this.column(e)),a=n(this.row(r)),o=n(this.block(e,r));return![i,a,o].flat().includes(t)}},{key:"reset",value:function(){var e,r=M(this);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=t.x,i=t.y;this.grid[i][n].isLocked||(this.grid[i][n].value=null,this.grid[i][n].hasError=!1)}}catch(a){r.e(a)}finally{r.f()}}}],[{key:"_shuffleArray",value:function(e){for(var r=x()(e),t=0;t<r.length;t++){var n=Math.floor(Math.random()*r.length),i=r[t];r[t]=r[n],r[n]=i}return r}}]),e}(),L=G,V=t("7f80"),j=t.n(V),C=j()(),F={namespaced:!0,getters:{cell:function(e){return function(r,t){return e.grid.cell(r,t)}},exported:function(e){var r=x()(e.grid).map((function(e){var r=e.cell;return null===r.value?" ":r.value.toString()})),t=btoa(r.reduce((function(e,r){return e+r})));return t}},mutations:{setValue:function(e,r){var t=r.x,n=r.y,i=r.value;e.grid.setCell(t,n,i)},lockFilled:function(e){e.grid.lockFilled()},unlockAll:function(e){e.grid.unlockAll()},reset:function(e){e.grid.reset()},setWorking:function(e,r){e.isWorking=r},updateError:function(e,r){e.errorMessage=r},updateGrid:function(e,r){e.grid.updateGrid(r)},acknowledgeError:function(e){e.errorMessage=""}},actions:{solve:function(e){return o()(i.a.mark((function r(){var t,n,a,o;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.state,n=e.commit,r.prev=1,n("setWorking",!0),a=w.a.cloneDeep(t.grid.grid),r.next=6,C.solve(a);case 6:o=r.sent,n("updateGrid",o),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),n("updateError",r.t0.message);case 13:return r.prev=13,n("setWorking",!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,10,13,16]])})))()},generate:function(e,r){return o()(i.a.mark((function t(){var n,a,o,u;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.commit,t.prev=1,a("setWorking",!0),o=w.a.cloneDeep(n.grid.grid),t.next=6,C.generate(o,r);case 6:u=t.sent,a("updateGrid",u),a("unlockAll"),a("lockFilled"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),a("updateError",t.t0.message);case 15:return t.prev=15,a("setWorking",!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})))()},import:function(e,r){return o()(i.a.mark((function t(){var n,a,o,u,s,l;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=e.commit,a=e.dispatch,t.prev=1,o=atob(r),u=x()(o).map((function(e){var r=e.match(/[^\d ]/g);if(r)throw new Error;return" "===e?{value:null}:{value:parseInt(e)}})),s=[],l=0;l<9;l++)s.push(u.splice(0,9));return n("updateGrid",s),n("lockFilled"),t.next=10,a("solve");case 10:n("reset"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),n("updateError","Could not load sudoku 😥");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},stop:function(e){return o()(i.a.mark((function r(){var t;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t=e.commit,t("setWorking",!1),C.terminate(),C=j()();case 4:case"end":return r.stop()}}),r)})))()}},state:{grid:new L(9),errorMessage:"",isWorking:!1}};u["a"].use(g["b"]);var D=function(){var e=new g["b"].Store({modules:{sudoku:F},strict:!1});return e},I=t("8c4f"),N=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))}},{path:":sudoku",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"8b24"))}}]}];N.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"e51e"))}});var $=N;u["a"].use(I["a"]);var _=function(){var e=new I["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:$,mode:"history",base:"/"});return e},O=function(){return q.apply(this,arguments)};function q(){return q=o()(i.a.mark((function e(){var r,t,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof D){e.next=6;break}return e.next=3,D({Vue:u["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=D;case 7:if(r=e.t0,"function"!==typeof _){e.next=14;break}return e.next=11,_({Vue:u["a"],store:r});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=_;case 15:return t=e.t1,r.$router=t,n={router:t,store:r,render:function(e){return e(b)}},n.el="#q-app",e.abrupt("return",{app:n,store:r,router:t});case 20:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var B=t("bc3a"),J=t.n(B);function Q(){return T.apply(this,arguments)}function T(){return T=o()(i.a.mark((function e(){var r,t,n,a,o,s,l,c,f;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:r=e.sent,t=r.app,n=r.store,a=r.router,o=!0,s=function(e){o=!1,window.location.href=e},l=window.location.href.replace(window.location.origin,""),c=[void 0],f=0;case 11:if(!(!0===o&&f<c.length)){e.next=29;break}if("function"===typeof c[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[f]({app:t,router:a,store:n,Vue:u["a"],ssrContext:null,redirect:s,urlPath:l});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new u["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),T.apply(this,arguments)}u["a"].prototype.$axios=J.a,Q()},"31cd":function(e,r,t){},"7f80":function(e,r,t){var n=t("3d67"),i=["solve","generate"];e.exports=function(){var e=new Worker(t.p+"e8b0e61b42ac5c2f8ac4.worker.js",{name:"[hash].worker.js"});return n(e,i),e}}},[[0,3,0]]]);