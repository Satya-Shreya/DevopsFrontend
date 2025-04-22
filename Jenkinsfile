pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'  // Refer to the NodeJS tool name configured above
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Use the installed Node.js tool
                    sh '${NODE_HOME}/bin/npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    // Build the React project
                    sh '${NODE_HOME}/bin/npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests (optional)
                    sh '${NODE_HOME}/bin/npm test'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
