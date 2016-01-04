if (document.getElementById("login").getElementsByClassName("error").length < 1) {
    setTimeout(function() {
        var input = document.createElement("input")
        input.type = "hidden"
        input.name = "login"
        input.value = "autologin"

        var form = document.getElementById("login").getElementsByTagName("form")[0]
        form.appendChild(input)
        form.submit()
    }, 2000)
}
