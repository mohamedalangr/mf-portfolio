const CACHE_NAME = "mf-portfolio-v2";

self.addEventListener("install", (event) => {
  // Force the new service worker to take over immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches (like v1 which holds the bad index.html)
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // Network-first strategy: always fetch the latest version from the server.
  // If the server is offline, fallback to cache.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
