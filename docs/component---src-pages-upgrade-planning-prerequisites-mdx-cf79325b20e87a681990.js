(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,b=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(l.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb"),N=a("Asxa"),P=a("OIbQ"),k=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:k.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,N=s.keywords,P=s.date,k=Object(v.a)().interiorTheme,M=Object(l.useStaticQuery)("2456312558").site.pathPrefix,S=M?n.pathname.replace(M,""):n.pathname,I=m?S.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",H=f||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:h,pageKeywords:N,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:H}),m&&Object(p.b)(w,{title:O,slug:S,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(y,{date:P})),Object(p.b)(j.a,{pageContext:t,location:n,slug:S,tabs:m,currentTab:I}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VqHz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),b={_frontmatter:l},c=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Maximo required to be at version 7612 or higher prior to MAS upgrade."),Object(i.b)("p",null,"Prepare OpenShift environment(s)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System requirements for Manage/EAM, IS, Add-ons and customizations (if any)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Refer to MAS and Manage documentation, determine the capacity needed and secure an OpenShift cluster for testing or development or production.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Red Hat OpenShift ",Object(i.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.5/welcome/index.html"},"OpenShift")),Object(i.b)("li",{parentName:"ul"},"Maximo Application Suite: ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SSRHPA_current/appsuite/install/index.html"},"MAS")),Object(i.b)("li",{parentName:"ul"},"Capacity Planning: ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/pages/node/6246125"},"Capacity Planning"))))))),Object(i.b)("p",null,"Configure OpenShift cluster based on the above requirements"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-prerequisites-mdx-cf79325b20e87a681990.js.map