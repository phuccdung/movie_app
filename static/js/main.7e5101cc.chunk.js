(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{39:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(30),r=a.n(i),c=a(9),o=a(2),l=(a(39),a(1));var m=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})},u=a(13),j=a(14),d=a(16),v=a(15),b=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),a}(s.a.Component),p=b,h=a(19),O=a.n(h),x=a(31),g=a(32),_=a.n(g),y=a(6),f=a.n(y);a(62);function N(e){var t=e.id,a=e.year,n=e.title,s=e.summary,i=e.poster,r=e.genres;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)(c.b,{className:"movie__link",to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:i,genres:r}},children:Object(l.jsx)("img",{src:i,alt:n,title:n})}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)(c.b,{className:"movie__link",to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:i,genres:r}},children:Object(l.jsx)("h3",{className:"movie__title",children:n})}),Object(l.jsx)("h5",{className:"movie__year",children:a}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})}N.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var k=N,q=(a(66),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(x.a)(O.a.mark((function t(){var a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:a.map((function(e){return Object(l.jsx)(k,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(s.a.Component)),w=q;a(67);var R=function(){return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(c.b,{className:"navigation__link",to:"/",children:"Home"}),Object(l.jsx)(c.b,{className:"navigation__link",to:{pathname:"/about",state:{fromNavigation:!0}},children:"About"})]})};a(68);var M=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(R,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie/:id",component:p})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("potato"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7e5101cc.chunk.js.map