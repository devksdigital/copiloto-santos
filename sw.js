/* GERADO por make_voz2.mjs a partir de sw.template.js — a versão muda sozinha quando qualquer arquivo muda */
const C="copiloto-santos-v-65a5124852";
const MAPA='copiloto-santos-mapa-v2';   /* mapa vetorial OpenFreeMap: estilo, fontes, ícones e blocos */
const MAX_MAPA=12000;
const PRE=["./","./index.html","./dados.js","./voz.js","./leaflet.js","./leaflet.css","./maplibre-gl.js","./maplibre-gl.css","./leaflet-maplibre-gl.js","./manifest.json","./icon.svg","./icon-180.png","./avisos.json","./voz/007c6934.mp3","./voz/00f0342b.mp3","./voz/02a6e21a.mp3","./voz/03cc2cb0.mp3","./voz/03da151f.mp3","./voz/05849fe6.mp3","./voz/06cc1e5e.mp3","./voz/085e24bc.mp3","./voz/093c9818.mp3","./voz/09508909.mp3","./voz/0aa36841.mp3","./voz/0c5c0a48.mp3","./voz/0cbd79d0.mp3","./voz/0e021ea1.mp3","./voz/0e2338e5.mp3","./voz/0f2fb721.mp3","./voz/0fa0515e.mp3","./voz/0fc23dbe.mp3","./voz/0fc69b4c.mp3","./voz/10775adf.mp3","./voz/11edd9d8.mp3","./voz/12639a8c.mp3","./voz/127f5bab.mp3","./voz/1b546c6d.mp3","./voz/1be72d1e.mp3","./voz/1c3e4c2c.mp3","./voz/1c435628.mp3","./voz/1d9c3410.mp3","./voz/1e814c32.mp3","./voz/1e924ec1.mp3","./voz/1ea1065c.mp3","./voz/2375aa73.mp3","./voz/24c09d47.mp3","./voz/25e05902.mp3","./voz/262f06cb.mp3","./voz/283a3473.mp3","./voz/29068311.mp3","./voz/29922aef.mp3","./voz/2cb1117c.mp3","./voz/2d7c9c3a.mp3","./voz/2e1ee0e7.mp3","./voz/2f378807.mp3","./voz/336cb5dd.mp3","./voz/3518cbff.mp3","./voz/37a3efd3.mp3","./voz/392bee49.mp3","./voz/3c0867d2.mp3","./voz/3d825215.mp3","./voz/3feeffa5.mp3","./voz/42f977bb.mp3","./voz/43bc0430.mp3","./voz/4756b7a0.mp3","./voz/478bfae0.mp3","./voz/49252881.mp3","./voz/4b4fa39b.mp3","./voz/4bb7cf4c.mp3","./voz/4ee56349.mp3","./voz/4f93b43a.mp3","./voz/526bebe8.mp3","./voz/52f09714.mp3","./voz/541a1174.mp3","./voz/5461afdb.mp3","./voz/54eb159c.mp3","./voz/55c905d4.mp3","./voz/56a31207.mp3","./voz/59f4c61c.mp3","./voz/5a411f58.mp3","./voz/5c9d04ab.mp3","./voz/5cd0802f.mp3","./voz/5cea0df1.mp3","./voz/5d20cd28.mp3","./voz/5e4b60c8.mp3","./voz/5ecf887b.mp3","./voz/5f525269.mp3","./voz/616fbe20.mp3","./voz/633b71af.mp3","./voz/64c6a3fc.mp3","./voz/66090970.mp3","./voz/667de9cf.mp3","./voz/67f10bd5.mp3","./voz/6896f693.mp3","./voz/6a76fd02.mp3","./voz/6b7cf330.mp3","./voz/6bd37b80.mp3","./voz/6cb2073d.mp3","./voz/6cc5517d.mp3","./voz/6ccc4d34.mp3","./voz/6f07830e.mp3","./voz/7129174a.mp3","./voz/718af9ad.mp3","./voz/72863c16.mp3","./voz/740afdba.mp3","./voz/7991681a.mp3","./voz/7ab1ee4b.mp3","./voz/7bc9df21.mp3","./voz/7bf725fa.mp3","./voz/7c7473ab.mp3","./voz/7d1a540a.mp3","./voz/7dee5951.mp3","./voz/7ea39b5a.mp3","./voz/800cabea.mp3","./voz/82757b90.mp3","./voz/82d9d278.mp3","./voz/8490bd0f.mp3","./voz/861051d1.mp3","./voz/8692a990.mp3","./voz/8a009005.mp3","./voz/8a9fd5be.mp3","./voz/8c47de74.mp3","./voz/8ccaf723.mp3","./voz/917c9317.mp3","./voz/933493ff.mp3","./voz/971daf22.mp3","./voz/993d5b8a.mp3","./voz/9a1232ad.mp3","./voz/9accfe3a.mp3","./voz/9fef440d.mp3","./voz/a05c2571.mp3","./voz/a10ce593.mp3","./voz/a4881c23.mp3","./voz/a5637655.mp3","./voz/a7f8ffc8.mp3","./voz/ab21038b.mp3","./voz/abf6e035.mp3","./voz/acc891f5.mp3","./voz/aeb63faf.mp3","./voz/af6cc16b.mp3","./voz/b07beede.mp3","./voz/b0d93826.mp3","./voz/b49e7329.mp3","./voz/b508c43f.mp3","./voz/b615f549.mp3","./voz/b657cae5.mp3","./voz/b6644283.mp3","./voz/b8013661.mp3","./voz/b82044e3.mp3","./voz/b82aebb8.mp3","./voz/b90871a3.mp3","./voz/b9761b38.mp3","./voz/be4e22ce.mp3","./voz/be701296.mp3","./voz/be80c444.mp3","./voz/bfe18259.mp3","./voz/c00d7186.mp3","./voz/c23b4661.mp3","./voz/c2a3b112.mp3","./voz/c2d7b1df.mp3","./voz/c3bebb8a.mp3","./voz/c3e2c5d3.mp3","./voz/c4088051.mp3","./voz/c614ffc5.mp3","./voz/c87bc21d.mp3","./voz/c9d4a196.mp3","./voz/ca02670e.mp3","./voz/ca6c25a7.mp3","./voz/cb9e383e.mp3","./voz/cec87787.mp3","./voz/cf466356.mp3","./voz/d003033f.mp3","./voz/d06d99e7.mp3","./voz/d0760566.mp3","./voz/d080288d.mp3","./voz/d11c7f45.mp3","./voz/d5b63333.mp3","./voz/d9e39500.mp3","./voz/dbaa718f.mp3","./voz/dc253cfc.mp3","./voz/dc85946d.mp3","./voz/e28d7c58.mp3","./voz/e2d4bf32.mp3","./voz/e2fc2b6f.mp3","./voz/e3d1bab6.mp3","./voz/e45e8085.mp3","./voz/e4f94eb2.mp3","./voz/e5a6e6f9.mp3","./voz/e619c7b3.mp3","./voz/e816b7c3.mp3","./voz/e8676335.mp3","./voz/eae85308.mp3","./voz/eafa9257.mp3","./voz/eec32834.mp3","./voz/f1cb7201.mp3","./voz/f28f4cb3.mp3","./voz/f84dfc07.mp3","./voz/fac47186.mp3","./voz/fb7915c4.mp3","./voz/fb84d2ab.mp3","./voz/fcbbd0e6.mp3","./voz/fd05c05b.mp3","./voz/fd54ea91.mp3","./voz/fe391881.mp3"];

async function baixaUm(c, u){
  for(let t=0;t<3;t++){
    try{
      const ctl=new AbortController(); const tm=setTimeout(()=>ctl.abort(),20000);
      const r=await fetch(new Request(u,{cache:'reload'}),{signal:ctl.signal}); clearTimeout(tm);
      if(r.ok && !r.redirected){ await c.put(u, r); return true; }
    }catch(err){}
    await new Promise(ok=>setTimeout(ok, 700*(t+1)));
  }
  return false;
}
self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(C);
    /* baixa tudo, 8 de cada vez; cada arquivo tenta até 3x; se algum falhar, a instalação falha e fica a versão anterior íntegra */
    for(let i=0;i<PRE.length;i+=8){
      const ok=await Promise.all(PRE.slice(i,i+8).map(u=>baixaUm(c,u)));
      if(ok.includes(false)) throw new Error('pre-cache falhou');
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',e=>{
  /* só apaga caches ANTIGOS DO PRÓPRIO copiloto de Santos (outros apps do mesmo domínio ficam intactos) */
  e.waitUntil(caches.keys()
    .then(ks=>Promise.all(ks.filter(k=>k.startsWith('copiloto-santos-') && k!==C && k!==MAPA).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
/* autocura: se algo apagou arquivos do cache (outro app, limpeza do sistema), a página pede para repor */
self.addEventListener('message',e=>{
  if(e.data!=='repor') return;
  e.waitUntil((async()=>{
    const c=await caches.open(C);
    for(const u of PRE){ if(!(await c.match(u,{ignoreSearch:true}))) await baixaUm(c,u); }
  })());
});

/* resposta boa = 200 da própria origem, sem redirecionamento (portal de Wi-Fi de posto não vira o app) */
const boa=r=>r && r.ok && r.type==='basic' && !r.redirected;

let podando=false;
async function podaMapa(){
  if(podando) return; podando=true;
  try{ const c=await caches.open(MAPA); const ks=await c.keys();
    if(ks.length>MAX_MAPA){ for(const k of ks.slice(0, ks.length-MAX_MAPA)) await c.delete(k); } }catch(e){}
  podando=false;
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  /* mapa vetorial: cache primeiro (funciona sem internet depois do download, ou onde já passou) */
  if(url.hostname==='tiles.openfreemap.org'){
    e.respondWith(caches.open(MAPA).then(c=>c.match(req,{ignoreVary:true}).then(hit=>hit||fetch(req).then(n=>{
      if(n && n.ok){ c.put(req,n.clone()).then(podaMapa).catch(()=>{}); }
      return n;
    }))));
    return;
  }
  if(url.origin!==self.location.origin) return; /* previsão do tempo, ruas OSM de reserva etc.: rede normal */

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
    }).catch(()=> req.mode==='navigate' ? c.match('./index.html').then(r=>r||Response.error()) : Response.error())))
  );
});
