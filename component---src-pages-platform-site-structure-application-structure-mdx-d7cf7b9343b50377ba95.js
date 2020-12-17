(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"368K":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("3dLD"),i={},c={_frontmatter:i},m=s.a;function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(m,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"page-and-application-javascript-structure"},"Page and application Javascript structure"),Object(r.mdx)("p",null,"In this doc we'll go over how a page on VA.gov is related to the application code located in vets-website."),Object(r.mdx)("h2",{id:"javascript-bundles-and-static-pages"},"Javascript bundles and static pages"),Object(r.mdx)("p",null,"If you look at the source for the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page when running locally you'll see a group of three script tags:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<script defer nomodule="" src="/generated/polyfills.entry.js"><\/script>\n<script defer src="/generated/vendor.entry.js"><\/script>\n<script defer src="/generated/dashboard.entry.js"><\/script>\n')),Object(r.mdx)("p",null,"The vendor and polyfills bundles are on every page, but the dashboard bundle is specific to this particular React app. In the source for the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page, you'll see this frontmatter:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"---\ntitle: My VA\nlayout: page-react.html\nentryname: dashboard\n---\n")),Object(r.mdx)("p",null,"When this page is built, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryname")," property tells our build process how to construct the path for the third script tag in the above group. For pages that don't have an ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryname"),", the ",Object(r.mdx)("inlineCode",{parentName:"p"},"static-pages")," bundle will be used."),Object(r.mdx)("p",null,"In ",Object(r.mdx)("inlineCode",{parentName:"p"},"vets-website"),", there will be a manifest.json (or manifest.js) file with a matching entry name. In this case we can search for ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryName: 'dashboard'")," and find ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/manifest.js"}),"src/applications/personalization/dashboard/manifest.js"),". The ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryFile")," property in the manifest will tell you the entry point for this application, the file that Webpack uses as its entry for creating the ",Object(r.mdx)("inlineCode",{parentName:"p"},"dashboard")," bundle."),Object(r.mdx)("h2",{id:"structure-of-a-page"},"Structure of a page"),Object(r.mdx)("p",null,"A typical application page has several independent React components. Here's an abbreviated screenshot of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page:"),Object(r.mdx)("p",null,Object(r.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}}),"\n      ",Object(r.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/08b1c265cf4f9b246687ab1c5cf57073/94829/react-mount-points.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(r.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.1891891891892%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoUlEQVQ4y2WQ21MaZxjG96Znp8HGGtIgCDoajsLuciYgKFgIRwGBkcLItE0tJ5OZzPQqN5FceJ3ppK1TD2gOd51pnSR/RJuoUWRspmmSookchF0W5LTdxc7Upu/85t3ne+Z95v2+BfrUAdgaHXbHtPYpgfGS0DTNUgcZFwJMdYClCfYNB5naECx3WcFRu/hTAjNocICjEtAidsQBgD5Kl/qEuoBYaaVB7l6p9/2+sfdYhneY+rd79YR4i2WgM7WgyCqExoUiG09gEYnstHPKbsgNMEXjUr5JpfJpVB653A1CdpnMJQJtCvmEXObmcE1sronLMfLYY5xBvUhglsIOldwNs/WQLgg8ffo8/ejJ9uOt3c0dgp31baKn11O7T8hj6vEWwTbJNtFTGzs7m+n0Rir96+azP14AON4q7+1nd3/HMhkcKeGl4gkO/+nFNoU8XjvCTxTQQtHn65u/PdpIbaWOMAxDkAqCVlAUQ1BSo2i9Um3Was1ms5bL1Q6yRKbVaLaaLaLIcPHlX6/zhYNsbm//df6wWMYwtEyCoGWi1xuN4z0NBGkUCqRqtf7dnHv254u9V5nMPvndf4X/v9rTZDif/0+4iaJIZi93WMzl8gcHRCtglSpxJfyYN8JvbG6WSsWXmUwOyRZK9VqtdnRUrVaJF7ZOFnHE8XqxWM+Sb8abTbxtA+QPLBbwShkvoyRYGxQhIZ1jgeBYGS/kSOfk5tCVuUhsNhy7Hp1JROMJQkfjs7GZRCSeCJM6QfjtgVnCiczciMwk4pdvfBm9Hr52E/igRysE7Rz1ZyzYRRPYugaNTMjJgpxnOOYO5ihd6Dgv8xL6Xbr2nMA2KPMOSD0Mob37rPIM7AFofBusDUL2OEPpP8V30BSTUkd8UBeiDDm7IDdsjRBQJV7KkGNgJARawj1K/2mhk8UxndeFACrHDGv8YnusVzHZwbYwFJM631Xo4jQVdnfy7Rdcl1kqP4VnI3Sv0i8wfPGJxPMR384YGOvXBAEq1yI3fM43h7vFntOgm64KKNxXNL6rfOP0x7BHYPq6U+SiCJ0f8h0841c6/zfELTqHxhlsY792CqDQtXKpS33xkmJ0akjpYwkdkCbAk3oFCi+NY+JIJnq45q5+fQdtmC2Z4Mu9pxgjnYyRs1QFU+IB7i4uPLiTfHB7+eGd5NrK0v3by7+s/jg3d23x5q3kt9/fm1+4+8PC6q35teTS2sriz8sL5MzK0k+rye/mk38DE6V4DFVCuW0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with red boxes drawn around React mount points",title:"Abbreviated dashboard with red boxes drawn around React mount points",src:"/veteran-facing-services-tools/static/08b1c265cf4f9b246687ab1c5cf57073/94829/react-mount-points.png",srcSet:["/veteran-facing-services-tools/static/08b1c265cf4f9b246687ab1c5cf57073/a2ead/react-mount-points.png 259w","/veteran-facing-services-tools/static/08b1c265cf4f9b246687ab1c5cf57073/6b9fd/react-mount-points.png 518w","/veteran-facing-services-tools/static/08b1c265cf4f9b246687ab1c5cf57073/94829/react-mount-points.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(r.mdx)("p",null,"Each of the areas marked with a red box is a separately mounted React component. These React components shared a common Redux store:"),Object(r.mdx)("div",{className:"mermaid","data-processed":"true"},Object(r.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1608242665528",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"142",style:{maxWidth:"813px"},viewBox:"0 0 813 142"}),Object(r.mdx)("style",{parentName:"svg"},'#mermaid-1608242665528{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-1608242665528 .error-icon{fill:#552222;}#mermaid-1608242665528 .error-text{fill:#552222;stroke:#552222;}#mermaid-1608242665528 .edge-thickness-normal{stroke-width:2px;}#mermaid-1608242665528 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1608242665528 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1608242665528 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1608242665528 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1608242665528 .marker{fill:#333333;}#mermaid-1608242665528 .marker.cross{stroke:#333333;}#mermaid-1608242665528 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1608242665528 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-1608242665528 .label text{fill:#333;}#mermaid-1608242665528 .node rect,#mermaid-1608242665528 .node circle,#mermaid-1608242665528 .node ellipse,#mermaid-1608242665528 .node polygon,#mermaid-1608242665528 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1608242665528 .node .label{text-align:center;}#mermaid-1608242665528 .node.clickable{cursor:pointer;}#mermaid-1608242665528 .arrowheadPath{fill:#333333;}#mermaid-1608242665528 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1608242665528 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1608242665528 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1608242665528 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1608242665528 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1608242665528 .cluster text{fill:#333;}#mermaid-1608242665528 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1608242665528:root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}#mermaid-1608242665528 flowchart{fill:apa;}'),Object(r.mdx)("g",{parentName:"svg"},Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-A",id:"L-B-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M74,46L74,71L290.75,106.35495829471733",markerEnd:"url(#arrowhead10)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead10",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-A",id:"L-C-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M253,46L253,71L304.5625,96",markerEnd:"url(#arrowhead11)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead11",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-D LE-A",id:"L-D-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M434.5,46L434.5,71L382.9375,96",markerEnd:"url(#arrowhead12)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead12",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-F LE-A",id:"L-F-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M737,46L737,71L396.75,109.06993006993007",markerEnd:"url(#arrowhead13)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead13",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-A",className:"edgeLabel L-LS-B' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-A",className:"edgeLabel L-LS-C' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-D-A",className:"edgeLabel L-LS-D' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-F-A",className:"edgeLabel L-LS-F' L-LE-A"}))))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-A-10",transform:"translate(343.75,115)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-53",y:"-19",width:"106",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-43,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"86",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Redux store"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-B-11",transform:"translate(74,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-66",y:"-19",width:"132",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-56,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"112",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"User navigation"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-C-13",transform:"translate(253,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-63",y:"-19",width:"126",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-53,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"106",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Site navigation"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-D-15",transform:"translate(434.5,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-68.5",y:"-19",width:"137",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-58.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"117",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Main application"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-E-17",transform:"translate(586,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-33",y:"-19",width:"66",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-23,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"46",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Footer"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-F-18",transform:"translate(737,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-68",y:"-19",width:"136",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-58,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"116",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Announcements")))))))))),Object(r.mdx)("p",null,"Static content pages work similarly, except the main content area is not a React component (though it may have one or more React widgets mounted within it)."),Object(r.mdx)("p",null,"As we covered in the last section, ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," uses the ",Object(r.mdx)("inlineCode",{parentName:"p"},"dashboard")," bundle, the entry file for which is located ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/dashboard-entry.jsx"}),"here"),". There's not a lot of code in that file; most of the functionality is abstracted in ",Object(r.mdx)("inlineCode",{parentName:"p"},"startApp"),". The dashboard passes in a reducer and routes, which is the primary application. In the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L31"}),"startApp")," function, we create the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L44"}),"common Redux store"),", ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L64"}),"start the site-wide components"),", and ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L73"}),"mount the primary React application"),":"),Object(r.mdx)("p",null,Object(r.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}}),"\n      ",Object(r.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/9e7fcda98ac367999dcf4d2818dc00f5/136a2/sitewide_primary.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(r.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.57528957528957%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjUlEQVQ4y42Q21MaZxjGt4dpp5N0YkPqSKqImaqEgywsCHJQBDnIcUGQk5xRrJMxM73K39D/oRdt2kRz1Zum04t2NOldp82EGNPcKCDEQZaFwC7Iorv9kF440+lM3+83zzzvt/t837wfhDgCiDOlC9w1oBGJLY04M7fmQiPqwKgmCBjThkZmw7DSvThjs2ic1lmXWeMwKxYVKrvcE4XYiH5I6uLNxmClbQheGpYFPrxleY+z8C5n4Z1hw/scI8QxDXLmBSLHpBi9LXaNi5yTfPsIV8NWWiCT2T2vdOkMSZMxodfHlaog0Bl1aN4Q1xviMsUyMu2Tyb1yqVsmQVUzAa0mrJ9bWVShWjQMNSqv8MKz8sGzeiFLHO/XjrKN0l5fAXj+ebVPIQuoFffqpZf10n718M9m4xgiSPq4fJor4IVivUnQBMk0CaavTfLCXIag3zbo9inNXBSEYcxfr+vZF69f7h/W6+0WeUaSZy2y2+ppj9M2TXWYPl2KIZpMFeslaZqBajWmXO5UcaxaxcvlkwqGkSTRBIsgGs0GoNvtMpeKohgQ+SeM40yxSBZLR4Wj0mGukC8UaZpm/rtAGEQu30yBe08wHMN7RZLk+fn5/wpXq8ybN2cneKuMtTunvfH6Q4Lx/s1Zl2mRl8JviU6lRuH1brXWreAUVqOAnlQ7AGAqeN/0fa8tY51mu3MOno+ioGAiE42mYqlMIr0eT69HEqux5BowYGclno5eeKDheAp86rfJ5JpvJe35YhPiTJh4QjdsyowpgjdhL4uPCnXJCXXkU6HnyufWCXVUYlxjw74PuKZReVBiXOVp4xyxZ2h04RMYhcZhu0QVMkTv3V5IXRE4huR+2LY+oU9cm0Kvwx6ReY1vSrOkS6DlaiMi8+oNxMcSOrkC26DMD42L7SK5X2xdH1YEPuY72DK/wnUHXszclPuvCZyIfWNUFR4QogNC1/hcXOXe/EwRvAHCfOugbBkaE1h5Ui/PkgFHXpf42MrQtOeuPnxP6rjDQnxCS2ZA7LkqRD/iO7mzMbB5VeQGhw5PWlhSHySbWTLqIoHwl97lTQe6MbcQc7o3lLrgvCmJqAJ6U0qli0zJvQLErTcnrY7M1PQSIndLZR6uegU6ePIwt7t99HS7+Nuj/JOt/O7W4c6DXx599fsPX2d//Db7+P6Lx/f3fvout7OV23lw8Ov3+d2HvX92t//4+Zu/ARijgFJc4mRrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with yellow boxes drawn around site wide components",title:"Abbreviated dashboard with yellow boxes drawn around site wide components",src:"/veteran-facing-services-tools/static/9e7fcda98ac367999dcf4d2818dc00f5/136a2/sitewide_primary.png",srcSet:["/veteran-facing-services-tools/static/9e7fcda98ac367999dcf4d2818dc00f5/a2ead/sitewide_primary.png 259w","/veteran-facing-services-tools/static/9e7fcda98ac367999dcf4d2818dc00f5/6b9fd/sitewide_primary.png 518w","/veteran-facing-services-tools/static/9e7fcda98ac367999dcf4d2818dc00f5/136a2/sitewide_primary.png 884w"],sizes:"(max-width: 884px) 100vw, 884px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(r.mdx)("p",null,"The components in the yellow boxes are the common site-wide components started by ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/index.js#L26"}),"startSitewideComponents")," and the blue box is the primary React application."),Object(r.mdx)("h2",{id:"structure-of-a-react-application"},"Structure of a React application"),Object(r.mdx)("p",null,"Our React applications can vary in structure depending on what their purpose is, but typically they have a reducer and actions for Redux related logic and routes and components for the rest of the application. Routes are typically the best place to start looking at an application. Again using ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," as an example, you can see the React components to start looking at in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/routes.jsx"}),"routes.jsx")," file:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import DashboardApp from './containers/DashboardApp';\nimport DashboardAppNew from './containers/DashboardAppNew';\nimport DashboardAppWrapper from './containers/DashboardAppWrapper';\nimport SetPreferences from '../preferences/containers/SetPreferences';\n\nimport environment from 'platform/utilities/environment';\n\nconst component = environment.isProduction() ? DashboardApp : DashboardAppNew;\n\nexport const findBenefitsRoute = {\n  path: 'find-benefits',\n  component: SetPreferences,\n  key: 'find-benefits',\n  name: 'Find VA benefits',\n};\n\nconst routes = {\n  path: '/',\n  component: DashboardAppWrapper,\n  indexRoute: { component },\n  childRoutes: [findBenefitsRoute],\n};\n\nexport default routes;\n")),Object(r.mdx)("p",null,"There are only two routes in here, but you can see that there's a main ",Object(r.mdx)("inlineCode",{parentName:"p"},"DashboardAppWrapper")," component and then a ",Object(r.mdx)("inlineCode",{parentName:"p"},"DashboardApp")," component for the main index route."),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx"}),"DashboardAppWrapper")," has some important functionality that's common to a lot of our applications. Here's the render method from that component:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'render() {\n  return (\n    <RequiredLoginView\n      serviceRequired={[backendServices.USER_PROFILE]}\n      user={this.props.user}\n    >\n      <DowntimeNotification\n        appTitle="user dashboard"\n        dependencies={[\n          externalServices.mvi,\n          externalServices.mhv,\n          externalServices.appeals,\n        ]}\n        render={this.renderDowntimeNotification}\n      >\n        <Breadcrumbs>\n          {this.renderBreadcrumbs(this.props.location)}\n        </Breadcrumbs>\n\n        {this.props.children}\n      </DowntimeNotification>\n    </RequiredLoginView>\n  );\n}\n')),Object(r.mdx)("p",null,"Because ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," requires a user to be signed in, we wrap all the child content with ",Object(r.mdx)("inlineCode",{parentName:"p"},"RequiredLoginView"),", which makes sure there's a signed in user and directs the user to sign in if not. Also, since the dashboard uses some internal VA services that may be down at times, it also wraps content in a ",Object(r.mdx)("inlineCode",{parentName:"p"},"DowntimeNotifications")," component, which will display a message to a user if one of the specified services is down. See the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/veteran-facing-services-tools/platform/tools/downtime-notifications"}),"downtime notifications documentation")," for more information."))}o.isMDXComponent=!0},"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),r=a.n(n),s=a("Wbzz");function i(){return r.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var t=e.item;return t.href?r.a.createElement("li",{key:t.name},r.a.createElement(s.Link,{to:t.href},t.name)):r.a.createElement("li",{key:t.name},t.name," (future)")}function m(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(i,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var o=a("MEl4"),d=a.n(o);function l(e){var t=e.location,a=d.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(m,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var b=a("8FPV");function g(e){var t=e.children,a=e.location,n=e.pageContext;return r.a.createElement(b.a,{location:a},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(l,{location:a}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,r.a.createElement(p,{sourceUrl:n.sourceUrl}))))}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-application-structure-mdx-d7cf7b9343b50377ba95.js.map