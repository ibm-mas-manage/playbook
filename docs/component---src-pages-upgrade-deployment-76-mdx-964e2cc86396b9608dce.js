(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),O=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+c},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},o))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb"),A=a("Asxa"),T=a("OIbQ"),k=a.n(T),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(A.c,{className:k.a.row},Object(p.b)(A.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,j=b.theme,O=b.description,A=b.keywords,T=b.date,k=Object(y.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,H=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",z=j||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:z,pageTitle:g,pageDescription:O,pageKeywords:A,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:z}),m&&Object(p.b)(w,{title:g,slug:I,tabs:m,currentTab:H}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(N,{date:T})),Object(p.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:H}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xcdI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),s={},c={_frontmatter:s},b=i.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following architectural diagram shows a typical Maximo 7.6 deployment."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABuElEQVQoz2P48u3Xlx+/v/38/fvPXwT6/QeFiw39/PWH4c3H709ef3n18fu//6SBP3//Mlx/8Hb3yYfnb73+8xeh/R8IEKH5xsN3O048AGr++/cfkA9x87Fjx378+Pbw4cOXL18C1f36/QdsHFABFAHB7z9/GJ68+rz79JM7Tz7Cjfz79+/pM2c/fft56eqNp0+fQhyCaTPQMoYnLz+evfHy6t1Xf/78W73n2oTlZ9Yfut+84OyS3fd6Vlyauu7K6n13Jiw/9fDZh8evP688dHv7mfvrj9+7duP2/bt3GU5efrrj6N2stu3nb73VjZ7DbdcVUrmWQafOr3iluHu/cuBUl+xlDLr1Ww7d2XT2qUrhNrfWfVYNByfPWb553RqGh09fX7j+4M6jl1+//UhrWxFUPqeof7V7/oz83lVRtQujahbk9qx2zp5y4Mzd3aduOxfMimteFly7ZPrsRRvXrmF4/frV5YvnXr18DvTGzcvnL589eeva5ctnjt+8eunaxTNXzp++fe3yxVNH37559+Htm0unjwHVXD1/+t6dW8DgZPj249fnL1+/ff8JDGc8EfMXBP6hBRgA1c8E9WdVfpgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/549e25312a55533bc6a01c5679443089/acfc1/deployment76.png",srcSet:["/playbook/static/549e25312a55533bc6a01c5679443089/7fc1e/deployment76.png 288w","/playbook/static/549e25312a55533bc6a01c5679443089/a5df1/deployment76.png 576w","/playbook/static/549e25312a55533bc6a01c5679443089/acfc1/deployment76.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"In Maximo 7.6 deployment, the software gets downloaded on the admin workstation. The ear and war files are generated on the admin workstation and deployed on an application server. In this deployment example, the cluster is running multiple servers for Classic UI, Work Centers, Cron, and BIRT reporting to distribute the load in a WebSphere Network Deployment application server. The Maximo database and other external systems for integration are running on separate servers."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-deployment-76-mdx-964e2cc86396b9608dce.js.map