(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,l=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),x=a("dI71"),A=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(g.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=i,t),A.listItem)},Object(g.b)(s.Link,{className:A.link,to:""+c},e))}));return Object(g.b)("div",{className:A.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:A.list},i))))))},t}(o.a.Component),j=a("MjG9"),v=a("CzIb"),N=a("Asxa"),w=a("OIbQ"),T=a.n(w),P=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(N.c,{className:T.a.row},Object(g.b)(N.a,null,Object(g.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=b.tabs,h=b.title,x=b.theme,A=b.description,N=b.keywords,w=b.date,T=Object(v.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,M=k?n.pathname.replace(k,""):n.pathname,C=p?M.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",I=x||T;return Object(g.b)(c.a,{tabs:p,homepage:!1,theme:I,pageTitle:h,pageDescription:A,pageKeywords:N,titleType:m},Object(g.b)(u,{title:o?Object(g.b)(o,null):h,label:"label",tabs:p,theme:I}),p&&Object(g.b)(y,{title:h,slug:M,tabs:p,currentTab:C}),Object(g.b)(j.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:d}),Object(g.b)(P,{date:w})),Object(g.b)(O.a,{pageContext:t,location:n,slug:M,tabs:p,currentTab:C}),Object(g.b)(l.a,null))}},"79vC":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),l={_frontmatter:s},c=r.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following architectural diagram shows a sample Manage application deployment in MAS/OpenShift Container Platform (OCP). The Maximo 7.6 deployment is replaced by following Manage deployment in MAS in OCP. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLUlEQVQoz2P4/uPXr99/fv7+/fvPvxcvX7/78PHnrz9fv30HCsLQ33dffrx4/+3Vx+9A0W8/fr/++O3Vh29vP31nAEr/////379/QPLq5Ysvnj97+fLl8ePH/vwBib9+//3Wo/f3nn68eOvVlXtvgSKfvv2+cPvt41dfv/38w/AbrAhk7ac/R688PX7jzeVHX+4+/fDx+79ff/+/+/T9/svPL779ffDu95M3X4G2AC1//Orzxy8/fv7+w7Dt3Me2Te96t32oXfOicuWLkqXPq1e+6N/2oWPj2zl738489GPTtttnWyZd7pq+ftfjeUe/Lzr8Zdnxb3MPft1y/itD9tSTPK4zpQPmqUYuVY1ZIRG+XDF2lWjYCh6/hd79txtP/G+YdVHJsdnKuqRlxpXivf8rd/yq2PU3c8u/CYd+MSxdciglb0F2+bKM8pVlRQvbkrq6M3tbU/sqotoWNi7dMPXAwfZF68Pzt0Xkbu1cu3busQ0zDm6evn9Dz7bje28yPCmvOSShfFTbfL+6ySVppS88bB94OD/xcX0RFXivIPNamP8VB+tbHs6X/PxPubles7M+FxG4r6/zlI/9S10Nw+n0zPkMDEtZWJYyMCxiYJgLRks5uJbx8ALFF4DRPDA5m5HxCAPDSgGpFq+EVmn920VlDA9XrTmdlXOurOJcSRkQXSgpuVBafrmp+Upzy8Wy8vNFxRdKSs+D0ZmSsodFRSfru5dMXr2madrLrTsBaa9iWmoNGzEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/0481063b3010bceced5cbc2c9ea3016a/acfc1/deploymentocp.png",srcSet:["/maximo/manage-playbook/static/0481063b3010bceced5cbc2c9ea3016a/7fc1e/deploymentocp.png 288w","/maximo/manage-playbook/static/0481063b3010bceced5cbc2c9ea3016a/a5df1/deploymentocp.png 576w","/maximo/manage-playbook/static/0481063b3010bceced5cbc2c9ea3016a/acfc1/deploymentocp.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null),Object(i.b)("h2",null,"Key Elements of the Architecture"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"OpenShift:")," The OpenShift contains the Infrastructure layer, Red Hat Enterprise Linux operating system, Kubernetes software for deploying and managing containers, and internal Image Registry to store Manage configured images and services. Manage dashboards are provided in the OpenShift Layer to view Logging and Monitoring of Manage, and other apps deployed in Maximo Application Suite. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Images:")," The images for the Manage Operator, Manage Base, Industry Solutions, and Add-ons are provided in the Entitled Registry. These images contain software application classes, deployment descriptors, XML, and scripts. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage Operator:")," The Manage operator pulls the images from the Entitled Registry. It is similar to how we get the software from the Passport Advantage and IFIX Central to install it on the admin workstation. You can think of it as a replacement for the installer."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage Workloads(Server Bundles):")," The Manage supports five workloads (All, UI, Cron, Report, MEA) that can be configured during the application deployment. In this example, UI, Cron, Report, and MEA workloads are deployed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Customization Archive:")," The customization archive is stored in the customer repository that can access from MAS using HTTPS.  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Admin Command Processor:")," The Admin Command processor pod is deployed and is used for running Manage tools like integrity checker."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Other Maximo Application Suite Apps:")," There are other applications available in the suite that can be deployed. For example, Health, Predict, Assist, Monitor, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage Database:")," The Manage database can be deployed in a cluster. For example, DB2 warehouse."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage Object Storage:")," The Cloud Object Storage can be configured for document storage. For example, doclinks can use object storage for storing documents, etc. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage MQ/Kafka:")," The messaging provider such as JMS MQ or Kafka can be set up and configured in a cluster.")),Object(i.b)("h2",null,"Process"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When the application is deployed, the Manage operator pulls the images from the Entitled Registry, and customization archive from the customer repository if any customization exists and builds a runnable Manage Admin image, and configured images/workloads (UI, Cron, BIRT Reporting)."),Object(i.b)("li",{parentName:"ul"},"The configured images/workloads are deployed to the containers in MAS. "),Object(i.b)("li",{parentName:"ul"},"The built images are stored in the OpenShift Internal Image Registry repository. ")),Object(i.b)("p",null,"The following architectural diagram shows the Manage deployment via operator."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"783px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAACU0lEQVQozxWRTUwTURDH9+TNeOJE4tkYzx45G8VEVGJiBBMOkibGBBJqY6UYFSNE1CAF1GJAbBQNNEVFtKHSD1vKR7e1BaXpllq6u+12t+1uu19v3259nfwyeZP/f94kM5goqyrQFITaRFJQCYEGeVHlaoqkIAkKolqpK6IMAIDIgwwIVGIUXchkMvk8mSdJiqJrdVEBejrPJzNcNFVK5Sq8CPAUS5C8pjcMo4GimY0GGoCxbIllSFUSNEXQIUCaBo3DYh2RIflcQUCTs3SN5iQkybImSU0PCgh1LFsQvTi7Gil+DRdWwvTnIOXDmR9bzKKPcgXoRR+Ccgdof4xbDlKu9cN3KwfeKOPFS9t/y9i0mzjdu35m4Fe7JXzudqjtVqDrweb14a0O60aHNXRpcOPKvc3zllDfeOzi3Y3OoUinLXLZFjlrDpnGothqhL75PIa0AXu8fyLe+yT6eP7PkCNpnkpaHfvmqYT1FXr/Hpnf7X+BmyfjZnt86M3e4MzepCuNffPv5HLeYjEoSWkADKDpOtQlrUFydW9wh6vJnh3Ws0lnyRJRUvNljapARgBVGQLDwByfPLt7Cyz3XYe7zU3qOsrE3OzSte5hm23paneX6ePoArG2le+5/9M0GjSN+J99Kb0NwfchGXN5giS5LIlrQE1qWgOdGDXHBm2OE6ce3bHcuGDr6XNzVWl7fOYh1jJ5pOX10VZn68kPx46vtLVjtTrP84QgpCtVpiwAvq42qSnZf1Q0HvclmECCQ99xOJ6amDh4OZ2bmyWm7PtPxzJO539nP9oRC4RLcQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/76864713a8245f03dca3ce90610d7365/b88b7/deploymentoperator.png",srcSet:["/maximo/manage-playbook/static/76864713a8245f03dca3ce90610d7365/7fc1e/deploymentoperator.png 288w","/maximo/manage-playbook/static/76864713a8245f03dca3ce90610d7365/a5df1/deploymentoperator.png 576w","/maximo/manage-playbook/static/76864713a8245f03dca3ce90610d7365/b88b7/deploymentoperator.png 783w"],sizes:"(max-width: 783px) 100vw, 783px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Create Custom Resource(CR):")," An admin selects, configures, and deploys the Manage application. The deployment creates a Custom Resource (CR). A CR contains a user-entered configuration for the application. For example, name, version, number of pods, and DB type and connection, type of workloads, location of customization archive, etc. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Create Image:")," The Manage operator gets images from the Entitled Registry and the customization archive (if exists) from the customer repository based on the information in the CR. The operator lays down the Industry Solutions/Add-on images and the customization archive over the Manage Base image to create the final images. It also validates against the dependency matrix. It creates a runnable Manage Admin image and the Manage configured images(workloads). The final images are stored in the Image Registry repository. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Update Configuration:")," The Manage Admin image installs (if the Manage database does not exist) or upgrades the Manage database for a new configuration, tears down and, re-spawns the Manage deployments.  Manage configured images (workloads) gets deployed to containers in MAS."))))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-deploymentocp-mdx-6e3c8f7a8cf890684f8f.js.map