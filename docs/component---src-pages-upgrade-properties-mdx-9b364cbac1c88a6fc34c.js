(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),x=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===r,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,i=n.subDirectory,s=o+"/edit/"+n.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===n,s=new RegExp(n+"/?(#.*)?$"),b=r.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},o))))))},t}(n.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),P=a.n(N),y=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(k.c,{className:P.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=c.tabs,g=c.title,j=c.theme,f=c.description,k=c.keywords,N=c.date,P=Object(w.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=I?r.pathname.replace(I,""):r.pathname,C=p?M.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",E=j||P;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:E,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:u},Object(m.b)(x,{title:n?Object(m.b)(n,null):g,label:"label",tabs:p,theme:E}),p&&Object(m.b)(T,{title:g,slug:M,tabs:p,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d}),Object(m.b)(y,{date:N})),Object(m.b)(O.a,{pageContext:t,location:r,slug:M,tabs:p,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FTWn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),s={},b={_frontmatter:s},c=i.a;function d(e){var t=e.components,a=Object(n.a)(e,l);return Object(o.b)(c,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The Maximo property (maximo.properties) file is no longer used in Manage. "),Object(o.b)("li",{parentName:"ul"},"The bootstrap properties such as database username and password, encryption keys are set through deployment MAS UI (or CR) as ConfigMap/Secret in the OpenShift. These properties are applied to all workload deployments."),Object(o.b)("li",{parentName:"ul"},"The workload/bundle level properties are applied to the specific server and set through MAS UI and stored as a ConfigMap in the OpenShift (see Configuration section for details)."),Object(o.b)("li",{parentName:"ul"},"Use the System Properties application to set the other properties. These properties are applied to all the workloads.")))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-properties-mdx-9b364cbac1c88a6fc34c.js.map