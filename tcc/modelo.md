# Modelo de implementação de acessibilidade

Após a seleção das conformidades a serem alcançadas, a forma de implementação será feita de forma que:

- o esforço seja gradual.
- uma etapa seja complemento da anterior.
- os níveis de conformidade das diretrizes mais baixos sejam priorizados.

## Esforço graudal

Tendo como alvo sistemas que irão crescer:

- o esforço inicial será considerado menor, pois será executado apenas uma vez.
- implementações forçadas por dicas (linters) serão de esforço menor, pois serão instruídos como fazê-las.
- o desenho universal terá parte de seu esforço subtraído, pois a implementação seria feita de alguma forma.
- a adaptação razoável será um esforço maior.

Sendo assim a criação das etapas do modelo deve priorizar:

1. Incluir ferramentas que irão fazer o trabalho do desenvolvedor sem ele perceber.
2. Incluir ferramentas que trarão dicas.
3. Implementar o sistema com componentes seguindo o desenho universal.
4. Implementar a adaptação razoável.

## Etapas complementares

As etapas vão gradualmente aumentando o controle, as ferramentas escolhidas farão o trabalho, o desenho universal será algo que todos usuários terão o mesmo conteúdo, e por fim e mais controlado a adaptação pode ser feita para tipos específicos e através do conhecimento do usuário e da forma que ele está acessando, um melhor controle de como entregar algo melhor para ele.

Para que o esforço seja gradual e a implementação possível é preciso ordenar as etapas:

- Uma etapa não deve fazer o que a outra faz com menor esforço.
- A exceção é quando deseja-se que a conformidade a ser implementada tenha mais controle.

## Priorizar Níveis de conformidade mais baixos

Ao chegar ao fim das etapas um nível de conformidade deve ser completado. Antes de começar a avaliação e implementação da próxima etapa é preciso completar as conformidades do nível anterior. Se todas as etapas forem corretamente executas as conformidades que faltarem ficam para a adaptação razoável.

## Modelo 1.0

- Selecionar etapa
- Criar um checklist com todas as conformidades

Desenho universal

- Selecionar todas as conformidades que serão implementaas pelo desenho universal.
- Preparar o ambiente de desenvolvimento com as ferramentas que irão fazer o serviço pelo desenvolvedor
- Preparar o ambiente com as ferramentas que irão controlar para o sistema ser acessível
- Definir as variáveis que irão atender as conformidades.
- Criar ou usar componentes visando acessibilidade.
- Desenvolver no desenho universal

Adaptações

- Desenvolver adaptações baseadas em informações vindas do usuário sem ele explicitamente informar (inteligentes).
- Desenvolver adaptações e a opção para o usuário selecionar.
