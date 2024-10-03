# WorkChrono
Monitore e organize horas trabalhadas em projetos, de forma eficiente

# WorkChrono

WorkChrono é uma aplicação web projetada para ajudar você a monitorar e gerenciar suas horas trabalhadas em diferentes projetos. Com uma interface intuitiva e relatórios detalhados, você pode acompanhar seu tempo de trabalho diário, semanal e mensal, garantindo uma visão clara da sua produtividade.

## Funcionalidades

- **Rastreamento de horas**: Inicie e pause a contagem de horas de trabalho por projeto.
- **Troca de projetos**: Mude de projeto e continue rastreando o tempo trabalhado sem complicações.
- **Relatórios**: Veja resumos diários, semanais e mensais das horas trabalhadas.
- **Gerenciamento de projetos**: Adicione e selecione projetos para rastrear seu progresso individualmente.
- **Autenticação**: Login seguro com autenticação JWT.

## Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Day.js](https://day.js.org/)

### Backend
- [NestJS](https://nestjs.com/)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
  
## Instalação e Configuração

### Requisitos
- Node.js
- PostgreSQL (ou SQLite)
- Git

### Passos

1. Clone o repositório:
     ```bash
    git clone https://github.com/Radsonb/WorkChrono.git
   
2. Navegue até a pasta do frontend e instale as dependências:
   ```bash
    cd frontend
    npm install
   
3. Para o backend, navegue até a pasta correspondente e instale as dependências:
    ```bash
    cd backend
    npm install
   
4. Configure o banco de dados no arquivo .env na pasta backend:
    ```bash
    DATABASE_URL=mysql://user:password@localhost:5432/workchrono

5. Execute o backend:
    ```bash
    npm run start:dev
    
6. Execute o frontend:
    ```bash
    npm run dev

Uso
- Acesse o frontend em http://localhost:3000.
- Inicie uma nova sessão de trabalho ao selecionar um projeto.
- Veja os relatórios na seção de estatísticas e troque facilmente entre projetos.
