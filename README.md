# Automação de Testes de API para a API Fake Rest API com Cypress
🚀 Este projeto tem como objetivo demonstrar a automação de testes de API para a API Restful, utilizando o framework Cypress. Os testes cobrem funcionalidades essenciais como:

- GET/api/v1/Books;
- GET/api/v1/Books/{id};
- POST/api/v1/Books;
- PUT/api/v1/Books/{id};
- DELETE/api/v1/Books/{id};

URL da API utilizada: https://fakerestapi.azurewebsites.net/index.html

💻 Tecnologias Utilizadas
Cypress: Framework de automação de testes para web e API.
Node.js: Ambiente de execução JavaScript (necessário para o Cypress e npm).
npm / Yarn: Gerenciadores de pacotes para o Node.js.

🛠️ Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js: Versão 14 ou superior (recomendado instalar via nvm ou Node.js.org).
npm (gerenciador de pacotes do Node.js, geralmente vem com o Node.js) ou Yarn.

⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar o projeto em sua máquina:

Clone o Repositório: Abra seu terminal ou prompt de comando e execute:

git clone SEU_LINK_DO_REPOSITORIO  # Substitua pelo link do seu repositório 
Instale as Dependências: Na pasta raiz do projeto, instale todas as dependências listadas no package.json:

npm install

Ou, se você usa Yarn:

#yarn install

Isso criará a pasta node_modules/.

 .gitignore (Garantindo a Segurança): Certifique-se de que seu arquivo .gitignore (também na raiz do projeto) contenha as seguintes linhas para evitar que o .env e outras pastas geradas sejam enviados para o GitHub:

# Variáveis de ambiente
.env

# Dependências do Node.js
node_modules/

Com isso, suas credenciais permanecerão seguras apenas em sua máquina local.

🚀 Executando os Testes
Após a configuração, você pode executar os testes de duas maneiras:

Modo Interativo (Cypress Test Runner): Este modo abre uma interface gráfica do Cypress onde você pode ver seus testes, executá-los passo a passo e depurar.

npx cypress open
Ao abrir, clique no arquivo de teste (board_management.cy.js ou card_management.cy.js) na aba "Specs" para executá-lo.

Modo Headless (Terminal): Este modo executa os testes diretamente no terminal, sem abrir a interface gráfica. É ideal para integração contínua (CI/CD).

npx cypress run

Os resultados serão exibidos no terminal.


🙋‍♂️ Autora
Ana Paula Lange/ @anapaulalange

