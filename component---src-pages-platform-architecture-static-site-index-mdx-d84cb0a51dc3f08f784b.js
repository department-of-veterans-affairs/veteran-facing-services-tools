(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"3dLD":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t("q1tI"),n=t.n(r),s=t("FRpb");function l(e){var a=e.sourceUrl;return a?n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",n.a.createElement("a",{href:a},"Edit this page on GitHub")):null}var i=t("8FPV");function c(e){var a=e.children,t=e.location,r=e.pageContext;return n.a.createElement(i.a,{location:t},n.a.createElement("div",{className:"vads-l-row site-l-wrapper"},n.a.createElement(s.a,{location:t}),n.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a,n.a.createElement(l,{sourceUrl:r.sourceUrl}))))}},DqKh:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return b}));var r=t("zLVn"),n=(t("q1tI"),t("7ljp")),s=t("3dLD"),l=["components"],i={},c={_frontmatter:i},m=s.a;function b(e){var a=e.components,t=Object(r.a)(e,l);return Object(n.b)(m,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"site-build-process"},"Site build process"),Object(n.b)("div",{className:"deprecation-message"},Object(n.b)("h2",null,"We're moving our docs!"),Object(n.b)("h3",null,"Find ",Object(n.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Site-build-process.1855815727.html"},"the latest version of this page")," on the Platform website."),Object(n.b)("h3",null,"Still can't find what you're looking for? Reach out to ",Object(n.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," on Slack.")),Object(n.b)("p",null,"The main build process for VA.gov is controlled with Metalsmith, which is a simple, plugin-based static site generator. We take content from two sources, the vagov-content repo and the VA's Drupal CMS, create pages based on that data plus templates, run a series of other plugins, and then output the resulting html pages."),Object(n.b)("h2",{id:"metalsmith-build-flow"},"Metalsmith build flow"),Object(n.b)("div",{className:"mermaid","data-processed":"true"},Object(n.b)("svg",{parentName:"div",id:"mermaid-1646195780070",width:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXLink:"http://www.w3.org/1999/xlink",height:"1058",style:{maxWidth:"738.5px"},viewBox:"0 0 738.5 1058"},Object(n.b)("style",{parentName:"svg"},'#mermaid-1646195780070 {font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-1646195780070 .error-icon{fill:#552222;}#mermaid-1646195780070 .error-text{fill:#552222;stroke:#552222;}#mermaid-1646195780070 .edge-thickness-normal{stroke-width:2px;}#mermaid-1646195780070 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1646195780070 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1646195780070 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1646195780070 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1646195780070 .marker{fill:#333333;stroke:#333333;}#mermaid-1646195780070 .marker.cross{stroke:#333333;}#mermaid-1646195780070 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1646195780070 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-1646195780070 .cluster-label text{fill:#333;}#mermaid-1646195780070 .cluster-label span{color:#333;}#mermaid-1646195780070 .label text,#mermaid-1646195780070 span{fill:#333;color:#333;}#mermaid-1646195780070 .node rect,#mermaid-1646195780070 .node circle,#mermaid-1646195780070 .node ellipse,#mermaid-1646195780070 .node polygon,#mermaid-1646195780070 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1646195780070 .node .label{text-align:center;}#mermaid-1646195780070 .node.clickable{cursor:pointer;}#mermaid-1646195780070 .arrowheadPath{fill:#333333;}#mermaid-1646195780070 .edgePath .path{stroke:#333333;stroke-width:2.0px;}#mermaid-1646195780070 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1646195780070 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1646195780070 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1646195780070 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1646195780070 .cluster text{fill:#333;}#mermaid-1646195780070 .cluster span{color:#333;}#mermaid-1646195780070 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1646195780070 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}'),Object(n.b)("g",{parentName:"svg"},Object(n.b)("g",{parentName:"g",className:"output"},Object(n.b)("g",{parentName:"g",className:"clusters"}),Object(n.b)("g",{parentName:"g",className:"edgePaths"},Object(n.b)("g",{parentName:"g",className:"edgePath LS-1 LE-A",id:"L-1-A",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M292.13502358490564,46L273.27397798742135,51.666666666666664C254.41293238993708,57.333333333333336,216.69084119496856,68.66666666666667,197.82979559748426,80C178.96875,91.33333333333333,178.96875,102.66666666666667,178.96875,108.33333333333333L178.96875,114",markerEnd:"url(#arrowhead69)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead69",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-1 LE-K",id:"L-1-K",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M418.61497641509436,46L437.4760220125786,51.666666666666664C456.3370676100629,57.333333333333336,494.0591588050315,68.66666666666667,512.9202044025157,83.16666666666667C531.78125,97.66666666666667,531.78125,115.33333333333333,531.78125,131.5C531.78125,147.66666666666666,531.78125,162.33333333333334,531.78125,173.83333333333334C531.78125,185.33333333333334,531.78125,193.66666666666666,531.78125,197.83333333333334L531.78125,202",markerEnd:"url(#arrowhead70)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead70",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-A LE-B",id:"L-A-B",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178.96875,152L178.96875,156.16666666666666C178.96875,160.33333333333334,178.96875,168.66666666666666,178.96875,177C178.96875,185.33333333333334,178.96875,193.66666666666666,178.96875,197.83333333333334L178.96875,202",markerEnd:"url(#arrowhead71)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead71",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-B LE-C",id:"L-B-C",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178.96875,240L178.96875,244.16666666666666C178.96875,248.33333333333334,178.96875,256.6666666666667,178.96875,265C178.96875,273.3333333333333,178.96875,281.6666666666667,178.96875,285.8333333333333L178.96875,290",markerEnd:"url(#arrowhead72)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead72",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-C LE-D",id:"L-C-D",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M178.96875,328L178.96875,332.1666666666667C178.96875,336.3333333333333,178.96875,344.6666666666667,195.6738873106061,353C212.37902462121212,361.3333333333333,245.78929924242425,369.6666666666667,262.4944365530303,373.8333333333333L279.1995738636364,378",markerEnd:"url(#arrowhead73)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead73",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-D LE-E",id:"L-D-E",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M355.375,416L355.375,420.1666666666667C355.375,424.3333333333333,355.375,432.6666666666667,355.375,441C355.375,449.3333333333333,355.375,457.6666666666667,355.375,461.8333333333333L355.375,466",markerEnd:"url(#arrowhead74)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead74",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-E LE-F",id:"L-E-F",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M355.375,504L355.375,508.1666666666667C355.375,512.3333333333334,355.375,520.6666666666666,355.375,529C355.375,537.3333333333334,355.375,545.6666666666666,355.375,549.8333333333334L355.375,554",markerEnd:"url(#arrowhead75)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead75",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-F LE-G",id:"L-F-G",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M355.375,592L355.375,596.1666666666666C355.375,600.3333333333334,355.375,608.6666666666666,355.375,617C355.375,625.3333333333334,355.375,633.6666666666666,355.375,637.8333333333334L355.375,642",markerEnd:"url(#arrowhead76)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead76",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-G LE-H",id:"L-G-H",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M355.375,680L355.375,684.1666666666666C355.375,688.3333333333334,355.375,696.6666666666666,355.375,705C355.375,713.3333333333334,355.375,721.6666666666666,355.375,725.8333333333334L355.375,730",markerEnd:"url(#arrowhead77)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead77",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-H LE-N",id:"L-H-N",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M411.6636202830189,768L428.4514544025157,773.6666666666666C445.2392885220126,779.3333333333334,478.8149567610063,790.6666666666666,495.6027908805031,802C512.390625,813.3333333333334,512.390625,824.6666666666666,512.390625,830.3333333333334L512.390625,836",markerEnd:"url(#arrowhead78)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead78",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-H LE-I",id:"L-H-I",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M299.0863797169811,768L282.2985455974843,773.6666666666666C265.5107114779874,779.3333333333334,231.9350432389937,790.6666666666666,215.14720911949686,805.1666666666666C198.359375,819.6666666666666,198.359375,837.3333333333334,198.359375,853.5C198.359375,869.6666666666666,198.359375,884.3333333333334,214.140625,896.088997246824C229.921875,907.8446611603144,261.484375,916.6893223206289,277.265625,921.1116529007862L293.046875,925.5339834809433",markerEnd:"url(#arrowhead79)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead79",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-N LE-I",id:"L-N-I",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M512.390625,874L512.390625,878.1666666666666C512.390625,882.3333333333334,512.390625,890.6666666666666,496.609375,899.2556639134906C480.828125,907.8446611603144,449.265625,916.6893223206289,433.484375,921.1116529007862L417.703125,925.5339834809433",markerEnd:"url(#arrowhead80)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead80",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-I LE-J",id:"L-I-J",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M355.375,962L355.375,966.1666666666666C355.375,970.3333333333334,355.375,978.6666666666666,355.375,987C355.375,995.3333333333334,355.375,1003.6666666666666,355.375,1007.8333333333334L355.375,1012",markerEnd:"url(#arrowhead81)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead81",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-K LE-L",id:"L-K-L",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M531.78125,240L531.78125,244.16666666666666C531.78125,248.33333333333334,531.78125,256.6666666666667,531.78125,265C531.78125,273.3333333333333,531.78125,281.6666666666667,531.78125,285.8333333333333L531.78125,290",markerEnd:"url(#arrowhead82)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead82",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}})))),Object(n.b)("g",{parentName:"g",className:"edgePath LS-L LE-D",id:"L-L-D",style:{opacity:"1"}},Object(n.b)("path",{parentName:"g",className:"path",d:"M531.78125,328L531.78125,332.1666666666667C531.78125,336.3333333333333,531.78125,344.6666666666667,515.0761126893939,353C498.3709753787878,361.3333333333333,464.96070075757575,369.6666666666667,448.2555634469697,373.8333333333333L431.5504261363636,378",markerEnd:"url(#arrowhead83)",style:{fill:"none"}}),Object(n.b)("defs",{parentName:"g"},Object(n.b)("marker",{parentName:"defs",id:"arrowhead83",viewBox:"0 0 10 10",refX:"9",refY:"5",markerUnits:"strokeWidth",markerWidth:"8",markerHeight:"6",orient:"auto"},Object(n.b)("path",{parentName:"marker",d:"M 0 0 L 10 5 L 0 10 z",className:"arrowheadPath",style:{strokeWidth:"1",strokeDasharray:"1, 0"}}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabels"},Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(178.96875,80)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-107.6015625,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"215.203125",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"215.203125",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-1-A",className:"edgeLabel L-LS-1' L-LE-A"},"Markdown from vagov-content"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(531.78125,133)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-52.03125,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"104.0625",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"104.0625",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-1-K",className:"edgeLabel L-LS-1' L-LE-K"},"Drupal content"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-A-B",className:"edgeLabel L-LS-A' L-LE-B"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-B-C",className:"edgeLabel L-LS-B' L-LE-C"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-C-D",className:"edgeLabel L-LS-C' L-LE-D"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-D-E",className:"edgeLabel L-LS-D' L-LE-E"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-E-F",className:"edgeLabel L-LS-E' L-LE-F"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-F-G",className:"edgeLabel L-LS-F' L-LE-G"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-G-H",className:"edgeLabel L-LS-G' L-LE-H"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(512.390625,802)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-47.5859375,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"95.171875",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"95.171875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-H-N",className:"edgeLabel L-LS-H' L-LE-N"},"Drupal pages"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"translate(198.359375,855)",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(-60.921875,-9)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"121.84375",height:"18"}),Object(n.b)("foreignObject",{parentName:"g",width:"121.84375",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-H-I",className:"edgeLabel L-LS-H' L-LE-I"},"Markdown pages"))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-N-I",className:"edgeLabel L-LS-N' L-LE-I"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-I-J",className:"edgeLabel L-LS-I' L-LE-J"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-K-L",className:"edgeLabel L-LS-K' L-LE-L"}))))),Object(n.b)("g",{parentName:"g",className:"edgeLabel",transform:"",style:{opacity:"1"}},Object(n.b)("g",{parentName:"g",transform:"translate(0,0)",className:"label"},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",width:"0",height:"0"}),Object(n.b)("foreignObject",{parentName:"g",width:"0",height:"0"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},Object(n.b)("span",{parentName:"div",id:"L-L-L-D",className:"edgeLabel L-LS-L' L-LE-D"})))))),Object(n.b)("g",{parentName:"g",className:"nodes"},Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-1-30",transform:"translate(355.375,27)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-97.6015625",y:"-19",width:"195.203125",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-87.6015625,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"175.203125",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Metalsmith build pipeline"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-A-31",transform:"translate(178.96875,133)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-170.96875",y:"-19",width:"341.9375",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-160.96875,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"321.9375",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create page objects from each Markdown file"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-K-33",transform:"translate(531.78125,221)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-194.5234375",y:"-19",width:"389.046875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-184.5234375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"369.046875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Query Drupal via GraphQL or fetch from local cache"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-B-35",transform:"translate(178.96875,221)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-103.3671875",y:"-19",width:"206.734375",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-93.3671875,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"186.734375",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Convert Markdown to html"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-C-37",transform:"translate(178.96875,309)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-154.96875",y:"-19",width:"309.9375",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-144.96875,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"289.9375",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Generate sidebars for Markdown content"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-D-39",transform:"translate(355.375,397)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-127.84375",y:"-19",width:"255.6875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-117.84375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"235.6875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Add local static assets to pipeline"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-E-41",transform:"translate(355.375,485)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-137.1953125",y:"-19",width:"274.390625",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-127.1953125,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"254.390625",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Apply layout templates to page data"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-F-43",transform:"translate(355.375,573)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-110.9609375",y:"-19",width:"221.921875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-100.9609375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"201.921875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Generate header/footer data"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-G-45",transform:"translate(355.375,661)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-64.25",y:"-19",width:"128.5",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-54.25,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"108.5",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create sitemap"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-H-47",transform:"translate(355.375,749)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-89.1484375",y:"-19",width:"178.296875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-79.1484375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"158.296875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Check for broken links"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-N-49",transform:"translate(512.390625,855)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-218.109375",y:"-19",width:"436.21875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-208.109375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"416.21875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Download assets referenced in Drupal content from Drupal"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-I-51",transform:"translate(355.375,943)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-62.328125",y:"-19",width:"124.65625",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-52.328125,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"104.65625",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Webpack build"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-J-55",transform:"translate(355.375,1031)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-230.84375",y:"-19",width:"461.6875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-220.84375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"441.6875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Write HTML/CSS/JS and other static files to build output folder"))))),Object(n.b)("g",{parentName:"g",className:"node default",id:"flowchart-L-57",transform:"translate(531.78125,309)",style:{opacity:"1"}},Object(n.b)("rect",{parentName:"g",rx:"0",ry:"0",x:"-147.84375",y:"-19",width:"295.6875",height:"38",className:"label-container"}),Object(n.b)("g",{parentName:"g",className:"label",transform:"translate(0,0)"},Object(n.b)("g",{parentName:"g",transform:"translate(-137.84375,-9)"},Object(n.b)("foreignObject",{parentName:"g",width:"275.6875",height:"18"},Object(n.b)("div",{parentName:"foreignObject",xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block",whiteSpace:"nowrap"}},"Create page objects from query results")))))))))),Object(n.b)("p",null,"There are other plugins than the ones listed in this diagram, but these are the most important ones. The process is very similar for Markdown and Drupal content, mostly differing in how the content is initially converted into page objects for Metalsmith to process."),Object(n.b)("h2",{id:"metalsmith-code-organization"},"Metalsmith code organization"),Object(n.b)("p",null,"Metalsmith related code is located in ",Object(n.b)("inlineCode",{parentName:"p"},"src/site"),". Most of the code in that folder are temlates for Drupal content. The build process code is located in ",Object(n.b)("inlineCode",{parentName:"p"},"src/site/stages")," which contains Metalsmith plugins and GraphQL queries. "),Object(n.b)("h2",{id:"drupal-templates-vs-markdown-templates"},"Drupal templates vs Markdown templates"),Object(n.b)("p",null,"Due to the differences in the shape of data in vagov-content vs Drupal, we have two different sets of templates, one for each source. There are some shared templates, but these are largely restricted to the header and footer templates. Drupal related templates end with ",Object(n.b)("inlineCode",{parentName:"p"},".drupal.liquid")," and Markdown templates typically end with ",Object(n.b)("inlineCode",{parentName:"p"},".html")," or ",Object(n.b)("inlineCode",{parentName:"p"},".liquid"),"."))}b.isMDXComponent=!0},FRpb:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var r=t("q1tI"),n=t.n(r),s=t("Wbzz");function l(e){var a=e.item;return a.href?n.a.createElement("li",{key:a.name},n.a.createElement(s.Link,{to:a.href},a.name)):n.a.createElement("li",{key:a.name},a.name," (future)")}function i(e){var a=e.items,t=e.isSublist,r=void 0!==t&&t;return a.length?n.a.createElement("ul",{className:"site-c-sidenav-list"},a.map((function(e){return e.items?n.a.createElement("li",{key:e.name},r&&n.a.createElement(l,{item:e}),!r&&n.a.createElement("h2",{className:"heading-level-4"},e.name),n.a.createElement(i,{isSublist:!0,items:e.items})):n.a.createElement(l,{item:e,key:e.name})}))):null}var c=t("MEl4"),m=t.n(c);function b(e){var a=e.location,t=m.a.sections.find((function(e){return a.pathname.includes(e.href)}));return t?n.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},n.a.createElement("div",{className:"site-c-sidenav"},n.a.createElement(i,{items:t.items}))):null}},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-static-site-index-mdx-d84cb0a51dc3f08f784b.js.map