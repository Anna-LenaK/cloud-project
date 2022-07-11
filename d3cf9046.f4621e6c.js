(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{112:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),i=(o(0),o(126)),a={id:"overview",title:"Overview",slug:"/overview"},c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Cloud Carbon Footprint provides a way for organizations to measure, monitor, and reduce their carbon emissions from the cloud. It supports connecting to multiple cloud providers, allowing you to get a full picture of your cloud emissions.",source:"@site/docs/CCFOverview.md",slug:"/overview",permalink:"/docs/overview",version:"current",sidebar:"tryNowSidebar",next:{title:"Methodology",permalink:"/docs/methodology"}},s=[{value:"Vision",id:"vision",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Fitting Cloud Carbon Footprint to your needs",id:"fitting-cloud-carbon-footprint-to-your-needs",children:[]},{value:"Trying it out",id:"trying-it-out",children:[]}],u={toc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Cloud Carbon Footprint provides a way for organizations to measure, monitor, and reduce their carbon emissions from the cloud. It supports connecting to multiple cloud providers, allowing you to get a full picture of your cloud emissions."),Object(i.b)("h3",{id:"vision"},"Vision"),Object(i.b)("p",null,"The vision for this product is to be a trusted tool for its accuracy and comprehensiveness, and aids organizations to take tangible steps towards reducing their cloud emissions. In its future, we see built-in intelligence to make recommendations on actions that can be taken and what impact they will have."),Object(i.b)("p",null,"As an open source project, we hope that its evolution and direction is community driven and meets the needs and use cases identified. We welcome all feedback and input on how this product can grow, in terms of directions, features, methodology changes, and code updates.",Object(i.b)("br",{parentName:"p"}),"\n","For more visibility into the work planned and happening, please visit the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/projects/1"},"project board")," or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/issues/new/choose"},"create an issue."),Object(i.b)("br",{parentName:"p"}),"\n","For feedback, questions, or if you\u2019d like to collaborate on shaping the product direction, please reach out to ",Object(i.b)("a",{parentName:"p",href:"mailto:green-cloud@thoughtworks.com"},"green-cloud@thoughtworks.com"),"."),Object(i.b)("h3",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,"Cloud Carbon Footprint works by taking your cloud provider usage data, converting it into energy, and then taking into account the power usage effectiveness of the cloud provider\u2019s data centers and the carbon intensity of the region where the data center pulls power from.",Object(i.b)("br",{parentName:"p"}),"\n","For a more detailed and in depth explanation into the approach and methodology, please reference the ",Object(i.b)("a",{parentName:"p",href:"/docs/methodology"},"Methodology Page.")),Object(i.b)("h3",{id:"fitting-cloud-carbon-footprint-to-your-needs"},"Fitting Cloud Carbon Footprint to your needs"),Object(i.b)("p",null,"The code has been written using domain driven design, to allow for easy extension and customization. With the core estimation logic, API, front-end dashboard, and CLI separated, it is possible to fit it to your needs, for instance using the core logic or API within an existing application, or displaying the dashboard within an existing dev portal."),Object(i.b)("h3",{id:"trying-it-out"},"Trying it out"),Object(i.b)("p",null,"We have provided a few ways for you to get up and running, depending on your situation. To simply test out Cloud Carbon Footprint quickly, we have provided a few packages that can help you quickly spin up the whole app or the portion(s) you need. To test drive, visit the ",Object(i.b)("a",{parentName:"p",href:"/docs/getting-started"},"Try Now")," page."),Object(i.b)("p",null,"If you are looking to run the app locally or to contribute, we recommend ",Object(i.b)("a",{parentName:"p",href:"/docs/introduction"},"running the app locally"),". With this approach you can also get up and ",Object(i.b)("a",{parentName:"p",href:"/docs/run-with-mocked-data"},"running quickly with mocked data")," or go ahead and ",Object(i.b)("a",{parentName:"p",href:"/docs/aws"},"connect your own cloud data")," and estimate your actual emissions."))}d.isMDXComponent=!0},126:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),b=n,h=p["".concat(a,".").concat(b)]||p[b]||l[b]||i;return o?r.a.createElement(h,c(c({ref:t},u),{},{components:o})):r.a.createElement(h,c({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=o[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);