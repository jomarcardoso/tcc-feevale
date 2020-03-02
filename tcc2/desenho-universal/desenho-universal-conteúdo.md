## Desenho Universal - Pensado, alterando o conteúdo

Como podemos alterar o conteúdo para ser útil para todos?

- Tamanho mínimo da área de toque
- Contraste mínimo
- tamanho da fonte
- espaçamento mínimo para entender
- ícones para auxiliar
- tempos máximos de carregamento

### Tamanhos da tela

[Realinhar](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#x1-4-10-reflow)

### Alternativas em Texto

[Alternativas em Texto](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#text-alternatives)

[Eslint - alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

### Tamanho do texto

[tamanho grande](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#dfn-large-scale)

[Espaçamento de Texto](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#x1-4-12-text-spacing)

[Redimensionar Texto](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#x1-4-4-resize-text)

[Apresentação Visual](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#x1-4-8-visual-presentation)

### Tamanho da área clicável

[Tamanho da Área Clicável](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#target-size)

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

### Contraste

[Critério de Sucesso 1.4.6 Contraste (Melhorado)](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#contrast-enhanced)

[Critério de Sucesso 1.4.3 Contraste Mínimo](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#contrast-minimum)

[Critério de Sucesso 1.4.11 Contraste Não textual](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#non-text-contrast)

[Definição de contraste](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/#dfn-contrast-ratio)


# Referências

- [Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1](https://www.w3c.br/traducoes/wcag/wcag21-pt-BR)