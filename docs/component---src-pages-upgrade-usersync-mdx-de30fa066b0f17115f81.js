(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),s=n("NmYn"),r=n.n(s),o=n("Wbzz"),l=n("Xrax"),c=n("k4MR"),d=n("TSYQ"),m=n.n(d),u=n("QH2O"),b=n.n(u),p=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,i=e.tabs,s=void 0===i?[]:i;return Object(p.b)("div",{className:m()(b.a.pageHeader,(t={},t[b.a.withTabs]=s.length,t[b.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:b.a.text},n)))))},g=n("BAC9"),x=function(e){var t=e.relativePagePath,n=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,s=i.baseUrl,r=i.subDirectory,l=s+"/edit/"+i.branch+r+"/src/pages"+t;return s?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},f=n("FCXl"),y=n("dI71"),j=n("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===i,l=new RegExp(i+"/?(#.*)?$"),c=a.replace(l,n);return Object(p.b)("li",{key:e,className:m()((t={},t[j.selectedItem]=s,t),j.listItem)},Object(p.b)(o.Link,{className:j.link,to:""+c},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},s))))))},t}(i.a.Component),N=n("MjG9"),T=n("CzIb"),w=n("Asxa"),v=n("OIbQ"),M=n.n(v),S=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(w.c,{className:M.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:M.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,s=t.frontmatter,d=void 0===s?{}:s,m=t.relativePagePath,u=t.titleType,b=d.tabs,g=d.title,y=d.theme,j=d.description,w=d.keywords,v=d.date,M=Object(T.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,A=I?a.pathname.replace(I,""):a.pathname,C=b?A.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",k=y||M;return Object(p.b)(c.a,{tabs:b,homepage:!1,theme:k,pageTitle:g,pageDescription:j,pageKeywords:w,titleType:u},Object(p.b)(h,{title:i?Object(p.b)(i,null):g,label:"label",tabs:b,theme:k}),b&&Object(p.b)(O,{title:g,slug:A,tabs:b,currentTab:C}),Object(p.b)(N.a,{padded:!0},n,Object(p.b)(x,{relativePagePath:m}),Object(p.b)(S,{date:v})),Object(p.b)(f.a,{pageContext:t,location:a,slug:A,tabs:b,currentTab:C}),Object(p.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wXIe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("wx14"),i=n("zLVn"),s=(n("q1tI"),n("7ljp")),r=n("013z"),o=(n("qKvR"),["components"]),l={},c={_frontmatter:l},d=r.a;function m(e){var t=e.components,n=Object(i.a)(e,o);return Object(s.b)(d,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"When a user is created and is assigned the Manage role, it gets synchronized into Manage. The Manage application user sync process pulls the data from MAS IDP/User Registry and pushes it to Manage.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If a MAS user has the ADMIN role for the application Manage, it will be assigned to one or more default admin security groups in Manage, which is defined in the system property “mxe.defaultgroups.manage.admin”. The initial value of this property is the same as the maxvar ADMINGROUP, but it is can be changed to a different desired group. If the system property is set to null, then user will not be assigned to any default admin security group.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If a user has the NO_ACCESS role or is deleted in MAS, the user becomes INACTIVE in the Manage application.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The user synchronization process from MAS to Manage utilizes the Manage Integration Framework (MIF). It uses integration’s Enterprise Service to post data to Manage. If a MAS user is assigned the Manage role and has a sync status of PENDING or DELETE_PENDING, the user sync will process it and upon successful synchronization change the sync status to SYNCED."))),Object(s.b)("h3",null,"Sample of inbound message from MAS"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{\n  "_id": "joesmith5",\n  "username": "joesmith5",\n  "permissions": {\n    "systemAdmin": true,\n    "userAdmin": true\n  },\n  "issuer": "local",\n  "displayName": "Joe Smith",\n  "familyName": "Smith",\n  "givenName": "Joe",\n  "title": "Supervisor",\n  "preferredLanguage": "EN",\n  "locale": "en_US",\n  "phoneNumbers": [\n    {\n      "value": "555-555-5555",\n      "type": "work"\n    },\n    {\n      "value": "555-555-4444",\n      "type": "work"\n    }\n  ],\n  "addresses": [\n    {\n      "streetAddress": "100 Universal City Plaza",\n      "locality": "Hollywood",\n      "region": "CA",\n      "postalCode": "91608",\n      "country": "USA",\n      "formatted": "100 Universal City Plaza\\nHollywood, CA 91608 USA",\n      "type": "work",\n      "primary": true\n    }\n  ],\n  "emails": [\n    {\n      "value": "joesmith5@us.ibm.com",\n      "type": "work",\n      "primary": true\n    },\n    {\n      "value": "joesmith51@gmail.com",\n      "type": "work"\n    }\n  ],\n  "extension": {\n    "employeeNumber": "701984",\n    "costCenter": "4130"\n  },\n  "entitlement": {\n    "application": "PREMIUM",\n    "admin": "ADMIN_PREMIUM"\n  },\n  "workspaces": {\n    "space1": {\n      "permissions": {\n        "workspaceAdmin": true\n      },\n      "applications": {\n        "manage": {\n          "role": "ADMIN"\n        },\n        "iot": {\n          "role": "ADMIN"\n        },\n        "health": {\n          "role": "USER"\n        },\n        "monitor": {\n          "role": "ADMIN"\n        }\n      }\n    }\n  },\n  "added": {\n    "id": "admin",\n    "timestamp": "2020-08-10T18:01:36.694331"\n  },\n  "updated": {\n    "id": "admin",\n    "timestamp": "2020-08-10T18:08:17.455782"\n  },\n  "sync": {\n    "status": "SUCCESS",\n    "timestamp": "2020-08-10T18:10:16.731047"\n  },\n  "applications": {\n    "manage": {\n      "sync": {\n        "state": "PENDING",\n        "reason": "",\n        "timestamp": "2020-08-10T18:08:49.604430"\n      }\n    },\n    "monitor": {\n      "sync": {\n        "state": "SUCCESS",\n        "reason": "",\n        "timestamp": "2020-08-10T18:08:17.471947"\n      }\n    },\n    "health": {\n      "sync": {\n        "state": "SUCCESS",\n        "reason": "",\n        "timestamp": "2020-08-10T18:09:18.131171"\n      }\n    },\n    "predict": {\n      "sync": {\n        "state": "SUCCESS",\n        "reason": "",\n        "timestamp": "2020-08-10T18:08:17.471947"\n      }\n    }\n  },\n  "token": "1000:8744077b1411c0601e4912d556d93ff859089bfd16863f16:591949ad7b4d4f7017de846a3f3b2609ac4caef4ebe09448"\n}\n\n')),Object(s.b)("h3",null,"Sample of output from default user exit"),Object(s.b)("p",null,"This is a result in Manage object structures after mapping masuser.json with the OOTB user exit.  This can serve as the input to further customized mapping if desired."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{\n   "addressline1": "100 Universal City Plaza",\n   "city": "Hollywood",\n   "country": "USA",\n   "displayname": "Joe Smith",\n   "email": [\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith5@us.ibm.com",\n         "isprimary": 1,\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "emailaddress": "joesmith51@gmail.com",\n         "isprimary": 0,\n         "type": "work"\n      }\n   ],\n   "extension": {\n      "costCenter": "4130",\n      "employeeNumber": "701984"\n   },\n   "firstname": "Joe",\n   "language": "EN",\n   "lastname": "Smith",\n   "locale": "en_US",\n   "maxuser": [\n      {\n         "groupuser": [\n            {\n               "_action": "AddChange",\n               "groupname": "MAXADMIN"\n            },\n            {\n               "_action": "AddChange",\n               "groupname": "TOOLMGR"\n            }\n         ],\n         "inactivesites": 1,\n         "loginid": "joesmith5",\n         "statusdate": "2020-10-30T15:43:44-04:00",\n         "userid": "joesmith5"\n      }\n   ],\n   "personid": "joesmith5",\n   "phone": [\n      {\n         "_action": "AddChange",\n         "isprimary": 1,\n         "phonenum": "555-555-5555",\n         "type": "work"\n      },\n      {\n         "_action": "AddChange",\n         "isprimary": 0,\n         "phonenum": "555-555-4444",\n         "type": "home"\n      }\n   ],\n   "postalcode": "91608",\n   "stateprovince": "CA",\n   "statusdate": "2020-10-30T15:43:44-04:00",\n   "title": "Supervisor"\n}\n')),Object(s.b)("p",null,"The section tagged “extension” as shown in the samples includes all extra attributes which are not part of default mapping. The default mapping can be customized by creating a Java user exit or automation script or JSON Mapper."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-usersync-mdx-de30fa066b0f17115f81.js.map