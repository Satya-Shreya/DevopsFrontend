pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Name of the NodeJS installation in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'  // Installing project dependencies
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // Build the React project
            }
        }

        stage('Post Actions') {
            steps {
                cleanWs()  // Clean workspace after build
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
