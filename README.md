# Mapa Excel — conversor de mapas dos trilhos da Embalagem

Ferramenta da Patrimar Móveis (PPCP). Lê a planilha antiga do **mapa dos trilhos** de um produto
(.xlsx, .xls, .xlsm) e gera o mapa novo para a linha de embalagem. Também cria um mapa **do zero**.

## Regras aplicadas

- A caixa principal (CX 1/1) vai para a faixa do topo: início da esteira, não ocupa trilho.
- A **ordem das peças não muda**. Na lista dá para corrigir com ↑ ↓, apagar (✕), incluir peça no mesmo posto
  ("+ Peça no OP") e criar posto novo.
- Modo padrão **separar operadores**: trilhos livres entre os postos, divididos por igual, até o
  **máximo de livres entre postos** (padrão 3, fica lembrado no computador). O que sobra fica no fim da linha.
  O modo alternativo mantém os trilhos atuais.
- **PERFIL H não ocupa trilho**: vai em cima da peça vizinha do mesmo posto (a de cima; se não houver, a de baixo).
- **Trilho só com ISOMANTA** no mapa original (estoque do posto) entra como trilho de ISOMANTA, com aviso.
- **Trilho duplo A/B** sugerido (no máximo um par por posto, peças maiores e de maior consumo),
  editável peça a peça. Isomanta marcada só no trilho A.
- Peça sem posto no mapa original herda o posto anterior e gera aviso para conferência.

## Leitura da planilha

- Cada título "MAPA DOS TRILHOS" é um mapa. Produto com **mais de um volume** (ex.: Home Ripado CX 01/03, 02/03, 03/03)
  tem um mapa por caixa; escolha em "Mapa da planilha". Sem escolha, usa o 1º mapa da última aba com MAPA no nome.
- Mapas antigos sem a linha "DESCRIÇÃO DA PEÇA": a coluna das peças é achada pelo conteúdo; quantidade na frente
  ("2. TRAVA") e esquema no texto ("Nº 02") são lidos. Posto aceita "OP 01", "OP-01" e "OP.01".
- Trilho ocupando várias linhas mescladas conta como **um trilho**: ISOMANTA repetida na 2ª linha não gera aviso,
  e duas peças no mesmo trilho (ex.: ISOPOR + PERFIL H) ficam juntas, com aviso.
- O nome do produto sai da frente da descrição mesmo abreviado (título "BUFFET 2 PTS PRISM",
  descrição "BUFFET 2 PT PRISM TAMPO" → "TAMPO").
- Nº do esquema: lido da coluna "Nº ESQUEMA"; se vazia, do número após MDF/MDP ou de "Nº" na descrição.

## Saída

- Impressão em A4 (botão "Imprimir / salvar PDF").
- Excel com aba `MAPA NOVO` (formatada para imprimir) e aba `DADOS` (lista simples para conferência e Power BI).
- O Excel gerado pode ser **aberto de novo no app** para continuar editando (é assim que se guarda um mapa criado do zero).

## Instalar

Abra o site no Chrome ou Edge e clique em **Instalar app** (no topo) ou no ícone de instalar da barra de endereço.
No celular Android: menu ⋮ → "Instalar app". No iPhone/iPad (Safari): Compartilhar → "Adicionar à Tela de Início".
Instalado, funciona sem internet; quando há internet, sempre abre a versão mais nova do site.

## Técnico

Sem build. `index.html` (app), `vendor/` (SheetJS 0.18.5 para leitura, ExcelJS 4.4.0 para exportação — servidos
pelo próprio site, sem CDN), `sw.js` + `manifest.webmanifest` + `icons/` (app instalável).
Ao trocar uma biblioteca ou ícone, mude `VERSAO` em `sw.js`. A planilha é lida no navegador e não sai do computador.
Abre vazio: abra a planilha do mapa ou crie um mapa do zero.
