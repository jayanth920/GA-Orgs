import { signIn, signUp, changePassword, signOut } from '../api/auth'

const signInRequest = () => {
  return {
    type: 'SIGNIN_REQUEST'
  }
}

const signInSuccess = response => {
  return {
    type: 'SIGNIN_SUCCESS',
    user: response.data.user,
    alert: {
      type: 'success',
      heading: 'Success',
      message: 'You\'re signed in... Enjoy!'
    }
  }
}

const signInFailure = () => {
  return {
    type: 'SIGNIN_FAILURE',
    alert: {
      type: 'danger',
      heading: 'Error',
      message: 'Something went wrong while trying to sign you in... Try again.'
    }
  }
}

export const initiateSignIn = (credentials) => {
  return dispatch => {
    dispatch(signInRequest())
    return signIn(credentials)
      .then(response => {
        dispatch(signInSuccess(response))
      })
      .catch(() => dispatch(signInFailure()))
  }
}

const signUpRequest = () => {
  return {
    type: 'SIGNUP_REQUEST'
  }
}

const signUpSuccess = response => {
  return {
    type: 'SIGNUP_SUCCESS',
    user: response.data.user,
    alert: {
      type: 'success',
      heading: 'Success',
      message: 'You signed up successfully and we logged you in!'
    }
  }
}

const signUpFailure = () => {
  return {
    type: 'SIGNUP_FAILURE',
    alert: {
      type: 'danger',
      heading: 'Error',
      message: 'Something went wrong while trying to sign you up... Try again.'
    }
  }
}

export const initiateSignUp = (credentials) => {
  return dispatch => {
    dispatch(signUpRequest())
    return signUp(credentials)
      .then(response => {
        dispatch(signInRequest())
        return signIn(credentials)
          .then(response => {
            dispatch(signUpSuccess(response))
          })
          .catch(() => dispatch(signInFailure()))
      })
      .catch(() => dispatch(signUpFailure()))
  }
}

const changePasswordRequest = () => {
  return {
    type: 'CHANGEPW_REQUEST'
  }
}

const changePasswordFailure = () => {
  return {
    type: 'CHANGEPW_FAILURE',
    alert: {
      type: 'danger',
      heading: 'Error',
      message: 'Something went wrong while trying to change your password... Try again.'
    }
  }
}

const changePasswordSuccess = () => {
  return {
    type: 'CHANGEPW_SUCCESS',
    alert: {
      type: 'success',
      heading: 'Success',
      message: 'Your password is changed!'
    }
  }
}

export const initiateChangePassword = (passwords, user) => {
  return dispatch => {
    dispatch(changePasswordRequest())
    return changePassword(passwords, user)
      .then(() => dispatch(changePasswordSuccess()))
      .catch(() => dispatch(changePasswordFailure()))
  }
}

const signOutFailure = () => {
  return {
    type: 'SIGNOUT_FAILURE',
    alert: {
      type: 'danger',
      heading: 'Error',
      message: 'Something went wrong during sign out... Try again.'
    }
  }
}

const signOutSuccess = () => {
  return {
    type: 'SIGNOUT_SUCCESS',
    alert: {
      type: 'info',
      heading: 'You\'ve signed out',
      message: 'We\'ll miss you... comeback soon'
    }
  }
}

export const initiateSignOut = (user) => {
  return dispatch => {
    return signOut(user)
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutFailure()))
  }
}
