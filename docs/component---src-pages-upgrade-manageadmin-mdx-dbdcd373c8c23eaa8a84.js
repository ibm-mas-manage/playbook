(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),d=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,b=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),h=a("dI71"),x=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,b=new RegExp(r+"/?(#.*)?$"),l=n.replace(b,a);return Object(u.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(u.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},i))))))},t}(r.a.Component),N=a("MjG9"),k=a("CzIb"),T=a("Asxa"),A=a("OIbQ"),w=a.n(A),v=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:w.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,m=t.relativePagePath,p=t.titleType,d=s.tabs,O=s.title,h=s.theme,x=s.description,T=s.keywords,A=s.date,w=Object(k.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,E=d?P.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",C=h||w;return Object(u.b)(l.a,{tabs:d,homepage:!1,theme:C,pageTitle:O,pageDescription:x,pageKeywords:T,titleType:p},Object(u.b)(g,{title:r?Object(u.b)(r,null):O,label:"label",tabs:d,theme:C}),d&&Object(u.b)(y,{title:O,slug:P,tabs:d,currentTab:E}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:m}),Object(u.b)(v,{date:A})),Object(u.b)(f.a,{pageContext:t,location:n,slug:P,tabs:d,currentTab:E}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gEgR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),["components"]),b={},l={_frontmatter:b},s=c.a;function m(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Install Docker"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Docker Install: ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com"},"https://docs.docker.com")),Object(i.b)("li",{parentName:"ul"},"Make sure ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/config/daemon/"},"docker daemon")," is running.")),Object(i.b)("h2",null,"Get the Manage admin docker image"),Object(i.b)("p",null,"Use the following steps to retrieve the Manageadmin image:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"oc login")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ oc login --token=sha256~yLcd9N_ih1UX7tGcq9REywmoliEGvK4R-rtDu_xxxxx --server=https://api.mas-app-sb123.cp.fyre.ibm.com:6443\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Expose the internal registry to external using Route")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ oc patch configs.imageregistry.operator.openshift.io/cluster --patch \'{"spec":{"defaultRoute":true}}\' --type=merge\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Verify the internal registry route hostname")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ oc get route -n openshift-image-registry\n\nNAME            HOST/PORT                                                                PATH  SERVICES        PORT      TERMINATION      WILDCARD\ndefault-route   default-route-openshift-image-registry.apps.mas-app-sb1.cp.fyre.ibm.com         image-registry  all       reencrypt        None\nimage-registry  image-registry.openshift-image-registry.svc                                     image-registry  5000-tcp  reencrypt        None\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login using the default registry route hostname")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"docker login -u ",Object(i.b)("inlineCode",{parentName:"p"},"<user_name>")," -p $(oc whoami -t) default-route-openshift-image-registry.apps.",Object(i.b)("inlineCode",{parentName:"p"},"<clustername>"),".",Object(i.b)("inlineCode",{parentName:"p"},"<basedomain>")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo docker login -u kubeadmin -p $(oc whoami -t) https://default-route-openshift-image-registry.apps.mas-app-sb123.cp.fyre.ibm.com\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you get “x509: certificate signed by unknown authority” error message, then you should place the Router trusted CA on your host.\n"),Object(i.b)("li",{parentName:"ul"},"Extract the CA from Red Hat OCP cluster, where registry is configured")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ oc extract secret/router-ca --keys=tls.crt -n openshift-ingress-operator\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Perform on the node, where the image pulling throws x509 error.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo cp tls.crt /usr/local/share/ca-certificates/.\n$ sudo update-ca-certificates\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make sure docker daemon is running.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ ps -aux | grep dockerd\n\nroot       203  0.0  0.0  10508  4232 pts/0    T    01:28   0:00 sudo dockerd\nroot      2397  0.0  0.0  11016  4612 pts/1    S    16:49   0:00 sudo dockerd\nroot      2398  0.0  0.4 1538160 111260 pts/1  Sl   16:49   0:07 dockerd\nsarika    3999  0.0  0.0   8160   724 pts/1    S+   23:26   0:00 grep --color=auto dockerd\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pull admin docker latest image:\ndocker pull ",Object(i.b)("inlineCode",{parentName:"li"},"<Public image Repository>"),"\nFrom the Manage project in OpenShift console, get the ",Object(i.b)("inlineCode",{parentName:"li"},"Public Image Repository")," value from the ",Object(i.b)("inlineCode",{parentName:"li"},"<instanceid>"),"-",Object(i.b)("inlineCode",{parentName:"li"},"<workspaceid>"),"-admin in ImageStreams under Builds.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzUlEQVQoz5WSS28SURiGJ+rCVhe60dgWWrQUymWmNEDFAtJ04S3+OXe6cuXlR3TduDIS1Bgj2Np2QLAMMCBzfTwcpRdjQp3kyXdy8uU77/t+oyzMzZHVNBKqyrUbs1wIJjg3r3J+PsnFkCqZ+oM831SZFly6pXE1tsaV5SyXIxmmwmmml9Ioy8kVogmNQDDEylqeJ1tlnr3Z5el2jRfvdF4KTtZXZZ3X5bpkfPf87YFAlyixpEY4GmMmsEDx7gatVhtsC6t7iDvo8b+fktBWicSSYmCIfLHEx53v/DB6NFstDtsGjuthu+4RzgmO7zwGP4cMLRtFW80wUjlSmBcKd/d1uuaATqeD4zjyVd/3J3KkMC4yXIzEmBUZFkqb1Go1DKONaZp4nndmq+OhSlTYHQ28PhMgt17k/acPdMwh/l+NE8bJ/lGvks4VKG5sEldT3H/4mG97+/SHDoOhLTmL3TGW7aKksjkyt++wJJTee/CInT0dQyh0PV8w2ebpHP3fWw5H49LyeqHE5y9VDvQ63W6Hft+k1+vJPMfVsixs2z61sOMHRhnGVdRUmmBoUWZYqVSoVqtiOV+p1+s0Gg1Zx+eW+J2azaZYnPFPlb8A3azCMv1Vgn4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/3cbba/imagestream.png",srcSet:["/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/7fc1e/imagestream.png 288w","/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/a5df1/imagestream.png 576w","/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/3cbba/imagestream.png 1152w","/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/0b124/imagestream.png 1728w","/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/4ea69/imagestream.png 2304w","/maximo/manage-playbook/static/495f91b9c05bb45cbef531c79bc7547a/917ce/imagestream.png 2838w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo docker pull `default-route-openshift-image-registry.apps.mas-app-sb1.cp.fyre.ibm.com/mas-sb1-manage/sb1-masdev-admin`\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get Image ID:\ndocker images")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo docker images\n\nREPOSITORY                                                                                               TAG      IMAGE ID      CREATED      SIZE\ndefault-route-openshift-image-registry.apps.mas-app-sb1.cp.fyre.ibm.com/mas-sb1-manage/sb1-masdev-admin  latest   c0e655398e6b  3 weeks ago  7.87GB\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the docker pulled admin image\ndocker run -d ",Object(i.b)("inlineCode",{parentName:"li"},"<image id>"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ sudo docker run -d c0e655398e6b\n\n1f2dfad8d3c813792798dc1f220bf27b7935f604c4817f47346a1f96e2336a92\ntime="2021-06-26T16:54:46.067182200-04:00" level=info msg="starting signal loop" namespace=moby path=/run/docker/containerd/daemon/io.containerd.runtime.v2.task/moby/1f2dfad8d3c813792798dc1f220bf27b7935f604c4817f47346a1f96e2336a92 pid=2832\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get the container id for the pulled admin image.\ndocker ps -a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'sudo docker ps -a\n\nCONTAINER ID  IMAGE         COMMAND           CREATED     STATUS   PORTS    NAMES\nd3544a11901e  c0e655398e6b  "/entrypoint.sh"  6 days ago  Created            boring_hopper\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy the Manage code locally. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ sudo docker cp d3544a11901e:/opt/IBM/SMP/maximo/latest.zip /mnt/c/temp/.\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can also run tools such as integrity checker.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"docker exec -it ",Object(i.b)("inlineCode",{parentName:"li"},"<container id>")," /bin/bash"),Object(i.b)("li",{parentName:"ul"},"Update the maximo properties in /opt/IBM/SMP/maxio/applications/maximo/properties folder."),Object(i.b)("li",{parentName:"ul"},"Execute /opt/IBM/SMP/maxio/applications/maximo/validate_integ.sh")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-manageadmin-mdx-dbdcd373c8c23eaa8a84.js.map