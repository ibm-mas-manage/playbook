(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,o=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,o=new RegExp(r+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),N=a("MjG9"),v=a("CzIb"),P=a("Asxa"),k=a("OIbQ"),w=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:w.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,P=s.keywords,k=s.date,w=Object(v.a)().interiorTheme,M=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=M?n.pathname.replace(M,""):n.pathname,C=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",S=f||w;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:S,pageTitle:O,pageDescription:h,pageKeywords:P,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:S}),m&&Object(p.b)(T,{title:O,slug:I,tabs:m,currentTab:C}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u}),Object(p.b)(y,{date:k})),Object(p.b)(j.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:C}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Y9dH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),o={_frontmatter:b},c=l.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Configuration before upgrade"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stop transactions from Maximo to SAP"),Object(i.b)("li",{parentName:"ul"},"Process all transactions in the Queues."),Object(i.b)("li",{parentName:"ul"},"Resolve any SAP integration errors in Maximo"),Object(i.b)("li",{parentName:"ul"},"Disable the External System SAP2005"),Object(i.b)("li",{parentName:"ul"},"Stop the MX7612 Maximo server"),Object(i.b)("li",{parentName:"ul"},"Backup Maximo 7612 db.")),Object(i.b)("h2",null,"Configuration after upgrade"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define the Message provider and queues  (Kafka or JMS)"),Object(i.b)("li",{parentName:"ul"},"Assign queues to External System SAP2005"),Object(i.b)("li",{parentName:"ul"},"Configure KAFKA Cron task (If using Kafka, update the settings according to MIF guide)"),Object(i.b)("li",{parentName:"ul"},"Disable JMSQSEQCONSUMER Cron task (If using Kafka)"),Object(i.b)("li",{parentName:"ul"},"Generate APIKey for integration user sapadmin"),Object(i.b)("li",{parentName:"ul"},"Change connection parameters in SAP PO / Maximo HTTP Channel"),Object(i.b)("li",{parentName:"ul"},"Enable external system SAP2005")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-sapconnector-mdx-a8c68ef773131d2e24b8.js.map