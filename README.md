# 📋 Desafio Técnico - Lista de Usuários (Nobis)

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor na Nobis. A proposta consiste em criar uma aplicação que consuma dados de uma API pública e exiba uma lista de usuários com funcionalidades adicionais de busca e visualização de detalhes.

## 🚀 Tecnologias utilizadas

- **React.js**
- **SCSS (CSS modularizado)**
- **Axios** para requisições HTTP
- **React Icons** para ícones na interface

## 🧩 Funcionalidades

- ✅ Listagem de usuários (nome, e-mail e telefone)
- ✅ Campo de busca para filtrar usuários por nome (case insensitive)
- ✅ Ao clicar no nome do usuário, exibe-se um painel de detalhes com informações adicionais (username, website, empresa, endereço etc.)
- ✅ Alternância de tema claro/escuro
- ✅ Interface responsiva (com adaptação de layout para telas menores)
- ✅ Barra de pesquisa realocada para manter boa usabilidade em diferentes tamanhos de tela
- ✅ Scroll horizontal aplicado apenas à tabela, evitando poluição visual

## 🎯 Estratégias de resolução

- **Componentização**: O projeto foi dividido em componentes reutilizáveis para manter o código limpo e organizado (`SearchBar`, `UserTable` e `Home`).
- **Estado global no componente principal (`Home`)**: As funções de filtro, seleção de usuário e alternância de tema foram controladas a partir do componente central, garantindo fácil manutenção.
- **Responsividade**: Foram utilizadas media queries no SCSS para adaptar o layout em diferentes tamanhos de tela, como mover o campo de busca para baixo em telas menores.
- **Tema escuro/claro**: Utilizei uma classe `dark` no `body` e estilos condicionais para alternar entre os temas
- **Boa legibilidade e organização visual**: Ícones foram adicionados para reforçar visualmente a informação (ex: ícone de usuário na tabela), e os espaçamentos foram cuidadosamente ajustados.
- **Usabilidade**: A expansão de detalhes ocorre inline na tabela, sem redirecionar ou carregar páginas extras, mantendo a experiência fluida.

## ▶️ Como executar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/zPookiePie/projeto-lista-usuarios.git
```
2. Acesse a pasta do projeto:
```bash
cd projeto-lista-usuarios
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Acesse em: http://localhost:3000

#
![lista-usuarios](https://github.com/user-attachments/assets/ffc2b5a5-6ac0-448b-94c1-6bb53c576c32)
#
