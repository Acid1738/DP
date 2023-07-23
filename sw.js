const staticfile = "dp-site-v1"
const assets = [
  "DP/index.html",
  "/style.css",
  "/index.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticfile).then(cache => {
      console.log("caching");
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("https://acid1738.github.io/DP/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
