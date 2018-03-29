pipeline {
  agent {
    dockerfile {
      label 'vetsgov-general-purpose'
    }
  }
  environment {
    BABEL_CACHE_PATH = '${env.WORKSPACE}'
  }

  stages {
    stage('setup') {
      steps {
        sh 'yarn install'
      }
    }

    stage('lint and test') {
      steps {
        parallel (
          'lint': {
            sh 'npm run lint:js'
          },
          'test': {
            sh 'npm run test'
          }
        )
      }
    }

    stage('build and publish') {
      when { branch 'master' }
      steps {
        sh 'git config --global user.email james.kassemi+vabot@adhocteam.us'
        sh 'git config --global user.name va-bot'
        sh 'git config --global credential.helper "/bin/bash ' + env.WORKSPACE + '/scripts/credential-helper.sh"'
        withCredentials([[
          $class: 'UsernamePasswordMultiBinding',
          credentialsId: 'va-bot',
          usernameVariable: 'GIT_USERNAME',
          passwordVariable: 'GIT_PASSWORD'
        ]]) {
          sh 'NODE_ENV=production npm run site'
        }
      }
    }
  }
}
