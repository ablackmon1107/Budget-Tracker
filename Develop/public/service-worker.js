const FILES_TO_CACHE = [
    "/", 
    "/index.html", 
    "/index.js", 
    "/styles.css", 
    "/icons/icon-144x144.png",
    "/icons/icon-192x192.png", 
    "/icons/icon-512x512.png"
  ];


  self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME)).then(cache=>{
            console.log("Your files were pre-cached successfully!");
    .then (cache => cache.addAll(FILES_TO_CACHE))
    .then(self.skipWaiting())
    });
});
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  .then(()=>self.clients.claim());
});
