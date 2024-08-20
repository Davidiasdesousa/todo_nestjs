# Briefing do Projeto: API de Gerenciamento de Tarefas

## Nome do Projeto: task-management-api

### Descrição Geral:
Este projeto trata-se de uma API desenvolvida em Node.js utilizando o framework NestJS, voltada para o gerenciamento de tarefas. A API tem como objetivo principal permitir a criação, atualização, deleção e consulta de tarefas, com suporte a funcionalidades de autenticação, validação de dados, e persistência de informações em banco de dados.

### Tecnologias Utilizadas:

- **NestJS:** Um framework progressivo para construir aplicações eficientes e escaláveis em Node.js. O projeto utiliza a versão 10.0.0, incluindo módulos principais como `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, e outros para configuração e infraestrutura.
  
- ### Autenticação e Segurança:
  - **@nestjs/jwt:** Utilizado para implementar autenticação baseada em tokens JWT, proporcionando segurança nas operações da API.
  - **bcrypt:** Utilizado para hash de senhas, garantindo que as credenciais dos usuários sejam armazenadas de forma segura.

- ### Configurações:
  - **@nestjs/config:** Utilizado para gerenciar as configurações da aplicação através de variáveis de ambiente, facilitando a configuração e manutenção do projeto.
  - **dotenv:** Carrega variáveis de ambiente de um arquivo `.env` para `process.env`, permitindo uma configuração mais flexível do ambiente de execução.

- ### Banco de Dados:
  - **TypeORM:** O TypeORM é utilizado como ORM (Object-Relational Mapping) para interagir com o banco de dados. A versão 0.3.20 está em uso, juntamente com o suporte ao PostgreSQL (`pg`) e SQLite (`sqlite3`).
  
- ### Validação e Transformação de Dados:
  - **class-transformer e class-validator:** Essas bibliotecas são utilizadas para validação e transformação de objetos, garantindo que os dados recebidos na API estejam no formato esperado antes de serem processados.
  - **class-transform:** Uma extensão para `class-transformer`, para transformar classes em objetos.

- ### Outras Dependências:
  - **uuid:** Uma alternativa ao `nanoid`, utilizada para a geração de identificadores únicos.

### Funcionalidades Principais:
1. **Gerenciamento de Tarefas:** CRUD completo (Create, Read, Update, Delete) para tarefas, permitindo a organização eficiente de atividades.
2. **Autenticação e Autorização:** Implementação de JWT para proteger as rotas da API, garantindo que apenas usuários autenticados possam realizar operações.
3. **Validação de Dados:** Uso de validação robusta para assegurar a integridade dos dados recebidos e enviados.
4. **Persistência de Dados:** Suporte para banco de dados (PostgreSQL) para armazenamento das tarefas.

 - ### Público-Alvo:
Desenvolvedores e empresas que buscam uma solução robusta e escalável para gerenciamento de tarefas, com a possibilidade de expansão e personalização de acordo com necessidades específicas.

Este projeto é ideal para ser utilizado como backend em sistemas de gerenciamento de projetos, aplicativos de produtividade ou qualquer aplicação que exija um sistema confiável de tarefas.
