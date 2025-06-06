pipeline{
    agent any

    // environment {
    //     NODE_VERSION = '18.x'
    // }

    // tools{
    //     nodejs "NodeJS-${NODE_VERSION}"
    // }

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

        stage('Start application and run tests'){
            steps {
                script {
                    
                    // Wait for the application to start
                    bat 'wait-on http://localhost:8080'
                    // Run Playwright tests
                    bat 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            script {
                // Archive test results
                junit 'test-results/results.xml'
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