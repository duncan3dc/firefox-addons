var $ = document.querySelector.bind(document)

$("#pagelet_ego_pane").remove()
$("#rightCol").setAttribute("style","width:380px;position:absolute;right:0px;z-index:100;")
$("#contentArea").style.width = "600px"
$("#pagelet_rhc_footer").remove()

// Remove the extra home link, we already have the F logo to get home
var home = $("div[data-click='home_icon']");
home.parentNode.remove()
