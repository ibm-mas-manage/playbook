(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(a,e,t){"use strict";var i=t("q1tI"),b=t.n(i),c=t("NmYn"),o=t.n(c),l=t("Wbzz"),n=t("Xrax"),s=t("k4MR"),p=t("TSYQ"),g=t.n(p),r=t("QH2O"),d=t.n(r),m=t("qKvR"),A=function(a){var e,t=a.title,i=a.theme,b=a.tabs,c=void 0===b?[]:b;return Object(m.b)("div",{className:g()(d.a.pageHeader,(e={},e[d.a.withTabs]=c.length,e[d.a.darkMode]="dark"===i,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},t)))))},u=t("BAC9"),f=function(a){var e=a.relativePagePath,t=a.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=t||i,c=b.baseUrl,o=b.subDirectory,n=c+"/edit/"+b.branch+o+"/src/pages"+e;return c?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:n},"Edit this page on GitHub"))):null},y=t("FCXl"),w=t("dI71"),k=t("I8xM"),h=function(a){function e(){return a.apply(this,arguments)||this}return Object(w.a)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,i=a.slug,b=i.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(a){var e,t=o()(a,{lower:!0,strict:!0}),c=t===b,n=new RegExp(b+"/?(#.*)?$"),s=i.replace(n,t);return Object(m.b)("li",{key:a,className:g()((e={},e[k.selectedItem]=c,e),k.listItem)},Object(m.b)(l.Link,{className:k.link,to:""+s},a))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:k.list},c))))))},e}(b.a.Component),j=t("MjG9"),O=t("CzIb"),x=t("Asxa"),N=t("OIbQ"),B=t.n(N),v=function(a){var e=a.date,t=new Date(e);return e?Object(m.b)(x.c,{className:B.a.row},Object(m.b)(x.a,null,Object(m.b)("div",{className:B.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(a){var e=a.pageContext,t=a.children,i=a.location,b=a.Title,c=e.frontmatter,p=void 0===c?{}:c,g=e.relativePagePath,r=e.titleType,d=p.tabs,u=p.title,w=p.theme,k=p.description,x=p.keywords,N=p.date,B=Object(O.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,Q=C?i.pathname.replace(C,""):i.pathname,S=d?Q.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",z=w||B;return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:z,pageTitle:u,pageDescription:k,pageKeywords:x,titleType:r},Object(m.b)(A,{title:b?Object(m.b)(b,null):u,label:"label",tabs:d,theme:z}),d&&Object(m.b)(h,{title:u,slug:Q,tabs:d,currentTab:S}),Object(m.b)(j.a,{padded:!0},t,Object(m.b)(f,{relativePagePath:g}),Object(m.b)(v,{date:N})),Object(m.b)(y.a,{pageContext:e,location:i,slug:Q,tabs:d,currentTab:S}),Object(m.b)(n.a,null))}},BAC9:function(a,e,t){a.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(a,e,t){a.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(a,e,t){a.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(a,e,t){a.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},alEO:function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return p}));var i=t("wx14"),b=t("zLVn"),c=(t("q1tI"),t("7ljp")),o=t("013z"),l=(t("qKvR"),{}),n={_frontmatter:l},s=o.a;function p(a){var e=a.components,t=Object(b.a)(a,["components"]);return Object(c.b)(s,Object(i.a)({},n,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Follow the steps to Upgrade your existing Maximi environment:"),Object(c.b)("h2",null,"Prepare Database"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Prepare your database by duplicating the existing Maximo production database.")),Object(c.b)("h2",null,"Install Maximo Application Suite (MAS)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Save superuser credentials and admin url from the MAS installtion summary. ")),Object(c.b)("h2",null,"Prepare Customization Archive"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Skip this step if you don’t have customization."),Object(c.b)("li",{parentName:"ul"},"Follow ",Object(c.b)("a",{parentName:"li",href:"customizationprocess"},"Customization")," page. Sample ",Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-mas-manage/playbook/blob/master/customization"},"customization archive"))),Object(c.b)("h2",null,"Deploy and Configure Manage"),Object(c.b)("h3",null,"1. Go to Maximo Application Suite (MAS)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Go to your admin link : admin.{{instance_id}}{{domain_id}} from MAS installation."),Object(c.b)("li",{parentName:"ul"},"user your super credentials to login (from MAS Installation).")),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABtElEQVQoz5WSz2rCQBDG8zyCWi/e214sCgaLBxVF8ORFDx5MTait+AzSg1cfQlDUh2nSmBobTfyvXzOrK0qrpQM/lpmd/XZmZ4VCoYBisYhcLodkKoVkMnkknU4jk8lcJOXmZ7NZlEol5PN5RCIRCI7jYL3ZYLfbwTAMvKsaVO0DqqpiOp1ivV5jtVqdsVwuz9b5fA6ywWAAwTRNFrBtB0PjE5o+gm6MMXbjw+EQuq7/iaZp7PJ2uw2BhMhGYxuJdA6PMRHxeByxWAyiKCIajTLEw3oK7RPUaiKRQLPZhICDabqJ27t7PIRCLCESDiMQCMDnv4HfhVav18vw+XxneDweBINBNBoNCO7T7Ss0LTfwhm63i16vh36/j5fXGqQnBbJSxXO1BllWUKlUIEkSQ5ZlKIqCcrmMer2OVqu1r5A0t9stLMtib0GDIsgs6wuzmeMObcubwWQyYXm7QzU0ODIq5tjyxp00bfCpcp9Pc7FYHPfJpwI4tm2zvE6ncy5IQUqgmwn+TbgQFzv1Cf69fgjSBh3g/4uq4u1dg3J+FeSV8bchUTpALV3jouBpe+RThf8V/AZszSHlToRb/AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/c73781019e2d2694b234cdba278e742a/3cbba/suite.png",srcSet:["/playbook/static/c73781019e2d2694b234cdba278e742a/7fc1e/suite.png 288w","/playbook/static/c73781019e2d2694b234cdba278e742a/a5df1/suite.png 576w","/playbook/static/c73781019e2d2694b234cdba278e742a/3cbba/suite.png 1152w","/playbook/static/c73781019e2d2694b234cdba278e742a/0b124/suite.png 1728w","/playbook/static/c73781019e2d2694b234cdba278e742a/4ea69/suite.png 2304w","/playbook/static/c73781019e2d2694b234cdba278e742a/66c2e/suite.png 2874w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"     "),Object(c.b)("h3",null,"2. System Configuration"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Go to Configuration tile."),Object(c.b)("li",{parentName:"ul"},"Configure SMTP ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"SMTP configuration will be used to send welcome emails to the users. During upgrade, all the Maximo users will be migrated to Manage. "),Object(c.b)("li",{parentName:"ul"},"The maxadmin user will be created automatically with password maxadminmaxadmin#1. You can update the password from the user page.")))),Object(c.b)("p",null,"Sample:"),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABW0lEQVQoz4WS66qCQBSFfbQ0BH2l/hTZhZKeqR+pUL96hMCkO3ZPM1iHtWF7OGEdYTGzZ2Z/s/Z2DMdx4LquyLZt1Go1mKYpsizrq3iG5zW/Xq/DGAwG6Pf7GI/HWCwWiOMYSZJgtVphu91is9l81Hq9RpqmCMMQvV4Po9EIRrvdRqvVwnQ6xe12w/V6RVEUpV6v15+Rej6f5chvPp+j2WyKMaPb7UrAW3gb3Z3PZ9zvd7lAL7lcLmWsazxHaBRFaDQaoDnD9310Oh0BMulwOJRJj8dDRDj3NKa4T2Ce51IdYWyfAD3PK4G73U6gdEsXKu69Sx3OZjNhDIfDX4dBEEijl8slTqcTjsejQCnGVVB1WAmcTCbY7/cCJey9X4RyzvJVjCsdask8wHLfgRSB2sd/gVoy3x17yGQtmyPLpns6Vcfago8O+euzLJNkuuBcxZj9qlrn++RfVuAP92fnAoI1M60AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/3cbba/smtp.png",srcSet:["/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/7fc1e/smtp.png 288w","/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/a5df1/smtp.png 576w","/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/3cbba/smtp.png 1152w","/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/0b124/smtp.png 1728w","/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/4ea69/smtp.png 2304w","/playbook/static/3f3b33976ac38bc0be3cf55d7b3b44c5/ee212/smtp.png 2876w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("h3",null,"3. Configure and Deploy Manage, Industry Solutions and Addons"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Go to Catalog, click Manage.")),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB60lEQVQoz42T2WoiQRSGfazJAyQXKip4Kz6SFzO3oqIgM0NCbhUlzMUkaERxQcW1u926RbQ77b7+U+eEdiKRYQ781NKnvvqrTrXN5/PB7/ezHA4Hbm6+4O7uFk6nk8fXZLfbWW63Gy6XCx6PB16vl9fYJpMJVqsVKBaLBUYjDaY5x3z+LtM0z60lyiNZOdQ3DAPJZBK2TCaDRqMBRZEhST2hEXo9lT8mEglu0+k0UqkUt9lsFrIso9vtflK9Xn93SHSK8VhDPv+KSqWCUqmEYrHI/XK5jGq1imaziXa7fRVGoo1s+BCaNkOrNRAb6HwN6/Uaw+GQExVFEe6lf4qgttPphOPxxMDZTIeqjkU7Y9jxeGRgp9O5cGItvgZlIIlC1w3UanUMBn2hgXCsnYH/446BBLKAhjEXgDFXko68XK7Q7/cFsM1QS5LUvRh/dH0BlGUFT0+/8PLyjFwux2q1OsLtiJ2SyLkk90X/7xxteuGQ7ori93MeX7+F8Pj4gPv7B/z88V1UvSKcr86FOxwOwpWG7fZwnqPTUPU/AclRIBBAKBRCJBJBOBwWb6vGd6qqKuiJLZdL8fiHPDedTllUROueL4CFQgHBYBDRaBTxeByxWIyTCKLrunC1Zb29mdhsNtjtdtjv9/y3WMA/h6xImm0FdOQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/3cbba/managetile.png",srcSet:["/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/7fc1e/managetile.png 288w","/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/a5df1/managetile.png 576w","/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/3cbba/managetile.png 1152w","/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/0b124/managetile.png 1728w","/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/4ea69/managetile.png 2304w","/playbook/static/57e98921e159b4c6b67f1c34cdbbb000/5a470/managetile.png 2872w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Select Manage, Industry Solutions and Addons.")),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACB0lEQVQoz4WSy27TQBSG/QwskBASjSLiXJy0SpRGkdhUgETcEpouckFUAnF5Eba8DGLHk7BDEGjtxHZsj++X+ufMRKlCCWDpaM5Y53zzn4v08tVrvHn7Di/OzzEajTAejzGbzTCdTv9pk8kEiqKgVCqh3++j3W5DlmVIFxeXsFY2dF2HpmmwbRue54Exdm2+7/9mQRDAcRwScIZGQ0Gv10O320WlUoGk6xrm8zkWiwUsy4JpmjAM4/rktoHyh7hxnwOHp2eQawoO9vfR6XRQrVYh8QQO2ii7qWYb9AdwOESr1RIKm83mGrj8/hPal6/Qv/0QQeskthOy7buuC1VVUS6XRS/r9foaaBomLMOCrulYUS+jKEYQRpTIexUK36eebUM3wMFgIIaygdVqNUiXSweOF2NhusJWbkT3iM4QNovAghSmHexUuA3kMKGQ+TGStIDDAixNG4blkR/CC2LxL0pyeBTzP4UcKBQmSYI8y8QqMApiLvXRD5GmKZUf4uoqR0oxfwPu7XFgA3KVKyRgHCfICMhXw1w5YNS7MAyRJBwYEbBAHO9WeKw+wf3yPTQbsjClTovNA9YJtAruek34fQPJ83wn0HFsPD0do94+QvPwMToPTnBweASJl8Y/rsqlcl1GCmnSWZaKiRdFgeRmyTR9Zi/w6Pl73FI/4c7wI24/+4y7Dz/gF6N/+BCK85QnAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/3d9cbbe309145812c5547f5b220d51a5/3cbba/addon.png",srcSet:["/playbook/static/3d9cbbe309145812c5547f5b220d51a5/7fc1e/addon.png 288w","/playbook/static/3d9cbbe309145812c5547f5b220d51a5/a5df1/addon.png 576w","/playbook/static/3d9cbbe309145812c5547f5b220d51a5/3cbba/addon.png 1152w","/playbook/static/3d9cbbe309145812c5547f5b220d51a5/0b124/addon.png 1728w","/playbook/static/3d9cbbe309145812c5547f5b220d51a5/4ea69/addon.png 2304w","/playbook/static/3d9cbbe309145812c5547f5b220d51a5/8dc0b/addon.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy ")),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxUlEQVQ4y22Sy0sbURTG508wC2ObmEwmjwaki9aCCE23ha7yGOqmNLZ1IRak0E0XITNJZiaJeTWx0qZboQsXYiQQUzQ+gl2ULAtFdyJxIYKK0qYt1K/3nqhF2gs/zpk7l+88hcbKChqNBpaXl7HC/Hq9jlqtRlQqFczPz2NhYYFYXFyk+6WlJayurmJjYwPNZhObm5tYW1vD+vo6hJD8ECMjI5BlGaFQCDJHvrDyPwSDQXrv8/lgsVggiiI8Hg9sNhusViuEeCIJI5lEPp9HoVBA4XWJyDOKxRJKpasUi0WUy2WMj4/D4XDC6XTC6/XC5XLBbrdD0HQdqhpDJBJhVoXOvnXDIAyDBTP07h1D0zQkEglkMhmEw2FIThdl53a7mbiDshUuhPhD7lerVezs7GBrawvb29vk7+3tod1uk93d3cXx8TGSrCqz2YwbTJBnx8UoQ0VVoMZiFD0ajVJzT09Psb+/j4ODAxweHuLo6Igsvz87OwM/MzMz6DGZIEkSCV0Kqq8iiEWiVJKiKDS9k5MTyqLT6RDfOz8YP/Hte9fyUypNw3QuyMUuEOKKipjSLVlRomi1Wvj/+c3g2f2ir/fvptHTY2JD+SvYHQorNR6PUx+5nZ2dpb3k+1ivf0S9VkWl2cYcizP3GfjwCah8ASYjb9HXa4JDcl7NkDfXYBPlYjqb6sTEc/j9fgQCAQSCbBf9D3D/WRn3Xn7F3ckWhiZaGH6xBZ8chdjfC7vIeyheIqTTaZoYL1ljcNFsNoepqSnkcjm2nwVk0hqySQXZlIpMMoo3BR1PRx/BarkOyWGDQ+yHxBBFVnIqlaJdi8XiTFSjaSfpzgD/xwPqukGBdJ0F1nRkWMBweBR21004vXcgeQfhHhiCw+WFYNACG4jFEzRp7ndFdLKXgufwgNlsBo/DT2AeCMEyOIZrt0bRd3sM/Z5h/AHMD4epjH99QgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/3cbba/managedeploy.png",srcSet:["/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/7fc1e/managedeploy.png 288w","/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/a5df1/managedeploy.png 576w","/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/3cbba/managedeploy.png 1152w","/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/0b124/managedeploy.png 1728w","/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/4ea69/managedeploy.png 2304w","/playbook/static/c3d9e85ec9f2cc546dac2aa213c50ca2/8dc0b/managedeploy.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Go to Actions on the top right of the page. Select Configure Workspace.")))),Object(c.b)("p",null,"  ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZ0lEQVQoz6WR207DMBBE8899aSVA9AH1I7moVI3jJL57HYpAGnbdFAJC4oEoRyPbq9nxurm+ucXV9Ra32y02mw026zXrmfX6b1arFXa7He7uduxzg8ZmwHkCTQX/+dIrwD+aVg0YTUSrOhwOB+h+RIiZSUhpSa4aY/xGzglKG9w/HbE/DmhGwwYpgArxYcZeT3g4jLh/1njuPDo7QRlCO2YoW2DSG0x+h0unWi8QMWx8Or2gcZzQPh4RuUsphdN6DMbBhVTxkjYRYioMIdGElAU6GxHV5CEENic0g+5h9YDsY03Zmx7OWUxsLsWiozNQqoUZR1hr4b1nkzhrqnWCpOUZtlCd4ofxNWGIgQ1dndn5OsRnAX3fV7M4z/Ry3Z80Uqi1rt3EUMxkTw7LIuU0TXUtXBpdtFLO2lyKZCE6DENNIsVpkUYadV1XZyUBLI9F1LCqvptfnBMu4352m82X/LpPc2L6us0HpyvhrMLzf6IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/3cbba/configurews.png",srcSet:["/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/7fc1e/configurews.png 288w","/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/a5df1/configurews.png 576w","/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/3cbba/configurews.png 1152w","/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/0b124/configurews.png 1728w","/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/4ea69/configurews.png 2304w","/playbook/static/e2c3eed995b53679892efe2d16ce4b1e/05425/configurews.png 2860w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure database",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Click on configure ")))),Object(c.b)("p",null,"  ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYklEQVQoz42ST0+DQBDF+ap+FhMvHjx58TvoxasxxnjQo/bSEP7UtrEFCnR3WSiF9rlvzTaYWNPDy8Ay+5s3M3hfyxR+MEFWKKylRl1raF2beFxaa2y3W0TxBFeXFzi/vsfZDXD72sATYo2iyKGURFUpE08ToctlguenRzy8fODurcV7WMFL09QAS0ipDLAyzwUWiwXyPLcXpZRHobWB7vcA9h3QS3QbBS/LMqxWKwtjkhDCAhm7rsNut0PTNPYbc1yei9LkCVNUyApSGYd0QldMoBu2whGwEC9wVgQPgf/JAnlZVxq5KKAMUKj64IAF2rY9ebbe0P7PUozTqrEQuqPYMsFuw39tnbIO2eZwLmz/cxLbOZZlad+dkiQ5RC7TyeVx7r+ArMLk0WiE8XiMIAjg+z7iOMZ0OrXnjFEU2TN+D8MQ8/kcs9nM/hkHoIOyhc1mY9X3/S+xfUZufih3xtF8A8IY99qRu1BJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/3cbba/dbconfigure.png",srcSet:["/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/7fc1e/dbconfigure.png 288w","/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/a5df1/dbconfigure.png 576w","/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/3cbba/dbconfigure.png 1152w","/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/0b124/dbconfigure.png 1728w","/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/4ea69/dbconfigure.png 2304w","/playbook/static/7198c966ee65f7c23422e1bb9e9aae12/a4b11/dbconfigure.png 2560w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("p",null,"  ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6klEQVQoz5WSiW6DMBBE/f8fSdRwKWp9YLABcUw9bh3RKk4C0hOYXa9nZy2UUrheP1BVFcqyRN/3WNcVy7K8TXr2fYeww4ibdLC9g/eBccR4EgrYti0itNYog7q6rtG2LZqmiWq55ptx5xyGYcjCrhKi67r7wlr755twg/f+JTw0FuQm+njEGBOVSSlj4jzPmKYpC+NsPRaUUqEoClDpUf6jdl7B/OChwuVS3L06FjtLVKhNh09pgl/dKTU5hAmtfkkdPch5RNPZwbOcpFJQmQ6D4HBy94wF07SfxX8L/lwV/uS0/pNOf7flb2crUDkKtFwAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/3cbba/dbconnection.png",srcSet:["/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/7fc1e/dbconnection.png 288w","/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/a5df1/dbconnection.png 576w","/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/3cbba/dbconnection.png 1152w","/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/0b124/dbconnection.png 1728w","/playbook/static/ff05323cb49175f7de3e267aa6ad19ab/01437/dbconnection.png 2112w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure schema, tablespace, certificates.")),Object(c.b)("p",null,"  ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRUlEQVQoz42RTU7DMBCFfRCWbBALboBExYWq9EegBhBciD1IvQAXYEMIIU0aO3Hs/FWg5OFxCUSoQrX0JR5n5s3zhLlXN3Cv73Dp3mI8duA4DubzOabTKWazmX3vYjKZYLFYYDQ6w9HxCQ5OL3B47oJ1AD5bem5X1/3u91me94KHxyXun1osnwEWJCHWYg2tFFSew/d9xHGMNE0hhPgXyqnrBm3b4qMWaCoOJjMJmWUoygKZklaMc26Tc9NgiDJNh7HWGkWht+dKI9cFWGbEqLgsSysoBDdJBZqmwWaz2Yuqqmw9wbhIraDS6luQSG33PqlnWPgXMkGw17cV3oMA3DiLzSyVsU7uiLquLbSnIinlz9mQXtA6TM1woyiyQW5cRquVHTi5GYpSvJcg/YAwDO1g6cqe5yEwjpMksWf9VfqCYbzr2xfrcJH5pc/V8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/9a8e62bb009806627dc2907268a1ded0/3cbba/databaseconf.png",srcSet:["/playbook/static/9a8e62bb009806627dc2907268a1ded0/7fc1e/databaseconf.png 288w","/playbook/static/9a8e62bb009806627dc2907268a1ded0/a5df1/databaseconf.png 576w","/playbook/static/9a8e62bb009806627dc2907268a1ded0/3cbba/databaseconf.png 1152w","/playbook/static/9a8e62bb009806627dc2907268a1ded0/0b124/databaseconf.png 1728w","/playbook/static/9a8e62bb009806627dc2907268a1ded0/4ea69/databaseconf.png 2304w","/playbook/static/9a8e62bb009806627dc2907268a1ded0/5a470/databaseconf.png 2872w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Configure languages, server bundles."),Object(c.b)("p",{parentName:"li"},Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABv0lEQVQoz21SS26jQBDlFFnO2hfIzteZSLZjTTSeKHeZQ3g/h8jWywgCBJpf09B8jDFvqsoGaaRBPFU31fX6VT2cn4dXHH694cfLAd+fnrDdbrHb7f4Lzs35zWaD/X6P9XqN1WqFh8dnfFu/wGn7AU13wXkELpcLtNbo+17WwzAsGMdxAec48nM6nXA8HvH7T4njO+B4aYCy1KjrSshc14Xv+4iiCEmSCNI0lVxRFP9Eruu6TohxrYHBwEnosCkNDBOakohrUdi2Lay1C/i7tQ3lzoKOznRyrkNV1ShNDVNZOHmewxiDigiZ9FZo0TTNQtY0lvK0b88YrzSacSLcIu9t0xPprdYpijuhrUVh6IcIw1Da4ssEWYYsL0QNpgnT9UphxkQX9dR+SSqpZdfzkdKcMir8ymN8qgCJUjK3eVZaE3lRkpL7vO4PcYFeIZw7cz4+XARBgJyKkjyF9+nB8zwxhqGInLtISWWkUooFYooqyZDmWvaaPJjn7CgVI6PD3LKpDaKvSNRxC6xQxbGo5NaZOCMCPwjJfUVmluI0z28hjKgg5iKjxZSO5sQO8+/AYMfn9Q393el+2bOBTMb4C/gb2jAy9Y6aAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/3cbba/langserver.png",srcSet:["/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/7fc1e/langserver.png 288w","/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/a5df1/langserver.png 576w","/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/3cbba/langserver.png 1152w","/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/0b124/langserver.png 1728w","/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/4ea69/langserver.png 2304w","/playbook/static/8c33f4b233477af646ea0ce1f78c4de2/8dc0b/langserver.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Configure Customization Archieve if needed."))),Object(c.b)("p",null,"  ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAiUlEQVQY042QyQoDIRBE/f+vFCEIoo77dumkBY3jzJAcHm0fqrpKQikFIQR478Fae8E5N2cI4RbUHvoAJl9AGGPAOe+mSinQWnf2tzFmiu8Y5kRKOcVPCdYkMUZIKZ1YD5GR7CndvqOolDLJOX8Nw8cQL7TW/qbWejJEhmGvjBV+Vd1BzWD9DpxvnkLM1tHQKl0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/f3111811cfcc9cf079a80717928ef279/3cbba/customization.png",srcSet:["/playbook/static/f3111811cfcc9cf079a80717928ef279/7fc1e/customization.png 288w","/playbook/static/f3111811cfcc9cf079a80717928ef279/a5df1/customization.png 576w","/playbook/static/f3111811cfcc9cf079a80717928ef279/3cbba/customization.png 1152w","/playbook/static/f3111811cfcc9cf079a80717928ef279/0b124/customization.png 1728w","/playbook/static/f3111811cfcc9cf079a80717928ef279/459f3/customization.png 2248w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(c.b)("h3",null,"4. Activate"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on Activate blue button on top right when you see ready to be activated message."),Object(c.b)("p",{parentName:"li"},Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABb0lEQVQoz5VRy0rDQBTNN7rTjbgoJF1UWiq48j/8D3/CtWtrTWwmr3neTCoUPM5MkhJtEQwc5sHJedyJVqs11us15vMESRwjSXrE8d/w3OubGS4uZ7i7f8ByucRicYuIlRpSKRwOB/z3e94CV4/A00t//nKIam7AihJZlqGqarStdejQdRbW+n17BhSgDUEogjH9PVGLSGoJ0/pLjbQgvH5wbNICm6xCVigUwoLxFgW3w96ilHso48zI9OJETqxH1LztoPIa1jmUjvyeC6SMgzWE0gnUao9G78Naq66H/oQhG8RoIuZTRjwvYbgM9YTkaOrK1e2CgQ01DLRWoQFNEhljAqaCIWHOmBMSQZArgZo3Pxyl1thmKdI0dTw5zIqg3ENKdz4RZF5QiED0jlVVBaJt7TB8N3BqjwYjfIBzjxaN0f3BuzZNc/LzaEZDVe1SjysN92PyaOrIOQ8J/f53lbGJN/ScwC3d6sa1K/Nji2+w4tyY2+SMrwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/3cbba/activate.png",srcSet:["/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/7fc1e/activate.png 288w","/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/a5df1/activate.png 576w","/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/3cbba/activate.png 1152w","/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/0b124/activate.png 1728w","/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/4ea69/activate.png 2304w","/playbook/static/e571a95cd95b45f9a5a564f2a30fcdcb/8dc0b/activate.png 2880w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "))),Object(c.b)("h3",null,"5. Manage available"),Object(c.b)("p",null,Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABQklEQVQoz21Q7W6CQBC85/RFjN9J1f8+nU1/VI2UIvQ4DoEC8jG92RRrm24y3GbZnZ1ZtV4/YbvdYrPZYLlcYjKZYDqdYjabYbFY/MJ8/pPz/3g8xmq1wm63k3w0GkHdbjd0XYchyrpDUfVgpaoq1HUtYB8x5H+D9f1+D/X88ooovMBaK4jj+I7D4YDj8YjT6YTz2YPnefB9H0EQIEkSpGkqM3yv16sIUBxksWka9H2PxBiEYSgDWZZJo7WJW6ChtYZ19YEsz/M7hl5FIobj4hdBRILMWajcKaSIs68RxblbWqMsK4dSHAxEj1DD/aiOMIYKrKjgcNe18N4u8N8juVOaN+7GragmwaNKQrVteydkGGeZN6ICWiSxMbFY5rLM2SqKQvoGhf8TfpPG6SdSN8Q61ffO9kVHiPSHENHuX8uPhF+i/Uv5vgo9wwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/71e611a89c16fc0d990ce73a751adb3b/3cbba/active.png",srcSet:["/playbook/static/71e611a89c16fc0d990ce73a751adb3b/7fc1e/active.png 288w","/playbook/static/71e611a89c16fc0d990ce73a751adb3b/a5df1/active.png 576w","/playbook/static/71e611a89c16fc0d990ce73a751adb3b/3cbba/active.png 1152w","/playbook/static/71e611a89c16fc0d990ce73a751adb3b/0b124/active.png 1728w","/playbook/static/71e611a89c16fc0d990ce73a751adb3b/4ea69/active.png 2304w","/playbook/static/71e611a89c16fc0d990ce73a751adb3b/e1138/active.png 2556w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(c.b)("h3",null,"6. Create Admin User"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create an admin user from Users page.\nSample:\n",Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbUlEQVQ4y5VTW2+CMBjlrzl9Yy8m/vdlyZItuikil1LubeGsp1qCzmyzyaHwXc53JViv19hsNgjDZzwtFlhcsFwusVqt/oS3o08YhgiEEOi6Dn3fQxQVDlGM0ylG27ZOPgdtbmUEbQnqg/ePLZIkgchTHNIO+6SGVj3uHWMMhmHAbyd4eX3Dbre1+IQscgiRIc9zNE3jovImGL2qKqRpOuk8+K21xjiOCObsygrLskRd145AKeVK8g7emXLq52D2LkM+yMxDB2bADIuimPrIzDw5A877yZt2DPiDUEqJOI6RZdmU1SNnKtkT9jYLIc6ZUUZwCMT8fQ4v9xzXhF1rS81tKf1k9B948hvCEbIxkLWG0epSwnU5D5Y8QlQaUSxQSmH7p2xU46bn9+88ce6pskPiZPWkv19yr3BMChwsaZRIVDX/BK5KC2WnmRc1vqLMBd0fc5RVM63VtDbzXhhje2G5HQbiplded8G9fn4DOJ3RU53kblAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"image",title:"image",src:"/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/3cbba/newuser.png",srcSet:["/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/7fc1e/newuser.png 288w","/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/a5df1/newuser.png 576w","/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/3cbba/newuser.png 1152w","/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/0b124/newuser.png 1728w","/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/4ea69/newuser.png 2304w","/playbook/static/4cfd31bb4fb4ef61c0f936a55a1d8a65/dd9cb/newuser.png 2516w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  ")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-upgrade-upgrade-mdx-b1c9e828ae7dba2cc014.js.map