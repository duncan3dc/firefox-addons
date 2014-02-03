var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: "http://www.dreamtheaterforums.org/boards/index.php?action=post*",
	contentScriptFile: data.url("dtf-emoticons.js")
});
