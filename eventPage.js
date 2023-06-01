 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true},function(tabs){
            chrome.action.setIcon({path:"icon16.png",tabId:tabs[0].id}) ;
        });

    //    var obj =  chrome.tabs.query({active:true,currentWindow: true}
    //     );
    //     console.log(obj[0].id) ;
    }
});
