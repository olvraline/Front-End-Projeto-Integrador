$(() => {
    $("#register-button").click(() => {
        const valuesJson = {
            cpf: $("#user-cpf")[0].value,
            cardName: $("#card-name")[0].value,
            cardNumber: $("#card-number")[0].value,
            cardCvv: $("#card-cvv")[0].value,
            cardExpiringMonth: $("#expiring-date-month")[0].value,
            cardExpiringYear: $("#expiring-date-year")[0].value
        }

        console.log(valuesJson);

        if (!valuesJson.cpf) {
            InvalidateInput("CPF não informado", "#user-cpf")
            return;
        }
        else if (valuesJson.cpf.length !== 11) {
            InvalidateInput("CPF inválido", "#user-cpf")
            return;
        }
        $("#user-cpf").removeClass("invalid-label")

        if (!valuesJson.cardName) {
            InvalidateInput("Nome do cartão não informado", "#card-name")
            return
        }
        $("#card-name").removeClass("invalid-label")

        if (!valuesJson.cardNumber) {
            InvalidateInput("Número do cartão não informado", "#card-number")
            return
        }
        else if (valuesJson.cardNumber.length !== 12) {
            InvalidateInput("Número do cartão inválido", "#card-number")
            return
        }
        $("#card-number").removeClass("invalid-label")

        if (!valuesJson.cardCvv) {
            InvalidateInput("CVV do cartão não informado", "#card-cvv")
            return
        }
        else if (valuesJson.cardCvv.length !== 3) {
            InvalidateInput("CVV inválido", "#card-cvv")
        }
        $("#card-cvv").removeClass("invalid-label")

        if (!valuesJson.cardExpiringYear) {
            InvalidateInput("Ano de vencimento do cartão não informado", "#expiring-date-year")
            return
        }
        else if (valuesJson.cardExpiringYear.length !== 4 || parseInt(valuesJson.cardExpiringYear) < 2022) {
            InvalidateInput("Ano de vencimento inválido", "#expiring-date-year")
        }
        $("#expiring-date-year").removeClass("invalid-label")
    })
})

function InvalidateInput(msg="", id="") {
    alert(msg)
    $(id).addClass("invalid-label")
}