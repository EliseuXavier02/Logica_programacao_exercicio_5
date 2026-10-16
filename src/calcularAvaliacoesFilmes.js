export function calcularAvaliacoesFilmes(listaFilmes){
    let qtdAvaliacoes = 0
    let totalAvaliacoes = 0
    let classificacao = ""

    const nenhumFilmeTemAvaliacao = listaFilmes.every(item => !item.avaliacoes || item.avaliacoes.length === 0)

    if (nenhumFilmeTemAvaliacao) {
        return { qtdAvaliacoes: 0, media: 0, classificacao: "Sem avaliações" }
    }

    listaFilmes.forEach((item) => {
        qtdAvaliacoes +=  item.avaliacoes.length

        item.avaliacoes.forEach((nota) => {
        totalAvaliacoes += nota;
        })
    })

    const mediaCalculada = totalAvaliacoes / qtdAvaliacoes
    const media = Number(mediaCalculada.toFixed(2));

    if (media < 3){
        classificacao = "Filme ruim"
    } else if (media >= 3 && media < 4){
        classificacao = "Filme razoável"
    } else if (media >=4){
        classificacao = "Filme recomendado"
    }
    
    return {
        qtdAvaliacoes,
        media,
        classificacao
    }
}