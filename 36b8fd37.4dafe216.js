(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),l=(t(0),t(98)),i={id:"install_prometheus",title:"Prometheus support"},a={unversionedId:"install_prometheus",id:"install_prometheus",isDocsHomePage:!1,title:"Prometheus support",description:"Prometheus support was add in the 1.6 release, but was never very well documented. Release 2.0 brings with it a re-write of the prometheus integration. Many changes were made to how one may configure a controller. This page only applies to version 2.0.1+.",source:"@site/docs/install_prometheus.md",slug:"/install_prometheus",permalink:"/docs/install_prometheus",version:"current",sidebar:"someSidebar",previous:{title:"Final steps",permalink:"/docs/install_finish"},next:{title:"Loki",permalink:"/docs/install_loki"}},s=[{value:"Single Controller",id:"single-controller",children:[]},{value:"Multiple Controllers",id:"multiple-controllers",children:[{value:"First Approach",id:"first-approach",children:[]},{value:"Second Approach",id:"second-approach",children:[]},{value:"Final Approach, NOT Recommended",id:"final-approach-not-recommended",children:[]}]}],c={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Prometheus support was add in the 1.6 release, but was never very well documented. Release 2.0 brings with it a re-write of the prometheus integration. Many changes were made to how one may configure a controller. This page only applies to version 2.0.1+."),Object(l.b)("p",null,"This page explains how to configure Prometheus and UniFi-Poller. For help installing Prometheus you'll have to look elsewhere; that's not in this wiki at this time."),Object(l.b)("h2",{id:"single-controller"},"Single Controller"),Object(l.b)("p",null,"Lets make the first example look a lot like the old v1.x way of doing things. Configure a single controller in up.conf (or using environment variables). See ",Object(l.b)("a",{parentName:"p",href:"/docs/configuration"},"Config file and Environment variables")," and the example config file for help with that."),Object(l.b)("p",null,"Then you simply point prometheus at unifi-poller using a config like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(l.b)("p",null,"If you have other scrape configs, leave them there. Just add a new one for unifipoller. Replace localhost with the IP of the host running unifi-poller. That's it! Restart prometheus and it should begin to scrape data from your controller."),Object(l.b)("h2",{id:"multiple-controllers"},"Multiple Controllers"),Object(l.b)("p",null,"You can either configure the controllers in unifi-poller or poll them unconfigured. When polling unconfigured, you must enable dynamic. You can scrape multiple controllers in several ways. Here is a list of options:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Set all controller user/passwords the same and pass in controller URLs from Prometheus. To do this, you set the username and password as the default in the unifi config."),Object(l.b)("li",{parentName:"ol"},"Configure each controller in unifi-poller and pass in urls from Prometheus. This allows them to have different usernames and passwords."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"NOT Recommended:")," Configure each controller in unifi-poller and configure prometheus as shown above in the Single Controller section. This is useful when you want to poll all the controllers at the same time from a single prometheus instance.")),Object(l.b)("h3",{id:"first-approach"},"First Approach"),Object(l.b)("p",null,"This describes approach 1 above."),Object(l.b)("p",null,"Using this approach all you need to configure for controllers in unifi-poller is the name and password. Example below. Any settings you provide to ","[unifi.defaults]"," will be used for all controllers passed in from Prometheus. All other settings are optional."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[unifi]\n  # This must be enabled to do dynamic polls against unconfigured urls.\n  dynamic = true\n[unifi.defaults]\n  user       = "unifipoller"\n  pass       = "unifipoller"\n  sites      = ["all"]\n  save_ids   = false\n  save_dpi   = false\n  save_sites = true\n  verify_ssl = false\n')),Object(l.b)("p",null,"Or with env variables:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'UP_UNIFI_DYNAMIC=true\nUP_UNIFI_DEFAULT_USER="unifipoller"\nUP_UNIFI_DEFAULT_PASS="unifipoller"\n')),Object(l.b)("h3",{id:"second-approach"},"Second Approach"),Object(l.b)("p",null,"This describes approach 2 above."),Object(l.b)("p",null,"Configure each controller in up.conf or using environment variables. When Prometheus scrapes from unifi-poller the poller will map the URL directly to the one configured in up.conf (or using env vars). Just make sure the url you put into the prometheus configuration matches the url put into the poller configuration."),Object(l.b)("p",null,"Example polling two controllers:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[unifi]\n  # Not needed since not dynamic.\n  dynamic = false\n[[unifi.controller]]\n  url = "http://unifi.controller:8443"\n  user = "unifipoller1"\n  pass = "unifipoller1"\n[[unifi.controller]]\n  url = "http://another.controller:8443"\n  user = "unifipoller2"\n  pass = "unifipoller2"\n')),Object(l.b)("p",null,"Or with env variables:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'UP_UNIFI_DYNAMIC=false\nUP_UNIFI_CONTROLLER_0_URL="http://unifi.controller:8443"\nUP_UNIFI_CONTROLLER_0_USER="unifipoller"\nUP_UNIFI_CONTROLLER_0_PASS="unifipoller"\nUP_UNIFI_CONTROLLER_1_URL="http://another.controller:8443"\nUP_UNIFI_CONTROLLER_1_USER="unifipoller"\nUP_UNIFI_CONTROLLER_1_PASS="unifipoller"\n')),Object(l.b)("h4",{id:"prometheus-configuration-for-urls"},"Prometheus Configuration for URLs"),Object(l.b)("p",null,"This applies to both approaches above. Configure prometheus like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n      - targets:\n        - https://unifi.controller:8443\n        - https://another.controller:8443\n    metrics_path: /scrape\n    relabel_configs:\n     - source_labels: [__address__]\n       target_label: __param_target\n     - source_labels: [__param_target]\n       target_label: instance\n     - target_label: __address__\n       replacement: localhost:9130\n")),Object(l.b)("p",null,"Replace ",Object(l.b)("inlineCode",{parentName:"p"},"localhost")," with the IP of your unifi-poller host, and replace ",Object(l.b)("inlineCode",{parentName:"p"},"unifi.controller")," and another.controller with the IPs of your controllers."),Object(l.b)("h3",{id:"final-approach-not-recommended"},"Final Approach, NOT Recommended"),Object(l.b)("p",null,"Just configure your controllers in up.conf or using env variables as explained in the Configuration doc. Then setup Prometheus like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(l.b)("p",null,"The standard ",Object(l.b)("inlineCode",{parentName:"p"},"/metrics")," path that the above snippet uses returns metrics for all configured controllers."))}p.isMDXComponent=!0},98:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(i,".").concat(f)]||u[f]||h[f]||l;return t?o.a.createElement(b,a(a({ref:n},c),{},{components:t})):o.a.createElement(b,a({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);