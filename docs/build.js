(()=>{var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".build.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="likelion-practice:",o.l=(n,r,i,a)=>{if(e[n])e[n].push(r);else{var c,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+i),c.src=n),e[n]=[r];var p=(t,r)=>{c.onerror=c.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[a,c,l]=n,d=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);l&&l(o)}for(t&&t(n);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunklikelion_practice=self.webpackChunklikelion_practice||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,o.e(110).then(o.bind(o,110));const i=document.getElementById("input-container"),a=document.getElementById("content-container"),c=document.getElementById("writer-form"),l=document.getElementById("post-form"),d=document.getElementById("input-writer"),s=document.getElementById("input-post"),u="http://likelion.kro.kr:8000/",p=async e=>{const t=e.currentTarget.querySelector(".delete-button").id;window.location.href=`detail.html?id=${t}`},m=async e=>{if(0===d.value.length||0===s.value.length)return e.preventDefault(),void alert("모두 입력해주세요 !");200===(await h(d.value,s.value)).status?(d.value="",s.value=""):(e.preventDefault(),alert("방명록 생성 실패 !"))},h=async(e,t)=>{const n={name:e,content:t};return await fetch(u+"new/",{method:"POST",body:JSON.stringify(n)}).then((e=>e.json()))},f=async e=>{!0===confirm("삭제하시겠습니까?")&&await fetch(`${u}${e.target.id}/`,{method:"DELETE"}).then((e=>(window.location.reload(),e.json()))).catch((e=>console.log("delete 실패 에러:",e)))};(async()=>{const e=(await fetch(u).then((e=>e.json())).catch((e=>console.log("data fetch error:",e)))).data;if(e.length>0)e.map((e=>{const t=document.createElement("div");t.classList.add("post"),t.addEventListener("click",p);const n=document.createElement("div");n.classList.add("content-div"),e.content.length>10?n.innerText=`${e.content.slice(0,10)} <더보기>`:n.innerText=`${e.content}`;const r=document.createElement("div");r.classList.add("writer-div"),r.innerText=`작성자 : ${e.writer} `;const o=document.createElement("button");o.id=e.id,o.classList.add("delete-button"),o.innerText="삭제",o.addEventListener("click",f),t.appendChild(n),t.appendChild(r),t.appendChild(o),a.appendChild(t)}));else{const e=document.createElement("div");e.innerText="방명록에 글이 없습니다 \n\n 첫 방명록을 적어주세요 !",i.appendChild(e)}console.log(e)})(),c.addEventListener("submit",m),l.addEventListener("submit",m)})();