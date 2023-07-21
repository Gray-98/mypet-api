pipeline {
  agent any

  environment {
    IMAGE_API_NAME = "mypet_api:latest"
  }

  stages {
    stage("Build Api") {
      agent docker
      steps {
          sh """
            docker build -t $IMAGE_API_NAME -f ./Dockerfile .
          """
      }
    }

    stage("Deploy") {
      agent docker
      steps {
          sh """
            docker run -d -p 8080:8080 --name mypet-api mypet-api:latest
          """
      }
    }
  }
}