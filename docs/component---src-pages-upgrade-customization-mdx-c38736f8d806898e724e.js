(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),b=t.n(i),l=t("NmYn"),n=t.n(l),s=t("Wbzz"),o=t("Xrax"),c=t("k4MR"),r=t("TSYQ"),p=t.n(r),m=t("QH2O"),d=t.n(m),u=t("qKvR"),g=function(e){var a,t=e.title,i=e.theme,b=e.tabs,l=void 0===b?[]:b;return Object(u.b)("div",{className:p()(d.a.pageHeader,(a={},a[d.a.withTabs]=l.length,a[d.a.darkMode]="dark"===i,a))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},t)))))},A=t("BAC9"),O=function(e){var a=e.relativePagePath,t=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,b=t||i,l=b.baseUrl,n=b.subDirectory,o=l+"/edit/"+b.branch+n+"/src/pages"+a;return l?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:o},"Edit this page on GitHub"))):null},x=t("FCXl"),j=t("dI71"),f=t("I8xM"),N=function(e){function a(){return e.apply(this,arguments)||this}return Object(j.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,b=i.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=n()(e,{lower:!0,strict:!0}),l=t===b,o=new RegExp(b+"/?(#.*)?$"),c=i.replace(o,t);return Object(u.b)("li",{key:e,className:p()((a={},a[f.selectedItem]=l,a),f.listItem)},Object(u.b)(s.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":a},Object(u.b)("ul",{className:f.list},l))))))},a}(b.a.Component),y=t("MjG9"),w=t("CzIb"),h=t("Asxa"),k=t("OIbQ"),v=t.n(k),T=function(e){var a=e.date,t=new Date(a);return a?Object(u.b)(h.c,{className:v.a.row},Object(u.b)(h.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,b=e.Title,l=a.frontmatter,r=void 0===l?{}:l,p=a.relativePagePath,m=a.titleType,d=r.tabs,A=r.title,j=r.theme,f=r.description,h=r.keywords,k=r.date,v=Object(w.a)().interiorTheme,z=Object(s.useStaticQuery)("2456312558").site.pathPrefix,Q=z?i.pathname.replace(z,""):i.pathname,B=d?Q.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"",I=j||v;return Object(u.b)(c.a,{tabs:d,homepage:!1,theme:I,pageTitle:A,pageDescription:f,pageKeywords:h,titleType:m},Object(u.b)(g,{title:b?Object(u.b)(b,null):A,label:"label",tabs:d,theme:I}),d&&Object(u.b)(N,{title:A,slug:Q,tabs:d,currentTab:B}),Object(u.b)(y.a,{padded:!0},t,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(T,{date:k})),Object(u.b)(x.a,{pageContext:a,location:i,slug:Q,tabs:d,currentTab:B}),Object(u.b)(o.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dTtx:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return p}));var i=t("wx14"),b=t("zLVn"),l=(t("q1tI"),t("7ljp")),n=t("013z"),s=(t("qKvR"),["components"]),o={},c={_frontmatter:o},r=n.a;function p(e){var a=e.components,t=Object(b.a)(e,s);return Object(l.b)(r,Object(i.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Customization Archive"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sample ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ibm-mas-manage/playbook/blob/master/customization"},"Customization archive")," has",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"classes ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"applications\\maximo\\businessobjects\\classes\\cust\\app\\asset\\Asset.class"),Object(l.b)("li",{parentName:"ul"},"applications\\maximo\\businessobjects\\classes\\cust\\app\\asset\\AssetSet.class"),Object(l.b)("li",{parentName:"ul"},"applications\\maximo\\businessobjects\\classes\\cust\\app\\asset\\FldAssetNewField.class"))),Object(l.b)("li",{parentName:"ul"},"product xml",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"applications\\maximo\\properties\\product\\a_customer.xml"))),Object(l.b)("li",{parentName:"ul"},"script",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"tools\\maximo\\en\\cust\\V7612_01.dbc"))),Object(l.b)("li",{parentName:"ul"},"servlets",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"applications\\maximo\\commonweb\\classes\\com\\ibm\\tivoli\\maximo\\oslc\\provider\\MyPingServlet.class"))),Object(l.b)("li",{parentName:"ul"},"deployment descriptors (web.xml)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"deployment\\was-liberty-default\\config-deployment-descriptors\\maximo-mea\\meaweb\\webmodule\\WEB-INF\\web.xml"),Object(l.b)("li",{parentName:"ul"},"deployment\\was-liberty-default\\config-deployment-descriptors\\maximo-ui\\meaui\\webmodule\\WEB-INF\\web.xml")))))),Object(l.b)("h2",null,"Customization Archive validation"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Go to Asset application:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The customized “New Asset Field” is added in the Asset application."),Object(l.b)("li",{parentName:"ul"},"When the value of the field is changed. It will be set OLD on save based on the sample customization logic.")))),Object(l.b)("p",null,Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVQoz4WRa27CMBCEczVuEooCXKYUAvR8FUQQYjtPJ3VowtSzFRWVqvbHJ9vr8Xi8DiaTCZbLBZaLBWazmecJ02nomf5LGIaIokiYz+eyDtbrF3TvPZy7YhwHWOtQltZTeioZi6IQ7nOOVVUhz3NkWQajFS6XC47HI4I43qIfgbqx6LrOCzSU0iJUSkFr/QPW0jTF+XwWDfVviddqg9Pp5A23O7gbcP0YJaFSmSSgeV3XPrn7pu97tG0r+zS31qJpGmjzpWfiYLd/xQCgaAZ0bkCSJDgcDjDGyAGa8hB5nHOP5nVd+TbkshbDzSbG4BOyjzc/sg98Cp9F0W/QkL1kH3kJQ7DOWrBaPaNprzBF5Z/kZJM8fsZfMBU/5N7fT5s57WZxWgfzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/f0d2420f34d97906061b38077291fa86/3cbba/asset.png",srcSet:["/playbook/static/f0d2420f34d97906061b38077291fa86/7fc1e/asset.png 288w","/playbook/static/f0d2420f34d97906061b38077291fa86/a5df1/asset.png 576w","/playbook/static/f0d2420f34d97906061b38077291fa86/3cbba/asset.png 1152w","/playbook/static/f0d2420f34d97906061b38077291fa86/0b124/asset.png 1728w","/playbook/static/f0d2420f34d97906061b38077291fa86/4ea69/asset.png 2304w","/playbook/static/f0d2420f34d97906061b38077291fa86/b71bd/asset.png 2852w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"     "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use any REST client (For example, Postman). Copy the mea web link from Routes (see Manage page) and append \\meaweb\\myapi.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In response header ",Object(l.b)("inlineCode",{parentName:"li"},"pingmaximo")," value will be set to ",Object(l.b)("inlineCode",{parentName:"li"},"hello"),".")))),Object(l.b)("p",null,Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA90lEQVQY022R3W6DMAyF87S73JPtYk/UqVILpQHyH+wkDTukRRrbPh0Fx/g4hgjnnLVWKa12tNbGGARYwxHvAy2hn8P7p3/78OKZdUZBMUbfWJYFcUop/wfSg02nkUXXdTiEiRJtMDPMUkrdQJeWptfjWUNUM2UO4jYMPnhMtDQnToNBG4vRrTUoRSYxLTFEQqcmJhc5EosQvZrveroRhVrr+oNaHznzFpSS0bfkXcXTA3txuZrL1d4lQePIkNyFzHDHQGXrU9uygw0zifN5On0NUkal0nzUOFHfO+a6Howv8HXCe0sU8Xb9Q6sIMW7XUUr5Zcav+Aa+zMycw+QbmgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/7bb78a49db1bf07684885a92a186602a/3cbba/uiapi.png",srcSet:["/playbook/static/7bb78a49db1bf07684885a92a186602a/7fc1e/uiapi.png 288w","/playbook/static/7bb78a49db1bf07684885a92a186602a/a5df1/uiapi.png 576w","/playbook/static/7bb78a49db1bf07684885a92a186602a/3cbba/uiapi.png 1152w","/playbook/static/7bb78a49db1bf07684885a92a186602a/11f6b/uiapi.png 1344w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"On any REST client, copy the ui web link from Routes (see Manage page) and append \\maximo\\myuiapi.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In response header ",Object(l.b)("inlineCode",{parentName:"li"},"pingmaximo")," value will be set to ",Object(l.b)("inlineCode",{parentName:"li"},"hello"))))),Object(l.b)("p",null,Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABDElEQVQoz22S62rDMAyF8/7/BnujsYfYBcIYXds0JY7ji3zLmaSs3QYxfMRSpGNJduecg/cei7Uw1xHzbJgZxhhY9t0IIYCIEGP8B1FU/8NTwONzQCfJ4ziqSHT2HiDB4luWRcVSSsg571IYNN4nQtf3PQ6HLzjnQSmzECkiOgyD/pOvCO9VeCNwjhzcTdMEu8xsSHWeKyGsa2MqSslqt1ZRa2EqGpNkTBQQuBvBM5PLcDFLyxkvryM+PwyOx4DjKTGknM7pztv7BOe5NV6trXzgL6019ctYOqKCy4XneLXwoXCl9Q/lh8otJ5QqiZvI3lJBacXaWVuS4H2AGLzevCAvQ5K3W97mKrbsvwGvzR5Vb8/YtgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/3b147376112ba9c80bb064e7b57d41d3/3cbba/meaapi.png",srcSet:["/playbook/static/3b147376112ba9c80bb064e7b57d41d3/7fc1e/meaapi.png 288w","/playbook/static/3b147376112ba9c80bb064e7b57d41d3/a5df1/meaapi.png 576w","/playbook/static/3b147376112ba9c80bb064e7b57d41d3/3cbba/meaapi.png 1152w","/playbook/static/3b147376112ba9c80bb064e7b57d41d3/65344/meaapi.png 1350w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-customization-mdx-c38736f8d806898e724e.js.map