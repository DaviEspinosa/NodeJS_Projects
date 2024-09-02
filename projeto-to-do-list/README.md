### **Projeto:**

Sistema Web de Gerenciamento de Tarefas

### **Descrição do Projeto:**

Sistema Web de Gerenciamento de Tarefas onde usuários podem controlar melhor sua rotina, deixando-a mais organizada

**Objetivos SMART**

- **Específico**:
    
    Desenvolver uma aplicação web de To Do List com funcionalidades básicas de CRUD (Create, Read, Update, Delete) para tarefas, autenticação de usuários, e armazenamento de dados.
    
- **Mensurável:**
   - Tela de login e registro.
   - Tela principal com a lista de tarefas.
   - Funcionalidades para adicionar, editar, remover e   marcar tarefas como concluídas.
   - Sistema de autenticação usando JWT.
   - Persistência de dados utilizando MongoDB.
   - Implementação de uma interface amigável e responsiva com React.
- **Atingível:**
    O projeto será desenvolvido utilizando frameworks e ferramentas amplamente utilizados e
    documentados, com bibliotecas e frameworks já estabelecidos, como React para
    frontend e Express para backend.
- **Relevante**:
    A aplicação ajudará os colaboradores a gerenciar suas tarefas de maneira
    eficiente e segura.
- **Temporal:**
    
    **Projeto será concluído em 8 semanas, seguindo este cronograma:**
    
    - Planejamento e definição de requisitos: 1 semana
    - Desenvolvimento do backend (Node.js e MongoDB): 2 semanas
    - Desenvolvimento do frontend (React): 3 semanas
    - Integração e testes: 1 semana
    - Documentação e entrega: 1 semana

### **Planejamento do Projeto:**
<!-- - **Cronograma:**

| Etapa | Descrição | Tempo Estimado |
| --- | --- | --- |
| Planejamento e definição de requisitos | Levantamento de requisitos, escopo, diagramas, objetivos e recursos | 1 semana |
| Desenvolvimento do backend | Configuração do ambiente, criação de models e controllers, implementação de funcionalidades backend (Node.js e MongoDB) | 2 semanas |
| Desenvolvimento do frontend | Implementação da interface do usuário e funcionalidades frontend (React) | 3 semanas |
| Integração e testes | Integração entre frontend e backend, testes funcionais, correção de bugs | 1 semana |
| Documentação e entrega | Revisão final, documentação técnica e de usuário, preparação para entrega | 1 semana | -->
- **Recursos:**
    - **Equipe de Desenvolvimento:**
    • Desenvolvedor Frontend: Especializado em React e design responsivo.
    • Desenvolvedor Backend: Especializado em Node.js, Express e MongoDB.
    • UX/UI Designer: Responsável pela experiência do usuário e design da interface.
    - **Infraestrutura:**
    • Servidor Cloud: para hospedagem.
    • Banco de Dados: MongoDB para armazenamento de dados.
    • Sistema de Controle de Versão: Git com GitHub para colaboração e versionamento.
    - **Ferramentas de Desenvolvimento:**
    • IDE: Visual Studio Code com extensões para Node.js e React.
    • Gerenciamento de Projeto: Jira para tarefas e sprints.
    • Prototipagem: Figma para design de interface e prototipagem.
    - **Tecnologias:**
    • Frontend: React.js com hooks e context API.
    • Backend: Node.js com Express.js e outras bibliotecas.
    • Banco de Dados: MongoDB.
    • Autenticação: JWT (JSON Web Tokens)
    • Requisições HTTP: Axios.

### **Análise de Riscos:**

**Risco 1:** Atrasos no desenvolvimento devido a mudanças nos requisitos ou problemas técnicos.

**Solução:** Planejamento detalhado e flexível, comunicação constante com a equipe e gerenciamento ágil. Desenvolvimento de Sprints ao longo da semana.

**Risco 2:** Dificuldades na integração entre o frontend e o backend.

**Solução:** Estabelecer padrões de API claros desde o início, realizar testes de integração regularmente e manter documentação atualizada da API.

**Risco 3:** Falhas de segurança relacionadas à implementação incorreta do JWT (JSON Web Token).

**Solução:** Implementar boas práticas de segurança para JWT, como uso de chaves secretas fortes, definição adequada de expiração dos tokens, e validação rigorosa no backend. Realizar auditorias de segurança regulares e manter-se atualizado sobre vulnerabilidades conhecidas em bibliotecas JWT.


### **Diagramas**

**Diagrama de Classe:**
![Diagrama](/diagramas/diagramaClasse.png)

**Diagrama de Uso:**
![Diagrama](/diagramas/diagramaFluxo.png)