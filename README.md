Documentação do Frontend Vue.js para Sistema de Transferências
Este frontend foi desenvolvido utilizando Vue.js para fornecer uma interface de usuário para o sistema de agendamento de transferências bancárias. Ele se comunica com um backend Spring Boot para realizar as operações de agendamento e listagem de transferências.

Tecnologias Utilizadas
Vue.js: Framework JavaScript para construção de interfaces de usuário reativas.
Vue CLI: Ferramenta de linha de comando para desenvolvimento de aplicações Vue.js.
Axios: Biblioteca JavaScript para fazer requisições HTTP para o backend.
Moment.js: Biblioteca JavaScript para manipulação de datas e horários.
NPM: Gerenciador de pacotes para JavaScript.
Funcionalidades
Agendamento de Transferências: Permite agendar transferências preenchendo um formulário com as informações necessárias (conta de origem, conta de destino, valor e data da transferência).
Exibição de Mensagens: Exibe mensagens de sucesso ou erro após o agendamento da transferência.
Arquitetura
O frontend é desenvolvido utilizando o padrão de componentes do Vue.js. Cada componente representa uma parte da interface de usuário e é responsável por sua própria lógica e apresentação.

Configuração
Dependências: As dependências do projeto são gerenciadas pelo NPM e estão listadas no arquivo package.json.
Porta: A aplicação frontend roda na porta 8081 por padrão.
Como executar
Clone o repositório do frontend do GitHub.
Abra o terminal na pasta raiz do projeto.
Instale as dependências com o comando npm install.
Inicie o servidor de desenvolvimento com o comando npm run serve --port 8081.
Observações
Este frontend foi desenvolvido para fins de demonstração e pode ser adaptado para atender às necessidades específicas do seu projeto.
A comunicação com o backend é feita através de requisições HTTP para a API REST do backend Spring Boot.
