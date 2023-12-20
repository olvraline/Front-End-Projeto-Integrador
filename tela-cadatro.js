function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
 }


$(() => {
    $("#button-continuar").click(() => {
        const valuesJson = {
            nome: $("#nome")[0].value,
            data: $("#data")[0].value,
            cep: $("#cep")[0].value,
            telefone: $("#telefone")[0].value,
            email: $("#email")[0].value,
            password: $("#password")[0].value

        }

        console.log(valuesJson);

        if (!valuesJson.nome){
            InvalidateInput("Nome não informado", "#nome")
            return;
        }

       $("#nome").removeClass("invalid-label")

       if (!valuesJson.data){
            InvalidateInput("Data de nascimento não informada", "#data")
            return;
       }

       $("#data").removeClass("invalid-label")


       if (!valuesJson.cep){
        InvalidateInput("CEP não informado", "#cep")
        return;
       }
       else if (valuesJson.cep.length !==8){
        InvalidateInput("CEP inválido", "#cep")
        return;
       }
       $("#cep").removeClass("invalid-label")

       if (!valuesJson.telefone){
        InvalidateInput("Telefone não informado", "#telefone")
        return;
       }
       else if (valuesJson.telefone.length !==11){
        InvalidateInput("Telefone inválido", "#telefone")
        return;
       }
       $("#telefone").removeClass("invalid-label")

       if (!valuesJson.email){
        InvalidateInput("E-mail não informado", "#email")
        return;
       }
       else if (!valuesJson.email.includes("@")){
            InvalidateInput("E-mail inválido")
            return;
       }
       $("#email").removeClass("invalid-label")

       if (!valuesJson.password){
        InvalidateInput("Senha não informada", "#password")
        return;
       }
       else if(valuesJson.password.length < 8){
        InvalidateInput("A senha deve ter no mínimo 8 caracteres.")
        return;
       }
       $("#password").removeClass("invalid-label")
       
       $("#login-button-link").attr("href", "./index.html")
    }   
    )
})

 