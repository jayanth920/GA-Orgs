export const alerts = (state = [], action) => {
  switch (action.type) {
  case 'SIGNUP_FAILURE':
  case 'SIGNUP_SUCCESS':
  case 'SIGNIN_SUCCESS':
  case 'SIGNIN_FAILURE':
  case 'CHANGEPW_SUCCESS':
  case 'CHANGEPW_FAILURE':
  case 'SIGNOUT_SUCCESS':
  case 'SIGNOUT_FAILURE':
    return [...state, action.alert]
  default:
    return state
  }
}
