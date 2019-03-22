chrome.commands.onCommand.addListener(function (command) {
    if (command === "next") {
        searchYoutube();
    }
});

function searchYoutube() {
    chrome.tabs.query(
        {
            url: "https://www.youtube.com/watch?v=*"
        },
        function (tabs) {
            if (tabs.length) {
                chrome.tabs.executeScript(tabs[0].id, {
                    code: '(' + modifyDOM + ')();'
                });
            }
        }
    );
}

function modifyDOM() {
    let next_btns = document.getElementsByClassName("ytp-next-button");
    if (next_btns.length) {
        next_btns[0].click();
    }
}