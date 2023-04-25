pipeline {
  agent any
    
  tools {nodejs "18.7.0"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/tavchai/poc-web-hook.git'
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
