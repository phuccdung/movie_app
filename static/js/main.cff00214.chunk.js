(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(3),i=s.n(a),r=s(16),n=s.n(r),c=s(7),o=s.n(c),m=s(17),d=s(18),l=s(19),u=s(22),j=s(21),v=s(20),p=s.n(v),b=s(2),h=s.n(b),g=(s(48),s(0));function O(e){var t=e.year,s=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:i,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h3",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(g.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})}O.prototype={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var y=O,_=(s(50),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:s.map((function(e){return Object(g.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component)),x=_;n.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("potato"))}},[[51,1,2]]]);
//# sourceMappingURL=main.cff00214.chunk.js.map