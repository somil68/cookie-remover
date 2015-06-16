
$("#removeCookie").click(function(){
    var domain;
    chrome.tabs.getSelected(null,function(tab) {
         parsed = new UriParser(tab.url);
         console.log(tab.url);
         domain = parsed.host;
         console.log(domain);
    });
    chrome.cookies.getAll({domain: domain}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
            chrome.cookies.remove({url: "http://"+ domain + cookies[i].path, name: cookies[i].name});
        }
    });
});



