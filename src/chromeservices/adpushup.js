var responseObj;
var messagesFromReactAppListener = function (msg, sender, sendResponse) {
    console.log('[content.js]. Message received', msg);
    function injectScript(file_path, tag) {
        var node = document.getElementsByTagName(tag)[0];
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', file_path);
        node.appendChild(script);
    }
    
    injectScript(chrome.runtime.getURL('inject-script.js'), 'body');
    window.addEventListener("message", function (event) {
        if(event.data.type == 'FROM_PAGE'){
            responseObj = event.data;
            console.log(event.data);
            sendResponse(event);
        }
    }, true);
};

var messagesFromReactAppListener1 = function (msg, sender, sendResponse) {
    console.log('[content.js]. Message received', msg);
    if(msg.type == 'GET_DOM1'){
        console.log(responseObj);
        sendResponse(responseObj);
    }
};

var messagesFromReactAppListener2 = function (msg, sender, sendResponse) {
    if(msg.type == 'highlightAdPushupAds'){
        var a = document.querySelectorAll("._ap_apex_ad");
        for (let i = 0; i < a.length; i++) {
            a[i].style.border = "5px dotted red";
        }
        window.alert(a.length + " AdPushup Ads");
        sendResponse(a.length);
    }
};

var messagesFromReactAppListener3 = function (msg, sender, sendResponse) {
    if(msg.type == 'highlightControlAds'){
        var controlAds = document.querySelectorAll("._ap_control_ad");
        for (let i = 0; i < controlAds.length; i++) {
            controlAds[i].style.border = "5px dotted red";
        }
        window.alert(controlAds.length + " Control Ads");
        sendResponse(controlAds.length);
    }
};

var messagesFromReactAppListener4 = function (msg, sender, sendResponse) {
    if(msg.type == 'forceTestVariation'){
        window.location = '?forceVariation=TEST+Variation';
    }
};

 chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener1);
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener2);
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener3);
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener4);
 