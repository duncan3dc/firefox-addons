setTimeout(function () {
    var link = document.createElement("link")
    link.setAttribute("type", "image/x-icon")
    link.setAttribute("rel", "shortcut icon")
    link.setAttribute("href", "http://www-10.lotus.com/ldd/insidelotusblog.nsf/dx/notesminder32b256px.png/$file/notesminder32b256px.png")

    document.querySelector("head").appendChild(link)
}, 5000)
