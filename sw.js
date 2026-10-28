const APP_ID = "gestrum";
const VERSION = "v00000-009";
const CACHE = APP_ID + "-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./icon.svg",
  "./logo.png",
  "./work-cleanstep.png",
  "./work-aline.png"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))
    )
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith(APP_ID + "-") && k !== CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;

  // Network-First for HTML navigation / document requests so updates appear immediately
  if (e.request.mode === "navigate" || e.request.destination === "document" || e.request.url.endsWith(".html") || e.request.url.endsWith("/")) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Stale-while-revalidate for static assets
  e.respondWith(
    caches.match(e.request).then(hit => {
      const fetchPromise = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => hit);
      return hit || fetchPromise;
    })
  );
});
