(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),c=a.n(r),b=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,c=i.subDirectory,o=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===i,o=new RegExp(i+"/?(#.*)?$"),l=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(b.Link,{className:f.link,to:""+l},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(i.a.Component),T=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,O=s.theme,f=s.description,N=s.keywords,w=Object(v.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",E=O||w;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:f,pageKeywords:N,titleType:u},Object(p.b)(x,{title:i?Object(p.b)(i,null):g,label:"label",tabs:m,theme:E}),m&&Object(p.b)(k,{title:g,slug:y,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},bKA8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),o={_frontmatter:b},l=c.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Attached Docs"),Object(r.b)("p",null,"Fully Supported"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If using the file system mount, the same file system mount can be configured in MAS through volume mount in OpenShift. No change is needed for the Manage doclinks configuration, if the mount point is same as before. "),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Object Storage (S3)\n•No change needed to bring attached documents\n•Object storage server public certificate may need to be imported.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-attacheddocs-mdx-fa2eb882b13c671371e2.js.map