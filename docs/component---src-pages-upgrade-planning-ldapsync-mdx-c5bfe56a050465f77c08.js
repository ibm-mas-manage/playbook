(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),s=a.n(i),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,l=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),A=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),c=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(p.b)(o.Link,{className:j.link,to:""+c},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},i))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),N=a("Asxa"),T=a("OIbQ"),k=a.n(T),v=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:k.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=b.tabs,x=b.title,A=b.theme,j=b.description,N=b.keywords,T=b.date,k=Object(w.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,M=m?I.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",S=A||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:S,pageTitle:x,pageDescription:j,pageKeywords:N,titleType:u},Object(p.b)(g,{title:r?Object(p.b)(r,null):x,label:"label",tabs:m,theme:S}),m&&Object(p.b)(O,{title:x,slug:I,tabs:m,currentTab:M}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d}),Object(p.b)(v,{date:T})),Object(p.b)(f.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:M}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},JGja:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),["components"]),l={},c={_frontmatter:l},b=s.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maximo Application Suite (MAS) will synchronize users and groups from the LDAP server. There is no direct synchronization from LDAP to Manage."),Object(i.b)("li",{parentName:"ul"},"MAS will use WebSphere Liberty to synchronize with LDAP. Liberty provides a SCIM API for MAS to consume the data from LDAP repositories into MAS User Registry/IDP.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."))),Object(i.b)("li",{parentName:"ul"},"MAS to consume the data from LDAP repositories into MAS User Registry/IDP.\nSCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."),Object(i.b)("li",{parentName:"ul"},"Customers can configure SCIM on LDAP to map extra attributes and they will be passed as an extension to manage."),Object(i.b)("li",{parentName:"ul"},"The section tagged “extension” can include all extra attributes which are not part of default mapping."),Object(i.b)("li",{parentName:"ul"},"The schema attribute mapping can be customized using user exit, an automation script on user exit, or replacing the standard user exist with JSON Mapper user exit.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrklEQVQoz21R7StDURi/fxF/BlJ8kOKDfFELX0TjMykpSaKmKC9pk2bNSw2JjShZ8mFzudrdtbFhc5vde8/7vZ67SfPy69fpPL/z/M7znPNIZYuYFjFMDDQtjAnDlGPCyyYqlS0gbAitiJQTyhkTiBDGhWER6cPA6xFlaedhMaz49xXbth3HQYj0j4c6vIHO4YBnNAh+EIUQsGb0+7XLyXN1l1BbKpWRL6Qs7mUWtjW44jieC0azkYvHpr7V+nZfXbuvqXcFwtVIOnCkbh0XLlKHQ6Fm/9UUocI1z28mZzbupgPyQug2+2qoOVPR3ju9/gbPcqNnuW1gLf2s5wro6c14KVLdfJuLDc9GB2+fbyQL0cf8RypbAmbyJacCeNKdmg8eJYFyKkcZB9F27OrpRnx24qAn8XQtIcKcGtguHC7cvLisA2EDIYgVujpmlkF0MLpmEOC0yu9bmMAnydNo8owL4vxEtQWYwe/K7q/a7q+mComxSNf4fne6KFc6ErXdwfJV+V+zWkx4wy0j4VbtXf4Wa+GaYdaUc5h6LSkXJkZXWiyunZoEUSb+JHAwfgLgkRSe+rR+8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/a5df1/ldap.png",srcSet:["/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/7fc1e/ldap.png 288w","/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/a5df1/ldap.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"The MAS sync process will consume user and user group information from SCIM APIs and update the MAS user registry. The Manage user sync process will pull the data from MAS and pushes it to Manage using MIF."))}d.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-ldapsync-mdx-c5bfe56a050465f77c08.js.map