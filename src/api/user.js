import config from './config'
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'

export default {
  login (user, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })
    const cognitoUser = new CognitoUser({ Username: user, Pool: userPool })
    const authenticationData = { Username: user, Password: password }
    const authenticationDetails = new AuthenticationDetails(authenticationData)

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(cognitoUser),
        onFailure: err => reject(err)
      })
    })
  },

  signup (data) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })

    const attributes = [
      new CognitoUserAttribute({ Name: 'name', Value: data.name }),
      new CognitoUserAttribute({ Name: 'address', Value: data.address })
    ]

    return new Promise((resolve, reject) => {
      userPool.signUp(data.user, data.password, attributes, null, (err, result) => {
        if (err) {
          reject(err)
          return
        }

        resolve(result.user)
      })
    })
  },

  verify (user, code) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })
    const cognitoUser = new CognitoUser({ Username: user, Pool: userPool })

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          reject(err)
          return
        }

        resolve(result)
      })
    })
  },

  signout (user) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })
    const cognitoUser = new CognitoUser({ Username: user, Pool: userPool })

    cognitoUser.signOut()
  }
}
