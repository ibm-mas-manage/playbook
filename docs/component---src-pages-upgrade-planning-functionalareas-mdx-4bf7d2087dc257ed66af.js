(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),b=l("NmYn"),r=l.n(b),i=l("Wbzz"),c=l("Xrax"),o=l("k4MR"),u=l("TSYQ"),d=l.n(u),s=l("QH2O"),p=l.n(s),m=l("qKvR"),O=function(e){var t,l=e.title,n=e.theme,a=e.tabs,b=void 0===a?[]:a;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},l)))))},j=l("BAC9"),g=function(e){var t=e.relativePagePath,l=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,a=l||n,b=a.baseUrl,r=a.subDirectory,c=b+"/edit/"+a.branch+r+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},x=l("FCXl"),h=l("dI71"),f=l("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,l=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],b=l.map((function(e){var t,l=r()(e,{lower:!0,strict:!0}),b=l===a,c=new RegExp(a+"/?(#.*)?$"),o=n.replace(c,l);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},b))))))},t}(a.a.Component),T=l("MjG9"),w=l("CzIb"),y=l("Asxa"),k=l("OIbQ"),P=l.n(k),I=function(e){var t=e.date,l=new Date(t);return t?Object(m.b)(y.c,{className:P.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",l.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,l=e.children,n=e.location,a=e.Title,b=t.frontmatter,u=void 0===b?{}:b,d=t.relativePagePath,s=t.titleType,p=u.tabs,j=u.title,h=u.theme,f=u.description,y=u.keywords,k=u.date,P=Object(w.a)().interiorTheme,N=Object(i.useStaticQuery)("2456312558").site.pathPrefix,A=N?n.pathname.replace(N,""):n.pathname,M=p?A.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",S=h||P;return Object(m.b)(o.a,{tabs:p,homepage:!1,theme:S,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:s},Object(m.b)(O,{title:a?Object(m.b)(a,null):j,label:"label",tabs:p,theme:S}),p&&Object(m.b)(v,{title:j,slug:A,tabs:p,currentTab:M}),Object(m.b)(T.a,{padded:!0},l,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(I,{date:k})),Object(m.b)(x.a,{pageContext:t,location:n,slug:A,tabs:p,currentTab:M}),Object(m.b)(c.a,null))}},BAC9:function(e,t,l){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,l){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KFlu:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return i})),l.d(t,"default",(function(){return u}));var n=l("wx14"),a=l("zLVn"),b=(l("q1tI"),l("7ljp")),r=l("013z"),i=(l("qKvR"),{}),c={_frontmatter:i},o=r.a;function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",null,"These are the functional areas detail."),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Functional Area"),Object(b.b)("th",null,"Detail")),Object(b.b)("tr",null,Object(b.b)("td",null,"Attached Docs"),Object(b.b)("td",null,Object(b.b)("pre",null,"Fully Supported."),Object(b.b)("pre",null,"File System"),Object(b.b)("pre",null,"   If using the file system mount, the same file system mount can be configured in MAS through volume mount in OpenShift. "),Object(b.b)("pre",null,"   No change is needed for the Manage declines configuration, if the mount point is same as before."),Object(b.b)("pre",null,"Object Storage(S3)"),Object(b.b)("pre",null,"   No change needed to bring attached documents."),Object(b.b)("pre",null,"   Object storage server public certificate may need to be imported."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Reporting"),Object(b.b)("td",null,Object(b.b)("pre",null,"BIRT supported."),Object(b.b)("pre",null,"Cognos will not be supported in the initial version(8.0)."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Industry Solutions/Add-ons"),Object(b.b)("td",null,Object(b.b)("pre",null,"All Industry Solutions/Add-ons will be supported."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Anywhere"),Object(b.b)("td",null,Object(b.b)("pre",null,"Updated Mobile Apps will be available for download."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Maximo Mobile"),Object(b.b)("td",null,Object(b.b)("pre",null,"All connected and disconnected functions in one application. Initial version delivers Assist, followed by Technician and Inspections."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Scheduler, Calibration, Linear"),Object(b.b)("td",null,Object(b.b)("pre",null,"Fully supported."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Migration Manager"),Object(b.b)("td",null,Object(b.b)("pre",null,"Fully supported."),Object(b.b)("pre",null,"All pending migration packages should be migrated prior to upgrade (prerequisite)."),Object(b.b)("pre",null,"Configuration options will be provided during deployment for persistent volume mount for file-based packages. "),Object(b.b)("pre",null,"Automation APIs will be available. Supports the automation pf package creation and deployment. "))),Object(b.b)("tr",null,Object(b.b)("td",null,"Multi Languages"),Object(b.b)("td",null,Object(b.b)("pre",null,"All languages(25) will be supported."))),Object(b.b)("tr",null,Object(b.b)("td",null,"SAP/Oracle Integration"),Object(b.b)("td",null,Object(b.b)("pre",null,"Fully Supported."))),Object(b.b)("tr",null,Object(b.b)("td",null,"Third Party Add-On"),Object(b.b)("td",null,Object(b.b)("pre",null,"Existing 3rd party changes will be moved over only if the changes can be extracted completely in the customization archive. ")))))}u.isMDXComponent=!0},OIbQ:function(e,t,l){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,l){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-functionalareas-mdx-4bf7d2087dc257ed66af.js.map