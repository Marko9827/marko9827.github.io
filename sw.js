
var echat_v = "p-e-4104-35";
var assets = [
/*
    "/?mnps=welcomer-pl",
    "/svc=aet",
    "/favicon.svg",
    "/manifest.webmanifest"
*/
"/"
];


self.addEventListener("install", async event => {
    const cache = await caches.open(echat_v);
    cache.addAll(assets);
});

self.addEventListener("fetch", event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }

});


self.addEventListener('push', event => {
    console.log('Push message', event);
   
    //  event.waitUntl(fetch())

}); 

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open("dynamic-content");
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (err) {
        const cachedResponse = await cache.match(req);
        return cachedResponse || caches.match("./fallback.json");
    }
}

 