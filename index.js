function validar() {
    const form = document.getElementById("form");
    const inp = document.getElementById("input");
    const fm = document.getElementById("fm");
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (inp.value == "" || inp.value == "null" || emailRegex.test(inp.value) == false) {
        inp.setAttribute("class", "input-error");
        inp.setAttribute("placeholder", "example@gmail.com");
        inp.value = "";
        fm.setAttribute("class", "form-container-error");

        /*comprobar si ya salio el error anteriormente o es la primera vez*/
        const fail = document.getElementById("fail");
        if (fail != null) {
            form.removeChild(fail);
        }
        /*crea aviso de error e insertarlo en dom*/
        const error = document.createElement("p");
        error.textContent = "Please provide a valid email address";
        error.setAttribute("class", "p-error");
        error.setAttribute("id", "fail")
        frag = document.createDocumentFragment();
        frag.append(error);
        form.insertBefore(error, but);

    } else {
        form.submit();
    }
}
const but = document.getElementById("but");
but.addEventListener("click", function() {
    validar()
})

/*tecla enter, keycode deprecated, ver alternativa*/
const inp2 = document.getElementById("input");
inp2.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        validar();
    }

})