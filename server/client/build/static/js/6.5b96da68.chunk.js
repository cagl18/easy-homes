(this["webpackJsonpeasy-homes"]=this["webpackJsonpeasy-homes"]||[]).push([[6],{167:function(e,t,a){"use strict";var n=a(0);a(1);t.a=function(e){var t=e.children,a=e.title;return Object(n.jsxs)("section",{className:"account__card",children:[Object(n.jsxs)("h4",{className:"heading-quaternary",children:[a,Object(n.jsx)("div",{className:"heading-divider"})]}),Object(n.jsx)("div",{className:"account__card--body",children:t})]})}},172:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(30),r=a(8),i=a(6),c=a(7),l=a(10),o=a(9),d=a(1),u=a(167),h=a(21),j=a(14),b=a(12),p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={user:e.props.auth.user||{name:"",firstname:"",lastname:"",email:""},showSpinner:!1},e.onChangedHandler=function(t){var a=t.target,n=a.name,i=a.value,c=Object(r.a)(Object(r.a)({},e.state.user),{},Object(s.a)({},n,i));e.setState({user:c})},e.onSubmitHandler=function(t){t.preventDefault(),e.props.updateUserProfile(e.state.user)},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t=Object(n.jsxs)("div",{style:{lineHeight:"25px",marginBottom:"8px",marginTop:"-17px"},children:[Object(n.jsx)("p",{className:"u-margin-top-small",style:{color:"red",fontSize:"1.5rem"},children:"This functionality is coming soon!"}),"Default Saved Search Notifications"]}),a=this.state.user?Object(n.jsxs)("form",{className:"form",onSubmit:this.onSubmitHandler,children:[Object(n.jsx)("p",{children:"How often would you like to receive updates on future Saved Searches?"}),Object(n.jsx)("div",{className:"inputGroup",children:Object(n.jsxs)("label",{htmlFor:"currentPassword",children:[Object(n.jsx)("input",{disabled:!0,type:"radio",name:"Immediately",onChange:this.onChangedHandler}),Object(n.jsx)("span",{children:"Immediately"})]})}),Object(n.jsx)("div",{className:"inputGroup",children:Object(n.jsxs)("label",{htmlFor:"currentPassword",children:[Object(n.jsx)("input",{disabled:!0,type:"radio",name:"Daily",onChange:this.onChangedHandler}),Object(n.jsx)("span",{children:"Daily"})]})}),Object(n.jsx)("div",{className:"inputGroup",children:Object(n.jsxs)("label",{htmlFor:"currentPassword",children:[Object(n.jsx)("input",{disabled:!0,type:"radio",name:"never",onChange:this.onChangedHandler}),Object(n.jsx)("span",{children:"Never"})]})}),Object(n.jsx)(h.a,{disabled:!0,className:"default btn-sm",loading:this.state.spinnerOnSubmit&&(null===(e=this.props.auth)||void 0===e?void 0:e.isFetching),children:"save"})]}):"failed to fetch user profile. :-(";return Object(n.jsx)("div",{className:"account__notification",children:Object(n.jsx)(u.a,{title:t,children:a})})}}]),a}(d.Component);t.default=Object(j.b)((function(e){return{auth:e.auth}}),(function(e){return{updateUserProfile:function(t){return e(Object(b.updateUserProfile)(t))}}}))(p)}}]);
//# sourceMappingURL=6.5b96da68.chunk.js.map