chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null,{
        code: "var l = document.links;var m = ''; for(var i=0; i<l.length; i++) { var str =String(l[i]).slice(0,7); if(str == 'magnet:'){m = l[i].href;break;}} window.open(m,'_self');"
    });
});
