import{S as d,i as p,s as c,t as u,g as l,n as r,K as _,r as f,h as i}from"./index.2ce8b982.js";function m(s){let e,a,n;return{c(){e=u('404 - Could not find the page "'),a=u(s[0]),n=u('"')},l(t){e=l(t,'404 - Could not find the page "'),a=l(t,s[0]),n=l(t,'"')},m(t,o){r(t,e,o),r(t,a,o),r(t,n,o)},p(t,[o]){o&1&&_(a,t[0])},i:f,o:f,d(t){t&&i(e),t&&i(a),t&&i(n)}}}const h=({route:s})=>({status:404,error:"[Routify] Page could not be found.",props:{url:s.url}});function x(s,e,a){let{url:n}=e;return s.$$set=t=>{"url"in t&&a(0,n=t.url)},[n]}class y extends d{constructor(e){super(),p(this,e,x,m,c,{url:0})}}export{y as default,h as load};