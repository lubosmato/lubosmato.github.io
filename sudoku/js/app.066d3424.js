(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={2:0},i={2:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{1:"fc545a0a",3:"4a3f329a",4:"1fcd52bd"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={1:1,3:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{1:"35f64ac8",3:"f3385ee9",4:"31d6cfe0"}[e]+".css",i=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/sudoku/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"034f":function(e,t,r){"use strict";var n=r("c4ee"),a=r.n(n);a.a},"058f":function(e,t,r){"use strict";var n=r("2b3a"),a=r.n(n);a.a},1484:function(e,t,r){var n=r("3d67"),a=["isReady","findSudoku"];e.exports=function(){var e=new Worker(r.p+"039aed42e2d183a8dfb4.worker.js",{name:"[hash].worker.js"});return n(e,a),e}},"2b3a":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=(r("a481"),r("96cf"),r("c973")),o=r.n(i),s=(r("573e"),r("13da"),r("7d6e"),r("e54f"),r("985d"),r("31cd"),r("2b0e")),u=r("1f91"),c=r("42d2"),l=r("b05d"),d=r("f508");s["a"].use(l["a"],{config:{dark:"auto",screen:{bodyClasses:!0}},lang:u["a"],iconSet:c["a"],plugins:{Loading:d["a"]}});var f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},h=[],p={name:"App"},v=p,g=(r("034f"),r("2877")),m=Object(g["a"])(v,f,h,!1,null,null,null),k=m.exports,b=r("2f62"),y=(r("4917"),r("6b54"),r("06db"),r("448a")),w=r.n(y),x=r("2ef0"),S=r.n(x),E=(r("5df3"),r("1c4c"),r("7f7f"),r("6762"),r("2fdb"),r("ac6a"),r("cadf"),r("ac4d"),r("8a81"),r("970b")),A=r.n(E),C=r("5bc3"),j=r.n(C);function P(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=O(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function O(e,t){if(e){if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var W=function(){function e(t){A()(this,e),this.sudokuSize=t,this.rules=[isNaN,function(e){return""===e},function(e){return e<1},function(e){return e>9}],this.possibleSolutions=[],this.grid=[];for(var r=0;r<t;r++){for(var n=[],a=0;a<t;a++)n.push({value:null,isLocked:!1,hasError:!1});this.grid.push(n)}}return j()(e,[{key:"setCell",value:function(e,t,r){var n=this.rules.some((function(e){return e(r)}));n&&(r=null),this.grid[t][e].hasError=n,this.grid[t][e].value=r,this.updateErrors()}},{key:"lockFilled",value:function(){var e,t=P(this);try{for(t.s();!(e=t.n()).done;){var r=e.value,n=r.x,a=r.y,i=r.cell;i.value&&(this.grid[a][n].isLocked=!0)}}catch(o){t.e(o)}finally{t.f()}}},{key:"unlockAll",value:function(){var e,t=P(this);try{for(t.s();!(e=t.n()).done;){var r=e.value,n=r.x,a=r.y;this.grid[a][n].isLocked=!1}}catch(i){t.e(i)}finally{t.f()}}},{key:"updateErrors",value:function(){this.resetErrors();for(var e=0;e<this.sudokuSize;e++)for(var t=0;t<this.sudokuSize;t++)this.updateError(t,e)}},{key:"resetErrors",value:function(){var e,t=this,r=P(this);try{var n=function(){var r=e.value,n=r.x,a=r.y,i=t.grid[a][n].value;t.grid[a][n].hasError=t.rules.some((function(e){return e(i)}))};for(r.s();!(e=r.n()).done;)n()}catch(a){r.e(a)}finally{r.f()}}},{key:"updateError",value:function(e,t){var r=this,n=this.grid[t][e].value;if(n){var a=function(r){return w()(r).filter((function(r){return!(r.x===e&&r.y===t)}))},i=a(this.column(e)),o=a(this.row(t)),s=a(this.block(e,t));[i,o,s].flat().forEach((function(e){var t=e.x,a=e.y,i=e.cell,o=i.value===n;r.grid[a][t].hasError|=o}))}else this.grid[t][e].hasError=!1}},{key:"cell",value:function(e,t){return this.grid[t][e]}},{key:Symbol.iterator,value:a.a.mark((function e(){var t,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.sudokuSize)){e.next=12;break}r=0;case 3:if(!(r<this.sudokuSize)){e.next=9;break}return e.next=6,{x:r,y:t,cell:this.grid[t][r]};case 6:r++,e.next=3;break;case 9:t++,e.next=1;break;case 12:case"end":return e.stop()}}),e,this)}))},{key:"column",value:a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<this.sudokuSize)){e.next=9;break}if(n=this.grid[r][t],null===n.value){e.next=6;break}return e.next=6,{x:t,y:r,cell:n};case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"row",value:a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<this.sudokuSize)){e.next=9;break}if(n=this.grid[t][r],null===n.value){e.next=6;break}return e.next=6,{x:r,y:t,cell:n};case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}}),e,this)}))},{key:"block",value:a.a.mark((function e(t,r){var n,i,o,s,u,c,l;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=3,i={x:Math.floor(t/n)*n,y:Math.floor(r/n)*n},o=0;case 3:if(!(o<n)){e.next=18;break}s=0;case 5:if(!(s<n)){e.next=15;break}if(u=i.x+s,c=i.y+o,l=this.grid[c][u],null===l.value){e.next=12;break}return e.next=12,{x:u,y:c,cell:l};case 12:s++,e.next=5;break;case 15:o++,e.next=3;break;case 18:case"end":return e.stop()}}),e,this)}))},{key:"generateNumber",value:function(){return Math.floor(Math.random()*this.sudokuSize)+1}},{key:"generate",value:function(t){this.unlockAll(),this.reset(),this.possibleSolutions=[],this.generateStep(),this.updateGrid(this.possibleSolutions[0],!1),this.lockFilled();for(var r=e._shuffleArray(w()(this)),n=Math.min(10,t)/10*9*9,a=0;a<n;a++){var i=r.pop(),o=i.x,s=i.y;if(this.grid[s][o].isLocked){var u=this.grid[s][o].value;this.grid[s][o].isLocked=!1,this.grid[s][o].value=null,this.possibleSolutions=[],this.solveStep(),this.possibleSolutions.length>1&&(this.grid[s][o].isLocked=!0,this.grid[s][o].value=u)}}}},{key:"generateStep",value:function(){if(!(this.possibleSolutions.length>1)){for(var t=0;t<this.sudokuSize;t++)for(var r=0;r<this.sudokuSize;r++)if(null===this.grid[t][r].value){var n,a=w()(Array(9).keys()).map((function(e){return e+1})),i=e._shuffleArray(a),o=P(i);try{for(o.s();!(n=o.n()).done;){var s=n.value;this.isPossibleValue(r,t,s)&&(this.grid[t][r].value=s,this.generateStep(),this.grid[t][r].value=null)}}catch(u){o.e(u)}finally{o.f()}return}this.possibleSolutions.push(S.a.cloneDeep(this.grid))}}},{key:"solve",value:function(){this.possibleSolutions=[];var e=this.grid.flat().some((function(e){return e.hasError}));if(e||this.solveStep(),0==this.possibleSolutions.length)throw Error("Bad sudoku... No solution found 😐");if(this.possibleSolutions.length>1)throw Error("Puzzle has multiple solutions so it is invalid 😪");return this.possibleSolutions[0]}},{key:"solveStep",value:function(){if(!(this.possibleSolutions.length>1)){for(var e=0;e<this.sudokuSize;e++)for(var t=0;t<this.sudokuSize;t++)if(null===this.grid[e][t].value){for(var r=1;r<10;r++)this.isPossibleValue(t,e,r)&&(this.grid[e][t].value=r,this.solveStep(),this.grid[e][t].value=null);return}this.possibleSolutions.push(S.a.cloneDeep(this.grid))}}},{key:"updateGrid",value:function(e,t){var r,n=P(this);try{for(n.s();!(r=n.n()).done;){var a=r.value,i=a.x,o=a.y;this.grid[o][i].value=e[o][i].value,t&&(this.grid[o][i].isLocked=e[o][i].isLocked,this.grid[o][i].hasError=e[o][i].hasError)}}catch(s){n.e(s)}finally{n.f()}this.updateErrors()}},{key:"isCompleted",value:function(){return!this.grid.flat().some((function(e){return e.hasError||null===e.value}))}},{key:"isPossibleValue",value:function(e,t,r){var n=function(r){return w()(r).filter((function(r){return!(r.x===e&&r.y===t)})).map((function(e){return e.cell.value}))},a=n(this.column(e)),i=n(this.row(t)),o=n(this.block(e,t));return![a,i,o].flat().includes(r)}},{key:"reset",value:function(){var e,t=P(this);try{for(t.s();!(e=t.n()).done;){var r=e.value,n=r.x,a=r.y;this.grid[a][n].isLocked||(this.grid[a][n].value=null,this.grid[a][n].hasError=!1)}}catch(i){t.e(i)}finally{t.f()}}}],[{key:"_shuffleArray",value:function(e){for(var t=w()(e),r=0;r<t.length;r++){var n=Math.floor(Math.random()*t.length),a=t[r];t[r]=t[n],t[n]=a}return t}}]),e}(),M=W,L=r("7f80"),z=r.n(L),q=z()();function I(e){localStorage.setItem("sudoku",JSON.stringify(e))}var $={namespaced:!0,getters:{cell:function(e){return function(t,r){return e.grid.cell(t,r)}},exported:function(e){var t=w()(e.grid).map((function(e){var t=e.cell;return t.isLocked&&null!==t.value?t.value.toString():" "})),r=btoa(t.reduce((function(e,t){return e+t})));return r},isCompleted:function(e){return e.grid.isCompleted()},hasFinishedWithoutHelp:function(e){var t=e.grid.grid.flat().some((function(e){return e.hasError||null===e.value}));return!t&&!e.wasHelped}},mutations:{setValue:function(e,t){var r=t.x,n=t.y,a=t.value;e.grid.setCell(r,n,a),I(e.grid.grid)},lockFilled:function(e){e.grid.lockFilled(),I(e.grid.grid)},unlockAll:function(e){e.grid.unlockAll(),I(e.grid.grid)},reset:function(e){e.grid.reset(),I(e.grid.grid)},setWorking:function(e,t){e.isWorking=t},updateError:function(e,t){e.errorMessage=t},updateGrid:function(e,t){e.grid.updateGrid(t,!1),I(e.grid.grid)},loadState:function(e){var t=JSON.parse(localStorage.getItem("sudoku"));if(!t)throw new Error;e.grid.updateGrid(t,!0),e.wasHelped=e.grid.isCompleted()},acknowledgeError:function(e){e.errorMessage=""},setWasHelped:function(e,t){e.wasHelped=t}},actions:{solve:function(e){return o()(a.a.mark((function t(){var r,n,i,o;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=e.commit,n("setWasHelped",!0),t.prev=2,n("setWorking",!0),i=S.a.cloneDeep(r.grid.grid),t.next=7,q.solve(i);case 7:o=t.sent,n("updateGrid",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),n("updateError",t.t0.message);case 14:return t.prev=14,n("setWorking",!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})))()},generate:function(e,t){return o()(a.a.mark((function r(){var n,i,o,s;return a.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,i=e.commit,i("unlockAll"),i("reset"),i("setWasHelped",!1),r.prev=4,i("setWorking",!0),o=S.a.cloneDeep(n.grid.grid),r.next=9,q.generate(o,t);case 9:s=r.sent,i("updateGrid",s),i("unlockAll"),i("lockFilled"),r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](4),i("updateError",r.t0.message);case 18:return r.prev=18,i("setWorking",!1),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[4,15,18,21]])})))()},import:function(e,t){return o()(a.a.mark((function r(){var n,i,o,s,u,c,l;return a.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(n=e.commit,i=e.dispatch,o=e.state,r.prev=1,s=atob(t),u=w()(s).map((function(e){var t=e.match(/[^\d ]/g);if(t)throw new Error;return" "===e?{value:null}:{value:parseInt(e)}})),c=[],l=0;l<9;l++)c.push(u.splice(0,9));return n("unlockAll"),n("reset"),n("updateGrid",c),n("lockFilled"),r.next=12,i("solve");case 12:n("reset"),n("setWasHelped",o.grid.isCompleted()),r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](1),n("updateError","Could not load sudoku 😥");case 19:case"end":return r.stop()}}),r,null,[[1,16]])})))()},stop:function(e){return o()(a.a.mark((function t(){var r;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,r("setWorking",!1),q.terminate(),q=z()();case 4:case"end":return t.stop()}}),t)})))()}},state:{grid:new M(9),errorMessage:"",isWorking:!1,wasHelped:!1}};s["a"].use(b["b"]);var R=function(){var e=new b["b"].Store({modules:{sudoku:$},strict:!1});return e},D=r("8c4f"),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"webcam-wrapper"},[r("div",{staticClass:"webcam"},[r("video",{ref:"webcam",staticClass:"hidden"}),r("canvas",{ref:"canvas"})]),r("div",{staticClass:"controls"},[r("div",{staticClass:"row q-col-gutter-md q-pr-md q-py-md full-width"},[r("div",{staticClass:"col-12 col-sm-6"},[r("q-btn",{staticClass:"full-width",attrs:{to:{name:"index"},color:"negative",label:"Back",icon:"keyboard_arrow_left",disable:e.isScanning}})],1),r("div",{staticClass:"col-12 col-sm-6"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"Scan","icon-right":"center_focus_strong",loading:e.isScanning},on:{click:e.scan}})],1)])])])])},F=[],T=(r("34ef"),r("7514"),r("1484")),H=r.n(T),G=r("c9bf"),B={name:"Camera",data:function(){return{isReady:!1,isRunning:!1,isScanning:!1,cvWorker:H()()}},methods:{start:function(){var e=this;return o()(a.a.mark((function t(){var r,n,i,s,u,c,l,d,f,h,p,v;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$q.loading.show({message:"Opening computer eyes..."}),r=400,n=400,i=e.$refs.canvas,s=e.$refs.webcam,u=i.getContext("2d"),i.setAttribute("width",r),i.setAttribute("height",n),s.setAttribute("width",r),s.setAttribute("height",n),t.prev=10,t.next=13,navigator.mediaDevices.enumerateDevices();case 13:return c=t.sent,l=c.find((function(e){return"videoinput"===e.kind&&e.label.includes("facing back")})),d={video:{width:{max:r},height:{max:n}}},l?d.video.deviceId=l.deviceId:d.facingMode={exact:"environment"},t.next=19,navigator.mediaDevices.getUserMedia(d);case 19:f=t.sent,s.srcObject=f,s.play(),h={corners:[],cells:[],image:null},p=function(){var t=o()(a.a.mark((function t(){var i,o,c;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isRunning){t.next=3;break}return f.getTracks().forEach((function(e){return e.stop()})),t.abrupt("return");case 3:u.drawImage(s,0,0,r,n),i=S.a.cloneDeep(h),o=i.corners,4===o.length&&(u.beginPath(),u.strokeStyle="#ff0000ff",u.lineWidth=3,c=function(e,t){u.moveTo(e.x,e.y),u.lineTo(t.x,t.y)},c(o[0],o[1]),c(o[1],o[2]),c(o[2],o[3]),c(o[3],o[0]),u.stroke()),requestAnimationFrame(p);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p(),v=function(){var t=o()(a.a.mark((function t(){var c,l,d,f,p,g;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isRunning){t.next=2;break}return t.abrupt("return");case 2:if(e.isReady){t.next=9;break}return t.next=5,e.cvWorker.isReady();case 5:return e.isReady=t.sent,e.isReady&&e.$q.loading.hide(),requestAnimationFrame(v),t.abrupt("return");case 9:return u.drawImage(s,0,0,r,n),c=u.getImageData(0,0,r,n),t.next=13,e.cvWorker.findSudoku(r,n,new Uint8Array(c.data),e.isScanning);case 13:h=t.sent,l=h,d=l.cells,f=l.image,9===d.length&&e.isScanning&&(u.putImageData(new ImageData(f,r,n),0,0),e.isRunning=!1,p=[6,6,6,6],g=Object(G["createWorker"])(),o()(a.a.mark((function t(){var r,n,o,s,c,l,f,h,v,m,k,b;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.load();case 2:return t.next=4,g.loadLanguage("eng");case 4:return t.next=6,g.initialize("eng");case 6:return t.next=8,g.setParameters({tessedit_char_whitelist:"123456789"});case 8:r=[],n=0;case 10:if(!(n<9)){t.next=31;break}o=[],s=0;case 13:if(!(s<9)){t.next=27;break}return c=d[n][s],l=c.left,f=c.top,h=c.right,v=c.bottom,t.next=17,g.recognize(i,{rectangle:{left:l+p[3],top:f+p[0],width:h-l-p[3]-p[1],height:v-f-p[0]-p[2]}});case 17:m=t.sent,k=m.data.text,u.fillStyle="#03fc17aa",u.fillRect(l+p[3],f+p[0],h-l-p[3]-p[1],v-f-p[0]-p[2]),b=parseInt(k.substr(0,1)),isNaN(b)&&(b=null),o.push({value:b});case 24:s++,t.next=13;break;case 27:r.push(o);case 28:n++,t.next=10;break;case 31:return t.next=33,g.terminate();case 33:e.onScanSuccess(r);case 34:case"end":return t.stop()}}),t)})))()),e.isRunning&&requestAnimationFrame(v);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v(),t.next=32;break;case 29:t.prev=29,t.t0=t["catch"](10),console.error("error:",t.t0);case 32:case"end":return t.stop()}}),t,null,[[10,29]])})))()},scan:function(){this.isScanning=!0},onScanSuccess:function(e){this.$store.commit("sudoku/unlockAll"),this.$store.commit("sudoku/reset"),this.$store.commit("sudoku/updateGrid",e),this.$store.commit("sudoku/lockFilled"),this.isScanning=!1,this.$router.replace({name:"index"})}},mounted:function(){this.isRunning=!0,this.isScanning=!1,this.start()},destroyed:function(){this.isRunning=!1,this.$q.loading.hide(),this.cvWorker.terminate()}},V=B,J=(r("058f"),r("eebe")),U=r.n(J),Q=r("9c40"),K=Object(g["a"])(V,N,F,!1,null,"54e73f38",null),X=K.exports;U()(K,"components",{QBtn:Q["a"]}),d["a"];var Y=[{path:"/",component:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b"))},children:[{name:"index",path:"",component:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"8b24"))}},{name:"sudoku",path:"sudoku/:sudoku",component:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"8b24"))}}]},{name:"camera",path:"/camera",component:X}];Y.push({path:"*",component:function(){return r.e(4).then(r.bind(null,"e51e"))}});var Z=Y;s["a"].use(D["a"]);var ee=function(){var e=new D["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Z,mode:"hash",base:"/sudoku/"});return e},te=function(){return re.apply(this,arguments)};function re(){return re=o()(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof R){e.next=6;break}return e.next=3,R({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=R;case 7:if(t=e.t0,"function"!==typeof ee){e.next=14;break}return e.next=11,ee({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ee;case 15:return r=e.t1,t.$router=r,n={router:r,store:t,render:function(e){return e(k)}},n.el="#q-app",e.abrupt("return",{app:n,store:t,router:r});case 20:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}var ne=r("9483");Object(ne["a"])("/sudoku/service-worker.js",{ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){0},offline:function(){0},error:function(e){0}});var ae=r("bc3a"),ie=r.n(ae);function oe(){return se.apply(this,arguments)}function se(){return se=o()(a.a.mark((function e(){var t,r,n,i,o,u,c,l,d;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,r=t.app,n=t.store,i=t.router,o=!0,u=function(e){o=!1,window.location.href=e},c=window.location.href.replace(window.location.origin,""),l=[void 0],d=0;case 11:if(!(!0===o&&d<l.length)){e.next=29;break}if("function"===typeof l[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[d]({app:r,router:i,store:n,Vue:s["a"],ssrContext:null,redirect:u,urlPath:c});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new s["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),se.apply(this,arguments)}s["a"].prototype.$axios=ie.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(0).then(r.t.bind(null,"a0db",7)),oe()},"31cd":function(e,t,r){},"7f80":function(e,t,r){var n=r("3d67"),a=["solve","generate"];e.exports=function(){var e=new Worker(r.p+"93281ef67a9fa9d8d96b.worker.js",{name:"[hash].worker.js"});return n(e,a),e}},c4ee:function(e,t,r){}});