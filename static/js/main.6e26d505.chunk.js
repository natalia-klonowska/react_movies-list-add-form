(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(4),n=i.n(a),c=(i(11),i(2)),s=i(1),l=(i(12),i(13),i(14),i(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbId)}))})},d=i(5),m=i.n(d);var j=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,r=e.required,o=void 0!==r&&r,d=e.onChange,j=void 0===d?function(){}:d,b=Object(s.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(c.a)(b,1)[0],h=Object(s.useState)(!1),g=Object(c.a)(h,2),O=g[0],p=g[1],v=O&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:u,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:m()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return j(e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},b=function(e){var t=e.onAdd,i=Object(s.useState)(0),a=Object(c.a)(i,2),n=a[0],r=a[1],o=Object(s.useState)(""),d=Object(c.a)(o,2),m=d[0],b=d[1],u=Object(s.useState)(""),h=Object(c.a)(u,2),g=h[0],O=h[1],p=Object(s.useState)(""),v=Object(c.a)(p,2),f=v[0],x=v[1],M=Object(s.useState)(""),N=Object(c.a)(M,2),w=N[0],U=N[1],y=Object(s.useState)(""),I=Object(c.a)(y,2),T=I[0],B=I[1],k=m.length&&f.length&&w.length&&T.length;return Object(l.jsxs)("form",{className:"NewMovie",children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(j,{name:"title",label:"Title",value:m,onChange:function(e){return b(e)},required:!0}),Object(l.jsx)(j,{name:"description",label:"Description",value:g,onChange:function(e){return O(e)}}),Object(l.jsx)(j,{name:"imgUrl",label:"Image URL",value:f,onChange:function(e){return x(e)},required:!0}),Object(l.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:w,onChange:function(e){return U(e)},required:!0}),Object(l.jsx)(j,{name:"imdbId",label:"Imdb ID",value:T,onChange:function(e){return B(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",onClick:function(e){e.preventDefault(),t({title:m,description:g,imgUrl:f,imdbUrl:w,imdbId:T}),b(""),O(""),x(""),U(""),B(""),r((function(e){return e+1}))},disabled:!k,children:"Add"})})})]},n)},u=i(6),h=function(){var e=Object(s.useState)(u),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{onAdd:function(e){a((function(t){return t.concat(e)}))}})})]})};n.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.6e26d505.chunk.js.map