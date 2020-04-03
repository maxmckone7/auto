(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{71:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t,r=i(a(3)),l=function(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};t.get||t.set?Object.defineProperty(s,a,t):s[a]=e[a]}return s.default=e,s}(a(0));i(a(2)),i(a(114));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,s,a,r){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(s||0===i||(s={children:void 0}),s&&l)for(var o in l)void 0===s[o]&&(s[o]=l[o]);else s||(s=l||{});if(1===i)s.children=r;else if(i>1){for(var n=new Array(i),d=0;d<i;d++)n[d]=arguments[d+3];s.children=n}return{$$typeof:t,type:e,key:void 0===a?null:""+a,ref:null,props:s,_owner:null}}function n(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function d(){return(d=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function c(e,s){if(null==e)return{};var a,t,r=function(e,s){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const h=e=>{let{to:s}=e,a=c(e,["to"]);return s.includes("http")?l.default.createElement("a",d({},e,{href:s})):("#"===s[0]&&(s=r.default.join("/auto/","pages/build-platforms/travis.html")+s),l.default.createElement("a",d({},a,{href:s,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const t=new URL(r.default.join(window.location.origin,s));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,s),e.onClick();const l=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(l),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const p=e=>{var s,a;return a=s=class extends l.default.Component{constructor(...e){super(...e),n(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?l.default.createElement(e,this.props,this.props.children||null):null}},n(s,"defaultProps",{shouldLoad:!0}),a};p(()=>a.e(27).then(a.bind(null,115))),p(()=>a.e(27).then(a.bind(null,116)));var u=o("h1",{},void 0,"Travis CI"),v=o("p",{},void 0,"The following config declares the ",o("code",{},void 0,"deploy")," job that run on all branches. The job will either release:"),m=o("ul",{},void 0,o("li",{},void 0,"a new ",o("code",{},void 0,"latest")," version from ",o("code",{},void 0,"master")),o("li",{},void 0,"a ",o("code",{},void 0,"canary")," build from a pull request (if your package manager plugin implements them)")),g=o("p",{},void 0,o("strong",{},void 0,o("code",{},void 0,".travis.yml"))),f=o("pre",{},void 0,o("code",{className:"language-yaml"},void 0,o("span",{className:"hljs-attr"},void 0,"language:")," ",o("span",{className:"hljs-string"},void 0,"node_js"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"node_js:")," ",o("span",{className:"hljs-string"},void 0,"'10'"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"env:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  global:"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"    -")," ",o("span",{className:"hljs-string"},void 0,'GIT_NAME="Andrew')," ",o("span",{className:"hljs-string"},void 0,'Lisowski"'),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"    -")," ",o("span",{className:"hljs-string"},void 0,'GIT_EMAIL="lisowski54@gmail.com"'),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"script:"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"  -")," ",o("span",{className:"hljs-string"},void 0,"yarn")," ",o("span",{className:"hljs-string"},void 0,"lint"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"  -")," ",o("span",{className:"hljs-string"},void 0,"yarn")," ",o("span",{className:"hljs-string"},void 0,"test"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"  -")," ",o("span",{className:"hljs-string"},void 0,"yarn")," ",o("span",{className:"hljs-string"},void 0,"build"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"deploy:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  - provider:")," ",o("span",{className:"hljs-string"},void 0,"script"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    script:")," ",o("span",{className:"hljs-string"},void 0,"if")," ",o("span",{className:"hljs-string"},void 0,"[")," ",o("span",{className:"hljs-string"},void 0,'"$GH_TOKEN"')," ",o("span",{className:"hljs-string"},void 0,"!=")," ",o("span",{className:"hljs-string"},void 0,'"false"')," ",o("span",{className:"hljs-string"},void 0,"];then")," ",o("span",{className:"hljs-string"},void 0,"npx")," ",o("span",{className:"hljs-string"},void 0,"auto")," ",o("span",{className:"hljs-string"},void 0,"shipit;")," ",o("span",{className:"hljs-string"},void 0,"fi;"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    skip-cleanup:")," ",o("span",{className:"hljs-literal"},void 0,"true"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    on:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"      all_branches:")," ",o("span",{className:"hljs-literal"},void 0,"true"),o("br",{}))),b=o("p",{},void 0,"If you are having problems make sure you have done the following:"),j=o("ul",{},void 0,o("li",{},void 0,o("code",{},void 0,"GH_TOKEN")," is set"),o("li",{},void 0,"Any other secrets for plugins are set (Ex; ",o("code",{},void 0,"NPM_TOKEN")," with the NPM plugin)")),N=o("p",{},void 0,'Some plugins might use tools that require you to be on a branch. The default setup for travis leaves you in a "Detached Head" state, meaning the git HEAD pointer is not on a branch. To fix this add the following lines to your ',o("code",{},void 0,".travis.yml")),y=o("pre",{},void 0,o("code",{className:"language-yml"},void 0,o("span",{className:"hljs-attr"},void 0,"before_deploy:"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"  -")," ",o("span",{className:"hljs-string"},void 0,"if")," ",o("span",{className:"hljs-string"},void 0,"[")," ",o("span",{className:"hljs-string"},void 0,'"$TRAVIS_BRANCH"')," ",o("span",{className:"hljs-string"},void 0,"==")," ",o("span",{className:"hljs-string"},void 0,'"master"')," ",o("span",{className:"hljs-string"},void 0,"];then"),o("br",{}),"      ",o("span",{className:"hljs-string"},void 0,"git")," ",o("span",{className:"hljs-string"},void 0,"checkout")," ",o("span",{className:"hljs-string"},void 0,"master;"),o("br",{}),"    ",o("span",{className:"hljs-string"},void 0,"fi;"),o("br",{}))),w=o("p",{},void 0,"This code will ensure that your git HEAD is on master when creating a new release."),P=o("p",{},void 0,"By default Travis will not pass secrets to forks. Because of this canaries releases will fail. You can either:"),O=o("ul",{},void 0,o("li",{},void 0,"Pass secrets to forks (insecure)"),o("li",{},void 0,"Only run shipit if secrets are available (recommended, in above config)")),k=o("code",{},void 0,"relay-compiler-language-typescript");var _=e=>o("div",{className:e.className},void 0,o("section",{},void 0,u,v,m,g,f,o("h2",{id:"troubleshooting"},void 0,"Troubleshooting ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#troubleshooting","aria-hidden":"true"})),b,j,o("h3",{id:"detached-head-(monorepo)"},void 0,"Detached Head (Monorepo) ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#detached-head-(monorepo)","aria-hidden":"true"})),N,y,w,o("h3",{id:"canary-deploy-failing-on-forks"},void 0,"Canary Deploy Failing on Forks ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#canary-deploy-failing-on-forks","aria-hidden":"true"})),P,O,o("h2",{id:"examples"},void 0,"Examples ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),o("ul",{},void 0,o("li",{},void 0,o(h,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/relay-tools/relay-compiler-language-typescript/blob/master/.travis.yml",className:"external-link"},void 0,k)))));s.default=_,e.exports=s.default}}]);
//# sourceMappingURL=travis.js.map