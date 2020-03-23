(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{SuvF:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c})),t.d(a,"_frontmatter",(function(){return p}));t("rGqo"),t("yt8O"),t("RW0V"),t("a1Th"),t("Btvt"),t("I5cv"),t("91GP");var n=t("q1tI"),o=t.n(n),r=t("6qfE"),m=t("3dLD");var s={},c=function(e){var a,t;t=e,(a=c).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var n;n=c;function c(a){var t;return(t=e.call(this,a)||this).layout=m.a,t}return c.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:a},o.a.createElement("h1",{id:"internal-tools"},"Internal Tools"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"This content/page is no longer maintained and likely outdated.")," "),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/request-access-to-tools.md"}},"Please see the most current documentation in the va.gov-team repo >"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"These instructions cover the configuration of a SOCKS proxy necessary for access to:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Static ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")," content"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Remote build logs for pull requests and deployments (Jenkins)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"System metrics for diagnostic/troubleshooting purposes"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Exception reports and tracebacks")),o.a.createElement("h2",{id:"prerequisites-and-assumptions"},"Prerequisites and assumptions"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"These steps assume you're running on Linux or OSX."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"That you have a Github account that's ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account"}},"configured")," to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},".ssh")," authentication with one of your computer's public keys.")),o.a.createElement("h2",{id:"create-an-ssh-public-key"},"Create an SSH public key"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"You can skip to")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Configure the SOCKS proxy")," ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"if you have a public ssh key you want to use. These instructions refer to the public key as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov.pub"))),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Open a terminal and create an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"mkdir ~/.ssh\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"It's safe to ignore the error if this directory already exists")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Set the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory to read only.")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"chmod 700 ~/.ssh\n")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Change to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"~/.ssh")," directory")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cd ~/.ssh\n")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Generate the ssh keys. You will be prompted to enter a secure passphrase to protect your private key.")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh-keygen -f id_rsa_vagov\n")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:5}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Confirm that the keys were generated.")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ls ~/.ssh\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"The list of files should include ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"id_rsa_vagov.pub"),". Only share keys with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},".pub")," (public) extension; Private keys should never leave your computer.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Once the keys are verified, continue with")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Configure the SOCKS proxy")),o.a.createElement("h2",{id:"configure-the-socks-proxy"},"Configure the SOCKS proxy"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Below are configuration instructions for internal or external developers."),o.a.createElement("h3",{id:"for-internal-developers"},"For internal developers"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},'Create an issue in the va.gov-team repo using the issue template named "Environment Access Request Template" which can be found ',o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations&template=Environment-Access-Request-Template.md&title=Access+for+%5Bindividual%5D"}},"here"),". In filling out the template you will provide your public ssh key.")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Once approval has been verified and this is reflected on the issue you created, your public key will be added to the devops repo which will give you access to the internal tools.")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Copy the SSH ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ssh/config"}},"config")," from the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"devops")," repo to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"~/.ssh")))),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"cp ./ssh/config ~/.ssh/config\n")),o.a.createElement(r.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Add your SSH key to your local agent")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh-add -K ~/.ssh/id_rsa_vagov\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"If you're on OSX you can configure the ssh client to automatically add your keys with the by adding the following to the top of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"~/.ssh/config"))),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"  Host *\n    AddKeysToAgent yes\n    UseKeychain yes\n    IdentityFile ~/.ssh/id_rsa_vagov\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Once your public key has been added to the devops repo, an update job should automatically run to update the jumpboxes and SOCKS proxy endpoints. This job takes about 5 minutes to run. Wait five minutes, then continue with")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Starting the SOCKS proxy"),"."),o.a.createElement("h3",{id:"for-external-developers"},"For external developers"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"As part of onboarding, you should have provided your ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"public SSH key")," to DSVA. If you haven't, do that now."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"DSVA will add your public SSH key to the list of authorized keys."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"When that process is completed (24 hours), you will receive a Github notification that your key has been added.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Once you receive the notification, continue with")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Starting the SOCKS proxy"),"."),o.a.createElement("h2",{id:"starting-the-socks-proxy"},"Starting the SOCKS proxy"),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are slightly different commands to connect to the proxy depending on whether you are connected to the VA network or not. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"~/.ssh/config")," file on your local system contains configuration to access the SOCKS proxy both from the VA network and the internet."),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"If you're on the VA network, run:")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh socks-va -D 2001 -N &\n")),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"If you're on the internet (outside the VA network), run:")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"ssh socks -D 2001 -N &\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},'The first time you connect to the jumpbox, ssh will prompt to ask if you are sure you want to connect to a new host. You will be unable to respond "yes" if ssh is in the background, so either bring it to the foreground with ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"fg")," or omit the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"&")," character from the above command.")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"After running the command below, continue to")," ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Testing and Using thje SOCKS proxy")),o.a.createElement("h2",{id:"test-the-socks-proxy-conneciton-is-working"},"Test the SOCKS proxy conneciton is working"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"curl")," sentry, a tool available only on through the SOCKS proxy")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"$ curl -v --proxy socks5h://127.0.0.1:2001 sentry.vetsgov-internal\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Verify that the output includes ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"HTTP/1.1 302 FOUND"),". If not, check that the\nSOCKS proxy server is running. You can ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"$ nc -z 127.0.0.1 2001")," as a first step.")),o.a.createElement("h2",{id:"install-browser-extensions"},"Install browser extensions"),o.a.createElement(r.MDXTag,{name:"p",components:a},"These instructions cover installing and configuring browser extensions used to connect to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vetsgov-internal")," via the SOCKS proxy."),o.a.createElement("h3",{id:"chrome"},"Chrome"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Install Proxy SwitchyOmega"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"}},"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Configure the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"proxy")," profile like this:"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/e1e2ff69a2f38f19a2af28739bf21ed0/21cdd/switchy-omega-config-1.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.077220077220076%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"switchy omega config 1",title:"switchy omega config 1",src:"/static/e1e2ff69a2f38f19a2af28739bf21ed0/e3189/switchy-omega-config-1.png",srcSet:"/static/e1e2ff69a2f38f19a2af28739bf21ed0/a2ead/switchy-omega-config-1.png 259w,\n/static/e1e2ff69a2f38f19a2af28739bf21ed0/6b9fd/switchy-omega-config-1.png 518w,\n/static/e1e2ff69a2f38f19a2af28739bf21ed0/e3189/switchy-omega-config-1.png 1035w,\n/static/e1e2ff69a2f38f19a2af28739bf21ed0/44d59/switchy-omega-config-1.png 1553w,\n/static/e1e2ff69a2f38f19a2af28739bf21ed0/21cdd/switchy-omega-config-1.png 1680w",sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"}))))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Configure the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"auto switch")," profile like this:"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1035px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/60af0631adeab52415d26ccc49f73b3f/efa1a/switchy-omega-config-2.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.007722007722005%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"switchy omega config 2",title:"switchy omega config 2",src:"/static/60af0631adeab52415d26ccc49f73b3f/e3189/switchy-omega-config-2.png",srcSet:"/static/60af0631adeab52415d26ccc49f73b3f/a2ead/switchy-omega-config-2.png 259w,\n/static/60af0631adeab52415d26ccc49f73b3f/6b9fd/switchy-omega-config-2.png 518w,\n/static/60af0631adeab52415d26ccc49f73b3f/e3189/switchy-omega-config-2.png 1035w,\n/static/60af0631adeab52415d26ccc49f73b3f/44d59/switchy-omega-config-2.png 1553w,\n/static/60af0631adeab52415d26ccc49f73b3f/efa1a/switchy-omega-config-2.png 2040w",sizes:"(max-width: 1035px) 100vw, 1035px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"}))))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"In Chrome's menu bar, click on the proxy app and change the setting to 'auto switch':"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"440px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.68339768339767%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"switch omega auto switch",title:"switch omega auto switch",src:"/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png",srcSet:"/static/602026a7c01ed5959d9d965b285bd4d4/a2ead/switch-omega-auto-switch.png 259w,\n/static/602026a7c01ed5959d9d965b285bd4d4/48c0e/switch-omega-auto-switch.png 440w",sizes:"(max-width: 440px) 100vw, 440px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"}))))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Be sure to hit the Apply Changes button to save your changes!"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"322px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.05405405405405%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"switchy omega config 3",title:"switchy omega config 3",src:"/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png",srcSet:"/static/520b8f7aad273651ae173cf6a3332574/a2ead/switchy-omega-config-3.png 259w,\n/static/520b8f7aad273651ae173cf6a3332574/fc778/switchy-omega-config-3.png 322w",sizes:"(max-width: 322px) 100vw, 322px",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px"},loading:"lazy"}))))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"NOTE: You may have to uncheck a settings flag in Chrome, see"),o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"}},"https://github.com/FelisCatus/SwitchyOmega/wiki/DNS-and-SOCKS-proxy"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Check your connection by navigating to Sentry at\n",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),"."))),o.a.createElement("h3",{id:"firefox"},"Firefox"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Install Proxy Switcher\n",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/"}},"https://addons.mozilla.org/en-US/firefox/addon/proxy-switcher/")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"create a file on your system with the following contents",o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"function FindProxyForURL(url, host) {\n         if( /.*.vetsgov-internal$/.test(host) ) {\n             return 'SOCKS5 localhost:2001';\n         }\n         return 'DIRECT';\n}\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Configure the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"automatic")," tab by setting the path to be the file created above"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Press the reload button in the proxy switcher configuration dialog"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Check your connection by navigating to Sentry at\n",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),".")),o.a.createElement("h2",{id:"issues"},"Issues"),o.a.createElement(r.MDXTag,{name:"p",components:a},"If your key doesn't seem to be working, contact the Platform team in the ",o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"#vetsgov-devops")," Slack channel."),o.a.createElement("h2",{id:"tools"},"Tools"),o.a.createElement("h3",{id:"jenkins"},"Jenkins"),o.a.createElement(r.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://jenkins.vetsgov-internal"}},"http://jenkins.vetsgov-internal"),". You can see the builds without logging in, but will need to authenticate (with GitHub) to re-run failed builds."),o.a.createElement("h3",{id:"sentry"},"Sentry"),o.a.createElement(r.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal"}},"http://sentry.vetsgov-internal"),". You will need to register for Sentry, but after creating any username/password, you will have access. We do not really use Sentry teams except to separate production, staging, and dev errors. To view the most recent production errors, which is the most common thing to do while on call, go to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://sentry.vetsgov-internal/vets-gov/platform-api-production/"}},"http://sentry.vetsgov-internal/vets-gov/platform-api-production/")),o.a.createElement("h3",{id:"grafana"},"Grafana"),o.a.createElement(r.MDXTag,{name:"p",components:a},"With the Socks proxy set up and running, go to ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://grafana.vetsgov-internal"}},"http://grafana.vetsgov-internal"),". You will need to register for Grafana, but after creating any username/password, you will have access."),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are many dashboards and you should click around to get familiar with the variety of metrics being collected and visualized (make sure Data Source is set to Production). A few highlights are:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/site"}},"Site")," to see overall metrics about the health of the site"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/external-service-status"}},"External Service Status")," to see the availability of the services vets.gov depends on."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/rds"}},"RDS")," to see the database statistics."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://grafana.vetsgov-internal/dashboard/db/revproxy"}},"Rev Proxy")," to see metrics on the reverse proxies.")))},c}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-internal-tools-mdx-d92595a6d9d9f27a1af8.js.map