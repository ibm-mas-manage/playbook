(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),b=a.n(u),d=a("QH2O"),p=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(m.b)(l.Link,{className:O.link,to:""+c},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},i))))))},t}(r.a.Component),v=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,u=void 0===i?{}:i,b=t.relativePagePath,d=t.titleType,p=u.tabs,g=u.title,y=u.theme,O=u.description,w=u.keywords,A=Object(N.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=T?n.pathname.replace(T,""):n.pathname,S=p?M.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",C=y||A;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:O,pageKeywords:w,titleType:d},Object(m.b)(h,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:C}),p&&Object(m.b)(x,{title:g,slug:M,tabs:p,currentTab:S}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:b})),Object(m.b)(f.a,{pageContext:t,location:n,slug:M,tabs:p,currentTab:S}),Object(m.b)(s.a,null))}},"8kAC":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},c=o.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Deployment Configuration"),Object(i.b)("p",null,"When the Manage application is deployed in MAS, a Manage deployment CR is created."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Manage deployment CR contains the configuration entered by the user including database URL, server bundle types, deployment sizing etc. "),Object(i.b)("li",{parentName:"ul"},"The database username/password can be specified from the MAS UI and persisted as a Secret in the cluster. "),Object(i.b)("li",{parentName:"ul"},"The Manage crypto/cryptox properties can be updated from the MAS UI and persisted as a Secret in the cluster. "),Object(i.b)("li",{parentName:"ul"},"Both Secrets (username/password, crypto/cryptox) can also be updated from OpenShift CLI. Any change to the values will automatically redeploy (complete/partial) the application.")),Object(i.b)("h2",null,"Server Bundle"),Object(i.b)("p",null,"A server bundle (workload) is a logical abstraction for a deployed group of PODs(Point of deployment) in a cluster to perform the same function and provides an access point as a service. These can be accessed as a service internally and through a route externally (a route is a way to expose a service by giving externally-reachable hostname). Through route or service, OpenShift provides load balancing to the PODS included in a server bundle. Each server bundle defines replica size, subdomain, etc."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For each server bundle, a service is created with name appended by -","<","serverbundlename",">","."),Object(i.b)("li",{parentName:"ul"},"A route is created with name appended by -","<","serverbundlename",">","."),Object(i.b)("li",{parentName:"ul"},"A default route will be created to point to the service ending with -","<","serverbundlename",">",".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The default route is used by MAS UI to establish the default URL link to the Manage application.")))),Object(i.b)("p",null,"The following diagram illustrates OpenShift Container Platform routers provide external host name mapping and load balancing of service end points over protocols. The router uses the hostname to determine where to send the external client request."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAACJklEQVQoz0VPXWvUQBTN//VVRIoULH3zQUSsWmjBN1EEBZ/6qLbV7W7a7X5kk91NNtlMkskkmZnMZGaSbBKzRfBwOJx7OBfu1Zisx1Pz59UwoxIRldEiJUWCWUIKwmsqWn3mXvy4dQDJRZOxismdrDqhGhwkGucFztIeUu43Q7CNQhDBOIQJhDCKUF+QUkRRnKQ4ZxwlJIhiRnHmetrVfXTwdnB0Njr/vtLN9PHrP4eno+MPk1ef5o9eXB68Gz050Q/fD5++uX5+ph+dj4/P9YOT389Ohy8/G1pKy9mG6xZ2ofIjejML71Z04TE/llObjyxqetwJ5SooDU/YgdhE0trKic0dwLWEZjNnZLijEANEGMiWE3vgJcuYIAcuJvZNkG0wx3ZozJzbmAS4yCx/bG7HIAEa5YUTuZa/QjSLcW66y5mz8JMAc+ZC33CtMIWIkrlr6Mu7LQrSvL/Lmm8WPoJaVdalqhkru64LowSASKi2e8Cu6f77XSvEbu/atqoqoXrZaam3ji6/xpdfiGuqpgvC8u6+WNqyrhtI1HSTbRFv2g65K2gMGQRSYLS9xuBXFpsaAR4dfCuuP3L7vl+GsBxPxXQulGoxr6wg38R813YYuNi8ycFaScbQbZ0NWGJqKMHuehls1gVjqtofWdctIQxjwlivlBCa5znOMIKQYNy2/Qt121RKKS1nRV/rmXNZiD6qVdmzkqpn3atSD+G/vN6PD0bI6i/H3lBdyWcCXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/acfc1/services.png",srcSet:["/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/7fc1e/services.png 288w","/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/a5df1/services.png 576w","/playbook/static/b07a81fc72a20b1897a26d11b2c2daa4/acfc1/services.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Manage application can be deployed with different server bundles (workloads) for the processing and isolation needs. "),Object(i.b)("li",{parentName:"ul"},"The deployment can be ‘All’ bundle server type only or a combination of four bundle server types (UI, Cron, Report, MEA).",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If “All” bundle server type is not deployed, and you used a combination of the four bundle server types, the “UI” bundle server type is required."))),Object(i.b)("li",{parentName:"ul"},"Each server bundle can have its own server properties.")),Object(i.b)("p",null,"This table below shows the five different server bundles types:"),Object(i.b)("table",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Bundle Server Type"),Object(i.b)("th",null,"Description")),Object(i.b)("tr",null,Object(i.b)("td",null,"All"),Object(i.b)("td",null,"This bundle type contains all the code.")),Object(i.b)("tr",null,Object(i.b)("td",null,"UI"),Object(i.b)("td",null,"This bundle type contains UI code and supporting code. It is the interface for accessing Manage application.")),Object(i.b)("tr",null,Object(i.b)("td",null,"MEA"),Object(i.b)("td",null,"This bundle exposes the enterprise web services API. ")),Object(i.b)("tr",null,Object(i.b)("td",null,"Report"),Object(i.b)("td",null,"This bundle contains the code that is needed to enable BIRT Report Only Server (BROS). Used to separate out the work load that is related to execution of reports that are submitted from the Manage UI. ")),Object(i.b)("tr",null,Object(i.b)("td",null,"Cron"),Object(i.b)("td",null,"This bundle contains the code that is needed to run Manage cron tasks."))),Object(i.b)("h3",null,"Server Bundle Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The bundle properties can be added or updated for an individual server bundle from the MAS UI or directly by adding properties to the ConfigMap that referenced by the Manage Custom Resource(CR)."),Object(i.b)("li",{parentName:"ul"},"The ConfigMap will be mapped as the bundle.properties in the Manage pods. ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The bundle.properties can be viewed from the OpenShift console from the pod in the terminal tab. It will be in “/config/manage/properties” directory after deployment."))),Object(i.b)("li",{parentName:"ul"},"If you need to define a new custom property as a bundle specific property, add the custom property to Manage by using the System Properties application before specifying it as a server bundle property. ")),Object(i.b)("p",null,"Sample data section for ConfigMap:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"data:\n  bundle.properties:  |\n    mxe.crontask.donotrun=ALL \n    mxe.adminEmail=test@ibm.com\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ConfigMap file can be deployed through OpenShift UI or manually by adding “bundleLevelProperties” property in the deployment CR."),Object(i.b)("li",{parentName:"ul"},"If you have created a new config map, it can be manually deployed by updating the “bundleLevelProperties” property in the deployment CR. Sample deployment CR snippet:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'ServerBundles:\n    - name: "myuiservers"\n      replica: 3 \n      isDefault: true\n      bundleType: ui\n      routeSubDomain: generic1\n      bundleLevelProperties: bundlepropertiesconfigmap\n      additionalServerConfig: serverxmlconfigmap   \n')),Object(i.b)("h2",null,"Liberty Server XML"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you need to customize Liberty server.xml:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You need to provide a ConfigMap file to include your custom configuration. See below a sample ConfigMap data section for server-custom.xml to enable JMS queues(serverxmlconfigmap.yml).   "),Object(i.b)("li",{parentName:"ul"},"The content of the ConfigMap needs to follow the Liberty documentation of additional configuration files that can be included in the server.xml."),Object(i.b)("li",{parentName:"ul"},"The ConfigMap file can be deployed through OpenShift UI or manually by adding “additionalServerConfig” property in the deployment CR."),Object(i.b)("li",{parentName:"ul"},"The ConfigMap will be mapped as the server-custom.xml in the manage pods. It will be included in the server.xml as the additional configuration. ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The server-custom.xml can be viewed from the OpenShift console from the pod in the terminal tab. It will be in “/config/manage/serverxml” folder after deployment.")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'data:\n  server-custom.xml:  |\n    <logging traceSpecification="JMSApi=all:WAS.j2c=all"/> \n    <variable name="wmqJmsClient.rar.location" value="${wlp.install.dir}/../wmq/wmq.jmsra.rar"/>\n    \x3c!--containerAuthData id="auth1" user="maximomif" password="xxxx"/--\x3e\n    \n        <jmsConnectionFactory jndiName="jms/maximo/int/cf/intcf" connectionManagerRef="MIFJMS">\n            <properties.wmqJms \n                transportType="CLIENT"\n                hostName="libertymanager-c553.qm.us-south.mq.appdomain.cloud" \n                port="30216"\n                channel="CLOUD.APP.SVRCONN"\n                applicationName="maxliberty"\n                userName="xxx"\n                password="xxxxx"\n                queueManager="LIBERTYMANAGER"/>\n            </jmsConnectionFactory>\n        <connectionManager id="MIFJMS" maxPoolSize="20"/>\n        <jmsQueue id="sqout" jndiName="jms/maximo/int/queues/sqout">\n            <properties.wmqJms baseQueueName="sqout" baseQueueManagerName="LIBERTYMANAGER"/>\n            </jmsQueue>\n        <jmsQueue id="sqin" jndiName="jms/maximo/int/queues/sqin">\n                <properties.wmqJms baseQueueName="sqin" baseQueueManagerName="LIBERTYMANAGER"/>\n            </jmsQueue>\n        <jmsQueue id="jms/maximo/int/queues/cqin" jndiName="jms/maximo/int/queues/cqin">\n                <properties.wmqJms baseQueueName="cqin" baseQueueManagerName="LIBERTYMANAGER"/>\n            </jmsQueue>\n        <jmsQueue id="jms/maximo/int/queues/cqinerr" jndiName="jms/maximo/int/queues/cqinerr">\n                <properties.wmqJms baseQueueName="cqinerr" baseQueueManagerName="LIBERTYMANAGER"/>\n        </jmsQueue>\n        <jmsActivationSpec id="maximomea/mboejb/JMSContQueueProcessor-1">\n            <properties.wmqJms\n               transportType="CLIENT"\n               destinationRef="jms/maximo/int/queues/cqin"\n               destinationType="javax.jms.Queue"\n                   hostName="libertymanager-c553.qm.us-south.mq.appdomain.cloud"\n               port="30216"\n               maxSequentialDeliveryFailures="-1"\n               channel="CLOUD.APP.SVRCONN"\n               queueManager="LIBERTYMANAGER"/>\n        <authData id="auth1" user="xxx" password="xxx"/>\n        </jmsActivationSpec>\n            <jmsActivationSpec id="maximomea/mboejb/JMSContQueueProcessor-2">\n        <properties.wmqJms\n            transportType="CLIENT"\n               destinationRef="jms/maximo/int/queues/cqinerr"\n               destinationType="javax.jms.Queue"\n               hostName="libertymanager-c553.qm.us-south.mq.appdomain.cloud"\n               port="30216"\n               maxPoolDepth="1"\n               maxSequentialDeliveryFailures="-1"\n               channel="CLOUD.APP.SVRCONN"\n               queueManager="LIBERTYMANAGER"/>\n        <authData id="auth1" user="xxx" password="xxx"/>\n    </jmsActivationSpec>\n</server>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ConfigMap file can be deployed through OpenShift UI or manually by adding “additionalServerConfig” property in the deployment CR."),Object(i.b)("li",{parentName:"ul"},"If you have created a new config map, it can be manually deployed by updating the “additionalServerConfig” property in the deployment CR. Sample deployment CR snippet:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'ServerBundles:\n    - name: "myuiservers"\n      replica: 3\n      isDefault: true\n      bundleType: ui\n      routeSubDomain: generic1\n      additionalServerConfig: serverxmlconfigmap   \n')),Object(i.b)("h2",null,"Attached Docs"),Object(i.b)("h3",null,"If you using object storage:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No change needed. ")),Object(i.b)("h3",null,"If you are using the file system such as NFS:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The persistent storage (specifically storage software and deployments, storage provisioner, storage classes, and persistent volumes) need to be setup. "),Object(i.b)("li",{parentName:"ul"},"You need to specify the required storage configuration (volume name, storage class, size, and mount path) from MAS UI (or CR) during the application deployment."),Object(i.b)("li",{parentName:"ul"},"The Manage provides a Persistent Claim to claim this storage configuration and setup shared folders inside Manage pods accordingly.  "),Object(i.b)("li",{parentName:"ul"},"You can set up the same mount path as the doclinks directory you have in your current system and no configuration change will be needed for the doclinks configuration. If you have a different mount path, then the doclinks configuration needs to be updated to point to the new path. ")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-configuration-mdx-96aad43135a282c95593.js.map