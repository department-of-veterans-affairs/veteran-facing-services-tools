(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"368K":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return o}));var n=t("zLVn"),r=(t("q1tI"),t("7ljp")),s=t("3dLD"),i={},c={_frontmatter:i},m=s.a;function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.mdx)(m,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"page-and-application-javascript-structure"},"Page and application Javascript structure"),Object(r.mdx)("p",null,"In this doc we'll go over how a page on VA.gov is related to the application code located in vets-website."),Object(r.mdx)("h2",{id:"javascript-bundles-and-static-pages"},"Javascript bundles and static pages"),Object(r.mdx)("p",null,"If you look at the source for the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page when running locally you'll see a group of three script tags:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<script defer nomodule="" src="/generated/polyfills.entry.js"><\/script>\n<script defer src="/generated/vendor.entry.js"><\/script>\n<script defer src="/generated/dashboard.entry.js"><\/script>\n')),Object(r.mdx)("p",null,"The vendor and polyfills bundles are on every page, but the dashboard bundle is specific to this particular React app. In the source for the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page, you'll see this frontmatter:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"---\ntitle: My VA\nlayout: page-react.html\nentryname: dashboard\n---\n")),Object(r.mdx)("p",null,"When this page is built, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryname")," property tells our build process how to construct the path for the third script tag in the above group. For pages that don't have an ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryname"),", the ",Object(r.mdx)("inlineCode",{parentName:"p"},"static-pages")," bundle will be used."),Object(r.mdx)("p",null,"In ",Object(r.mdx)("inlineCode",{parentName:"p"},"vets-website"),", there will be a manifest.json (or manifest.js) file with a matching entry name. In this case we can search for ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryName: 'dashboard'")," and find ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/manifest.js"}),"src/applications/personalization/dashboard/manifest.js"),". The ",Object(r.mdx)("inlineCode",{parentName:"p"},"entryFile")," property in the manifest will tell you the entry point for this application, the file that Webpack uses as its entry for creating the ",Object(r.mdx)("inlineCode",{parentName:"p"},"dashboard")," bundle."),Object(r.mdx)("h2",{id:"structure-of-a-page"},"Structure of a page"),Object(r.mdx)("p",null,"A typical application page has several independent React components. Here's an abbreviated screenshot of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," page:"),Object(r.mdx)("p",null,Object(r.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}}),"\n      ",Object(r.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/401d3d456ce331b6fe486073d6ddbfac/94829/react-mount-points.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(r.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.1891891891892%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAECElEQVQ4y3WU60/TZxTHf8mWzUQkRhyTCaU4MhBpKy0FCuNWQAkCLUSEclMLqHMbI9NFp/jC6XSZW5a4F3vhi8XpdBs6M987t/0FyxYX71w7Krd2QCtQ2s/O78clOLMn+eZ8z3nOOc/3OU/yKO1HPsN9+Bzth84KPqa16wwtgqaus+zs/ISm9z+l/cjnuD84h/voF7Qf7OaoNYdTZjOnc/P4KNvGaaORLmczB09+haLE24k11WAobiUrt5J4cy2JWfWsTi7npcQSDS/qSng5sZQX9GXE6oowGXaQnuHEmOEgdcsOjOYa9BvzWLO5EiX1zWbyzVXY7c2U2VsoKW7GZqujuLBxwRY1USJ7mZk1ZJgdmAUWUyVm4w6yLA4K8+qxF7gosFSTU9SC4n0yxuD9xzy++5DBB714HvUxIL7KVTv0sFdD//1H9N8TSGwZas7DAcmV/LsP8Hq8KMgKeJ/gvXsPf18f/OMHvwrfIvc9y30TC3Z8DGZn+O9SmJ3Fe+cvfv/jDn8KpicnCUxNr8AUgckpjc8+fUo4FCI8P09I4rPDw0SkieqHw2ENSmRmhumhIUZ9fsbGJxj2jmg2GHxKIBgkEAgyHQgIgszNhZaVhKUuNDqq8Ugk8qxC9aoDfw/j8QzT2z/AwKCH/1tLxWFROzcy8nxDTaHHw5h/knFRpqqbmPBpiublCpHFAg0qX6FwZcMlKOpJk/2DDI9PMTLqZ25mlpCoVuc1L/OKqPMRRFZCCuenp5mTGWoN1YPVGaoNtcDY6OIL+oior+hb4OGJCcG4FosscbERyQ2Luog8zHOvvHP/SfZ2HGdP+3Ha9p+gbd8Jjbv3dWu+W/zdbceW/b0d3ZqvWre6L7ZdbKv7Qxo7z6Cs0pdiMFVhtO9hk7WOhIxa1qVUkJRZR5L4rxkdrE4qJX5rDSm5LjaanKzS2dmQXk1qbiMptgYSLTuJSyhgndGJEmtwsDW3AYuzk6SCVtakO3nVWo/V8S5pZR2sNdVqMFW8RZbkxGW7iDY40ee3Yq56G11eM9HGWvRpFehtjSjrt1RhzpUGkpyc30LU5iriMndRXH+IbMc76GwuLWaT/dTiPURvqWZtuoOEHBfG7R0kyv5ao3wOqdvRZTegxEhDq/w0W53vsUGS1mfWE2drwlrbRX7DYcyiNMayi7TyA8TI3hpRE2WoIdneRunuY8SLwii5QaIoTFAVrkveRo78ICVVByjc5iZHmr8hX5NNPSRHRpHnYpOhEmN2HSlmJ/Ep5cTo7aRaarEWNLFB6l95vYykhHx0GTUoN69e5vbNa/xy43t+/ekHbotV8Zvw81+e4psLF+j5+hI/XrrCjW+vcu3iZW5d/07Lv3X9qpar8p9v9nDxSg//AtiW6QreC8hIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with red boxes drawn around React mount points",title:"Abbreviated dashboard with red boxes drawn around React mount points",src:"/static/401d3d456ce331b6fe486073d6ddbfac/94829/react-mount-points.png",srcSet:["/static/401d3d456ce331b6fe486073d6ddbfac/a2ead/react-mount-points.png 259w","/static/401d3d456ce331b6fe486073d6ddbfac/6b9fd/react-mount-points.png 518w","/static/401d3d456ce331b6fe486073d6ddbfac/94829/react-mount-points.png 878w"],sizes:"(max-width: 878px) 100vw, 878px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(r.mdx)("p",null,"Each of the areas marked with a red box is a separately mounted React component. These React components shared a common Redux store:"),Object(r.mdx)("div",{className:"mermaid","data-processed":"true"},Object(r.mdx)("svg",Object.assign({parentName:"div"},{id:"mermaid-1605202062218",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"142",style:{maxWidth:"813px"},viewBox:"0 0 813 142"}),Object(r.mdx)("style",{parentName:"svg"},'#mermaid-1605202062218{font-family:"trebuchet ms",verdana,arial;font-size:16px;fill:#333;}#mermaid-1605202062218 .error-icon{fill:#552222;}#mermaid-1605202062218 .error-text{fill:#552222;stroke:#552222;}#mermaid-1605202062218 .edge-thickness-normal{stroke-width:2px;}#mermaid-1605202062218 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1605202062218 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1605202062218 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1605202062218 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1605202062218 .marker{fill:#333333;}#mermaid-1605202062218 .marker.cross{stroke:#333333;}#mermaid-1605202062218 svg{font-family:"trebuchet ms",verdana,arial;font-size:16px;}#mermaid-1605202062218 .label{font-family:"trebuchet ms",verdana,arial;color:#333;}#mermaid-1605202062218 .label text{fill:#333;}#mermaid-1605202062218 .node rect,#mermaid-1605202062218 .node circle,#mermaid-1605202062218 .node ellipse,#mermaid-1605202062218 .node polygon,#mermaid-1605202062218 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1605202062218 .node .label{text-align:center;}#mermaid-1605202062218 .node.clickable{cursor:pointer;}#mermaid-1605202062218 .arrowheadPath{fill:#333333;}#mermaid-1605202062218 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1605202062218 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1605202062218 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1605202062218 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1605202062218 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1605202062218 .cluster text{fill:#333;}#mermaid-1605202062218 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1605202062218:root{--mermaid-font-family:"trebuchet ms",verdana,arial;}#mermaid-1605202062218 flowchart{fill:apa;}'),Object(r.mdx)("g",{parentName:"svg"},Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"output"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"clusters"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePaths"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-B LE-A",id:"L-B-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M74,46L74,71L290.75,106.35495829471733",markerEnd:"url(#arrowhead10)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead10",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-C LE-A",id:"L-C-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M253,46L253,71L304.5625,96",markerEnd:"url(#arrowhead11)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead11",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-D LE-A",id:"L-D-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M434.5,46L434.5,71L382.9375,96",markerEnd:"url(#arrowhead12)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead12",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgePath LS-F LE-A",id:"L-F-A",style:{opacity:"1"}}),Object(r.mdx)("path",Object.assign({parentName:"g"},{className:"path",d:"M737,46L737,71L396.75,109.06993006993007",markerEnd:"url(#arrowhead13)",style:{fill:"none"}})),Object(r.mdx)("defs",{parentName:"g"},Object(r.mdx)("marker",Object.assign({parentName:"defs"},{id:"arrowhead13",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"}),Object(r.mdx)("path",Object.assign({parentName:"marker"},{d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabels"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-B-A",className:"edgeLabel L-LS-B' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-C-A",className:"edgeLabel L-LS-C' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-D-A",className:"edgeLabel L-LS-D' L-LE-A"})))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"edgeLabel",transform:"",style:{opacity:"1"}}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(0,0)",className:"label"}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",width:"0",height:"0"})),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"0",height:"0"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),Object(r.mdx)("span",Object.assign({parentName:"div"},{id:"L-L-F-A",className:"edgeLabel L-LS-F' L-LE-A"}))))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"nodes"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-A-10",transform:"translate(343.75,115)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-53",y:"-19",width:"106",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-43,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"86",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Redux store"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-B-11",transform:"translate(74,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-66",y:"-19",width:"132",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-56,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"112",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"User navigation"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-C-13",transform:"translate(253,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-63",y:"-19",width:"126",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-53,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"106",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Site navigation"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-D-15",transform:"translate(434.5,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-68.5",y:"-19",width:"137",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-58.5,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"117",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Main application"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-E-17",transform:"translate(586,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-33",y:"-19",width:"66",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-23,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"46",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Footer"))))),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"node default",id:"flowchart-F-18",transform:"translate(737,27)",style:{opacity:"1"}}),Object(r.mdx)("rect",Object.assign({parentName:"g"},{rx:"0",ry:"0",x:"-68",y:"-19",width:"136",height:"38",className:"label-container"})),Object(r.mdx)("g",Object.assign({parentName:"g"},{className:"label",transform:"translate(0,0)"}),Object(r.mdx)("g",Object.assign({parentName:"g"},{transform:"translate(-58,-9)"}),Object(r.mdx)("foreignObject",Object.assign({parentName:"g"},{width:"116",height:"18"}),Object(r.mdx)("div",Object.assign({parentName:"foreignObject"},{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}}),"Announcements")))))))))),Object(r.mdx)("p",null,"Static content pages work similarly, except the main content area is not a React component (though it may have one or more React widgets mounted within it)."),Object(r.mdx)("p",null,"As we covered in the last section, ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," uses the ",Object(r.mdx)("inlineCode",{parentName:"p"},"dashboard")," bundle, the entry file for which is located ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/dashboard-entry.jsx"}),"here"),". There's not a lot of code in that file; most of the functionality is abstracted in ",Object(r.mdx)("inlineCode",{parentName:"p"},"startApp"),". The dashboard passes in a reducer and routes, which is the primary application. In the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L31"}),"startApp")," function, we create the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L44"}),"common Redux store"),", ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L64"}),"start the site-wide components"),", and ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L73"}),"mount the primary React application"),":"),Object(r.mdx)("p",null,Object(r.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}}),"\n      ",Object(r.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/650acff1bcb085711b375017f15a5326/136a2/sitewide_primary.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(r.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.57528957528957%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAEDUlEQVQ4y3WU60/TVxjHf9kSs8RlXqd4YWAyAbEC1VIsBaxtpR3XFrlDuQ+COjedc+6NWxCZmiz7D5aY6eJ8tzfbshe7mL3Yi2UzEtn2hjuKpRekLbSF9rPn13LJlnjy++b7PM8553u+zy85R7k0+BmXB6/z4eAgVwY/4eLANS4MDHDu4wH6rl7j/MB1Phj6lEvXh7h08xaX33+PAZuBG3YDN6tM3KgoYcis4+rFs1wY+hzlDYOd3dpqMovayNWXsTu3hn3H6tmUXsrLqRZe2m9B2WeW2Ioi2JVqIltTSUaOg6ycag5qqsjIKic1vYg9BXYUa30HZoMDs7WL0tIuLJZODMZmLNZOjEUtWIVV6I83oCuoJ19fh/6YE53WgdHQRElxK5YTLsqMDkpqXCihkBv/1EPcYw95Pj1MaHYkwYEnj9dZhX/qEf7JRwn2rWJ+RtY8HWHhyQj+8T8JBmdRkDH9dInRcS/jk34WAhAIwkJwgxNxaDUPbNQWAnHmn8cJR+OsDWV5Gf7+y8+j4X94PDLG/PyinBRdRyi4LJzE0mKMSAQi4XgCUREKLIBnTpWKE4vFk4Kzs2G8Pg9er49nbjdzHg+hUJBAICBCQXGykMDycnTVR3wdqqjfn4zj8VXBqakQ09NTTE5OMzo2wYTwi4a6Sb4E1KE69vnW5qTlaFR1GGHO68E958Xj9coCH0FxGIutrDqJ/cfV/x36fPGNlldkz8xMDLd3EbdnSf4NCYSXYkTldLXL6AuwIt3Jufh9Gx0oi2Fx54/iFXgEbq/kvqggkoiT+VocXs/Xas88YQJLEekhIu1HUBr636G5uZ2Wtm5cHT242ntoau1M5hK3Cje2dNDs6qJVcpUbJG8SVte0yp42VzfOxk6qe8+gZBbZyNI4ySvtI13fzJ68WrZnO9Cc7Oag0cVOmdv8ZhkZxja0p3pJya1lU5qNtPymRJ5Z3EFqjpNdaVa25TlQDp+oQFvYgqXtIw7J9Xs1u4oUfQPa8n4yzJ1slTu7Pe80R+y9ZJ/qYYf2tNScHCh2obG9zc6jdeyQ+5yuKWeXrgFFY6rgiAjkvNXHfuHXsivZm99AQfU58qS2N7+eLYer0VWcIc3QzFZNdQIZpg4KnefZV9DI66pgdpkI1qNkFZeRebSWTFsvO+S0bdpaUgqa0DvfxdxyBW3F2UT9sL2PLfISbRbxVw5Vkl7SnpjbrHEkTWTY2C46ynG7E9vJdppaLlJXf54qRz8maztVzjMcNzVyUl4gXWEjZls3hSaXPHG1aOS1sdq7KK/sI0dyXX4NRwUHjK0oE7/dZeLB10z/quI+kw/uMfnLPcZ//oof79/i92++YPjbLxn+TsUdHn9/h4nV+dGf7ibXC8ZF448fbvMvWRfyO/ZqV+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.mdx)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with yellow boxes drawn around site wide components",title:"Abbreviated dashboard with yellow boxes drawn around site wide components",src:"/static/650acff1bcb085711b375017f15a5326/136a2/sitewide_primary.png",srcSet:["/static/650acff1bcb085711b375017f15a5326/a2ead/sitewide_primary.png 259w","/static/650acff1bcb085711b375017f15a5326/6b9fd/sitewide_primary.png 518w","/static/650acff1bcb085711b375017f15a5326/136a2/sitewide_primary.png 884w"],sizes:"(max-width: 884px) 100vw, 884px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(r.mdx)("p",null,"The components in the yellow boxes are the common site-wide components started by ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/index.js#L26"}),"startSitewideComponents")," and the blue box is the primary React application."),Object(r.mdx)("h2",{id:"structure-of-a-react-application"},"Structure of a React application"),Object(r.mdx)("p",null,"Our React applications can vary in structure depending on what their purpose is, but typically they have a reducer and actions for Redux related logic and routes and components for the rest of the application. Routes are typically the best place to start looking at an application. Again using ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," as an example, you can see the React components to start looking at in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/routes.jsx"}),"routes.jsx")," file:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import DashboardApp from './containers/DashboardApp';\nimport DashboardAppNew from './containers/DashboardAppNew';\nimport DashboardAppWrapper from './containers/DashboardAppWrapper';\nimport SetPreferences from '../preferences/containers/SetPreferences';\n\nimport environment from 'platform/utilities/environment';\n\nconst component = environment.isProduction() ? DashboardApp : DashboardAppNew;\n\nexport const findBenefitsRoute = {\n  path: 'find-benefits',\n  component: SetPreferences,\n  key: 'find-benefits',\n  name: 'Find VA benefits',\n};\n\nconst routes = {\n  path: '/',\n  component: DashboardAppWrapper,\n  indexRoute: { component },\n  childRoutes: [findBenefitsRoute],\n};\n\nexport default routes;\n")),Object(r.mdx)("p",null,"There are only two routes in here, but you can see that there's a main ",Object(r.mdx)("inlineCode",{parentName:"p"},"DashboardAppWrapper")," component and then a ",Object(r.mdx)("inlineCode",{parentName:"p"},"DashboardApp")," component for the main index route."),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx"}),"DashboardAppWrapper")," has some important functionality that's common to a lot of our applications. Here's the render method from that component:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'render() {\n  return (\n    <RequiredLoginView\n      serviceRequired={[backendServices.USER_PROFILE]}\n      user={this.props.user}\n    >\n      <DowntimeNotification\n        appTitle="user dashboard"\n        dependencies={[\n          externalServices.mvi,\n          externalServices.mhv,\n          externalServices.appeals,\n        ]}\n        render={this.renderDowntimeNotification}\n      >\n        <Breadcrumbs>\n          {this.renderBreadcrumbs(this.props.location)}\n        </Breadcrumbs>\n\n        {this.props.children}\n      </DowntimeNotification>\n    </RequiredLoginView>\n  );\n}\n')),Object(r.mdx)("p",null,"Because ",Object(r.mdx)("inlineCode",{parentName:"p"},"/my-va")," requires a user to be signed in, we wrap all the child content with ",Object(r.mdx)("inlineCode",{parentName:"p"},"RequiredLoginView"),", which makes sure there's a signed in user and directs the user to sign in if not. Also, since the dashboard uses some internal VA services that may be down at times, it also wraps content in a ",Object(r.mdx)("inlineCode",{parentName:"p"},"DowntimeNotifications")," component, which will display a message to a user if one of the specified services is down. See the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/platform/tools/downtime-notifications"}),"downtime notifications documentation")," for more information."))}o.isMDXComponent=!0},"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t("q1tI"),r=t.n(n),s=t("Wbzz");function i(){return r.a.createElement(s.StaticQuery,{query:"68798663",render:function(e){return r.a.createElement(m,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function c(e){var a=e.item;return a.href?r.a.createElement("li",{key:a.name},r.a.createElement(s.Link,{to:a.href},a.name)):r.a.createElement("li",{key:a.name},a.name," (future)")}function m(e){var a=e.items,t=e.isSublist,n=void 0!==t&&t;return a.length?r.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(m,{isSublist:!0,items:e.items})):"componentList"===e.query?r.a.createElement("li",{key:e.name},n&&r.a.createElement(c,{item:e}),!n&&r.a.createElement("h2",{className:"heading-level-4"},e.name),r.a.createElement(i,null)):r.a.createElement(c,{item:e,key:e.name})}))):null}var o=t("MEl4"),d=t.n(o);function l(e){var a=e.location,t=d.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?r.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},r.a.createElement("div",{className:"site-c-sidenav"},r.a.createElement(m,{items:t.items}))):null}function p(e){var a=e.sourceUrl;return a?r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",r.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var b=t("8FPV");function g(e){var a=e.children,t=e.location,n=e.pageContext;return r.a.createElement(b.a,{location:t},r.a.createElement("div",{className:"vads-l-row"},r.a.createElement(l,{location:t}),r.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,r.a.createElement(p,{sourceUrl:n.sourceUrl}))))}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-application-structure-mdx-557b78e8656643af750a.js.map