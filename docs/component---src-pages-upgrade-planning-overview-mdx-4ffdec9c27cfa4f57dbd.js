(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),i=a.n(l),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,i=r.subDirectory,o=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===r,o=new RegExp(r+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=l,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},l))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),N=a("Asxa"),k=a("OIbQ"),P=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:P.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,N=s.keywords,k=s.date,P=Object(w.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,H=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",L=f||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:L,pageTitle:O,pageDescription:h,pageKeywords:N,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:L}),m&&Object(p.b)(T,{title:O,slug:E,tabs:m,currentTab:H}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(y,{date:k})),Object(p.b)(j.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:H}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},j2fs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),o={_frontmatter:b},c=i.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The following are the overview of changes: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"All three databases (DB2, Oracle and SQL server) are supported."),Object(l.b)("li",{parentName:"ul"},"All UI/UX (classic & work centers) will be available in MAS."),Object(l.b)("li",{parentName:"ul"},"Only WAS Liberty application server is used within MAS. "),Object(l.b)("li",{parentName:"ul"},"No significant changes in the EAM data model."),Object(l.b)("li",{parentName:"ul"},"Red Hat OpenShift Deployment.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-overview-mdx-4ffdec9c27cfa4f57dbd.js.map