'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa62a0f385fd246e09c15612da75b2b8",
"index.html": "c16f1ed58cc1b1b78c3819beefd32780",
"/": "c16f1ed58cc1b1b78c3819beefd32780",
"main.dart.js": "308a31fb2d75df40eee21a8be1dc5283",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b9f453ec4a7848f6674fb4e251327f4",
".git/config": "df39f4288ac44e8523a9a48244f0673a",
".git/objects/92/78e9c2178feb36572a5bc7e780bd997ea6fd35": "d94db29a05304fddde55d5492f4aedb0",
".git/objects/3b/598e879e3da204d6fd90bce0b875c5d9cd6566": "0b7aaff01ae9b6177ee8d5d549ddc2a7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/67/35242b0c0f9b0cd4e00c5798bee27e67c951f1": "de9ffb736b5a812337fdcf6b0bbaa8f6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/ce78db19fe3c916fa44755d06977cb37d2eaf2": "077072500cbf10df3ae3b5d5e10ef308",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/90a2bf15dbd352c12351d01e49677a19fef8a2": "b65332cf25fe941a5e57279c2b201b02",
".git/objects/ac/f81d4dcf755f5f3897bb9ed51187f80e6ae1cc": "a25fae8816c3fd1aa2528ccb80e01177",
".git/objects/d0/142378a8986cfc51853c4e9683edffe1ea6f99": "e051288e5e28397181007ea284142eac",
".git/objects/da/ed1c3ef97de042a197cd3dfda89f75cf412f0c": "51f9b41164f2ef40f18cb9857ae9168d",
".git/objects/d6/17f3f02a3816d4ee3b7b78fc775d3bf50a3d3d": "0f03c4cf4cae12ac551e183599e6e775",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/f42a914b7bd7fe557ce6bd8741eac5f637ab18": "91ca5773bd4ae6c8075d61b61f69eadb",
".git/objects/4b/236ca740587d21668f28401063f3b8ac8cbafe": "de7ae00cbfdfe59204067cfab79052da",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/d4690b250258dbcae27561e5b7a813424b6a72": "8b888cc0b51e9c7b9e2fbfb1e551ab5b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/22a4fcff9bc4a26e5dd7cdc33f3157a7e1aaac": "ccf4c4d117e639d054b038466cfbd607",
".git/objects/8f/300d3f9060ad3f5787dcccfcddde6a0a7ba89f": "20a746bbe19b22d6dd67cc92f5ded61f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/0a30ccd0d029b4fdf2ca54bf18e6a7c3598897": "8f42a92a6f27f294a69496a7afc3115e",
".git/objects/21/223fb002b85f14145ce5973a4cb06258200e64": "b07294302d37654da2c9da9f6ab22718",
".git/objects/88/ff637a49f93de12ad5edfde5845a28a7ed30ac": "f57b4ee86133054140da125d26b98eb4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/0325e9df9b9377452917863b778414c1e7b237": "0ba34513acf0976f195dad7bfd39b11d",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/98/04d7007dcb3adac862701c4b887303a17fc654": "8b86cacbf5c6fa3dad9f541ddef7d74a",
".git/objects/53/6bfae155b547df9bcf6e44cff83f7980e45332": "d18fc73cf1f90b98ac2b98add15c7e8a",
".git/objects/37/88db374f11b99d5ef42a365283c8241f9afc40": "e5e2d80b362934cb1c7ce9db19452e8a",
".git/objects/08/291cd7fbabc97e01b3c7a6ffb0384e8db74ffe": "1a080e90a1eb4348cc361f678ceeaba2",
".git/objects/6d/85b7bf45633413ebb3807b14fcf4e89d94d289": "5d3c9911bb01e3b9622c36b1bf2078e3",
".git/objects/90/9be0a4fc2300baff0b919cd8cf67d679e12213": "bf51379e0702454ffa32809d6f8403c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/9094ccc3933204357fb191531d9bb945dc5cfb": "c98dec160ea58cfda66a5f50bd1a4656",
".git/objects/b1/4b795bfd6500c17ef62a78a4c57cbd8f45d660": "6cc7fc29cd68625f789679fcdc384bd1",
".git/objects/dc/277e131c70bbb71e1e2ba676fbded66ead8baf": "075ae4b746330b7d9a00be23ab4bf6b3",
".git/objects/aa/60bc1d651e4b5da39d365b5b4299b9f016255f": "7f90f35d6ec954b9e1040d4da19863dd",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/ffea907be4cfde13d5c31292020780137adabf": "d56d95f6fcdb387678c14601420027e5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/1942f5e49f9540a8886674b4300f27b79ef95a": "acfcc455ac44b2a7f76dac30265e6581",
".git/objects/ea/8982a26a5efdad0bc59cc24ab16fa3077d31e6": "9a4a34ce6d31c7eac0e64a06b01366be",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/4ec77412f15b184f555c956a5ba653b01b6d48": "6458649c4f47216971a76a0a81accd10",
".git/objects/f0/1ee0874643f4a7c1c2c4dae6b6190b8f68b9f7": "67d0859f19236957d8311eda1ca99508",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/2d/c391e9cd4a0083ef5f81a34cffe7e081033551": "992e68eb177b475a3816555afcb08ed7",
".git/objects/1e/036a94a48a11bc7644c3a67acef06df59799e4": "9a31c29ab2e75ca0ca660f3ccd536827",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/83ff17e1b2b099d1618d66f61bbdcf0bfa8183": "a2d138c74e1f0161fb982ffb4e33c0e8",
".git/objects/8d/cae180a846f8e3e86e8ea004cb7fae472f537c": "3ede790415577bc9d1c5236fe36fcb5a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/c55fc558f7cfd9819b8b681ae71824a98a7522": "a22e27a434b97f60d6418df2d723b9cd",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/7288ffeba78a1d3e8c6f183dfea3d03814aa48": "9b5dad71850f3de0e6de4d846a1b083a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e86428b794c5775b1aa043a66286dae2",
".git/logs/refs/heads/main": "e86428b794c5775b1aa043a66286dae2",
".git/logs/refs/remotes/origin/main": "8a044b5939c52fde1e6ffef00e6f0705",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7f051051de9fa57635a051fed7555d38",
".git/refs/remotes/origin/main": "7f051051de9fa57635a051fed7555d38",
".git/index": "399d70d1b0f8adafc67f7b40abaaf6fe",
".git/COMMIT_EDITMSG": "eb67eb96e6e3b4dcdf13b45358418958",
"assets/AssetManifest.json": "673c6137c8facc0fbe3613224eb3a2a8",
"assets/NOTICES": "347468d1306593ce306cd1d5215c3d88",
"assets/FontManifest.json": "5ae88f22f8d4f4ce58617db3bd89d0df",
"assets/AssetManifest.bin.json": "5b1a53e1a88196c6fc59e4740dbe86d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82b70bf6f9805eb28a7bce855449689e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/cake.svg": "aed39ba3f8eb965dda495e372bd04025",
"assets/assets/svg/bow.svg": "a016e8ca1f57f7094a6e8bbc96d7d7c4",
"assets/assets/svg/dance.svg": "cd72255eb5f9583a88b639bea4f91675",
"assets/assets/svg/bus.svg": "a3c10feb5ea7300d802eb244e5c8d4e1",
"assets/assets/svg/rings.svg": "da33655f1cd6b38d9aa8ed878d0a3d67",
"assets/assets/svg/envelope_opened_body.svg": "8ce01feb7f6e2c2f732fe1d855b9b4dc",
"assets/assets/images/image7.jpg": "294b75f4567232e7602e482cb6a78b7c",
"assets/assets/images/image6.jpg": "7d1bdbda844544f3dd17c6f9d5ddca9a",
"assets/assets/images/image4.jpg": "e6444d271638a997c3053c6891332cc0",
"assets/assets/images/image5.jpg": "cb204b6af1ca9ae67158668b8a963dd8",
"assets/assets/images/image1.jpg": "754dd83ba273bbda155b0016bfbd867a",
"assets/assets/images/image2.jpg": "fd6f198eab835845cd579fd75ebb17f4",
"assets/assets/images/image3.jpg": "fbe4f0a816499dd1c3e60024bb97f6c7",
"assets/assets/json/envelope_open.json": "ca61a3e39dbd77895ad35e0f16914ae8",
"assets/assets/fonts/Anticva.ttf": "dc9a5fa8e3d9dc63573fb478e7540835",
"assets/assets/fonts/AmericanRetro.ttf": "4e78438c62882af94de15230c1ac3e4f",
"assets/assets/fonts/Agnewhandbookc.otf": "975dc3435f83aed193481400febb7e29",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
