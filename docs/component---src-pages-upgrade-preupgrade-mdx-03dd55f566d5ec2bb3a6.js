(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),b=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(p.b)(l.Link,{className:x.link,to:""+b},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:x.list},r))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb"),T=a("Asxa"),v=a("OIbQ"),P=a.n(v),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:P.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=c.tabs,h=c.title,j=c.theme,x=c.description,T=c.keywords,v=c.date,P=Object(y.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=I?n.pathname.replace(I,""):n.pathname,A=m?M.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",S=j||P;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:S,pageTitle:h,pageDescription:x,pageKeywords:T,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):h,label:"label",tabs:m,theme:S}),m&&Object(p.b)(N,{title:h,slug:M,tabs:m,currentTab:A}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(k,{date:v})),Object(p.b)(f.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:A}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},H3Ey:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),s={},b={_frontmatter:s},c=o.a;function d(e){var t=e.components,a=Object(i.a)(e,l);return Object(r.b)(c,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Pre-Upgrade Considerations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/mas84/8.4.0?topic=administering-configuring-authentication"},"Authentication"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Local Identity Provider (username/password registered in Mongo DB) will be used for authentication by default. "),Object(r.b)("li",{parentName:"ul"},"LDAP or SAML can be configured for authentication before or after installing Manage applications using the ",Object(r.b)("inlineCode",{parentName:"li"},"Configuration")," page in MAS admin dashboard.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Only LDAP registries supported by ",Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/was-liberty/base?topic=SSEQTP_liberty/com.ibm.websphere.liberty.autogen.nd.doc/ae/rwlp_feature_ldapRegistry-3.0.html"},"Liberty")," runtime can be used."),Object(r.b)("li",{parentName:"ul"},"If you are currently using LDAP or SAML, your existing configuration can be used in MAS.",Object(r.b)("p",null)))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/maximo-manage/8.0.0?topic=security-encryption"},"Encryption and Security"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you are using custom encryption keys for CRYPTO/CRYTOX attributes then the custom keys need to be provided during the Manage application installation.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In Maximo 7.6, custom encryption properties are specified in the ",Object(r.b)("inlineCode",{parentName:"li"},"maximo.properties")," file. After the Manage application installation, the keys are stored as a secret (",Object(r.b)("inlineCode",{parentName:"li"},"{instance_id}-manage-encryptionsecret"),") in the Manage OpenShift project. The keys should also be saved in a secured vault. If the keys are lost, the database cannot be used.",Object(r.b)("p",null)))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/mas84/8.4.0?topic=administering-configuring-smtp"},"SMTP Configuration"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SMTP configuration will be retained in the database during the upgrade. It will be used by Manage for sending emails as before."),Object(r.b)("li",{parentName:"ul"},"MAS admin dashboard also provides SMTP configuration. This configuration will be used for sending welcome emails and user password emails.",Object(r.b)("p",null)))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Industry Solution/Add-ons"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"All the Industry Solutions/Add-ons need to be manually selected that are currently installed in your database to be upgraded. This will be fixed in the future release. All the Industry Solutions/Add-ons will be pre-selected based on the existing environment.",Object(r.b)("p",null)))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/maximo-manage/8.0.0?topic=product-administering-configuring-attached-documents"},"Attached Docs"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If using Cloud Object Storage(COS), no change is needed. Your existing credentials will be retained. "),Object(r.b)("li",{parentName:"ul"},"If using file system such as NFS:      ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The persistent storage (specifically storage software and deployments, storage provisioner, storage classes, and persistent volumes) need to be set up. "),Object(r.b)("li",{parentName:"ul"},"You need to specify the required storage configuration (volume name, storage class, size, and mount path) from MAS admin dashboard (or CR) during the application deployment."),Object(r.b)("li",{parentName:"ul"},"The Manage provides a Persistent Claim to claim this storage configuration and set up shared folders inside Manage pods accordingly.  "),Object(r.b)("li",{parentName:"ul"},"After upgrade, the same mount path can be set up as the doclinks directory in the current system and no configuration change will be needed for the doclinks configuration. If the mount path is different then the doclinks configuration needs to be updated to point to the new path. ")))))))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-preupgrade-mdx-03dd55f566d5ec2bb3a6.js.map