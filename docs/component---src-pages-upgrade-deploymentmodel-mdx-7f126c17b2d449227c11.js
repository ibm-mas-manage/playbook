(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),m=a("QH2O"),u=a.n(m),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},x=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,b=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,b=new RegExp(i+"/?(#.*)?$"),s=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(p.b)(o.Link,{className:w.link,to:""+s},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},r))))))},t}(i.a.Component),f=a("MjG9"),T=a("CzIb"),A=a("Asxa"),k=a("OIbQ"),N=a.n(k),v=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(A.c,{className:N.a.row},Object(p.b)(A.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,u=c.tabs,x=c.title,j=c.theme,w=c.description,A=c.keywords,k=c.date,N=Object(T.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,E=P?n.pathname.replace(P,""):n.pathname,I=u?E.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",q=j||N;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:q,pageTitle:x,pageDescription:w,pageKeywords:A,titleType:m},Object(p.b)(g,{title:i?Object(p.b)(i,null):x,label:"label",tabs:u,theme:q}),u&&Object(p.b)(y,{title:x,slug:E,tabs:u,currentTab:I}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(v,{date:k})),Object(p.b)(h.a,{pageContext:t,location:n,slug:E,tabs:u,currentTab:I}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},e0hi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),b={_frontmatter:o},s=l.a;function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following diagram shows a sample Manage deployment model."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"667px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACLElEQVQozzWQWW+bQBSF+dVVH/o7qkp9bKUqUquqsZKU1DbGCwEMZjG7YVgGY5hhsQEP6VtJokrn4erofLr3HsqJzrSYL1TMKpizmkwywOH0KOP5DrEKYs0zEC3kAPt4pYWcURGjoLV1BryBo4wKs86HrRdiy8d+XMOiO8CLBRo/btywOcRNWrRh1iZ5H6QXB5SGh0DSJKiHqKNgQdwMCAee9wQtVk9VF6S9l56ebG5l8iuTS8siyvoUEZBDyZd4V9KTMdbCvKfSYhADhd4LtKYtD1yCS5AO+yhkHO6Prv8x1yEO44wc0aBG5qPxROsq6y7jAqUFGWGyC/eM4cy1hPMU+AobcbS094x+ZAwtxtEIj5v3ibMw7DG2duUE/Ye3gTLTzbkWbTwpQTg8DnoIWEudqfHc2IECvMFaZC1Mc6ZGa3cbFcUbPKiJzdrmwgwEoB3rM0iJnUIhMDYOXHtGWqdxdh3PNqC/tG3GiDeeCssKFlcqgDW7EVZP3Is2K0lzohMRNY/bSpwk85IsyLo/1pt3K2G35IW1IHIiz+/sDBPKT6qb779uJ3eT++nXbz/YjQzxX3rGTV6dnxP69o52IzzCD4/sb3o6eWC/3NzPltKpGqg471eSb/jFVEbvPiqyWyfFlVNjUQNTqXj/Sd06dXTqxp9VF2310cw/fN6rhyavrlR9IeV5qF40ttKh+joOqCa4Ibgmcdbm5YvTtEN5JtVlaFpy6Z7LhrT98z+HKDFxL/ES2AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/25db75e7a52c6555d81ed61b491c8d92/8f43f/deployment.png",srcSet:["/playbook/static/25db75e7a52c6555d81ed61b491c8d92/7fc1e/deployment.png 288w","/playbook/static/25db75e7a52c6555d81ed61b491c8d92/a5df1/deployment.png 576w","/playbook/static/25db75e7a52c6555d81ed61b491c8d92/8f43f/deployment.png 667w"],sizes:"(max-width: 667px) 100vw, 667px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Each Cluster can run multiple MAS instances"),Object(r.b)("li",{parentName:"ul"},"Each instance runs its own set of pods and runtime code"),Object(r.b)("li",{parentName:"ul"},"All instances within the cluster can share same license pool"),Object(r.b)("li",{parentName:"ul"},"Each instance has its own workloads",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Worker nodes capacity management done per instance "))),Object(r.b)("li",{parentName:"ul"},"Prerequisites stack is defined at instance level"),Object(r.b)("li",{parentName:"ul"},"Independent storage clusters per instance")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-deploymentmodel-mdx-7f126c17b2d449227c11.js.map