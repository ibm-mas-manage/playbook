(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),r=a.n(l),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),u=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,r=i.subDirectory,s=l+"/edit/"+i.branch+r+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},A=a("FCXl"),v=a("dI71"),j=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===i,s=new RegExp(i+"/?(#.*)?$"),b=n.replace(s,a);return Object(m.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=l,t),j.listItem)},Object(m.b)(o.Link,{className:j.link,to:""+b},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},l))))))},t}(i.a.Component),O=a("MjG9"),w=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),k=a.n(x),S=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(N.c,{className:k.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,c=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,u=c.tabs,h=c.title,v=c.theme,j=c.description,N=c.keywords,x=c.date,k=Object(w.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,T=u?I.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",M=v||k;return Object(m.b)(b.a,{tabs:u,homepage:!1,theme:M,pageTitle:h,pageDescription:j,pageKeywords:N,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:u,theme:M}),u&&Object(m.b)(y,{title:h,slug:I,tabs:u,currentTab:T}),Object(m.b)(O.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:p}),Object(m.b)(S,{date:x})),Object(m.b)(A.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:T}),Object(m.b)(s.a,null))}},"8kAC":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),o=(a("qKvR"),["components"]),s={},b={_frontmatter:s},c=r.a;function p(e){var t=e.components,a=Object(i.a)(e,o);return Object(l.b)(c,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Deployment Configuration"),Object(l.b)("p",null,"When the Manage application is deployed in MAS, a Manage deployment CR is created."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Manage deployment CR contains the configuration entered by the user including database URL, server bundle types, deployment sizing etc. "),Object(l.b)("li",{parentName:"ul"},"The database username/password can be specified from the MAS UI and persisted as a Secret in the cluster. "),Object(l.b)("li",{parentName:"ul"},"The Manage crypto/cryptox properties can be updated from the MAS UI and persisted as a Secret in the cluster. "),Object(l.b)("li",{parentName:"ul"},"Both Secrets (username/password, crypto/cryptox) can also be updated from OpenShift CLI. Any change to the values will automatically redeploy (complete/partial) the application.")),Object(l.b)("h2",null,"Server Bundle"),Object(l.b)("p",null,"A server bundle (workload) is a logical abstraction for a deployed group of PODs(Point of deployment) in a cluster to perform the same function and provides an access point as a service. These can be accessed as a service internally and through a route externally (a route is a way to expose a service by giving externally-reachable hostname). Through route or service, OpenShift provides load balancing to the PODS included in a server bundle. Each server bundle defines replica size, subdomain, etc."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For each server bundle, a service is created with name appended by -","<","serverbundlename",">","."),Object(l.b)("li",{parentName:"ul"},"A route is created with name appended by -","<","serverbundlename",">","."),Object(l.b)("li",{parentName:"ul"},"A default route will be created to point to the service ending with -","<","serverbundlename",">",".",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The default route is used by MAS UI to establish the default URL link to the Manage application.")))),Object(l.b)("p",null,"The following diagram illustrates OpenShift Container Platform routers provide external host name mapping and load balancing of service end points over protocols. The router uses the hostname to determine where to send the external client request."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAACJklEQVQoz0VPXWvUQBTN//VVRIoULH3zQUSsWmjBN1EEBZ/6qLbV7W7a7X5kk91NNtlMkskkmZnMZGaSbBKzRfBwOJx7OBfu1Zisx1Pz59UwoxIRldEiJUWCWUIKwmsqWn3mXvy4dQDJRZOxismdrDqhGhwkGucFztIeUu43Q7CNQhDBOIQJhDCKUF+QUkRRnKQ4ZxwlJIhiRnHmetrVfXTwdnB0Njr/vtLN9PHrP4eno+MPk1ef5o9eXB68Gz050Q/fD5++uX5+ph+dj4/P9YOT389Ohy8/G1pKy9mG6xZ2ofIjejML71Z04TE/llObjyxqetwJ5SooDU/YgdhE0trKic0dwLWEZjNnZLijEANEGMiWE3vgJcuYIAcuJvZNkG0wx3ZozJzbmAS4yCx/bG7HIAEa5YUTuZa/QjSLcW66y5mz8JMAc+ZC33CtMIWIkrlr6Mu7LQrSvL/Lmm8WPoJaVdalqhkru64LowSASKi2e8Cu6f77XSvEbu/atqoqoXrZaam3ji6/xpdfiGuqpgvC8u6+WNqyrhtI1HSTbRFv2g65K2gMGQRSYLS9xuBXFpsaAR4dfCuuP3L7vl+GsBxPxXQulGoxr6wg38R813YYuNi8ycFaScbQbZ0NWGJqKMHuehls1gVjqtofWdctIQxjwlivlBCa5znOMIKQYNy2/Qt121RKKS1nRV/rmXNZiD6qVdmzkqpn3atSD+G/vN6PD0bI6i/H3lBdyWcCXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/acfc1/services.png",srcSet:["/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/7fc1e/services.png 288w","/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/a5df1/services.png 576w","/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/acfc1/services.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Manage application can be deployed with different server bundles (workloads) for the processing and isolation needs. "),Object(l.b)("li",{parentName:"ul"},"The deployment can be ‘All’ bundle server type only or a combination of four bundle server types (UI, Cron, Report, MEA).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If “All” bundle server type is not deployed, and you used a combination of the four bundle server types, the “UI” bundle server type is required."))),Object(l.b)("li",{parentName:"ul"},"Each server bundle can have its own server properties.")),Object(l.b)("p",null,"This table below shows the five different server bundles types:"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Bundle Server Type"),Object(l.b)("th",null,"Description")),Object(l.b)("tr",null,Object(l.b)("td",null,"All"),Object(l.b)("td",null,"This bundle type contains all the code.")),Object(l.b)("tr",null,Object(l.b)("td",null,"UI"),Object(l.b)("td",null,"This bundle type contains UI code and supporting code. It is the interface for accessing Manage application.")),Object(l.b)("tr",null,Object(l.b)("td",null,"MEA"),Object(l.b)("td",null,"This bundle exposes the enterprise web services API. ")),Object(l.b)("tr",null,Object(l.b)("td",null,"Report"),Object(l.b)("td",null,"This bundle contains the code that is needed to enable BIRT Report Only Server (BROS). Used to separate out the work load that is related to execution of reports that are submitted from the Manage UI. ")),Object(l.b)("tr",null,Object(l.b)("td",null,"Cron"),Object(l.b)("td",null,"This bundle contains the code that is needed to run Manage cron tasks."))),Object(l.b)("h3",null,"Services"),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACOUlEQVQoz42S204TURSG5xFUwJbWiFaK0ELLuVZMvJNE8FV8BS9MREoNCje+hU/gDSZekYBBNBQbObTa4zDn2bPn8LtmT6l4505W1p61Z779r/WPlLo9grlcHqlUCkPpHAYKK7gx9wTXKW4uLCNGIfJilIcLy0gUoudbS6uIF1cRK64g9fgZEg+fQpqYmkY6M4VYPIHnL9axU7PxsargU83CXtfHFznAvsi+yAcXAb5ShPW9jo/dtoedOsf7XR0fjmxIuZl5zC4UMBhLolwqAfABj0UZAf5r+T4+VzT86jJIYxNZTM8tYjg5gpev1sDpXDMdcM8HczjtNTCXgbschmVD1nXYrgeHzlVNg2aY/1wrzT94hPlCEXdHx/Fue0sUGfdE5q6Nk+YeTpv7qLcPoTITFUXFoSyjaVlwGINpmuJdzw9IaBABF4tLuHNvDG+3tsWhSwoCutb1HPzuHqPW/oaOeiY+MjmHTsG88J0Q4ot8GVJmMo8MGXNtIIa19dcCqNtuOBYCMgGrd76jIR9DZxZONR1VVUXLtmGROpX24foLJNjo/QyG4klsvNmM5HuXLUfAsOWG/AOcbukQqEXtapz35xaC+jPM5maQHs8Kl9fLJVHULFLYb7lC7h2hrZxQuw4apoW6YeDCccT8FEXpqwvblybzswihg7EEyj2Fvn9V4SHOWgcCbBPwXDfwk9ztkiHoQa6qJOAMQmiosFTeEEWLuX1TGnJVKOyq5+JXMqhVo2cK67l81ZQ/JxLPUvuCAKQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/1b6b5fa5191633c49f0633bf413870d5/3cbba/servicesos.png",srcSet:["/playbook/static/1b6b5fa5191633c49f0633bf413870d5/7fc1e/servicesos.png 288w","/playbook/static/1b6b5fa5191633c49f0633bf413870d5/a5df1/servicesos.png 576w","/playbook/static/1b6b5fa5191633c49f0633bf413870d5/3cbba/servicesos.png 1152w","/playbook/static/1b6b5fa5191633c49f0633bf413870d5/0b124/servicesos.png 1728w","/playbook/static/1b6b5fa5191633c49f0633bf413870d5/4ea69/servicesos.png 2304w","/playbook/static/1b6b5fa5191633c49f0633bf413870d5/f6a47/servicesos.png 2878w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("h3",null,"Routes"),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrElEQVQoz52SzWoUQRSF+xn8DQYCkcFMZhyTMBoTNOJD+AAuFET8SczEUQM+h7hQgsY3EDdJ3PkIbkU0Lsahx+mu7q7qqu7P29UTxa0Fh7pFnXvuubcqaHcWWbq0QqvV4vqNm9x5vc+tF++5/fIDGzt7bL09oPdGMNmf7B6w/e4j/d36/GBnn7uv9lifxEFnsctSd5njp8+w1X8KlPzP+vTF8XkAQbN9geXVq0zPzHLv4QY6d6RphtaGTGvSLCPPrSDHGE1ROJxzWGuFo31c4TDUDMaG4Fyzzfz5BU5NTXN/fZNUDKosJzFOkgtUonyycwXDccYoscRZIYVzxioiNaXwjroqCS6urrFyZY2zjTn628+JHIxU7hNtJZgq785J0rcw5+vQMIisCBnhRPxKC6wUK8pSOAXBQveyCF5jZrbBZv8ZqoAozcWF84QkS7ATwR8jw6HgZ2xrh2lErAvPK8vSdxTMywyb7Q7HTk5Jyz3vMFQGpZ0nxUnsHVoR/B4aj2HsvGCoxkRZLfZXUObXmGtxQl75Ue9xPQm5qOZRkY5WFVtX49+fUP4RrPAbOLUaDHq3/VIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/b535b0b043583362f779cca6cb5f1558/3cbba/serviceroutes.png",srcSet:["/playbook/static/b535b0b043583362f779cca6cb5f1558/7fc1e/serviceroutes.png 288w","/playbook/static/b535b0b043583362f779cca6cb5f1558/a5df1/serviceroutes.png 576w","/playbook/static/b535b0b043583362f779cca6cb5f1558/3cbba/serviceroutes.png 1152w","/playbook/static/b535b0b043583362f779cca6cb5f1558/0b124/serviceroutes.png 1728w","/playbook/static/b535b0b043583362f779cca6cb5f1558/4ea69/serviceroutes.png 2304w","/playbook/static/b535b0b043583362f779cca6cb5f1558/8dc0b/serviceroutes.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("h3",null,"Server Bundle Properties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The server bundle properties can be set from MAS UI or CR directly."),Object(l.b)("li",{parentName:"ul"},"A Config Map ",Object(l.b)("inlineCode",{parentName:"li"},"<workspaceid>-<serverbundlename>-bundleproperty")," will be created for the server properties during deployment (operator reconciliation). It will be mounted to /config/manage/properties on the pod. The bundleLevelProperties file on the pod should not be updated manually."),Object(l.b)("li",{parentName:"ul"},"Manage server process will automatically detect the change and update the Manage property cache."),Object(l.b)("li",{parentName:"ul"},"If the property value needs to be modified, update the CR directly or from UI, the Manage Operator will reconcile the changes. The Maximo server process will update the Manage property cache with the updated value."),Object(l.b)("li",{parentName:"ul"},"Add/Update bundle level properties from MAS admin UI.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Go to Manage application tile, select ",Object(l.b)("inlineCode",{parentName:"li"},"Configure Workspace")," on top right."),Object(l.b)("li",{parentName:"ul"},"Click on ",Object(l.b)("inlineCode",{parentName:"li"},"Show Advance Settings"))))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbUlEQVQoz5WRzU7CQBSFG9/DjYk7n8Ctb+Ie3fkeUsAAgWdxT4xLE6DGGOgQftoC03amtT32TJzGAIlxkpPe3p9v7sk43d4Avf4QT90Bmm4LzeYjOp0O2u22UavVMmLMPGPXddHv99G4u8flxTmubho4ux7i9qELJ/8CVFYiL4AS/ztaZ3h9GWH0tsLzFBBbwBHCR7DZYLuNIPd7+L6PyWQCz/MghMBqtcKmqjOeTqdYr9e1WNNaQco9lFwjlREcFsIwrJIxwl0FlRL7ChzHsZFSCnmeI01TRFGELMtqaa1NXSmNVOeQcQJnWd0SBIGBbKIASZIYEP8JsUACdrudsVqW5ZF42O98fM4xn83M+v5S1DBewphbEEgwnfAURXESymUcWrSyVvnlMEWbbOSG3ICDFnj4NUAO/xaTFC/gVtYOgcyfAv2xYfJjOTQNdshatqBDHQGtXV8sMH6fYezNIBbL+pHYw0exr39K7PkG6r3rqHeePFEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/14d8f524f50f12e771e96b021d6ce914/3cbba/showadvancesettings.png",srcSet:["/playbook/static/14d8f524f50f12e771e96b021d6ce914/7fc1e/showadvancesettings.png 288w","/playbook/static/14d8f524f50f12e771e96b021d6ce914/a5df1/showadvancesettings.png 576w","/playbook/static/14d8f524f50f12e771e96b021d6ce914/3cbba/showadvancesettings.png 1152w","/playbook/static/14d8f524f50f12e771e96b021d6ce914/0b124/showadvancesettings.png 1728w","/playbook/static/14d8f524f50f12e771e96b021d6ce914/4ea69/showadvancesettings.png 2304w","/playbook/static/14d8f524f50f12e771e96b021d6ce914/06d2f/showadvancesettings.png 2552w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Go to Server bundles section. Click on ",Object(l.b)("inlineCode",{parentName:"li"},"View")," for the server you want to add properties.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Additional Server bundle properties")," dialog will be displayed."),Object(l.b)("li",{parentName:"ul"},"You can enter the bundle specific properties in the ",Object(l.b)("inlineCode",{parentName:"li"},"Bundle level properties")," section."),Object(l.b)("li",{parentName:"ul"},"Click Save."),Object(l.b)("li",{parentName:"ul"},"Click on ",Object(l.b)("inlineCode",{parentName:"li"},"Activate")," button on top right to activate your changes.")))),Object(l.b)("p",null,"Sample bundle level property:\n",Object(l.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACJElEQVQoz2WSTYtSURjH/Qatona1mV3otLIJcmC+QUShBtNsClw6K3Xu+z33xZdsp6CToyS1bFOtfMFv0SZcpDPOHTAQ9arR/fecUyNBB36ce+Dwe/7PfU7oUSyGP+zjwd4eotGoIBKJ/Ec4HN7C7+zu3sftWzdxdyeMG3di2Ln3ECHLcmCYNuHAsh1omopy+Q06nQ56vZ6g2+2KfTAYCPr9PiqVCrLZHJ49fYLH8Vc4SLp4mbYROtEkaIYGizE4tg1JklCr1bBcLuH7voB/c/5drVaLimui+OtSAeUiQ95hCKm6Bt3QSWhRQgu5XA7VahXr9VpwLeUsFostjUaDip9AVVXIikK7DpNChQxdh05YlgXTYpBlGfVaHfP5HLPZDKvVSiQKOEEg4KvZbCKdPkYmkxFSwzDAuJDLeHQhZCalNVCvn2I4HGI0GmEymeDi4hzj8Qje5QRXngeP4EJZ0eA4LkqlEvL5gnCEuNk0TXFgBC/QaLzdSn5Mp7i8muLrtzGG3z2cezMs/A3a7TYN0kKhWCRZXiCEkqyINpnJ6IIBheI3zlrwNwH8dbBt11/OEfz06bCh0y98eP8OqmbAdV1K6cCmgQphTlJo/BmRTKUnY1BaRgNy3LxIwKgIs4tInQEvToGjOnBYA7JOC0yXxV0uEh3yf6jQhPhT4a3zhPbfp/M8mUQikSDiiCcPcZD6iFjqC/EJ+6nPOJbKVIwPwxSia+Fv5yctSVa8FlkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/8c9e14ee704889417d2709a9875ec8a8/3cbba/bundlelevelprop.png",srcSet:["/playbook/static/8c9e14ee704889417d2709a9875ec8a8/7fc1e/bundlelevelprop.png 288w","/playbook/static/8c9e14ee704889417d2709a9875ec8a8/a5df1/bundlelevelprop.png 576w","/playbook/static/8c9e14ee704889417d2709a9875ec8a8/3cbba/bundlelevelprop.png 1152w","/playbook/static/8c9e14ee704889417d2709a9875ec8a8/0b124/bundlelevelprop.png 1728w","/playbook/static/8c9e14ee704889417d2709a9875ec8a8/4ea69/bundlelevelprop.png 2304w","/playbook/static/8c9e14ee704889417d2709a9875ec8a8/a4b11/bundlelevelprop.png 2560w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The bundle level properties can be validated br running following api.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"{UI_SERVER_URL}/api/service/system?action=wsmethod:getProperty&propName=mxe.int.webappurl&apikey={API KEY}")))),Object(l.b)("p",null,"Sample Custom Resource(CR):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n    "spec": {\n        "bindings": {\n            "jdbc": "workspace-application"\n        },\n        "components": {\n            "base": {\n                "version": "latest"\n            }\n        },\n        "settings": {\n            "db": {\n                "maxinst": {\n                    "bypassUpgradeVersionCheck": false,\n                    "db2Vargraphic": true,\n                    "demodata": false,\n                    "indexSpace": "maximo",\n                    "tableSpace": "maximo"\n                },\n                "dbSchema": "MAXIMO"\n            },\n            "deployment": {\n                "serverBundles": [\n                    {\n                        "bundleType": "ui",\n                        "isDefault": true,\n                        "name": "default",\n                        "replica": 1,\n                        "routeSubDomain": "ui",\n                        "bundleLevelProperties": "mxe.int.webappurl=http://localhost/ui\\nmxe.webclient.activitydashboard=TRUE"\n                    },\n                    {\n                        "name": "cron",\n                        "replica": 1,\n                        "bundleType": "cron",\n                        "isDefault": false,\n                        "routeSubDomain": "cron",\n                        "bundleLevelProperties": "mxe.int.webappurl=http://localhost/cron\\nmxe.cronTaskMonitorInterval=30"\n                    },\n                    {\n                        "name": "report",\n                        "replica": 1,\n                        "bundleType": "report",\n                        "isDefault": false,\n                        "routeSubDomain": "report",\n                        "bundleLevelProperties": "mxe.report.reportsInAPage=10\\nmxe.int.webappurl=http://localhost/report"\n                    },\n                    {\n                        "name": "mea",\n                        "replica": 1,\n                        "bundleType": "mea",\n                        "isDefault": false,\n                        "routeSubDomain": "mea",\n                        "bundleLevelProperties": "mxe.adminEmail=email@ibm.com\\nmxe.int.webappurl=http://localhost/meaweb"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(l.b)("h2",null,"Liberty Server XML"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you need to customize Liberty server.xml:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The custom server xml can be set from MAS UI. For example, to create queues in JMS server.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you create in CR directly, then you need to create secret manually. Set this secret to additionalServerConfig.secretname for the bundle server in the CR."))),Object(l.b)("li",{parentName:"ul"},"On deployment, a secret will be created for custom server xml. It will mounted to /config/manage/serverxml. This location is included in Liberty’s server xml. The configuration is applied to Liberty server.")))),Object(l.b)("p",null,"Sample custom server xml"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<server description="new server">\n    <featureManager>\n          <feature>wmqJmsClient-2.0</feature>\n     <feature>jmsMdb-3.2</feature>\n    </featureManager>\n    <logging traceSpecification="JMSApi=all:WAS.j2c=all"/>\n    <variable name="wmqJmsClient.rar.location" value="/wmq/wmq.jmsra.rar"/>\n    <jmsConnectionFactory jndiName="jms/maximo/int/cf/intcf" connectionManagerRef="MIFJMS">\n         <properties.wmqJms\n            transportType="CLIENT"\n            hostName="mifjmsmanager-afd7.qm.us-south.mq.appdomain.cloud"\n            port="31440"\n            channel="CLOUD.APP.SVRCONN"\n            applicationName="maxliberty"\n            userName="{{username}}\n            password="{{yourpasssword}}"\n            queueManager="MIFJMSMANAGER"/>\n    </jmsConnectionFactory>\n    <connectionManager id="MIFJMS" maxPoolSize="20"/>\n    <jmsQueue id="sqout" jndiName="jms/maximo/int/queues/sqout">\n      <properties.wmqJms baseQueueName="sqout" baseQueueManagerName="MIFJMSMANAGER"/>\n    </jmsQueue>\n    <jmsQueue id="sqin" jndiName="jms/maximo/int/queues/sqin">\n      <properties.wmqJms baseQueueName="sqin" baseQueueManagerName="MIFJMSMANAGER"/>\n    </jmsQueue>\n    <jmsQueue id="jms/maximo/int/queues/cqin" jndiName="jms/maximo/int/queues/cqin">\n      <properties.wmqJms baseQueueName="cqin" baseQueueManagerName="MIFJMSMANAGER"/>\n    </jmsQueue>\n    <jmsQueue id="jms/maximo/int/queues/cqinerr" jndiName="jms/maximo/int/queues/cqinerr">\n      <properties.wmqJms baseQueueName="cqinerr" baseQueueManagerName="MIFJMSMANAGER"/>\n    </jmsQueue>\n</server>\n')),Object(l.b)("h2",null,"Attached Docs"),Object(l.b)("h3",null,"If you are using object storage:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No change needed. ")),Object(l.b)("h3",null,"If you are using the file system such as NFS:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The persistent storage (specifically storage software and deployments, storage provisioner, storage classes, and persistent volumes) need to be setup. "),Object(l.b)("li",{parentName:"ul"},"You need to specify the required storage configuration (volume name, storage class, size, and mount path) from MAS UI (or CR) during the application deployment."),Object(l.b)("li",{parentName:"ul"},"The Manage provides a Persistent Claim to claim this storage configuration and setup shared folders inside Manage pods accordingly.  "),Object(l.b)("li",{parentName:"ul"},"You can set up the same mount path as the doclinks directory you have in your current system and no configuration change will be needed for the doclinks configuration. If you have a different mount path, then the doclinks configuration needs to be updated to point to the new path. ")))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-configuration-mdx-e96094d490e1436dff52.js.map