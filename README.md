# Netflix-Clone

## Link: http://netflix-clone-v1.surge.sh/

## Considerações iniciais

De longe foi o projeto onde mais me exigiu conhecimento técnicos, graças a ele consegui vencer os desafios que foram propostos pela provi e alguns pessoais. Aprendi diversos conceitos do styled components e como o código consegue estar organizado e padronizado utilizando o Atomic Design que até então não havia tido contato anteriormente e por fim o storybook.

### Instruções para o projeto

Utilize este comando em sua pasta de projetos: 

##### git clone https://github.com/AdrianAmerico/netflix-clone.git

##### cd netflix-clone

##### npm install

Após isso, dentro da pasta netflix-clone crie um arquivo com o nome de **.env** e dentro dele escreva o seguinte parametro

REACT_APP_API_KEY= ***sua key da api aqui***

caso não tenha essa key, acesse o link da documentação abaixo, siga o passo a passo e ao fim este problema estará resolvido :p

https://developers.themoviedb.org/3/getting-started/introduction

Após tudo isso, utilize o **npm run start** ou se preferir e tiver docker, **docker-compose up**
### Desafios

- [x]  deve usar [CRA] ou qualquer outro boilerplate
- [x]  deve mostrar dados recuperados de um servidor, API pública ou um JSON simulado usando uma biblioteca http
- [x] deve ser responsivo
- [x]  deve se concentrar em componentes e capacidade de reutilização de código
- [x] deve ser de código aberto em seu repositório github

## Extras

- [ ] desenhe usando figma, sketch ou outra ferramenta de design (não foi necessário)

- [ ] Suportar autenticação usando JWT e ter um sistema de login / rotas autenticadas
- [x] criar um storybook com seus componentes
- [ ] testes usando jest
- [x] deploy, boas opções podem ser Firebase, AWS ou Netlify (utilizado surge)

## O que Funciona

**Header**

- Componente desenvolvido com storybook
- Ao utilizar o scroll horizontal, o fundo passa de transparente para preto
- Navegação entre as páginas utilizando react-router-dom

**Pagina principal**

- Exibe um filme original netflix em destaque 
- Lista de filmes baseado em categorias
- Scroll semelhante ao site original
- Ao clicar em um card, exibe um snackbar no lado esquerdo inferior informando que o filme selecionado foi adicionado a lista de favoritos, caso ele já esteja isso é retornado ao usuário.

**Minha Lista**

- Exibe filmes que foram adicionados aos favoritos anteriormente, caso não haja filmes é mostrado ao usuário uma mensagem que a lista está vazia.

**Snackbar**

- Utilizado Context API.

## Problemas encontrados

* A API em alguns titulos não retorna a URL da imagem, fazendo o filme destacado ficar sem foto, é raro de acontecer mas o problema existe.
* Por algum motivo, mesmo colocando o id das categorias eles sempre retornam filmes da categoria ação, pra "burlar" esse problema cada categoria puxa dados diferentes, porém, todos são de ação.
* Nome dos filmes vêm com o seu nome de origem, alguns ficam com nomes em idiomas japones ou coreano dificultando a leitura do usuário.
* O Snackbar poderia ter sido melhor implementado, mas até então não sei como melhora-lo

## Considerações finais 

* É imensuravel o quanto eu aprendi desenvolvendo o projeto, foi incrivel minha experiencia com o material-ui e storybook e vejo que tambem me desenvolvi bastante com o typescript e utilizei as tipagens corretamente.

* Algumas funcionalidades gostaria de fazer, mas exigiria um backend, como o projeto é 100% front escolhi não desenvolver.

  **Funcionalidades caso o backend fosse desenvolvido:**

  - Sistema de login, iria existir uma página clone de login identica do Netflix, todo backend seria desenvolvido em node com graphql (talvez utilize NestJs para maior agilidade)
  - Dados de usuário iriam sair do local storage e iriam para o servidor SQL
  - Icone do usuário no header poderia ser trocado por opções semelhantes do Netflix original.
  - Ao clicar no icone de usuário no header, exibiria um menu onde será possivel fazer logout, trocar icone de usuário e alterar senha.
  - Minha lista iria passar a buscar dados do usuário pela nova API.
  - Iria existir um botão de pesquisa, onde ao digitar irá exibir séries e filmes correspondentes.
  - O botão Assistir iria exibir um modal ocupando toda a tela e uma opção de reproduzir o trailer do filme destacado.
## Imagens

**Homepage**

![homepage](https://user-images.githubusercontent.com/73081422/141693752-c28c1c9c-308e-4cfd-825f-505a1ac6cc68.gif)

**Snackbar**

![snackbar](https://user-images.githubusercontent.com/73081422/141693607-76f2eb74-9889-4311-af41-6df81fd4222d.gif)

**Scrollbar**

![scrollbar](https://user-images.githubusercontent.com/73081422/141693610-04dff223-eeb1-4e82-a9a1-c44d4cc8b785.gif)

**Minha lista**

![mylist](https://user-images.githubusercontent.com/73081422/141693625-1982556a-8e7b-445d-ad93-41971df7384d.gif)

**Versão mobile**

![mobile](https://user-images.githubusercontent.com/73081422/141693635-25ebd3c6-878e-449d-a7b9-29f769db0d59.gif)
