(()=>{var e={};e.id=609,e.ids=[609],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},82634:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(75169),r(35866),r(68295);var s=r(23191),n=r(88716),o=r(37922),i=r.n(o),a=r(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["(user)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,75169)),"C:\\Users\\dell\\Desktop\\Next_Resort\\resort_booking\\src\\app\\(user)\\login\\page.jsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"C:\\Users\\dell\\Desktop\\Next_Resort\\resort_booking\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\dell\\Desktop\\Next_Resort\\resort_booking\\src\\app\\(user)\\login\\page.jsx"],u="/(user)/login/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(user)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},64058:(e,t,r)=>{let s={"1c7db21660f164619d4205c7422f8cc965cbc89a":()=>Promise.resolve().then(r.bind(r,41459)).then(e=>e.loginAction)};async function n(e,...t){return(await s[e]()).apply(null,t)}e.exports={"1c7db21660f164619d4205c7422f8cc965cbc89a":n.bind(null,"1c7db21660f164619d4205c7422f8cc965cbc89a")}},24125:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},85927:()=>{},84401:(e,t,r)=>{Promise.resolve().then(r.bind(r,77430))},77430:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(10326),n=r(17577);r(15424);var o=(0,r(46242).$)("1c7db21660f164619d4205c7422f8cc965cbc89a"),i=r(35047),a=r(90434);let l=()=>{let[e,t]=(0,n.useState)(""),[r,l]=(0,n.useState)(""),[c,d]=(0,n.useState)(""),u=(0,i.useRouter)(),p=async t=>{t.preventDefault();let s={email:e,password:r};console.log(s);try{let e=await o(s);e.success?u.push("/"):d(e.message||"login failed, Invalid Credentials")}catch(e){d("Invalid Credentials")}};return s.jsx("div",{className:"loginBody",children:s.jsx("div",{className:"formContainer",children:(0,s.jsxs)("form",{onSubmit:p,className:"formSection",children:[s.jsx("h1",{children:"Login"}),c&&s.jsx("p",{style:{color:"red"},children:c}),s.jsx("h3",{children:"Email"}),s.jsx("input",{type:"text",name:"email",onChange:e=>t(e.target.value)}),s.jsx("h3",{children:"Password"}),s.jsx("input",{type:"password",name:"password",onChange:e=>l(e.target.value)}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("button",{type:"submit",children:"Login"}),s.jsx(a.default,{href:"/register",className:"authLink",children:"If not registered? Regiter"})]})})})}},95014:(e,t)=>{"use strict";function r(e,t){let r;let s=e.split("/");return(t||[]).some(t=>!!s[1]&&s[1].toLowerCase()===t.toLowerCase()&&(r=t,s.splice(1,1),e=s.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},37847:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},75169:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(19510),n=r(68570);let o=(0,n.createProxy)(String.raw`C:\Users\dell\Desktop\Next_Resort\resort_booking\src\app\components\UserLogin.jsx`),{__esModule:i,$$typeof:a}=o;o.default;let l=(0,n.createProxy)(String.raw`C:\Users\dell\Desktop\Next_Resort\resort_booking\src\app\components\UserLogin.jsx#default`);r(71159);let c=()=>s.jsx("div",{children:s.jsx(l,{})})},30803:(e,t,r)=>{"use strict";r.d(t,{auth:()=>i,signIn:()=>a});var s=r(73978),n=r(52909),o=r(582);let{auth:i,signIn:a,signOut:l,handlers:{GET:c,POST:d}}=(0,s.default)({providers:[(0,n.default)({name:"credentials",async authorize(e){let t=await o.default.findOne({email:e?.email});return t&&e?.password===t.password?{name:t.username,email:t.email,role:t.role}:null}})],secret:process.env.SECRET_KEY,callbacks:{jwt:async({token:e,user:t})=>(t&&(e.userId=t.id,e.username=t.name,e.role=t.role,e.email=t.email),e),session:async({session:e,token:t})=>(e.userId=t.userId,e.username=t.username,e.role=t.role,e.email=t.email,e)}})},68295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>i});var s=r(19510),n=r(1723),o=r.n(n);r(33241);let i={title:"Create Next App",description:"Generated by create next app"};function a({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:o().className,children:e})})}},41459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{loginAction:()=>i});var s=r(27745);r(26461);var n=r(30803),o=r(80263);async function i(e){await (0,o.default)(),console.log("sample login",e);try{let t=await (0,n.signIn)("credentials",{email:e.email,password:e.password,redirect:!1});if(!t||t.error)throw console.log("login failed",t?.error),Error("login falied, Please Register");return{success:!0}}catch(e){if("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error."===e.code)return{success:!1,status:400,message:"Please Register"};return console.log(e),{success:!1,status:500,message:"An error occurred"}}}(0,r(85723).ensureServerEntryExports)([i]),(0,s.registerServerReference)("1c7db21660f164619d4205c7422f8cc965cbc89a",i)},80263:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let{default:s}=r(11185),n=async()=>{try{await s.connect(process.env.MONGO_URI),console.log("Database connected")}catch(e){console.log(e)}}},582:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});let{default:s,mongo:n}=r(11185),o=new s.Schema({username:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},role:{type:String,default:"user"},bookings:[{type:s.Schema.Types.ObjectId,ref:"booking"}]}),i=s.models.user||s.model("user",o)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},33241:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,462,838,95,420],()=>r(82634));module.exports=s})();