// Get magnet links
var links = document.links;
var magnetLink = '';
var str = '';

for(var i=0; i<links.length; i++) {
    str = String(links[i]).slice(0,7);
    if(str == 'magnet:') {
        magnetLink = links[i].href;
        break;
    }
}

// send links to background if found
if(magnetLink != '') {
    chrome.runtime.sendMessage({
        link:magnetLink
    });
}
