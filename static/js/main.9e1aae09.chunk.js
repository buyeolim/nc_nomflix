(this.webpackJsonpnc_nomflix=this.webpackJsonpnc_nomflix||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPoster.ed99f23e.png"},73:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,u,d,p,b,j,h,g,x,m,O,v,f,y,_,w,k,S,T,R,M,U,z,C,N,P,I=n(1),F=n.n(I),A=n(38),D=n.n(A),V=n(12),B=n(13),L=n(15),q=n(14),E=n(19),J=n(5),G=n(10),H=n.n(G),K=n(17),Q=n(3),W=n(2),X=n(16),Y=n(0),Z=W.c.div(r||(r=Object(Q.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),$=W.c.span(a||(a=Object(Q.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),ee=W.c.div(i||(i=Object(Q.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),te=function(e){var t=e.title,n=e.children;return Object(Y.jsxs)(Z,{children:[Object(Y.jsx)($,{children:t}),Object(Y.jsx)(ee,{children:n})]})},ne=W.c.div(c||(c=Object(Q.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 32px;\n  margin-top: 20px;\n  color: rgba(255, 255, 255, 0.2);\n"]))),re=function(){return Object(Y.jsx)(ne,{children:Object(Y.jsx)("span",{role:"img","aria-label":"Loading",children:"LOADING..."})})},ae=W.c.div(o||(o=Object(Q.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),ie=W.c.span(s||(s=Object(Q.a)(["\n  color: ",";\n"])),(function(e){return e.color})),ce=function(e){var t=e.text,n=e.color;return Object(Y.jsx)(ae,{children:Object(Y.jsx)(ie,{color:n,children:t})})},oe=W.c.div(l||(l=Object(Q.a)(["\n  font-size: 12px;\n"]))),se=W.c.div(u||(u=Object(Q.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),le=W.c.span(d||(d=Object(Q.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]))),ue=W.c.div(p||(p=Object(Q.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),se,le),de=W.c.span(b||(b=Object(Q.a)(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 2px;\n"]))),pe=W.c.span(j||(j=Object(Q.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),be=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(Y.jsx)(E.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(Y.jsxs)(oe,{children:[Object(Y.jsxs)(ue,{children:[Object(Y.jsx)(se,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(29).default}),Object(Y.jsxs)(le,{children:[Object(Y.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(Y.jsx)(de,{children:a.length>16?"".concat(a.substring(0,16),"..."):a}),Object(Y.jsx)(pe,{children:c})]})})},je=W.c.div(h||(h=Object(Q.a)(["\n  padding: 0px 10px;\n"]))),he=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Movies | Nomflix"})}),i?Object(Y.jsx)(re,{}):Object(Y.jsxs)(je,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Now Playing",children:t.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Upcoming Movies",children:n.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Popular Movies",children:r.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&Object(Y.jsx)(ce,{color:"#e74c3c",text:a})]})]})},ge=n(44),xe=n.n(ge).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"01ceffb175b403a609f499707b527b51",language:"en-US"}}),me=function(){return xe.get("movie/now_playing")},Oe=function(){return xe.get("movie/upcoming")},ve=function(){return xe.get("movie/popular")},fe=function(e){return xe.get("movie/".concat(e),{params:{append_to_responese:"videos"}})},ye=function(e){return xe.get("search/movie",{params:{query:encodeURIComponent(e)}})},_e=function(){return xe.get("tv/top_rated")},we=function(){return xe.get("tv/popular")},ke=function(){return xe.get("tv/airing_today")},Se=function(e){return xe.get("tv/".concat(e),{params:{append_to_responese:"videos"}})},Te=function(e){return xe.get("search/tv",{params:{query:encodeURIComponent(e)}})},Re=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(H.a.mark((function e(){var t,n,r,a,i,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:return t=e.sent,n=t.data.results,e.next=7,Oe();case 7:return r=e.sent,a=r.data.results,e.next=11,ve();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsx)(he,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(F.a.Component),Me=W.c.div(g||(g=Object(Q.a)(["\n  padding: 0px 10px;\n"]))),Ue=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"TV shows | Nomflix"})}),i?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Me,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Top Rated Shows",children:t.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Popular Shows",children:n.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Airing Today Shows",children:r.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(Y.jsx)(ce,{color:"#e74c3c",text:a})]})]})},ze=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e.componentDidMount=Object(K.a)(H.a.mark((function t(){var n,r,a,i,c,o;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_e();case 3:return n=t.sent,r=n.data.results,t.next=7,we();case 7:return a=t.sent,i=a.data.results,t.next=11,ke();case 11:c=t.sent,o=c.data.results,e.setState({topRated:r,popular:i,airingToday:o}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),e.setState({error:"Can't find TV information."});case 19:return t.prev=19,e.setState({loading:!1}),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])}))),e}return Object(B.a)(n,[{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(Y.jsx)(Ue,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(F.a.Component),Ce=W.c.div(x||(x=Object(Q.a)(["\n  padding: 0px 20px;\n"]))),Ne=W.c.form(m||(m=Object(Q.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Pe=W.c.input(O||(O=Object(Q.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Ie=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm;return Object(Y.jsxs)(Ce,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Search | Nomflix"})}),Object(Y.jsx)(Ne,{onSubmit:c,children:Object(Y.jsx)(Pe,{placeholder:"Search Movies or TV Shows...",value:r,onChange:o})}),i?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Y.Fragment,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Movie Results",children:t.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"TV Show Results",children:n.map((function(e){return Object(Y.jsx)(be,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(Y.jsx)(ce,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(Y.jsx)(ce,{text:"Nothing found",color:"#9b59b6"})]})]})},Fe=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(K.a)(H.a.mark((function t(){var n,r,a,i,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ye(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Te(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(B.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;return Object(Y.jsx)(Ie,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(F.a.Component),Ae=W.c.header(v||(v=Object(Q.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-litem: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 99;\n"]))),De=W.c.ul(f||(f=Object(Q.a)(["\n  display: flex;\n"]))),Ve=W.c.li(y||(y=Object(Q.a)(["\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Be=Object(W.c)(E.b)(_||(_=Object(Q.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Le=Object(J.g)((function(e){var t=e.location.pathname;return Object(Y.jsx)(Ae,{children:Object(Y.jsxs)(De,{children:[Object(Y.jsx)(Ve,{current:"/"===t,children:Object(Y.jsx)(Be,{to:"/",children:"Movies"})}),Object(Y.jsx)(Ve,{current:"/tv"===t,children:Object(Y.jsx)(Be,{to:"/tv",children:"TV"})}),Object(Y.jsx)(Ve,{current:"/search"===t,children:Object(Y.jsx)(Be,{to:"/search",children:"Search"})})]})})})),qe=W.c.div(w||(w=Object(Q.a)(["\n  height: calc(100vh - 55px);\n  width: 100%;\n  padding: 50px;\n  position: relative;\n"]))),Ee=W.c.div(k||(k=Object(Q.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(5px) grayscale(1);\n  opacity: 0.2;\n"])),(function(e){return e.bgImage})),Je=W.c.div(S||(S=Object(Q.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]))),Ge=W.c.div(T||(T=Object(Q.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 5px;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),He=W.c.div(R||(R=Object(Q.a)(["\n  width: 70%;\n  margin-left: 25px;\n"]))),Ke=W.c.span(M||(M=Object(Q.a)(["\n  font-size: 30px;\n"]))),Qe=W.c.div(U||(U=Object(Q.a)(["\n  margin: 12px 0;\n"]))),We=W.c.span(z||(z=Object(Q.a)(["\n  font-size: 15px;\n  opacity: 0.5;\n"]))),Xe=W.c.span(C||(C=Object(Q.a)(["\n  margin: 0 6px;\n  opacity: 0.5;\n"]))),Ye=W.c.p(N||(N=Object(Q.a)(["\n  font-size: 20px;\n  opacity: 0.7;\n  line-height: 1.3;\n  width: 75%;\n"]))),Ze=function(e){var t=e.result;e.error;return e.loading?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Loading | Nomflix"})}),Object(Y.jsx)(re,{})]}):Object(Y.jsxs)(qe,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsxs)("title",{children:[t.title?t.title:t.name," | Nomflix"]})}),Object(Y.jsx)(Ee,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(Y.jsxs)(Je,{children:[Object(Y.jsx)(Ge,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29).default}),Object(Y.jsxs)(He,{children:[Object(Y.jsx)(Ke,{children:t.title?t.title:t.name}),Object(Y.jsxs)(Qe,{children:[Object(Y.jsx)(We,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(Y.jsx)(Xe,{children:"\u2022"}),Object(Y.jsx)(We,{children:t.runtime?"".concat(t.runtime," min"):"EP 1 - ".concat(t.number_of_episodes," (").concat(t.episode_run_time[0]," min)")}),Object(Y.jsx)(Xe,{children:"\u2022"}),Object(Y.jsx)(We,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(Y.jsx)(Ye,{children:t.overview})]})]})]})},$e=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(e){var r;Object(V.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(K.a)(H.a.mark((function e(){var t,n,r,a,i,c,o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=parseInt(n),i=this.state.isMovie,!isNaN(a)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!i){e.next=14;break}return e.next=10,fe(a);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Se(a);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(Y.jsx)(Ze,{result:t,error:n,loading:r})}}]),n}(F.a.Component),et=function(){return Object(Y.jsx)(E.a,{children:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Le,{}),Object(Y.jsxs)(J.d,{children:[Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/",exact:!0,component:Re}),Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/tv",exact:!0,component:ze}),Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/tv/popular",render:function(){return Object(Y.jsx)("h1",{children:"Popular"})}}),Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/search",component:Fe}),Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/movie/:id",component:$e}),Object(Y.jsx)(J.b,{path:"https://buyeolim.github.io/nc_nomflix/tv/:id",component:$e}),Object(Y.jsx)(J.a,{from:"*",to:"/"})]})]})})},tt=n(45),nt=Object(W.a)(P||(P=Object(Q.a)(["\n    ",";\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 55px;\n    }\n"])),tt.a),rt=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(et,{}),Object(Y.jsx)(nt,{})]})}}]),n}(I.Component);D.a.render(Object(Y.jsx)(rt,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.9e1aae09.chunk.js.map