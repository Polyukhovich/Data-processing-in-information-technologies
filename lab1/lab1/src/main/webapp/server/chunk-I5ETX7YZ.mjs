import './polyfills.server.mjs';
import{C as S,I as d,a as h,b as r,c as g,d as n,e as v,f,g as y,h as b,i as j,j as s,k as m,l as x,m as c,n as C,v as E,w as F,x as M,y as w,z as I}from"./chunk-BMDJ4E5L.mjs";var T=[],N=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t}),t.\u0275inj=n({imports:[d.forRoot(T),d]});let e=t;return e})();var k=(()=>{let t=class t{constructor(o){this.http=o,this.url="http://localhost:8084/lab1/Servlet1"}getEntities(){return this.http.get(this.url)}};t.\u0275fac=function(i){return new(i||t)(v(F))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function O(e,t){if(e&1&&(s(0,"li"),c(1),m()),e&2){let l=t.$implicit;f(),C(" Title: ",l.title,", age: ",l.age,", width: ",l.width," ")}}var p=(()=>{let t=class t{constructor(o){this.service=o,this.title="lab1f",this.entityList=[]}getEntities(){this.service.getEntities().subscribe(o=>{this.entityList=o})}};t.\u0275fac=function(i){return new(i||t)(y(k))},t.\u0275cmp=h({type:t,selectors:[["app-root"]],decls:8,vars:1,consts:[["href","./Servlet1"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(i,u){i&1&&(s(0,"h1"),c(1,"Hello World!"),m(),s(2,"a",0),c(3,"Servlet1"),m(),s(4,"button",1),x("click",function(){return u.getEntities()}),c(5,"Get entities"),m(),s(6,"ul"),b(7,O,2,3,"li",2),m()),i&2&&(f(7),j("ngForOf",u.entityList))},dependencies:[E]});let e=t;return e})();var H=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t,bootstrap:[p]}),t.\u0275inj=n({providers:[I()],imports:[w,N,M]});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t,bootstrap:[p]}),t.\u0275inj=n({imports:[H,S]});let e=t;return e})();export{D as a};