var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: [
		"http://www.dreamtheaterforums.org/boards/index.php?topic=*",
		"http://www.dreamtheaterforums.org/boards/index.php?board=*"
	],
	contentScriptFile: data.url("dtf-abbr.js")
});
