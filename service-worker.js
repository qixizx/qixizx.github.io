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

var precacheConfig = [["H:/emdwx/public/2019/12/15/hello-world/index.html","7519008017922834a8854c1258c630f3"],["H:/emdwx/public/2019/12/15/测试第一篇文章/index.html","5bd3d3418aba2b918ebb7b488338e5e5"],["H:/emdwx/public/archives/2019/12/index.html","538f2fa7e01168bcbd40ae4efbcedc03"],["H:/emdwx/public/archives/2019/index.html","e915a5d2332b54fb0c0a8bd745a298a9"],["H:/emdwx/public/archives/index.html","823aab98d871375bc79fbe8d198ef93a"],["H:/emdwx/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["H:/emdwx/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["H:/emdwx/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["H:/emdwx/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["H:/emdwx/public/categories/Git/index.html","ee2bc165907e835d30cc73401d47de93"],["H:/emdwx/public/categories/index.html","7b8b7f0e26a7300f7b567ef929d72e5e"],["H:/emdwx/public/css/index.css","d85b0a582e715d060d70e0fc29a7b5b5"],["H:/emdwx/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/emdwx/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["H:/emdwx/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/emdwx/public/img/avatar.png","55667e43d8fcc2d1e91e4491ec9f1e58"],["H:/emdwx/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["H:/emdwx/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/emdwx/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["H:/emdwx/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["H:/emdwx/public/index.html","3ed85f12933e36953a88250ab69861e7"],["H:/emdwx/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["H:/emdwx/public/js/daovoice.js","d2b8ca4b68e5d4c0244a43125108ff3e"],["H:/emdwx/public/js/main.js","fad811598880d938c0e617c40e7aeb94"],["H:/emdwx/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["H:/emdwx/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["H:/emdwx/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["H:/emdwx/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["H:/emdwx/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/emdwx/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/emdwx/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["H:/emdwx/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["H:/emdwx/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["H:/emdwx/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/emdwx/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/emdwx/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/emdwx/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["H:/emdwx/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["H:/emdwx/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["H:/emdwx/public/link/index.html","dc00696a95e321b58ee575c1c0df8878"],["H:/emdwx/public/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["H:/emdwx/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["H:/emdwx/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["H:/emdwx/public/tags/index.html","159ce2cf0ee6d1c4e61217701704da6e"],["H:/emdwx/public/tags/测试-你好/index.html","70f31245af177159fabf1aa76f5d7e8b"]];
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







