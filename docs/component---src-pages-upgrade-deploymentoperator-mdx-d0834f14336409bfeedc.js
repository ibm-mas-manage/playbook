(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+x.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(u.b)(l.Link,{className:j.link,to:""+c},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:j.list},i))))))},t}(o.a.Component),w=a("MjG9"),v=a("CzIb"),A=a("Asxa"),N=a("OIbQ"),T=a.n(N),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(A.c,{className:T.a.row},Object(u.b)(A.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=b.tabs,x=b.title,O=b.theme,j=b.description,A=b.keywords,N=b.date,T=Object(v.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,I=p?C.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",z=O||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:z,pageTitle:x,pageDescription:j,pageKeywords:A,titleType:m},Object(u.b)(g,{title:o?Object(u.b)(o,null):x,label:"label",tabs:p,theme:z}),p&&Object(u.b)(y,{title:x,slug:C,tabs:p,currentTab:I}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d}),Object(u.b)(k,{date:N})),Object(u.b)(f.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:I}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wJJP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),s={},c={_frontmatter:s},b=r.a;function d(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following architectural diagram shows the Manage deployment via operator."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"783px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAACU0lEQVQozxWRTUwTURDH9+TNeOJE4tkYzx45G8VEVGJiBBMOkibGBBJqY6UYFSNE1CAF1GJAbBQNNEVFtKHSD1vKR7e1BaXpllq6u+12t+1uu19v3259nfwyeZP/f94kM5goqyrQFITaRFJQCYEGeVHlaoqkIAkKolqpK6IMAIDIgwwIVGIUXchkMvk8mSdJiqJrdVEBejrPJzNcNFVK5Sq8CPAUS5C8pjcMo4GimY0GGoCxbIllSFUSNEXQIUCaBo3DYh2RIflcQUCTs3SN5iQkybImSU0PCgh1LFsQvTi7Gil+DRdWwvTnIOXDmR9bzKKPcgXoRR+Ccgdof4xbDlKu9cN3KwfeKOPFS9t/y9i0mzjdu35m4Fe7JXzudqjtVqDrweb14a0O60aHNXRpcOPKvc3zllDfeOzi3Y3OoUinLXLZFjlrDpnGothqhL75PIa0AXu8fyLe+yT6eP7PkCNpnkpaHfvmqYT1FXr/Hpnf7X+BmyfjZnt86M3e4MzepCuNffPv5HLeYjEoSWkADKDpOtQlrUFydW9wh6vJnh3Ws0lnyRJRUvNljapARgBVGQLDwByfPLt7Cyz3XYe7zU3qOsrE3OzSte5hm23paneX6ePoArG2le+5/9M0GjSN+J99Kb0NwfchGXN5giS5LIlrQE1qWgOdGDXHBm2OE6ce3bHcuGDr6XNzVWl7fOYh1jJ5pOX10VZn68kPx46vtLVjtTrP84QgpCtVpiwAvq42qSnZf1Q0HvclmECCQ99xOJ6amDh4OZ2bmyWm7PtPxzJO539nP9oRC4RLcQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/76864713a8245f03dca3ce90610d7365/b88b7/deploymentoperator.png",srcSet:["/playbook/static/76864713a8245f03dca3ce90610d7365/7fc1e/deploymentoperator.png 288w","/playbook/static/76864713a8245f03dca3ce90610d7365/a5df1/deploymentoperator.png 576w","/playbook/static/76864713a8245f03dca3ce90610d7365/b88b7/deploymentoperator.png 783w"],sizes:"(max-width: 783px) 100vw, 783px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Create Custom Resource(CR):")," An admin selects, configures, and deploys the Manage application. The deployment creates a Custom Resource (CR). A CR contains the user entered configuration for the application including the name, version, number of pods, and DB type and connection, type of workloads, location of customization archive, etc. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Create Image:")," The Manage operator gets images from the Entitled Registry and the customization archive (if exists) from the customer repository based on the information in the CR. The operator lays down the Industry Solutions/Add-on images and the customization archive over the Manage Base image to create the final images. It also validates against the dependency matrix. It creates a runnable Manage Admin image and the Manage configured images(workloads). The final images are stored in the Image Registry repository. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Update Configuration:")," The Manage Admin image installs (if the Manage database does not exist) or upgrades the Manage database for new configuration, tears down and re-spawns the Manage deployments.  Manage configured images (workloads) gets deployed to containers in MAS."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-deploymentoperator-mdx-d0834f14336409bfeedc.js.map