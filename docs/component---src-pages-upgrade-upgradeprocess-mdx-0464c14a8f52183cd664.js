(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,s=new RegExp(i+"/?(#.*)?$"),l=n.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(c.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},o))))))},t}(i.a.Component),w=a("MjG9"),N=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),T=a.n(y),k=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:T.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,u=b.tabs,h=b.title,j=b.theme,f=b.description,v=b.keywords,y=b.date,T=Object(N.a)().interiorTheme,P=Object(c.useStaticQuery)("2456312558").site.pathPrefix,z=P?n.pathname.replace(P,""):n.pathname,M=u?z.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",I=j||T;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:f,pageKeywords:v,titleType:p},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:u,theme:I}),u&&Object(m.b)(A,{title:h,slug:z,tabs:u,currentTab:M}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d}),Object(m.b)(k,{date:y})),Object(m.b)(x.a,{pageContext:t,location:n,slug:z,tabs:u,currentTab:M}),Object(m.b)(s.a,null))}},"27dA":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=r.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following diagram shows the upgrade process flow."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"797px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/UlEQVQoz12QWW/aQBSF/dMr9bFP3ZSq7UOVh0apGhRoFpEmzQYGAmUJGIrBgG0GbI/H9tjj2djqtlIr9eiTjnR1r47uUYKYwZDAMMWEBpGPQhjhKAlQAp3EW6Y4QqFwvCTDhTQixPKnJswwvAgqFiQtHfTtcOEjABrTWRmFI79XWd59dq4/YqMzMFi5Ai6/jdodYizNs/7+4cPeYfN5e15VgphOFtgNSEppgMO546U0EXHoAgd7rkhJTNaOLy2Hk3SXUGqhac8ybDSFsa+oTb3wVb0od3vDfrWS07QLFOr2/XHr0wst9wrprcvbaeHk8ctpV616Y2DunT19V3z2svBEHd4oTW1ypXb6ZjCdzxoPp3PQ4BIsakXt5MPofD+aaGodXN8a9e+w2Qn8KJ75w445mMChi12FMAkQj+lKriROs+awkEwS7C29BPkrlqZs4wXC9pgUOxCCo9bbg9Kbg+rrjl1XBhYqt41q1zKXtmVVTKsaYGN8k+8ev7dL+Xg2aGtxVphaWz5qEU5YzAPMQsyyrkiWvEq5TKlkguEEushhHPMEMxwIgtecMb5lfEPZhosdpuFVM39eOirWchNXV1brze63cOwP9Ppk1oS+sd39r+3u14wK0hqrte5d48c9QLbCuJSrtZDrzCnn2edCCpHZP9Z/yHb+JmXKrn4COKMVfDhzOTMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/235248d3ac85d73151b477c8833bba6f/d38c6/upgradeprocess.png",srcSet:["/playbook/static/235248d3ac85d73151b477c8833bba6f/7fc1e/upgradeprocess.png 288w","/playbook/static/235248d3ac85d73151b477c8833bba6f/a5df1/upgradeprocess.png 576w","/playbook/static/235248d3ac85d73151b477c8833bba6f/d38c6/upgradeprocess.png 797w"],sizes:"(max-width: 797px) 100vw, 797px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null," "),Object(o.b)("p",null,"The upgrade process consists of test deployment and then production deployment on successful testing. The test deployment consists of five steps."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Prepare DB:"),"  Prepare test database as a duplicate of the existing Maximo production database.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Install & configure MAS:")," Install and configure MAS instance in your OpenShift environment.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Customization:"),"  Create a customization archive by following the steps in the Customization Archive section (See Customization section for details).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Deploy:")," Use MAS UI/API to configure Manage, Industry Solutions/Add-Ons to point to the to be upgraded database, and other configurations. Specify the location of the customization archive. Deploy Manage application.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Activate:")," Activate Manage application. It will update the database and deploy workloads to the containers.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Test and check the logs in case of errors. Fix errors. If the problem is related to customization, copy the entire build directory using the admin image container in the OpenShift environment to a local development machine with the customization and compile. After done, create the customization archive again with the updated code and redeploy and reactivate.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On successful testing, deploy to production environment.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Production Deployment:")," Configure OpenShift cluster, install MAS, and all prerequisites. Get all production configuration, database configuration, server bundles configurations, and customization archive if exists. Deploy and Activate the application. The system is production ready."))))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-upgradeprocess-mdx-0464c14a8f52183cd664.js.map