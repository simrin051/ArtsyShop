(this["webpackJsonpartsy-shop"]=this["webpackJsonpartsy-shop"]||[]).push([[0],{179:function(e,t,c){},180:function(e,t,c){},181:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},207:function(e,t,c){},211:function(e,t){},213:function(e,t){},224:function(e,t){},226:function(e,t){},254:function(e,t){},255:function(e,t){},260:function(e,t){},262:function(e,t){},269:function(e,t){},288:function(e,t){},318:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(162),i=c.n(r),n=c(18),o=(c(179),c(180),c(6)),l=(c(181),c(0)),d=function(){return Object(l.jsx)(n.b,{to:"/home",children:Object(l.jsxs)("h3",{className:"left-side",children:[Object(l.jsx)("i",{className:"fa-brands fa-shopify"}),"Artsy Shop"]})})},j=c(8),b=c(19),u=c(4),h=c(41),m=c.n(h),O=c(44),p=c(22),x=c.n(p),f=function(e,t,c){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=localStorage.getItem("token");i&&(m.a.defaults.headers.common.authorization=i);var n=Object(a.useState)([]),o=Object(j.a)(n,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){var a=function(){var a=Object(O.a)(x.a.mark((function a(){var r;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m()({url:e,method:t,data:s});case 3:r=a.sent,console.log({res:r}),200!==r.status&&201!==r.status||d(r.data[c]),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.response.data);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();r&&a()}),[e]),l},g=Object(a.createContext)(),v=function(e){var t=e.children,c=null!==localStorage.getItem("token"),s=Object(a.useState)(c),r=Object(j.a)(s,2),i=r[0],n=r[1];return Object(l.jsx)(g.Provider,{value:{loginState:i,setLoginState:n},children:t})},N=function(){var e=Object(a.useContext)(g);if(!e)throw new Error("use useUserContext must be used inside a context provider");return e},y=Object(a.createContext)(),w=function(e){var t=e.children,c=Object(a.useReducer)((function(e,t){var c=t.type,a=t.payload;switch(c){case"ADD_PRODUCT_LIST":return Object(u.a)(Object(u.a)({},e),{},{productList:a});case"ADD_WISHLIST":return Object(u.a)(Object(u.a)({},e),{},{wishList:Object(b.a)(a)});case"ADD_CART":return Object(u.a)(Object(u.a)({},e),{},{cart:Object(b.a)(a)});case"ADD_TO_CART":case"REMOVE_FROM_CART":return Object(u.a)({},e);default:return}}),{productList:[],wishList:[],cart:[]}),s=Object(j.a)(c,2),r=s[0],i=s[1],n=N().loginState,o=f("api/products","GET","products"),d=f("/api/user/wishlist","GET","wishlist",void 0,n),h=f("/api/user/cart","GET","cart",void 0,n);return Object(a.useEffect)((function(){0!==o.length&&i({type:"ADD_PRODUCT_LIST",payload:o})}),[o]),Object(a.useEffect)((function(){i({type:"ADD_WISHLIST",payload:d})}),[d]),Object(a.useEffect)((function(){i({type:"ADD_CART",payload:h})}),[h]),Object(l.jsx)(y.Provider,{value:{productState:r,productDispatch:i},children:t})},_=function(){var e=Object(a.useContext)(y);if(!e)throw new Error("useProductContext must be used inside a context provider");return e},S=Object(a.createContext)(),k=function(e){var t,c=e.children,s=Object(a.useReducer)((function(e,t){var c=t.type,a=t.payload;switch(c){case"SEARCH":return Object(u.a)({},e);case"OUT_OF_STOCK":return Object(u.a)(Object(u.a)({},e),{},{showOutOfStock:!e.showOutOfStock});case"FAST_DELIVERY":return Object(u.a)(Object(u.a)({},e),{},{showFastDelivery:!e.showFastDelivery});case"ADD_CATEGORY":return Object(u.a)(Object(u.a)({},e),{},{showCategories:[].concat(Object(b.a)(e.showCategories),[a])});case"REMOVE_CATEGORY":return Object(u.a)(Object(u.a)({},e),{},{showCategories:e.showCategories.filter((function(e){return e!==a}))});case"RATING":return Object(u.a)(Object(u.a)({},e),{},{ratingAbove:a});case"SORT_BY":return Object(u.a)(Object(u.a)({},e),{},{sortBy:a});default:return}}),null!==(t=JSON.parse(localStorage.getItem("filterState")))&&void 0!==t?t:{sortBy:null,showCategories:[],showFastDelivery:!1,showOutOfStock:!0,ratingAbove:1,priceRange:1e6}),r=Object(j.a)(s,2),i=r[0],n=r[1];return console.log(i),Object(a.useEffect)((function(){localStorage.setItem("filterState",JSON.stringify(i))}),[i]),Object(l.jsx)(S.Provider,{value:{filterState:i,filterStateDispatch:n},children:c})},I=function(){var e=Object(a.useContext)(S);if(!e)throw new Error("use useProductFilter must be used inside a context provider");return e},A=function(){return Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("div",{className:"avatar-text avatar-s",children:"BT"}),Object(l.jsxs)("div",{className:"user-dropdown flex-col",children:[Object(l.jsxs)("a",{className:"flex-align-center",href:"/pages/user-profile/user-profile.html",children:[Object(l.jsx)("span",{children:"My Account"}),Object(l.jsx)("i",{className:"fa-solid fa-angle-right"})]}),Object(l.jsxs)("div",{className:"flex-align-center",children:[Object(l.jsx)("span",{children:"My offers"}),Object(l.jsx)("i",{className:"fa-solid fa-angle-right"})]}),Object(l.jsxs)("div",{className:"flex-align-center",children:[Object(l.jsx)("span",{children:"Logout"}),Object(l.jsx)("i",{className:"fa-solid fa-angle-right"})]})]})]})},T=function(e){e.onClick;var t=N().loginState,c=Object(o.g)(),a=_(),s=a.productState,r=(a.productDispatch,s.wishList),i=s.cart;return Object(l.jsxs)("div",{className:"right-side",children:[Object(l.jsx)(n.c,{to:"/mockman",children:"Mockman"}),t?Object(l.jsx)("div",{onClick:function(){return c("/sign-in")},className:"user",children:Object(l.jsx)("i",{className:"fa-regular fa-user fa-xl"})}):Object(l.jsx)(A,{}),Object(l.jsxs)("div",{className:"wishlist",onClick:function(){return c(t?"/wishlist":"/sign-in")},children:[Object(l.jsx)("i",{className:"fa-regular fa-heart fa-xl"}),Object(l.jsx)("span",{className:"items",children:r.length})]}),Object(l.jsxs)("div",{className:"cart",onClick:function(){return c(t?"/cart":"/sign-in")},children:[Object(l.jsx)("i",{className:"fa-solid fa-bag-shopping fa-xl"}),Object(l.jsx)("span",{className:"items",children:i.length})]})]})},C=function(){return Object(l.jsxs)("div",{className:"artsy-input icon-input",children:[Object(l.jsx)("i",{className:"fas fa-search"}),Object(l.jsx)("input",{placeholder:"Search...",type:"text"})]})},D=function(e){return Object(l.jsxs)("header",{className:"arstyShop-header header",children:[Object(l.jsx)(d,{}),Object(l.jsx)(C,{}),Object(l.jsx)(T,{})]})},B=(c(202),function(e){e.link;var t=e.category,c=e.img_url;return Object(l.jsx)(n.b,{to:"/products",children:Object(l.jsxs)("div",{className:"categories",children:[Object(l.jsx)("img",{src:c,alt:t}),Object(l.jsx)("button",{className:"btn category-name",children:t})]})})}),E=function(){var e=f("/api/categories","GET","categories");return Object(l.jsxs)("section",{className:"category-section",children:[Object(l.jsx)("h1",{children:"Categories"}),Object(l.jsx)("div",{className:"grid-4 category-grid",children:e.map((function(e){return Object(l.jsx)(B,{link:"/pages/product/product.html",category:e.categoryName,img_url:"https://cdn.singulart.com/artworks/v2/cropped/3813/main/carousel/1202203_f053297adb8623bd3c615562c7521b67.jpeg"},e.categoryName)}))})]})},R=c.p+"static/media/collection_item_img.412ccea8.jpeg",L=function(e){var t=e.bg_img,c=e.children;return Object(l.jsxs)("a",{href:"",className:"collection-items",children:[Object(l.jsx)("div",{className:"collection-image",children:Object(l.jsx)("img",{alt:"collection image ",className:"collection-image",src:t})}),c]})},G=function(e){var t=e.tag,c=e.heading,a=e.subtitle,s=e.img;return Object(l.jsxs)("div",{className:"collection-content",children:[Object(l.jsxs)("div",{className:"collection-text",children:[Object(l.jsx)("span",{className:"btn collection-tag",children:t}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:c}),Object(l.jsx)("p",{children:a})]})]}),Object(l.jsx)("div",{className:"collection-artworks flex-col",children:[1,2,3].map((function(e){return Object(l.jsx)("div",{className:"collection-artwork-item",children:Object(l.jsx)("img",{src:s,alt:""})},e)}))})]})},J=function(e){var t=e.collection_bg_url2,c=e.collection_bg_url;return Object(l.jsxs)("section",{className:"collection-section",children:[Object(l.jsx)("h1",{children:"Get inspired by our Collections"}),Object(l.jsxs)("div",{className:"collection-cont grid-2",children:[Object(l.jsx)(L,{bg_img:c,children:Object(l.jsx)(G,{tag:"Colors",heading:"Color of the year'22 - Very Peri",subtitle:"19 artworks",img:R})}),Object(l.jsx)(L,{bg_img:t,children:Object(l.jsx)(G,{tag:"Colors",heading:"Art and Antiquity",subtitle:"5 artwork",img:R})})]})]})},M=function(e){var t=e.children,c=e.className,a=e.onClick;return Object(l.jsx)("button",{className:"btn btn-primary ".concat(c),onClick:a,children:t})},Y=function(){var e=[{img:"https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/elements/home/home_slider4.49d888a3.jpg",text:"Discover the creative universe of our artists.",button:"Discover"},{img:"https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",text:"Discover the creative universe of our artists.",button:"Discover"}],t=Object(a.useState)(0),c=Object(j.a)(t,2),s=c[0],r=c[1];Object(a.useEffect)((function(){var e=setInterval((function(){return i()}),5e3);return function(){return clearInterval(e)}}),[]);var i=function(){return r((function(t){return(t+1)%e.length}))};return Object(l.jsxs)("section",{className:"hero-section grid-overlay",children:[Object(l.jsx)("div",{className:"hero-img",children:Object(l.jsx)("img",{alt:"hero",src:e[s].img})}),Object(l.jsx)("div",{className:"hero-overlay flex-col",children:Object(l.jsxs)("div",{className:"hero-content",children:[Object(l.jsx)("h1",{children:e[s].text}),Object(l.jsx)(M,{className:"hero-sec-button",children:e[s].button})]})})]})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(a.useEffect)((function(){document.title=" Artsy Shop - ".concat(e)}))},H=function(){F("Homepage");return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)(Y,{}),Object(l.jsx)(E,{}),Object(l.jsx)(J,{collection_bg_url2:"https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzMyODdfY292ZXJfY2UwNjRmNjI2ZGE0NjI0MzI1MTA5YjRiMDVmZTgyNmYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDY1LCJoZWlnaHQiOjMxNSwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=ce6e4956bbf7bd80c4bf6471ec041536f8543a032bd9c053fcc96ecc80c63b1c",collection_bg_url:"https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzYwOTFfY292ZXJfNTE1OTFlNjE1MTczMGQ3NGQxNzFlN2ZhOTdjMjU3YzYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjIwLCJoZWlnaHQiOjQyMCwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4a01e589d67a157e5a8512fb3743949df7d5612e96b02bd3b13ac924c1f72c9a"})]})};var P=function(e){var t=e.item,c=t.title,a=t.artist,s=t.img,r=t.item_original_price,i=t.price,n=t.rating,o=_().productState;o.wishList,o.cart;return Object(l.jsx)("div",{className:"card w-30 text-o-media",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"card-img",src:s,alt:""}),Object(l.jsx)("button",{className:"icon favourite-icon",children:Object(l.jsx)("i",{className:"fa-regular".concat(" fa-heart fa-2x")})}),Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("h1",{children:c}),Object(l.jsxs)("h2",{children:["by ",a]}),Object(l.jsx)(V,{rating:n}),Object(l.jsxs)("div",{className:"price-sec",children:[Object(l.jsxs)("h3",{children:["$",i]}),Object(l.jsxs)("span",{className:"strike-price",children:["$",r]})]})]})]})})},Z=function(e){var t=e.item,c=e.children,a=t.title,s=t.artist,r=t.img,i=t.item_original_price,n=t.price,o=t.rating,d=t.desc;return Object(l.jsxs)("div",{className:"card w-30 basic",children:[Object(l.jsx)("button",{className:"icon favourite-icon",children:Object(l.jsx)("i",{className:"fa-regular fa-heart fa-2x"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"card-img",src:r,alt:""}),Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("h1",{children:a}),Object(l.jsxs)("h2",{children:["by ",s]}),Object(l.jsx)("div",{className:"card-body",children:d}),Object(l.jsx)(V,{rating:o}),Object(l.jsxs)("div",{className:"price-sec",children:[Object(l.jsxs)("h3",{children:["$",n]}),Object(l.jsxs)("span",{className:"strike-price",children:["$",i]})]})]})]}),Object(l.jsx)("div",{className:"card-actions",children:c})]})},W=function(){return Object(l.jsxs)("div",{className:"card w-40 hori",children:[Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"card-img",src:"https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2",alt:""}),Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("h1",{children:"La Porta Rossa Sulla Salita Art Print"}),Object(l.jsx)("h2",{children:"by Guido Borelli"}),Object(l.jsx)("div",{className:"card-body",children:"Visit ten places on our planet that are undergoing the biggest changes today."}),Object(l.jsxs)("div",{className:"price-sec",children:[Object(l.jsx)("h3",{children:"$18"}),Object(l.jsx)("span",{className:"strike-price",children:"$22"})]})]})]}),Object(l.jsxs)("div",{className:"card-actions",children:[Object(l.jsxs)("button",{className:"btn btn-primary",children:[Object(l.jsx)("i",{className:"fa-solid fa-cart-shopping"}),"remove from cart"]}),Object(l.jsx)("button",{className:"btn outline-btn-secondary",children:"move to wishlist"})]})]})},V=function(e){var t=e.rating;return Object(l.jsx)("div",{className:"artsy-rating-sec",children:Array(t).fill().map((function(e,t){return Object(l.jsx)("i",{className:"fa-solid fa-palette filled"},t)}))})},X=(c(203),function(){var e=I(),t=e.filterState,c=e.filterStateDispatch,a=t.showCategories,s=t.showOutOfStock,r=t.showFastDelivery,i=t.sortBy,n=t.ratingAbove,o=f("/api/categories","GET","categories");return Object(l.jsxs)("aside",{className:"product_page-aside",children:[Object(l.jsxs)("div",{className:"flex-col",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:s,onChange:function(){c({type:"OUT_OF_STOCK"})}})," ",Object(l.jsx)("span",{className:"body-l",children:"Include Out Of Stock"})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:r,onChange:function(){c({type:"FAST_DELIVERY"})}}),Object(l.jsx)("span",{className:"body-l",children:"Fast Delivery"})]})]}),Object(l.jsx)("h3",{children:"Category"}),Object(l.jsx)("div",{className:"flex-col",children:null===o||void 0===o?void 0:o.map((function(e){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:a.some((function(t){return t===e.categoryName})),onChange:function(t){return t.target.checked?c({type:"ADD_CATEGORY",payload:e.categoryName}):c({type:"REMOVE_CATEGORY",payload:e.categoryName})}}),Object(l.jsx)("span",{className:"body-l",children:e.categoryName})]},e.categoryName)}))}),Object(l.jsx)("div",{className:"flex-col"}),Object(l.jsx)("h3",{children:"Sort By"}),Object(l.jsxs)("div",{className:"flex-col",children:[Object(l.jsx)("p",{className:"body-l",children:"Price"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",checked:"HIGH_TO_LOW"===i,onChange:function(){return c({type:"SORT_BY",payload:"HIGH_TO_LOW"})},name:"sort_by_price"}),"High To Low"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",checked:"LOW_TO_HIGH"===i,onChange:function(){return c({type:"SORT_BY",payload:"LOW_TO_HIGH"})},name:"sort_by_price"}),"Low To High"]})]}),Object(l.jsxs)("div",{className:"flex-col",children:[Object(l.jsx)("p",{className:"body-l",children:"Rating"}),Array(4).fill().map((function(e,t){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",checked:n===4-t,onChange:function(){return c({type:"RATING",payload:4-t})},name:"rating_sector"}),"Above ",4-t," Star"]},4-t)}))]})]})}),z=function(e,t){var c=t.sortBy;return null===c?e:e.sort((function(e,t){return"HIGH_TO_LOW"===c?t.price-e.price:e.price-t.price}))},U=function(e,t){var c=t.showCategories;return 0===c.length?e:e.filter((function(e){return c.some((function(t){return t===e.categoryName}))}))},q=function(e,t){return t.showOutOfStock?e:e.filter((function(e){return e.inStock}))},Q=function(e,t){return t.showFastDelivery?e.filter((function(e){return e.fastDelivery})):e},$=function(e,t){var c=t.ratingAbove;return 1===c?e:e.filter((function(e){return e.rating>=c}))},K=(c(204),function(){var e=_().productState.productList,t=I(),c=t.filterState,a=t.filterStateDispatch,s=c.priceRange,r=function(e,t,c){return e.forEach((function(e){return t=e(t,c)})),t}([z,U,q,Q,$],Object(b.a)(e),c);return console.log(e,r),0===e.length?Object(l.jsx)("div",{children:"Loading..."}):Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"page-header-section",children:[Object(l.jsx)("div",{className:"section-bg",children:Object(l.jsx)("img",{src:"https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",alt:""})}),Object(l.jsx)("div",{className:"section-content",children:Object(l.jsx)("h1",{children:"Nature Painting"})})]}),Object(l.jsxs)("section",{className:"menu-sec",children:[Object(l.jsxs)("div",{className:"main-drop category-dropdown",children:[Object(l.jsx)("h4",{children:"Painting Category"}),Object(l.jsxs)("button",{className:"btn dropdown-box",children:["Nature",Object(l.jsx)("i",{className:"fa-solid fa-angle-down"})]}),Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("div",{children:"Street life"}),Object(l.jsx)("div",{children:"Nature"}),Object(l.jsx)("div",{children:"Landscape"}),Object(l.jsx)("div",{children:"Abstraction"})]})]}),Object(l.jsxs)("div",{className:"price-sec",children:[Object(l.jsx)("h3",{children:"Price"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"range",max:"1000",min:"0",step:"100",value:s,onChange:function(e){return a({type:"PriceRange",payload:Number(e.target.value)})}}),Object(l.jsx)("span",{children:s})]})]}),Object(l.jsxs)("div",{className:"dropdown-container sortBy-con",children:[Object(l.jsxs)("button",{className:"btn dropdown-btn",children:["Sort By",Object(l.jsx)("i",{className:"fa-solid fa-angle-down"})]}),Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsx)("div",{className:"body-md",children:Object(l.jsx)("b",{children:"Relevance"})}),Object(l.jsx)("div",{className:"body-md",children:Object(l.jsx)("b",{children:"Popularity"})})]})]})]}),Object(l.jsxs)("div",{className:"main-sec",children:[Object(l.jsx)(X,{}),Object(l.jsx)("section",{className:"products-sec",children:Object(l.jsx)("div",{className:"grid-3 products-grid",children:r.map((function(e){return Object(l.jsx)(P,{item:e},e._id)}))})})]})]})}),ee=(c(205),function(){var e=_(),t=e.productState,c=(e.productDispatch,t.wishList);t.cart;return Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"page-header-section",children:[Object(l.jsx)("div",{className:"section-bg",children:Object(l.jsx)("img",{src:"https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banner_wishlist_no_connect.cbbca931.jpg",alt:""})}),Object(l.jsxs)("div",{className:"section-content flex-col",children:[Object(l.jsx)("i",{className:"fas fa-heart fa-4x"}),Object(l.jsx)("h1",{children:"My Favourites"})]})]}),Object(l.jsx)("section",{className:"wishlist-sec",children:c.map((function(e){return Object(l.jsx)(Z,{item:e,children:Object(l.jsxs)(M,{children:[Object(l.jsx)("i",{className:"fa-solid fa-cart-shopping"}),Object(l.jsx)("span",{children:" add to cart"})]})})}))})]})}),te=(c(206),function(){var e=_().productState;return Object(l.jsxs)("section",{className:"cart-price-sec",children:[Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:"Price Details"})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"calc-part",children:[Object(l.jsxs)("span",{children:["Price (",e.cart.length," Items)"]}),Object(l.jsx)("span",{children:"\u20b9853,200"})," ",Object(l.jsx)("span",{children:"Discount"}),Object(l.jsx)("span",{children:"-\u20b985,000"})," ",Object(l.jsx)("span",{children:"Shipping Charges"}),Object(l.jsx)("span",{children:"\u20b950,000"})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"total-part",children:[Object(l.jsx)("span",{children:Object(l.jsx)("strong",{children:"Total"})}),Object(l.jsx)("span",{children:Object(l.jsx)("strong",{children:"\u20b9817,000"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{className:"checkbox-text",children:"This artwork is a gift. "})]}),Object(l.jsx)("a",{href:"/pages/checkout/checkout.html",children:Object(l.jsxs)("button",{className:"btn btn-primary",children:[Object(l.jsx)("span",{children:"place order"}),Object(l.jsx)("i",{className:"fa-solid fa-arrow-right-long"})]})})]})}),ce=function(){F("Homepage");var e=_(),t=e.productState,c=(e.productDispatch,t.wishList,t.cart);return Object(l.jsxs)("main",{className:"main cart-page",children:[Object(l.jsxs)("section",{className:"cart-sec",children:[Object(l.jsxs)("p",{className:"body-l",children:["My Cart(",c.length,")"]}),c.map((function(e){return Object(l.jsx)(W,{item:e},e._id)}))]}),Object(l.jsx)(te,{})]})},ae=(c(207),function(){var e=N(),t=(e.loginState,e.setLoginState),c=f("/api/auth/login","POST","encodedToken",{email:"adarshbalak@gmail.com",password:"adarshBalaki123"});return Object(a.useEffect)((function(){localStorage.setItem("token",c),t(!0)}),[c]),Object(l.jsx)("main",{className:"main flex-col",children:Object(l.jsxs)("div",{className:"flex-col signup-sec",children:[Object(l.jsx)("i",{className:"primary fa-regular fa-user fa-5x"}),Object(l.jsx)("p",{className:"body-l",children:"Login to my user account."}),Object(l.jsxs)("div",{className:"artsy-input",children:[Object(l.jsx)("input",{type:"text"}),Object(l.jsx)("span",{className:"input-label",children:"Email"})]}),Object(l.jsxs)("div",{className:"artsy-input passwrd-input",children:[Object(l.jsx)("input",{type:"password"}),Object(l.jsx)("i",{className:"fas fa-eye-slash"}),Object(l.jsx)("span",{className:"input-label",children:"Password"})]}),Object(l.jsxs)("label",{className:"flex-align-center",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{className:"checkbox-text",children:" Keep me logged in. "})]}),Object(l.jsxs)("button",{className:"btn btn-primary",children:[Object(l.jsx)("span",{children:"validate"}),Object(l.jsx)("i",{className:"fa-solid fa-arrow-right-long"})]}),Object(l.jsx)("a",{href:"",className:"link-text-primary",children:"Forgot your password?"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"body-md",children:"Still don't have an account ?"}),Object(l.jsx)("div",{className:"link-text-primary",children:"SIGN UP"})]})]})})}),se=function(){var e=Object(a.useState)({firstName:"Adarsh",lastName:"Balika",email:"adarshbalika@neog.camp",password:"adarshBalika"}),t=Object(j.a)(e,2),c=(t[0],t[1],Object(a.useState)(!1)),s=Object(j.a)(c,2),r=s[0],i=s[1],n=Object(a.useState)({firstName:"",lastName:"",email:"",password:""}),o=Object(j.a)(n,2),d=o[0],b=o[1],h=Object(a.useState)(!1),m=Object(j.a)(h,2),O=m[0],p=m[1];return console.log(r),Object(l.jsx)("main",{className:"main flex-col",children:Object(l.jsxs)("div",{className:"flex-col signup-sec",children:[Object(l.jsx)("i",{className:"primary fa-regular fa-user fa-5x"}),Object(l.jsx)("p",{className:"body-l",children:"Create my account on Artsy Shop!"}),Object(l.jsxs)("div",{className:"artsy-input",children:[Object(l.jsx)("input",{type:"text",value:d.firstName,onChange:function(e){return b(Object(u.a)(Object(u.a)({},d),{},{firstName:e.target.value}))}}),Object(l.jsx)("span",{className:"input-label",children:"First Name"})]}),Object(l.jsxs)("div",{className:"artsy-input",children:[Object(l.jsx)("input",{type:"text",value:d.lastName,onChange:function(e){return b(Object(u.a)(Object(u.a)({},d),{},{lastName:e.target.value}))}}),Object(l.jsx)("span",{className:"input-label",children:"Last Name"})]}),Object(l.jsxs)("div",{className:"artsy-input",children:[Object(l.jsx)("input",{type:"text",value:d.email,onChange:function(e){return b(Object(u.a)(Object(u.a)({},d),{},{email:e.target.value}))}}),Object(l.jsx)("span",{className:"input-label",children:"Email"})]}),Object(l.jsxs)("div",{className:"artsy-input passwrd-input",children:[Object(l.jsx)("input",{type:r?"text":"password",placeholder:"password",value:d.password,onChange:function(e){return b(Object(u.a)(Object(u.a)({},d),{},{password:e.target.value}))}}),Object(l.jsx)("i",{onClick:function(){return i((function(e){return!e}))},className:"fas ".concat(r?"fa-eye":"fa-eye-slash")}),Object(l.jsx)("span",{className:"input-label",children:"Password"})]}),Object(l.jsxs)("label",{className:"flex-align-center",children:[Object(l.jsx)("input",{type:"checkbox",checked:O,onChange:function(){return p((function(e){return!e}))}}),Object(l.jsxs)("span",{className:"checkbox-text",children:["By registering, I accept the",Object(l.jsx)("a",{className:"primary",href:"#",children:"General terms and conditions."})]})]}),Object(l.jsx)("button",{className:"btn btn-primary ".concat(function(){return O&&""!==d.firstName&&""!==d.lastName&&!1}&&"diabled-btn"),children:"create an account"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"body-md",children:"Already have account ?"}),Object(l.jsx)("div",{className:"link-text-primary ",children:"SIGN IN"})]})]})})},re=function(){return Object(l.jsx)("main",{className:"main",children:Object(l.jsx)(W,{})})},ie=c(163);var ne=function(){return Object(l.jsx)("div",{className:"MockAPI",children:Object(l.jsx)(ie.a,{colorScheme:"light"})})},oe=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(D,{}),Object(l.jsx)(o.a,{})]})};var le=function(){return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)(o.d,{children:[Object(l.jsxs)(o.b,{path:"/",element:Object(l.jsx)(oe,{}),children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(H,{})}),Object(l.jsx)(o.b,{path:"/home",element:Object(l.jsx)(H,{})}),Object(l.jsx)(o.b,{path:"/products",element:Object(l.jsx)(k,{children:Object(l.jsx)(K,{})})}),Object(l.jsx)(o.b,{path:"/product-details",element:Object(l.jsx)(re,{})}),Object(l.jsx)(o.b,{path:"/wishlist",element:Object(l.jsx)(ee,{})}),Object(l.jsx)(o.b,{path:"/cart",element:Object(l.jsx)(ce,{})}),Object(l.jsx)(o.b,{path:"/mockman",element:Object(l.jsx)(ne,{})})]}),Object(l.jsx)(o.b,{path:"/sign-up",element:Object(l.jsx)(se,{})}),Object(l.jsx)(o.b,{path:"/sign-in",element:Object(l.jsx)(ae,{})})]})})},de=c(3),je=c(174),be=c(319),ue=c(164),he=c.n(ue),me=c(99),Oe=function(e){var t=e.requestHeaders.authorization,c=me.verify(t," bhavika1999");if(c){var a=this.db.users.findBy({email:c.email});if(a)return a._id}return new de.b(401,{},{errors:["The token is invalid. Unauthorized access error."]})},pe=function(){return he()().format("YYYY-MM-DDTHH:mm:ssZ")},xe=c(28),fe=c.n(xe),ge=["email","password"],ve=c(99),Ne=function(e,t){var c=JSON.parse(t.requestBody),a=c.email,s=c.password,r=Object(je.a)(c,ge);try{if(e.users.findBy({email:a}))return new de.b(422,{},{errors:["Unprocessable Entity. Email Already Exists."]});var i=Object(be.a)(),n=fe.a.hashSync(s,5),o=Object(u.a)(Object(u.a)({_id:i,email:a,password:n,createdAt:pe(),updatedAt:pe()},r),{},{cart:[],wishlist:[]}),l=e.users.create(o),d=ve.sign({_id:i,email:a}," bhavika1999");return new de.b(201,{},{createdUser:l,encodedToken:d})}catch(j){return new de.b(500,{},{error:j})}},ye=function(e,t){var c=JSON.parse(t.requestBody),a=c.email,s=c.password;try{var r=e.users.findBy({email:a});if(!r)return new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});if(fe.a.compareSync(s,r.password)){var i=ve.sign({_id:r._id,email:a}," bhavika1999");return r.password=void 0,new de.b(200,{},{foundUser:r,encodedToken:i})}new de.b(401,{},{errors:["The credentials you entered are invalid. Unauthorized access error."]})}catch(n){return new de.b(500,{},{error:n})}},we=function(e,t){var c=Oe.call(this,t);c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).cart;return new de.b(200,{},{cart:a})},_e=function(e,t){var c=Oe.call(this,t);try{c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).cart,s=JSON.parse(t.requestBody).product;return a.push(Object(u.a)(Object(u.a)({},s),{},{createdAt:pe(),updatedAt:pe(),qty:1})),this.db.users.update({_id:c},{cart:a}),new de.b(201,{},{cart:a})}catch(r){return new de.b(500,{},{error:r})}},Se=function(e,t){var c=Oe.call(this,t);try{c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).cart,s=t.params.productId;return a=a.filter((function(e){return e._id!==s})),this.db.users.update({_id:c},{cart:a}),new de.b(200,{},{cart:a})}catch(r){return new de.b(500,{},{error:r})}},ke=function(e,t){var c=t.params.productId,a=Oe.call(this,t);try{a||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var s=e.users.findBy({_id:a}).cart,r=JSON.parse(t.requestBody).action;return"increment"===r.type?s.forEach((function(e){e._id===c&&(e.qty+=1,e.updatedAt=pe())})):"decrement"===r.type&&s.forEach((function(e){e._id===c&&(e.qty-=1,e.updatedAt=pe())})),this.db.users.update({_id:a},{cart:s}),new de.b(200,{},{cart:s})}catch(i){return new de.b(500,{},{error:i})}},Ie=function(){try{return new de.b(200,{},{categories:this.db.categories})}catch(e){return new de.b(500,{},{error:e})}},Ae=function(e,t){var c=t.params.categoryId;try{var a=e.categories.findBy({_id:c});return new de.b(200,{},{category:a})}catch(s){new de.b(500,{},{error:s})}},Te=function(){return new de.b(200,{},{products:this.db.products})},Ce=function(e,t){var c=t.params.productId;try{var a=e.products.findBy({_id:c});return new de.b(200,{},{product:a})}catch(s){return new de.b(500,{},{error:s})}},De=function(e,t){var c=Oe.call(this,t);c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).wishlist;return new de.b(200,{},{wishlist:a})},Be=function(e,t){var c=Oe.call(this,t);try{c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).wishlist,s=JSON.parse(t.requestBody).product;return a.push(Object(u.a)(Object(u.a)({},s),{},{createdAt:pe(),updatedAt:pe()})),this.db.users.update({_id:c},{wishlist:a}),new de.b(201,{},{wishlist:a})}catch(r){return new de.b(500,{},{error:r})}},Ee=function(e,t){var c=Oe.call(this,t);try{c||new de.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var a=e.users.findBy({_id:c}).wishlist,s=t.params.productId;return a=a.filter((function(e){return e._id!==s})),this.db.users.update({_id:c},{wishlist:a}),new de.b(200,{},{wishlist:a})}catch(r){return new de.b(500,{},{error:r})}},Re=[{_id:Object(be.a)(),categoryName:"Nature",description:"literature in the form of prose, especially novels, that describes imaginary events and people"},{_id:Object(be.a)(),categoryName:"Landscape",description:"Non-fiction is writing that gives information or describes real events, rather than telling a story."},{_id:Object(be.a)(),categoryName:"Digital Art",description:"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."},{_id:Object(be.a)(),categoryName:"Abstraction",description:"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."}],Le=[{_id:Object(be.a)(),title:"Dot Punk",artist:"Peter Notrott",desc:"Oil on canvas 60x60cm",img:"https://cdn.singulart.com/artworks/v2/cropped/6305/main/fhd/1053013_b1fc42ad416a6c5eaeea01a726e0d41b.jpeg",price:"888000",rating:3,categoryName:"Digital Art",inStock:!0,fastDelivery:!0},{_id:Object(be.a)(),title:"Sail Boat Marina / Evening Mood XL 1",artist:"Peter Notrott",desc:"Acrylic on canvas 105x155cm",img:"https://cdn.singulart.com/artworks/v2/cropped/2493/main/carousel/1557008_9a7b68b877d642af26cfcca5026dd8a6.jpeg",price:"265500",rating:4,categoryName:"Nature",inStock:!0,fastDelivery:!1},{_id:Object(be.a)(),title:"After the winter rain",artist:"Trong Thuong Tran",desc:"Oil on canvas 120x180cm",img:"https://cdn.singulart.com/artworks/v2/cropped/26567/main/fhd/1534622_d831b72484f36574ed27f16a4c4fe368.jpeg",price:"625000",rating:5,categoryName:"Landscape",inStock:!0,fastDelivery:!0},{_id:Object(be.a)(),title:"Old Village",artist:"M. Singh",desc:"Acrylic on Canvas, 58.4x55.9cm",img:"https://cdn.singulart.com/artworks/v2/cropped/5855/main/fhd/536679_0be0c153cb7128d992de966f7a8d35c8.jpeg",price:"40000",rating:2,categoryName:"Abstraction",inStock:!0,fastDelivery:!0},{_id:Object(be.a)(),title:"Pretty in Pink",artist:"Inge Thogersen",desc:"Acrylic Pastel on Canvas, 100x100cm",img:"https://cdn.singulart.com/artworks/v2/cropped/4727/main/fhd/125759_a5ff8af5eae137fce9a62bb70678bb32.jpeg",price:"100000",rating:4,categoryName:"Abstraction",inStock:!1,fastDelivery:!0}],Ge=[{_id:Object(be.a)(),firstName:"Adarsh",lastName:"Balika",email:"adarshbalika@gmail.com",password:fe.a.hashSync("adarshBalika123",5),createdAt:pe(),updatedAt:pe()},{_id:Object(be.a)(),firstName:"John",lastName:"Doe",email:"johndoe@gmail.com",password:fe.a.hashSync("johnDoe123",5),createdAt:pe(),updatedAt:pe()},{_id:Object(be.a)(),firstName:"Adarsh",lastName:"Balak",email:"adarshbalak@gmail.com",password:fe.a.hashSync("adarshBalaki123",5),createdAt:pe(),updatedAt:pe()}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,c=void 0===t?"development":t;new de.d({serializers:{application:de.c},environment:c,models:{product:de.a,category:de.a,user:de.a,cart:de.a,wishlist:de.a},seeds:function(e){e.logging=!1,Le.forEach((function(t){e.create("product",Object(u.a)({},t))})),Ge.forEach((function(t){return e.create("user",Object(u.a)(Object(u.a)({},t),{},{cart:[],wishlist:[]}))})),Re.forEach((function(t){return e.create("category",Object(u.a)({},t))}))},routes:function(){this.namespace="api",this.post("/auth/signup",Ne.bind(this)),this.post("/auth/login",ye.bind(this)),this.get("/products",Te.bind(this)),this.get("/products/:productId",Ce.bind(this)),this.get("/categories",Ie.bind(this)),this.get("/categories/:categoryId",Ae.bind(this)),this.get("/user/cart",we.bind(this)),this.post("/user/cart",_e.bind(this)),this.post("/user/cart/:productId",ke.bind(this)),this.delete("/user/cart/:productId",Se.bind(this)),this.get("/user/wishlist",De.bind(this)),this.post("/user/wishlist",Be.bind(this)),this.delete("/user/wishlist/:productId",Ee.bind(this))}})}(),i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(n.a,{children:Object(l.jsx)(v,{children:Object(l.jsx)(w,{children:Object(l.jsx)(le,{})})})})}),document.getElementById("root"))}},[[318,1,2]]]);
//# sourceMappingURL=main.a42b5a75.chunk.js.map