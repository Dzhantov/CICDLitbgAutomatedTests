pipeline{
    agent any

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

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run tests'){
            steps {
                script {
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
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
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