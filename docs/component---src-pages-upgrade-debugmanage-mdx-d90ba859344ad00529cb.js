(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("NmYn"),o=a.n(r),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,l=e.tabs,r=void 0===l?[]:l;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,r=l.baseUrl,o=l.subDirectory,b=r+"/edit/"+l.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),x=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===l,b=new RegExp(l+"/?(#.*)?$"),c=n.replace(b,a);return Object(u.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(u.b)(i.Link,{className:x.link,to:""+c},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},r))))))},t}(l.a.Component),N=a("MjG9"),k=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),T=a.n(y),A=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,m=t.titleType,p=s.tabs,j=s.title,f=s.theme,x=s.description,v=s.keywords,y=s.date,T=Object(k.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,E=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",I=f||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:I,pageTitle:j,pageDescription:x,pageKeywords:v,titleType:m},Object(u.b)(g,{title:l?Object(u.b)(l,null):j,label:"label",tabs:p,theme:I}),p&&Object(u.b)(w,{title:j,slug:P,tabs:p,currentTab:E}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:d}),Object(u.b)(A,{date:y})),Object(u.b)(h.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:E}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uqzL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),l=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),["components"]),b={},c={_frontmatter:b},s=o.a;function d(e){var t=e.components,a=Object(l.a)(e,i);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new server deployment.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Create a new deployment for all or ui server bundle type, replace the ",Object(r.b)("inlineCode",{parentName:"li"},"spec")," section with the existing all or ui server deplyment.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Update the name. For eaxmple, {instanceid}-{workspaceid}-alldebug"))),Object(r.b)("li",{parentName:"ul"},"Add port 7777 in the ports section.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"}," - containerPort: 7777\n    protocol: TCP"))))))),Object(r.b)("p",null,"Sample:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    ports:\n      - containerPort: 9081\n        protocol: TCP\n      - containerPort: 9444\n        protocol: TCP\n      - containerPort: 7777\n        protocol: TCP\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Update cmd args for the manage server",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Replace ",Object(r.b)("inlineCode",{parentName:"li"},"/tmp/startwlp.sh;")," with\n",Object(r.b)("inlineCode",{parentName:"li"},"/tmp/genJDBCTruststore.sh; /opt/ibm/wlp/bin/server debug\n defaultServer;"))))),Object(r.b)("p",null,"Sample:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"image: >-\n    image-registry.openshift-image-registry.svc:5000/mas-sb1-manage/sb1-masdev-all@sha256:6e6891b03d9237e64b6a3c4c41fd8dc331da74cf4cb2393a3ba70588599c600f\nargs:\n  - >-\n    echo generateKeyStore...; openssl pkcs12 -export -in\n    /etc/ssl/certs/internal-manage-tls/tls.crt -inkey\n    /etc/ssl/certs/internal-manage-tls/tls.key -out ${java_keystore}\n    -password pass:${java_keystore_password};\n    /tmp/genJDBCTruststore.sh; /opt/ibm/wlp/bin/server debug\n    defaultServer;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Wait for pod to start"),Object(r.b)("li",{parentName:"ul"},"On local machine, open PowerShell"),Object(r.b)("li",{parentName:"ul"},"Install OpenShift Container Platform command-line interface ",Object(r.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html"},"OC CLI"),". "),Object(r.b)("li",{parentName:"ul"},"Log in to cluster using oc login and switch to correct project using ",Object(r.b)("inlineCode",{parentName:"li"},"oc project")," command"),Object(r.b)("li",{parentName:"ul"},"Run: kubectl port-forward ",Object(r.b)("inlineCode",{parentName:"li"},"<podname>")," 7777:7777")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"kubectl port-forward sb1-masdev-alldebug-57d79d4dfc-q82vn 7777:7777\n\nForwarding from `127.0.0.1:7777 -> 7777`\nForwarding from `[::1]:7777 -> 7777`\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If needed kubectl can be obtained here: ",Object(r.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"https://kubernetes.io/docs/tasks/tools/")),Object(r.b)("li",{parentName:"ul"},"Create a Debug Configuration (Remote Java Project) using localhost and port 7777 in your IDE(Eclipse). Launch it",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Set the project with the Manange code. Use the ",Object(r.b)("a",{parentName:"li",href:"'/upgrade/manageadmin'"},"manageadmin image")," to get the Manage code(classes and libraries)"))),Object(r.b)("li",{parentName:"ul"},"The pod’s logs will now show the server starting")),Object(r.b)("p",null,"Now you will see the ‘Handling Connection’ in the PowerShell window."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"kubectl port-forward sb1-masdev-alldebug-57d79d4dfc-q82vn 7777:7777\n\nForwarding from `127.0.0.1:7777 -> 7777`\nForwarding from `[::1]:7777 -> 7777`\nHandling connection for 7777\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a service and route for new deployment"),Object(r.b)("li",{parentName:"ul"},"Use the new route location link to navigate to the Manange application if created a new deployment. Append ‘/maximo’ to the link."),Object(r.b)("li",{parentName:"ul"},"Remote Debugging link: ",Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/spm-kubernetes/troubleshooting/Remote-Debugging/"},"https://ibm.github.io/spm-kubernetes/troubleshooting/Remote-Debugging/")),Object(r.b)("li",{parentName:"ul"},"Sample IDE")),Object(r.b)("p",null,Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABO0lEQVQoz32Q6W6DMBCE8/4PGKkKahUIhMv4wBfGMB2SVo3yoxYjo7X9zc6eeqExCINJzmhagaLq8Vm2uN0FRtbEpFF3Cu1oKItOHHKP/156DDJAagdlPEblcZJSYRhGjOOEth8hFCGDQlnW6Noek1C87GBsfMo9pW2ADelxNk2Su2VjCqcYPIqiwPl8RtM02HJGtDPqqqTRgGVZ8N/KOWHkPa0VnGeH67bj61qhuFzwdWtZjFDSQTPCzE5y3n6e7vz+tB87V0oJ1lp4wmJcCFwz6ubOiFd8cHaGoLYzuDWcW684nxkuLFjzjpXsV7EEHwLmeca6rk9gZsSDHhi9IsDz8TRolFfFGRrEJWFJGYmEdx0mR8xI6LZtZEScXuchpEF979hhDyk1o9Cdcn6hUXqYvev3zLoAM3t8A/eoGprCa45rAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/3cbba/eclipse.png",srcSet:["/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/7fc1e/eclipse.png 288w","/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/a5df1/eclipse.png 576w","/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/3cbba/eclipse.png 1152w","/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/0b124/eclipse.png 1728w","/maximo/manage-playbook/static/e39f8967e00b47dac59f28e1dcb89d2c/e957c/eclipse.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-debugmanage-mdx-d90ba859344ad00529cb.js.map