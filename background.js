var link = ''

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

      link = request.link;

      chrome.browserAction.setIcon({
              path: './icon-success.png',
              tabId: sender.tab.id
          });
      chrome.browserAction.setTitle({
              title: 'Click to download torrents',
              tabId: sender.tab.id
          });
  });



chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null,{
        code: 'var magnetLink=' + link + ';'
    },function() {
        chrome.tabs.executeScript(null,{file:'worker_script.js'});
    });
});
