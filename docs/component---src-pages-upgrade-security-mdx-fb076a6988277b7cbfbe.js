(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),m=a("QH2O"),p=a.n(m),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,l=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},y=a("FCXl"),A=a("dI71"),O=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(d.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(d.b)(o.Link,{className:O.link,to:""+c},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:O.list},r))))))},t}(i.a.Component),M=a("MjG9"),w=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),S=a.n(x),T=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(N.c,{className:S.a.row},Object(d.b)(N.a,null,Object(d.b)("div",{className:S.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,m=t.titleType,p=b.tabs,g=b.title,A=b.theme,O=b.description,N=b.keywords,x=b.date,S=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,v=I?n.pathname.replace(I,""):n.pathname,P=p?v.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",z=A||S;return Object(d.b)(c.a,{tabs:p,homepage:!1,theme:z,pageTitle:g,pageDescription:O,pageKeywords:N,titleType:m},Object(d.b)(h,{title:i?Object(d.b)(i,null):g,label:"label",tabs:p,theme:z}),p&&Object(d.b)(f,{title:g,slug:v,tabs:p,currentTab:P}),Object(d.b)(M.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u}),Object(d.b)(T,{date:x})),Object(d.b)(y.a,{pageContext:t,location:n,slug:v,tabs:p,currentTab:P}),Object(d.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wBWY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),["components"]),l={},c={_frontmatter:l},b=s.a;function u(e){var t=e.components,a=Object(i.a)(e,o);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Authentication is managed by ",Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/mas84/8.4.0?topic=administering-configuring-authentication"},"MAS Identity Provider"),". The following Identity Providers(IDP) are supported:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Local IDP (username/password registered in Mongo DB)"),Object(r.b)("li",{parentName:"ul"},"LDAP"),Object(r.b)("li",{parentName:"ul"},"SAML")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All headless interactions (Integration, REST) require API Key for authentication.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LDAP integration is managed by MAS.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The existing Maximo EAM LDAP/VMM synchronization is not supported and is replaced by the synchronization process in MAS. The details are in the LDAP User Synchronization section."),Object(r.b)("li",{parentName:"ul"},"MAS will use WebSphere Liberty to synchronize with LDAP.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Liberty provides a SCIM API for MAS to consume the data from LDAP repositories into the MAS user registry. MAS will push users/groups to Manage from the MAS repository.")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Existing Maximo EAM users are synchronized with MAS User Registry during the upgrade. The details are in the Users Synchronization section.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New users can only be created in MAS and will synchronize to Manage. If you currently have integration to create or update users in Maximo, you will need to integrate users to MAS, not Manage(Maximo)."))),Object(r.b)("h2",null,"User Synchronization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When a user is created and is assigned the Manage role, it gets synchronized into Manage. The Manage application user sync process pulls the data from MAS IDP/User Registry and pushes it to Manage.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a MAS user has the ADMIN role for the application Manage, it will be assigned to one or more default admin security groups in Manage, which is defined in the system property “mxe.defaultgroups.manage.admin”. The initial value of this property is the same as the maxvar ADMINGROUP, but it is can be changed to a different desired group. If the system property is set to null, then user will not be assigned to any default admin security group.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a user has the NO_ACCESS role or is deleted in MAS, the user becomes INACTIVE in the Manage application.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The user synchronization process from MAS to Manage utilizes the Manage Integration Framework (MIF). It uses integration’s Enterprise Service to post data to Manage. If a MAS user is assigned the Manage role and has a sync status of PENDING or DELETE_PENDING, the user sync will process it and upon successful synchronization change the sync status to SYNCED."))),Object(r.b)("h3",null,"Sample of inbound message from MAS"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{   \n  "appId": "manage",\n  "users": [\n    {\n      _id": "johnjoe",\n      "username": "johndoe",\n      "emails": [\n        {\n          "value": "john.doe@example.com",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "phoneNumbers": [\n        {\n          "value": "555-555-5555",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "addresses": [\n        {\n          "streetAddress": "100 Universal City Plaza",\n          "locality": "Hollywood",\n          "region": "CA",\n          "postalCode": 91608,\n          "country": "USA",\n          "formatted": "100 Universal City Plaza\\\\nHollywood, CA 91608 USA",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "givenName": "John",\n      "familyName": "Doe",\n      "displayName": "John Doe",\n      "title": "Architect",\n      "extension": {\n        "additionalProp1": {}\n      },\n      "issuer": "local|ldap|saml",\n      "permissions": {\n        "systemAdmin": true,\n        "userAdmin": true\n      },\n      "entitlement": {\n        "application": "BASE",\n        "admin": "ADMIN_LIMITED"\n      },\n      "preferences": {\n        "locale": {\n          "language": "en",\n          "country": "GB"\n        },\n        "timezone": "Africa/Abidjan"\n      }\n    }\n  ]\n}\n')),Object(r.b)("h3",null,"Sample of output from default user exit"),Object(r.b)("p",null,"This is a result in Manage object structures after mapping masuser.json with the OOTB user exit.  This can serve as the input to further customized mapping if desired."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "addressline1": "100 Universal City Plaza",\n   "city": "Hollywood",\n   "country": "USA",\n   "displayname": "Joe Smith",\n   "email": [\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith5@us.ibm.com",\n         "isprimary": 1,\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith51@gmail.com",\n         "isprimary": 0,\n         "type": "work"\n      }\n   ],\n   "extension": {\n      "costCenter": "4130",\n      "employeeNumber": "701984"\n   },\n   "firstname": "Joe",\n   "language": "EN",\n   "lastname": "Smith",\n   "locale": "en_US",\n   "maxuser": [\n      {\n         "groupuser": [\n            {\n               "_action": "AddChange",\n               "groupname": "MAXADMIN"\n            },\n            {\n               "_action": "AddChange",\n               "groupname": "TOOLMGR"\n            }\n         ],\n         "inactivesites": 1,\n         "loginid": "joesmith5",\n         "statusdate": "2020-10-30T15:43:44-04:00",\n         "userid": "joesmith5"\n      }\n   ],\n   "personid": "joesmith5",\n   "phone": [\n      {\n         "_action": "AddChange",\n         "isprimary": 1,\n         "phonenum": "555-555-5555",\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "isprimary": 0,\n         "phonenum": "555-555-4444",\n         "type": "home"\n      }\n   ],\n   "postalcode": "91608",\n   "stateprovince": "CA",\n   "statusdate": "2020-10-30T15:43:44-04:00",\n   "title": "Supervisor"\n}\n')),Object(r.b)("h2",null,"LDAP Synchronization"),Object(r.b)("p",null,"The section tagged “extension” as shown in the samples includes all extra attributes which are not part of default mapping. The default mapping can be customized by creating a Java user exit or automation script or JSON Mapper."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maximo Application Suite (MAS) will synchronize users and groups from the LDAP server. There is no direct synchronization from LDAP to Manage."),Object(r.b)("li",{parentName:"ul"},"MAS will use WebSphere Liberty to synchronize with LDAP. Liberty provides a SCIM API for MAS to consume the data from LDAP repositories into MAS User Registry/IDP.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."))),Object(r.b)("li",{parentName:"ul"},"MAS to consume the data from LDAP repositories into MAS User Registry/IDP."),Object(r.b)("li",{parentName:"ul"},"SCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."),Object(r.b)("li",{parentName:"ul"},"The section tagged “extension” can include all extra attributes which are not part of default mapping."),Object(r.b)("li",{parentName:"ul"},"The schema attribute mapping can be customized using user exit, an automation script on user exit, or replacing the standard user exist with JSON Mapper user exit.")),Object(r.b)("h2",null,"Flow"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User configures SCIM User Sync from MAS UI"),Object(r.b)("li",{parentName:"ul"},"Backend API will create a ScimCfg CR and secret"),Object(r.b)("li",{parentName:"ul"},"TrustManager operator will add LDAP Server certificate to the truststore"),Object(r.b)("li",{parentName:"ul"},"SCIM operator will deploy liberty server and the k8s cronjob"),Object(r.b)("li",{parentName:"ul"},"Cron job will get Users from Liberty server and store it in MAS User Registry (mongo db)")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"570px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABtElEQVQoz3VSy0sCQRjff6hTt25egjoaBUEdKvLSpaxDxw4FkQiBUEZaHVISyUKhBwq9LC8SFFGmq6U9bLd117ad2cfszjbrmnioH9/MN98333uGEiWZrUkfnFTlJE4AGtIJyYr29FYrVji6wpXfeaIxDAMZOsamAHiavee+WSgj6o0RliMPvuijJ/wQOsybDXzyYvd40DEa7Bpa63dvfwNZRYZMYuhm4i6wmBwPZz1QUaiXquCLlbaOXvzxcui4uH9e2Tx8jiQLjrGNzsH1jj6/czKUSJcXQznvTi6YKAeuFmbjTt+pW5Ih9coIK7v51b2CL5qPpmgJqlDRK1VheDYyMLPTNxV2ze3WRYh0rCKkIzOVi8wfjezdrKqaTgGosjxgaoC0zX9Bu2xSYJXlD9KF40yR4eqkY/MXGGNZA4RbzmSZbSAjITAMi2VzwnVeaIn2LcZNQdEQcUaNcE1YFqa1i3Lt/PEsQ18CTWwpmyEa5z8yW3mwVWT8NuA9mVhKuS7oeEvZjv+cLQ0ZyVSsZzrWe0bv/+sMGs9n/w2brKnq+FNk0vRBppSsg7o96nYbYgIV7QeHQxG5Rq7LWgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/3f9f548f1a57ce2fec65f89541cd72e1/2b0be/ldap.png",srcSet:["/playbook/static/3f9f548f1a57ce2fec65f89541cd72e1/7fc1e/ldap.png 288w","/playbook/static/3f9f548f1a57ce2fec65f89541cd72e1/2b0be/ldap.png 570w"],sizes:"(max-width: 570px) 100vw, 570px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null),"The MAS sync process will consume user and user group information from SCIM APIs and update the MAS user registry. The Manage user sync process will pull the data from MAS and pushes it to Manage using MIF.",Object(r.b)("h2",null,"Manage Group Synchronization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User Groups are synchronized into Manage from MAS."),Object(r.b)("li",{parentName:"ul"},"Users will be added in the group only if they are valid users in Manage."),Object(r.b)("li",{parentName:"ul"},"The existing users in a group will be replaced by the users in the payload same as LDAP group synchronization.")),Object(r.b)("h2",null,"Bulk Import Users to MAS (Upgrade)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maximo users and their profiles (language, timezone, and locale) will be imported to MAS during the upgrade.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A one-time cron task instance will be created during the upgrade to import users to MAS."))),Object(r.b)("li",{parentName:"ul"},"Welcome emails will be sent to the users with a password for their account. If the user email is not set, email will be sent to the system administrator email account.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The system administrator email will be set up from MAS admin dashboard."),Object(r.b)("li",{parentName:"ul"},"SMTP can be configured in MAS prior to upgrade to receive Welcome emails and emails with user password."),Object(r.b)("li",{parentName:"ul"},"The user password can be reset by the System Administrator.")))),Object(r.b)("p",null,"Welcome Email Templates:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'To: ${email}\nTitle: Welcome to IBM Maximo Application Suite\nBody: Welcome to IBM Maximo Application Suite, a new account has been registered to ${email} in <a href="${masHomeUrl}">IBM Maximo Application Suite (${instanceName})</a>.\n\nUsername: ${username}\n\nYou will receive your password in a seperate e-mail (only show this if emailPassword has been set)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'To: ${email}\nTitle: Your new IBM Maximo Application Suite password\nBody: Welcome to <a href="${masHomeUrl}">IBM Maximo Application Suite (${instanceName})</a>. your new password is below.\n\nPassword: ${password}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-security-mdx-fb076a6988277b7cbfbe.js.map