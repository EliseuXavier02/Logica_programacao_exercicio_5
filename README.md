# Processador de Avaliações de Filmes 🎬

Projeto em Node.js desenvolvido para calcular métricas de avaliações de filmes (total de votos, média e classificação) e validar as regras de negócio por meio de testes automatizados unitários/integrados com Mocha.

---

## 📋 Regras de Negócio

Para uma lista de filmes e suas respectivas notas:
1. **Total de Votos:** Soma da quantidade de avaliações de todos os filmes.
2. **Média:** Soma total das notas dividida pelo total de votos (arredondada para 2 casas decimais).
3. **Classificação:**
   - **Média $\ge 4$:** `"Filme recomendado"`
   - **Média entre $3$ e $4$ ($3 \le \text{média} < 4$):** `"Filme razoável"`
   - **Média $< 3$:** `"Filme ruim"`
   - **Sem votos / Lista vazia:** `"Sem avaliações"` (Média `0`, Total de Votos `0`)

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES Modules)**
- **Node.js**
- **Mocha** (Framework de testes)
- **Node Assert** (Módulo nativo de asserção)

---

## 📁 Estrutura do Projeto

```text
├── fixtures/
│   └── listaFilmes.js                  # Massa de dados isolada para os testes
├── src/
│   └── calcularAvaliacoesFilmes.js     # Lógica principal da função
└── test/
    └── calcularAvaliacoesFilmes.spec.js # Suíte de testes com Mocha
