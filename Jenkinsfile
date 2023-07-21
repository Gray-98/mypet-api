pipeline {
  agent any

  environment {
    IMAGE_API_NAME = "mypet_api:latest"
  }

  stages {
    stage("Build Api") {
      steps {
          sh """
            docker build -t $IMAGE_API_NAME -f ./Dockerfile .
          """
      }
    }

    stage("Deploy") {
      steps {
          sh """
            docker remove mypet-api
            docker run -d -p 8080:8080 --name mypet-api $IMAGE_API_NAME
          """
      }
    }
  }
}