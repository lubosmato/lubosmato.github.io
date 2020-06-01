(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR fFf"}},[t.$q.platform.is.desktop?a("q-drawer",{attrs:{"show-if-above":"",side:"left",bordered:"",width:325},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("SudokuControls")],1):t._e(),a("q-page-container",[a("router-view")],1)],1)},n=[],r=a("d08d"),s={components:{SudokuControls:r["a"]},data:function(){return{left:!0}}},i=s,c=a("2877"),l=a("eebe"),d=a.n(l),u=a("4d5a"),h=a("9404"),p=a("09e3"),f=Object(c["a"])(i,o,n,!1,null,null,null);e["default"]=f.exports;d()(f,"components",{QLayout:u["a"],QDrawer:h["a"],QPageContainer:p["a"]})},d08d:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-px-md q-pt-md full-height full-width column controls"},[a("div",{staticClass:"col q-gutter-y-md"},[a("div",{staticClass:"row q-col-gutter-x-md q-mt-md"},[a("div",{staticClass:"col-6"},[a("q-btn",{staticClass:"full-width",attrs:{to:{name:"camera"},color:"primary","icon-right":"camera",label:"Scan"}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"fas fa-random",label:"Generate"},on:{click:t.generate}})],1)]),a("q-slider",{staticClass:"q-mt-sm",attrs:{min:1,max:10,step:1,snap:"",label:"",color:"secondary",dense:""},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}}),a("q-badge",{staticClass:"q-my-none",attrs:{color:"secondary"}},[t._v("Difficulty: "+t._s(t.difficulty))]),a("q-separator"),a("div",{staticClass:"row q-col-gutter-x-md"},[a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"lock"},on:{click:t.lockFilled}})],1),a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"lock_open"},on:{click:t.unlockAll}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"casino",label:"Solve",outline:""},on:{click:t.solve}})],1)]),a("div",{staticClass:"row q-col-gutter-x-md"},[a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"get_app"},on:{click:t.download}})],1),a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"print"},on:{click:t.print}})],1),a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"share"},on:{click:t.share}}),a("q-tooltip",{attrs:{anchor:"top left",value:t.isCopiedShown,"content-style":"font-size: 1em","transition-show":"scale","transition-hide":"scale","no-parent-event":""}},[t._v("\n          Copied to clipboard\n        ")])],1),a("div",{staticClass:"col-3"},[a("q-btn",{staticClass:"full-width",attrs:{color:"negative","icon-right":"restore"},on:{click:t.reset}})],1)]),a("q-dialog",{attrs:{value:t.hasError,"transition-show":"scale","transition-hide":"scale"},on:{hide:t.acknowledgeError}},[a("q-card",{staticClass:"bg-secondary text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Sudoku error")])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-secondary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),a("q-dialog",{attrs:{value:t.isWorking,persistent:"","transition-show":"scale","transition-hide":"scale"}},[a("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("div",{staticClass:"loading"},[t._v("Calculating")])])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.workingMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-primary",attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:t.stop}})],1)],1)],1)],1),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-caption author col-1 desktop-only"},[t._v("\n    Made with ❤️ and Quasar "),a("a",{attrs:{href:"https://github.com/lubosmato/sudoku-solver",target:"_blank"}},[t._v("source")])])}],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a34a")),s=a.n(r),i=(a("96cf"),a("c973")),c=a.n(i),l=a("9523"),d=a.n(l),u=a("c0e9"),h=a.n(u),p=a("2f62");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){d()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v=Object(p["a"])("sudoku"),m=v.mapMutations,g=v.mapState,k=["😄","😃","😀","😊","😉","😍","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👍","👌","👊","✊","✌","👋","✋","👈","🙏","☝","👏","💪"];function b(){return k[Math.floor(Math.random()*k.length)]}var C=["Sudoku is based on an early mathematical analysis concept designed in 1782","the very first Sudoku World Championships were hosted in 2006 in Italy","several celebrities have admitted to being addicted to Sudoku","the Guinness World Record for the fastest time to complete a Sudoku is less than 1 minute and a half","in the year following Sudoku going viral, pencil sales are said to have increased by around 700%","the name “Sudoku” can be broken down into “Su” which means “Number” and “Doku” which means “Single/Only.”","the New York Time crossword editor psecondaryicted that the Sudoku mania wouldn’t last; he was wrong","while a Sudoku puzzle can have more than one solution, a well-formed puzzle has just one unique solution","JavaScript is not very fast language and this app is written in JavaScript"];function y(){return C[Math.floor(Math.random()*C.length)]}var q={name:"SudokuControls",data:function(){return{isCopiedShown:!1,difficulty:3,workingMessage:""}},computed:w(w({},g(["errorMessage","isWorking"])),{},{hasError:function(){return""!==this.errorMessage}}),watch:{isWorking:function(t){if(t){var e=b(),a=y();this.workingMessage="Did you know that ".concat(a,"? ").concat(e)}}},methods:w(w({},m(["reset","lockFilled","unlockAll","acknowledgeError"])),{},{solve:function(){this.$store.dispatch("sudoku/solve")},generate:function(){var t=this;return c()(s.a.mark((function e(){var a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("sudoku/generate",t.difficulty);case 2:a=t.$store.getters["sudoku/exported"],t.$router.push({name:"sudoku",params:{sudoku:a}});case 4:case"end":return e.stop()}}),e)})))()},stop:function(){this.$store.dispatch("sudoku/stop")},share:function(){var t=this;return c()(s.a.mark((function e(){var a,o,n,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.getters["sudoku/exported"],o="sudoku/",n="",n="hash"===t.$router.options.mode?"".concat(window.location.origin,"/").concat(o,"#/sudoku/").concat(a):"".concat(window.location.origin,"/").concat(o,"sudoku/").concat(a),r=function(){var t={title:"Check out this Sudoku! 🙂",text:"Check out this Sudoku! 🙂",url:n};if(void 0!==navigator.canShare&&!navigator.canShare(t))throw new Error("Cannot share");navigator.share(t)},!t.$q.platform.is.mobile){e.next=15;break}return e.prev=6,e.next=9,r();case 9:e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](6);case 13:e.next=25;break;case 15:return e.prev=15,e.next=18,navigator.clipboard.writeText(n);case 18:t.isCopiedShown=!0,setTimeout((function(){t.isCopiedShown=!1}),2e3),e.next=25;break;case 22:e.prev=22,e.t1=e["catch"](15),t.$store.commit("sudoku/updateError","Something went wrong 😥");case 25:case"end":return e.stop()}}),e,null,[[6,11],[15,22]])})))()},download:function(){var t=this;return c()(s.a.mark((function e(){var a,o;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=function(t,e){var a=document.createElement("a");"string"===typeof a.download?(a.href=t,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(t)},t.unlockAll(),e.next=4,t.$nextTick();case 4:return e.next=6,h()(document.querySelector(".main-grid"));case 6:o=e.sent,t.lockFilled(),a(o.toDataURL(),"suodku.png");case 9:case"end":return e.stop()}}),e)})))()},print:function(){window.print()}})},S=q,x=(a("fbe9"),a("2877")),O=a("eebe"),_=a.n(O),j=a("9c40"),$=a("c1d0"),Q=a("58a8"),E=a("eb85"),M=a("05c0"),D=a("24e8"),P=a("f09f"),z=a("a370"),T=a("4b7e"),W=a("7f67"),A=Object(x["a"])(S,o,n,!1,null,"ef12c2de",null);e["a"]=A.exports;_()(A,"components",{QBtn:j["a"],QSlider:$["a"],QBadge:Q["a"],QSeparator:E["a"],QTooltip:M["a"],QDialog:D["a"],QCard:P["a"],QCardSection:z["a"],QCardActions:T["a"]}),_()(A,"directives",{ClosePopup:W["a"]})},e94e:function(t,e,a){},fbe9:function(t,e,a){"use strict";var o=a("e94e"),n=a.n(o);n.a}}]);