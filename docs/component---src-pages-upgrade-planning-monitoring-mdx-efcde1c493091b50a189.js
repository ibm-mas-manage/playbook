(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),b=a.n(i),l=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),m=a.n(s),d=a("QH2O"),p=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,b=o.subDirectory,c=i+"/edit/"+o.branch+b+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("dI71"),A=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),r=n.replace(c,a);return Object(u.b)("li",{key:e,className:m()((t={},t[A.selectedItem]=i,t),A.listItem)},Object(u.b)(l.Link,{className:A.link,to:""+r},e))}));return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:A.list},i))))))},t}(o.a.Component),k=a("MjG9"),w=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),v=a.n(N),C=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:v.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,m=t.relativePagePath,d=t.titleType,p=s.tabs,j=s.title,x=s.theme,A=s.description,y=s.keywords,N=s.date,v=Object(w.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,_=T?n.pathname.replace(T,""):n.pathname,B=p?_.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",S=x||v;return Object(u.b)(r.a,{tabs:p,homepage:!1,theme:S,pageTitle:j,pageDescription:A,pageKeywords:y,titleType:d},Object(u.b)(g,{title:o?Object(u.b)(o,null):j,label:"label",tabs:p,theme:S}),p&&Object(u.b)(h,{title:j,slug:_,tabs:p,currentTab:B}),Object(u.b)(k.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:m}),Object(u.b)(C,{date:N})),Object(u.b)(f.a,{pageContext:t,location:n,slug:_,tabs:p,currentTab:B}),Object(u.b)(c.a,null))}},"4Mad":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),["components"]),c={},r={_frontmatter:c},s=b.a;function m(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(s,Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can enable monitoring for applications in OpenShift Container Platform."),Object(i.b)("h2",null,"Configure Monitoring and Metrics"),Object(i.b)("p",null,"Monitoring "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.6/monitoring/enabling-monitoring-for-user-defined-projects.html#enabling-monitoring-for-user-defined-projects"},"https://docs.openshift.com/container-platform/4.6/monitoring/enabling-monitoring-for-user-defined-projects.html#enabling-monitoring-for-user-defined-projects")),Object(i.b)("p",null,"Metrics"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.6/monitoring/managing-metrics.html#managing-metrics"},"https://docs.openshift.com/container-platform/4.6/monitoring/managing-metrics.html#managing-metrics")),Object(i.b)("h2",null,"1. Create Config Map"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to project: ",Object(i.b)("inlineCode",{parentName:"li"},"openshift-monitoring")," "),Object(i.b)("li",{parentName:"ul"},"Go to Config Maps and create a config map using the following YAML.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Set the enableUserWorkload setting to true under data/config.yaml"))),Object(i.b)("li",{parentName:"ul"},"Save the file to apply the changes. ")),Object(i.b)("p",null,"YAML:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n   name: cluster-monitoring-config\ndata:\n  config.yaml: |\n    enableUserWorkload: true\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"$ oc -n openshift-user-workload-monitoring get pod")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"NAME                                   READY   STATUS        RESTARTS   AGE\nprometheus-operator-6f7b748d5b-t7nbg   2/2     Running       0          3h\nprometheus-user-workload-0             5/5     Running       1          3h\nprometheus-user-workload-1             5/5     Running       1          3h\nthanos-ruler-user-workload-0           3/3     Running       0          3h\nthanos-ruler-user-workload-1           3/3     Running       0          3h\n")),Object(i.b)("h2",null,"2. Create Service"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to Manage project : ",Object(i.b)("inlineCode",{parentName:"li"},"mas-<instanceid>-manage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create service: ",Object(i.b)("inlineCode",{parentName:"li"},"<instanceid>-<workspaceid>-<bundlename>-monitoringagent"),"\nYAML sample: replace instanceid, workspaceid, and bundlename in the file below:")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: <instanceid>-<workspaceid>-<bundlename>\n  name: <instanceid>-<workspaceid>-<bundlename>-monitoragent\n  namespace: mas-<instanceid>-manage\nspec:\n  ports:\n    - name: 9080-tcp\n      protocol: TCP\n      port: 9080\n      targetPort: 9080\n    - name: https\n      protocol: TCP\n      port: 9444\n      targetPort: 9444\n  selector:\n    app: <instanceid>-<workspaceid>-<bundlename>\n  type: ClusterIP\n")),Object(i.b)("h2",null,"3. Create Service Monitor CRD (Custom Resource Definition)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to project: ",Object(i.b)("inlineCode",{parentName:"li"},"mas-instanceid>-manage")),Object(i.b)("li",{parentName:"ul"},"Create ServiceMonitor CRD: ",Object(i.b)("inlineCode",{parentName:"li"},"<instanceid>-<workspaceid>-<bundlename>-monitoragent"))),Object(i.b)("p",null,"Sample YAML"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    k8s-app: <instanceid>-<workspaceid>-<bundlename>-monitoragent\n  name: <instanceid>-<workspaceid>-<bundlename>-monitoragent\n  namespace: mas-<instanceid>-manage\nspec:\n  endpoints:\n  - interval: 1d\n    port: 9080-tcp\n    scheme: http\n  selector:\n    matchLabels:\n      app: <instanceid>-<workspaceid>-<bundlename> \n")),Object(i.b)("h2",null,"Querying metrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to Montoring->Metrics. The following Maximo queries are available:")),Object(i.b)("table",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Query"),Object(i.b)("th",null,"Description")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_mbo_count"),Object(i.b)("td",null,"Business object count ")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_heap_memory_max_count "),Object(i.b)("td",null,"Maximum heap")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_heap_memory_used_count"),Object(i.b)("td",null,"Used heap")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_pool_size"),Object(i.b)("td",null,"Thread pool size")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_deadlock "),Object(i.b)("td",null,"Deadlock threads")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_count"),Object(i.b)("td",null,"Thread Count")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_pool_active_count"),Object(i.b)("td",null,"Thread pool active count")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_pool_active_count"),Object(i.b)("td",null,"Thread pool active count")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_thread_peak_count"),Object(i.b)("td",null,"Thread pool peak count")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_db_connection_free_count"),Object(i.b)("td",null,"Free number of DB connections")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_db_connection_used_count "),Object(i.b)("td",null,"Used number of DB connections")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_db_connection_total_count "),Object(i.b)("td",null,"Total number of DB connections")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_session_stats_active_count "),Object(i.b)("td",null,"Count of active sessions")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_session_stats_live_count "),Object(i.b)("td",null,"Count of live sessions")),Object(i.b)("tr",null,Object(i.b)("td",null,"maximo_session_stats_create_count "),Object(i.b)("td",null,"Count of session stats created on Liberty"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on the detail icon to get the list of queries:")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQY05WQzU7CQBCA9z2IESxY6EJptQYxJF68EH58CzwYGtJDX48jr+DBO+jBsJ3967JtWYLepOKXLzOTTCaZGWRbdezgZsuZvcxe52EYLkqIoiiO42NhQNi7rVxejSbPmdZFUeR5XpwNctrdykV1OJomAEJwrXVWyrG/ek+WbwS5flCr20/D8RehXCiRaqmyctOd/txyJjXCrm81mveDxy1JDEKIP7c1p0kpTUJOx6ta10HvgZDDNADkp8l+VEqZ56C269csO+j1gdJ/Pwx3b1od764/WG8+hEyBMmCMcW7it/Q34eAehj+BFEF6JYAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/3cbba/maxqueries.png",srcSet:["/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/7fc1e/maxqueries.png 288w","/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/a5df1/maxqueries.png 576w","/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/3cbba/maxqueries.png 1152w","/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/0b124/maxqueries.png 1728w","/maximo/manage-playbook/static/57e82c255720b3bbf9defe9c2825c3c4/277bd/maxqueries.png 1919w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null),"- Sample Graph",Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABNUlEQVQY042Q30oCQRTG5zUCM0sTtU1dSirxokgMKXoUL8M2BHu8rnqAoqCIQnfd2dnZ+XdmZts1kG7683Euft+Bc/jOQfVKdafhVGu10Wh0NfbG197Nz5pMJrfTqed5GWQWNZpucWv7oNujMU3T1Fqb/k8AgJrtPafldg6787kPoAghUoGCvFbSy/puQZsQY9TYbRdK5ZP+gESYSsul/lqsjWXKhExH3PixFmCVXoXKwQ8Jarn7xc3K2fCC0uSdqJBJoYCpHBaJfF3wt5A/zpKASsykBOAAAsBYTZlAdae1XioPzy8jEgcxxZyHjEdcYC6IyOYZXnLeYZxKSaRYJPzuGT98JHnstcJGfzDMrxXCaP3nq6TR9y/0acZQ56jnNN3e8encD4wxXGSpQf8qZYBKEBI+AQStgQZU7KCCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/3cbba/metrics.png",srcSet:["/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/7fc1e/metrics.png 288w","/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/a5df1/metrics.png 576w","/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/3cbba/metrics.png 1152w","/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/0b124/metrics.png 1728w","/maximo/manage-playbook/static/b3a3a9e4d2e2ad5c4afbb597e750f782/9e322/metrics.png 1875w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h2",null,"Garfana"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow the link to setup Grafana",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ibm-watson-iot/iot-docs/tree/master/monitoring#3-grafana-setup"},"https://github.com/ibm-watson-iot/iot-docs/tree/master/monitoring#3-grafana-setup")))),Object(i.b)("li",{parentName:"ul"},"Sample Dashboard")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABXklEQVQY01XQ3W7eIAwG4FzA1rX5BQyEfwIkEL60VY9aTZs0afd/QSOHkx69sk8s2920EEwowrBgkMouCL49PX//8XJ7+s84IYTpyzCPMx4m1E+oI4xPCGYMIFcQgiqJKJsRLG0isAXTGZE2EROgjBMAAncwRgjBnfCaSgHr6k6vorHFr04TzrmWIFYlWdxo9C1vaeN7YE2OXCvaCWNSySEf6cwuBRs3E7zevIkeVmGcL48zn6VJ+x72tOc9HTdtbdduXhC9YQpMLIiNEx5HPM6kFcCV1JtQXpkgdeDCYRANasjamcOVz6N85vJV6s/z+l2vX/Xtz+vH3zdbHGXti1TIO41btWFCtpYqRSmHTnm75eiP6I5gkrfJt9xq2mpkSvjo6uteHuF8xPqezyvVaz+vWK/ogu3GtjdwQhgmbBzRMCxN3y9DPz/3ozL+yNd+PFKuym7SeG1Do7Rnq/oHSuw+rDMaVowAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/3cbba/grafana.png",srcSet:["/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/7fc1e/grafana.png 288w","/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/a5df1/grafana.png 576w","/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/3cbba/grafana.png 1152w","/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/0b124/grafana.png 1728w","/maximo/manage-playbook/static/ff7c4c6d00674e8cb74787b592b2db56/6033e/grafana.png 1897w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-upgrade-planning-monitoring-mdx-efcde1c493091b50a189.js.map