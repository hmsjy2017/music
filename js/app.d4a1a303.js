(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"06dc":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"b",(function(){return m}));r("a623"),r("fb6a"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("498a"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=[102,76,97,67],o=[73,68,51],c=[79,103,103,83],i=[102,116,121,112],s={mp3:"audio/mpeg",flac:"audio/flac",m4a:"audio/mp4",ogg:"audio/ogg"};function u(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.readAsArrayBuffer(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e,t,r){var n="",a="",o=r.split("-");return o.length>1?(n=o[0].trim(),a=o[1].trim()):1===o.length&&(a=o[0].trim()),"string"==typeof e&&""!==e&&(n=e),"string"==typeof t&&""!==t&&(a=t),{artist:n,title:a}}function f(e){var t="";if(void 0!==e.common.picture&&e.common.picture.length>0){var r=new Blob([e.common.picture[0].data],{type:e.common.picture[0].format});t=URL.createObjectURL(r)}return t}function p(e,t){return e.every((function(e,r){return e===t[r]}))}function m(e,t){return p(o,e.slice(0,o.length))?"mp3":p(a,e.slice(0,a.length))?"flac":p(c,e.slice(0,c.length))?"ogg":p(i,e.slice(4,8))?"m4a":t}},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("46a1"),r("450d");var n=r("e5f2"),a=r.n(n),o=(r("b5d8"),r("f494")),c=r.n(o),i=(r("560b"),r("dcdc")),s=r.n(i),u=(r("f225"),r("89a9")),l=r.n(u),d=(r("f4f9"),r("c2cc")),f=r.n(d),p=(r("7a0f"),r("0f6c")),m=r.n(p),h=(r("aaa5"),r("a578")),b=r.n(h),g=(r("adec"),r("3d2d")),v=r.n(g),w=(r("bdc7"),r("aa2f")),y=r.n(w),k=(r("de31"),r("c69e")),x=r.n(k),_=(r("5466"),r("ecdf")),O=r.n(_),j=(r("38a0"),r("ad41")),D=r.n(j),S=(r("1951"),r("eedf")),A=r.n(S),M=(r("acb6"),r("c673")),R=r.n(M),U=(r("fd71"),r("a447")),C=r.n(U),F=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-main",[r("x-upload",{on:{handle_finish:e.showSuccess,handle_error:e.showFail}}),r("el-row",{attrs:{id:"app-control"}},[r("el-row",{staticStyle:{"padding-bottom":"1em","font-size":"14px"}},[e._v(" 歌曲命名格式： "),r("el-radio",{attrs:{label:"1",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌手-歌曲名")]),r("el-radio",{attrs:{label:"2",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名")]),r("el-radio",{attrs:{label:"3",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名-歌手")]),r("el-radio",{attrs:{label:"4",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("同原文件名")])],1),r("el-row",[r("el-button",{attrs:{icon:"el-icon-download",plain:""},on:{click:e.handleDownloadAll}},[e._v("下载全部")]),r("el-button",{attrs:{icon:"el-icon-delete",plain:"",type:"danger"},on:{click:e.handleDeleteAll}},[e._v("删除全部")]),r("el-checkbox",{staticStyle:{"margin-left":"1em"},attrs:{border:""},model:{value:e.instant_download,callback:function(t){e.instant_download=t},expression:"instant_download"}},[e._v("立即保存")])],1)],1),r("audio",{attrs:{autoplay:e.playing_auto,src:e.playing_url,controls:""}}),r("x-preview",{attrs:{"table-data":e.tableData,download_format:e.download_format},on:{music_changed:e.changePlaying}})],1),r("el-footer",{attrs:{id:"app-footer"}},[r("el-row",[r("a",{attrs:{href:"https://github.com/ix64/unlock-music",target:"_blank"}},[e._v("音乐解锁")]),e._v("(v"),r("span",{domProps:{textContent:e._s(e.version)}}),e._v(")：移除已购音乐的加密保护。 "),r("a",{attrs:{href:"https://github.com/ix64/unlock-music/wiki/使用提示",target:"_blank"}},[e._v("使用提示")])]),r("el-row",[e._v(" 目前支持网易云音乐(ncm)、QQ音乐(qmc, mflac, mgg, tkm)以及 "),r("a",{attrs:{href:"https://github.com/ix64/unlock-music/blob/master/README.md",target:"_blank"}},[e._v("其他格式")]),e._v("。 ")]),r("el-row",[r("span",[e._v("Copyright © 2019")]),e._v(" MengYX 音乐解锁使用 "),r("a",{attrs:{href:"https://github.com/ix64/unlock-music/blob/master/LICENSE",target:"_blank"}},[e._v("MIT许可协议")]),e._v(" 开放源代码 ")])],1)],1)},B=[],E=(r("4160"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{attrs:{"auto-upload":!1,"on-change":e.handleFile,"show-file-list":!1,action:"",drag:"",multiple:""}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击选择")])]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("本工具仅在浏览器内对文件进行解锁，无需消耗流量")])])},T=[],q=(r("b0c0"),{name:"upload",data:function(){return{cacheQueue:[],workers:[],idle_workers:[],thread_num:1}},mounted:function(){var e=this;if(""!==document.location.host){this.thread_num=navigator.hardwareConcurrency||1;var t=r("bfa2");this.workers.push(t().CommonDecrypt),this.idle_workers.push(0),setTimeout((function(){for(var r=1;r<e.thread_num;r++)e.workers.push(t().CommonDecrypt),e.idle_workers.push(r)}),1e3)}else{var n=r("bd2e");this.workers.push(n.CommonDecrypt),this.idle_workers.push(0)}},methods:{handleFile:function(e){this.idle_workers.length>0?this.handleDoFile(e,this.idle_workers.shift()):this.cacheQueue.push(e)},handleCacheQueue:function(e){0!==this.cacheQueue.length?this.handleDoFile(this.cacheQueue.shift(),e):this.idle_workers.push(e)},handleDoFile:function(e,t){var r=this;this.workers[t](e).then((function(e){r.$emit("handle_finish",e),r.handleCacheQueue(t)})).catch((function(n){r.$emit("handle_error",n,e.name),r.handleCacheQueue(t)}))}}}),$=q,N=(r("b646"),r("2877")),I=Object(N["a"])($,L,T,!1,null,"36dd009c",null),Q=I.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{label:"封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.picture}},[r("div",{staticClass:"image-slot el-image__error",attrs:{slot:"error"},slot:"error"},[e._v(" 暂无封面 ")])])]}}])}),r("el-table-column",{attrs:{label:"歌曲"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.title))])]}}])}),r("el-table-column",{attrs:{label:"歌手"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.artist))])]}}])}),r("el-table-column",{attrs:{label:"专辑"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(t.row.album))])]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{circle:"",icon:"el-icon-video-play",type:"success"},on:{click:function(r){return e.handlePlay(t.$index,t.row)}}}),r("el-button",{attrs:{circle:"",icon:"el-icon-download"},on:{click:function(r){return e.handleDownload(t.row)}}}),r("el-button",{attrs:{circle:"",icon:"el-icon-delete",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}})]}}])})],1)},H=[];r("a434"),r("3ca3"),r("ddb0"),r("2b3d");function W(e,t){var r=document.createElement("a");switch(r.href=e.file,t){default:case"1":r.download=e.artist+" - "+e.title+"."+e.ext;break;case"2":r.download=e.title+"."+e.ext;break;case"3":r.download=e.title+" - "+e.artist+"."+e.ext;break;case"4":r.download=e.rawFilename+"."+e.ext;break}document.body.append(r),r.click(),r.remove()}function V(e){URL.revokeObjectURL(e.file),URL.revokeObjectURL(e.picture)}var z={name:"preview",props:{tableData:{type:Array,required:!0},download_format:{type:String,required:!0}},methods:{handlePlay:function(e,t){this.$emit("music_changed",t.file)},handleDelete:function(e,t){V(t),this.tableData.splice(e,1)},handleDownload:function(e){W(e,this.download_format)}}},K=z,X=Object(N["a"])(K,J,H,!1,null,"6856848d",null),Y=X.exports,G=r("9224"),Z={name:"app",components:{xUpload:Q,xPreview:Y},data:function(){return{version:G.version,activeIndex:"1",tableData:[],playing_url:"",playing_auto:!1,download_format:"1",instant_download:!1}},created:function(){this.$nextTick((function(){this.finishLoad()}))},methods:{finishLoad:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=document.getElementById("loader-mask"),r&&r.remove(),t.prev=2,t.next=5,fetch("https://stats.ixarea.com/collect/music/app-version",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Version:e.version})});case 5:return a=t.sent,t.next=8,a.json();case 8:n=t.sent,t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](2);case 13:n.Found?e.$notify.warning({title:"发现更新",message:"发现新版本 v"+n.Version+"<br/>更新详情："+n.Detail+'<br/><a target="_blank" href="'+n.URL+'">获取更新</a>',dangerouslyUseHTMLString:!0,duration:15e3,position:"top-left"}):e.$notify.info({title:"离线使用",message:'我们使用PWA技术，无网络也能使用<br/>最近更新：提供实验性mgg支持<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>',dangerouslyUseHTMLString:!0,duration:1e4,position:"top-left"});case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},showSuccess:function(e){if(e.status){this.instant_download?(W(e,this.download_format),V(e)):(this.tableData.push(e),this.$notify.success({title:"解锁成功",message:"成功解锁 "+e.title,duration:3e3}));var t=[e.title,e.artist,e.album];window._paq.push(["trackEvent","Unlock",e.rawExt+","+e.mime,JSON.stringify(t)])}else this.showFail(e.message,e.rawFilename+"."+e.rawExt)},showFail:function(e,t){this.$notify.error({title:"出现问题",message:e+"，"+t+'，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>',dangerouslyUseHTMLString:!0,duration:6e3}),window._paq.push(["trackEvent","Error",e,t]),console.error(e,t)},changePlaying:function(e){this.playing_url=e,this.playing_auto=!0},handleDeleteAll:function(){this.tableData.forEach((function(e){V(e)})),this.tableData=[]},handleDownloadAll:function(){var e=this,t=0,r=setInterval((function(){t<e.tableData.length?(W(e.tableData[t],e.download_format),t++):clearInterval(r)}),300)}}},ee=Z,te=(r("034f"),Object(N["a"])(ee,P,B,!1,null,null,null)),re=te.exports,ne=r("9483");Object(ne["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available."),window.location.reload()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("0fae");F["default"].use(C.a),F["default"].use(R.a),F["default"].use(A.a),F["default"].use(D.a),F["default"].use(O.a),F["default"].use(x.a),F["default"].use(y.a),F["default"].use(v.a),F["default"].use(b.a),F["default"].use(m.a),F["default"].use(f.a),F["default"].use(l.a),F["default"].use(s.a),F["default"].use(c.a),F["default"].prototype.$notify=a.a,F["default"].config.productionTip=!1,new F["default"]({render:function(e){return e(re)}}).$mount("#app")},"85ec":function(e,t,r){},"8a1e":function(e,t,r){},9224:function(e){e.exports=JSON.parse('{"name":"unlock-music","version":"1.3.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build"},"dependencies":{"browser-id3-writer":"^4.3.0","core-js":"^3.6.4","crypto-js":"^4.0.0","element-ui":"^2.13.0","music-metadata-browser":"^2.0.4","register-service-worker":"^1.6.2","vue":"^2.6.11"},"devDependencies":{"@vue/cli-plugin-babel":"^4.2.2","@vue/cli-plugin-pwa":"^4.2.2","@vue/cli-service":"^4.2.2","babel-plugin-component":"^1.1.1","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.11","workerize-loader":"^1.1.0"}}')},a8ee:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return i}));r("ace4"),r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("96cf");var n=r("1da1"),a=r("fd2f"),o=r("06dc"),c=[0,0,0,32,102,116,121,112];function i(e,t){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])(t);case 2:for(n=e.sent,i=new Uint8Array(n),s=0;s<8;++s)i[s]=c[s];return u=new Blob([i],{type:"audio/mp4"}),e.next=8,Object(a["Decrypt"])(u,r,"m4a",!1);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},b646:function(e,t,r){"use strict";var n=r("8a1e"),a=r.n(n);a.a},b6cf:function(e,t,r){"use strict";r.r(t);r("a630"),r("fb6a"),r("ace4"),r("d3b7"),r("3ca3"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),o=(r("99af"),r("d4ec")),c=r("bee2"),i=[79,103,103,83,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,30,1,118,111,114,98,105,115,0,0,0,0,2,68,172,0,0,0,0,0,0,0,238,2,0,0,0,0,0,184,1,79,103,103,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,3,118,111,114,98,105,115,44,0,0,0,88,105,112,104,46,79,114,103,32,108,105,98,86,111,114,98,105,115,32,73,32,50,48,49,53,48,49,48,53,32,40,226,155,132,226,155,132,226,155,132,226,155,132,41,0,0,0,0,0,0,0,0,84,73,84,76,69,61],s=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,6,3,3,3,3,6,6,6,6,3,3,3,3,6,6,6,6,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0,6,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,1,9,9,0,1,9,9,9,9,9,9,9,9],u=[74,214,202,144,103,247,82,94,149,35,159,19,17,126,71,116,61,144,170,63,81,198,9,213,159,250,102,249,243,214,161,144,160,247,240,29,149,222,159,132,17,244,14,116,187,144,188,63,146,0,9,91,159,98,102,161],l=195,d=216,f=function(){function e(t,r,n){Object(o["a"])(this,e),void 0===r||void 0===n?(this.Matrix128=t,this.generateMask58from128()):(this.Matrix58=t,this.Super58A=r,this.Super58B=n,this.generateMask128from58())}return Object(c["a"])(e,[{key:"generateMask128from58",value:function(){if(56!==this.Matrix58.length)throw"incorrect mask58 matrix length";for(var e=[],t=0;t<8;t+=1)e=e.concat([this.Super58A],this.Matrix58.slice(7*t,7*t+7),[this.Super58B],this.Matrix58.slice(49-7*t,56-7*t).reverse());this.Matrix128=e}},{key:"generateMask58from128",value:function(){if(128!==this.Matrix128.length)throw"incorrect mask128 length";for(var e=this.Matrix128[0],t=this.Matrix128[8],r=[],n=0;n<8;n+=1){var o=16*n,c=120-o;if(this.Matrix128[o]!==e||this.Matrix128[o+8]!==t)throw"decode mask-128 to mask-58 failed";var i=this.Matrix128.slice(o+1,o+8),s=this.Matrix128.slice(c+1,c+8).reverse();if(!Object(a["g"])(i,s))throw"decode mask-128 to mask-58 failed";r=r.concat(i)}this.Matrix58=r,this.Super58A=e,this.Super58B=t}},{key:"Decrypt",value:function(e){for(var t=e.slice(0),r=-1,n=-1,a=0;a<e.length;a++)r++,n++,(32768===r||r>32768&&(r+1)%32768===0)&&(r++,n++),n>=128&&(n-=128),t[a]^=this.Matrix128[n];return t}}]),e}();function p(){return new f(u,l,d)}function m(e){for(var t,r=Math.min(32768,e.length),n=0;n<r;n+=128)try{if(t=new f(e.slice(n,n+128)),Object(a["g"])(a["c"],t.Decrypt(e.slice(0,a["c"].length))))break}catch(o){}return t}function h(e){if(!(e.length<i.length)){for(var t={},r=0;r<58;r++)t[r]={};for(var n=0;n<i.length;n++)if(0!==s[n]){var a=v(n),o=e[n]^i[n],c=s[n];o in t[a]?t[a][o]+=c:t[a][o]=c}var u,l,d=[];try{for(var p=0;p<56;p++)d[p]=g(t[p]);u=g(t[56]),l=g(t[57])}catch(m){return}return new f(d,u,l)}}function b(e,t,r){return new f(e,t,r)}function g(e){if(0===e.length)throw"can not match at least one key";var t,r=0;for(var n in e)e[n]>r&&(t=n,r=e[n]);return parseInt(t)}function v(e){e>127&&(e%=128);var t=e%16,r=(e-t)/16;switch(t){case 0:r=8,t=0;break;case 8:r=8,t=1;break;default:t>7?(r=7-r,t=15-t):t-=1;break}return 7*r+t}r.d(t,"Decrypt",(function(){return k}));var w=r("cb96"),y={mgg:{handler:h,ext:"ogg",detect:!0},mflac:{handler:m,ext:"flac",detect:!0},qmc0:{handler:p,ext:"mp3",detect:!1},qmc3:{handler:p,ext:"mp3",detect:!1},qmcogg:{handler:p,ext:"ogg",detect:!1},qmcflac:{handler:p,ext:"flac",detect:!1},bkcmp3:{handler:p,ext:"mp3",detect:!1},bkcflac:{handler:p,ext:"flac",detect:!1},tkm:{handler:p,ext:"m4a",detect:!1}};function k(e,t,r){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var o,c,i,s,u,l,d,f,p,m,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n in y){e.next=2;break}return e.abrupt("return",{status:!1,message:"File type is incorrect!"});case 2:return o=y[n],e.t0=Uint8Array,e.next=6,Object(a["d"])(t);case 6:if(e.t1=e.sent,c=new e.t0(e.t1),!o.detect){e.next=20;break}if(i=c.slice(0,-368),s=o.handler(i),u=c.slice(-368),void 0!==s){e.next=16;break}return e.next=15,O(u,r,n);case 15:s=e.sent;case 16:if(void 0!==s){e.next=18;break}return e.abrupt("return",{status:!1,message:n+"格式仅提供实验性支持！"});case 18:e.next=22;break;case 20:i=c,s=o.handler(i);case 22:return l=s.Decrypt(i),d=Object(a["b"])(l,o.ext),f=a["a"][d],p=new Blob([l],{type:f}),e.next=28,w.parseBlob(p);case 28:return m=e.sent,h=Object(a["f"])(m.common.artist,m.common.title,r),o.detect&&_(u,s.Matrix128,h.artist,h.title,m.common.album,r,n),e.abrupt("return",{status:!0,title:h.title,artist:h.artist,ext:d,album:m.common.album,picture:Object(a["e"])(m),file:URL.createObjectURL(p),mime:f});case 32:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function _(e,t,r,n,a,o,c){fetch("https://stats.ixarea.com/collect/qmcmask/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Mask:Array.from(t),Key:Array.from(e),Artist:r,Title:n,Album:a,Filename:o,Format:c})}).then().catch()}function O(e,t,r){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://stats.ixarea.com/collect/qmcmask/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Format:n,Key:Array.from(t),Filename:r})});case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",b(o.Matrix58,o.Super58A,o.Super58B));case 10:e.prev=10,e.t0=e["catch"](0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])}))),j.apply(this,arguments)}},bd2e:function(e,t,r){"use strict";r.r(t),r.d(t,"CommonDecrypt",(function(){return s}));r("baa5"),r("b0c0"),r("96cf");var n=r("1da1"),a=r("dde9"),o=r("b6cf"),c=r("fd2f"),i=r("a8ee");function s(e){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.name.substring(t.name.lastIndexOf(".")+1,t.name.length).toLowerCase(),n=t.name.substring(0,t.name.lastIndexOf(".")),e.t0=r,e.next="ncm"===e.t0?5:"mp3"===e.t0?9:"flac"===e.t0?9:"m4a"===e.t0?9:"ogg"===e.t0?9:"tm0"===e.t0?13:"tm3"===e.t0?13:"qmc3"===e.t0?17:"qmc0"===e.t0?17:"qmcflac"===e.t0?17:"qmcogg"===e.t0?17:"tkm"===e.t0?17:"bkcmp3"===e.t0?17:"bkcflac"===e.t0?17:"mflac"===e.t0?17:"mgg"===e.t0?17:"tm2"===e.t0?21:"tm6"===e.t0?21:25;break;case 5:return e.next=7,a.Decrypt(t.raw);case 7:return s=e.sent,e.abrupt("break",26);case 9:return e.next=11,c.Decrypt(t.raw,n,r);case 11:return s=e.sent,e.abrupt("break",26);case 13:return e.next=15,c.Decrypt(t.raw,n,"mp3");case 15:return s=e.sent,e.abrupt("break",26);case 17:return e.next=19,o.Decrypt(t.raw,n,r);case 19:return s=e.sent,e.abrupt("break",26);case 21:return e.next=23,i.Decrypt(t.raw,n);case 23:return s=e.sent,e.abrupt("break",26);case 25:s={status:!1,message:"不支持此文件格式"};case 26:return s.rawExt=r,s.rawFilename=n,e.abrupt("return",s);case 29:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}},bfa2:function(e,t,r){var n=r("3d67"),a=["CommonDecrypt"];e.exports=function(){var e=new Worker(r.p+"56c953a73057f44961e3.worker.js",{name:"[hash].worker.js"});return n(e,a),e}},dde9:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return u}));r("4160"),r("a15b"),r("d81d"),r("fb6a"),r("ace4"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3"),r("5319"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("159b"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),o=r("3452"),c=r("7907"),i=o.enc.Hex.parse("687a4852416d736f356b496e62617857"),s=o.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728");function u(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,c,i,s,u,l,f,b,g,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["d"])(t);case 2:if(r=e.sent,n=new DataView(r),1313166403===n.getUint32(0,!0)&&1296122950===n.getUint32(4,!0)){e.next=6;break}return e.abrupt("return",{status:!1,message:"此ncm文件已损坏"});case 6:for(o=p(n,r,10),c=m(o.data),i=h(n,r,o.offset),s=i.data,u=i.offset+n.getUint32(i.offset+5,!0)+13,l=new Uint8Array(r,u),f=0;f<l.length;++f)l[f]^=c[255&f];if(void 0===s.format&&(s.format=Object(a["b"])(l,"mp3")),b=a["a"][s.format],g=[],s.artist.forEach((function(e){return g.push(e[0])})),"mp3"!==s.format){e.next=21;break}return e.next=20,d(l,g,s.musicName,s.album,s.albumPic);case 20:l=e.sent;case 21:return v=new Blob([l],{type:b}),e.abrupt("return",{status:!0,title:s.musicName,artist:g.join(" & "),ext:s.format,album:s.album,picture:s.albumPic,file:URL.createObjectURL(v),mime:b});case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e,t,r,n,a){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n,a,o){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=new c(t),i.setFrame("TPE1",r).setFrame("TIT2",n).setFrame("TALB",a),""===o){e.next=15;break}return e.prev=3,e.next=6,fetch(o);case 6:return e.next=8,e.sent.arrayBuffer();case 8:s=e.sent,i.setFrame("APIC",{type:3,data:s,description:"Cover"}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),console.log("Fail to write cover image!");case 15:return i.addTag(),e.abrupt("return",i.arrayBuffer);case 17:case"end":return e.stop()}}),e,null,[[3,12]])}))),f.apply(this,arguments)}function p(e,t,r){var n=e.getUint32(r,!0);r+=4;var a=new Uint8Array(t,r,n).map((function(e){return 100^e}));r+=n;for(var c=o.AES.decrypt({ciphertext:o.lib.WordArray.create(a)},i,{mode:o.mode.ECB,padding:o.pad.Pkcs7}),s=new Uint8Array(c.sigBytes),u=c.words,l=c.sigBytes,d=0;d<l;d++)s[d]=u[d>>>2]>>>24-d%4*8&255;return{offset:r,data:s.slice(17)}}function m(e){for(var t=new Uint8Array(Array(256).keys()),r=e.length,n=0,a=0;a<256;a++){n=t[a]+n+e[a%r]&255;var o=[t[n],t[a]];t[a]=o[0],t[n]=o[1]}return t.map((function(e,t,r){t=t+1&255;var n=r[t],a=r[t+n&255];return r[n+a&255]}))}function h(e,t,r){var n=e.getUint32(r,!0);if(r+=4,0===n)return{};var a=new Uint8Array(t,r,n).map((function(e){return 99^e}));r+=n;var c=o.AES.decrypt({ciphertext:o.enc.Base64.parse(o.lib.WordArray.create(a.slice(22)).toString(o.enc.Utf8))},s,{mode:o.mode.ECB,padding:o.pad.Pkcs7}),i=JSON.parse(c.toString(o.enc.Utf8).slice(6));return i.albumPic=i.albumPic.replace("http:","https:"),{data:i,offset:r}}},fd2f:function(e,t,r){"use strict";r.r(t),r.d(t,"Decrypt",(function(){return c}));r("ace4"),r("d3b7"),r("3ca3"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("ddb0"),r("2b3d"),r("96cf");var n=r("1da1"),a=r("06dc"),o=r("cb96");function c(e,t,r){return i.apply(this,arguments)}function i(){return i=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var c,i,s,u,l,d=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=!(d.length>3&&void 0!==d[3])||d[3],i=n,!c){e.next=10;break}return e.t0=Uint8Array,e.next=6,Object(a["d"])(t);case 6:e.t1=e.sent,s=new e.t0(e.t1),i=Object(a["b"])(s,n),i!==n&&(t=new Blob([s],{type:a["a"][i]}));case 10:return e.next=12,o.parseBlob(t);case 12:return u=e.sent,l=Object(a["f"])(u.common.artist,u.common.title,r),e.abrupt("return",{status:!0,title:l.title,artist:l.artist,ext:i,album:u.common.album,picture:Object(a["e"])(u),file:URL.createObjectURL(t),mime:a["a"][i]});case 15:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}}});
//# sourceMappingURL=app.d4a1a303.js.map