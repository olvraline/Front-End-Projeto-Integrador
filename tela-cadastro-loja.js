function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
 }


 $(() => {
    $("#button-continuar-loja").click(() => {
        const valuesJson = {
            nomeloja: $("#nome-loja")[0].value,
            descricao: $("#descricao-loja")[0].value,
            cep: $("#cep-loja")[0].value,
            estado: $("#estado")[0].value,
            cidade: $("#cidade")[0].value,
            bairro: $("#bairro")[0].value,
            rua: $("#rua")[0].value,
            numero: $("#numero")[0].value,
            complemento: $("#complemento")[0].value,
            contato: $("#contato-loja")[0].value,
            cpf: $("#cpf-loja")[0].value,
            cnpj: $("#cnpj-loja")[0].value,
            senha: $("#senha-confirmar-loja")[0].value
        }

        console.log(valuesJson);

        if (!valuesJson.nomeloja){
            InvalidateInput("Nome da loja não informado", "#nome-loja")
            return;
        }
        
        $("#nome-loja").removeClass("invalid-label")

        if (!valuesJson.descricao){
            InvalidateInput("Descrição não informada", "#descricao-loja")
            return;
        }
        
        $("#descricao-loja").removeClass("invalid-label")
        
        if (!valuesJson.cep){
            InvalidateInput("CEP não informado", "#cep-loja")
            return;
           }
        else if (valuesJson.cep.length !==8){
            InvalidateInput("CEP inválido", "#cep-loja")
            return;
           }
         $("#cep-loja").removeClass("invalid-label")

        if (valuesJson.estado == [1]){
            InvalidateInput("Estado não informado", "#estado")
            return;
        }
         $("#estado").removeClass("invalid-label")
         
        if (valuesJson.cidade == [1]){
            InvalidateInput("Cidade não informada", "#cidade")
            return;
        }
         $("#cidade").removeClass("invalid-label")
         
        if (!valuesJson.bairro){
            InvalidateInput("Bairro não informado", "#bairro")
            return;
        } 
         $("#bairro").removeClass("invalid-label")
         
        if (!valuesJson.rua){
            InvalidateInput("Rua não informada", "#rua")
            return;
        } 
         $("#rua").removeClass("invalid-label")
         
        if (!valuesJson.numero){
            InvalidateInput("Número não informado", "#numero")
            return;
        } 
         $("#numero").removeClass("invalid-label")   

        if (!valuesJson.contato){
            InvalidateInput("Contato da loja não informado", "#contato")
            return;
        }
        else if (valuesJson.contato.length !==11){
            InvalidateInput("Telefone inválido", "#telefone")
            return;
        }
         $("#contato").removeClass("invalid-label")
         
        if (!valuesJson.cpf){
            InvalidateInput("Cpf não informado", "#cpf-loja")
            return;
        } 
        else if (valuesJson.cpf.length != 11){
            InvalidateInput("O cpf deve conter 11 dígitos, sendo apenas números", "#cpf-loja")
            return;
        }
         $("#cpf-loja").removeClass("invalid-label")
         
       if (!valuesJson.cnpj){
            InvalidateInput("CNPJ não informado", "#cnpj-loja")
            return;
       }
       else if (valuesJson.cnpj.length != 14){
            InvalidateInput("O CNPJ deve conter 14 dígitos, sendo apenas números", "#cnpj-loja")
            return;
       }
        $("#cnpj-loja").removeClass("invalid-label")

       if (!valuesJson.senha){
            InvalidateInput("Senha não informado", "#senha-confirmar-loja")
            return;
       }
       else if (valuesJson.senha.length <= 8){
            InvalidateInput("A senha deve conter no mínimo 8 caracteres", "#senha-confirmar-loja")
            return;
       } 
        $("#senha-confirmar-loja").removeClass("invalid-label")
    }
    )
 })
