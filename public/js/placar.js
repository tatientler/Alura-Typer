function inserePlacar(){
    let corpoTabela = $('.placar').find('tbody')
    let usuario = "Tati"
    let numeroPalavras = $('#contador-palavras').text()
    let linha = novaLinha(usuario, numeroPalavras)
    linha.find('.botao-remover').click(removeLinha)

    corpoTabela.prepend(linha)
}

function novaLinha(usuario, numeroPalavras){
    let linha = $('<tr>')
    let colunaUsuario = $('<td>').text(usuario)
    let colunaPalavras = $('<td>').text(numeroPalavras)
    let colunaRemover = $('<td>')

    let link = $('<a>').addClass('botao-remover').attr('href', '#')
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete')

    link.append(icone)
    colunaRemover.append(link)
    linha.append(colunaUsuario).append(colunaPalavras).append(colunaRemover)

    return linha
}

function removeLinha(event){
    event.preventDefault()
    $(this).parent().parent().remove()
}