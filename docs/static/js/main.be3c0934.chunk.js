(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(9),a=n.n(c),d=n(2),r=n(3),s=n(10),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(s.a)(e),[t.payload]);case"remove":return e.filter((function(e){return e.id!==t.payload}));case"check":return e.map((function(e){return e.id===t.payload?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}));default:return e}},l=n(7),u=n.n(l),j=n(0),h=function(e){var t=e.todo,n=e.index,o=e.handleCheckTodo,c=e.handleRemoveTodo;return Object(j.jsxs)("li",{className:"todoItem list-group-item list-group-item-action animate__animated animate__fadeIn",children:[Object(j.jsxs)("span",{className:"todoDesc ".concat(t.done&&"completed"),children:[n+1,"- ",t.description]}),Object(j.jsxs)("div",{className:"listControls",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",onChange:function(){return o(t.id)}}),Object(j.jsx)("div",{className:"trashIcon",onClick:function(){return c(t.id)}})]})]})},p=function(e){var t=e.todos,n=e.handleCheckTodo,o=e.handleRemoveTodo;return Object(j.jsx)("ul",{className:"todoList list-group list-group-flush",children:t.map((function(e,t){return Object(j.jsx)(h,{todo:e,index:t,handleCheckTodo:n,handleRemoveTodo:o},e.id)}))})};h.propTypes={todos:u.a.array,handleCheckTodo:u.a.func,handleRemoveTodo:u.a.func};var b=n(6),m=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=Object(d.a)(t,2),c=n[0],a=n[1];return[c,function(e){var t=e.target;a(Object(r.a)(Object(r.a)({},c),{},Object(b.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),c=Object(d.a)(n,3),a=c[0].description,s=c[1],i=c[2];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Add a new task"}),Object(j.jsx)("hr",{}),Object(j.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<1)){var n={id:(new Date).getTime(),description:a,done:!1};t(n),i()}},children:Object(j.jsxs)("div",{className:"d-grid gap-2",children:[Object(j.jsx)("input",{className:"form-control",type:"text",name:"description",placeholder:"Type your task here",autoComplete:"off",onChange:s,value:a}),Object(j.jsx)("button",{className:"btn btn-primary btn-block ".concat(a.trim().length<1&&"disabled"),type:"submit",children:"Add"})]})})]})},O=(n(18),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),f=function(){var e=Object(o.useReducer)(i,[],O),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"To-Do App"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-7",children:n.length>0?Object(j.jsx)(p,{todos:n,handleCheckTodo:function(e){console.log(e),c({type:"check",payload:e})},handleRemoveTodo:function(e){console.log(e+" >> is removed!"),c({type:"remove",payload:e})}}):Object(j.jsx)("p",{className:"alert alert-info text-center",children:"There are no tasks in the list."})}),Object(j.jsx)("div",{className:"col-5 ",children:Object(j.jsx)(m,{handleAddTodo:function(e){c({type:"add",payload:e})}})})]})]})};a.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.be3c0934.chunk.js.map