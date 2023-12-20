$(()=>{
    $("#login-button").click(()=>{
        const loginValues = {
            email : $("#user-email")[0].value,
            password : $("#user-password")[0].value
        }
        console.log(loginValues)
        if (!loginValues.email){
            alert("Campo de e-mail não preenchido!")
            $("#user-email").addClass("invalid-label")
            return
        }
        else if(!loginValues.email.includes("@")){
            alert("Campo de e-mail não preenchido corretamente!")
            $("#user-email").addClass("invalid-label")
            return
        }

        $("#user-email").removeClass("invalid-label")

        if (!loginValues.password){
            alert("Campo de senha não preenchido!")
            $("#user-password").addClass("invalid-label")
            return
        }
        else if(loginValues.password.length < 8){
            alert("Campo de senha não preenchido corretamente!")
            $("#user-password").addClass("invalid-label")
            return
        }
        $("#user-password").removeClass("invalid-label")

        $("#login-button-link").attr("href", "./editar_perfil.html")
      
    })
})

