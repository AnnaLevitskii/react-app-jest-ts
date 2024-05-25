def changeCount = 0

pipeline {
    agent any
    stages {
        // stage('check') {
                
        //         steps {
        //             script {
        //             changeCount = currentBuild.changeSets.size()
        //         }
        //         echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
        //         echo "${changeCount} commit(s) since last buid."
        //     }
        // }
        // stage('build') {
        //     when{
        //         expression{
        //              CODE_CHANGES > 0
        //         }
        //     }
        //     steps {
        //         echo "build step"
        //     }
        // }
        stage('testing') {
            steps {
                echo "testing"
                nodejs('NodeJs_22'){
                    sh 'npm start'
                }
                nodejs('NodeJs_22'){
                    sh 'npm test'
                }
                nodejs('NodeJs_22'){
                    sh 'a'
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
