const staticfile = 'dp-site-v1';
const assets = [
	'./',
	'./index.html',
	'./style.css',
	'./refact.js',
	'./audio/sad.mp3',
	'./clap.mp3',
	'./manifest.json',
	'./font/ubuntu.ttf',
	'./sw.js',
];

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker
			.register('sw.js')
			.then((res) => console.log('service worker registered'))
			.catch((err) => console.log('service worker not registered', err));
	});
}

self.addEventListener('install', (installEvent) => {
	console.log("installing")
  self.skipWaiting();
	installEvent.waitUntil(
		caches.open(staticfile).then((cache) => {
			cache.addAll(assets)
			console.log('we tired caching');
		}).catch((error) => {
			console.log("could not cache because", error)
		}).then( console.log("we cached succsefully"))
	);
});

self.addEventListener('fetch', (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});

