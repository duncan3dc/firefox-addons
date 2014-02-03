var abbreviations = {

	"MP"		:	"Portnoy",
	"JLB"		:	"Labrie",
	"JR"		:	"Jordan",
	"JP"		:	"Petrucci",
	"MM"		:	"Mangini",
	"JM"		:	"Myung",
	"JMX"		:	"Myung",
	"KM"		:	"Kevin Moore",

	"WDADU"		:	"When Dream and Day Unite",

	"I&W"		:	"Images and Words",
	"PMU"		:	"Pull Me Under",
	"TTT"		:	"Take The Time",
	"UAGM"		:	"Under a Glass Moon",
	"WFS"		:	"Wait for Sleep",
	"LTL"		:	"Learning to Live",

	"CIAW"		:	"Caught in a Web",
	"LSOAD"		:	"Lifting Shadows off a Dream",
	"SDV"		:	"Space-Dye Vest",

	"FII"		:	"Falling Into Infinity",

	"ACOS"		:	"A Change of Seasons",

	"SFAM"		:	"Scenes From a Memory",
	"TDOE"		:	"The Dance of Eternity",
	"TSCO"		:	"The Spirit Caries On",

	"SDOIT"		:	"Six Degrees of Inner Turbulance",
	"TGP"		:	"The Glass Prison",
	"TGD"		:	"The Great Debate",

	"TOT"		:	"Train of Thought",
	"TDS"		:	"This Dying Soul",
	"HTF"		:	"Honor Thy Father",
	"SOC"		:	"Stream of Consciousness",
	"ITNOG"		:	"In the Name of God",

	"8VM"		:	"Octavarium",
	"TROAE"		:	"The Root of All Evil",
	"ALW"		:	"Answer Lies Within",
	"IWBY"		:	"I Walk Beside You",

	"SC"		:	"Systematic Chaos",
	"ITPOE"		:	"In the Presence of Enemies",
	"CM"		:	"Constant Motion",
	"TDEN"		:	"The Dark Eternal Night",
	"POW"		:	"Prophets of War",
	"TMOLS"		:	"The Ministry of Lost Souls",

	"BC&SL"		:	"Black Clouds & Silver Linings",
	"BCSL"		:	"Black Clouds & Silver Linings",
	"ANTR"		:	"A Nightmare to Remember",
	"AROP"		:	"A Rite of Passage",
	"TSF"		:	"The Shattered Fortress",
	"TBOT"		:	"The Best of Times",
	"TCOT"		:	"The Count of Tuscany",

	"ADTOE"		:	"A Dramatic Turn of Events",
	"OTBOA"		:	"On the Backs of Angels",
	"BMUBMD"	:	"Build Me Up, Break Me Down",
	"LNF"		:	"Lost Not Forgotten",
	"TITL"		:	"This Is The Life",
	"BITS"		:	"Bridges In The Sky",
	"FFH"		:	"Far From Heaven",
	"BAI"		:	"Breaking All Illusions",
	"BTS"		:	"Beneath The Surface",

	"DT12"		:	"Self-Titled",
	"FAS"		:	"False Awakening Suite",
	"TEI"		:	"The Enemy Inside",
	"TLG"		:	"The Looking Glass",
	"EM"		:	"Enigma Machine",
	"TBP"		:	"The Bigger Picture",
	"BTV"		:	"Behind The Veil",
	"STR"		:	"Surrender To Reason",
	"AFTR"		:	"Along For The Ride",
	"IT"		:	"Illumination Theory",
};

function replaceAbbreviations(node) {

	if(node.nodeType == 3) {
		for(var key in abbreviations) {
			var regex = new RegExp("\\b" + key + "\\b","g");
			node.nodeValue = node.nodeValue.replace(regex,"[" + abbreviations[key] + "]");
		}

	} else if(node.nodeType == 1) {
		var children = node.childNodes;
		for(var i in children) {
			replaceAbbreviations(children[i]);
		}

	}

}

if(document.URL.indexOf("?board=") > 0) {
	var elements = document.getElementsByClassName("subject");
} else {
	var elements = document.getElementsByClassName("post");
}

for(var i in elements) {
	replaceAbbreviations(elements[i]);
}
