var self = require("sdk/self")
var pageMod = require("sdk/page-mod")

pageMod.PageMod({
    include:   "https://mail.google.com/mail/u/0/*",
    contentScriptFile: self.data.url("favicon.js")
})
