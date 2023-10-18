'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/image/0-02-0b-eb788c12.jpg": "58e26dfa88e1709ff4d85e47eccab4d1",
"assets/asset/image/adjustment%2520(2).png": "be8f4f6a1a4dfb293fe1ce64374281b2",
"assets/asset/image/ARTCL-HRO-future-of-real-estate.webp": "a1fd0cb7df6a052aef69237d122e0a8d",
"assets/asset/image/building%2520(1).png": "eb6fd8ab6c9f2f670c28af852eb944b8",
"assets/asset/image/filter%2520(8).png": "845e5623ff34afa51e1eaa1868e4fc02",
"assets/asset/image/house%2520(1).png": "9ae7ef86bbc0ba00534233c1fec7209a",
"assets/asset/image/land.png": "a849877ee105ff8df507c7218d329d5a",
"assets/asset/image/location-pin%2520(1).png": "5f0ec0b09278ad8ef5f90c90a1c340ad",
"assets/asset/image/Screenshot%2520(3).png": "aca3c04e016775ca5a170be1c03edb39",
"assets/asset/image/Screenshot%2520(5).png": "76d3994f8246d1d7a4fed547d3e182c5",
"assets/asset/image/Screenshot%2520(6).png": "9670c30a6aa42a1127500a36d8eb9c39",
"assets/asset/image/Screenshot%2520(7).png": "30d3ea18f57e7cfe6d070ba869ee2f32",
"assets/asset/image/screenshot.png": "8de2715bbc4d1645787027bc71fb499f",
"assets/asset/image/search%2520(3).png": "cabcf3f2927d024be2c470874031db32",
"assets/asset/image/sort%2520(6).png": "fee0b25a9102fea4feb4087ab5d3d615",
"assets/asset%255Cimage%255C0-02-0b-eb788c12.jpg": "58e26dfa88e1709ff4d85e47eccab4d1",
"assets/asset%255Cimage%255Cadjustment%2520(2).png": "be8f4f6a1a4dfb293fe1ce64374281b2",
"assets/asset%255Cimage%255CARTCL-HRO-future-of-real-estate.webp": "a1fd0cb7df6a052aef69237d122e0a8d",
"assets/asset%255Cimage%255Cbuilding%2520(1).png": "eb6fd8ab6c9f2f670c28af852eb944b8",
"assets/asset%255Cimage%255Cfilter%2520(8).png": "845e5623ff34afa51e1eaa1868e4fc02",
"assets/asset%255Cimage%255Chouse%2520(1).png": "9ae7ef86bbc0ba00534233c1fec7209a",
"assets/asset%255Cimage%255Cland.png": "a849877ee105ff8df507c7218d329d5a",
"assets/asset%255Cimage%255Clocation-pin%2520(1).png": "5f0ec0b09278ad8ef5f90c90a1c340ad",
"assets/asset%255Cimage%255CScreenshot%2520(3).png": "aca3c04e016775ca5a170be1c03edb39",
"assets/asset%255Cimage%255CScreenshot%2520(5).png": "76d3994f8246d1d7a4fed547d3e182c5",
"assets/asset%255Cimage%255CScreenshot%2520(6).png": "9670c30a6aa42a1127500a36d8eb9c39",
"assets/asset%255Cimage%255CScreenshot%2520(7).png": "30d3ea18f57e7cfe6d070ba869ee2f32",
"assets/asset%255Cimage%255Cscreenshot.png": "8de2715bbc4d1645787027bc71fb499f",
"assets/asset%255Cimage%255Csearch%2520(3).png": "cabcf3f2927d024be2c470874031db32",
"assets/asset%255Cimage%255Csort%2520(6).png": "fee0b25a9102fea4feb4087ab5d3d615",
"assets/AssetManifest.bin": "3fc3a89fd9204e970eef36d25d5eafc4",
"assets/AssetManifest.json": "536a2ccd1b82cdcf987b8cc85985215f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "68c4884914cf2941d9e5023607482392",
"assets/NOTICES": "b9c109b679367b33db0e80c4e0f86e55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "f93cce574798cbc3f46e44765b523058",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "addd330d70d04918ab2059efeba5105f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "c3803dbb1ac015d00c055bea11adb934",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b82b59430415bfc647af42e9312153b8",
"/": "b82b59430415bfc647af42e9312153b8",
"main.dart.js": "bb98ad5f9f9c651c8224feb3253dfb62",
"manifest.json": "5e3b475ab4dcaa3d878ddf94a08637ab",
"version.json": "14689480bb7eddbc3a4acecf615dac29"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
