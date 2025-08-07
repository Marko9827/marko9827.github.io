
window.CDN_URL = "cdn.markonikolic98.com";

const  echat_v = "p-e-4104-38",
assets = [
`https://${window.CDN_URL}/node_modules/video.js/dist/video-js.min.css`,
`https://${window.CDN_URL}/node_modules/bootstrap-icons/font/bootstrap-icons.css`,
`https://${window.CDN_URL}/portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css`,
`https://${window.CDN_URL}/node_modules/@fortawesome/fontawesome-free/css/all.min.css`,
`https://${window.CDN_URL}/node_modules/codemirror/lib/codemirror.js`,
`https://code.jquery.com/jquery-1.12.4.min.js`,
"/manifest.webmanifest",
"/mainss",
"/main",
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