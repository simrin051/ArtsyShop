(this["webpackJsonpartsy-shop"]=this["webpackJsonpartsy-shop"]||[]).push([[0],{168:function(e,t,r){},169:function(e,t,r){},171:function(e,t,r){},172:function(e,t,r){},173:function(e,t,r){},174:function(e,t,r){},179:function(e,t){},181:function(e,t){},192:function(e,t){},194:function(e,t){},222:function(e,t){},223:function(e,t){},228:function(e,t){},230:function(e,t){},237:function(e,t){},256:function(e,t){},286:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r.n(i),a=r(150),c=r.n(a),n=r(17),o=(r(168),r(169),r(5)),d=r(0),l=function(){return Object(d.jsx)("a",{href:"/",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{className:"fa-brands fa-shopify"}),"Artsy Shop"]})})},j=function(e){var t=e.onClick;return Object(d.jsxs)("div",{className:"right-side",children:[Object(d.jsx)(n.b,{to:"/mockman",children:"Mockman"}),Object(d.jsx)("div",{onClick:t,children:Object(d.jsx)("i",{className:"fa-regular fa-user"})}),Object(d.jsxs)(n.b,{to:"/wishlist",className:"favourite",children:[Object(d.jsx)("i",{className:"fa-regular fa-heart"}),Object(d.jsx)("span",{className:"items",children:"25"})]}),Object(d.jsxs)(n.b,{to:"/cart",className:"cart",children:[Object(d.jsx)("i",{className:"fa-solid fa-bag-shopping"}),Object(d.jsx)("span",{className:"items",children:"25"})]})]})},h=function(){return Object(d.jsxs)("div",{className:"artsy-input icon-input",children:[Object(d.jsx)("i",{className:"fas fa-search"}),Object(d.jsx)("input",{placeholder:"Search...",type:"text"})]})},b=(r(171),function(e){return Object(d.jsxs)("header",{className:"arstyShop-header header",children:[Object(d.jsx)(n.b,{to:"/",children:e.leftNav}),e.search,e.rightNav]})}),u=(r(172),function(e){var t=e.link,r=e.category,i=e.img_url;return Object(d.jsx)("a",{href:t,children:Object(d.jsxs)("div",{className:"categories",children:[Object(d.jsx)("img",{src:i,alt:r}),Object(d.jsx)("button",{className:"btn category-name",children:r})]})})}),m=function(){return Object(d.jsxs)("section",{className:"category-section",children:[Object(d.jsx)("h1",{children:"Categories"}),Object(d.jsx)("div",{className:"grid-4 category-grid",children:["Abstraction","Nature","Landscape","urban","Street","Medival","Pop Culture","Portrait"].map((function(e){return Object(d.jsx)(u,{link:"/pages/product/product.html",category:e,img_url:"https://cdn.singulart.com/artworks/v2/cropped/3813/main/carousel/1202203_f053297adb8623bd3c615562c7521b67.jpeg"})}))})]})},p=r.p+"static/media/collection_item_img.412ccea8.jpeg",f=function(e){var t=e.bg_img,r=e.children;return Object(d.jsxs)("a",{href:"",className:"collection-items",children:[Object(d.jsx)("div",{className:"collection-image",children:Object(d.jsx)("img",{alt:"collection image ",className:"collection-image",src:t})}),r]})},O=function(e){var t=e.tag,r=e.heading,i=e.subtitle,s=e.img;return Object(d.jsxs)("div",{className:"collection-content",children:[Object(d.jsxs)("div",{className:"collection-text",children:[Object(d.jsx)("span",{className:"btn collection-tag",children:t}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:r}),Object(d.jsx)("p",{children:i})]})]}),Object(d.jsx)("div",{className:"collection-artworks flex-col",children:[1,2,3].map((function(){return Object(d.jsx)("div",{className:"collection-artwork-item",children:Object(d.jsx)("img",{src:s,alt:""})},"")}))})]})},g=function(e){var t=e.collection_bg_url2,r=e.collection_bg_url;return Object(d.jsxs)("section",{className:"collection-section",children:[Object(d.jsx)("h1",{children:"Get inspired by our Collections"}),Object(d.jsxs)("div",{className:"collection-cont grid-2",children:[Object(d.jsx)(f,{bg_img:r,children:Object(d.jsx)(O,{tag:"Colors",heading:"Color of the year'22 - Very Peri",subtitle:"19 artworks",img:p})}),Object(d.jsx)(f,{bg_img:t,children:Object(d.jsx)(O,{tag:"Colors",heading:"Art and Antiquity",subtitle:"5 artwork",img:p})})]})]})},x=r(12),v=function(e){var t=e.children,r=e.className,i=e.onClick;return Object(d.jsx)("button",{className:"btn btn-primary ".concat(r),onClick:i,children:t})},N=function(){var e=["https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/elements/home/home_slider4.49d888a3.jpg","https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"],t=Object(i.useState)(0),r=Object(x.a)(t,2),s=r[0],a=r[1];return Object(d.jsxs)("section",{className:"hero-section grid-overlay",children:[Object(d.jsx)("div",{className:"hero-img",children:Object(d.jsx)("img",{alt:"hero image",src:e[s]})}),Object(d.jsxs)("div",{className:"hero-overlay flex-col",children:[Object(d.jsx)("h2",{children:"Discover the creative universe of our artists."}),Object(d.jsx)(v,{onClick:function(){return a((function(t){return(t+1)%e.length}))},children:"Discover"})]})]})},y=function(){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(N,{}),Object(d.jsx)(m,{category_list:["Abstraction","Nature","Landscape","urban","Street","Medival","Pop Culture","Portrait"]}),Object(d.jsx)(g,{collection_bg_url2:"https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzMyODdfY292ZXJfY2UwNjRmNjI2ZGE0NjI0MzI1MTA5YjRiMDVmZTgyNmYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDY1LCJoZWlnaHQiOjMxNSwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=ce6e4956bbf7bd80c4bf6471ec041536f8543a032bd9c053fcc96ecc80c63b1c",collection_bg_url:"https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzYwOTFfY292ZXJfNTE1OTFlNjE1MTczMGQ3NGQxNzFlN2ZhOTdjMjU3YzYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjIwLCJoZWlnaHQiOjQyMCwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4a01e589d67a157e5a8512fb3743949df7d5612e96b02bd3b13ac924c1f72c9a"})]})},_=function(e){var t=e.item,r=t.item_name,i=t.item_by,s=(t.item_desc,t.item_original_price),a=t.item_price;t.item_rating;return Object(d.jsx)("div",{className:"card w-30 text-o-media",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("img",{className:"card-img",src:"https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2",alt:""}),Object(d.jsx)("button",{className:"icon favourite-icon",children:Object(d.jsx)("i",{className:"fa-regular fa-heart fa-2x"})}),Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("h1",{children:r}),Object(d.jsxs)("h2",{children:["by ",i]}),Object(d.jsxs)("div",{className:"price-sec",children:[Object(d.jsxs)("h3",{children:["$",a]}),Object(d.jsxs)("span",{className:"strike-price",children:["$",s]})]})]})]})})},w=function(e){var t=e.item,r=e.children,i=t.item_name,s=t.item_by,a=t.item_desc,c=t.item_original_price,n=t.item_price,o=t.item_rating;return Object(d.jsxs)("div",{className:"card w-30 basic",children:[Object(d.jsx)("button",{className:"icon favourite-icon",children:Object(d.jsx)("i",{className:"fa-regular fa-heart fa-2x"})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("img",{className:"card-img",src:"https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2",alt:""}),Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("h1",{children:i}),Object(d.jsxs)("h2",{children:["by ",s]}),Object(d.jsx)("div",{className:"card-body",children:a}),Object(d.jsx)(S,{rating:o}),Object(d.jsxs)("div",{className:"price-sec",children:[Object(d.jsxs)("h3",{children:["$",n]}),Object(d.jsxs)("span",{className:"strike-price",children:["$",c]})]})]})]}),Object(d.jsx)("div",{className:"card-actions",children:r})]})},S=function(e){var t=e.rating;return Object(d.jsx)("div",{className:"artsy-rating-sec",children:Array(t).fill().map((function(){return Object(d.jsx)("i",{className:"fa-solid fa-palette filled"})}))})},k=(r(173),function(){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"page-header-section",children:[Object(d.jsx)("div",{className:"section-bg",children:Object(d.jsx)("img",{src:"https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",srcset:"\r https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/mobile/categorie/nature.4613eed6.jpg       800w,\r https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature1152.73034e4d.jpg 1152w,\r https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature1920.4a74dce3.jpg 1920w,\r https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature3440.90ad9bf4.jpg 3440w\r ",sizes:"(min-width:768px) 100vw, 260px",alt:""})}),Object(d.jsx)("div",{className:"section-content",children:Object(d.jsx)("h1",{children:"Nature Painting"})})]}),Object(d.jsxs)("section",{className:"menu-sec",children:[Object(d.jsxs)("div",{className:"main-drop category-dropdown",children:[Object(d.jsx)("h4",{children:"Painting Category"}),Object(d.jsxs)("button",{className:"btn dropdown-box",onClick:"",children:["Nature",Object(d.jsx)("i",{className:"fa-solid fa-angle-down"})]}),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("div",{children:"Street life"}),Object(d.jsx)("div",{children:"Nature"}),Object(d.jsx)("div",{children:"Landscape"}),Object(d.jsx)("div",{children:"Abstraction"})]})]}),Object(d.jsxs)("div",{className:"price-sec",children:[Object(d.jsx)("h3",{children:"Price"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:"",type:"range",min:"0",max:"1000",step:"50"}),Object(d.jsx)("span",{})]})]}),Object(d.jsxs)("div",{className:"dropdown-container sortBy-con",children:[Object(d.jsxs)("button",{className:"btn dropdown-btn",onClick:"",children:["Sort By",Object(d.jsx)("i",{className:"fa-solid fa-angle-down"})]}),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("div",{className:"body-md",children:Object(d.jsx)("b",{children:"Relevance"})}),Object(d.jsx)("div",{className:"body-md",children:Object(d.jsx)("b",{children:"Popularity"})})]})]})]}),Object(d.jsx)("section",{className:"products-sec",children:Object(d.jsx)("div",{className:"grid-3 products-grid",children:Array(12).fill("").map((function(){return Object(d.jsx)(_,{item:{item_name:"La Porta Rossa Sulla Salita Art Print",item_by:"Guido Borelli",item_desc:"",item_price:18,item_original_price:22,item_rating:4}})}))})})]})}),T=(r(174),{item_name:"La Porta Rossa Sulla Salita Art Print",item_by:"Guido Borelli",item_desc:"Visit ten places on our planet that are undergoing the biggest changes today.",item_price:18,item_original_price:22,item_rating:4}),A=function(){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"page-header-section",children:[Object(d.jsx)("div",{className:"section-bg",children:Object(d.jsx)("img",{src:"https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banner_wishlist_no_connect.cbbca931.jpg",alt:""})}),Object(d.jsxs)("div",{className:"section-content flex-col",children:[Object(d.jsx)("i",{className:"fas fa-heart fa-4x"}),Object(d.jsx)("h1",{children:"My Favourites"})]})]}),Object(d.jsx)("section",{className:"wishlist-sec",children:Array(6).fill().map((function(){return Object(d.jsx)(w,{item:T,children:Object(d.jsxs)(v,{children:[Object(d.jsx)("i",{className:"fa-solid fa-cart-shopping"}),Object(d.jsx)("span",{children:" add to cart"})]})})}))})]})},I=r(151);var C=function(){return Object(d.jsx)("div",{className:"MockAPI",children:Object(d.jsx)(I.a,{colorScheme:"light"})})};var E=function(){return Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)(b,{leftNav:Object(d.jsx)(l,{}),rightNav:Object(d.jsx)(j,{}),search:Object(d.jsx)(h,{})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{path:"/product",element:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{path:"/wishlist",element:Object(d.jsx)(A,{})}),Object(d.jsx)(o.a,{path:"/mockman",element:Object(d.jsx)(C,{})})]})]})},B=r(11),J=r(3),R=r(163),P=r(287),W=r(152),M=r.n(W),Z=r(87),Y=function(e){var t=e.requestHeaders.authorization,r=Z.verify(t,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_JWT_SECRET);if(r){var i=this.db.users.findBy({email:r.email});if(i)return i._id}return new J.b(401,{},{errors:["The token is invalid. Unauthorized access error."]})},D=function(){return M()().format("YYYY-MM-DDTHH:mm:ssZ")},F=r(25),H=r.n(F),L=["email","password"],G=r(87),V=function(e,t){var r=JSON.parse(t.requestBody),i=r.email,s=r.password,a=Object(R.a)(r,L);try{if(e.users.findBy({email:i}))return new J.b(422,{},{errors:["Unprocessable Entity. Email Already Exists."]});var c=Object(P.a)(),n=H.a.hashSync(s,5),o=Object(B.a)(Object(B.a)({_id:c,email:i,password:n,createdAt:D(),updatedAt:D()},a),{},{cart:[],wishlist:[]}),d=e.users.create(o),l=G.sign({_id:c,email:i},Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_JWT_SECRET);return new J.b(201,{},{createdUser:d,encodedToken:l})}catch(j){return new J.b(500,{},{error:j})}},X=function(e,t){var r=JSON.parse(t.requestBody),i=r.email,s=r.password;try{var a=e.users.findBy({email:i});if(!a)return new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});if(H.a.compareSync(s,a.password)){var c=G.sign({_id:a._id,email:i},Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_JWT_SECRET);return a.password=void 0,new J.b(200,{},{foundUser:a,encodedToken:c})}new J.b(401,{},{errors:["The credentials you entered are invalid. Unauthorized access error."]})}catch(n){return new J.b(500,{},{error:n})}},z=function(e,t){var r=Y.call(this,t);r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).cart;return new J.b(200,{},{cart:i})},U=function(e,t){var r=Y.call(this,t);try{r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).cart,s=JSON.parse(t.requestBody).product;return i.push(Object(B.a)(Object(B.a)({},s),{},{createdAt:D(),updatedAt:D(),qty:1})),this.db.users.update({_id:r},{cart:i}),new J.b(201,{},{cart:i})}catch(a){return new J.b(500,{},{error:a})}},q=function(e,t){var r=Y.call(this,t);try{r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).cart,s=t.params.productId;return i=i.filter((function(e){return e._id!==s})),this.db.users.update({_id:r},{cart:i}),new J.b(200,{},{cart:i})}catch(a){return new J.b(500,{},{error:a})}},Q=function(e,t){var r=t.params.productId,i=Y.call(this,t);try{i||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var s=e.users.findBy({_id:i}).cart,a=JSON.parse(t.requestBody).action;return"increment"===a.type?s.forEach((function(e){e._id===r&&(e.qty+=1,e.updatedAt=D())})):"decrement"===a.type&&s.forEach((function(e){e._id===r&&(e.qty-=1,e.updatedAt=D())})),this.db.users.update({_id:i},{cart:s}),new J.b(200,{},{cart:s})}catch(c){return new J.b(500,{},{error:c})}},K=function(){try{return new J.b(200,{},{categories:this.db.categories})}catch(e){return new J.b(500,{},{error:e})}},$=function(e,t){var r=t.params.categoryId;try{var i=e.categories.findBy({_id:r});return new J.b(200,{},{category:i})}catch(s){new J.b(500,{},{error:s})}},ee=function(){return new J.b(200,{},{products:this.db.products})},te=function(e,t){var r=t.params.productId;try{var i=e.products.findBy({_id:r});return new J.b(200,{},{product:i})}catch(s){return new J.b(500,{},{error:s})}},re=function(e,t){var r=Y.call(this,t);r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).wishlist;return new J.b(200,{},{wishlist:i})},ie=function(e,t){var r=Y.call(this,t);try{r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).wishlist,s=JSON.parse(t.requestBody).product;return i.push(Object(B.a)(Object(B.a)({},s),{},{createdAt:D(),updatedAt:D()})),this.db.users.update({_id:r},{wishlist:i}),new J.b(201,{},{wishlist:i})}catch(a){return new J.b(500,{},{error:a})}},se=function(e,t){var r=Y.call(this,t);try{r||new J.b(404,{},{errors:["The email you entered is not Registered. Not Found error"]});var i=e.users.findBy({_id:r}).wishlist,s=t.params.productId;return i=i.filter((function(e){return e._id!==s})),this.db.users.update({_id:r},{wishlist:i}),new J.b(200,{},{wishlist:i})}catch(a){return new J.b(500,{},{error:a})}},ae=[{_id:Object(P.a)(),categoryName:"Nature",description:"literature in the form of prose, especially novels, that describes imaginary events and people"},{_id:Object(P.a)(),categoryName:"landscape",description:"Non-fiction is writing that gives information or describes real events, rather than telling a story."},{_id:Object(P.a)(),categoryName:"Digital Art",description:"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."},{_id:Object(P.a)(),categoryName:"Abstraction",description:"Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."}],ce=[{_id:Object(P.a)(),title:"Dot Punk",artist:"Peter Notrott",desc:"Oil on canvas 60x60cm",img:"https://cdn.singulart.com/artworks/v2/cropped/6305/main/fhd/1053013_b1fc42ad416a6c5eaeea01a726e0d41b.jpeg",price:"888000",rating:3,categoryName:"Digital Art",inStock:!0,inWhislist:!1},{_id:Object(P.a)(),title:"Sail Boat Marina / Evening Mood XL 1",artist:"Peter Notrott",desc:"Acrylic on canvas 105x155cm",img:"https://cdn.singulart.com/artworks/v2/cropped/2493/main/carousel/1557008_9a7b68b877d642af26cfcca5026dd8a6.jpeg",price:"265500",rating:4,categoryName:"Nature",inStock:!0,inWhislist:!1},{_id:Object(P.a)(),title:"After the winter rain",artist:"Trong Thuong Tran",desc:"Oil on canvas 120x180cm",img:"https://cdn.singulart.com/artworks/v2/cropped/26567/main/fhd/1534622_d831b72484f36574ed27f16a4c4fe368.jpeg",price:"625000",rating:5,categoryName:"Lanscape",inStock:!0,inWhislist:!0},{_id:Object(P.a)(),title:"Old Village",artist:"M. Singh",desc:"Acrylic on Canvas, 58.4x55.9cm",img:"https://cdn.singulart.com/artworks/v2/cropped/5855/main/fhd/536679_0be0c153cb7128d992de966f7a8d35c8.jpeg",price:"40000",rating:4,categoryName:"Abstarction",inStock:!0,inWhislist:!1},{_id:Object(P.a)(),title:"Pretty in Pink",artist:"Inge Thogersen",desc:"Acrylic Pastel on Canvas, 100x100cm",img:"https://cdn.singulart.com/artworks/v2/cropped/4727/main/fhd/125759_a5ff8af5eae137fce9a62bb70678bb32.jpeg",price:"100000",rating:4,categoryName:"Abstarction",inStock:!1,inWhislist:!1}],ne=[{_id:Object(P.a)(),firstName:"Adarsh",lastName:"Balika",email:"adarshbalika@gmail.com",password:H.a.hashSync("adarshBalika123",5),createdAt:D(),updatedAt:D()},{_id:Object(P.a)(),firstName:"John",lastName:"Doe",email:"johndoe@gmail.com",password:H.a.hashSync("johnDoe123",5),createdAt:D(),updatedAt:D()},{_id:Object(P.a)(),firstName:"Adarsh",lastName:"Balak",email:"adarshbalak@gmail.com",password:H.a.hashSync("adarshBalaki123",5),createdAt:D(),updatedAt:D()}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,r=void 0===t?"development":t;new J.d({serializers:{application:J.c},environment:r,models:{product:J.a,category:J.a,user:J.a,cart:J.a,wishlist:J.a},seeds:function(e){e.logging=!1,ce.forEach((function(t){e.create("product",Object(B.a)({},t))})),ne.forEach((function(t){return e.create("user",Object(B.a)(Object(B.a)({},t),{},{cart:[],wishlist:[]}))})),ae.forEach((function(t){return e.create("category",Object(B.a)({},t))}))},routes:function(){this.namespace="api",this.post("/auth/signup",V.bind(this)),this.post("/auth/login",X.bind(this)),this.get("/products",ee.bind(this)),this.get("/products/:productId",te.bind(this)),this.get("/categories",K.bind(this)),this.get("/categories/:categoryId",$.bind(this)),this.get("/user/cart",z.bind(this)),this.post("/user/cart",U.bind(this)),this.post("/user/cart/:productId",Q.bind(this)),this.delete("/user/cart/:productId",q.bind(this)),this.get("/user/wishlist",re.bind(this)),this.post("/user/wishlist",ie.bind(this)),this.delete("/user/wishlist/:productId",se.bind(this))}})}(),c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(n.a,{children:Object(d.jsx)(E,{})})}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.015907ef.chunk.js.map