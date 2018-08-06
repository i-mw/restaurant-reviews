let resources = [
    '/',
    '/restaurant.html?id=1',
    '/restaurant.html?id=2',
    '/restaurant.html?id=3',
    '/restaurant.html?id=4',
    '/restaurant.html?id=5',
    '/restaurant.html?id=6',
    '/restaurant.html?id=7',
    '/restaurant.html?id=8',
    '/restaurant.html?id=9',
    '/restaurant.html?id=10',
    '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    '/js/main.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/data/restaurants.json',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant-reviews-v1').then(function (cache) {
            cache.addAll(resources);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response
            else {
                return fetch(event.request).then(function(response) {
                    return response;
                });
            }
        })
    );
})