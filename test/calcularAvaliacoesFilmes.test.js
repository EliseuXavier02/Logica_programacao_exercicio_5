import assert from 'node:assert';
import { calcularAvaliacoesFilmes } from "../src/calcularAvaliacoesFilmes.js";
import { 
    listaFilmesRecomendo, 
    listaFilmesRazoavel, 
    listaFilmesRuim,
    listaFilmesSemAvaliacoes
} from "../fixtures/listaFilmes.js";

describe('Calcular as avaliações dos filmes', () => {

    it('CT01 - Deve classificar como "Filme recomendado" quando a média for >= 4', () => {
        const resultadoEsperado = {
            qtdAvaliacoes: 5,
            media: 5.6,
            classificacao: "Filme recomendado"
        }

        const resultadoEncontrado = calcularAvaliacoesFilmes(listaFilmesRecomendo)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })

    it('CT02 - Deve classificar como "Filme razoável" quando a média for <= 4 e >= 3', () => {
        const resultadoEsperado = {
            qtdAvaliacoes: 5,
            media: 3.6,
            classificacao: "Filme razoável"
        }

        const resultadoEncontrado = calcularAvaliacoesFilmes(listaFilmesRazoavel)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })

     it('CT03 - Deve classificar como "Filme ruim" quando a média for < 3', () => {
        const resultadoEsperado = {
            qtdAvaliacoes: 4,
            media: 2.5,
            classificacao: "Filme ruim"
        }

        const resultadoEncontrado = calcularAvaliacoesFilmes(listaFilmesRuim)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })

    it('CT04 - Deve classificar como "Sem avaliações" quando o filme não receber avaliação', () => {
        const resultadoEsperado = {
            qtdAvaliacoes: 0,
            media: 0,
            classificacao: "Sem avaliações"
        }

        const resultadoEncontrado = calcularAvaliacoesFilmes(listaFilmesSemAvaliacoes)

        assert.deepStrictEqual(resultadoEncontrado, resultadoEsperado)
    })
   
});