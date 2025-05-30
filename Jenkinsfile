pipeline{
    agent any

    environment {
        NODE_VERSION = '18.x'
    }

    tools{
        nodejs "NodeJS-${NODE_VERSION}"
    }

    stages{
        stage('Checkout'){
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies'){
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run tests'){
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }

    post {
        always {
            script {
                // Archive test results
                junit '**/test-results.xml'
            }
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}