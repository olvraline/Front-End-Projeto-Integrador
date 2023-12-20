function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
}

$(() => {
    $("#save-button-desktop").click(() => {
        const values = {
            name: $('#pc-name')[0].value,
            cep: $('#pc-cep')[0].value,
            email: $('#pc-email')[0].value,
            cellphone: $('#pc-phone')[0].value
        }
        console.log(values)
        
        if (!values.name) {
            InvalidateInput("Nome não informado", "#name")
            return;
        }
        $("#pc-name").removeClass("invalid-label")

        if (!values.cep) {
            InvalidateInput("CEP não informado", "#pc-cep")
            return;
        }
        else if (values.cep.length < 8) {
            InvalidateInput("CEP inválido", "#pc-cep")
            return
        }
        $("#pc-cep").removeClass("invalid-label")

        if (!values.email) {
            InvalidateInput("E-mail não informado", "#pc-email")
            return;
        }
        else if(!values.email.includes("@")) {
            InvalidateInput("E-mail inváildo", "#pc-email")
            return
        }
        $("#pc-email").removeClass("invalid-label")

        if (!values.cellphone) {
            InvalidateInput("Telefone não informado", "#pc-phone")
            return;
        }
        else if (values.cellphone.length !==11){
            InvalidateInput("Telefone inválido", "#pc-phone")
            return;
           }
        $("#pc-cellphone").removeClass("invalid-label")
    })

    $("#save-button-mobile").click(() => {
        const values = {
            name: $('#mobile-name')[0].value,
            cep: $('#mobile-cep')[0].value,
            email: $('#mobile-email')[0].value,
            cellphone: $('#mobile-phone')[0].value
        }
        console.log(values)
        
        if (!values.name) {
            InvalidateInput("Nome não informado", "#mobile-name")
            return;
        }
        $("#mobile-name").removeClass("invalid-label")

        if (!values.cep) {
            InvalidateInput("CEP não informado", "#mobile-cep")
            return;
        }
        else if (values.cep.length < 8) {
            InvalidateInput("CEP inválido", "#mobile-cep")
            return
        }
        $("#mobile-cep").removeClass("invalid-label")

        if (!values.email) {
            InvalidateInput("E-mail não informado", "#mobile-email")
            return;
        }
        else if(!values.email.includes("@")) {
            InvalidateInput("E-mail inváildo", "#mobile-email")
            return
        }
        $("#mobile-email").removeClass("invalid-label")

        if (!values.cellphone) {
            InvalidateInput("Telefone não informado", "#mobile-phone")
            return;
        }
        else if (values.cellphone.length !==11){
            InvalidateInput("Telefone inválido", "#mobile-phone")
            return;
           }
        $("#mobile-cellphone").removeClass("invalid-label")
    })
})