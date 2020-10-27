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

var precacheConfig = [["C:/Users/52400/Desktop/project/project/cxy/public/404.html","90c61cad8331dd986e7bae92d2025019"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/README.html","f372b14b5ee54c8ca98a84884a894cea"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/index.html","2f147780c4eb1ec326a618827f25dd95"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["C:/Users/52400/Desktop/project/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/10/index.html","be66581c5f46505053c8138b1fff2caa"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/10/page/2/index.html","78130574cb77b83cb0bea3d78253b4d2"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/index.html","dd11c413291bb345053f84cbf6ff83d8"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/2020/page/2/index.html","24497bfb9a3f8cb6480fa66b3fd29a38"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/index.html","92e227a1572c3d5d6d784aef59bd492b"],["C:/Users/52400/Desktop/project/project/cxy/public/archives/page/2/index.html","369fdad245331cd86b18ef6f57999ceb"],["C:/Users/52400/Desktop/project/project/cxy/public/bangumis/index.html","ff06b23196454b3ba3bea7d4d67b2cd7"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/Vedio/index.html","6c1d60f1909cbc40d9ac7d57b448f54d"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/index.html","f88a6aeba96c0a656a386ed4c5ba4f1d"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/前端学习/index.html","571b787a5a2248ed5044c24a0b97de60"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/后端学习/index.html","a5df01255abe7272ba5481175283ffe0"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站建设/index.html","0c52f8c49380824d7fd69980937c1b45"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站魔改/index.html","1f277ba9ea8f60e20bba40508e331ab8"],["C:/Users/52400/Desktop/project/project/cxy/public/categories/网站魔改/page/2/index.html","62a3f5746fd587191433a3a8ed96e5e7"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/js/clock.js","5421609d9d563d117a2fa44195f3b44f"],["C:/Users/52400/Desktop/project/project/cxy/public/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["C:/Users/52400/Desktop/project/project/cxy/public/css/calendar.css","5175462389381774145f150a166ff37f"],["C:/Users/52400/Desktop/project/project/cxy/public/css/cuixinyu.css","76c8b20a0ccd449a2368d0bbbe9e721c"],["C:/Users/52400/Desktop/project/project/cxy/public/css/iconfont.css","7e4a0b197699623c693fd4631e864196"],["C:/Users/52400/Desktop/project/project/cxy/public/css/index.css","7dd96145e9017473a2fd3c8d98bc7625"],["C:/Users/52400/Desktop/project/project/cxy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/52400/Desktop/project/project/cxy/public/home/index.html","735828a9d60a098180bdd62a6fb667d4"],["C:/Users/52400/Desktop/project/project/cxy/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/52400/Desktop/project/project/cxy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/52400/Desktop/project/project/cxy/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/52400/Desktop/project/project/cxy/public/img/favicon.png","00f98d4e567d1b1d73cbca0ee92f265b"],["C:/Users/52400/Desktop/project/project/cxy/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/52400/Desktop/project/project/cxy/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/52400/Desktop/project/project/cxy/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/52400/Desktop/project/project/cxy/public/index.html","707e190545da9bec3af56f34921f27de"],["C:/Users/52400/Desktop/project/project/cxy/public/js/calendar.js","e7e3feee304b12a875925534b67f9fc6"],["C:/Users/52400/Desktop/project/project/cxy/public/js/cuixinyu.js","603f3f1ac57128e3fe501c6c4157e0af"],["C:/Users/52400/Desktop/project/project/cxy/public/js/gitcalendar.js","b3f10371fb4a8d7e864172b6fc0b614b"],["C:/Users/52400/Desktop/project/project/cxy/public/js/history.js","edf324e75ad829387c6d216c94b2eb5d"],["C:/Users/52400/Desktop/project/project/cxy/public/js/historyroll.js","966662d4f16fe467b19b3ff8d143154c"],["C:/Users/52400/Desktop/project/project/cxy/public/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["C:/Users/52400/Desktop/project/project/cxy/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/52400/Desktop/project/project/cxy/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/52400/Desktop/project/project/cxy/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/52400/Desktop/project/project/cxy/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/52400/Desktop/project/project/cxy/public/link/index.html","e4cbb9cb332110152fed2cdc1a6ac9e7"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/js/catalogMagnet.js","8396cbb08f75ab9c89480c124a49a471"],["C:/Users/52400/Desktop/project/project/cxy/public/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["C:/Users/52400/Desktop/project/project/cxy/public/music/index.html","d851f1d435c7cddc45c3bee963de8081"],["C:/Users/52400/Desktop/project/project/cxy/public/page/2/index.html","8d5ae71fc5ced205b655df26da806de4"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/405e7e90/index.html","3ecb6e52a45314724fda8dd72f62c83c"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/420431aa/index.html","117688151d95fd02f3bacc30b6cdadc0"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/42225fe3/index.html","c0a4aa58eb369009e0f8ed0e561080e2"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/4a17b156/index.html","2fccc101335ed444a6dfa41cd8a8f8a9"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/55c82d00/index.html","0f23f778fc86701dd87b052f24967e80"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/72cfe8e6/index.html","8640be9c53004dbc82fc6d034831bada"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/95970c29/index.html","f649251a2fe64e449d838c7076581c25"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/9e0aa3fb/index.html","3cf8d859a1ae50d82ae2a5b5f6cd6ba5"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/aa2a6fbd/index.html","60506c74a2787ba91484ed1cf3dd2d9c"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/ad25968/index.html","e88c29ae91789e42f521791b85da6ce5"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/ad8496e8/index.html","192d59f2b4cd3be8193c37ca5a62f6f6"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/c4a5d8ce/index.html","32439a8b427188c7beaaa2c1240aa93c"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/cf8b29ee/index.html","1ed8d8be2ebf2cc9ec41e3e10862f64d"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/d4460fb7/index.html","d2a988982949188e7abe48beb9576e55"],["C:/Users/52400/Desktop/project/project/cxy/public/posts/dc01a78c/index.html","d2ff4088d7f65144a571f1dc5f429c01"],["C:/Users/52400/Desktop/project/project/cxy/public/story/css/default.css","5ebf4747e1e4e8c662e94f7bf38da901"],["C:/Users/52400/Desktop/project/project/cxy/public/story/index.html","fcb9fa2067218679dcc2c4fc0fbbe16d"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/garden.js","f450b5e2edbd84e8d8243bf39755fa39"],["C:/Users/52400/Desktop/project/project/cxy/public/story/js/jquery.js","1643f565f82f3852756d8d592167d5e0"],["C:/Users/52400/Desktop/project/project/cxy/public/sw-register.js","fe04910a733290dd0a90d0befaf1c3be"],["C:/Users/52400/Desktop/project/project/cxy/public/sw.js","659f5034188b1f1b77eebee0dd445014"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Bilibili/index.html","7ce2d2064ea736a37358c65615b0eb5b"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Butterfly/index.html","4f1970491ea8df04952ff726adfcf13c"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Butterfly/page/2/index.html","61901621add4d6fcfc26ebe91eac1a53"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Hexo/index.html","badad6ac03190809d9ebad34070a2903"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Hexo/page/2/index.html","6487c7f7ff3adda9f578790100120860"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/JEECG/index.html","14bfe994bfff8f6ed826a9baaf7447f1"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Spring-Boot/index.html","4654aa0f54e859ebfb61ae0d97ba373b"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/Vue/index.html","2726ee2ceec065d94ec49736de9682b9"],["C:/Users/52400/Desktop/project/project/cxy/public/tags/index.html","9f999e306737d586c19311d38f5a4127"],["C:/Users/52400/Desktop/project/project/cxy/public/talk/index.html","9032953b177f5e2c14528c3854a58afe"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/index.html","8b1783411a2328d534dc97e9b60cd8fc"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/default.css","f734197693fe9b2264472e226160a4ed"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/functions.js","242bf8b8a423e870e60637c9819b53dc"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["C:/Users/52400/Desktop/project/project/cxy/public/xin/liting/love.js","4cc71448048dc44216da356f6edbf9ac"]];
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







