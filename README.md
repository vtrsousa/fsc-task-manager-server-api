# Full Stack Club - API

API REST desenvolvida durante o curso de React do Full Stack Club.

## 📋 Sobre o Projeto

Este projeto é uma API REST simples que utiliza JSON Server para simular um backend, fornecendo endpoints para gerenciamento de tarefas.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **json-server** (v0.17.4) - Servidor REST API baseado em JSON

## 📦 Padrões de Projeto

- **REST API** - Arquitetura RESTful para comunicação HTTP
- **JSON Database** - Banco de dados baseado em arquivo JSON (`db.json`)
- **Middleware Pattern** - Uso de middlewares do json-server para configuração

## 🚀 Setup e Configuração

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até o diretório do projeto:
```bash
cd fsc-app-api
```

2. Instale as dependências:
```bash
npm install
```

### Executando o Servidor

Execute o servidor usando Node.js:
```bash
node server.js
```

O servidor estará disponível em `http://localhost:3000`

### Endpoints

A API está configurada com um rewriter que mapeia rotas `/api/*` para `/*`. 

Exemplo de endpoints disponíveis:
- `GET /api/tasks` - Lista todas as tarefas
- `GET /api/tasks/:id` - Busca uma tarefa específica
- `POST /api/tasks` - Cria uma nova tarefa
- `PUT /api/tasks/:id` - Atualiza uma tarefa
- `DELETE /api/tasks/:id` - Remove uma tarefa

### Estrutura de Dados

Os dados são armazenados no arquivo `db.json` e seguem a estrutura:
```json
{
  "tasks": [
    {
      "id": "uuid",
      "title": "string",
      "description": "string",
      "time": "morning|afternoon|evening",
      "status": "not_started|in_progress|done"
    }
  ]
}
```

