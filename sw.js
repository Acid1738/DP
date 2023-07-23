const staticfile = "dp-site-v1"
const assets = [
  "/",
  "https://acid1738.github.io/DP/index.html",
  "https://acid1738.github.io/DP/style.css",
  "https://acid1738.github.io/DP/index.js",
  "https://acid1738.github.io/DP/font/ubuntu.ttf",
  "https://acid1738.github.io/DP/image/192.png",
  "https://acid1738.github.io/DP/image/512.png",
  "https://acid1738.github.io/DP/audio/sad.mp3",
  "https://acid1738.github.io/DP/audio/clap.mp3"
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
        .register("https://acid1738.github.io/DP/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
