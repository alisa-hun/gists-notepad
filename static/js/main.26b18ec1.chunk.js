(this["webpackJsonpgists-notepad"]=this["webpackJsonpgists-notepad"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){n(6),n(7);var c=new Date;c.setSeconds(c.getSeconds()-5),(new Date).getTime()},18:function(e,t,n){n(6),n(7);var c=new Date;c.setSeconds(c.getSeconds()-5),(new Date).getTime()},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),i=n.n(a),r=(n(14),n(9)),s=n(2),l=(n(15),n(0));var u=function(e){var t=e.note,n=e.onDelete;return Object(l.jsxs)("div",{className:"d-flex flex-column notes-cont",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{maxLength:"255",type:"text",value:t.title,placeholder:"Enter note title...",required:!0}),Object(l.jsx)("button",{className:"btn-red txt-white",onClick:function(){n(t)},children:"Delete"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{maxLength:"1000",value:t.note,placeholder:"Enter note...",required:!0})})]})};var d=function(e){var t=e.notes,n=e.onDelete;return t?t.map((function(e){return Object(l.jsx)(u,{note:e,onDelete:n},e.id)})):Object(l.jsx)("div",{})};var j=function(e){var t=e.onSave,n=e.viewStats,o=Object(c.useState)(""),a=Object(s.a)(o,2),i=a[0],r=a[1];return Object(l.jsxs)("form",{id:"notepad_form",className:"d-flex",onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(l.jsx)("div",{className:"form-col-9",children:Object(l.jsx)("input",{maxLength:"255",type:"text",placeholder:"My Notepad title...",value:i,onChange:function(e){r(e.target.value)},required:!0})}),Object(l.jsxs)("div",{className:"form-col-3 flex-end",children:[Object(l.jsx)("button",{className:"btn-white",onClick:function(){n()},children:"View Stats"}),Object(l.jsx)("button",{className:"btn-blue txt-white",type:"submit",children:"Save"}),Object(l.jsx)("button",{className:"btn-red txt-white",children:"Delete"})]})]})};var b=function(e){var t=e.onAdd,n=Object(c.useState)(""),o=Object(s.a)(n,2),a=o[0],i=o[1],r=Object(c.useState)(""),u=Object(s.a)(r,2),d=u[0],j=u[1];return Object(l.jsxs)("form",{id:"notes_form",className:"d-flex flex-column",onSubmit:function(e){e.preventDefault(),t(a,d),i(""),j("")},children:[Object(l.jsx)("h2",{children:"My notes"}),Object(l.jsx)("input",{placeholder:"Enter note title...",required:!0,type:"text",value:a,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("textarea",{placeholder:"Enter note...",required:!0,value:d,onChange:function(e){j(e.target.value)},children:d}),Object(l.jsx)("button",{className:"btn-green txt-white",children:"Add"})]})};n(17),n(18);var f=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=(t[0],t[1],Object(c.useState)(localStorage.notes?JSON.parse(localStorage.notes):[])),o=Object(s.a)(n,2),a=o[0],i=o[1];Object(c.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(a))}),[a]);var u=(new Date).getTime()+Math.floor(100*Math.random());return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{onSave:function(e){if(!a.length)return console.log(Error("At least one note should be added"));var t=a.map((function(e){return{filename:e.title,content:e.note}})),n={};t.forEach((function(e,t){n[u+""]=e}));var c={method:"POST",cache:"no-cache",credentials:"same-origin",referrerPolicy:"no-referrer",headers:{Accept:"application/vnd.github.v3+json",Authorization:"token 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","Content-Type":"application/json"},body:JSON.stringify({description:e,public:!0,files:n})};fetch("https://api.github.com/gists",c).then((function(e){return e.json()})).then((function(e){}))},viewStats:function(){}}),Object(l.jsx)(b,{onAdd:function(e,t){i([].concat(Object(r.a)(a),[{id:u,title:e,note:t}]))}}),Object(l.jsx)(d,{notes:a,onDelete:function(e){i(a.filter((function(t){return t.id!=e.id})))}})]})};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.26b18ec1.chunk.js.map