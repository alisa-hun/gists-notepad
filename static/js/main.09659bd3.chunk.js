(this["webpackJsonpgists-notepad"]=this["webpackJsonpgists-notepad"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(6),i=n.n(c),r=(n(12),n(7)),s=n(2),u=(n(13),n(0));var j=function(t){var e=t.note;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:e.title}),Object(u.jsx)("textarea",{value:e.note})]})};var b=function(t){var e=t.notes;return Object(u.jsx)("div",{children:e.map((function(t){return Object(u.jsx)(j,{note:t},t.id)}))})};var d=function(t){var e=t.onSave,n=Object(o.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c)},children:[Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}}),Object(u.jsx)("button",{children:"View Stats"}),Object(u.jsx)("button",{type:"submit",children:"Save"}),Object(u.jsx)("button",{children:"Delete"})]})};var l=function(t){var e=t.onAdd,n=Object(o.useState)("Untitled"),a=Object(s.a)(n,2),c=a[0],i=a[1],r=Object(o.useState)(""),j=Object(s.a)(r,2),b=j[0],d=j[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c,b),i(""),d("")},children:[Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}}),Object(u.jsx)("textarea",{value:b,onChange:function(t){d(t.target.value)},children:b}),Object(u.jsx)("button",{children:"Add"})]})};var O=function(){var t=Object(o.useState)(""),e=Object(s.a)(t,2),n=(e[0],e[1],Object(o.useState)([{id:Math.random(),title:"First Note Title",note:"My first note"},{id:Math.random(),title:"The other note's title",note:"My note"},{id:Math.random(),title:"One more Title",note:"And one more note"}])),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{onSave:function(t){console.log("Save or not, that's a question!")}}),Object(u.jsx)(l,{onAdd:function(t,e){i([].concat(Object(r.a)(c),[{id:Math.random(),title:t,note:e}]))}}),Object(u.jsx)(b,{notes:c,onSave:function(){console.log("Save or not, that's a question!")}})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.09659bd3.chunk.js.map