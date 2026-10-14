// Service worker do app instalado.
// Página: rede primeiro (sempre pega a versão nova quando há internet); sem internet, usa a última salva.
// Bibliotecas e ícones: cache primeiro. Ao trocar uma biblioteca ou ícone, mude VERSAO para renovar o cache.
const VERSAO = 'mapa-trilhos-v1';
const ARQUIVOS = ['./', 'manifest.webmanifest', 'vendor/xlsx.full.min.js', 'vendor/exceljs.min.js', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate'){
    e.respondWith(fetch(req).then(res => {
      if (res.ok){ const copia = res.clone(); caches.open(VERSAO).then(c => c.put('./', copia)); }
      return res;
    }).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok){ const copia = res.clone(); caches.open(VERSAO).then(c => c.put(req, copia)); }
    return res;
  })));
});
