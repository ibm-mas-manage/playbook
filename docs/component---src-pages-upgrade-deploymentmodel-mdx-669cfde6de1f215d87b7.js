(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),s=a("Xrax"),o=a("k4MR"),c=a("TSYQ"),d=a.n(c),p=a("QH2O"),m=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,s=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+x.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),o=n.replace(s,a);return Object(u.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(u.b)(b.Link,{className:w.link,to:""+o},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:w.list},r))))))},t}(i.a.Component),A=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,m=c.tabs,x=c.title,j=c.theme,w=c.description,k=c.keywords,f=Object(T.a)().interiorTheme,v=Object(b.useStaticQuery)("2456312558").site.pathPrefix,N=v?n.pathname.replace(v,""):n.pathname,P=m?N.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",E=j||f;return Object(u.b)(o.a,{tabs:m,homepage:!1,theme:E,pageTitle:x,pageDescription:w,pageKeywords:k,titleType:p},Object(u.b)(g,{title:i?Object(u.b)(i,null):x,label:"label",tabs:m,theme:E}),m&&Object(u.b)(y,{title:x,slug:N,tabs:m,currentTab:P}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d})),Object(u.b)(O.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:P}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},e0hi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return c}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),s={_frontmatter:b},o=l.a;function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(o,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following diagram shows a sample Manage deployment model."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"667px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACLElEQVQozzWQWW+bQBSF+dVVH/o7qkp9bKUqUquqsZKU1DbGCwEMZjG7YVgGY5hhsQEP6VtJokrn4erofLr3HsqJzrSYL1TMKpizmkwywOH0KOP5DrEKYs0zEC3kAPt4pYWcURGjoLV1BryBo4wKs86HrRdiy8d+XMOiO8CLBRo/btywOcRNWrRh1iZ5H6QXB5SGh0DSJKiHqKNgQdwMCAee9wQtVk9VF6S9l56ebG5l8iuTS8siyvoUEZBDyZd4V9KTMdbCvKfSYhADhd4LtKYtD1yCS5AO+yhkHO6Prv8x1yEO44wc0aBG5qPxROsq6y7jAqUFGWGyC/eM4cy1hPMU+AobcbS094x+ZAwtxtEIj5v3ibMw7DG2duUE/Ye3gTLTzbkWbTwpQTg8DnoIWEudqfHc2IECvMFaZC1Mc6ZGa3cbFcUbPKiJzdrmwgwEoB3rM0iJnUIhMDYOXHtGWqdxdh3PNqC/tG3GiDeeCssKFlcqgDW7EVZP3Is2K0lzohMRNY/bSpwk85IsyLo/1pt3K2G35IW1IHIiz+/sDBPKT6qb779uJ3eT++nXbz/YjQzxX3rGTV6dnxP69o52IzzCD4/sb3o6eWC/3NzPltKpGqg471eSb/jFVEbvPiqyWyfFlVNjUQNTqXj/Sd06dXTqxp9VF2310cw/fN6rhyavrlR9IeV5qF40ttKh+joOqCa4Ibgmcdbm5YvTtEN5JtVlaFpy6Z7LhrT98z+HKDFxL/ES2AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/25db75e7a52c6555d81ed61b491c8d92/8f43f/deployment.png",srcSet:["/playbook/static/25db75e7a52c6555d81ed61b491c8d92/7fc1e/deployment.png 288w","/playbook/static/25db75e7a52c6555d81ed61b491c8d92/a5df1/deployment.png 576w","/playbook/static/25db75e7a52c6555d81ed61b491c8d92/8f43f/deployment.png 667w"],sizes:"(max-width: 667px) 100vw, 667px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Each Cluster can run multiple MAS instances"),Object(r.b)("li",{parentName:"ul"},"Each instance runs its own set of pods and runtime code"),Object(r.b)("li",{parentName:"ul"},"All instances within the cluster can share same license pool"),Object(r.b)("li",{parentName:"ul"},"Each instance has its own workloads",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Worker nodes capacity management done per instance "))),Object(r.b)("li",{parentName:"ul"},"Prerequisites stack is defined at instance level"),Object(r.b)("li",{parentName:"ul"},"Independent storage clusters per instance")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-deploymentmodel-mdx-669cfde6de1f215d87b7.js.map