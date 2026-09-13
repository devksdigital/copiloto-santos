/* GERADO por make_voz.mjs a partir de sw.template.js — a versão muda sozinha quando qualquer arquivo muda */
const C="copiloto-santos-v-2c104deba4";
const TILES='copiloto-santos-tiles-v1';
const MAX_TILES=6000;
const PRE=["./","./index.html","./dados.js","./voz.js","./leaflet.js","./leaflet.css","./manifest.json","./icon.svg","./avisos.json","./voz/37a3efd3.mp3","./voz/a7f8ffc8.mp3","./voz/4b4fa39b.mp3","./voz/cf466356.mp3","./voz/42f977bb.mp3","./voz/dc253cfc.mp3","./voz/a10ce593.mp3","./voz/971daf22.mp3","./voz/b82044e3.mp3","./voz/55c905d4.mp3","./voz/2f378807.mp3","./voz/b6c26892.mp3","./voz/e54181fd.mp3","./voz/3be454b5.mp3","./voz/51d81a81.mp3","./voz/478bfae0.mp3","./voz/4c8f6ed9.mp3","./voz/49252881.mp3","./voz/6b7cf330.mp3","./voz/6cc5517d.mp3","./voz/e45e8085.mp3","./voz/e28d7c58.mp3","./voz/57ffb16b.mp3","./voz/dd8c9bda.mp3","./voz/6cb2073d.mp3","./voz/05849fe6.mp3","./voz/2cb1117c.mp3","./voz/3518cbff.mp3","./voz/1c435628.mp3","./voz/fb84d2ab.mp3","./voz/d9715aba.mp3","./voz/a5637655.mp3","./voz/5a411f58.mp3","./voz/0cbd79d0.mp3","./voz/7c7473ab.mp3","./voz/6a76fd02.mp3","./voz/d003033f.mp3","./voz/e2d4bf32.mp3","./voz/d9e39500.mp3","./voz/cec87787.mp3","./voz/093c9818.mp3","./voz/e4f94eb2.mp3","./voz/29068311.mp3","./voz/993d5b8a.mp3","./voz/94973462.mp3","./voz/0f63f28c.mp3","./voz/8b387635.mp3","./voz/4d7ac000.mp3","./voz/c2d7b1df.mp3","./voz/7ea39b5a.mp3","./voz/283a3473.mp3","./voz/f84dfc07.mp3","./voz/82757b90.mp3","./voz/dbaa718f.mp3","./voz/c2a3b112.mp3","./voz/861051d1.mp3","./voz/b657cae5.mp3","./voz/acc891f5.mp3","./voz/64c6a3fc.mp3","./voz/b8013661.mp3","./voz/1c3e4c2c.mp3","./voz/d06d99e7.mp3","./voz/abf6e035.mp3","./voz/56a31207.mp3","./voz/8c47de74.mp3","./voz/59f4c61c.mp3","./voz/336cb5dd.mp3","./voz/be4e22ce.mp3","./voz/a05c2571.mp3","./voz/b81cc083.mp3","./voz/06cc1e5e.mp3","./voz/4bb7cf4c.mp3","./voz/52f09714.mp3","./voz/4428ab3e.mp3","./voz/6ccc4d34.mp3","./voz/bfe18259.mp3","./voz/ec368187.mp3","./voz/0fc23dbe.mp3","./voz/f34a7955.mp3","./voz/c3e2c5d3.mp3","./voz/0aa36841.mp3","./voz/54eb159c.mp3","./voz/67f10bd5.mp3","./voz/1345a144.mp3","./voz/39107a3f.mp3","./voz/65c4fc04.mp3","./voz/1be72d1e.mp3","./voz/1e924ec1.mp3","./voz/d080288d.mp3","./voz/3feeffa5.mp3","./voz/0c5c0a48.mp3","./voz/0f2fb721.mp3","./voz/b07beede.mp3","./voz/9fef440d.mp3","./voz/c3bebb8a.mp3","./voz/e9825985.mp3","./voz/6896f693.mp3","./voz/7bc9df21.mp3","./voz/fac47186.mp3","./voz/3d143981.mp3","./voz/bf1fef1d.mp3","./voz/c1bdd53a.mp3","./voz/49b5f792.mp3","./voz/b615f549.mp3","./voz/ca6c25a7.mp3","./voz/10775adf.mp3","./voz/7bf725fa.mp3","./voz/25e05902.mp3","./voz/c4088051.mp3","./voz/5cd0802f.mp3","./voz/7ab1ee4b.mp3","./voz/3c0867d2.mp3","./voz/e619c7b3.mp3","./voz/b0d93826.mp3","./voz/d11c7f45.mp3","./voz/b82aebb8.mp3","./voz/b508c43f.mp3","./voz/8490bd0f.mp3","./voz/1b546c6d.mp3"];

self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(C);
    /* baixa tudo; se algum arquivo falhar, tenta de novo 2x antes de desistir da instalação */
    for(const u of PRE){
      let ok=false;
      for(let t=0;t<3&&!ok;t++){
        try{ const r=await fetch(new Request(u,{cache:'reload'})); if(r.ok && !r.redirected){ await c.put(u, r); ok=true; } }catch(err){}
      }
      if(!ok) throw new Error('pre-cache falhou: '+u);
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(ks=>Promise.all(ks.filter(k=>k!==C&&k!==TILES).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});

/* resposta boa = 200 da própria origem, sem redirecionamento (portal de Wi-Fi de posto não vira o app) */
const boa=r=>r && r.ok && r.type==='basic' && !r.redirected;
/* blocos do mapa: a chave ignora o subdomínio a/b/c/d, então o mapa baixado serve para qualquer um */
const chaveTile=url=>'https://tiles.copiloto/'+url.pathname.replace(/^\/+/,'');

let podando=false;
async function podaTiles(){
  if(podando) return; podando=true;
  try{ const c=await caches.open(TILES); const ks=await c.keys();
    if(ks.length>MAX_TILES){ for(const k of ks.slice(0, ks.length-MAX_TILES)) await c.delete(k); } }catch(e){}
  podando=false;
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  if(/(^|\.)basemaps\.cartocdn\.com$/.test(url.hostname)){
    const k=chaveTile(url);
    e.respondWith(caches.open(TILES).then(c=>c.match(k).then(hit=>hit||fetch(req).then(n=>{
      if(n && (n.ok||n.type==='opaque')){ c.put(k,n.clone()).then(podaTiles).catch(()=>{}); }
      return n;
    }))));
    return;
  }
  if(url.origin!==self.location.origin) return; /* previsão do tempo etc.: rede normal */

  if(/\/avisos\.json$/.test(url.pathname)){
    e.respondWith((async()=>{
      const cache=await caches.open(C);
      try{
        const ctl=new AbortController(); const t=setTimeout(()=>ctl.abort(),5000);
        const n=await fetch(new Request('./avisos.json',{cache:'no-store'}),{signal:ctl.signal}); clearTimeout(t);
        if(boa(n)){ await cache.put('./avisos.json', n.clone()); return n; }
        throw new Error('ruim');
      }catch(err){
        const hit=await cache.match('./avisos.json');
        if(hit){ const corpo=await hit.text(); return new Response(corpo,{headers:{'Content-Type':'application/json','X-Copiloto-Offline':'1'}}); }
        return new Response('{"itens":[]}',{headers:{'Content-Type':'application/json','X-Copiloto-Offline':'1'}});
      }
    })());
    return;
  }

  /* áudio com Range (Safari/iOS pede pedaços): responde 206 a partir do cache */
  const range=req.headers.get('range');
  if(range && /\/voz\/[0-9a-f]{8}\.mp3$/.test(url.pathname)){
    e.respondWith((async()=>{
      const c=await caches.open(C); const hit=await c.match(req,{ignoreSearch:true});
      if(!hit) return fetch(req);
      const buf=await hit.arrayBuffer(); const m=/bytes=(\d*)-(\d*)/.exec(range)||[];
      let ini=m[1]?parseInt(m[1],10):0, fim=m[2]?parseInt(m[2],10):buf.byteLength-1;
      if(!m[1] && m[2]){ ini=Math.max(0,buf.byteLength-parseInt(m[2],10)); fim=buf.byteLength-1; }
      fim=Math.min(fim,buf.byteLength-1);
      return new Response(buf.slice(ini,fim+1),{status:206,headers:{'Content-Type':'audio/mpeg','Content-Range':'bytes '+ini+'-'+fim+'/'+buf.byteLength,'Content-Length':String(fim-ini+1),'Accept-Ranges':'bytes'}});
    })());
    return;
  }

  e.respondWith(
    caches.open(C).then(c=>c.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(n=>{
      if(boa(n)) c.put(req,n.clone()).catch(()=>{});
      return n;
    }).catch(()=> req.mode==='navigate' ? c.match('./index.html') : Response.error())))
  );
});
