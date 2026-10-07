const CACHE_NAME = 'marfe-tree-v1';
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable.png',
    './icons/apple-touch-icon.png',
    './icons/favicon.png'
];

// Install Event: pre-cache core application shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate Event: clean up outdated caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Stale-While-Revalidate / Network-fallback caching
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // HTML Navigation requests: Network first with Cache fallback
    if (event.request.mode === 'navigate' || event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match('./index.html').then((cached) => cached || caches.match(event.request));
                })
        );
        return;
    }

    // Static assets & CDNs (Tailwind, Google Fonts, Icons)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // Ignore network failure when offline
                });

            return cachedResponse || fetchPromise;
        })
    );
});
