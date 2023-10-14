const staticfile = "dp-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/refact.js",
  "/audio/sad.mp3",
  "/audio/clap.mp3"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticfile).then(cache => {
      cache.addAll(assets);
      console.log('we tired caching')
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
