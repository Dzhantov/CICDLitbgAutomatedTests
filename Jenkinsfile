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
                git branch: 'main', url: 'https://github.com/Dzhantov/CICDLitbgAutomatedTests.git'
            }
        }

        stage('Install Dependencies'){
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run tests'){
            steps {
                script {
                    bat 'npx playwright test'
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