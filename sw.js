const staticfile = "dp-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/index.js",
  "DP/font/ubuntu.ttf",
  "DP/image/192.png",
  "DP/image/512.png",
  "DP/audio/sad.mp3",
  "DP/audio/clap.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticfile).then(cache => {
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
        .register("DP/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }