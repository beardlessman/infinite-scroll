(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(77)},57:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(24),r=n.n(i),o=n(10),s=n(7),l=n(26),u=n(27),d=n(11),p=n(28),f=n.n(p).a.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-Type":"application/json"}}),h={getFeed:function(e){var t=e.id?"".concat("posts","?userId=").concat(e.id):"posts";return f.get("".concat(t))}},m=Object(s.c)({feed:function(){var e={list:[],isLoaded:!1,isLoading:!1};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,a=n.type,c=n.payload;switch(a){case"GET_FEED_REQUEST":return Object(d.a)({},t,{isLoading:!0});case"GET_FEED_SUCCESS":return Object(d.a)({},t,{list:t.list.concat(c),isLoading:!1,isLoaded:!0});case"GET_FEED_FAILURE":return Object(d.a)({},t,{isLoading:!1});default:return t}}}()}),v=function(e){var t=e.dispatch;e.getState;return function(e){return function(n){if(!(a=n.promise)||"[object Function]"!=={}.toString.call(a))return e(n);var a,c,i=n.promise();return!(c=i)||"object"!==typeof c&&"function"!==typeof c||"function"!==typeof c.then?e(n):(n.type&&t({type:n.type}),i.then(function(e){return e}).catch(function(e){throw e}))}}},b=function(){var e=[v,l.a,Object(u.createLogger)({collapsed:!0})];return Object(s.e)(m,Object(s.d)(s.a.apply(void 0,e)))},E=n(1),O=n(2),j=n(4),y=n(3),w=n(5),_=(n(57),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"header"},a.createElement("div",{className:"header__inner"},this.props.children))}}]),t}(a.Component)),g=(n(59),n(14)),S=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(j.a)(this,Object(y.a)(t).call(this,e))).scrollHandler=function(){n.setState({isShown:window.pageYOffset>t.MIN_OFFSET_TO_SHOW})},n.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},n.state={isShown:!1},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler)}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isShown!==t.isShown}},{key:"render",value:function(){return a.createElement("button",{title:"\u041d\u0430\u0432\u0435\u0440\u0445",className:g({scrolltop:!0,scrolltop_shown:this.state.isShown}),onClick:this.scrollToTop})}}]),t}(a.Component);S.MIN_OFFSET_TO_SHOW=400;var k=S,C=(n(61),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"layout"},a.createElement("div",{className:"layout__header"},a.createElement(_,null,"Infinite scroll demo")),a.createElement("div",{className:"layout__content"},a.createElement("div",{className:"layout__inner"},this.props.children)),a.createElement(k,null))}}]),t}(a.Component)),N=n(14).bind(n(63)),F=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(j.a)(this,Object(y.a)(t).call(this,e))).relativeChildrenRef=null,n.setRelativeChildrenRef=function(e){return n.relativeChildrenRef=e},n.updateSticky=function(){var e=n.relativeChildrenRef.getBoundingClientRect().top<0;n.state.isActive&&!e?n.setState({isActive:!1}):!n.state.isActive&&e&&n.setState({isActive:!0})},n.state={isActive:!1},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSticky),window.addEventListener("scroll",this.updateSticky),"undefined"!==typeof window&&this.updateSticky()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSticky),window.removeEventListener("scroll",this.updateSticky)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,c=this.state.isActive;return a.createElement("div",{className:N(n,"sticky")},a.createElement("div",{className:N({sticky__container:!0,sticky__container_active:c})},t),a.createElement("div",{ref:this.setRelativeChildrenRef}))}}]),t}(a.PureComponent),L=(n(65),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"panel"},this.props.children)}}]),t}(a.Component)),T=(n(67),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"feed-item"},this.props.data.title)}}]),t}(a.Component)),R=n(14).bind(n(69)),U=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:R(this.props.className,"loader")},a.createElement("div",{className:R("loader__content")}))}}]),t}(a.PureComponent),A=function(e,t){var n=e-.5+Math.random()*(t-e+1);return n=Math.round(n)},D=(n(71),function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).onScroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&n.props.feed.list.length&&n.increaseFeed()},n.increaseFeed=function(){n.props.feed.isLoading||n.props.getFeed(A(1,10))},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.getFeed(1),window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){var e=this.props.feed.list;return a.createElement("div",{className:"feed"},e.map(function(e,t){return a.createElement(T,{key:t,data:e})}),this.props.feed.isLoading&&a.createElement(U,null))}}]),t}(a.Component)),H=Object(o.b)(function(e){return{feed:e.feed}},{getFeed:function(e){return function(t){return t({type:"GET_FEED_REQUEST",promise:function(){return h.getFeed({id:e})}}).then(function(e){return t({type:"GET_FEED_SUCCESS",payload:e.data}),e}).catch(function(e){throw t({type:"GET_FEED_FAILURE",payload:e}),e})}}})(D),I=(n(73),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"page"},a.createElement(F,{className:"page__header"},a.createElement(L,null,"\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u043f\u0430\u043d\u0435\u043b\u044c")),a.createElement("div",{className:"page__main"},a.createElement(F,{className:"page__sidebar"},a.createElement(L,null,"\u0411\u043e\u043a\u043e\u0432\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c")),a.createElement("div",{className:"page__content"},a.createElement(H,null))))}}]),t}(a.Component)),M=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.createElement(C,null,a.createElement(I,null))}}]),t}(a.Component),G=(n(75),b());r.a.render(c.a.createElement(o.a,{store:G},c.a.createElement(M,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.ab5aa1e9.chunk.js.map