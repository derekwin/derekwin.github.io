(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13593d87"],{"0728":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page-container",[n("q-page",[n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-none col-12 col-md-8  "},[n("q-card",{staticClass:"q-pa-none  q-py-md  shadow-0 "},[n("div",{staticClass:"col-4 items-start q-gutter-none justify-center page_card_title"},[n("q-input",{staticClass:"bg-white",attrs:{outlined:"",placeholder:"标题   (此处和正文需要单独填写)",hint:"",dense:e.dense},model:{value:e.ph,callback:function(t){e.ph=t},expression:"ph"}})],1),n("div",{staticClass:"col-4 items-start q-gutter-none justify-center page_card_subtitle"},[n("q-input",{staticClass:"bg-white",attrs:{outlined:"",placeholder:"简介",hint:"(选择发布日期)",dense:e.dense},model:{value:e.ph,callback:function(t){e.ph=t},expression:"ph"}})],1),n("div",[n("q-input",{staticClass:"q-px-sm page_card_date",attrs:{mask:"date",rules:["date"]},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-btn",{staticClass:"shadow-0 cursor-pointer ",attrs:{icon:"event",round:"",left:""}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"q-px-md q-pt-none q-pb-md col-12 col-md-4"},[n("q-btn",{staticClass:"shadow-4 bg-green-4 cursor-pointer glossy",attrs:{icon:"fas fa-hand-point-right ",label:"提交发布"}})],1),n("div",{staticClass:"q-px-md q-pt-none q-pb-md col-12 col-md-5"},[n("q-btn",{staticClass:" shadow-4 bg-green-4 cursor-pointer glossy",attrs:{icon:"fas fa-hand-point-right",label:"保存到草稿箱"}})],1),n("div",{staticClass:"q-px-md q-py-none col-12 col-md-3"},[n("q-btn",{staticClass:" shadow-4 bg-green-4 cursor-pointer glossy",attrs:{icon:"fas fa-hand-point-right",label:"删除"}})],1)])])],1),n("div",{staticClass:" col-12 col-md-4 "},[n("q-card",{staticClass:"q-pt-none q-pb-md q-px-md  page_card shadow-0 "},[n("q-chip",{attrs:{color:"green-1","text-color":"grey-9",square:""}},[e._v("\n                                            Click => 选择文章类别标签 :\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Linux_peration_and_maintenanc,icon:"bookmark",color:"grey-8","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Linux_peration_and_maintenanc",t)}}},[e._v("\n                                            Linux operation and maintenanc\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Python,icon:"bookmark",color:"blue-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Python",t)}}},[e._v("\n                                            Python\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Flask,icon:"bookmark",color:"pink-3","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Flask",t)}}},[e._v("\n                                            Flask\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Vue,icon:"bookmark",color:"pink-3","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Vue",t)}}},[e._v("\n                                            Vue\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Opencv,icon:"bookmark",color:"pink-3","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Opencv",t)}}},[e._v("\n                                            Opencv\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Quasar,icon:"bookmark",color:"pink-3","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Quasar",t)}}},[e._v("\n                                            Quasar\n                    ")]),n("q-chip",{attrs:{selected:e.desert.C,icon:"bookmark",color:"blue-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"C",t)}}},[e._v("\n                                            C\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Data_structure,icon:"bookmark",color:"green-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Data_structure",t)}}},[e._v("\n                                            Data structure\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Ableton_live,icon:"bookmark",color:"grey-8","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Ableton_live",t)}}},[e._v("\n                                            Ableton live\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Mixing,icon:"bookmark",color:"green-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Mixing",t)}}},[e._v("\n                                            Mixing\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Music_Style,icon:"bookmark",color:"green-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Music_Style",t)}}},[e._v("\n                                            Musical Style\n                    ")]),n("q-chip",{attrs:{selected:e.desert.Music_Production,icon:"bookmark",color:"green-4","text-color":"grey-3",square:""},on:{"update:selected":function(t){return e.$set(e.desert,"Music_Production",t)}}},[e._v("\n                                            Music Production\n                    ")])],1)],1)]),n("mavon-editor",{ref:"md",attrs:{codeStyle:e.code_style},on:{imgAdd:e.$imgAdd,imgDel:e.$imgDel},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)},s=[],r=(n("82ae"),n("64e1"),n("b2d8")),a={name:"editor",components:{"mavon-editor":r.mavonEditor},data:function(){return{date:"2019/02/01",desert:{Linux_peration_and_maintenanc:!1,Python:!1,Flask:!1,Vue:!1,Opencv:!1,Quasar:!1,C:!1,Data_structure:!1,Ableton_live:!1,Mixing:!1,Music_Style:!1,Music_Production:!1}}},methods:{save:function(){var e=this;this.content.content=this.$refs.md.d_render,this.content.textcontent=this.$refs.md.d_value,this.$axios.post("/admin/change_artical/"+this.$route.params.pagename,this.content).then(function(t){e.content.content=t.data.data.textcontent})},delete:function(){},publish:function(){},draft:function(){}}},c=a,i=(n("fdfd"),n("2877")),d=Object(i["a"])(c,o,s,!1,null,null,null);t["default"]=d.exports},"1e1d":function(e,t,n){},fdfd:function(e,t,n){"use strict";var o=n("1e1d"),s=n.n(o);s.a}}]);
//# sourceMappingURL=chunk-13593d87.7be587e0.js.map