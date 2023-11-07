import{s as ve,f as fe,n as Qt}from"../chunks/scheduler.63274e7e.js";import{S as ue,i as be,g as r,s as i,m as yt,h as c,j as R,y as w,c as a,n as Tt,f as e,k as x,a as s,x as p}from"../chunks/index.c26a6efa.js";function we(ne){let m,n,L,Xt="All your photos in one folder",Et,z,Zt=`PhotoFolder takes advantage of <span class="font-bold">open formats</span> to give the features
			of Google/Apple Photos without the lock-in.`,kt,o,v,St,Pt,It,Dt,Ft,jt,f,Gt,Ut,A,$t='<img src="/hero-image2.webp" alt="PhotoFolder logo" class="-mt-[6rem] md:-mt-32 -ml-3 m-auto w-[2000px]"/>',E,k,S,P,I,D,F,h,te=`<p class="text-3xl md:text-4xl drop-shadow-lg text-[#333] px-4">PhotoFolder stores all in a
		<span class="font-bold text-[#005cc4] fill-[#458cdd] border-[#458cddca] px-3 pb-1 rounded-full inline-flex items-center border-2">regular folder
			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"></path></svg></span></p> <p class="text-3xl md:text-4xl mt-12 drop-shadow-lg text-[#333] px-4"><span class="font-bold text-[#ff5900] fill-[#ff5900AA] rounded-full inline-flex items-center">Location
			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg> </span>,
		<span class="font-bold text-[#800080] fill-[#800080AA] rounded-full inline-flex items-center">faces

			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></span>
		and
		<span class="font-bold text-[#15803d] fill-[#15803dAA] rounded-full inline-flex items-center">objects

			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></span>
		are not in a
		<span class="line-through">separate database</span>. They are stored in the

		<a href="https://wikipedia.org/wiki/Metadata" target="_blank"><span class="px-3 pb-1 font-bold text-[#313131] fill-[#313131BB] border-[#313131AA] border-2 rounded-full inline-flex items-center">file&#39;s metadata

				<svg class="inline ml-2 h-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z"></path></svg></span></a></p> <p class="text-3xl md:text-4xl mt-12 drop-shadow-lg text-[#333] px-4">Sync with any
		<span class="font-bold text-[#005cc4] fill-[#458cdd] rounded-full inline-flex items-center">cloud

			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg></span>
		provider or on a
		<span class="font-bold text-[#068000] fill-[#068000AA] rounded-full inline-flex items-center">USB drive
			<svg class="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M641.5 256c0 3.1-1.7 6.1-4.5 7.5L547.9 317c-1.4.8-2.8 1.4-4.5 1.4-1.4 0-3.1-.3-4.5-1.1-2.8-1.7-4.5-4.5-4.5-7.8v-35.6H295.7c25.3 39.6 40.5 106.9 69.6 106.9H392V354c0-5 3.9-8.9 8.9-8.9H490c5 0 8.9 3.9 8.9 8.9v89.1c0 5-3.9 8.9-8.9 8.9h-89.1c-5 0-8.9-3.9-8.9-8.9v-26.7h-26.7c-75.4 0-81.1-142.5-124.7-142.5H140.3c-8.1 30.6-35.9 53.5-69 53.5C32 327.3 0 295.3 0 256s32-71.3 71.3-71.3c33.1 0 61 22.8 69 53.5 39.1 0 43.9 9.5 74.6-60.4C255 88.7 273 95.7 323.8 95.7c7.5-20.9 27-35.6 50.4-35.6 29.5 0 53.5 23.9 53.5 53.5s-23.9 53.5-53.5 53.5c-23.4 0-42.9-14.8-50.4-35.6H294c-29.1 0-44.3 67.4-69.6 106.9h310.1v-35.6c0-3.3 1.7-6.1 4.5-7.8 2.8-1.7 6.4-1.4 8.9.3l89.1 53.5c2.8 1.1 4.5 4.1 4.5 7.2z"></path></svg> </span>. They are just files!</p>`,j,G,U,q,K,O,Y,J,N,_,ee='<div class="px-4"><img src="/file-screenshot.png" alt="PhotoFolder logo" class="m-auto w-[900px]"/></div> <div class="pb-5"><h2 class="text-5xl drop-shadow-lg px-4 font-bold text-[#333]">Just files</h2> <p class="text-2xl text-[#444] px-4 mt-5">Browse your files</p></div>',W,g,le='<div class=""><h2 class="text-5xl drop-shadow-lg px-4 font-bold text-[#333]">Calendar view</h2> <p class="text-2xl text-[#444] px-4 mt-5">Same as on your phone</p></div> <div class="px-4"><img src="/calendar-screenshot.png" alt="PhotoFolder logo" class="m-auto w-[1200px]"/></div>',Q,X,Z,$,tt,et,lt,B,se='<div class="px-4"><img src="/map-screenshot.png" alt="PhotoFolder logo" class="m-auto w-[900px]"/></div> <div class="pb-5"><h2 class="text-5xl drop-shadow-lg px-4 font-bold text-[#333]">Map view</h2> <p class="text-2xl text-[#444] px-4 mt-5">Search geographically</p></div>',st,rt,ct,it,at,xt,pt,M,re='<div class=""><h2 class="text-5xl drop-shadow-lg px-4 font-bold text-[#333]">Face detection</h2> <p class="text-2xl text-[#444] px-4 mt-5">Auto-detects faces</p></div> <div class="px-4 max-w-2xl"><img src="/faces-screenshot.png" alt="PhotoFolder logo" class="m-auto w-[500px]"/></div>',dt,ot,mt,nt,vt,ft,ut,bt,wt,ht,_t,gt,Bt,d,u,qt,Kt,Ot,Yt,Jt,Nt,b,Wt,Mt,Ct,Ht,Vt,Rt,C,ce=`<p class="text-4xl mt-12 drop-shadow-lg text-[#333] px-4">Of course we are <span class="font-bold">open source</span>,
		<a class="underline" href="https://github.com/PhotoFolder/app" target="_blank">star us on Github
		</a>⭐️</p>`,Lt,zt,At,y,ie;return{c(){m=r("div"),n=r("div"),L=r("h1"),L.textContent=Xt,Et=i(),z=r("p"),z.innerHTML=Zt,kt=i(),o=r("div"),v=r("a"),St=yt("Get Started"),Pt=i(),It=r("br"),Dt=i(),Ft=r("br"),jt=i(),f=r("a"),Gt=yt("See Video"),Ut=i(),A=r("div"),A.innerHTML=$t,E=i(),k=r("br"),S=i(),P=r("br"),I=i(),D=r("br"),F=i(),h=r("div"),h.innerHTML=te,j=i(),G=r("br"),U=i(),q=r("br"),K=i(),O=r("br"),Y=i(),J=r("br"),N=i(),_=r("div"),_.innerHTML=ee,W=i(),g=r("div"),g.innerHTML=le,Q=i(),X=r("br"),Z=i(),$=r("br"),tt=i(),et=r("br"),lt=i(),B=r("div"),B.innerHTML=se,st=i(),rt=r("br"),ct=i(),it=r("br"),at=i(),xt=r("br"),pt=i(),M=r("div"),M.innerHTML=re,dt=i(),ot=r("br"),mt=i(),nt=r("br"),vt=i(),ft=r("br"),ut=i(),bt=r("br"),wt=i(),ht=r("br"),_t=i(),gt=r("br"),Bt=i(),d=r("div"),u=r("a"),qt=yt("Get Started"),Kt=i(),Ot=r("br"),Yt=i(),Jt=r("br"),Nt=i(),b=r("a"),Wt=yt("See Video"),Mt=i(),Ct=r("br"),Ht=i(),Vt=r("br"),Rt=i(),C=r("div"),C.innerHTML=ce,Lt=i(),zt=r("br"),At=i(),y=r("img"),this.h()},l(t){m=c(t,"DIV",{class:!0});var l=R(m);n=c(l,"DIV",{class:!0});var T=R(n);L=c(T,"H1",{class:!0,"data-svelte-h":!0}),w(L)!=="svelte-gwc9sp"&&(L.textContent=Xt),Et=a(T),z=c(T,"P",{class:!0,"data-svelte-h":!0}),w(z)!=="svelte-16uk9f9"&&(z.innerHTML=Zt),kt=a(T),o=c(T,"DIV",{class:!0});var H=R(o);v=c(H,"A",{href:!0,target:!0,rel:!0,class:!0});var ae=R(v);St=Tt(ae,"Get Started"),ae.forEach(e),Pt=a(H),It=c(H,"BR",{}),Dt=a(H),Ft=c(H,"BR",{}),jt=a(H),f=c(H,"A",{href:!0,target:!0,rel:!0,class:!0});var xe=R(f);Gt=Tt(xe,"See Video"),xe.forEach(e),H.forEach(e),T.forEach(e),Ut=a(l),A=c(l,"DIV",{class:!0,"data-svelte-h":!0}),w(A)!=="svelte-f1kbi1"&&(A.innerHTML=$t),l.forEach(e),E=a(t),k=c(t,"BR",{}),S=a(t),P=c(t,"BR",{}),I=a(t),D=c(t,"BR",{}),F=a(t),h=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(h)!=="svelte-1ys9m9i"&&(h.innerHTML=te),j=a(t),G=c(t,"BR",{}),U=a(t),q=c(t,"BR",{}),K=a(t),O=c(t,"BR",{}),Y=a(t),J=c(t,"BR",{}),N=a(t),_=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(_)!=="svelte-zt7e0d"&&(_.innerHTML=ee),W=a(t),g=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(g)!=="svelte-evcdw"&&(g.innerHTML=le),Q=a(t),X=c(t,"BR",{}),Z=a(t),$=c(t,"BR",{}),tt=a(t),et=c(t,"BR",{}),lt=a(t),B=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(B)!=="svelte-fnbl5u"&&(B.innerHTML=se),st=a(t),rt=c(t,"BR",{}),ct=a(t),it=c(t,"BR",{}),at=a(t),xt=c(t,"BR",{}),pt=a(t),M=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(M)!=="svelte-1jitoys"&&(M.innerHTML=re),dt=a(t),ot=c(t,"BR",{}),mt=a(t),nt=c(t,"BR",{}),vt=a(t),ft=c(t,"BR",{}),ut=a(t),bt=c(t,"BR",{}),wt=a(t),ht=c(t,"BR",{}),_t=a(t),gt=c(t,"BR",{}),Bt=a(t),d=c(t,"DIV",{class:!0});var V=R(d);u=c(V,"A",{href:!0,target:!0,rel:!0,class:!0});var pe=R(u);qt=Tt(pe,"Get Started"),pe.forEach(e),Kt=a(V),Ot=c(V,"BR",{}),Yt=a(V),Jt=c(V,"BR",{}),Nt=a(V),b=c(V,"A",{href:!0,target:!0,rel:!0,class:!0});var de=R(b);Wt=Tt(de,"See Video"),de.forEach(e),V.forEach(e),Mt=a(t),Ct=c(t,"BR",{}),Ht=a(t),Vt=c(t,"BR",{}),Rt=a(t),C=c(t,"DIV",{class:!0,"data-svelte-h":!0}),w(C)!=="svelte-1vmp3ck"&&(C.innerHTML=ce),Lt=a(t),zt=c(t,"BR",{}),At=a(t),y=c(t,"IMG",{src:!0,alt:!0}),this.h()},h(){x(L,"class","text-5xl drop-shadow-lg mt-6 md:mt-16 px-4 font-bold text-[#333]"),x(z,"class","text-2xl text-[#444] px-4 mt-5"),x(v,"href",oe),x(v,"target","_blank"),x(v,"rel","noopener noreferrer"),x(v,"class","bg-[#313131] text-[#f3f3ec] p-2 px-3 rounded-xl text-2xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"),x(f,"href",me),x(f,"target","_blank"),x(f,"rel","noopener noreferrer"),x(f,"class","bg-white border-2 border-[#1489EC] border-dashed p-2 px-3 rounded-xl text-xl items-center text-[#1489EC]"),x(o,"class","pl-4 mt-8 md:mt-12"),x(n,"class","md:mt-10 max-w-xl"),x(A,"class","px-4 -md:-mr-16"),x(m,"class","flex flex-col-reverse md:flex-row max-w-6xl mt-5 m-auto justify-center"),x(h,"class","max-w-3xl my-16 m-auto text-center leading-10"),x(_,"class","flex flex-col-reverse md:flex-row max-w-4xl mt-5 m-auto justify-center items-center"),x(g,"class","flex flex-col md:flex-row max-w-4xl mt-5 m-auto justify-center items-center"),x(B,"class","flex flex-col-reverse md:flex-row max-w-4xl mt-5 m-auto justify-center items-center"),x(M,"class","flex flex-col md:flex-row max-w-4xl mt-5 m-auto justify-center items-center"),x(u,"href",oe),x(u,"target","_blank"),x(u,"rel","noopener noreferrer"),x(u,"class","bg-[#313131] text-[#f3f3ec] p-2 px-3 rounded-xl text-3xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"),x(b,"href",me),x(b,"target","_blank"),x(b,"rel","noopener noreferrer"),x(b,"class","bg-white border-2 border-[#1489EC] border-dashed p-2 px-3 rounded-xl text-xl items-center text-[#1489EC]"),x(d,"class","m-auto text-center"),x(C,"class","max-w-3xl -mt-5 m-auto text-center leading-10"),fe(y.src,ie="/bottom-images.webp")||x(y,"src",ie),x(y,"alt","images stack")},m(t,l){s(t,m,l),p(m,n),p(n,L),p(n,Et),p(n,z),p(n,kt),p(n,o),p(o,v),p(v,St),p(o,Pt),p(o,It),p(o,Dt),p(o,Ft),p(o,jt),p(o,f),p(f,Gt),p(m,Ut),p(m,A),s(t,E,l),s(t,k,l),s(t,S,l),s(t,P,l),s(t,I,l),s(t,D,l),s(t,F,l),s(t,h,l),s(t,j,l),s(t,G,l),s(t,U,l),s(t,q,l),s(t,K,l),s(t,O,l),s(t,Y,l),s(t,J,l),s(t,N,l),s(t,_,l),s(t,W,l),s(t,g,l),s(t,Q,l),s(t,X,l),s(t,Z,l),s(t,$,l),s(t,tt,l),s(t,et,l),s(t,lt,l),s(t,B,l),s(t,st,l),s(t,rt,l),s(t,ct,l),s(t,it,l),s(t,at,l),s(t,xt,l),s(t,pt,l),s(t,M,l),s(t,dt,l),s(t,ot,l),s(t,mt,l),s(t,nt,l),s(t,vt,l),s(t,ft,l),s(t,ut,l),s(t,bt,l),s(t,wt,l),s(t,ht,l),s(t,_t,l),s(t,gt,l),s(t,Bt,l),s(t,d,l),p(d,u),p(u,qt),p(d,Kt),p(d,Ot),p(d,Yt),p(d,Jt),p(d,Nt),p(d,b),p(b,Wt),s(t,Mt,l),s(t,Ct,l),s(t,Ht,l),s(t,Vt,l),s(t,Rt,l),s(t,C,l),s(t,Lt,l),s(t,zt,l),s(t,At,l),s(t,y,l)},p:Qt,i:Qt,o:Qt,d(t){t&&(e(m),e(E),e(k),e(S),e(P),e(I),e(D),e(F),e(h),e(j),e(G),e(U),e(q),e(K),e(O),e(Y),e(J),e(N),e(_),e(W),e(g),e(Q),e(X),e(Z),e($),e(tt),e(et),e(lt),e(B),e(st),e(rt),e(ct),e(it),e(at),e(xt),e(pt),e(M),e(dt),e(ot),e(mt),e(nt),e(vt),e(ft),e(ut),e(bt),e(wt),e(ht),e(_t),e(gt),e(Bt),e(d),e(Mt),e(Ct),e(Ht),e(Vt),e(Rt),e(C),e(Lt),e(zt),e(At),e(y))}}}const oe="https://forms.gle/UPmNKp9FncKYnvcW7",me="https://youtu.be/5VEm7qhPo2M";class ge extends ue{constructor(m){super(),be(this,m,null,we,ve,{})}}export{ge as component};
