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

var precacheConfig = [["C:/Users/52400/Desktop/project/cxy/public/404.html","90c61cad8331dd986e7bae92d2025019"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/README.html","288fcf249d87a787875f2aee2f962405"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/index.html","e70e3462d34019b66bc8ef0223018c03"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/10/index.html","c1fab62f79162d0f952b1c6b228671a2"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/10/page/2/index.html","609124f4c78b3e972c2bea8434cedf8e"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/index.html","5126809e5d9b7a1b64d8110839a72f8f"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/page/2/index.html","ec4b48816a71bc344bb672a1c3974dad"],["C:/Users/52400/Desktop/project/cxy/public/archives/index.html","131fa572d6bd2809f8a9194f98ac4360"],["C:/Users/52400/Desktop/project/cxy/public/archives/page/2/index.html","5c7cdbec48dc8c104ca78e8b58aca86a"],["C:/Users/52400/Desktop/project/cxy/public/bangumis/index.html","585b12fc6fd56f4365cd58e4fee9e8f7"],["C:/Users/52400/Desktop/project/cxy/public/categories/Vedio/index.html","4f10d445658d98df5bf24024a20b3870"],["C:/Users/52400/Desktop/project/cxy/public/categories/index.html","9167c692b47e96bbdb7e676f4b8cf51c"],["C:/Users/52400/Desktop/project/cxy/public/categories/前端学习/index.html","f205b75371d5437d557b4df4d075ac31"],["C:/Users/52400/Desktop/project/cxy/public/categories/后端学习/index.html","830e8dd3a9643d07a33c950f3cb9ab3e"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站建设/index.html","42b56bce31b3c02c9eda6dca8f091c51"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站魔改/index.html","742a2db01f12460cf605c2d642f49c0f"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站魔改/page/2/index.html","c9d5a5f80d1cfa8b36b40842c5cd6e4e"],["C:/Users/52400/Desktop/project/cxy/public/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["C:/Users/52400/Desktop/project/cxy/public/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["C:/Users/52400/Desktop/project/cxy/public/clock/js/clock.js","5421609d9d563d117a2fa44195f3b44f"],["C:/Users/52400/Desktop/project/cxy/public/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["C:/Users/52400/Desktop/project/cxy/public/comments/index.html","9247a4b752693b5dde79ddfbc7dae0fc"],["C:/Users/52400/Desktop/project/cxy/public/css/calendar.css","5175462389381774145f150a166ff37f"],["C:/Users/52400/Desktop/project/cxy/public/css/commentsbar.css","5b327e29629f985510f1bd0692265341"],["C:/Users/52400/Desktop/project/cxy/public/css/cuixinyu.css","76c8b20a0ccd449a2368d0bbbe9e721c"],["C:/Users/52400/Desktop/project/cxy/public/css/flipcountdown.css","8f01b453cc1b09254e8b2821a1bf71c6"],["C:/Users/52400/Desktop/project/cxy/public/css/galmenu.css","e5adb64ee59602cfd50d7282728582e6"],["C:/Users/52400/Desktop/project/cxy/public/css/iconfont.css","7e4a0b197699623c693fd4631e864196"],["C:/Users/52400/Desktop/project/cxy/public/css/index.css","82e5799faf72ef77a5e2d915fd65b533"],["C:/Users/52400/Desktop/project/cxy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/52400/Desktop/project/cxy/public/home/index.html","af9cde4f1b0ae4c8cc68013fd8f2907c"],["C:/Users/52400/Desktop/project/cxy/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/52400/Desktop/project/cxy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/52400/Desktop/project/cxy/public/img/archive.png","bb1038ed97fab0132a6c47fee2543786"],["C:/Users/52400/Desktop/project/cxy/public/img/comment.png","50349a0a5f1d5b4e72151fb483c134df"],["C:/Users/52400/Desktop/project/cxy/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-lg.png","b78467f9c9c78b391ecba9d930c49063"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-md.png","09a7c0561597d5432b979abf90890770"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-sm.png","b1ca29605d57153a6a7885be60960b49"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-xs.png","feb9ad425e75bf602bbcca5923df2018"],["C:/Users/52400/Desktop/project/cxy/public/img/favicon.png","00f98d4e567d1b1d73cbca0ee92f265b"],["C:/Users/52400/Desktop/project/cxy/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/52400/Desktop/project/cxy/public/img/home.png","a1fc36d0e7acca3d2d6612e8406e8b50"],["C:/Users/52400/Desktop/project/cxy/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/52400/Desktop/project/cxy/public/img/link.png","5dc2805f437eef333c25e26b50a52851"],["C:/Users/52400/Desktop/project/cxy/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/52400/Desktop/project/cxy/public/img/random.png","3078cf2e0d16ee68a2fa4331f30d0411"],["C:/Users/52400/Desktop/project/cxy/public/img/tag.png","d9c4c54d034be0f628ec3f9edc7b7e47"],["C:/Users/52400/Desktop/project/cxy/public/index.html","63650c8e4120f056277e0be33c156741"],["C:/Users/52400/Desktop/project/cxy/public/js/calendar.js","e7e3feee304b12a875925534b67f9fc6"],["C:/Users/52400/Desktop/project/cxy/public/js/cuixinyu.js","603f3f1ac57128e3fe501c6c4157e0af"],["C:/Users/52400/Desktop/project/cxy/public/js/flipcountdown.js","9b7ef5c7612efe388eb46baf3247cb1e"],["C:/Users/52400/Desktop/project/cxy/public/js/galmenu.js","f79654da24c545a9776a914026f14817"],["C:/Users/52400/Desktop/project/cxy/public/js/gitcalendar.js","b3f10371fb4a8d7e864172b6fc0b614b"],["C:/Users/52400/Desktop/project/cxy/public/js/history.js","edf324e75ad829387c6d216c94b2eb5d"],["C:/Users/52400/Desktop/project/cxy/public/js/historyroll.js","966662d4f16fe467b19b3ff8d143154c"],["C:/Users/52400/Desktop/project/cxy/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["C:/Users/52400/Desktop/project/cxy/public/js/mirror.js","9c5f95fd13d782d143cabd4d90c51eb0"],["C:/Users/52400/Desktop/project/cxy/public/js/random.js","a95ef8577bda0fc106139dc3d98eb02a"],["C:/Users/52400/Desktop/project/cxy/public/js/runtime.js","3ccf6e413105de42591806c090e0fbec"],["C:/Users/52400/Desktop/project/cxy/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/52400/Desktop/project/cxy/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/52400/Desktop/project/cxy/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/52400/Desktop/project/cxy/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/52400/Desktop/project/cxy/public/link/index.html","b624486fd07db96fc40ca154c894f334"],["C:/Users/52400/Desktop/project/cxy/public/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["C:/Users/52400/Desktop/project/cxy/public/magnet/js/catalogMagnet.js","8396cbb08f75ab9c89480c124a49a471"],["C:/Users/52400/Desktop/project/cxy/public/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["C:/Users/52400/Desktop/project/cxy/public/music/index.html","7d2d644027b1154197a269480aa1b7c6"],["C:/Users/52400/Desktop/project/cxy/public/page/2/index.html","891be8c21fc1b29323e966b0e87cbc07"],["C:/Users/52400/Desktop/project/cxy/public/posts/405e7e90/index.html","f27523d292db00ace0db4b12255974c1"],["C:/Users/52400/Desktop/project/cxy/public/posts/420431aa/index.html","aaebd8458db1ee7d28d180f111d4df0c"],["C:/Users/52400/Desktop/project/cxy/public/posts/42225fe3/index.html","5895b9c95bef6b92d93dc04af0b68d78"],["C:/Users/52400/Desktop/project/cxy/public/posts/4a17b156/index.html","5b36465454084f77f98dd483ec888062"],["C:/Users/52400/Desktop/project/cxy/public/posts/55c82d00/index.html","01cce5d3338093719a4cb22002de89dc"],["C:/Users/52400/Desktop/project/cxy/public/posts/72cfe8e6/index.html","7ee9d1b2823fac7952ef590ffb98faef"],["C:/Users/52400/Desktop/project/cxy/public/posts/95970c29/index.html","c60c37c21a2be24b1c96e4d1d6826f99"],["C:/Users/52400/Desktop/project/cxy/public/posts/9e0aa3fb/index.html","a98d014d431938c4b77e5cd3a160480d"],["C:/Users/52400/Desktop/project/cxy/public/posts/aa2a6fbd/index.html","b85b0240620afb57ee895cc51866701c"],["C:/Users/52400/Desktop/project/cxy/public/posts/ad25968/index.html","3b246f931ac8e3e5f44e7f568e8c5ecb"],["C:/Users/52400/Desktop/project/cxy/public/posts/ad8496e8/index.html","a021659de01d8e9cc71acc540e41b565"],["C:/Users/52400/Desktop/project/cxy/public/posts/c4a5d8ce/index.html","98cb9dec9ce32b41a12f01e4328f2b36"],["C:/Users/52400/Desktop/project/cxy/public/posts/cf8b29ee/index.html","795ac84306d92a14b2e3903746d7306b"],["C:/Users/52400/Desktop/project/cxy/public/posts/d4460fb7/index.html","4873300d8161508617bd09e823af951f"],["C:/Users/52400/Desktop/project/cxy/public/posts/dc01a78c/index.html","ef86f23c6f825cbccbaaf4a87d2fe1d9"],["C:/Users/52400/Desktop/project/cxy/public/story/css/default.css","5ebf4747e1e4e8c662e94f7bf38da901"],["C:/Users/52400/Desktop/project/cxy/public/story/index.html","c1ceea931c2b211b9b3a1231ca46452b"],["C:/Users/52400/Desktop/project/cxy/public/story/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["C:/Users/52400/Desktop/project/cxy/public/story/js/garden.js","f450b5e2edbd84e8d8243bf39755fa39"],["C:/Users/52400/Desktop/project/cxy/public/story/js/jquery.js","1643f565f82f3852756d8d592167d5e0"],["C:/Users/52400/Desktop/project/cxy/public/sw-register.js","24f342a9f3a5aa430c76e7b0c9a894e0"],["C:/Users/52400/Desktop/project/cxy/public/sw.js","d4c3796baf72ad21da3ecb263f268adc"],["C:/Users/52400/Desktop/project/cxy/public/tags/Bilibili/index.html","76b86a2a57ce635c822926a5a72ca68b"],["C:/Users/52400/Desktop/project/cxy/public/tags/Butterfly/index.html","70d2ce8fa7e61ba86fb951d0e892cdd2"],["C:/Users/52400/Desktop/project/cxy/public/tags/Butterfly/page/2/index.html","513c8980c16f5e2a4df5c85c516b77a7"],["C:/Users/52400/Desktop/project/cxy/public/tags/Hexo/index.html","06af295dc008f83dca9a0de544d0e22b"],["C:/Users/52400/Desktop/project/cxy/public/tags/Hexo/page/2/index.html","05342b240a25a52e54719bb030044fbf"],["C:/Users/52400/Desktop/project/cxy/public/tags/JEECG/index.html","d90e5ba996e23d024709871e96498781"],["C:/Users/52400/Desktop/project/cxy/public/tags/Spring-Boot/index.html","1145929077b99c2125388c2dc705f093"],["C:/Users/52400/Desktop/project/cxy/public/tags/Vue/index.html","334d85440a31f928847c776836054305"],["C:/Users/52400/Desktop/project/cxy/public/tags/index.html","b498b944b84e0d329f00fd4b6ca3efe4"],["C:/Users/52400/Desktop/project/cxy/public/talk/index.html","448d87cbd3d84348debdb2b433b882b0"],["C:/Users/52400/Desktop/project/cxy/public/xin/index.html","e03bf241b098fa7c00dc1fc7af1d7ab0"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/default.css","f734197693fe9b2264472e226160a4ed"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/functions.js","242bf8b8a423e870e60637c9819b53dc"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/love.js","4cc71448048dc44216da356f6edbf9ac"]];
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







