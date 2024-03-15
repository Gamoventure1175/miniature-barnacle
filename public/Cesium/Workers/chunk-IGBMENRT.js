/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.114
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as w}from"./chunk-SEE54P6A.js";import{a as u}from"./chunk-LU3FCBPP.js";import{a as M,b as c}from"./chunk-S2577PU4.js";import{e as a}from"./chunk-2TPVVSVW.js";function f(n,o,e){this.x=u(n,0),this.y=u(o,0),this.z=u(e,0)}f.fromSpherical=function(n,o){c.typeOf.object("spherical",n),a(o)||(o=new f);let e=n.clock,t=n.cone,i=u(n.magnitude,1),p=i*Math.sin(t);return o.x=p*Math.cos(e),o.y=p*Math.sin(e),o.z=i*Math.cos(t),o};f.fromElements=function(n,o,e,t){return a(t)?(t.x=n,t.y=o,t.z=e,t):new f(n,o,e)};f.clone=function(n,o){if(a(n))return a(o)?(o.x=n.x,o.y=n.y,o.z=n.z,o):new f(n.x,n.y,n.z)};f.fromCartesian4=f.clone;f.packedLength=3;f.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),o[e++]=n.x,o[e++]=n.y,o[e]=n.z,o};f.unpack=function(n,o,e){return c.defined("array",n),o=u(o,0),a(e)||(e=new f),e.x=n[o++],e.y=n[o++],e.z=n[o],e};f.packArray=function(n,o){c.defined("array",n);let e=n.length,t=e*3;if(!a(o))o=new Array(t);else{if(!Array.isArray(o)&&o.length!==t)throw new M("If result is a typed array, it must have exactly array.length * 3 elements");o.length!==t&&(o.length=t)}for(let i=0;i<e;++i)f.pack(n[i],o,i*3);return o};f.unpackArray=function(n,o){if(c.defined("array",n),c.typeOf.number.greaterThanOrEquals("array.length",n.length,3),n.length%3!==0)throw new M("array length must be a multiple of 3.");let e=n.length;a(o)?o.length=e/3:o=new Array(e/3);for(let t=0;t<e;t+=3){let i=t/3;o[i]=f.unpack(n,t,o[i])}return o};f.fromArray=f.unpack;f.maximumComponent=function(n){return c.typeOf.object("cartesian",n),Math.max(n.x,n.y,n.z)};f.minimumComponent=function(n){return c.typeOf.object("cartesian",n),Math.min(n.x,n.y,n.z)};f.minimumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.min(n.x,o.x),e.y=Math.min(n.y,o.y),e.z=Math.min(n.z,o.z),e};f.maximumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.max(n.x,o.x),e.y=Math.max(n.y,o.y),e.z=Math.max(n.z,o.z),e};f.clamp=function(n,o,e,t){c.typeOf.object("value",n),c.typeOf.object("min",o),c.typeOf.object("max",e),c.typeOf.object("result",t);let i=w.clamp(n.x,o.x,e.x),p=w.clamp(n.y,o.y,e.y),m=w.clamp(n.z,o.z,e.z);return t.x=i,t.y=p,t.z=m,t};f.magnitudeSquared=function(n){return c.typeOf.object("cartesian",n),n.x*n.x+n.y*n.y+n.z*n.z};f.magnitude=function(n){return Math.sqrt(f.magnitudeSquared(n))};var P=new f;f.distance=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),f.subtract(n,o,P),f.magnitude(P)};f.distanceSquared=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),f.subtract(n,o,P),f.magnitudeSquared(P)};f.normalize=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=f.magnitude(n);if(o.x=n.x/e,o.y=n.y/e,o.z=n.z/e,isNaN(o.x)||isNaN(o.y)||isNaN(o.z))throw new M("normalized result is not a number");return o};f.dot=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),n.x*o.x+n.y*o.y+n.z*o.z};f.multiplyComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x*o.x,e.y=n.y*o.y,e.z=n.z*o.z,e};f.divideComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x/o.x,e.y=n.y/o.y,e.z=n.z/o.z,e};f.add=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x+o.x,e.y=n.y+o.y,e.z=n.z+o.z,e};f.subtract=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x-o.x,e.y=n.y-o.y,e.z=n.z-o.z,e};f.multiplyByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x*o,e.y=n.y*o,e.z=n.z*o,e};f.divideByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x/o,e.y=n.y/o,e.z=n.z/o,e};f.negate=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=-n.x,o.y=-n.y,o.z=-n.z,o};f.abs=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=Math.abs(n.x),o.y=Math.abs(n.y),o.z=Math.abs(n.z),o};var tn=new f;f.lerp=function(n,o,e,t){return c.typeOf.object("start",n),c.typeOf.object("end",o),c.typeOf.number("t",e),c.typeOf.object("result",t),f.multiplyByScalar(o,e,tn),t=f.multiplyByScalar(n,1-e,t),f.add(tn,t,t)};var D=new f,F=new f;f.angleBetween=function(n,o){c.typeOf.object("left",n),c.typeOf.object("right",o),f.normalize(n,D),f.normalize(o,F);let e=f.dot(D,F),t=f.magnitude(f.cross(D,F,D));return Math.atan2(t,e)};var bn=new f;f.mostOrthogonalAxis=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=f.normalize(n,bn);return f.abs(e,e),e.x<=e.y?e.x<=e.z?o=f.clone(f.UNIT_X,o):o=f.clone(f.UNIT_Z,o):e.y<=e.z?o=f.clone(f.UNIT_Y,o):o=f.clone(f.UNIT_Z,o),o};f.projectVector=function(n,o,e){c.defined("a",n),c.defined("b",o),c.defined("result",e);let t=f.dot(n,o)/f.dot(o,o);return f.multiplyByScalar(o,t,e)};f.equals=function(n,o){return n===o||a(n)&&a(o)&&n.x===o.x&&n.y===o.y&&n.z===o.z};f.equalsArray=function(n,o,e){return n.x===o[e]&&n.y===o[e+1]&&n.z===o[e+2]};f.equalsEpsilon=function(n,o,e,t){return n===o||a(n)&&a(o)&&w.equalsEpsilon(n.x,o.x,e,t)&&w.equalsEpsilon(n.y,o.y,e,t)&&w.equalsEpsilon(n.z,o.z,e,t)};f.cross=function(n,o,e){c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e);let t=n.x,i=n.y,p=n.z,m=o.x,h=o.y,b=o.z,j=i*b-p*h,z=p*m-t*b,S=t*h-i*m;return e.x=j,e.y=z,e.z=S,e};f.midpoint=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=(n.x+o.x)*.5,e.y=(n.y+o.y)*.5,e.z=(n.z+o.z)*.5,e};f.fromDegrees=function(n,o,e,t,i){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),n=w.toRadians(n),o=w.toRadians(o),f.fromRadians(n,o,e,t,i)};var C=new f,U=new f,un=new f(6378137*6378137,6378137*6378137,6356752314245179e-9*6356752314245179e-9);f.fromRadians=function(n,o,e,t,i){c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),e=u(e,0);let p=a(t)?t.radiiSquared:un,m=Math.cos(o);C.x=m*Math.cos(n),C.y=m*Math.sin(n),C.z=Math.sin(o),C=f.normalize(C,C),f.multiplyComponents(p,C,U);let h=Math.sqrt(f.dot(C,U));return U=f.divideByScalar(U,h,U),C=f.multiplyByScalar(C,e,C),a(i)||(i=new f),f.add(U,C,i)};f.fromDegreesArray=function(n,o,e){if(c.defined("coordinates",n),n.length<2||n.length%2!==0)throw new M("the number of coordinates must be a multiple of 2 and at least 2");let t=n.length;a(e)?e.length=t/2:e=new Array(t/2);for(let i=0;i<t;i+=2){let p=n[i],m=n[i+1],h=i/2;e[h]=f.fromDegrees(p,m,0,o,e[h])}return e};f.fromRadiansArray=function(n,o,e){if(c.defined("coordinates",n),n.length<2||n.length%2!==0)throw new M("the number of coordinates must be a multiple of 2 and at least 2");let t=n.length;a(e)?e.length=t/2:e=new Array(t/2);for(let i=0;i<t;i+=2){let p=n[i],m=n[i+1],h=i/2;e[h]=f.fromRadians(p,m,0,o,e[h])}return e};f.fromDegreesArrayHeights=function(n,o,e){if(c.defined("coordinates",n),n.length<3||n.length%3!==0)throw new M("the number of coordinates must be a multiple of 3 and at least 3");let t=n.length;a(e)?e.length=t/3:e=new Array(t/3);for(let i=0;i<t;i+=3){let p=n[i],m=n[i+1],h=n[i+2],b=i/3;e[b]=f.fromDegrees(p,m,h,o,e[b])}return e};f.fromRadiansArrayHeights=function(n,o,e){if(c.defined("coordinates",n),n.length<3||n.length%3!==0)throw new M("the number of coordinates must be a multiple of 3 and at least 3");let t=n.length;a(e)?e.length=t/3:e=new Array(t/3);for(let i=0;i<t;i+=3){let p=n[i],m=n[i+1],h=n[i+2],b=i/3;e[b]=f.fromRadians(p,m,h,o,e[b])}return e};f.ZERO=Object.freeze(new f(0,0,0));f.ONE=Object.freeze(new f(1,1,1));f.UNIT_X=Object.freeze(new f(1,0,0));f.UNIT_Y=Object.freeze(new f(0,1,0));f.UNIT_Z=Object.freeze(new f(0,0,1));f.prototype.clone=function(n){return f.clone(this,n)};f.prototype.equals=function(n){return f.equals(this,n)};f.prototype.equalsEpsilon=function(n,o,e){return f.equalsEpsilon(this,n,o,e)};f.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z})`};var O=f;var jn=new O,wn=new O;function rn(n,o,e,t,i){if(!a(n))throw new M("cartesian is required.");if(!a(o))throw new M("oneOverRadii is required.");if(!a(e))throw new M("oneOverRadiiSquared is required.");if(!a(t))throw new M("centerToleranceSquared is required.");let p=n.x,m=n.y,h=n.z,b=o.x,j=o.y,z=o.z,S=p*p*b*b,q=m*m*j*j,g=h*h*z*z,E=S+q+g,T=Math.sqrt(1/E),_=O.multiplyByScalar(n,T,jn);if(E<t)return isFinite(T)?O.clone(_,i):void 0;let N=e.x,A=e.y,k=e.z,s=wn;s.x=_.x*N*2,s.y=_.y*A*2,s.z=_.z*k*2;let Z=(1-T)*O.magnitude(n)/(.5*O.magnitude(s)),J=0,W,l,L,x,B,I,V,v,nn,on,en;do{Z-=J,L=1/(1+Z*N),x=1/(1+Z*A),B=1/(1+Z*k),I=L*L,V=x*x,v=B*B,nn=I*L,on=V*x,en=v*B,W=S*I+q*V+g*v-1,l=S*nn*N+q*on*A+g*en*k;let hn=-2*l;J=W/hn}while(Math.abs(W)>w.EPSILON12);return a(i)?(i.x=p*L,i.y=m*x,i.z=h*B,i):new O(p*L,m*x,h*B)}var X=rn;function R(n,o,e){this.longitude=u(n,0),this.latitude=u(o,0),this.height=u(e,0)}R.fromRadians=function(n,o,e,t){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),e=u(e,0),a(t)?(t.longitude=n,t.latitude=o,t.height=e,t):new R(n,o,e)};R.fromDegrees=function(n,o,e,t){return c.typeOf.number("longitude",n),c.typeOf.number("latitude",o),n=w.toRadians(n),o=w.toRadians(o),R.fromRadians(n,o,e,t)};var zn=new O,Sn=new O,Mn=new O,qn=new O(1/6378137,1/6378137,1/6356752314245179e-9),Rn=new O(1/(6378137*6378137),1/(6378137*6378137),1/(6356752314245179e-9*6356752314245179e-9)),gn=w.EPSILON1;R.fromCartesian=function(n,o,e){let t=a(o)?o.oneOverRadii:qn,i=a(o)?o.oneOverRadiiSquared:Rn,p=a(o)?o._centerToleranceSquared:gn,m=X(n,t,i,p,Sn);if(!a(m))return;let h=O.multiplyComponents(m,i,zn);h=O.normalize(h,h);let b=O.subtract(n,m,Mn),j=Math.atan2(h.y,h.x),z=Math.asin(h.z),S=w.sign(O.dot(b,n))*O.magnitude(b);return a(e)?(e.longitude=j,e.latitude=z,e.height=S,e):new R(j,z,S)};R.toCartesian=function(n,o,e){return c.defined("cartographic",n),O.fromRadians(n.longitude,n.latitude,n.height,o,e)};R.clone=function(n,o){if(a(n))return a(o)?(o.longitude=n.longitude,o.latitude=n.latitude,o.height=n.height,o):new R(n.longitude,n.latitude,n.height)};R.equals=function(n,o){return n===o||a(n)&&a(o)&&n.longitude===o.longitude&&n.latitude===o.latitude&&n.height===o.height};R.equalsEpsilon=function(n,o,e){return e=u(e,0),n===o||a(n)&&a(o)&&Math.abs(n.longitude-o.longitude)<=e&&Math.abs(n.latitude-o.latitude)<=e&&Math.abs(n.height-o.height)<=e};R.ZERO=Object.freeze(new R(0,0,0));R.prototype.clone=function(n){return R.clone(this,n)};R.prototype.equals=function(n){return R.equals(this,n)};R.prototype.equalsEpsilon=function(n,o){return R.equalsEpsilon(this,n,o)};R.prototype.toString=function(){return`(${this.longitude}, ${this.latitude}, ${this.height})`};var cn=R;function d(n,o){this.x=u(n,0),this.y=u(o,0)}d.fromElements=function(n,o,e){return a(e)?(e.x=n,e.y=o,e):new d(n,o)};d.clone=function(n,o){if(a(n))return a(o)?(o.x=n.x,o.y=n.y,o):new d(n.x,n.y)};d.fromCartesian3=d.clone;d.fromCartesian4=d.clone;d.packedLength=2;d.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),o[e++]=n.x,o[e]=n.y,o};d.unpack=function(n,o,e){return c.defined("array",n),o=u(o,0),a(e)||(e=new d),e.x=n[o++],e.y=n[o],e};d.packArray=function(n,o){c.defined("array",n);let e=n.length,t=e*2;if(!a(o))o=new Array(t);else{if(!Array.isArray(o)&&o.length!==t)throw new M("If result is a typed array, it must have exactly array.length * 2 elements");o.length!==t&&(o.length=t)}for(let i=0;i<e;++i)d.pack(n[i],o,i*2);return o};d.unpackArray=function(n,o){if(c.defined("array",n),c.typeOf.number.greaterThanOrEquals("array.length",n.length,2),n.length%2!==0)throw new M("array length must be a multiple of 2.");let e=n.length;a(o)?o.length=e/2:o=new Array(e/2);for(let t=0;t<e;t+=2){let i=t/2;o[i]=d.unpack(n,t,o[i])}return o};d.fromArray=d.unpack;d.maximumComponent=function(n){return c.typeOf.object("cartesian",n),Math.max(n.x,n.y)};d.minimumComponent=function(n){return c.typeOf.object("cartesian",n),Math.min(n.x,n.y)};d.minimumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.min(n.x,o.x),e.y=Math.min(n.y,o.y),e};d.maximumByComponent=function(n,o,e){return c.typeOf.object("first",n),c.typeOf.object("second",o),c.typeOf.object("result",e),e.x=Math.max(n.x,o.x),e.y=Math.max(n.y,o.y),e};d.clamp=function(n,o,e,t){c.typeOf.object("value",n),c.typeOf.object("min",o),c.typeOf.object("max",e),c.typeOf.object("result",t);let i=w.clamp(n.x,o.x,e.x),p=w.clamp(n.y,o.y,e.y);return t.x=i,t.y=p,t};d.magnitudeSquared=function(n){return c.typeOf.object("cartesian",n),n.x*n.x+n.y*n.y};d.magnitude=function(n){return Math.sqrt(d.magnitudeSquared(n))};var Y=new d;d.distance=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),d.subtract(n,o,Y),d.magnitude(Y)};d.distanceSquared=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),d.subtract(n,o,Y),d.magnitudeSquared(Y)};d.normalize=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=d.magnitude(n);if(o.x=n.x/e,o.y=n.y/e,isNaN(o.x)||isNaN(o.y))throw new M("normalized result is not a number");return o};d.dot=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),n.x*o.x+n.y*o.y};d.cross=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),n.x*o.y-n.y*o.x};d.multiplyComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x*o.x,e.y=n.y*o.y,e};d.divideComponents=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x/o.x,e.y=n.y/o.y,e};d.add=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x+o.x,e.y=n.y+o.y,e};d.subtract=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e.x=n.x-o.x,e.y=n.y-o.y,e};d.multiplyByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x*o,e.y=n.y*o,e};d.divideByScalar=function(n,o,e){return c.typeOf.object("cartesian",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e.x=n.x/o,e.y=n.y/o,e};d.negate=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=-n.x,o.y=-n.y,o};d.abs=function(n,o){return c.typeOf.object("cartesian",n),c.typeOf.object("result",o),o.x=Math.abs(n.x),o.y=Math.abs(n.y),o};var fn=new d;d.lerp=function(n,o,e,t){return c.typeOf.object("start",n),c.typeOf.object("end",o),c.typeOf.number("t",e),c.typeOf.object("result",t),d.multiplyByScalar(o,e,fn),t=d.multiplyByScalar(n,1-e,t),d.add(fn,t,t)};var yn=new d,pn=new d;d.angleBetween=function(n,o){return c.typeOf.object("left",n),c.typeOf.object("right",o),d.normalize(n,yn),d.normalize(o,pn),w.acosClamped(d.dot(yn,pn))};var Tn=new d;d.mostOrthogonalAxis=function(n,o){c.typeOf.object("cartesian",n),c.typeOf.object("result",o);let e=d.normalize(n,Tn);return d.abs(e,e),e.x<=e.y?o=d.clone(d.UNIT_X,o):o=d.clone(d.UNIT_Y,o),o};d.equals=function(n,o){return n===o||a(n)&&a(o)&&n.x===o.x&&n.y===o.y};d.equalsArray=function(n,o,e){return n.x===o[e]&&n.y===o[e+1]};d.equalsEpsilon=function(n,o,e,t){return n===o||a(n)&&a(o)&&w.equalsEpsilon(n.x,o.x,e,t)&&w.equalsEpsilon(n.y,o.y,e,t)};d.ZERO=Object.freeze(new d(0,0));d.ONE=Object.freeze(new d(1,1));d.UNIT_X=Object.freeze(new d(1,0));d.UNIT_Y=Object.freeze(new d(0,1));d.prototype.clone=function(n){return d.clone(this,n)};d.prototype.equals=function(n){return d.equals(this,n)};d.prototype.equalsEpsilon=function(n,o,e){return d.equalsEpsilon(this,n,o,e)};d.prototype.toString=function(){return`(${this.x}, ${this.y})`};var G=d;function dn(n,o,e,t){o=u(o,0),e=u(e,0),t=u(t,0),c.typeOf.number.greaterThanOrEquals("x",o,0),c.typeOf.number.greaterThanOrEquals("y",e,0),c.typeOf.number.greaterThanOrEquals("z",t,0),n._radii=new O(o,e,t),n._radiiSquared=new O(o*o,e*e,t*t),n._radiiToTheFourth=new O(o*o*o*o,e*e*e*e,t*t*t*t),n._oneOverRadii=new O(o===0?0:1/o,e===0?0:1/e,t===0?0:1/t),n._oneOverRadiiSquared=new O(o===0?0:1/(o*o),e===0?0:1/(e*e),t===0?0:1/(t*t)),n._minimumRadius=Math.min(o,e,t),n._maximumRadius=Math.max(o,e,t),n._centerToleranceSquared=w.EPSILON1,n._radiiSquared.z!==0&&(n._squaredXOverSquaredZ=n._radiiSquared.x/n._radiiSquared.z)}function r(n,o,e){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,dn(this,n,o,e)}Object.defineProperties(r.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}});r.clone=function(n,o){if(!a(n))return;let e=n._radii;return a(o)?(O.clone(e,o._radii),O.clone(n._radiiSquared,o._radiiSquared),O.clone(n._radiiToTheFourth,o._radiiToTheFourth),O.clone(n._oneOverRadii,o._oneOverRadii),O.clone(n._oneOverRadiiSquared,o._oneOverRadiiSquared),o._minimumRadius=n._minimumRadius,o._maximumRadius=n._maximumRadius,o._centerToleranceSquared=n._centerToleranceSquared,o):new r(e.x,e.y,e.z)};r.fromCartesian3=function(n,o){return a(o)||(o=new r),a(n)&&dn(o,n.x,n.y,n.z),o};r.WGS84=Object.freeze(new r(6378137,6378137,6356752314245179e-9));r.UNIT_SPHERE=Object.freeze(new r(1,1,1));r.MOON=Object.freeze(new r(w.LUNAR_RADIUS,w.LUNAR_RADIUS,w.LUNAR_RADIUS));r.prototype.clone=function(n){return r.clone(this,n)};r.packedLength=O.packedLength;r.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),O.pack(n._radii,o,e),o};r.unpack=function(n,o,e){c.defined("array",n),o=u(o,0);let t=O.unpack(n,o);return r.fromCartesian3(t,e)};r.prototype.geocentricSurfaceNormal=O.normalize;r.prototype.geodeticSurfaceNormalCartographic=function(n,o){c.typeOf.object("cartographic",n);let e=n.longitude,t=n.latitude,i=Math.cos(t),p=i*Math.cos(e),m=i*Math.sin(e),h=Math.sin(t);return a(o)||(o=new O),o.x=p,o.y=m,o.z=h,O.normalize(o,o)};r.prototype.geodeticSurfaceNormal=function(n,o){if(!O.equalsEpsilon(n,O.ZERO,w.EPSILON14))return a(o)||(o=new O),o=O.multiplyComponents(n,this._oneOverRadiiSquared,o),O.normalize(o,o)};var Cn=new O,En=new O;r.prototype.cartographicToCartesian=function(n,o){let e=Cn,t=En;this.geodeticSurfaceNormalCartographic(n,e),O.multiplyComponents(this._radiiSquared,e,t);let i=Math.sqrt(O.dot(e,t));return O.divideByScalar(t,i,t),O.multiplyByScalar(e,n.height,e),a(o)||(o=new O),O.add(t,e,o)};r.prototype.cartographicArrayToCartesianArray=function(n,o){c.defined("cartographics",n);let e=n.length;a(o)?o.length=e:o=new Array(e);for(let t=0;t<e;t++)o[t]=this.cartographicToCartesian(n[t],o[t]);return o};var _n=new O,sn=new O,Nn=new O;r.prototype.cartesianToCartographic=function(n,o){let e=this.scaleToGeodeticSurface(n,sn);if(!a(e))return;let t=this.geodeticSurfaceNormal(e,_n),i=O.subtract(n,e,Nn),p=Math.atan2(t.y,t.x),m=Math.asin(t.z),h=w.sign(O.dot(i,n))*O.magnitude(i);return a(o)?(o.longitude=p,o.latitude=m,o.height=h,o):new cn(p,m,h)};r.prototype.cartesianArrayToCartographicArray=function(n,o){c.defined("cartesians",n);let e=n.length;a(o)?o.length=e:o=new Array(e);for(let t=0;t<e;++t)o[t]=this.cartesianToCartographic(n[t],o[t]);return o};r.prototype.scaleToGeodeticSurface=function(n,o){return X(n,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,o)};r.prototype.scaleToGeocentricSurface=function(n,o){c.typeOf.object("cartesian",n),a(o)||(o=new O);let e=n.x,t=n.y,i=n.z,p=this._oneOverRadiiSquared,m=1/Math.sqrt(e*e*p.x+t*t*p.y+i*i*p.z);return O.multiplyByScalar(n,m,o)};r.prototype.transformPositionToScaledSpace=function(n,o){return a(o)||(o=new O),O.multiplyComponents(n,this._oneOverRadii,o)};r.prototype.transformPositionFromScaledSpace=function(n,o){return a(o)||(o=new O),O.multiplyComponents(n,this._radii,o)};r.prototype.equals=function(n){return this===n||a(n)&&O.equals(this._radii,n._radii)};r.prototype.toString=function(){return this._radii.toString()};r.prototype.getSurfaceNormalIntersectionWithZAxis=function(n,o,e){if(c.typeOf.object("position",n),!w.equalsEpsilon(this._radii.x,this._radii.y,w.EPSILON15))throw new M("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");c.typeOf.number.greaterThan("Ellipsoid.radii.z",this._radii.z,0),o=u(o,0);let t=this._squaredXOverSquaredZ;if(a(e)||(e=new O),e.x=0,e.y=0,e.z=n.z*(1-t),!(Math.abs(e.z)>=this._radii.z-o))return e};var An=new O;r.prototype.getLocalCurvature=function(n,o){c.typeOf.object("surfacePosition",n),a(o)||(o=new G);let e=this.getSurfaceNormalIntersectionWithZAxis(n,0,An),t=O.distance(n,e),i=this.minimumRadius*t/this.maximumRadius**2,p=t*i**2;return G.fromElements(1/t,1/p,o)};var kn=[.14887433898163,.43339539412925,.67940956829902,.86506336668898,.97390652851717,0],Ln=[.29552422471475,.26926671930999,.21908636251598,.14945134915058,.066671344308684,0];function an(n,o,e){c.typeOf.number("a",n),c.typeOf.number("b",o),c.typeOf.func("func",e);let t=.5*(o+n),i=.5*(o-n),p=0;for(let m=0;m<5;m++){let h=i*kn[m];p+=Ln[m]*(e(t+h)+e(t-h))}return p*=i,p}r.prototype.surfaceArea=function(n){c.typeOf.object("rectangle",n);let o=n.west,e=n.east,t=n.south,i=n.north;for(;e<o;)e+=w.TWO_PI;let p=this._radiiSquared,m=p.x,h=p.y,b=p.z,j=m*h;return an(t,i,function(z){let S=Math.cos(z),q=Math.sin(z);return Math.cos(z)*an(o,e,function(g){let E=Math.cos(g),T=Math.sin(g);return Math.sqrt(j*q*q+b*(h*E*E+m*T*T)*S*S)})})};var qo=r;function y(n,o,e,t,i,p,m,h,b){this[0]=u(n,0),this[1]=u(t,0),this[2]=u(m,0),this[3]=u(o,0),this[4]=u(i,0),this[5]=u(h,0),this[6]=u(e,0),this[7]=u(p,0),this[8]=u(b,0)}y.packedLength=9;y.pack=function(n,o,e){return c.typeOf.object("value",n),c.defined("array",o),e=u(e,0),o[e++]=n[0],o[e++]=n[1],o[e++]=n[2],o[e++]=n[3],o[e++]=n[4],o[e++]=n[5],o[e++]=n[6],o[e++]=n[7],o[e++]=n[8],o};y.unpack=function(n,o,e){return c.defined("array",n),o=u(o,0),a(e)||(e=new y),e[0]=n[o++],e[1]=n[o++],e[2]=n[o++],e[3]=n[o++],e[4]=n[o++],e[5]=n[o++],e[6]=n[o++],e[7]=n[o++],e[8]=n[o++],e};y.packArray=function(n,o){c.defined("array",n);let e=n.length,t=e*9;if(!a(o))o=new Array(t);else{if(!Array.isArray(o)&&o.length!==t)throw new M("If result is a typed array, it must have exactly array.length * 9 elements");o.length!==t&&(o.length=t)}for(let i=0;i<e;++i)y.pack(n[i],o,i*9);return o};y.unpackArray=function(n,o){if(c.defined("array",n),c.typeOf.number.greaterThanOrEquals("array.length",n.length,9),n.length%9!==0)throw new M("array length must be a multiple of 9.");let e=n.length;a(o)?o.length=e/9:o=new Array(e/9);for(let t=0;t<e;t+=9){let i=t/9;o[i]=y.unpack(n,t,o[i])}return o};y.clone=function(n,o){if(a(n))return a(o)?(o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=n[3],o[4]=n[4],o[5]=n[5],o[6]=n[6],o[7]=n[7],o[8]=n[8],o):new y(n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8])};y.fromArray=y.unpack;y.fromColumnMajorArray=function(n,o){return c.defined("values",n),y.clone(n,o)};y.fromRowMajorArray=function(n,o){return c.defined("values",n),a(o)?(o[0]=n[0],o[1]=n[3],o[2]=n[6],o[3]=n[1],o[4]=n[4],o[5]=n[7],o[6]=n[2],o[7]=n[5],o[8]=n[8],o):new y(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8])};y.fromQuaternion=function(n,o){c.typeOf.object("quaternion",n);let e=n.x*n.x,t=n.x*n.y,i=n.x*n.z,p=n.x*n.w,m=n.y*n.y,h=n.y*n.z,b=n.y*n.w,j=n.z*n.z,z=n.z*n.w,S=n.w*n.w,q=e-m-j+S,g=2*(t-z),E=2*(i+b),T=2*(t+z),_=-e+m-j+S,N=2*(h-p),A=2*(i-b),k=2*(h+p),s=-e-m+j+S;return a(o)?(o[0]=q,o[1]=T,o[2]=A,o[3]=g,o[4]=_,o[5]=k,o[6]=E,o[7]=N,o[8]=s,o):new y(q,g,E,T,_,N,A,k,s)};y.fromHeadingPitchRoll=function(n,o){c.typeOf.object("headingPitchRoll",n);let e=Math.cos(-n.pitch),t=Math.cos(-n.heading),i=Math.cos(n.roll),p=Math.sin(-n.pitch),m=Math.sin(-n.heading),h=Math.sin(n.roll),b=e*t,j=-i*m+h*p*t,z=h*m+i*p*t,S=e*m,q=i*t+h*p*m,g=-h*t+i*p*m,E=-p,T=h*e,_=i*e;return a(o)?(o[0]=b,o[1]=S,o[2]=E,o[3]=j,o[4]=q,o[5]=T,o[6]=z,o[7]=g,o[8]=_,o):new y(b,j,z,S,q,g,E,T,_)};y.fromScale=function(n,o){return c.typeOf.object("scale",n),a(o)?(o[0]=n.x,o[1]=0,o[2]=0,o[3]=0,o[4]=n.y,o[5]=0,o[6]=0,o[7]=0,o[8]=n.z,o):new y(n.x,0,0,0,n.y,0,0,0,n.z)};y.fromUniformScale=function(n,o){return c.typeOf.number("scale",n),a(o)?(o[0]=n,o[1]=0,o[2]=0,o[3]=0,o[4]=n,o[5]=0,o[6]=0,o[7]=0,o[8]=n,o):new y(n,0,0,0,n,0,0,0,n)};y.fromCrossProduct=function(n,o){return c.typeOf.object("vector",n),a(o)?(o[0]=0,o[1]=n.z,o[2]=-n.y,o[3]=-n.z,o[4]=0,o[5]=n.x,o[6]=n.y,o[7]=-n.x,o[8]=0,o):new y(0,-n.z,n.y,n.z,0,-n.x,-n.y,n.x,0)};y.fromRotationX=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return a(o)?(o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=e,o[5]=t,o[6]=0,o[7]=-t,o[8]=e,o):new y(1,0,0,0,e,-t,0,t,e)};y.fromRotationY=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return a(o)?(o[0]=e,o[1]=0,o[2]=-t,o[3]=0,o[4]=1,o[5]=0,o[6]=t,o[7]=0,o[8]=e,o):new y(e,0,t,0,1,0,-t,0,e)};y.fromRotationZ=function(n,o){c.typeOf.number("angle",n);let e=Math.cos(n),t=Math.sin(n);return a(o)?(o[0]=e,o[1]=t,o[2]=0,o[3]=-t,o[4]=e,o[5]=0,o[6]=0,o[7]=0,o[8]=1,o):new y(e,-t,0,t,e,0,0,0,1)};y.toArray=function(n,o){return c.typeOf.object("matrix",n),a(o)?(o[0]=n[0],o[1]=n[1],o[2]=n[2],o[3]=n[3],o[4]=n[4],o[5]=n[5],o[6]=n[6],o[7]=n[7],o[8]=n[8],o):[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]};y.getElementIndex=function(n,o){return c.typeOf.number.greaterThanOrEquals("row",o,0),c.typeOf.number.lessThanOrEquals("row",o,2),c.typeOf.number.greaterThanOrEquals("column",n,0),c.typeOf.number.lessThanOrEquals("column",n,2),n*3+o};y.getColumn=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("result",e);let t=o*3,i=n[t],p=n[t+1],m=n[t+2];return e.x=i,e.y=p,e.z=m,e};y.setColumn=function(n,o,e,t){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("cartesian",e),c.typeOf.object("result",t),t=y.clone(n,t);let i=o*3;return t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z,t};y.getRow=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("result",e);let t=n[o],i=n[o+3],p=n[o+6];return e.x=t,e.y=i,e.z=p,e};y.setRow=function(n,o,e,t){return c.typeOf.object("matrix",n),c.typeOf.number.greaterThanOrEquals("index",o,0),c.typeOf.number.lessThanOrEquals("index",o,2),c.typeOf.object("cartesian",e),c.typeOf.object("result",t),t=y.clone(n,t),t[o]=e.x,t[o+3]=e.y,t[o+6]=e.z,t};var xn=new O;y.setScale=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("scale",o),c.typeOf.object("result",e);let t=y.getScale(n,xn),i=o.x/t.x,p=o.y/t.y,m=o.z/t.z;return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[3]*p,e[4]=n[4]*p,e[5]=n[5]*p,e[6]=n[6]*m,e[7]=n[7]*m,e[8]=n[8]*m,e};var Bn=new O;y.setUniformScale=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.number("scale",o),c.typeOf.object("result",e);let t=y.getScale(n,Bn),i=o/t.x,p=o/t.y,m=o/t.z;return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[3]*p,e[4]=n[4]*p,e[5]=n[5]*p,e[6]=n[6]*m,e[7]=n[7]*m,e[8]=n[8]*m,e};var H=new O;y.getScale=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o.x=O.magnitude(O.fromElements(n[0],n[1],n[2],H)),o.y=O.magnitude(O.fromElements(n[3],n[4],n[5],H)),o.z=O.magnitude(O.fromElements(n[6],n[7],n[8],H)),o};var mn=new O;y.getMaximumScale=function(n){return y.getScale(n,mn),O.maximumComponent(mn)};var Un=new O;y.setRotation=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("result",e);let t=y.getScale(n,Un);return e[0]=o[0]*t.x,e[1]=o[1]*t.x,e[2]=o[2]*t.x,e[3]=o[3]*t.y,e[4]=o[4]*t.y,e[5]=o[5]*t.y,e[6]=o[6]*t.z,e[7]=o[7]*t.z,e[8]=o[8]*t.z,e};var Zn=new O;y.getRotation=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=y.getScale(n,Zn);return o[0]=n[0]/e.x,o[1]=n[1]/e.x,o[2]=n[2]/e.x,o[3]=n[3]/e.y,o[4]=n[4]/e.y,o[5]=n[5]/e.y,o[6]=n[6]/e.z,o[7]=n[7]/e.z,o[8]=n[8]/e.z,o};y.multiply=function(n,o,e){c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e);let t=n[0]*o[0]+n[3]*o[1]+n[6]*o[2],i=n[1]*o[0]+n[4]*o[1]+n[7]*o[2],p=n[2]*o[0]+n[5]*o[1]+n[8]*o[2],m=n[0]*o[3]+n[3]*o[4]+n[6]*o[5],h=n[1]*o[3]+n[4]*o[4]+n[7]*o[5],b=n[2]*o[3]+n[5]*o[4]+n[8]*o[5],j=n[0]*o[6]+n[3]*o[7]+n[6]*o[8],z=n[1]*o[6]+n[4]*o[7]+n[7]*o[8],S=n[2]*o[6]+n[5]*o[7]+n[8]*o[8];return e[0]=t,e[1]=i,e[2]=p,e[3]=m,e[4]=h,e[5]=b,e[6]=j,e[7]=z,e[8]=S,e};y.add=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e[0]=n[0]+o[0],e[1]=n[1]+o[1],e[2]=n[2]+o[2],e[3]=n[3]+o[3],e[4]=n[4]+o[4],e[5]=n[5]+o[5],e[6]=n[6]+o[6],e[7]=n[7]+o[7],e[8]=n[8]+o[8],e};y.subtract=function(n,o,e){return c.typeOf.object("left",n),c.typeOf.object("right",o),c.typeOf.object("result",e),e[0]=n[0]-o[0],e[1]=n[1]-o[1],e[2]=n[2]-o[2],e[3]=n[3]-o[3],e[4]=n[4]-o[4],e[5]=n[5]-o[5],e[6]=n[6]-o[6],e[7]=n[7]-o[7],e[8]=n[8]-o[8],e};y.multiplyByVector=function(n,o,e){c.typeOf.object("matrix",n),c.typeOf.object("cartesian",o),c.typeOf.object("result",e);let t=o.x,i=o.y,p=o.z,m=n[0]*t+n[3]*i+n[6]*p,h=n[1]*t+n[4]*i+n[7]*p,b=n[2]*t+n[5]*i+n[8]*p;return e.x=m,e.y=h,e.z=b,e};y.multiplyByScalar=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.number("scalar",o),c.typeOf.object("result",e),e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=n[3]*o,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=n[7]*o,e[8]=n[8]*o,e};y.multiplyByScale=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.object("scale",o),c.typeOf.object("result",e),e[0]=n[0]*o.x,e[1]=n[1]*o.x,e[2]=n[2]*o.x,e[3]=n[3]*o.y,e[4]=n[4]*o.y,e[5]=n[5]*o.y,e[6]=n[6]*o.z,e[7]=n[7]*o.z,e[8]=n[8]*o.z,e};y.multiplyByUniformScale=function(n,o,e){return c.typeOf.object("matrix",n),c.typeOf.number("scale",o),c.typeOf.object("result",e),e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=n[3]*o,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=n[7]*o,e[8]=n[8]*o,e};y.negate=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o[0]=-n[0],o[1]=-n[1],o[2]=-n[2],o[3]=-n[3],o[4]=-n[4],o[5]=-n[5],o[6]=-n[6],o[7]=-n[7],o[8]=-n[8],o};y.transpose=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=n[0],t=n[3],i=n[6],p=n[1],m=n[4],h=n[7],b=n[2],j=n[5],z=n[8];return o[0]=e,o[1]=t,o[2]=i,o[3]=p,o[4]=m,o[5]=h,o[6]=b,o[7]=j,o[8]=z,o};function Dn(n){let o=0;for(let e=0;e<9;++e){let t=n[e];o+=t*t}return Math.sqrt(o)}var K=[1,0,0],Q=[2,2,1];function Pn(n){let o=0;for(let e=0;e<3;++e){let t=n[y.getElementIndex(Q[e],K[e])];o+=2*t*t}return Math.sqrt(o)}function Xn(n,o){let e=w.EPSILON15,t=0,i=1;for(let j=0;j<3;++j){let z=Math.abs(n[y.getElementIndex(Q[j],K[j])]);z>t&&(i=j,t=z)}let p=1,m=0,h=K[i],b=Q[i];if(Math.abs(n[y.getElementIndex(b,h)])>e){let j=n[y.getElementIndex(b,b)],z=n[y.getElementIndex(h,h)],S=n[y.getElementIndex(b,h)],q=(j-z)/2/S,g;q<0?g=-1/(-q+Math.sqrt(1+q*q)):g=1/(q+Math.sqrt(1+q*q)),p=1/Math.sqrt(1+g*g),m=g*p}return o=y.clone(y.IDENTITY,o),o[y.getElementIndex(h,h)]=o[y.getElementIndex(b,b)]=p,o[y.getElementIndex(b,h)]=m,o[y.getElementIndex(h,b)]=-m,o}var $=new y,On=new y;y.computeEigenDecomposition=function(n,o){c.typeOf.object("matrix",n);let e=w.EPSILON20,t=10,i=0,p=0;a(o)||(o={});let m=o.unitary=y.clone(y.IDENTITY,o.unitary),h=o.diagonal=y.clone(n,o.diagonal),b=e*Dn(h);for(;p<t&&Pn(h)>b;)Xn(h,$),y.transpose($,On),y.multiply(h,$,h),y.multiply(On,h,h),y.multiply(m,$,m),++i>2&&(++p,i=0);return o};y.abs=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),o[0]=Math.abs(n[0]),o[1]=Math.abs(n[1]),o[2]=Math.abs(n[2]),o[3]=Math.abs(n[3]),o[4]=Math.abs(n[4]),o[5]=Math.abs(n[5]),o[6]=Math.abs(n[6]),o[7]=Math.abs(n[7]),o[8]=Math.abs(n[8]),o};y.determinant=function(n){c.typeOf.object("matrix",n);let o=n[0],e=n[3],t=n[6],i=n[1],p=n[4],m=n[7],h=n[2],b=n[5],j=n[8];return o*(p*j-b*m)+i*(b*t-e*j)+h*(e*m-p*t)};y.inverse=function(n,o){c.typeOf.object("matrix",n),c.typeOf.object("result",o);let e=n[0],t=n[1],i=n[2],p=n[3],m=n[4],h=n[5],b=n[6],j=n[7],z=n[8],S=y.determinant(n);if(Math.abs(S)<=w.EPSILON15)throw new M("matrix is not invertible");o[0]=m*z-j*h,o[1]=j*i-t*z,o[2]=t*h-m*i,o[3]=b*h-p*z,o[4]=e*z-b*i,o[5]=p*i-e*h,o[6]=p*j-b*m,o[7]=b*t-e*j,o[8]=e*m-p*t;let q=1/S;return y.multiplyByScalar(o,q,o)};var Yn=new y;y.inverseTranspose=function(n,o){return c.typeOf.object("matrix",n),c.typeOf.object("result",o),y.inverse(y.transpose(n,Yn),o)};y.equals=function(n,o){return n===o||a(n)&&a(o)&&n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]&&n[3]===o[3]&&n[4]===o[4]&&n[5]===o[5]&&n[6]===o[6]&&n[7]===o[7]&&n[8]===o[8]};y.equalsEpsilon=function(n,o,e){return e=u(e,0),n===o||a(n)&&a(o)&&Math.abs(n[0]-o[0])<=e&&Math.abs(n[1]-o[1])<=e&&Math.abs(n[2]-o[2])<=e&&Math.abs(n[3]-o[3])<=e&&Math.abs(n[4]-o[4])<=e&&Math.abs(n[5]-o[5])<=e&&Math.abs(n[6]-o[6])<=e&&Math.abs(n[7]-o[7])<=e&&Math.abs(n[8]-o[8])<=e};y.IDENTITY=Object.freeze(new y(1,0,0,0,1,0,0,0,1));y.ZERO=Object.freeze(new y(0,0,0,0,0,0,0,0,0));y.COLUMN0ROW0=0;y.COLUMN0ROW1=1;y.COLUMN0ROW2=2;y.COLUMN1ROW0=3;y.COLUMN1ROW1=4;y.COLUMN1ROW2=5;y.COLUMN2ROW0=6;y.COLUMN2ROW1=7;y.COLUMN2ROW2=8;Object.defineProperties(y.prototype,{length:{get:function(){return y.packedLength}}});y.prototype.clone=function(n){return y.clone(this,n)};y.prototype.equals=function(n){return y.equals(this,n)};y.equalsArray=function(n,o,e){return n[0]===o[e]&&n[1]===o[e+1]&&n[2]===o[e+2]&&n[3]===o[e+3]&&n[4]===o[e+4]&&n[5]===o[e+5]&&n[6]===o[e+6]&&n[7]===o[e+7]&&n[8]===o[e+8]};y.prototype.equalsEpsilon=function(n,o){return y.equalsEpsilon(this,n,o)};y.prototype.toString=function(){return`(${this[0]}, ${this[3]}, ${this[6]})
(${this[1]}, ${this[4]}, ${this[7]})
(${this[2]}, ${this[5]}, ${this[8]})`};var No=y;export{O as a,cn as b,G as c,qo as d,No as e};
