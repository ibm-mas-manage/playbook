(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,o=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,o=new RegExp(r+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:u()((t={},t[T.selectedItem]=i,t),T.listItem)},Object(p.b)(b.Link,{className:T.link,to:""+c},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:T.list},i))))))},t}(r.a.Component),h=a("MjG9"),N=a("CzIb"),P=a("Asxa"),w=a("OIbQ"),k=a.n(w),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:k.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=s.tabs,O=s.title,f=s.theme,T=s.description,P=s.keywords,w=s.date,k=Object(N.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,z=m?M.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",A=f||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:A,pageTitle:O,pageDescription:T,pageKeywords:P,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:A}),m&&Object(p.b)(v,{title:O,slug:M,tabs:m,currentTab:z}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u}),Object(p.b)(y,{date:w})),Object(p.b)(g.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:z}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xFBp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),o={},c={_frontmatter:o},s=l.a;function u(e){var t=e.components,a=Object(r.a)(e,b);return Object(i.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("font",{size:"3"}," Subscription Term or Perpetual License is used via App Points (similar to tokens) in MAS."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Contact IBM account team regarding App Points and MAS license file."),Object(i.b)("li",{parentName:"ul"},"Customer buys a pool of App Points."),Object(i.b)("li",{parentName:"ul"},"The same App Points can be applied to any application in MAS.")),Object(i.b)("font",{size:"3"}," There are four user types/entitlements available:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Limited"),Object(i.b)("li",{parentName:"ul"},"Base"),Object(i.b)("li",{parentName:"ul"},"Premium"),Object(i.b)("li",{parentName:"ul"},"Self Service")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-license-mdx-205598569607bbd79934.js.map