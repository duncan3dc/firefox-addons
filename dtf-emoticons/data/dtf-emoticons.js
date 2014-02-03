var $ = document.querySelector.bind(document);

$("#smileyBox_message a").remove();

var div = $("#smileyBox_message div");

var emoticons = {
	"isyl"		:	false,
	"footloose"	:	"tarddance",
	"flame"		:	"flamethrower",
};

for(var key in emoticons) {
	var val = emoticons[key];
	if(!val) {
		val = key;
	}

	var img = document.createElement("img");
	img.setAttribute("src","http://www.dreamtheaterforums.org/boards/Smileys/default/" + val + ".gif");
	img.setAttribute("data-emoticon",key);
	img.setAttribute("align","bottom");
	img.setAttribute("style","cursor:pointer;");
	img.addEventListener("click",function() {
		$("#message").value = $("#message").value + " :" + this.getAttribute("data-emoticon") + ": ";
	});

	div.appendChild(img);
}
