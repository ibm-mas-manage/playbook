(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"013z":function(e,a,t){"use strict";var o=t("q1tI"),i=t.n(o),l=t("NmYn"),b=t.n(l),n=t("Wbzz"),c=t("Xrax"),s=t("k4MR"),m=t("TSYQ"),r=t.n(m),p=t("QH2O"),g=t.n(p),d=t("qKvR"),u=function(e){var a,t=e.title,o=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(d.b)("div",{className:r()(g.a.pageHeader,(a={},a[g.a.withTabs]=l.length,a[g.a.darkMode]="dark"===o,a))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:g.a.text},t)))))},f=t("BAC9"),A=function(e){var a=e.relativePagePath,t=e.repository,o=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||o,l=i.baseUrl,b=i.subDirectory,c=l+"/edit/"+i.branch+b+"/src/pages"+a;return l?Object(d.b)("div",{className:"bx--row "+f.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},y=t("FCXl"),x=t("dI71"),h=t("I8xM"),O=function(e){function a(){return e.apply(this,arguments)||this}return Object(x.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=b()(e,{lower:!0,strict:!0}),l=t===i,c=new RegExp(i+"/?(#.*)?$"),s=o.replace(c,t);return Object(d.b)("li",{key:e,className:r()((a={},a[h.selectedItem]=l,a),h.listItem)},Object(d.b)(n.Link,{className:h.link,to:""+s},e))}));return Object(d.b)("div",{className:h.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":a},Object(d.b)("ul",{className:h.list},l))))))},a}(i.a.Component),j=t("MjG9"),w=t("CzIb"),k=t("Asxa"),v=t("OIbQ"),N=t.n(v),E=function(e){var a=e.date,t=new Date(a);return a?Object(d.b)(k.c,{className:N.a.row},Object(d.b)(k.a,null,Object(d.b)("div",{className:N.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,o=e.location,i=e.Title,l=a.frontmatter,m=void 0===l?{}:l,r=a.relativePagePath,p=a.titleType,g=m.tabs,f=m.title,x=m.theme,h=m.description,k=m.keywords,v=m.date,N=Object(w.a)().interiorTheme,S=Object(n.useStaticQuery)("2456312558").site.pathPrefix,U=S?o.pathname.replace(S,""):o.pathname,B=g?U.split("/").filter(Boolean).slice(-1)[0]||b()(g[0],{lower:!0}):"",L=x||N;return Object(d.b)(s.a,{tabs:g,homepage:!1,theme:L,pageTitle:f,pageDescription:h,pageKeywords:k,titleType:p},Object(d.b)(u,{title:i?Object(d.b)(i,null):f,label:"label",tabs:g,theme:L}),g&&Object(d.b)(O,{title:f,slug:U,tabs:g,currentTab:B}),Object(d.b)(j.a,{padded:!0},t,Object(d.b)(A,{relativePagePath:r}),Object(d.b)(E,{date:v})),Object(d.b)(y.a,{pageContext:a,location:o,slug:U,tabs:g,currentTab:B}),Object(d.b)(c.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yisf:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return r}));var o=t("wx14"),i=t("zLVn"),l=(t("q1tI"),t("7ljp")),b=t("013z"),n=(t("qKvR"),["components"]),c={},s={_frontmatter:c},m=b.a;function r(e){var a=e.components,t=Object(i.a)(e,n);return Object(l.b)(m,Object(o.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Manage Server Logs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Manage server logs are written to the standard output. You can view the logs from the OpenShift console. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Go to your OpenShift console, navigate to the Workload/Pods menu, Select your Manage project."),Object(l.b)("li",{parentName:"ul"},"Check your Liberty server pods. Select the server pod to view log. ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cron "),Object(l.b)("li",{parentName:"ul"},"mea "),Object(l.b)("li",{parentName:"ul"},"report"),Object(l.b)("li",{parentName:"ul"},"ui"),Object(l.b)("li",{parentName:"ul"},"all")))))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACN0lEQVQoz1VRy05TURS9iUrUgU4og0JbpC/64pLykPhI1JgYP8epExMTnBiR6C/4A8wI8YE4JRGihSotJFhFam973+97l3sfUhNPsnJy9llZe+21pUwyiRuVCmqyjERiDBdGJ3BuNI3zhJFEmt6p/zCSOMPFsTSuZoq4kirgUjJLyOHyeA5SvlRFrlzD5FQehfIMHr3ZxJP1Jh6v7WB5vYGXH9tY2WxjdesQz9+3sELv15/aeLXF9RZefGjh2dvveLrxDcvvWpCKJJYvljGemUK1NovWQROm5QGuBfg2gJAQECLEngtNd6hE/6FLJbpjgk/c0BF8Sa4vojZbR7ZQwtz8dWx/3Ue7a6E30DDQdOimBc0wYdkOTnoaDn6pVDdI2IDKIE6vP4AyUNFXNUiLt+7i/oOHmF+6idt37uHo+CdOjRhBECAMQ0RRhJAQEzw/RKfvijuKQvHP8H1f8OM45pGrqC8sIZMtoFiq4HNjHz8UhzprMAwdtm3Dsix4rksudBx3dfozYBoE0yQOuSUug9/SdGWGRp5DajKLCmW409hDZ+BRjo4Q8akzO4jIiW656Cg2bIdcegxPgBu6xNV1nbZMC5mmxaSv5UhQFg67Jo1MIizEY/DYfEzHx4nqiTGDwP8XC4sxl4WFw6pcxwQ5LFdl7O418ceKEQZn+fBhUT4uZdfVyXEQiQy5EWOYoRAskcgCLSRHTtnh9u4XHJ4awj7DJBJn41CWnOHRb1VsmLMbYshVFAV/Af8Ub9V3o0UrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/3cbba/serverpod.png",srcSet:["/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/7fc1e/serverpod.png 288w","/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/a5df1/serverpod.png 576w","/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/3cbba/serverpod.png 1152w","/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/0b124/serverpod.png 1728w","/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/4ea69/serverpod.png 2304w","/maximo/manage-playbook/static/cff505ddf7527839a5989c96147ecfb6/c474b/serverpod.png 2862w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Click on Liberty server pod. Select the Log tab to view the log for the selected server.")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACfElEQVQoz5WSS08TURiGJ0EummgkUKWl0NLLtNPODFN6AYLECIkhGiSQFgroP3AFgnHBjzAIJia4NjHRyIab6M6twYWXECniRiiIcimlII+nU+POhSd58r7nnJxvvjnnlWrsdgzZh15vUGW1UuTQkerCSM4Git3hv5T80VJPhDLBGTnGueAlzgZbKJGbKPU1UyKQ/EEdly+Aw+XFI/TR4juef9rhydI60x+/M7+aMVn4kmEutS/Y4+XqHguC2ZVdZgTTyzu8WN41MQsG9RB2pxu3108q9RkO9yDzE44OILtbmB/uw0mOf49fghOkgGagGWHcsoIiir99/4H09g/WN9JspNOsb27zbWOLjc1NtsR6NpfjMHdkkhXkjvIcs5854CB7iKSHIoQijeQL5/3a2pr5vRPBMf8/RIf1yIpKda2L+oYo98cn6OqO05NI0hXvpzc5QKKvn77+mySEjwuf6BPa22/SFU/S2ZOko7OH0XtjSLHWdtqvdhCONXP9RjdDQ8OUl5ejKApOhwOn04lVvL7H4xHegc1mM+cWSyUVFRVUVV00fXHxKdrariD5Ahqx5hZc4kHyvz4yeheHw0kkGkPVdBPZ58cIhdB0HZ/wXlk2yXslEDQJqioDA4OFgvXi7uy1dTREmxgdGcZVa6MpGsLQFBNFdhExNAy14P3eOgJCgz43muJFFegBmVuDSaR89vLRsTvEoWgjt++MUWrVsGuXsYjAXhBhPS+CXqO2YvU3Y/FEqXSLYFdrnLaplFmDpi+q9NF6LVnoMJ/DmjqvaD3As9dLPJhfY3JuhYnZFSZnCzq1uMrjVwWmFlOFvbmUuf9wPsX4zApP33zlN49nAHb/DMNrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/3cbba/serverlog.png",srcSet:["/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/7fc1e/serverlog.png 288w","/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/a5df1/serverlog.png 576w","/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/3cbba/serverlog.png 1152w","/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/0b124/serverlog.png 1728w","/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/4ea69/serverlog.png 2304w","/maximo/manage-playbook/static/04aa1f111a868182c9b41daffd031689/66c2e/serverlog.png 2874w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can also configure MAS supported log configuration by OpenShift. For example, ",Object(l.b)("strong",{parentName:"li"},"Elasticsearch, Fluentd, and Kibana dashboard (EFK)")," can be configured for Logging. The logs automatically flow to the EFK stack.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Aggregated Manage logs can be retrieved from the EFK stack."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.6/logging/cluster-logging-deploying.html"},"https://docs.openshift.com/container-platform/4.6/logging/cluster-logging-deploying.html"))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can also push the logs to any S3 compatible object storage by following the steps below:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Setup: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Set up S3 credentials."),Object(l.b)("li",{parentName:"ul"},"Create the following four environment variables in your Manage deployment:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"LOG_BUCKETNAME"),Object(l.b)("li",{parentName:"ul"},"LOG_S3ACCESSKEY"),Object(l.b)("li",{parentName:"ul"},"LOG_S3ENDPOINTURL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For example: ",Object(l.b)("a",{parentName:"li",href:"https://s3.us.cloud.object.storage.appdomain.cloud"},"https://s3.us.cloud.object.storage.appdomain.cloud")))),Object(l.b)("li",{parentName:"ul"},"LOG_S3SECRETKEY"))))),Object(l.b)("li",{parentName:"ul"},"Create a log request(POST) using any HTTP Rest Client. For example, the Postman tool.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Request URL: http://manageserver:7001/maximo/oslc/service/logging?action=wsmethd:submitUploadRequest",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Replace the manageserver in the above URL to your manage server host or IP address."),Object(l.b)("li",{parentName:"ul"},"A record will be created in the Manage table(LOGREQUEST)"))))),Object(l.b)("li",{parentName:"ul"},"Each  Manage server handles the latest log request. It will zip the logs in the liberty log directory and upload it in COS. "),Object(l.b)("li",{parentName:"ul"},"You can use the S3 browser to view the logs using your S3 credentials."),Object(l.b)("li",{parentName:"ul"},"The logs can be downloaded from the Liberty server. It will be in the directory that is set for the system property “server.output.dir”.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For example, “/opt/was/libert/wip/usr/servers/default/"),Object(l.b)("li",{parentName:"ul"},"A record will be created in the Manage table (LOGREQUESTDET)"),Object(l.b)("li",{parentName:"ul"},"The Manage table records will be removed by cron task (LOGREQUESTCLEANUP) after posting logs to the object storage.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The cron task needs to be activated manually. It will run once every day.")))))))),Object(l.b)("h2",null,"Maxinst/Update Database Logs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The maxinst and update database logs can be retrieved from the maxinst pod.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"From the OpenShift console, go to the Workloads/Pods menu, select the maxinst pod for your project. "),Object(l.b)("li",{parentName:"ul"},"You can select maxinst pod. ")))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACG0lEQVQoz21R2WpTURS9qEH7ID6kDTQ2SZv55maQ2IkqSKEg/o7Pvvgg9UVsUfwDv8DH4tj6KIJQ24Y2iUNTY4Y75c43d7nPiWmLuGFxNufsvfZaZwuJaBQrkoRSpYKpSASh8HVcCMdwcTKG0FQMl8IzpwhNnuFyJI5r8RyuxjK4Mp3ExHQKE9E0hIxYRLpQwmwyg2yhjPsv3+HhVg0PXn3B+tYeNnea2Nhu4NnHJp68r2Nzu4kXlD/faWDjQx1PCY/fHOHR60Osv61DyBFZJlfATCKJQrGMk9YPjMInBPg3HBf/ieC0VqhUF1G6UUUqK6I6v4RPu3s4bBvo9BX0FRWqPoCi6RgYJlodGbVjGT26V1QNMgPlnV4f3b7M64XF26tYu3sP80sruLO6ht39GlqKB9/3OYbDIUcQDOF6Po77Dj/Zne+P3lzX5aeu68xyEdWFZSRSWeRECZ9J4feuCYWmaZoGwzRhGAZs20JX1vCtrXF1rHkMVVU5WL2Ql8pk+Sbic2n6wwoO6g2caD70gQnHtvl0roDUaoaFnz0TpmXzN8dxOEwaysAcCWwheVpMfC7Dl/L1qIGeBXiMyPPIasDtsBhYLn6pLm/0vLNvsf+S86UwhcVKFbHZFETKD4iQHPMC1sT/ihMGsBwPbZVUuUR2jpDVMlJWK4hkc2H5FtJ5iQhL2CfC38ZIISc8p9C0PVI4WsqYbKx2vJg/b6hytMKhh8oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/3cbba/maxinstpod.png",srcSet:["/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/7fc1e/maxinstpod.png 288w","/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/a5df1/maxinstpod.png 576w","/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/3cbba/maxinstpod.png 1152w","/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/0b124/maxinstpod.png 1728w","/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/4ea69/maxinstpod.png 2304w","/maximo/manage-playbook/static/efe90089857c92728b4b65ef5f91c737/c474b/maxinstpod.png 2862w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Go to terminal tab and ",Object(l.b)("inlineCode",{parentName:"li"},"cd log")," (/opt/IBM/SMP/maximo/tools/log/) to view logs. ")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXElEQVQoz4WTz08TURDH1x4sRozcAMHSbi3t9se2XWrp2lYb09jExKCUhICJFBISE+OdA6aeufI/ePLiQS9G1KtnT8QoEZWk5UcltFBa+/G9B0g8GF/yyZuZnfnOm7e7mts1hBUMEo3FuDQwiEMfQfMmOSM46xv9g3P4dD8nOB+wuWje4EL4Os5AGmcwi9PIoNnZHAk7Q3wkSSqT49mHL7xY3eX5xyqvPtVY+XbAyvoRbwRvhf/++wHv1vd5vVZXvPy8J6grtJAZJxK1cHmuYIRNKpUNfjV+guSwAc368b5Hp16j09gVvojR4u/VFnTQ/MEIAcFltxe/EWZ17SvV7R2q1U0qm1vHbLJR2eJHdYftnRrbtRr1xj7NVpvmYUuxJ/z9ZvNIcFgIDek+pF2tVFS/g1aHdrslep6uDv9famQpODikY11Nsby8THFigqn7Dxgfv0exWKRUKlGamWF6eorJyUnm5uaYnZ1lRsTGxsbIZrPE4nEePnosXkruFjfzBUaSNrfv3GVx8Qler04sGhW7V2GaJoZhoAtb13XiojgSiRAOh+nv78fhcKBpGtdsG80IR0mm0ui+AFZilHK5TCgUIplMKiFZJG3LspQtY7YolLFEIoHb7aavr08J5vN5IRgyMeMJBlweNXK5/FR1l0WyWJJOp5UfFacOim9W+qlUSuV5PB56e3tPBX2BEAEhKu9Qjr2wsKCSfD6f6u5yuejp6aG7u5uuri5V+C9kI02KBSMxdcK4GHlpaYlCoUAul1MJmUyGmPiL5MnkyCd3d2LLCeRzv9/P/Pw8vwEbYedxkA25mQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/3cbba/dblog2.png",srcSet:["/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/7fc1e/dblog2.png 288w","/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/a5df1/dblog2.png 576w","/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/3cbba/dblog2.png 1152w","/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/0b124/dblog2.png 1728w","/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/4ea69/dblog2.png 2304w","/maximo/manage-playbook/static/32d235674b26ac84b66819f47c027152/4cae6/dblog2.png 2864w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can also view the log from the Logs tab.")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLklEQVQoz6WS3UvTYRTHn7Xttxf3ahts+7W1KYu9L5uy1oazhTYjdzEIuogI7G7uppSgFNzSvbTsH+giyjQiAkmCyuyqq270oqzL0G3WVbVqLqK+Pb/fxEKkizrw4XvOeeDLc57zECvLIuR2w0nZrdNDoDGAUAQaI4RaI3bRfDtCirjVCIWpDS1GGxi9ZQtid7hhtTtga7fD4e/EudnnuDC3hOF7LzA+v4z8kxXkHq80lVJceI3SU8pCsz/56BXGHr6kNJV4fB1weffDZLGhKxhCo/4ZwPdNtscPyk/8LYjT44fD7QNLDQ90HcSb1TW8LVewVqmiUl3Hanmd5pTNXpn2qu/e48OnGuqNb5QGNqh+rNXw5WsdhDPb5/TAbG1HgBpu1Ov4nyBOathG39C4Zy+CoQjmHswjO5FDdrKIsctFZLITtM6jcGUKxdI1XgslLm/WmdxVjOemMJrJY+bufZBDPX0Id/fA19GJ5ImTGBw8C0LIPxGLxUD8gSBvyG071hvH0FAaSqUSBoMBOr0eKpUKMpmMh2GYHZFKpbxhIpEAcXn99HYBfuRw92GkUiloNWpYLGawrAmtWg3UKiXkchnEIiEYsYhHLPqNVMLwhgMDx0G4hXDfhjOMxnpx6vQZ/lCl1W0hU6ghkrSAkSqoyiEQSXYc+UhfnG7Z5eW3bDLbEI5EULj1DNH0TRwbuY34MMc0r/0jM0heuoPkxVnEz0/j6B/00/No+gZGry/iF+qz31eq7Ot5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/3cbba/dblog1.png",srcSet:["/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/7fc1e/dblog1.png 288w","/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/a5df1/dblog1.png 576w","/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/3cbba/dblog1.png 1152w","/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/0b124/dblog1.png 1728w","/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/4ea69/dblog1.png 2304w","/maximo/manage-playbook/static/143f3a6a7d3f3a70c5b9e3cf034b1433/b71bd/dblog1.png 2852w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("h2",null,"User Sync Log"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The User Sync log can be accessed from the user sync pod.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Click on the user sync pod and select Logs tab.")))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABZklEQVQoz52Qy0sbURSHpyIkilC6L6aaajJ5jY2ZGfOwjz+1uy66ki6qoduuFUHEqjEYkRo00Xk/v97chFbpzsP9uOdxz49zrqIWCpiaRkPXyb1ZYX51kxd5k7m8QWbd/Et2di8IFgsmS2qTV9pHXtY+kCm2yZa2yagdFL3ZoW62KNfeUTdafP75i69Hd3zZv2bn+Ja9nv2E7oXNj74jmMa7PYtvpzPOLJS1YplCqcrr3CoTfzjo8xzrHt7z/WCMUizXUCsayytvpfB57wLHdXlwPEaWi+cHxElKFCf4YSh9cYjTdMosDuOUIEpQ1EpNTjaZcF2t0L+8ks2O6+EGEaEQCYKAKIokSRLL3L84kfVJfmJKY2ubhtFErW6gm01OLq+5ccGyLHzPk82e78uG4chmcOthO64Q8fFm9fF4jCu2SsXEyobRpvP+E1pdx9hq8/tmiB0iBNL//km8x/YTsebjXPrE/wOnjLJga3WTEQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/3cbba/usersyncpod.png",srcSet:["/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/7fc1e/usersyncpod.png 288w","/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/a5df1/usersyncpod.png 576w","/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/3cbba/usersyncpod.png 1152w","/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/0b124/usersyncpod.png 1728w","/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/4ea69/usersyncpod.png 2304w","/maximo/manage-playbook/static/f8e8848fc1984159b83c83cef9184c4f/32cd8/usersyncpod.png 2868w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("h2",null,"Manage Workspace Operator Log"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The Manage Workspace operator log can be accessed from the manage workspace pod.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Click on the Manage workspace pod and select Logs tab.")))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABu0lEQVQoz42PT2sTURTFZycVTInRlA6EUE2a5l+r1aBYlG5EBNGdpVYKfgK/iIuq+VMsdlfBhaA0rZ/BpeBO9yqkpCaZ6cy8efPzvhez0JUXzjtz33lz7j1OwXW5Va1ypdHAnZ0llc5wKpVmavospwWGp2yfHvMfpGdci/NujlQmy3TW5UxmBqdYrpIvzFMolcnnclzfeMr95x958Owda1vvebj1gfUX+zx6uW95XXiz1eVJ55DN9gEbrQPRujyWfq3ZxaktLVMXzBVKZLKzdHZeY8oLIwKlUfxfffmh+XoETrm2SKlS50JxgXMSodlsEwYn6Dgm0YJYoaLI9gax6VUkmkYbXVgO3n464vBzH8eYlSo1Ls6XrWG7sy0/Kvr9PiPPp/fLZzjy7RZaJwJtMankn02dSv0SxYWqjWwMW9uviEQIw5DBYECoYoIgxPM84YBQtvVPxgmMHgv7vo+KNbEMdK5eW2FpuYExzs8V2dndpSeOvWGENxpaY6UUkRglEm3oBXz7PsQLlOgja2iGKRlsNndWVm9z5+49btxcpbp4mb29N5hAP4+DcaQksZh8mzr2ZatQ/3U3efcbaF/dSUMSfYcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/3cbba/wspod.png",srcSet:["/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/7fc1e/wspod.png 288w","/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/a5df1/wspod.png 576w","/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/3cbba/wspod.png 1152w","/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/0b124/wspod.png 1728w","/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/4ea69/wspod.png 2304w","/maximo/manage-playbook/static/bdb6c57417c3ec58c39359d5ef43be8f/e1138/wspod.png 2556w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("h2",null,"Build Log"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The build log can be accessed from the manage build pods.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Click on the Manage build pod and select Logs tab.")))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/UlEQVQoz52RS2tTQRTHr9aCSBe2mMSbNLUJrfb9SJuIIIggfgS/hlu7cFMtlILfQW1oYqG6sQ8F1y7c1UY/QMViw73JfWTuY2by98zE2wruHPhz5vk7/zPHWCoUUK5UkMuauDyUgXHVxIVBE32DWZL5jy790ZXMDQxkC6Qi+lMj6E+P4uLQMIyxqRkUb04inx/Bo5UXWHnfwOPaZzzZ+YJne4d4fnCENVIS1z80sPGxgXXS2kEDq/tHeLr7FRufvmOVzo3puUUUxydw7XoOO9tv8L9j99DHsS3PgWlzGC9fVxHFHD5jsNwAP6wQTU/g1BU6sjAGFxJcyl4kCZqzSODbT4ZfTgRjcmZOA1MErG7VdLYOAV3GCS4Qc6GjeiylALpdCCEodGktdVRKhjFfKmPs1hRy+VFs1rfBaNP1GTzPQRxFCAKGgBJwznHqBOSG016g10pxHMOyLD2XBDbuP3iIO3fvYXa+hPrbd2iGQNMlh14bURjpkrQbMnHc5vACoZ0krhRIARVY7Rml5duYXSghTU15RSU7dN/2esCQgDozlSiIeOLE8ENVrjwrV53btn0OXFgqY3xiGqlMD9gmoEUOO8zXl9R/qceqnBOHayD50+sE2Gq1dNTAxeVKD0gOq7U6QvWHnVD/HaeO/w20O9QgLnVjEofq3PO8M+BvE3KAYRaLQqIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/3cbba/buildpod.png",srcSet:["/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/7fc1e/buildpod.png 288w","/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/a5df1/buildpod.png 576w","/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/3cbba/buildpod.png 1152w","/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/0b124/buildpod.png 1728w","/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/4ea69/buildpod.png 2304w","/maximo/manage-playbook/static/76259bc7c845415a5287d5346c4a098c/8dc0b/buildpod.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-logging-mdx-e66adc9537190f911796.js.map