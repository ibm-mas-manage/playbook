(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),o=a.n(l),b=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),m=a.n(d),s=a("QH2O"),p=a.n(s),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(u.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=l.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,o=i.subDirectory,r=l+"/edit/"+i.branch+o+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+x.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:x.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===i,r=new RegExp(i+"/?(#.*)?$"),c=n.replace(r,a);return Object(u.b)("li",{key:e,className:m()((t={},t[j.selectedItem]=l,t),j.listItem)},Object(u.b)(b.Link,{className:j.link,to:""+c},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:j.list},l))))))},t}(i.a.Component),A=a("MjG9"),y=a("CzIb"),v=a("Asxa"),w=a("OIbQ"),T=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,d=void 0===l?{}:l,m=t.relativePagePath,s=t.titleType,p=d.tabs,x=d.title,O=d.theme,j=d.description,v=d.keywords,w=d.date,T=Object(y.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,I=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",z=O||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:z,pageTitle:x,pageDescription:j,pageKeywords:v,titleType:s},Object(u.b)(g,{title:i?Object(u.b)(i,null):x,label:"label",tabs:p,theme:z}),p&&Object(u.b)(N,{title:x,slug:P,tabs:p,currentTab:I}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:m}),Object(u.b)(k,{date:w})),Object(u.b)(f.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:I}),Object(u.b)(r.a,null))}},"25hl":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),["components"]),r={},c={_frontmatter:r},d=o.a;function m(e){var t=e.components,a=Object(i.a)(e,b);return Object(l.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Add third-party JAR files to the Manage lib folder in the Customization Archive.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Use the following steps to add a third-party JAR file name to the Manifest file, if the deployment has an ",Object(l.b)("inlineCode",{parentName:"p"},"all")," or ",Object(l.b)("inlineCode",{parentName:"p"},"mea")," bundle server type:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Follow the ",Object(l.b)("a",{parentName:"li",href:"/maximo/manage-playbook/upgrade/manageadmin"},"Manageadmin Docker Image")," page to pull the Manage code or go to the admin pod (pod name containing maxinst) terminal and get the file."),Object(l.b)("li",{parentName:"ul"},"Go to ",Object(l.b)("inlineCode",{parentName:"li"},"/opt/IBM/SMP/maximo/deployment/was-liberty-default")," deployment folder.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Get the ",Object(l.b)("inlineCode",{parentName:"li"},"maximo-all.xml")," file if the deployment is ",Object(l.b)("inlineCode",{parentName:"li"},"all")," bundle server type. In maximo-all.xml, go to the ",Object(l.b)("inlineCode",{parentName:"li"},"maximo.businessobjectclasspath")," property name and add the jar file name in the path. When deployed it will update the classpath in the Manifest file."),Object(l.b)("li",{parentName:"ul"},"Get the ",Object(l.b)("inlineCode",{parentName:"li"},"buildmaximomea-ear.xml")," file if the deployment has a ",Object(l.b)("inlineCode",{parentName:"li"},"mea")," bundle server type and update the classpath."))),Object(l.b)("li",{parentName:"ul"},"Copy the updated file in the Customization Archive folder in the same path and archive (zip) the folder."),Object(l.b)("li",{parentName:"ul"},"For example,\n",Object(l.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAkElEQVQI1z2NiwrCMAxF9/9f5icoCKOgVbe5TftO665JYAscTnqbNt3N3jHPE5xz8D6ol2XhPjOJ8ZqFEJioMzlnxBjVKSXu05F16/zA62lBVLEXlYjP+4TveuZBOnJ55HjBtm0opShSchakOtNf0PdXGGMwDAPGcdKtOVrkNKG1H1qt7IbKJiK1IB9Kvt+J/97k6D1WkTgdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/c80913d2a736ac4553f7fcdebd9545bd/3cbba/maximoallcustom.png",srcSet:["/maximo/manage-playbook/static/c80913d2a736ac4553f7fcdebd9545bd/7fc1e/maximoallcustom.png 288w","/maximo/manage-playbook/static/c80913d2a736ac4553f7fcdebd9545bd/a5df1/maximoallcustom.png 576w","/maximo/manage-playbook/static/c80913d2a736ac4553f7fcdebd9545bd/3cbba/maximoallcustom.png 1152w","/maximo/manage-playbook/static/c80913d2a736ac4553f7fcdebd9545bd/c49a8/maximoallcustom.png 1564w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Deploy the Customization Archive using the MAS configuration dashboard and activate the changes.")))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-addjar-mdx-e29ed9bbf79814226f42.js.map