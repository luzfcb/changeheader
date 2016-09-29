chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name == 'User-Agent') {
            details.requestHeaders[i].value = "Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
            break;
        }
        else {
            details.requestHeaders.push({
                name: 'User-Agent',
                value: 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
            });
        }
    }

    // console.log(details.requestHeaders);

    return {requestHeaders: details.requestHeaders};
}, {
    urls: ["https://mangas.zlx.com.br/ler*"]
}, ["requestHeaders", "blocking"]);
