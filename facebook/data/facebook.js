var $ = document.querySelector.bind(document)

$("#pagelet_ego_pane").remove()
$("#rightCol").setAttribute("style","width:400px;position:absolute;right:0px;z-index:100;")
$("#contentArea").style.width = "600px"
$("#pagelet_rhc_footer").remove()

var home = $("#navHome");
home.nextSibling.remove()
home.remove()
