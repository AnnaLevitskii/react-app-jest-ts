pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo 'build'
            }
        }
        stage('testing') {
            steps {
                echo 'testing'
            }
        }
    }
    post{
        always{
           echo "End ${env.BUILD_ID} on ${env.JENKINS_URL}" 
        }
        
    }
}
