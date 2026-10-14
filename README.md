# Mapa Excel — conversor de mapas dos trilhos da Embalagem

Ferramenta da Patrimar Móveis (PPCP). Lê a planilha antiga do **mapa dos trilhos** de um produto
(.xlsx) e gera o mapa novo para a linha de embalagem.

## Regras aplicadas

- A caixa principal (CX 1/1) vai para a faixa do topo: início da esteira, não ocupa trilho.
- A **ordem das peças não muda**.
- Modo padrão **separar operadores ao máximo**: os postos são espalhados por todos os trilhos,
  com o espaço livre dividido por igual entre eles. O modo alternativo mantém os trilhos atuais.
- **Trilho duplo A/B** sugerido (no máximo um par por posto, peças maiores e de maior consumo),
  editável peça a peça. Isomanta marcada só no trilho A.
- Peça sem posto no mapa original herda o posto anterior e gera aviso para conferência.

## Saída

- Impressão em A4 (botão "Imprimir / salvar PDF").
- Excel com aba `MAPA NOVO` (formatada para imprimir) e aba `DADOS` (lista simples para conferência e Power BI).

## Técnico

Arquivo único (`index.html`), sem build. Bibliotecas por CDN: SheetJS 0.18.5 (leitura) e
ExcelJS 4.4.0 (exportação). A planilha é lida no navegador e não sai do computador.
Abre com a Penteadeira Princesa como exemplo.
