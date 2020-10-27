/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/52400/Desktop/project/project/cxy/public/404.html","90c61cad8331dd986e7bae92d2025019"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/README.html","7944fd8ddb6defa0e32ac0dd3024ed5d"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/index.html","500f43de661d4d3e443ee522e2068e23"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/10/index.html","49f6d5e6bf2646325dcd9c369df3f015"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/10/page/2/index.html","2454cac29fdc90f2ef5ebc0f09bf2692"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/index.html","90e9368a5598476a890c07827d25ef26"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/page/2/index.html","834241375d34f73d528805c2999b8ece"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/index.html","da4865f7bc3f019ac0d67a128f7b373a"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/page/2/index.html","48354e1e240e95304b8ad42dba93ba6b"],["C:/Users/52400/Desktop/project/project/cxy/public/bangumis/index.html","1095ef96556da2fc46ae94a8917fdec3"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/index.html","5d1eb33fbc7b898a8374a9cf28ba7c7d"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/前端学习/index.html","71769a5c0ff3c5ac3c4c6be7e9961bde"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/后端学习/index.html","ab67013da3eee6f3a66ee9debfc1e99b"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站建设/index.html","325b73e0d1065ecad47f48ec06271a6b"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站魔改/index.html","ef9514731a5a6477fee750391e987ec9"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站魔改/page/2/index.html","e73fafc935ca0a84076aa897b1259027"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/js/clock.js","5421609d9d563d117a2fa44195f3b44f"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["C:/Users/52400/Desktop/project/project/cxy/public/css/calendar.css","5175462389381774145f150a166ff37f"],["C:/Users/52400/Desktop/project/project/cxy/public/css/cuixinyu.css","76c8b20a0ccd449a2368d0bbbe9e721c"],["C:/Users/52400/Desktop/project/project/cxy/public/css/iconfont.css","7e4a0b197699623c693fd4631e864196"],["C:/Users/52400/Desktop/project/project/cxy/public/css/index.css","7dd96145e9017473a2fd3c8d98bc7625"],["C:/Users/52400/Desktop/project/project/cxy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/52400/Desktop/project/project/cxy/public/home/index.html","dac411ebd73aef058b9f90fdcc1d83da"],["C:/Users/52400/Desktop/project/project/cxy/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/52400/Desktop/project/project/cxy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/52400/Desktop/project/project/cxy/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/52400/Desktop/project/project/cxy/public/img/favicon.png","00f98d4e567d1b1d73cbca0ee92f265b"],["C:/Users/52400/Desktop/project/project/cxy/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/52400/Desktop/project/project/cxy/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/52400/Desktop/project/project/cxy/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/52400/Desktop/project/project/cxy/public/index.html","994371bf6207502ef697163f49c4026c"],["C:/Users/52400/Desktop/project/project/cxy/public/js/calendar.js","e7e3feee304b12a875925534b67f9fc6"],["C:/Users/52400/Desktop/project/project/cxy/public/js/cuixinyu.js","603f3f1ac57128e3fe501c6c4157e0af"],["C:/Users/52400/Desktop/project/project/cxy/public/js/gitcalendar.js","b3f10371fb4a8d7e864172b6fc0b614b"],["C:/Users/52400/Desktop/project/project/cxy/public/js/history.js","edf324e75ad829387c6d216c94b2eb5d"],["C:/Users/52400/Desktop/project/project/cxy/public/js/historyroll.js","966662d4f16fe467b19b3ff8d143154c"],["C:/Users/52400/Desktop/project/project/cxy/public/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["C:/Users/52400/Desktop/project/project/cxy/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/52400/Desktop/project/project/cxy/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/52400/Desktop/project/project/cxy/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/52400/Desktop/project/project/cxy/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/52400/Desktop/project/project/cxy/public/link/index.html","53289e15a8d2278510b328647657c1f7"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/js/catalogMagnet.js","8396cbb08f75ab9c89480c124a49a471"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["C:/Users/52400/Desktop/project/project/cxy/public/music/index.html","e44f7d0cfb6aeab48d38b7276dd1e0b7"],["C:/Users/52400/Desktop/project/project/cxy/public/page/2/index.html","6e381bb10a524ada7b8f47ef7f8e7550"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/405e7e90/index.html","8cdbbfe9350c9b3b6461f728267f2587"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/420431aa/index.html","d750bd2db42c6efc84a2ce2ee5d75cbe"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/42225fe3/index.html","10ff6c9cba34cdec1f210ff3daac2123"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/4a17b156/index.html","8b97ceacc936a00b42ac886046771faf"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/55c82d00/index.html","b624702b31fa908c1bb78862cc3a48a0"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/72cfe8e6/index.html","1d72ad522d9d2f48c536b968dd3e480f"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/9e0aa3fb/index.html","48ee2c5b05193a6008fc4d4f182655eb"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/aa2a6fbd/index.html","a641989da5da788967c6535633c1f1ad"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/ad25968/index.html","b841492526f7a53c4b981f3f4adc4d6d"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/ad8496e8/index.html","21302fba7d04b2de8261655070a20fec"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/c4a5d8ce/index.html","a5634a2f42f5af428f039feccbe980c4"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/cf8b29ee/index.html","904f3a69ee046c11931286333867f2f2"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/d4460fb7/index.html","74a14ca7bec5b4ae57b8eca2b4bca039"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/dc01a78c/index.html","ef8198760d6565af263db72f356dcbfe"],["C:/Users/52400/Desktop/project/project/cxy/public/story/css/default.css","a90168be2a98d4d07fbab7d227d5ef3c"],["C:/Users/52400/Desktop/project/project/cxy/public/story/index.html","1d5d96f34a281c47794f996bd32cf437"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/functions.js","d397cc40d0052d7cf09a56284c342e81"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/garden.js","0ae5d17511f665284a39d7e1753586db"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/jquery.js","638c25a50e25c0a4e3e262ed0aa8a7b6"],["C:/Users/52400/Desktop/project/project/cxy/public/sw-register.js","120554d6e9db96fc909b5aa4a60412a4"],["C:/Users/52400/Desktop/project/project/cxy/public/sw.js","2722877e414f560d34376f38e9e10404"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Butterfly/index.html","eb03ed30e3418d826dc1ce306a0e0b22"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Butterfly/page/2/index.html","4976b0640bb161ddef2153ca34a3bc28"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Hexo/index.html","7e83795ab22dd676bbb5c374cabc7849"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Hexo/page/2/index.html","a9ffb05c8cab4794b34b2df406fa62da"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/JEECG/index.html","45210c1778d2382ae06f0540aefb9ca3"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Spring-Boot/index.html","ae589380c324c03f3b688dd483292308"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Vue/index.html","f674e97774868a8cb507dbd5047e62ce"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/index.html","43bff76430404ba875bc49caea761c97"],["C:/Users/52400/Desktop/project/project/cxy/public/talk/index.html","addb4c9eade9141469df9091ac90d1ce"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/index.html","068117d51e055ddc7d8d929d151de234"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/default.css","a17da59f355e192a8e0b580c522527f7"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/functions.js","49b4b5bef121397cc1800496bd4f1b20"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jquery.min.js","db2cccefedcc741a45a582e91a5afe8d"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-async-powerpack.min.js","fd45d8a1f07587f6c02374252ec473ff"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-async.min.js","aa6f97f754cafa543faaab169e3fd001"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-builderbase.min.js","9b8461afeb0b66c0d0ad1301b41c243c"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-jit.js","c8694188c517a0c89ceb784fbda10e49"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-parser.js","a23cd8fa9a8937aed571c01ba52139a6"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex.min.js","c36e85ee92e83d634d0245bc83889d87"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/love.js","966c53787d3ce5a5bbfcdef5dc8c5ae8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







