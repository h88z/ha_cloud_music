(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-037ff029"],{"039c":function(t,e,n){"use strict";var r=n("2279"),c=n.n(r);c.a},2279:function(t,e,n){},8184:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playList"},[n("music-list",{attrs:{list:t.playlist,"list-type":1},on:{select:t.selectItem,del:t.deleteItem}},[n("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[n("span",{on:{click:function(e){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),n("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空正在播放列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},c=[],s=(n("5ab2"),n("6d57"),n("e10e"),n("9d37")),i=n("08c1"),l=n("5362"),o=n("093b");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"PlayList",components:{MusicList:l["a"],MmDialog:o["a"]},data:function(){return{show:!1}},computed:u({},Object(i["c"])(["playing","playlist","currentMusic"])),methods:u({clearList:function(){top.alert("懒得写这个功能，所以这里不让清除")},selectItem:function(t,e){t.id!==this.currentMusic.id&&(this.setCurrentIndex(e),this.setPlaying(!0))},deleteItem:function(t){top.alert("懒得写这个功能，所以这里不让删除")}},Object(i["d"])({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"}),{},Object(i["b"])(["removerPlayListItem","clearPlayList"]))},f=p,b=(n("039c"),n("5511")),d=Object(b["a"])(f,r,c,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-037ff029.73db117f.js.map