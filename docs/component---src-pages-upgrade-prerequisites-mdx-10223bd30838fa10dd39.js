(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),b=a("Wbzz"),l=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,l=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),o=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+o},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},i))))))},t}(r.a.Component),v=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,j=s.theme,h=s.description,k=s.keywords,w=Object(N.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,C=m?y.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",M=j||w;return Object(p.b)(o.a,{tabs:m,homepage:!1,theme:M,pageTitle:O,pageDescription:h,pageKeywords:k,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:M}),m&&Object(p.b)(T,{title:O,slug:y,tabs:m,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d})),Object(p.b)(g.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Lc2g:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),l={_frontmatter:b},o=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(o,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Maximo required to be at version 7612 or higher prior to MAS upgrade."),Object(i.b)("p",null,"Prepare OpenShift environment(s)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System requirements for Manage/EAM, IS, Add-ons and customizations (if any)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Refer to MAS and Manage documentation, determine the capacity needed and secure an OpenShift cluster for testing or development or production.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Red Hat OpenShift link: ",Object(i.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.5/welcome/index.html"},"OpenShift")),Object(i.b)("li",{parentName:"ul"},"Maximo Application Suite link: ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SSRHPA_current/appsuite/install/index.html"},"MAS")),Object(i.b)("li",{parentName:"ul"},"Capacity Planning link: ",Object(i.b)("a",{parentName:"li",href:"https://ibm.seismic.com/x5/doccenter.aspx?ContentId=6922bea5-57b9-448d-8e9f-c43af6fc9515#/doccenter/04a51f74-db09-43d5-a0f2-a39258a00912/doc/%252Fddb3146584-e399-417c-8fa7-f4b0d7325666%252Fddea8fdafc-d32c-548a-386c-a6c732ae2d1d%252FdfOTRiYmU4NTQtNWY4NC03Y2QyLWZjYWUtOGIxYmFmZjkyZThk%252CPT0%253D%252CUk9JL0Fzc2Vzc21lbnQvQ2FsY3VsYXRvcg%253D%253D%252Flf9eef74ab-16d7-4db3-9d1b-54849676a55c/grid/"},"Capacity Planning"),".")))))),Object(i.b)("p",null,"Configure OpenShift cluster based on the above requirements."))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-prerequisites-mdx-10223bd30838fa10dd39.js.map