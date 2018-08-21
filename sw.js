// наименование для нашего хранилища кэша
var CACHE_NAME = 'app_serviceworker_v_1';

// ссылки на кэшируемые файлы
var  cacheUrls = ['/'];

self.addEventListener('install', function (event) {
  // инсталляция
  console.log('Install');

  caches.open(CACHE_NAME).then(function (cache) {
    // загружаем в наш cache необходимые файлы
    return cache.addAll(cacheUrls);
  })
});

self.addEventListener('activate', function (event) {
  // активация
  console.log('Activate');
});


self.addEventListener('fetch', function (event) {
  console.log(event.request)
  event.respondWith(
    // ищем запрашиваемый ресурс в хранилище кэша
    caches.match(event.request).then(function (cachedResponse) {

      // выдаём кэш, если он есть
      if (cachedResponse) {
        return cachedResponse;
      }

      // иначе запрашиваем из сети как обычно
      return fetch(event.request);
    })
  );
});