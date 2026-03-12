# E-Shop Monorepo

A modern e-commerce platform built with a microservices architecture using Nx monorepo.

## 🏗️ Architecture

This project follows a microservices architecture pattern, with each service running independently and communicating through an API Gateway.

### Services

- **API Gateway** - Entry point for all client requests, routes to appropriate microservices
- **Auth Service** - Handles authentication and authorization

## 🛠️ Tech Stack

- **Monorepo**: [Nx](https://nx.dev) - Smart, fast and extensible build system
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Testing**: Jest
- **Containerization**: Docker
- **Code Quality**: ESLint, Prettier

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## 🚀 Getting Started

### Installation

```sh
npm install
```

### Development

Run all services in development mode:

```sh
npm run dev
```

Or run individual services:

```sh
# Run API Gateway
npx nx serve api-gateway

# Run Auth Service
npx nx serve auth-service
```

### Building

Build all services:

```sh
npx nx run-many --target=build --all
```

Build a specific service:

```sh
npx nx build api-gateway
npx nx build auth-service
```

## 🧪 Testing

Run tests for all projects:

```sh
npx nx run-many --target=test --all
```

Run tests for a specific project:

```sh
npx nx test auth-service
npx nx test auth-service-e2e
```

## 🐳 Docker

Each service includes a Dockerfile for containerized deployment:

```sh
# Build Docker image for a service
docker build -t api-gateway ./apps/api-gateway
docker build -t auth-service ./apps/auth-service
```

## 📁 Project Structure

```
eshop/
├── apps/
│   ├── api-gateway/          # API Gateway service
│   ├── auth-service/          # Authentication service
│   └── auth-service-e2e/      # E2E tests for auth service
├── nx.json                    # Nx workspace configuration
├── package.json               # Root package.json
└── tsconfig.base.json         # Base TypeScript configuration
```

## 📝 Available Commands

- `npm run dev` - Start all services in development mode
- `npx nx graph` - Visualize the project dependency graph
- `npx nx show project <project-name>` - Show available targets for a project
- `npx nx lint <project-name>` - Lint a specific project
- `npx nx test <project-name>` - Run tests for a specific project

## 🔗 Useful Links

- [Nx Documentation](https://nx.dev)
- [Nx Plugin Registry](https://nx.dev/plugin-registry)

## 📄 License

MIT
