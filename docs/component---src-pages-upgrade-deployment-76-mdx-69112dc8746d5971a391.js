(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},x=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+x.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(u.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(u.b)("div",{className:v.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:v.list},i))))))},t}(r.a.Component),w=a("MjG9"),O=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=b.tabs,x=b.title,j=b.theme,v=b.description,A=b.keywords,T=Object(O.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=k?n.pathname.replace(k,""):n.pathname,N=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",H=j||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:H,pageTitle:x,pageDescription:v,pageKeywords:A,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):x,label:"label",tabs:p,theme:H}),p&&Object(u.b)(y,{title:x,slug:P,tabs:p,currentTab:N}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:N}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xcdI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},c=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following architectural diagram shows a typical Maximo 7.6 deployment."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABuElEQVQoz2P48u3Xlx+/v/38/fvPXwT6/QeFiw39/PWH4c3H709ef3n18fu//6SBP3//Mlx/8Hb3yYfnb73+8xeh/R8IEKH5xsN3O048AGr++/cfkA9x87Fjx378+Pbw4cOXL18C1f36/QdsHFABFAHB7z9/GJ68+rz79JM7Tz7Cjfz79+/pM2c/fft56eqNp0+fQhyCaTPQMoYnLz+evfHy6t1Xf/78W73n2oTlZ9Yfut+84OyS3fd6Vlyauu7K6n13Jiw/9fDZh8evP688dHv7mfvrj9+7duP2/bt3GU5efrrj6N2stu3nb73VjZ7DbdcVUrmWQafOr3iluHu/cuBUl+xlDLr1Ww7d2XT2qUrhNrfWfVYNByfPWb553RqGh09fX7j+4M6jl1+//UhrWxFUPqeof7V7/oz83lVRtQujahbk9qx2zp5y4Mzd3aduOxfMimteFly7ZPrsRRvXrmF4/frV5YvnXr18DvTGzcvnL589eeva5ctnjt+8eunaxTNXzp++fe3yxVNH37559+Htm0unjwHVXD1/+t6dW8DgZPj249fnL1+/ff8JDGc8EfMXBP6hBRgA1c8E9WdVfpgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/549e25312a55533bc6a01c5679443089/acfc1/deployment76.png",srcSet:["/maximo/manage-playbook/static/549e25312a55533bc6a01c5679443089/7fc1e/deployment76.png 288w","/maximo/manage-playbook/static/549e25312a55533bc6a01c5679443089/a5df1/deployment76.png 576w","/maximo/manage-playbook/static/549e25312a55533bc6a01c5679443089/acfc1/deployment76.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"In Maximo 7.6 deployment, the software gets downloaded on the admin workstation. The ear and war files are generated on the admin workstation and deployed on an application server. In this deployment example, the cluster is running multiple servers for Classic UI, Work Centers, Cron, and BIRT reporting to distribute the load in a WebSphere Network Deployment application server. The Maximo database and other external systems for integration are running on separate servers."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-deployment-76-mdx-69112dc8746d5971a391.js.map