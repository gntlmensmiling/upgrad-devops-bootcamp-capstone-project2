# Node.js Application

This project contains a simple Node.js REST API application.

## Features
- Basic CRUD operations for users
- Dockerized application
- Kubernetes deployment configuration

## Setup Instructions

### Prerequisites
- Node.js
- Docker
- Kubernetes (Minikube or any Kubernetes cluster)

### Running the Application
1. Clone the repository
2. Navigate to the project directory
3. Build the Docker image:
   ```bash
   docker build -t nodejs-app .
   ```
4. Run the Docker container:
   ```bash
   docker run -p 3000:3000 nodejs-app
   ```
5. Access the API at `http://localhost:3000`

### Deploying to Kubernetes
1. Apply the deployment and service configurations:
   ```bash
   kubectl apply -f k8s_deployment.yaml
   kubectl apply -f k8s_service.yaml
   ```
2. Access the application using the NodePort.

### Monitoring
- Use Prometheus and Grafana for monitoring setup (additional setup required).