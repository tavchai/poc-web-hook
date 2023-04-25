pipeline {
  agent any
    
  tools {nodejs "20.0.0"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/tavchai/poc-web-hook'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
