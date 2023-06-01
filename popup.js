$(function(){
    var color = $('#fontColor').val() ;
    $('#fontColor').on('change paste keyup',function(){
        color = $(this).val() ;
    }) ;

    // $('#btnChange').click(function(){
    //     chrome.tabs.query({active:true,currentWindow:true},
    //         function(tabs){
    //             console.log("ssfg") ;
    //         chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor",clickedColor:color}) ;
    //     }) ;
    // }) ;

    $('#btnChange').click(function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, async function(tabs) {
            await chrome.tabs.sendMessage(tabs[0].id, {
                todo: "changeColor",
                clickedColor: color
            });
        });
    });

    // $('#btnChange').click(function(){
    //     console.log("Hello World") ;
    // }) ;

}) ;