$(function() {
    const anuncio = {
        titulo: "",
        descricao: "",
        categoria: "",
        tipo: "",
        valor: "R$ ",
        quantidadeDisponivel: 10
    };

    // preenche as caixas de texto.
    $.each(anuncio, function(campo, valor) {
        $("#" + campo).val(valor);
    });

    // evento de para enviar formulario.
    $("form").submit(function(event) {
        event.preventDefault();

        // pega os dados preenchidos.
        const dadosFormulario = {};
        $("form :input").each(function() {
            dadosFormulario[this.id] = $(this).val();
        });

        // exibe no console o que foi preenchido.
        console.log("Dados do formulário:", dadosFormulario);

        // pega a categoria que foi clicada e exibe no console.
        const categoriaSelecionada = $(".categoria-button button.selected").text();
        console.log("Dados do formulário:", dadosFormulario);
        console.log("Categoria selecionada:", categoriaSelecionada);
    });

    //evento de clique onde aparece as cores diferentes nos botoes das categorias.
    $(".categoria-button button").click(function() {
        //mostra o botao selecionado.
        $(".categoria-button button").removeClass("selected");
        $(this).addClass("selected");
    });
});