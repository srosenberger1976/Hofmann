const CACHE_NAME = 'projektname-cache-v1'; // Bei Updates einfach die Version
erhoehen!
const ASSETS = [
'./',
'./index.html',
'./manifest.json'
];
self.addEventListener('install', (event) => {
event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});
self.addEventListener('fetch', (event) => {
event.respondWith(caches.match(event.request).then((res) => res ||
fetch(event.request)));
});
