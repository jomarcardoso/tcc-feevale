## Desenho Universal - Pensado, sem alterar o conteúdo

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

### Elementos semânticos

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

#### Elementos de seção

`<article>, <section>, <nav> e <aside>`, que são sempre subseções das seções ancestrais mais próximas, independentemente das seções criadas pelos elementos de cabeçalhos internos de cada subseção. [2]

`<nav>` para coleções de links (tal como uma tabela de conteúdos), `<footer>` e `<header>` para informações relacionadas ao site. Perceba que `<footer>` e `<header>` não são conteúdos de seção como o `<section>`, ao invés disso, eles existem para delimitar semanticamente partes de uma seção. [2]

##### Elementos de cabeçalho

Os elementos de cabeçalhos HTML (`<h1>` a `<h6>`) definem uma nova seção implícita quando eles não são o primeiro cabeçalho de suas seções pai, explícitas. A maneira como esta seção implícita é posicionada no contorno é definida por sua classificação relativa com o cabeçalho anterior na seção pai. Se tiver uma classificação inferior à do título do cabeçalho anterior, abrirá uma subseção implícita da seção.

1. [W3C - HTML 5.1 2nd Edition](https://www.w3.org/TR/html51/dom.html#elements)
2. [Seções e estrutura de um documento HTML5](https://developer.mozilla.org/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document)