(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),b=t("NmYn"),c=t.n(b),l=t("Wbzz"),r=t("Xrax"),s=t("k4MR"),o=t("TSYQ"),p=t.n(o),m=t("QH2O"),d=t.n(m),u=t("qKvR"),g=function(e){var a,t=e.title,i=e.theme,n=e.tabs,b=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.a.pageHeader,(a={},a[d.a.withTabs]=b.length,a[d.a.darkMode]="dark"===i,a))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},t)))))},f=t("BAC9"),A=function(e){var a=e.relativePagePath,t=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,b=n.baseUrl,c=n.subDirectory,r=b+"/edit/"+n.branch+c+"/src/pages"+a;return b?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:r},"Edit this page on GitHub"))):null},O=t("FCXl"),j=t("dI71"),x=t("I8xM"),h=function(e){function a(){return e.apply(this,arguments)||this}return Object(j.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var a,t=c()(e,{lower:!0,strict:!0}),b=t===n,r=new RegExp(n+"/?(#.*)?$"),s=i.replace(r,t);return Object(u.b)("li",{key:e,className:p()((a={},a[x.selectedItem]=b,a),x.listItem)},Object(u.b)(l.Link,{className:x.link,to:""+s},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":a},Object(u.b)("ul",{className:x.list},b))))))},a}(n.a.Component),N=t("MjG9"),w=t("CzIb"),k=t("Asxa"),y=t("OIbQ"),v=t.n(y),T=function(e){var a=e.date,t=new Date(a);return a?Object(u.b)(k.c,{className:v.a.row},Object(u.b)(k.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,n=e.Title,b=a.frontmatter,o=void 0===b?{}:b,p=a.relativePagePath,m=a.titleType,d=o.tabs,f=o.title,j=o.theme,x=o.description,k=o.keywords,y=o.date,v=Object(w.a)().interiorTheme,B=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=B?i.pathname.replace(B,""):i.pathname,M=d?E.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",z=j||v;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:z,pageTitle:f,pageDescription:x,pageKeywords:k,titleType:m},Object(u.b)(g,{title:n?Object(u.b)(n,null):f,label:"label",tabs:d,theme:z}),d&&Object(u.b)(h,{title:f,slug:E,tabs:d,currentTab:M}),Object(u.b)(N.a,{padded:!0},t,Object(u.b)(A,{relativePagePath:p}),Object(u.b)(T,{date:y})),Object(u.b)(O.a,{pageContext:a,location:i,slug:E,tabs:d,currentTab:M}),Object(u.b)(r.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},aSIp:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return p}));var i=t("wx14"),n=t("zLVn"),b=(t("q1tI"),t("7ljp")),c=t("013z"),l=(t("qKvR"),["components"]),r={},s={_frontmatter:r},o=c.a;function p(e){var a=e.components,t=Object(n.a)(e,l);return Object(b.b)(o,Object(i.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Migrated Users"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Users will be migrated to MAS from the existing Maximo (7612+) during the upgrade.")),Object(b.b)("p",null,Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABGUlEQVQoz6VR2YqEQAz0w31SwRcR/1DFcVZEV7zG21qrIUM7615soIgpO9WVjuF5HnzfRxAEcF0XpmnCsiw4jgPbtlX+C4xt26DHMAz4Txh5nqNtW1B4HEdUVYWyLJ/o+15d8ng8TrjiCOP+luP9aKRoXdcIwxBRFCnwsiRJkGUZiqJQmf/TNMXtdkMcx4rXcYy8Y9935XCeZ0zThGVZlFvyrOlyXVd1hplBXs7oMPjzyCpEiMJd16lmjkHn5HRBjkxe6qegfIggG5nZQAFxSI61LFF41hcOz4IEncmi6PbVofCsvxXkAREkT6dc2JUg+R8FZeRXh8z6yL92yLeRpTCzsWma0zvKUsh/WspXDvWl0O3VUmQK3eEHu+WQZq6jd/cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/3cbba/users.png",srcSet:["/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/7fc1e/users.png 288w","/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/a5df1/users.png 576w","/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/3cbba/users.png 1152w","/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/0b124/users.png 1728w","/playbook/static/d6122cb9cfacd47ebf926caaf713b81a/46245/users.png 2196w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Users are created with ",Object(b.b)("inlineCode",{parentName:"li"},"Set in Manage")," access. The user access is managed in the Manage application using ",Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/maximo-manage/8.0.0?topic=management-configuring-security-groups"},"security groups")," as before.")),Object(b.b)("p",null,Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABFUlEQVQoz5VS2WrDMBDU/3+BH4yPN/9UAm0CxcXFlyTfnmYEm27SOtCBxVppdzSjtYnjGFEUIc9zpGmKLMtukYa1RJIkh8H+oihCkMOs64p93yGw1mGcf/L/wlhrMY4jlmXBNE3oug7OeQzDAO99OJvnGbyYwTp+t22773HNXvYEwr7vg0oeMtdgEYvFBdfOOYgzCYLEhoo0IRXpYjZzT5pEMZsJTcg+428NtCY3PBfTouSE2Jdz/Q0Krx9fuFzeUVUV2rZFXdd3xXpYOtdWf1l+u37ifDqhLEs0TRPekO/GIhYchT4XBEJr+6BI3oCEWtkr/KmQZEJCQtrmJOUXkeDekdInhY8WSSiTFjIOghfLwF4RfgNDdkzMEB+qMQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/a5718a723277cbe4274411fb54f0cbd8/3cbba/usercreated.png",srcSet:["/playbook/static/a5718a723277cbe4274411fb54f0cbd8/7fc1e/usercreated.png 288w","/playbook/static/a5718a723277cbe4274411fb54f0cbd8/a5df1/usercreated.png 576w","/playbook/static/a5718a723277cbe4274411fb54f0cbd8/3cbba/usercreated.png 1152w","/playbook/static/a5718a723277cbe4274411fb54f0cbd8/0b124/usercreated.png 1728w","/playbook/static/a5718a723277cbe4274411fb54f0cbd8/4ea69/usercreated.png 2304w","/playbook/static/a5718a723277cbe4274411fb54f0cbd8/9c5d6/usercreated.png 2848w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"If SMTP is configured, all the migrated users will receive two emails.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Welcome to IBM Maximo Application Suite."),Object(b.b)("li",{parentName:"ul"},"Your IBM Application Suite Password."))),Object(b.b)("li",{parentName:"ul"},"Password can be replaced from Users page (in edit mode) using Replace forgotten password link."),Object(b.b)("li",{parentName:"ul"},"A maxadmin user is created by default with a password as maxadminmaxadmin#1."),Object(b.b)("li",{parentName:"ul"},"User authorization(application access) is done in Manage application using Security groups as before.")),Object(b.b)("p",null,"Sample Emails"),Object(b.b)("p",null,Object(b.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1074px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABD0lEQVQY02WQiWrDMBBE9f/fZBpwAj7yGY2pr1g+JctWoj5JBAodzLBezc4e4na7XS6XNE3hLMvu93tRFHmeE5BJkuR6vX4FoCFZlmX+gViWpaqqvu8fj8c8z8dxvAOcczxN0zQMQ13XXdcRWGtfr5f7QPBD6gygct93G8Ab6ufzqZRa11VrDUspaWA/EGRRoNuNCS4+G/uP40iemBFg9w9i27amafqubdu6bWomNWbflEJNMb50Y2b2gpsApCRxDJ0H+f0zVLVUxunTWb+U3zkujDtMDQU4moB4FEE0jpOctf8mPUxqWfU7XIViOrMqHLshphl3gTEVeHAqex7nYTz74IjGsZgLEcRDmD/A4hf+UcC67G8f7QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/4e9ec79c9b04b4fa3d381af2507fe21f/c637b/email.png",srcSet:["/playbook/static/4e9ec79c9b04b4fa3d381af2507fe21f/7fc1e/email.png 288w","/playbook/static/4e9ec79c9b04b4fa3d381af2507fe21f/a5df1/email.png 576w","/playbook/static/4e9ec79c9b04b4fa3d381af2507fe21f/c637b/email.png 1074w"],sizes:"(max-width: 1074px) 100vw, 1074px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(b.b)("h2",null,"Entitlement"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Entitlement in MAS can set as",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Premium (15 app points)"),Object(b.b)("li",{parentName:"ul"},"Base (10 app points)"),Object(b.b)("li",{parentName:"ul"},"Limited (5 app points)"),Object(b.b)("li",{parentName:"ul"},"Self Service (0 app point)"),Object(b.b)("li",{parentName:"ul"},"Entiitlement calculation details: ",Object(b.b)("a",{parentName:"li",href:"apppoints"},"MAS licensing Model"))))),Object(b.b)("h2",null,"Troubleshooting"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Check the database log. Fix any errors."),Object(b.b)("li",{parentName:"ul"},"If the users are not migrated to MAS:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Login to MAS admin UI using admin credentials.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"If maxadmin user is not created then",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Create ",Object(b.b)("inlineCode",{parentName:"li"},"maxadmin")," user in MAS from the users page."))))),Object(b.b)("li",{parentName:"ul"},"Login to MAS as ",Object(b.b)("inlineCode",{parentName:"li"},"maxadmin"),"."),Object(b.b)("li",{parentName:"ul"},"Go to the Manage app, check the user sync cron task (MASUSERSYNC) from the Cron Task application. ",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Create a new cron task instance and run the cron task again. ")))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-users-mdx-08478c5da907ef74c9da.js.map