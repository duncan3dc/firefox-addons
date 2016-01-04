var data = require("sdk/self").data
var pageMod = require("sdk/page-mod")

pageMod.PageMod({
    include: "http://intranet.regatta.com/login/*",
    contentScriptFile: data.url("autologin.js")
})

pageMod.PageMod({
    include: "http://intranet.regatta.com/dashboard/*",
    contentScriptFile: data.url("removeheader.js")
})
