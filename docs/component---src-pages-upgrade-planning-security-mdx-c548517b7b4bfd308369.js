(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),b=a.n(u),p=a("QH2O"),m=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,l=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),f=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(d.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},r))))))},t}(i.a.Component),M=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,u=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,m=u.tabs,g=u.title,j=u.theme,f=u.description,w=u.keywords,S=Object(x.a)().interiorTheme,N=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=N?n.pathname.replace(N,""):n.pathname,T=m?I.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",P=j||S;return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:P,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:p},Object(d.b)(h,{title:i?Object(d.b)(i,null):g,label:"label",tabs:m,theme:P}),m&&Object(d.b)(O,{title:g,slug:I,tabs:m,currentTab:T}),Object(d.b)(M.a,{padded:!0},a,Object(d.b)(y,{relativePagePath:b})),Object(d.b)(A.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:T}),Object(d.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},SxLl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},c=s.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("font",{size:"3"}," The authentication is managed by MAS Identity Provider (IDP)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For all MAS based applications, the authentication is based on OpenID Connect (OIDC) with a MAS specific user registry."),Object(r.b)("li",{parentName:"ul"},"The authentication via LDAP bind with MAS specific user registry is supported."),Object(r.b)("li",{parentName:"ul"},"In the case of an externally managed IDP, MAS will communicate with that IDP using supported authentication protocols (for example, SAML) to complete the authentication process.")),Object(r.b)("font",{size:"3"},"All headless interactions (Integration, REST) require API Key for authentication."),Object(r.b)("p",null),Object(r.b)("font",{size:"3"}," LDAP integration is supported by MAS."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The existing Maximo EAM LDAP/VMM synchronization is not supported and is replaced by the synchronization process in MAS. The details are in the LDAP User Synchronization section."),Object(r.b)("li",{parentName:"ul"},"MAS will use WebSphere Liberty to synchronize with LDAP.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Liberty provides a SCIM API for MAS to consume the data from LDAP repositories into the MAS user registry. MAS will push users/groups to Manage from the MAS repository.")))),Object(r.b)("font",{size:"3"},"Existing Maximo EAM users are synchronized with MAS User Registry during the upgrade. The details are in the Users Synchronization section."),Object(r.b)("p",null),Object(r.b)("font",{size:"3"},"New users can only be created in MAS and will synchronize to Manage. If you currently have integration to create or update users in Maximo, you will need to integrate users to MAS, not Manage(Maximo)."),Object(r.b)("h2",null,"User Synchronization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When a user is created and is assigned the Manage role, it gets synchronized into Manage. The Manage application user sync process pulls the data from MAS IDP/User Registry and pushes it to Manage.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a MAS user has the ADMIN role for the application Manage, it will be assigned to one or more default admin security groups in Manage, which is defined in the system property “mxe.defaultgroups.manage.admin”. The initial value of this property is the same as the maxvar ADMINGROUP, but it is can be changed to a different desired group. If the system property is set to null, then user will not be assigned to any default admin security group.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a user has the NO_ACCESS role or is deleted in MAS, the user becomes INACTIVE in the Manage application.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The user synchronization process from MAS to Manage utilizes the Manage Integration Framework (MIF). It uses integration’s Enterprise Service to post data to Manage. If a MAS user is assigned the Manage role and has a sync status of PENDING or DELETE_PENDING, the user sync will process it and upon successful synchronization change the sync status to SYNCED."))),Object(r.b)("h3",null,"Sample of inbound message from MAS"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{   \n  "appId": "manage",\n  "users": [\n    {\n      _id": "johnjoe",\n      "username": "johndoe",\n      "emails": [\n        {\n          "value": "john.doe@example.com",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "phoneNumbers": [\n        {\n          "value": "555-555-5555",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "addresses": [\n        {\n          "streetAddress": "100 Universal City Plaza",\n          "locality": "Hollywood",\n          "region": "CA",\n          "postalCode": 91608,\n          "country": "USA",\n          "formatted": "100 Universal City Plaza\\\\nHollywood, CA 91608 USA",\n          "type": "work",\n          "primary": true\n        }\n      ],\n      "givenName": "John",\n      "familyName": "Doe",\n      "displayName": "John Doe",\n      "title": "Architect",\n      "extension": {\n        "additionalProp1": {}\n      },\n      "issuer": "local|ldap|saml",\n      "permissions": {\n        "systemAdmin": true,\n        "userAdmin": true\n      },\n      "entitlement": {\n        "application": "BASE",\n        "admin": "ADMIN_LIMITED"\n      },\n      "preferences": {\n        "locale": {\n          "language": "en",\n          "country": "GB"\n        },\n        "timezone": "Africa/Abidjan"\n      }\n    }\n  ]\n}\n')),Object(r.b)("h3",null,"Sample of output from default user exit"),Object(r.b)("p",null,"This is a result in Manage object structures after mapping masuser.json with the OOTB user exit.  This can serve as the input to further customized mapping if desired."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "addressline1": "100 Universal City Plaza",\n   "city": "Hollywood",\n   "country": "USA",\n   "displayname": "Joe Smith",\n   "email": [\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith5@us.ibm.com",\n         "isprimary": 1,\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith51@gmail.com",\n         "isprimary": 0,\n         "type": "work"\n      }\n   ],\n   "extension": {\n      "costCenter": "4130",\n      "employeeNumber": "701984"\n   },\n   "firstname": "Joe",\n   "language": "EN",\n   "lastname": "Smith",\n   "locale": "en_US",\n   "maxuser": [\n      {\n         "groupuser": [\n            {\n               "_action": "AddChange",\n               "groupname": "MAXADMIN"\n            },\n            {\n               "_action": "AddChange",\n               "groupname": "TOOLMGR"\n            }\n         ],\n         "inactivesites": 1,\n         "loginid": "joesmith5",\n         "statusdate": "2020-10-30T15:43:44-04:00",\n         "userid": "joesmith5"\n      }\n   ],\n   "personid": "joesmith5",\n   "phone": [\n      {\n         "_action": "AddChange",\n         "isprimary": 1,\n         "phonenum": "555-555-5555",\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "isprimary": 0,\n         "phonenum": "555-555-4444",\n         "type": "home"\n      }\n   ],\n   "postalcode": "91608",\n   "stateprovince": "CA",\n   "statusdate": "2020-10-30T15:43:44-04:00",\n   "title": "Supervisor"\n}\n')),Object(r.b)("h2",null,"LDAP Synchronization"),Object(r.b)("p",null,"The section tagged “extension” as shown in the samples includes all extra attributes which are not part of default mapping. The default mapping can be customized by creating a Java user exit or automation script or JSON Mapper."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maximo Application Suite (MAS) will synchronize users and groups from the LDAP server. There is no direct synchronization from LDAP to Manage."),Object(r.b)("li",{parentName:"ul"},"MAS will use WebSphere Liberty to synchronize with LDAP. Liberty provides a SCIM API for MAS to consume the data from LDAP repositories into MAS User Registry/IDP.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."))),Object(r.b)("li",{parentName:"ul"},"MAS to consume the data from LDAP repositories into MAS User Registry/IDP.\nSCIM defines the resource (Users/Groups) schema as well as the REST(CRUD) APIs to manage the resources."),Object(r.b)("li",{parentName:"ul"},"Customers can configure SCIM on LDAP to map extra attributes and they will be passed as an extension to manage."),Object(r.b)("li",{parentName:"ul"},"The section tagged “extension” can include all extra attributes which are not part of default mapping."),Object(r.b)("li",{parentName:"ul"},"The schema attribute mapping can be customized using user exit, an automation script on user exit, or replacing the standard user exist with JSON Mapper user exit.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrklEQVQoz21R7StDURi/fxF/BlJ8kOKDfFELX0TjMykpSaKmKC9pk2bNSw2JjShZ8mFzudrdtbFhc5vde8/7vZ67SfPy69fpPL/z/M7znPNIZYuYFjFMDDQtjAnDlGPCyyYqlS0gbAitiJQTyhkTiBDGhWER6cPA6xFlaedhMaz49xXbth3HQYj0j4c6vIHO4YBnNAh+EIUQsGb0+7XLyXN1l1BbKpWRL6Qs7mUWtjW44jieC0azkYvHpr7V+nZfXbuvqXcFwtVIOnCkbh0XLlKHQ6Fm/9UUocI1z28mZzbupgPyQug2+2qoOVPR3ju9/gbPcqNnuW1gLf2s5wro6c14KVLdfJuLDc9GB2+fbyQL0cf8RypbAmbyJacCeNKdmg8eJYFyKkcZB9F27OrpRnx24qAn8XQtIcKcGtguHC7cvLisA2EDIYgVujpmlkF0MLpmEOC0yu9bmMAnydNo8owL4vxEtQWYwe/K7q/a7q+mComxSNf4fne6KFc6ErXdwfJV+V+zWkx4wy0j4VbtXf4Wa+GaYdaUc5h6LSkXJkZXWiyunZoEUSb+JHAwfgLgkRSe+rR+8QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/a5df1/ldap.png",srcSet:["/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/7fc1e/ldap.png 288w","/maximo/manage-playbook/static/de6117c15e304d4f9b50a2f0b598e7d6/a5df1/ldap.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"The MAS sync process will consume user and user group information from SCIM APIs and update the MAS user registry. The Manage user sync process will pull the data from MAS and pushes it to Manage using MIF."),Object(r.b)("h2",null,"Manage Group Synchronization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User Groups are synchronized into Manage from MAS."),Object(r.b)("li",{parentName:"ul"},"Users will be added in the group only if they are valid users in Manage."),Object(r.b)("li",{parentName:"ul"},"The existing users in a group will be replaced by the users in the payload same as LDAP group synchronization.")),Object(r.b)("h2",null,"Bulk Import Users to MAS (Upgrade)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maximo users and their profiles (language, timezone, and locale) will be imported to MAS during the upgrade.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A one-time cron task instance will be created during the upgrade to import users to MAS."))),Object(r.b)("li",{parentName:"ul"},"Welcome emails will be sent to the users with a password for their account. If the user email is not set, email will be sent to the system administrator email account.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The system administrator email will be set up from MAS UI."),Object(r.b)("li",{parentName:"ul"},"The SMTP set up is required in MAS prior to upgrade. "),Object(r.b)("li",{parentName:"ul"},"The user password can be reset by the System Administrator.")))),Object(r.b)("p",null,"Welcome Email Templates:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'To: ${email}\nTitle: Welcome to IBM Maximo Application Suite\nBody: Welcome to IBM Maximo Application Suite, a new account has been registered to ${email} in <a href="${masHomeUrl}">IBM Maximo Application Suite (${instanceName})</a>.\n\nUsername: ${username}\n\nYou will receive your password in a seperate e-mail (only show this if emailPassword has been set)\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'To: ${email}\nTitle: Your new IBM Maximo Application Suite password\nBody: Welcome to <a href="${masHomeUrl}">IBM Maximo Application Suite (${instanceName})</a>. your new password is below.\n\nPassword: ${password}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-security-mdx-c548517b7b4bfd308369.js.map