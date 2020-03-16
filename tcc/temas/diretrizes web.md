# Diretrizes web

1. [Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/)
2. [Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/)
3. [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=134%2C143%2C211#keyboard-accessible)

## Descrição

As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1 abrangem diversas recomendações com a finalidade de tornar o conteúdo da Web mais acessível. Seguir estas diretrizes irá tornar o conteúdo acessível a um maior número de pessoas com deficiência... [1]

As WCAG 2.1 foram desenvolvidas através do processo W3C (em inglês) em colaboração com pessoas e organizações em todo o mundo, com o objetivo de fornecer um padrão compartilhado referente à acessibilidade do conteúdo da Web, que vá ao encontro das necessidades das pessoas, das organizações e dos governos em nível internacional. [1]

Os critérios de sucesso das WCAG 2.1 são escritos como declarações testáveis, que não se referem à tecnologias específicas. [1]

Princípios - No topo estão quatro princípios que constituem a base da acessibilidade na Web: perceptível, operável, compreensível e robusto. [1]

A fim de atender as necessidades dos diferentes grupos e situações, são definidos três níveis de conformidade: A (o mais baixo), AA e AAA (o mais elevado). [1]

# Diretrizes - Perceptível

As informações e os componentes da interface do usuário devem ser apresentados em formas que possam ser percebidas pelo usuário.

## Diretriz 1.1 Alternativas em Texto

Fornecer alternativas textuais para qualquer conteúdo não textual, para que possa ser transformado em outras formas de acordo com as necessidades dos usuários, tais como impressão com tamanho de fontes maiores, braille, fala, símbolos ou linguagem mais simples.

### Critério de Sucesso 1.1.1 Conteúdo Não Textual

(Nível A)

Todo o conteúdo não textual que é exibido ao usuário tem uma alternativa textual que serve a um propósito equivalente, exceto para as situações indicadas abaixo.

**Técnicas:**

- colocar alt nas imagens
- colocar title nos links

**Implementações:**

- eslint a11y irá forçar o usuário a colocar o alt nas imagens
- criar um componente de imagem que exiga alt
- criar um componente de âncora que exija title

## Diretriz 1.2 Mídias com base em tempo

Fornecer alternativas para mídias baseadas em tempo.

### Critério de Sucesso 1.2.1 Apenas Áudio e Apenas Vídeo (Pré-gravado)

