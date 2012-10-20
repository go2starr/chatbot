// ==UserScript==
// @name        chatbot
// @namespace   facebook
// @include     about:addons
// @include     *
// @version     1
// ==/UserScript==

function LOG(msg) {
    console.debug(msg);
}

function ObjectProxy(object) {
    // Get a default object
    prototype = object.prototype;
    for (property in prototype) {
        LOG(property);
        try {
            // Function
            LOG(prototype[property]);
            function proxy(p, f) {
                return function() {
                    LOG("Caught " + p);
                    f.apply(this, [].slice.call(arguments));
                };
            }
            prototype[property] = proxy(property, prototype[property]);
        } catch (e) {
            // Property
        }
    }
}

ObjectProxy(XMLHttpRequest);

xhr = new XMLHttpRequest;
xhr.open("GET", "/");

LOG("TEST");
