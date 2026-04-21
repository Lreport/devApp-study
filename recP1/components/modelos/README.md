# Modelos de Componentes

Esta pasta guarda modelos base para estudos e projetos futuros.

Objetivo:
- servir como guia de estrutura
- mostrar os pads mais comuns de interface
- evitar copiar componentes literais das telas atuais

Sugestao de uso:
- copie o modelo mais proximo do que voce precisa
- renomeie o arquivo e o componente
- troque textos, cores, icones e imagens
- ajuste `props` conforme a necessidade da tela

Modelos incluidos:
- `modelo-cabecalho-busca.tsx`
- `modelo-rodape-navegacao.tsx`
- `modelo-card-produto.tsx`
- `modelo-card-categoria.tsx`
- `modelo-carrossel-banner.tsx`
- `modelo-lista-horizontal.tsx`
- `modelo-secao-titulo.tsx`

Regra pratica:
- bloco repetido -> componente
- lista horizontal -> `FlashList`
- item da lista -> componente separado
- cabecalho/rodape -> componente proprio quando se repetir
