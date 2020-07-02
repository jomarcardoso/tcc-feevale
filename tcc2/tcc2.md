Dizer no que se sustenta a proposta e o que está propondo.

Mostrar o modelo proposto e explicar ele.

A WCAG 2.0 cobre 50,4% das necessidades dos cegos (espanhol)

# O que definir antes de começar

Nível de conformidade.

## Paleta de cores

Cores que tenham o contraste adequado com a conformidade.

## Título das páginas

Ver estratégias e documentar o mapa das páginas com nomes bons.

# Componentes

Os componentes seguem a ideia do livro Uma Linguagem de Padrões, onde será solucionado um problema apenas uma vez.

## Resgistro de componentes acessíveis

Há várias abordagens (duas) para registrar os componentes acessíveis.

- Colocar em código um comentário.
- No guia de estilos marcar o componente como acessível.

## Definição das variáveis

As variáveis são importante pois são as conexões de um componente com outro,

## Implementando com Desenho Universal - automatizado

Começando pela forma mais fácil de fazer algo, que é quando pouco e ou nenhum esforço é empenhado para algo ficar pronto. As formas que serão apresentadas nesta seção terão maior parte de seu esforço no adquirir conhecimento e na implementação das ferramentas propostas.

Quando a internet foi criada, liderada por Tim Berners-Lee, ela não especificou como seria usada ou acessada, apenas o que usaria o protocolo http. (Procurar a referência) Os aparelhos de diversas marcas e modelos são então um desafio para ser previsto para quem está desenvolvendo uma aplicação.

### Navegadores

Além da variedade de navegadores existentes há também as suas versões ainda desatualizadas. Muitas vezes esses navegadores desatualizados são em empresas.

### Diversidade no Javascript

Algumas ferramentas:

- Babel
- polyfills

### Diversidade no CSS

- Normalize
- Post CSS

### Diversidade no HTML

- Normalize

## Desenho Universal - Pensado, alterando o conteúdo

A segunda etapa é então fazer o Desenho Unviversal de forma pensada. Os profissionais envolvidos devem saber as possíveis diferenças e criar soluções acessíveis.
O que podemos fazer por padrão para alcançar um público maior sem alterar o conteúdo?

- atributo HTML `aria`
- atributo HTML `type`
- elementos HTML semânticos `h1`, `head`, `tbody`, `figure`, `figcaption`...
- atributo HTML `alt`
- atributo HTML `title` pode ser usado em links
- manter o atributo CSS `outline` em elementos selecionáveis
- atributo HTML `tabindex`
- atributo HTML `for`
- atributo HTML `role`
- atributo HTML `placeholder`

Como podemos alterar o conteúdo para ser útil para todos?

- Tamanho mínimo da área de toque
- Contraste mínimo
- tamanho da fonte
- espaçamento mínimo para entender
- ícones para auxiliar
- tempos máximos de carregamento

## Elementos semânticos

"This semantic information is critical to assistive technologies. For example, a screen reader will query the browser for semantic information and use that information to present the document or application in synthetic speech. In some cases assistive technologies use semantic information to provide additional functionality. A speech recognition tool might provide a voice command for moving focus to the start of the main element for example." [1]

A validação da página pode ser feita em `https://validator.w3.org/`

Esse CSS é usado para navegadores que não suportam as novas tags semanticas do HTML5.

```css
section, article, aside, footer, header, nav, hgroup {
  display:block;
}
```

Esse script é usado no internet explorer antes da versão 8.

```html
<script>
  document.createElement("header");
  document.createElement("footer");
  document.createElement("section");
  document.createElement("aside");
  document.createElement("nav");
  document.createElement("article");
  document.createElement("hgroup");
  document.createElement("time");
</script>
```

### Elementos de seção

`<article>, <section>, <nav> e <aside>`, que são sempre subseções das seções ancestrais mais próximas, independentemente das seções criadas pelos elementos de cabeçalhos internos de cada subseção. [2]

`<nav>` para coleções de links (tal como uma tabela de conteúdos), `<footer>` e `<header>` para informações relacionadas ao site. Perceba que `<footer>` e `<header>` não são conteúdos de seção como o `<section>`, ao invés disso, eles existem para delimitar semanticamente partes de uma seção. [2]

#### Elementos de cabeçalho

Os elementos de cabeçalhos HTML (`<h1>` a `<h6>`) definem uma nova seção implícita quando eles não são o primeiro cabeçalho de suas seções pai, explícitas. A maneira como esta seção implícita é posicionada no contorno é definida por sua classificação relativa com o cabeçalho anterior na seção pai. Se tiver uma classificação inferior à do título do cabeçalho anterior, abrirá uma subseção implícita da seção.

1. [W3C - HTML 5.1 2nd Edition](https://www.w3.org/TR/html51/dom.html#elements)
2. [Seções e estrutura de um documento HTML5](https://developer.mozilla.org/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document)

### Tamanho da área clicável

Um exemplo de um componente criado apenas com CSS que será reaproveitado em outros elementos para torná-los acessíveis.

```scss
$área-mínima-clicável: 44px;

%elemento-clicável {
  min-height: $área-mínima-clicável;
  min-width: $área-mínima-clicável;
}

label,
a,
button {
  @extend %elemento-clicável;
}
```

## Testar

A avaliação pode ser feita enquanto escreve o código, com linter a11y.


## Páginas completas

Quando todos os componentes que constituem uma página estiverem prontos, a avaliação passa a ser feita pela equipe de testes.

# Avaliação da equipe de testes

Assim que uma nova página torna-se acessível ela passa por uma primeira revisão recomendada pela W3C chamada "Checklist de Avaliação Inicial".

# Ferramentas

- Web Accessibility Checker (AChecker), Test de
- Accesibilidad Web (TAW), WAVE y eXaminator (Baazeem and Al-Khalifa 2015)
- Muave
- WaaT (The web Accessibility Assessment Tool)
- Social4all uma plataforma onde cada usuário deficiente contribui colocando melhorias e sem mexer no código ele consegue apresentar algo mais acessível
- AES
- [Hera – Teste a acessibilidade do seu site](https://blogcdigital.wordpress.com/2009/01/16/hera-teste-a-acessibilidade-do-seu-site/)
- [w3](https://www.w3.org/WAI/ER/tools/)

# Avaliação inicial

### Título

O que da para verificar de forma automática em um título?
- se existe;
- quantidade de caracteres;

O peso de cada teste, por exemplo em um título da página, com a verificação automática da para dizer que tem título, mas é um título bom?

### Cores

Algumas ferramentas de auxílio.

- https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html
- https://contrastchecker.com/
- https://www.color-blindness.com/coblis-color-blindness-simulator/

### Informações

imagens decorativas não devem ter informações que distraiam o usuário cego.
alt nas imagens
title nos link

### Navegação

Sobre a navegação com teclado.

- Como faz?
- Como pula uma seção?
- Como melhorar?