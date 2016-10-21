//var magnetUri = "magnet:?xt=urn:btih:2e0c4217a839b0bd573cfd27be00baf94e92f56b&amp;dn=Star+Trek+Beyond+2016+1080p+Bluray+x264&amp;tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&amp;tr=udp%3A%2F%2Fzer0day.ch%3A1337&amp;tr=udp%3A%2F%2Fopen.demonii.com%3A1337&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&amp;tr=udp%3A%2F%2Fexodus.desync.com%3A6969"
//chrome.tabs.create({url:magnetUri});
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null,{
        code: "console.log('This werks');  var l = document.links;var m = '' for(var i=0; i<l.length; i++) { var str =String(l[i]).slice(0,7); if(str == 'magnet:'){m = l[i].href;break;}} chrome.tabs.create({url:m});"
    });
});
