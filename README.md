# Mapa Excel — conversor de mapas dos trilhos da Embalagem

Ferramenta da Patrimar Móveis (PPCP). Lê a planilha antiga do **mapa dos trilhos** de um produto
(.xlsx, .xls, .xlsm) e gera o mapa novo para a linha de embalagem. Também cria um mapa **do zero**.

## Regras aplicadas

- A caixa principal (CX 1/1) vai para a faixa do topo: início da esteira, não ocupa trilho.
- A **ordem das peças não muda**. Na lista dá para corrigir com ↑ ↓, apagar (✕) e adicionar peças.
- Modo padrão **separar operadores ao máximo**: os postos são espalhados por todos os trilhos,
  com o espaço livre dividido por igual entre eles. O modo alternativo mantém os trilhos atuais.
- **Trilho duplo A/B** sugerido (no máximo um par por posto, peças maiores e de maior consumo),
  editável peça a peça. Isomanta marcada só no trilho A.
- Peça sem posto no mapa original herda o posto anterior e gera aviso para conferência.

## Leitura da planilha

- Usa a aba que tem a coluna "DESCRIÇÃO DA PEÇA". Se houver mais de uma, usa a última com MAPA no nome,
  avisa e deixa trocar em "Aba da planilha".
- Trilho ocupando várias linhas mescladas conta como **um trilho**: ISOMANTA repetida na 2ª linha não gera aviso,
  e duas peças no mesmo trilho (ex.: ISOPOR + PERFIL H) ficam juntas, com aviso.
- O nome do produto sai da frente da descrição mesmo abreviado (título "BUFFET 2 PTS PRISM",
  descrição "BUFFET 2 PT PRISM TAMPO" → "TAMPO").
- Nº do esquema: lido da coluna "Nº ESQUEMA"; se vazia, do número após MDF/MDP na descrição.

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
Abre com a Penteadeira Princesa como exemplo.
