# Padrões de projeto no paradigma funcional

## Padrões de design

### Componentes controlados

Estes componentes são centrais, são a soluções diretas para o requerente. Exemplo

- Carrossel
- ScrollSpy (percebe o scroll de um elemento e faz algo)
- SpinSprite (imagens 360)

Estes componentes normalmente não realizam toda a tarefa, eles são controlados, através de parâmetros enviamos com o que devem trabalhar e também por parâmetros enviamos como devem acabar suas tarefas

Aqui um exemplo de página que fiz que usa um componente controlado:
[https://www.anacapri.com.br/inverno](https://www.anacapri.com.br/inverno)

Na seção onde há um carrossel de imagens e textos que trocam automaticamente o componente central é do tipo controlado, ele recebe o elemento, a section onde ele vai atuar, e as funções de callback para e serem chamadas quando houver uma animação. O componentes que faz animação é do tipo Reativo. Existe também nesta seção um componentes de serviço que pode ser observado na versão mobile, este é responsável por chamar a ação do componente carrossel quando o usuário arrastar a tela.

### Componentes reativos

Componentes que "fazem o que for pedido" são mais específicos, no exemplo acima é o componentes que tem os métodos goRight, goLeft, e estes animam o conteúdo da seção. Componentes reativos têm um reaproveitamento menor que os controlados, pois estão mais próximos da aplicação.

- animações de tela
- componentes de layout (video, banners, grids...)

### Componentes de serviços

Estes componentes auxiliam a execução dos dois acima.

- onScroll
- onTouch
- mask
- array (alguns métodos de array).

Estes são usados pelos reativos ou enviados para os controlados de forma que sua substituição possa ser feita sem que o componentes controlado deixe de funcionar.

## Padrões estruturais

### Retorno dos dados públicos

No componente retornar os atributos e métodos que podem ser solicitados externamente.

### Callback ao final de tarefas assíncronas

Ao criar nossos componentes podemos não precisar, mas algum momento pode ser necessário, isso da poder de versatilidade, pois não precisamos prever todos os cenários e sim deixar que parte do comportamento seja enviado.

### Parâmetro não obrigatórios estarem dentre de um objeto

Isso torna claro para desenvolvedor o que ele obrigatoriamente precisa enviar e o que irá funcionar sem.	

### Valores padrões dos parâmetros

Sempre que possível criar deixar um valor padrão caso o desenvolvedor não queira especificar ou não lembre.

### Seletores específicos em um componente

Os seletores da DOM de um componente devem ser começar a busca pela raíz deste.

### Nomenclaturas

Alguns exemplos de variáveis:

- onAlgumaCoisa: função de callback
- elAlgumaCoisa: elementos da DOM
- isAlgumaCoisa: função de retorno booleano
