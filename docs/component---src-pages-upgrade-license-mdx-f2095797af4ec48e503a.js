(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,c=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),T=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),o=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(p.b)(b.Link,{className:T.link,to:""+o},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:T.list},r))))))},t}(i.a.Component),h=a("MjG9"),v=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),k=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,T=s.description,w=s.keywords,P=s.date,k=Object(v.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,A=I?n.pathname.replace(I,""):n.pathname,L=m?A.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",M=f||k;return Object(p.b)(o.a,{tabs:m,homepage:!1,theme:M,pageTitle:O,pageDescription:T,pageKeywords:w,titleType:u},Object(p.b)(x,{title:i?Object(p.b)(i,null):O,label:"label",tabs:m,theme:M}),m&&Object(p.b)(N,{title:O,slug:A,tabs:m,currentTab:L}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(y,{date:P})),Object(p.b)(g.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:L}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},HrSl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},o=l.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Subscription Term or Perpetual License is used via App Points (similar to tokens) in MAS."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Contact IBM account team regarding App Points and MAS license file."),Object(r.b)("li",{parentName:"ul"},"Customer buys a pool of App Points."),Object(r.b)("li",{parentName:"ul"},"The same App Points can be applied to any application in MAS."),Object(r.b)("li",{parentName:"ul"},"Administering License and Apppoints: ",Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/mas84/8.4.0?topic=administering-license-apppoints"},"https://www.ibm.com/docs/en/mas84/8.4.0?topic=administering-license-apppoints")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There are four user types/entitlements available: "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Limited"),Object(r.b)("li",{parentName:"ul"},"Base"),Object(r.b)("li",{parentName:"ul"},"Premium"),Object(r.b)("li",{parentName:"ul"},"Self Service")))))}s.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-license-mdx-f2095797af4ec48e503a.js.map