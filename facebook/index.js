var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "https://www.facebook.com/",
    contentScriptFile: data.url("facebook.js")
});
