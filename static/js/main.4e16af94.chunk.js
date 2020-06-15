(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(15),a(9)),l=a(8),i=a(1),u=a(3),m=a(2),p=a(4),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("h4",{className:"bg-info text-white text-center p-4"},a.props.username,"'s Todo App (",a.props.tasks.filter((function(e){return!e.done})).length," Tasks to do)")},a}return Object(p.a)(t,e),t}(n.Component),h=a(5),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newItem:""},a.updateNewTaskValue=function(e){a.setState({newItem:e.target.value})},a.createNewTask=function(){a.props.callback(a.state.newItem),a.setState({newItem:""})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.newItem,onChange:this.updateNewTaskValue,placeholder:"New Task",autoFocus:!0}),r.a.createElement("button",{className:"btn btn-success btn-block mt-1",onClick:this.createNewTask},"Add"))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{key:this.props.task.name},r.a.createElement("td",null,this.props.task.name),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:this.props.task.done,onChange:function(){return e.props.callback(e.props.task)}})))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:a.props.isChecked,onChange:function(e){return a.props.callback(e.target.checked)}}),r.a.createElement("label",{className:"form-check-label"},"Show ",a.props.description))},a}return Object(p.a)(t,e),t}(n.Component);a(16);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateTaskInputValue=function(e){a.setState({newTaskItem:e.target.value})},a.toggleTask=function(e){return a.setState({tasks:a.state.tasks.map((function(t){return t.name===e.name?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{done:!t.done}):t}))})},a.tableRows=function(e){return a.state.tasks.filter((function(t){return t.done===e})).map((function(e){return r.a.createElement(f,{key:e.name,task:e,callback:a.toggleTask})}))},a.createNewTask=function(e){a.state.tasks.find((function(t){return t.name===e}))||a.setState({tasks:[].concat(Object(s.a)(a.state.tasks),[{name:e,done:!1}])})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(b,{username:a.state.username,tasks:a.state.tasks}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement(d,{callback:a.createNewTask}),r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Done"))),r.a.createElement("tbody",null,a.tableRows(!1))),r.a.createElement("div",{className:"bg-info text-white text-center p-2"},r.a.createElement(k,{description:"Completed Tasks",isChecked:a.state.showCompleted,callback:function(e){return a.setState({showCompleted:e})}})),a.state.showCompleted&&r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Done"))),r.a.createElement("tbody",null,a.tableRows(!0)))))))},a.state={username:"Mauricio",tasks:[],showCompleted:!0},a}return Object(p.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(17);o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4e16af94.chunk.js.map