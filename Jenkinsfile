pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "siniiaja/siniiaja:latest"
        DOCKER_CONTAINER = "siniiaja_project"
        PORT_MAPPING = "8089:80"
    }
    
    stages {
        stage("Clone Repository") {
            steps {
                // Clean workspace before cloning
                cleanWs()
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/master']], 
                    userRemoteConfigs: [[url: 'https://github.com/FallAPI/Project4.git']]
                ])
            }
        }
        
        stage("Build Docker Image") {
            steps {
                script {
                    bat "docker build -t ${env.DOCKER_IMAGE} ."
                }
            }
        }
        
        stage("Clean Previous Container") {
            steps {
                script {
                    // Using Windows batch commands
                    bat """
                        docker ps -q --filter name=${env.DOCKER_CONTAINER} && docker stop ${env.DOCKER_CONTAINER} || exit 0
                        docker ps -aq --filter name=${env.DOCKER_CONTAINER} && docker rm ${env.DOCKER_CONTAINER} || exit 0
                    """
                }
            }
        }
        
        stage("Run Docker Container") {
            steps {
                script {
                    bat "docker run -d --name ${env.DOCKER_CONTAINER} -p ${env.PORT_MAPPING} ${env.DOCKER_IMAGE}"
                }
            }
        }
    }
    
    post {
        always {
            // Clean up old images
            bat "docker image prune -f"
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded! Website deployed.'
        }
    }
}