(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),b=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},x=a("FCXl"),j=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(b.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},i))))))},t}(r.a.Component),v=a("MjG9"),N=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),M=a.n(y),k=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:M.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:M.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,p=s.tabs,O=s.title,j=s.theme,f=s.description,w=s.keywords,y=s.date,M=Object(N.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,S=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",E=j||M;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:E,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:d},Object(m.b)(g,{title:r?Object(m.b)(r,null):O,label:"label",tabs:p,theme:E}),p&&Object(m.b)(T,{title:O,slug:P,tabs:p,currentTab:S}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:u}),Object(m.b)(k,{date:y})),Object(m.b)(x.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:S}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sxtX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),l={_frontmatter:b},c=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section discusses a summary of the change. Some of these topics are covered in more detail in this document further down. "),Object(i.b)("h2",null,"OVERALL CHANGES TO EAM"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Data:")," There are no significant data model changes. Your current EAM database will be upgraded to the Manage 8.0 database."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Applications:")," Changes to authentication and user management.\nIn Maximo 7.6, the authentication is configured in Maximo EAM or application server level (For example, WebSphere ND). In Manage, the authentication is configured at the MAS level. A section further down in this document will discuss security changes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Infrastructure:")," The deployment is based on Red Hat OpenShift."),Object(i.b)("h2",null,"Technology Changes"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OpenShift Operators:")," The installation, configuration, deployment, the upgrade is performed by the OpenShift operator."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Security & User Management:")," The authentication and user management is configured in MAS. All users will be synchronized into Manage from MAS."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Application Server:")," WebSphere Liberty will be used as a runtime to run the code in a containerized environment in Red Hat OpenShift. WebSphere ND and WebLogic are not supported. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Integration:")," RMI is replaced by REST API."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Message Queue:")," If you are using SI Bus, migrate to Kafka or any other supported JMS provider. "),Object(i.b)("h2",null,"New Features available"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Modernized User Experience:")," New Skin & Navigation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mobile:")," New Mobile experience "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Serviceability:")," Improved logging options (Elasticsearch, Fluentd & Kibana) & monitoring options (Prometheus & Grafana) "))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-eamtomanage-mdx-f208cd518b37824fc591.js.map