def COLOR_MAP = [
  'SUCCESS': 'good',
  'FAILURE': 'danger',
]

pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git branch: 'master', credentialsId: 'ee769ca6-370e-4a40-ae87-23f26eff3018', url: 'https://github.com/tavchai/poc-web-hook'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }   
    
  }

    post{
        always{
            slackSend( channel: "#test-jenkins", color: COLOR_MAP[currentBuild.currentResult], message: "*${currentBuild.currentResult}* \n LOG -> http://localhost:8080/job/${env.JOB_NAME}/${env.BUILD_NUMBER}/console")
        }
    }
}
