(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),T=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(x.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=o,t),T.listItem)},Object(x.b)(b.Link,{className:T.link,to:""+l},e))}));return Object(x.b)("div",{className:T.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:T.list},o))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),P=a("Asxa"),k=a("OIbQ"),N=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(P.c,{className:N.a.row},Object(x.b)(P.a,null,Object(x.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,T=s.description,P=s.keywords,k=s.date,N=Object(w.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,H=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",M=f||N;return Object(x.b)(l.a,{tabs:m,homepage:!1,theme:M,pageTitle:g,pageDescription:T,pageKeywords:P,titleType:u},Object(x.b)(p,{title:r?Object(x.b)(r,null):g,label:"label",tabs:m,theme:M}),m&&Object(x.b)(h,{title:g,slug:E,tabs:m,currentTab:H}),Object(x.b)(v.a,{padded:!0},a,Object(x.b)(O,{relativePagePath:d}),Object(x.b)(y,{date:k})),Object(x.b)(j.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:H}),Object(x.b)(c.a,null))}},"4Mad":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},l=i.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Prometheus and Grafana can be configured for Monitoring."))}s.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-monitoring-mdx-d62ba8e02bf8a111b2a4.js.map