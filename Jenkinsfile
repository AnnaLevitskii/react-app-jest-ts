def changeCount = 0

pipeline {
    agent any
    parameters {
        booleanParam(name: 'isBuild', defaultValue: false, description: '')
    }
    stages {
        stage('check') {
                steps {
                    script {
                    changeCount = currentBuild.changeSets.size()
                }
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo "${changeCount} commit(s) since last buid."
            }
        }
        stage('build') {
            when{
                expression{
                    params.isBuild
                }
            }
            steps {
            echo "build"
            nodejs('NodeJs_22'){
                    sh 'npm run build'
                }
            }
        }
        stage('testing') {
            steps {
                echo "testing"
                
                nodejs('NodeJs_22'){
                    sh 'npm install @testing-library/jest-dom'
                }
                nodejs('NodeJs_22'){
                    sh 'npm test'
                }
                
            }
        }
    }
    post{
        always{
           echo "End ${env.BUILD_ID} on ${env.JENKINS_URL}  ${currentBuild.result}"         
            script {
                if (changeCount > 0) {
                    emailext (
                        attachLog: true,
                        compressLog: true,
                        to: 'anna_SF3_QA@BSltd.com;',
                        subject: "Application - Build # ${BUILD_NUMBER}",
                        body: "Status: ${currentBuild.currentResult}\nBuild number: ${env.BUILD_NUMBER}\nTo see log details open the attached file or click on the link: ${env.BUILD_URL}"
                    )
                } else {
                    emailext (
                        attachLog: false,
                        compressLog: false,
                        to: 'anna_SF3_QA@BSltd.com;',
                        subject: "Application - Build # ${BUILD_NUMBER}",
                        body: "There are no changes pushed since last build."
                    )
                }
            }
            }
        
    }
}
