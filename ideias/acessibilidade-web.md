# Acessibilidade na Web

Até onde podemos ir para que todos recebam o mesmo conteúdo?

- Babel
- polyfills
- Normalize
- Post CSS
- `<noscript>`

## Abordagens de desenvolvimento

*"Graceful degradation Providing an alternative version of your functionality or making the user aware of shortcomings of a product as a safety measure to ensure that the product is usable. Progressive enhancement Starting with a baseline of usable functionality, then increasing the richness of the user experience step by step by testing for support for enhancements before applying them. You may think that these two approaches sound very similar, and that they should give you pretty much the same result, but there are differences to take note of, which we’ll look at below."* Graceful degradation versus progressive enhancement

*"The web was invented and defined to be used with any display device, in any language, anywhere you want. The only thing expected of end users is that they are using a browsing device that can reach out to the web and understand the protocols used to transmit information — http, https, ftp and so on."* Graceful degradation versus progressive enhancement

A web não especifica como será acessada.

*"We work in the unknown and we need to find a way to make it work. This is where both graceful degradation and progressive enhancement come into play."* Graceful degradation versus progressive enhancement

*"So, graceful degradation is the practice of building your web functionality so that it provides a certain level of user experience in more modern browsers, but it will also degrade gracefully to a lower level of user in experience in older browsers. This lower level is not as nice to use for your site visitors, but it does still provide them with the basic functionality that they came to your site to use; things do not break for them. Progressive enhancement is similar, but it does things the other way round. You start by establishing a basic level of user experience that all browsers will be able to provide when rendering your web site, but you also build in more advanced functionality that will automatically be available to browsers that can use it. In other words, graceful degradation starts from the status quo of complexity and tries to fix for the lesser experience whereas progressive enhancement starts from a very basic, working example and allows for constant extension for future environments. Degrading gracefully means looking back whereas enhancing progressively means looking forward whilst keeping your feet on firm ground.In other words, graceful degradation starts from the status quo of complexity and tries to fix for the lesser experience whereas progressive enhancement starts from a very basic, working example and allows for constant extension for future environments. Degrading gracefully means looking back whereas enhancing progressively means looking forward whilst keeping your feet on firm ground."* Graceful degradation versus progressive enhancement

*"It can be said that both progressive enhancement and graceful degradation try to do the same thing: keep our products useful to every user. Progressive enhancement is a more sophisticated and at the same time stable way of assuring that but it takes more time and effort. Graceful degradation can be used more easily as a patch for an already existing product; it means harder maintenance later on, but requires less initial work."* Graceful degradation versus progressive enhancement

### Graceful degradation

*"This is a top-down approach in which you build the best possible site using all the features you want, then tweak it to make it work on older browsers. This can be harder to do, and less effective, than progressive enhancement, but may be useful in some cases."* Browser detection using the user agent

### Progressive enhancement

*"This design technique involves developing your Web site in 'layers', using a bottom-up approach, starting with a simpler layer and improving the capabilities of the site in successive layers, each using more features."* Browser detection using the user agent

## Regras de acessibilidade para alcançar maior público

- contraste mínimo
- tamanho da fonte
- padding mínimo para ser clicável
- espaçamento mínimo para entender
- ícones para auxiliar
- tempos máximos de carregamento

## Referências

- [Browser detection using the user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Graceful degradation versus progressive enhancement](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)