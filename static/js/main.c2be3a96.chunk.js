(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(14),a(8)),l=a(5),u=a(1),i=a(3),m=a(2),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement("h4",{className:"bg-info text-white text-center p-4"},e.props.username,"'s Todo App (",e.props.tasks.filter((function(e){return!e.done})).length," Tasks to do)")},e}return a}(n.Component),d=a(4),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={newItem:""},e.updateNewTaskValue=function(t){e.setState({newItem:t.target.value})},e.createNewTask=function(){e.props.callback(e.state.newItem),e.setState({newItem:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.newItem,onChange:this.updateNewTaskValue,placeholder:"New Task",autoFocus:!0}),r.a.createElement("button",{className:"btn btn-success btn-block mt-1",onClick:this.createNewTask},"Add"))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{key:this.props.task.name},r.a.createElement("td",null,this.props.task.name),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:this.props.task.done,onChange:function(){return e.props.callback(e.props.task)}})))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.props.isChecked,onChange:function(t){return e.props.callback(t.target.checked)}}),r.a.createElement("label",{className:"form-check-label"},"Show ",e.props.description))},e}return a}(n.Component),f=(a(15),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).updateTaskInputValue=function(e){n.setState({newTaskItem:e.target.value})},n.toggleTask=function(e){return n.setState({tasks:n.state.tasks.map((function(t){return t.name===e.name?Object(l.a)(Object(l.a)({},t),{},{done:!t.done}):t}))})},n.tableRows=function(e){return n.state.tasks.filter((function(t){return t.done===e})).map((function(e){return r.a.createElement(b,{key:e.name,task:e,callback:n.toggleTask})}))},n.createNewTask=function(e){n.state.tasks.find((function(t){return t.name===e}))||n.setState({tasks:[].concat(Object(s.a)(n.state.tasks),[{name:e,done:!1}])})},n.render=function(){return r.a.createElement("div",null,r.a.createElement(p,{username:n.state.username,tasks:n.state.tasks}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement(h,{callback:n.createNewTask}),r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Done"))),r.a.createElement("tbody",null,n.tableRows(!1))),r.a.createElement("div",{className:"bg-info text-white text-center p-2"},r.a.createElement(k,{description:"Completed Tasks",isChecked:n.state.showCompleted,callback:function(e){return n.setState({showCompleted:e})}})),n.state.showCompleted&&r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Done"))),r.a.createElement("tbody",null,n.tableRows(!0)))))))},n.state={username:"Mauricio",tasks:[],showCompleted:!0},n}return a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2be3a96.chunk.js.map