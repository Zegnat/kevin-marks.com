!function(){function t(e,t){function u(t){var n=e.arcs[t<0?~t:t],r=n[0],i;if(e.transform)i=[0,0],n.forEach(function(e){i[0]+=e[0],i[1]+=e[1]});else i=n[n.length-1];return t<0?[i,r]:[r,i]}function a(e,t){for(var r in e){var i=e[r];delete t[i.start];delete i.start;delete i.end;i.forEach(function(e){n[e<0?~e:e]=1});s.push(i)}}var n={},r={},i={},s=[],o=-1;t.forEach(function(n,r){var i=e.arcs[n<0?~n:n],s;if(i.length<3&&!i[1][0]&&!i[1][1]){s=t[++o],t[o]=n,t[r]=s}});t.forEach(function(e){var t=u(e),n=t[0],s=t[1],o,a;if(o=i[n]){delete i[o.end];o.push(e);o.end=s;if(a=r[s]){delete r[a.start];var f=a===o?o:o.concat(a);r[f.start=o.start]=i[f.end=a.end]=f}else{r[o.start]=i[o.end]=o}}else if(o=r[s]){delete r[o.start];o.unshift(e);o.start=n;if(a=i[n]){delete i[a.end];var l=a===o?o:a.concat(o);r[l.start=a.start]=i[l.end=o.end]=l}else{r[o.start]=i[o.end]=o}}else{o=[e];r[o.start=n]=i[o.end=s]=o}});a(i,r);a(r,i);t.forEach(function(e){if(!n[e<0?~e:e])s.push([e])});return s}function r(e,n,r){var i=[];if(arguments.length>1){var s=[],o;function u(e){var t=e<0?~e:e;(s[t]||(s[t]=[])).push({i:e,g:o})}function a(e){e.forEach(u)}function f(e){e.forEach(a)}function l(e){if(e.type==="GeometryCollection")e.geometries.forEach(l);else if(e.type in c)o=e,c[e.type](e.arcs)}var c={LineString:a,MultiLineString:f,Polygon:f,MultiPolygon:function(e){e.forEach(f)}};l(n);s.forEach(arguments.length<3?function(e){i.push(e[0].i)}:function(e){if(r(e[0].g,e[e.length-1].g))i.push(e[0].i)})}else{for(var h=0,p=e.arcs.length;h<p;++h)i.push(h)}return{type:"MultiLineString",arcs:t(e,i)}}function i(e,r){function a(e){e.forEach(function(t){t.forEach(function(t){(i[t=t<0?~t:t]||(i[t]=[])).push(e)})});s.push(e)}function f(t){return h(u(e,{type:"Polygon",arcs:[t]}).coordinates[0])>0}var i={},s=[],o=[];r.forEach(function(e){if(e.type==="Polygon")a(e.arcs);else if(e.type==="MultiPolygon")e.arcs.forEach(a)});s.forEach(function(e){if(!e._){var t=[],n=[e];e._=1;o.push(t);while(e=n.pop()){t.push(e);e.forEach(function(e){e.forEach(function(e){i[e<0?~e:e].forEach(function(e){if(!e._){e._=1;n.push(e)}})})})}}});s.forEach(function(e){delete e._});return{type:"MultiPolygon",arcs:o.map(function(r){var s=[];r.forEach(function(e){e.forEach(function(e){e.forEach(function(e){if(i[e<0?~e:e].length<2){s.push(e)}})})});s=t(e,s);if((n=s.length)>1){var o=f(r[0][0]);for(var u=0,a;u<n;++u){if(o===f(s[u])){a=s[0],s[0]=s[u],s[u]=a;break}}}return s})}}function s(e,t){return t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(t){return o(e,t)})}:o(e,t)}function o(e,t){var n={type:"Feature",id:t.id,properties:t.properties||{},geometry:u(e,t)};if(t.id==null)delete n.id;return n}function u(e,t){function i(e,t){if(t.length)t.pop();for(var i=r[e<0?~e:e],s=0,o=i.length,u;s<o;++s){t.push(u=i[s].slice());n(u,s)}if(e<0)a(t,o)}function s(e){e=e.slice();n(e,0);return e}function o(e){var t=[];for(var n=0,r=e.length;n<r;++n)i(e[n],t);if(t.length<2)t.push(t[0].slice());return t}function u(e){var t=o(e);while(t.length<4)t.push(t[0].slice());return t}function f(e){return e.map(u)}function l(e){var t=e.type;return t==="GeometryCollection"?{type:t,geometries:e.geometries.map(l)}:t in c?{type:t,coordinates:c[t](e)}:null}var n=m(e.transform),r=e.arcs;var c={Point:function(e){return s(e.coordinates)},MultiPoint:function(e){return e.coordinates.map(s)},LineString:function(e){return o(e.arcs)},MultiLineString:function(e){return e.arcs.map(o)},Polygon:function(e){return f(e.arcs)},MultiPolygon:function(e){return e.arcs.map(f)}};return l(t)}function a(e,t){var n,r=e.length,i=r-t;while(i<--r)n=e[i],e[i++]=e[r],e[r]=n}function f(e,t){var n=0,r=e.length;while(n<r){var i=n+r>>>1;if(e[i]<t)n=i+1;else r=i}return n}function l(e){function r(e,n){e.forEach(function(e){if(e<0)e=~e;var r=t[e];if(r)r.push(n);else t[e]=[n]})}function i(e,t){e.forEach(function(e){r(e,t)})}function s(e,t){if(e.type==="GeometryCollection")e.geometries.forEach(function(e){s(e,t)});else if(e.type in o)o[e.type](e.arcs,t)}var t={},n=e.map(function(){return[]});var o={LineString:r,MultiLineString:i,Polygon:i,MultiPolygon:function(e,t){e.forEach(function(e){i(e,t)})}};e.forEach(s);for(var u in t){for(var a=t[u],l=a.length,c=0;c<l;++c){for(var h=c+1;h<l;++h){var p=a[c],d=a[h],v;if((v=n[p])[u=f(v,d)]!==d)v.splice(u,0,d);if((v=n[d])[u=f(v,p)]!==p)v.splice(u,0,p)}}}return n}function c(e,t){function f(e){i.remove(e);e[1][2]=t(e);i.push(e)}var n=m(e.transform),r=g(e.transform),i=v(),s=0,o;if(!t)t=p;e.arcs.forEach(function(e){var r=[];e.forEach(n);for(var s=1,u=e.length-1;s<u;++s){o=e.slice(s-1,s+2);o[1][2]=t(o);r.push(o);i.push(o)}e[0][2]=e[u][2]=Infinity;for(var s=0,u=r.length;s<u;++s){o=r[s];o.previous=r[s-1];o.next=r[s+1]}});while(o=i.pop()){var u=o.previous,a=o.next;if(o[1][2]<s)o[1][2]=s;else s=o[1][2];if(u){u.next=a;u[2]=o[2];f(u)}if(a){a.previous=u;a[0]=o[0];f(a)}}e.arcs.forEach(function(e){e.forEach(r)});return e}function h(e){var t=-1,n=e.length,r,i=e[n-1],s=0;while(++t<n){r=i;i=e[t];s+=r[0]*i[1]-r[1]*i[0]}return s*.5}function p(e){var t=e[0],n=e[1],r=e[2];return Math.abs((t[0]-r[0])*(n[1]-t[1])-(t[0]-n[0])*(r[1]-t[1]))}function d(e,t){return e[1][2]-t[1][2]}function v(){function r(e,n){while(n>0){var r=(n+1>>1)-1,i=t[r];if(d(e,i)>=0)break;t[i._=n]=i;t[e._=n=r]=e}}function i(e,r){while(true){var i=r+1<<1,s=i-1,o=r,u=t[o];if(s<n&&d(t[s],u)<0)u=t[o=s];if(i<n&&d(t[i],u)<0)u=t[o=i];if(o===r)break;t[u._=r]=u;t[e._=r=o]=e}}var e={},t=[],n=0;e.push=function(e){r(t[e._=n]=e,n++);return n};e.pop=function(){if(n<=0)return;var e=t[0],r;if(--n>0)r=t[n],i(t[r._=0]=r,0);return e};e.remove=function(e){var s=e._,o;if(t[s]!==e)return;if(s!==--n)o=t[n],(d(o,e)<0?r:i)(t[o._=s]=o,s);return s};return e}function m(e){if(!e)return y;var t,n,r=e.scale[0],i=e.scale[1],s=e.translate[0],o=e.translate[1];return function(e,u){if(!u)t=n=0;e[0]=(t+=e[0])*r+s;e[1]=(n+=e[1])*i+o}}function g(e){if(!e)return y;var t,n,r=e.scale[0],i=e.scale[1],s=e.translate[0],o=e.translate[1];return function(e,u){if(!u)t=n=0;var a=(e[0]-s)/r|0,f=(e[1]-o)/i|0;e[0]=a-t;e[1]=f-n;t=a;n=f}}function y(){}var e={version:"1.6.8",mesh:function(e){return u(e,r.apply(this,arguments))},meshArcs:r,merge:function(e){return u(e,i.apply(this,arguments))},mergeArcs:i,feature:s,neighbors:l,presimplify:c};if(typeof define==="function"&&define.amd)define(e);else if(typeof module==="object"&&module.exports)module.exports=e;else this.topojson=e}()