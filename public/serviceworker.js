self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches.open("v1").then((cache) => {
            return cache.addAll([
                "/",
                "/manifest.json",
                "/images/icons/icon-192x192.png",
                "/images/icons/icon-512x512.png",
                // tambahkan resource lain yang ingin di-cache
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
