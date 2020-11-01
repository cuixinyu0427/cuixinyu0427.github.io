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

var precacheConfig = [["C:/Users/52400/Desktop/project/cxy/public/404.html","90c61cad8331dd986e7bae92d2025019"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/README.html","246554de2a603a968142f5a90f5338cb"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/index.html","a863ed49a0d600e49ec0a8c95c2fd954"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["C:/Users/52400/Desktop/project/cxy/public/APlayer-Meting-JustAddMusic/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["C:/Users/52400/Desktop/project/cxy/public/about/index.html","d16240303a04bc29fe5457ed2c11e402"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/10/index.html","836d79bccf0b0d9f98d959f21694ad14"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/10/page/2/index.html","31c0726afb20f9d5629cc5ab86e2b16f"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/index.html","580fa1351947dfc9ec11cbbbb39dbd69"],["C:/Users/52400/Desktop/project/cxy/public/archives/2020/page/2/index.html","4da24d14b0aea46eb0dfd3679ac43127"],["C:/Users/52400/Desktop/project/cxy/public/archives/index.html","f332b4d43ea0441cc834921052f0923d"],["C:/Users/52400/Desktop/project/cxy/public/archives/page/2/index.html","74b30363a190a191960c3ddc3ed7e67e"],["C:/Users/52400/Desktop/project/cxy/public/bangumis/index.html","1c090d3f75404f7a8021094c829a3ca9"],["C:/Users/52400/Desktop/project/cxy/public/categories/Vedio/index.html","ecf58e4c5511a1f38fc14541308140f0"],["C:/Users/52400/Desktop/project/cxy/public/categories/index.html","1afdb06aafc7e6a9ec3f1419a39a63fe"],["C:/Users/52400/Desktop/project/cxy/public/categories/前端学习/index.html","300ba082e010c0f719bad47dd594194c"],["C:/Users/52400/Desktop/project/cxy/public/categories/后端学习/index.html","b870e35920d3cfc7f30bf91b46fa4ac6"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站建设/index.html","03e178bb2e638a571023299d3f62a4e3"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站魔改/index.html","9cd99bb58eece75787097345b86ac431"],["C:/Users/52400/Desktop/project/cxy/public/categories/网站魔改/page/2/index.html","537eb5a3b5c505556f5f5262ee8f9aef"],["C:/Users/52400/Desktop/project/cxy/public/clock/css/clock.css","b89bfe92070c455f30055fcf79717db5"],["C:/Users/52400/Desktop/project/cxy/public/clock/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["C:/Users/52400/Desktop/project/cxy/public/clock/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["C:/Users/52400/Desktop/project/cxy/public/clock/js/clock.js","5421609d9d563d117a2fa44195f3b44f"],["C:/Users/52400/Desktop/project/cxy/public/clock/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["C:/Users/52400/Desktop/project/cxy/public/comments/index.html","9840c7048d804de0ff69c172e1716ba3"],["C:/Users/52400/Desktop/project/cxy/public/css/calendar.css","5175462389381774145f150a166ff37f"],["C:/Users/52400/Desktop/project/cxy/public/css/cuixinyu.css","76c8b20a0ccd449a2368d0bbbe9e721c"],["C:/Users/52400/Desktop/project/cxy/public/css/flipcountdown.css","1dcc737069dea145733b1c0b14e0aaf5"],["C:/Users/52400/Desktop/project/cxy/public/css/galmenu.css","e5adb64ee59602cfd50d7282728582e6"],["C:/Users/52400/Desktop/project/cxy/public/css/iconfont.css","7e4a0b197699623c693fd4631e864196"],["C:/Users/52400/Desktop/project/cxy/public/css/index.css","a5951f50bb39917798003128f1c21cda"],["C:/Users/52400/Desktop/project/cxy/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/52400/Desktop/project/cxy/public/gitcalendar/css/gitcalendar.css","2d8c62408ed431b7242db6f7ca642b90"],["C:/Users/52400/Desktop/project/cxy/public/gitcalendar/js/gitcalendar.js","fa27316f469d7e0237c1b6b8ebbfc825"],["C:/Users/52400/Desktop/project/cxy/public/home/index.html","6f78df602368c5f14dd180ac4ea3681c"],["C:/Users/52400/Desktop/project/cxy/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/52400/Desktop/project/cxy/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/52400/Desktop/project/cxy/public/img/archive.png","bb1038ed97fab0132a6c47fee2543786"],["C:/Users/52400/Desktop/project/cxy/public/img/comment.png","50349a0a5f1d5b4e72151fb483c134df"],["C:/Users/52400/Desktop/project/cxy/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-lg.png","b78467f9c9c78b391ecba9d930c49063"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-md.png","09a7c0561597d5432b979abf90890770"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-sm.png","b1ca29605d57153a6a7885be60960b49"],["C:/Users/52400/Desktop/project/cxy/public/img/digit-xs.png","feb9ad425e75bf602bbcca5923df2018"],["C:/Users/52400/Desktop/project/cxy/public/img/favicon.png","00f98d4e567d1b1d73cbca0ee92f265b"],["C:/Users/52400/Desktop/project/cxy/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/52400/Desktop/project/cxy/public/img/home.png","a1fc36d0e7acca3d2d6612e8406e8b50"],["C:/Users/52400/Desktop/project/cxy/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/52400/Desktop/project/cxy/public/img/link.png","5dc2805f437eef333c25e26b50a52851"],["C:/Users/52400/Desktop/project/cxy/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/52400/Desktop/project/cxy/public/img/random.png","3078cf2e0d16ee68a2fa4331f30d0411"],["C:/Users/52400/Desktop/project/cxy/public/img/tag.png","d9c4c54d034be0f628ec3f9edc7b7e47"],["C:/Users/52400/Desktop/project/cxy/public/index.html","7d79e861ac5af4190a72ea8fed182b38"],["C:/Users/52400/Desktop/project/cxy/public/js/botui.js","9a9d1fdfcba44362b4717a388e0e3efd"],["C:/Users/52400/Desktop/project/cxy/public/js/calendar.js","e7e3feee304b12a875925534b67f9fc6"],["C:/Users/52400/Desktop/project/cxy/public/js/cuixinyu.js","603f3f1ac57128e3fe501c6c4157e0af"],["C:/Users/52400/Desktop/project/cxy/public/js/flipcountdown.js","9b7ef5c7612efe388eb46baf3247cb1e"],["C:/Users/52400/Desktop/project/cxy/public/js/galmenu.js","f79654da24c545a9776a914026f14817"],["C:/Users/52400/Desktop/project/cxy/public/js/gitcalendar.js","b3f10371fb4a8d7e864172b6fc0b614b"],["C:/Users/52400/Desktop/project/cxy/public/js/history.js","edf324e75ad829387c6d216c94b2eb5d"],["C:/Users/52400/Desktop/project/cxy/public/js/historyroll.js","966662d4f16fe467b19b3ff8d143154c"],["C:/Users/52400/Desktop/project/cxy/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["C:/Users/52400/Desktop/project/cxy/public/js/mirror.js","9c5f95fd13d782d143cabd4d90c51eb0"],["C:/Users/52400/Desktop/project/cxy/public/js/random.js","a95ef8577bda0fc106139dc3d98eb02a"],["C:/Users/52400/Desktop/project/cxy/public/js/runtime.js","3ccf6e413105de42591806c090e0fbec"],["C:/Users/52400/Desktop/project/cxy/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["C:/Users/52400/Desktop/project/cxy/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["C:/Users/52400/Desktop/project/cxy/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["C:/Users/52400/Desktop/project/cxy/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["C:/Users/52400/Desktop/project/cxy/public/link/index.html","8e38a8f8c4f8358d0cea6bbc2f6f54aa"],["C:/Users/52400/Desktop/project/cxy/public/magnet/css/catalogMagnet.css","5340a12c9740e00bd10d9e602e1aa460"],["C:/Users/52400/Desktop/project/cxy/public/magnet/js/catalogMagnet.js","8396cbb08f75ab9c89480c124a49a471"],["C:/Users/52400/Desktop/project/cxy/public/magnet/js/vue.min.js","520cb27262482215e98aa2de66403a60"],["C:/Users/52400/Desktop/project/cxy/public/music/index.html","695b315355c557c445523933ccaca962"],["C:/Users/52400/Desktop/project/cxy/public/page/2/index.html","10537133746b110b96a0c3bf172527f6"],["C:/Users/52400/Desktop/project/cxy/public/posts/405e7e90/index.html","945695d054dcc193117383d8abe4c42b"],["C:/Users/52400/Desktop/project/cxy/public/posts/420431aa/index.html","1c2e896ec17583211c311ccc5bfd0053"],["C:/Users/52400/Desktop/project/cxy/public/posts/42225fe3/index.html","7996d1b389ce9f99466d2b2c1208095e"],["C:/Users/52400/Desktop/project/cxy/public/posts/4a17b156/index.html","924d12af4453e48243d50b86aeffa8e1"],["C:/Users/52400/Desktop/project/cxy/public/posts/55c82d00/index.html","dcd8057c7b6ca08574a974dd8c085d19"],["C:/Users/52400/Desktop/project/cxy/public/posts/72cfe8e6/index.html","db5b72c0003f52b138f33e3dc86025a0"],["C:/Users/52400/Desktop/project/cxy/public/posts/95970c29/index.html","9c0af84b57d87763625d75ac7afa5eeb"],["C:/Users/52400/Desktop/project/cxy/public/posts/9e0aa3fb/index.html","59d6f9103bd14318bcb2d18ab0e57d56"],["C:/Users/52400/Desktop/project/cxy/public/posts/aa2a6fbd/index.html","242e542b76fd16fad3ba39c9baf7d104"],["C:/Users/52400/Desktop/project/cxy/public/posts/ad25968/index.html","2ff644676f4ceeeeef0aff0a595e3066"],["C:/Users/52400/Desktop/project/cxy/public/posts/ad8496e8/index.html","e5a9e20462f4bd86d4ead177eae92ede"],["C:/Users/52400/Desktop/project/cxy/public/posts/c4a5d8ce/index.html","4d3bfef07b21d0aed7add38ff1e1ebfb"],["C:/Users/52400/Desktop/project/cxy/public/posts/cf8b29ee/index.html","c3ee431867a73f7a925a4da1bdd93738"],["C:/Users/52400/Desktop/project/cxy/public/posts/d4460fb7/index.html","d5c8f667c742a79155563d5888af0eab"],["C:/Users/52400/Desktop/project/cxy/public/posts/dc01a78c/index.html","f26e57d6d751fe146b7904492ae508f4"],["C:/Users/52400/Desktop/project/cxy/public/story/css/default.css","5ebf4747e1e4e8c662e94f7bf38da901"],["C:/Users/52400/Desktop/project/cxy/public/story/index.html","f69a846cb366e663a931b18ab5e8e283"],["C:/Users/52400/Desktop/project/cxy/public/story/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["C:/Users/52400/Desktop/project/cxy/public/story/js/garden.js","f450b5e2edbd84e8d8243bf39755fa39"],["C:/Users/52400/Desktop/project/cxy/public/story/js/jquery.js","1643f565f82f3852756d8d592167d5e0"],["C:/Users/52400/Desktop/project/cxy/public/sw-register.js","d6b245719c86c066c2489429860eeed9"],["C:/Users/52400/Desktop/project/cxy/public/sw.js","59c9d87832f7481b7d13a3938465c1dd"],["C:/Users/52400/Desktop/project/cxy/public/tags/Bilibili/index.html","250052cfa3ae33c5a6f8ce46fc49561d"],["C:/Users/52400/Desktop/project/cxy/public/tags/Butterfly/index.html","6550fdd0f85cbc5af69888c56b0ecd49"],["C:/Users/52400/Desktop/project/cxy/public/tags/Butterfly/page/2/index.html","aa42b5e1f8c1509f17fff4c749182e79"],["C:/Users/52400/Desktop/project/cxy/public/tags/Hexo/index.html","8ef7c5e5218f62430b85c9367ab75409"],["C:/Users/52400/Desktop/project/cxy/public/tags/Hexo/page/2/index.html","07a9323becca92e11bae67ccb2076fbf"],["C:/Users/52400/Desktop/project/cxy/public/tags/JEECG/index.html","bbab8b3eec381aba6912cb9b2512fcdc"],["C:/Users/52400/Desktop/project/cxy/public/tags/Spring-Boot/index.html","6cf3d1fc6f54ee7b48a7e90c791188b8"],["C:/Users/52400/Desktop/project/cxy/public/tags/Vue/index.html","a773c8f4d5cca074069a4358e1ed8a53"],["C:/Users/52400/Desktop/project/cxy/public/tags/index.html","25f1cc6d54616555cc3382eb5c3be686"],["C:/Users/52400/Desktop/project/cxy/public/talk/index.html","6f74ac61ec6bcff03832411641425400"],["C:/Users/52400/Desktop/project/cxy/public/xin/index.html","ef9d9478cc68d57e772bd3cee4247075"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/default.css","f734197693fe9b2264472e226160a4ed"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/functions.js","242bf8b8a423e870e60637c9819b53dc"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-jit.js","35be392b9cd2ad66c63bac412554d874"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["C:/Users/52400/Desktop/project/cxy/public/xin/liting/love.js","4cc71448048dc44216da356f6edbf9ac"]];
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







