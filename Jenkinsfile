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
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }
        
        stage("Clean Previous Container") {
            steps {
                script {
                    sh '''
                        docker ps -q --filter name=${DOCKER_CONTAINER} | grep -q . && docker stop ${DOCKER_CONTAINER} || true
                        docker ps -aq --filter name=${DOCKER_CONTAINER} | grep -q . && docker rm ${DOCKER_CONTAINER} || true
                    '''
                }
            }
        }
        
        stage("Run Docker Container") {
            steps {
                script {
                    docker.image(env.DOCKER_IMAGE).run("-d --name ${env.DOCKER_CONTAINER} -p ${env.PORT_MAPPING}")
                }
            }
        }
    }
    
    post {
        always {
            // Clean up old images
            sh "docker image prune -f"
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded! Website deployed.'
        }
    }
}